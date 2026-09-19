// Site configuration. These were editor-configurable props in the design
// export; here they are plain constants.

import type { Strings } from "./lib/strings";

export const config = {
  /** Theme used on first visit, before any localStorage preference exists. */
  defaultTheme: "dark" as "dark" | "light",

  /** Show the repository-statistics grid on the home screen. */
  showStats: true,

  /** Show the "open to opportunities" badge. */
  openToWork: true,

  /**
   * Contact links. Empty strings are omitted from the contact row rather than
   * rendered as dead links.
   */
  email: "gabschlemper@gmail.com",
  linkedin: "https://linkedin.com/in/gabrielaschlemper",
  github: "https://github.com/gabschlemper",
  cvUrl: "/cv/Gabriela-Schlemper-CV.pdf",

  /** Shown bottom-left in the sidebar. */
  revision: "rev. 2026.07 — written, not generated",
} as const;

export interface ContactLink {
  label: string;
  href: string;
}

export function contactLinks(t: Strings): ContactLink[] {
  const links: ContactLink[] = [];
  if (config.email) links.push({ label: t.contact.email, href: `mailto:${config.email}` });
  if (config.linkedin) links.push({ label: t.contact.linkedin, href: config.linkedin });
  if (config.github) links.push({ label: t.contact.github, href: config.github });
  if (config.cvUrl) links.push({ label: t.contact.downloadCv, href: config.cvUrl });
  return links;
}
