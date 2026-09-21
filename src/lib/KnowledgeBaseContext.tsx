import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { localeFromPath, stripLocale } from "./locale";
import { loadKnowledgeBase, peekKnowledgeBase } from "../data/knowledgeBase";
import { KnowledgeBaseCtx, type KnowledgeBaseState } from "./knowledgeBaseCtx";

const RELOAD_FLAG = "kb-load-reloaded";

/**
 * Loads the active locale's data with plain state + effect, not a
 * Suspense-throw resource — see src/data/knowledgeBase.ts for why.
 *
 * If the locale's module is already available (English always; pt-BR after
 * its first load, or after the prerender script's explicit preload) it's
 * used synchronously in the same render — no effect, no blank frame. Only
 * the very first switch to /pt/ in a page load has to wait for the chunk,
 * during which nothing renders (typically a handful of milliseconds).
 */
export function KnowledgeBaseProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const locale = localeFromPath(pathname);
  const cached = peekKnowledgeBase(locale);
  const [loaded, setLoaded] = useState<KnowledgeBaseState | null>(null);

  useEffect(() => {
    if (cached) return;
    let cancelled = false;
    loadKnowledgeBase(locale).then(
      (kb) => {
        try {
          sessionStorage.removeItem(RELOAD_FLAG);
        } catch {
          /* storage blocked — the flag only guards a reload loop */
        }
        if (!cancelled) setLoaded({ kb, locale });
      },
      () => {
        if (cancelled) return;
        // The chunk failed to load — typically a stale tab whose hashed
        // filename a newer deploy replaced. One hard reload fetches the
        // current index.html and chunk names; if that also fails, fall back
        // to the English page rather than leaving the screen blank.
        try {
          if (!sessionStorage.getItem(RELOAD_FLAG)) {
            sessionStorage.setItem(RELOAD_FLAG, "1");
            window.location.reload();
            return;
          }
        } catch {
          /* storage blocked — skip straight to the fallback */
        }
        navigate(stripLocale(pathname), { replace: true });
      },
    );
    return () => {
      cancelled = true;
    };
  }, [locale, cached, navigate, pathname]);

  const value = useMemo<KnowledgeBaseState | null>(() => {
    if (cached) return { kb: cached, locale };
    return loaded && loaded.locale === locale ? loaded : null;
  }, [cached, loaded, locale]);

  if (!value) return null;

  return <KnowledgeBaseCtx.Provider value={value}>{children}</KnowledgeBaseCtx.Provider>;
}
