import type { KnowledgeBaseModule } from "../data/knowledgeBase";
import type { Locale } from "./locale";
import { useKnowledgeBaseState } from "./knowledgeBaseCtx";
import { stringsFor, type Strings } from "./strings";

export function useLocale(): Locale {
  return useKnowledgeBaseState().locale;
}

export function useKnowledgeBase(): KnowledgeBaseModule {
  return useKnowledgeBaseState().kb;
}

export function useStrings(): Strings {
  return stringsFor(useLocale());
}
