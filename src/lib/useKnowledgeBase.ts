import { useLocation } from "react-router-dom";
import { readKnowledgeBase, type KnowledgeBaseModule } from "../data/knowledgeBase";
import { localeFromPath, type Locale } from "./locale";
import { stringsFor, type Strings } from "./strings";

export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname);
}

export function useStrings(): Strings {
  return stringsFor(useLocale());
}

/** Suspends (briefly) the first time a route under /pt/ renders, while its
 *  data chunk loads; resolves instantly on every render after. English never
 *  suspends — see src/data/knowledgeBase.ts. */
export function useKnowledgeBase(): KnowledgeBaseModule {
  return readKnowledgeBase(useLocale());
}
