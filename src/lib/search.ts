import type { KnowledgeBaseModule } from "../data/knowledgeBase";
import type { Locale } from "./locale";
import { withLocale } from "./locale";
import type { Strings } from "./strings";
import { techSlug } from "./slug";

export type ResultKind =
  | "company"
  | "case"
  | "capability"
  | "tech"
  | "principle"
  | "page";

export interface SearchEntry {
  kind: ResultKind;
  title: string;
  sub: string;
  to: string;
  haystack: string;
}

function build(kb: KnowledgeBaseModule, t: Strings, locale: Locale): SearchEntry[] {
  const { capabilities, cases, companies, principles, technologies } = kb;
  const loc = (path: string) => withLocale(path, locale);
  const entries: SearchEntry[] = [];

  for (const company of companies) {
    entries.push({
      kind: "company",
      title: company.name,
      sub: `${company.role} · ${company.period}`,
      to: loc(`/companies/${company.id}`),
      haystack: `${company.name} ${company.domain} ${company.summary}`,
    });
  }

  for (const study of cases) {
    entries.push({
      kind: "case",
      title: study.title,
      sub: `${study.company} · ${study.category}`,
      to: loc(`/cases/${study.id}`),
      haystack: `${study.title} ${study.summary} ${study.capabilities.join(" ")} ${study.technologies.join(" ")}`,
    });
  }

  for (const capability of capabilities) {
    entries.push({
      kind: "capability",
      title: capability.name,
      sub: capability.desc,
      to: loc(`/capabilities/${capability.id}`),
      haystack: `${capability.name} ${capability.desc}`,
    });
  }

  for (const tech of technologies) {
    entries.push({
      kind: "tech",
      title: tech.name,
      sub: tech.usage,
      to: loc(`/technologies/${techSlug(tech.name)}`),
      haystack: `${tech.name} ${tech.usage}`,
    });
  }

  for (const principle of principles) {
    entries.push({
      kind: "principle",
      title: principle.text,
      sub: t.search.engineeringPrinciple,
      to: loc(`/principles#${principle.id}`),
      haystack: `${principle.text} ${principle.explanation} ${principle.origin}`,
    });
  }

  const pages: Array<[string, string, string]> = [
    [t.search.profile, loc("/profile"), t.search.profileSub],
    [t.search.journey, loc("/journey"), t.search.journeySub],
    [t.search.companies, loc("/companies"), t.search.entries(companies.length)],
    [t.search.cases, loc("/cases"), t.search.entries(cases.length)],
    [t.search.capabilities, loc("/capabilities"), t.search.capabilitiesWithEvidence(capabilities.length)],
    [t.search.technologies, loc("/technologies"), t.search.entries(technologies.length)],
    [t.search.principles, loc("/principles"), t.search.principlesCount(principles.length)],
    [t.search.map, loc("/map"), t.search.mapSub],
  ];
  for (const [title, to, sub] of pages) {
    entries.push({ kind: "page", title, sub, to, haystack: `${title} ${sub}` });
  }

  return entries;
}

const cache = new Map<Locale, SearchEntry[]>();

export function searchIndex(kb: KnowledgeBaseModule, t: Strings, locale: Locale): SearchEntry[] {
  let entries = cache.get(locale);
  if (!entries) {
    entries = build(kb, t, locale);
    cache.set(locale, entries);
  }
  return entries;
}

export function search(
  query: string,
  kb: KnowledgeBaseModule,
  t: Strings,
  locale: Locale,
): SearchEntry[] {
  const index = searchIndex(kb, t, locale);
  const q = query.trim().toLowerCase();

  if (!q) {
    const featured = new Set(kb.cases.filter((c) => c.featured).map((c) => c.id));
    return index
      .filter(
        (entry) =>
          entry.kind === "page" ||
          (entry.kind === "case" && featured.has(entry.to.split("/").pop() ?? "")),
      )
      .slice(0, 8);
  }

  return index
    .filter((entry) => `${entry.haystack} ${entry.title}`.toLowerCase().includes(q))
    .slice(0, 10);
}
