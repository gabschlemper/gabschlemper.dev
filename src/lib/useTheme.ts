import { useCallback, useEffect, useState } from "react";
import { config } from "../config";

export type Theme = "dark" | "light";

const STORAGE_KEY = "ekb-theme";

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readStored() ?? config.defaultTheme);

  useEffect(() => {
    apply(theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", config.accent);
    root.style.setProperty(
      "--sel",
      `color-mix(in srgb, ${config.accent} 18%, transparent)`,
    );
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private browsing — fall back to in-memory only */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
