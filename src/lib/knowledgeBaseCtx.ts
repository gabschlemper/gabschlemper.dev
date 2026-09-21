import { createContext, useContext } from "react";
import type { KnowledgeBaseModule } from "../data/knowledgeBase";
import type { Locale } from "./locale";

export interface KnowledgeBaseState {
  kb: KnowledgeBaseModule;
  locale: Locale;
}

export const KnowledgeBaseCtx = createContext<KnowledgeBaseState | null>(null);

export function useKnowledgeBaseState(): KnowledgeBaseState {
  const ctx = useContext(KnowledgeBaseCtx);
  if (!ctx) {
    throw new Error("useKnowledgeBase/useLocale must be used within KnowledgeBaseProvider");
  }
  return ctx;
}
