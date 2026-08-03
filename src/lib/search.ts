import {
  capabilities,
  cases,
  companies,
  principles,
  technologies,
} from "../data/knowledge-base";
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

function build(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const company of companies) {
    entries.push({
      kind: "company",
      title: company.name,
      sub: `${company.role} · ${company.period}`,
      to: `/companies/${company.id}`,
      haystack: `${company.name} ${company.domain} ${company.summary}`,
    });
  }

  for (const study of cases) {
    entries.push({
      kind: "case",
      title: study.title,
      sub: `${study.company} · ${study.category}`,
      to: `/cases/${study.id}`,
      haystack: `${study.title} ${study.summary} ${study.capabilities.join(" ")} ${study.technologies.join(" ")}`,
    });
  }

  for (const capability of capabilities) {
    entries.push({
      kind: "capability",
      title: capability.name,
      sub: capability.desc,
      to: `/capabilities/${capability.id}`,
      haystack: `${capability.name} ${capability.desc}`,
    });
  }

  for (const tech of technologies) {
    entries.push({
      kind: "tech",
      title: tech.name,
      sub: tech.usage,
      to: `/technologies/${techSlug(tech.name)}`,
      haystack: `${tech.name} ${tech.usage}`,
    });
  }

  for (const principle of principles) {
    entries.push({
      kind: "principle",
      title: principle.text,
      sub: "engineering principle",
      to: `/principles#${principle.id}`,
      haystack: `${principle.text} ${principle.explanation} ${principle.origin}`,
    });
  }

  const pages: Array<[string, string, string]> = [
    ["Profile", "/profile", "technical identity"],
    ["Career Journey", "/journey", "how the capability grew"],
    ["Companies", "/companies", `${companies.length} entries`],
    ["Case Studies", "/cases", `${cases.length} entries`],
    ["Capabilities", "/capabilities", `${capabilities.length} claims with evidence`],
    ["Technologies", "/technologies", `${technologies.length} entries`],
    ["Engineering Principles", "/principles", `${principles.length} principles`],
    ["Evidence Map", "/map", "why each claim holds"],
  ];
  for (const [title, to, sub] of pages) {
    entries.push({ kind: "page", title, sub, to, haystack: `${title} ${sub}` });
  }

  return entries;
}

let cached: SearchEntry[] | null = null;

export function searchIndex(): SearchEntry[] {
  cached ??= build();
  return cached;
}

export function search(query: string): SearchEntry[] {
  const index = searchIndex();
  const q = query.trim().toLowerCase();

  if (!q) {
    const featured = new Set(cases.filter((c) => c.featured).map((c) => c.id));
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
