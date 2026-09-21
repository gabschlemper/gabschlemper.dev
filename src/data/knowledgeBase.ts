import type { Locale } from "../lib/locale";
import * as en from "./knowledge-base";

export type KnowledgeBaseModule = typeof en;

/**
 * English is a plain synchronous re-export — it's already what every current
 * visitor gets, so adding a second locale must not cost it anything: no
 * dynamic import, byte-for-byte the same bundle as before.
 *
 * pt-BR is loaded on demand via a dynamic `import()`, which Vite compiles to
 * its own chunk — an English visitor's bundle never contains the pt-BR data
 * at all. Loading is explicit (a promise you await, cached after the first
 * call) rather than a Suspense-throw resource: a thrown-promise resource
 * only reliably recovers on an update wrapped in `startTransition` (or the
 * very first render of a fresh root); a plain client-side route change via
 * react-router's `<Link>` is neither, so the boundary could suspend and
 * never automatically retry — the on-disk symptom was the whole app going
 * blank on the first switch to /pt/, fixed only by a manual reload.
 * KnowledgeBaseContext drives this with ordinary state instead.
 */
const ptLoader = () =>
  import("./knowledge-base.pt") as unknown as Promise<KnowledgeBaseModule>;

let ptCache: KnowledgeBaseModule | Promise<KnowledgeBaseModule> | undefined;

export function loadKnowledgeBase(locale: Locale): Promise<KnowledgeBaseModule> {
  if (locale === "en") return Promise.resolve(en);

  if (ptCache && !(ptCache instanceof Promise)) return Promise.resolve(ptCache);

  const pending =
    ptCache instanceof Promise
      ? ptCache
      : ptLoader()
          .then((mod) => {
            ptCache = mod;
            return mod;
          })
          .catch((error) => {
            // Don't cache a failed load — a later attempt must be able to retry.
            ptCache = undefined;
            throw error;
          });
  ptCache = pending;
  return pending;
}

/** The locale's module if it's available right now (English always; pt-BR
 *  once loaded), else undefined. Never throws, never starts a load. */
export function peekKnowledgeBase(locale: Locale): KnowledgeBaseModule | undefined {
  if (locale === "en") return en;
  return ptCache && !(ptCache instanceof Promise) ? ptCache : undefined;
}

/** Synchronous read, valid only once `loadKnowledgeBase(locale)` has
 *  resolved at least once — used by the build-time prerender script, which
 *  calls renderToStaticMarkup synchronously after explicitly awaiting the
 *  load (see preloadKnowledgeBase). Never call this from client code. */
export function readKnowledgeBaseSync(locale: Locale): KnowledgeBaseModule {
  if (locale === "en") return en;
  if (!ptCache || ptCache instanceof Promise) {
    throw new Error(
      "pt-BR knowledge base read before it finished loading — call preloadKnowledgeBase('pt') and await it first.",
    );
  }
  return ptCache;
}

/** Awaits the pt-BR module ahead of time — used by the build-time prerender
 *  script before it renders any /pt/* route. */
export async function preloadKnowledgeBase(locale: Locale): Promise<void> {
  await loadKnowledgeBase(locale);
}
