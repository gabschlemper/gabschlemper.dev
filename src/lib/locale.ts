/**
 * English stays unprefixed (`/…`) — it's the existing, already-indexed
 * default. Portuguese lives under `/pt/…`. This keeps every current URL
 * working unchanged and makes the locale a pure function of the path, never
 * stored state that could disagree with what a shared/bookmarked link says.
 */
export type Locale = "en" | "pt";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALES: Locale[] = ["en", "pt"];

export function localeFromPath(pathname: string): Locale {
  return pathname === "/pt" || pathname.startsWith("/pt/") ? "pt" : "en";
}

/** The path with any locale prefix removed — the "canonical" route shape
 *  shared by every locale, used to look up meta/sitemap entries and to
 *  build the other locale's equivalent URL. */
export function stripLocale(pathname: string): string {
  if (pathname === "/pt") return "/";
  if (pathname.startsWith("/pt/")) return pathname.slice(3) || "/";
  return pathname;
}

export function withLocale(pathname: string, locale: Locale): string {
  const bare = stripLocale(pathname);
  if (locale === "en") return bare;
  return bare === "/" ? "/pt" : `/pt${bare}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt" : "en";
}
