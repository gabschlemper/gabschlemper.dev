import type { Strings } from "./strings";
import { withLocale, type Locale } from "./locale";

export interface NavLink {
  label: string;
  to: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

/**
 * The design export shipped Journey, Principles and Evidence Map as finished
 * screens but never linked them from the sidebar, leaving them reachable only
 * by typing a URL. They are listed here so every document has a route in.
 */
export function navGroups(t: Strings, locale: Locale): NavGroup[] {
  const loc = (path: string) => withLocale(path, locale);
  return [
    {
      label: t.nav.groupOverview,
      links: [
        { label: t.nav.home, to: loc("/") },
        { label: t.nav.profile, to: loc("/profile") },
        { label: t.nav.journey, to: loc("/journey") },
      ],
    },
    {
      label: t.nav.groupEvidence,
      links: [
        { label: t.nav.companies, to: loc("/companies") },
        { label: t.nav.cases, to: loc("/cases") },
        { label: t.nav.capabilities, to: loc("/capabilities") },
        { label: t.nav.technologies, to: loc("/technologies") },
        { label: t.nav.principles, to: loc("/principles") },
        { label: t.nav.map, to: loc("/map") },
      ],
    },
  ];
}
