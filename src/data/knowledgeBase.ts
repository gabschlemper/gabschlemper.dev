import type { Locale } from "../lib/locale";
import * as en from "./knowledge-base";

export type KnowledgeBaseModule = typeof en;

/**
 * English is a plain synchronous re-export — it's already what every current
 * visitor gets, so adding a second locale must not cost it anything: no
 * dynamic import, no Suspense wait, byte-for-byte the same bundle as before.
 *
 * pt-BR is loaded on demand via a dynamic `import()`, which Vite compiles to
 * its own chunk — an English visitor's bundle never contains the pt-BR data
 * at all. `readKnowledgeBase` is a Suspense resource (throws the in-flight
 * promise once, caches the resolved module after) so callers just read it
 * like a value; wrap the tree in a <Suspense> boundary once, near the router
 * root, not per page.
 */
const ptLoader = () =>
  import("./knowledge-base.pt") as unknown as Promise<KnowledgeBaseModule>;

let ptCache: KnowledgeBaseModule | Promise<KnowledgeBaseModule> | undefined;

export function readKnowledgeBase(locale: Locale): KnowledgeBaseModule {
  if (locale === "en") return en;

  if (ptCache && !(ptCache instanceof Promise)) return ptCache;

  const pending =
    ptCache instanceof Promise
      ? ptCache
      : ptLoader().then((mod) => {
          ptCache = mod;
          return mod;
        });
  ptCache = pending;
  throw pending;
}

/** Resolves the pt-BR module ahead of time and awaits it — used by the
 *  build-time prerender script, which calls renderToStaticMarkup
 *  synchronously and so can't rely on readKnowledgeBase's Suspense-throw to
 *  eventually resolve mid-render. Not used by the client, which suspends
 *  instead. */
export async function preloadKnowledgeBase(locale: Locale): Promise<void> {
  if (locale === "en") return;
  await ptLoader().then((mod) => {
    ptCache = mod;
  });
}
