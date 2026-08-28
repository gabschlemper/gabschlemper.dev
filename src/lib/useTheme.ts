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

/* The theme lives on a data attribute rather than prefers-color-scheme, so
   mobile browser chrome has nothing to follow on its own — this keeps the
   address bar from staying dark behind a light page. */
const CHROME: Record<Theme, string> = { dark: "#17140f", light: "#faf7f0" };

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", CHROME[theme]);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readStored() ?? config.defaultTheme);

  useEffect(() => {
    apply(theme);
  }, [theme]);

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
