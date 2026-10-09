import type { KnowledgeBaseModule } from "../data/knowledgeBase";
import { localeFromPath, stripLocale, withLocale, type Locale } from "./locale";
import { techNameFromSlug, techSlug } from "./slug";

/** Short brand — used as the " · {SITE_NAME}" suffix on every subpage title and as og:site_name. */
export const SITE_NAME = "Gabriela Schlemper";
/** Full keyword-bearing title used verbatim on the home route. */
export const SITE_TITLE: Record<Locale, string> = {
  en: "Gabriela Schlemper — Full-Stack Software Engineer | System Design",
  pt: "Gabriela Schlemper — Engenheira de Software Full-Stack | Arquitetura de Sistemas",
};
export const SITE_URL = "https://gabschlemper.dev";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/profile-512.webp`;

export interface Breadcrumb {
  name: string;
  path: string;
}

export type EntityType = "WebSite" | "ProfilePage" | "CollectionPage" | "Article" | "ItemPage";

export interface RouteMeta {
  /** undefined on the home route — SITE_NAME is used verbatim there. */
  title: string | undefined;
  description: string;
  /** Canonical (locale-prefixed) path this meta applies to. */
  path: string;
  breadcrumbs: Breadcrumb[];
  entityType: EntityType;
  locale: Locale;
  notFound?: boolean;
  /** Extra structured fields for Article-type routes (case studies). */
  article?: {
    headline: string;
    keywords: string[];
    about: string;
  };
}

function trimTrailingSlash(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

const HOME_LABEL: Record<Locale, string> = { en: "Home", pt: "Início" };

const NOT_FOUND: Record<Locale, { title: string; description: string }> = {
  en: { title: "Not found", description: "No document exists at this path." },
  pt: { title: "Não encontrado", description: "Nenhum documento existe neste caminho." },
};

function notFound(path: string, locale: Locale): RouteMeta {
  return {
    ...NOT_FOUND[locale],
    path,
    breadcrumbs: [],
    entityType: "ItemPage",
    locale,
    notFound: true,
  };
}

/**
 * Single source of truth for per-route SEO metadata, in both locales.
 * Consumed by the live app (useRouteMeta, applied to <head> after mount) and
 * by the build-time prerender/sitemap scripts, so the two never drift.
 *
 * Takes the already-resolved knowledge-base module for the route's own
 * locale as a parameter rather than importing data directly — this file is
 * bundled into the client, and importing both locales' data here would undo
 * the code-splitting done in src/data/knowledgeBase.ts.
 */
export function resolveMeta(pathname: string, kb: KnowledgeBaseModule): RouteMeta {
  const locale = localeFromPath(pathname);
  const path = trimTrailingSlash(pathname || "/");
  const bare = stripLocale(path);
  const segments = bare.split("/").filter(Boolean);
  const { capabilities, cases, companies, technologies } = kb;

  if (bare === "/") {
    return locale === "pt"
      ? {
          title: undefined,
          description:
            "Trabalho entre interfaces de produto, serviços de backend e os dados que conectam os dois. Veja como investigo problemas, avalio alternativas e acompanho uma mudança até a produção.",
          path,
          breadcrumbs: [],
          entityType: "WebSite",
          locale,
        }
      : {
          title: undefined,
          description:
            "I work across product interfaces, backend services, and the data between them. Explore how I investigate problems, weigh alternatives, and follow changes into production.",
          path,
          breadcrumbs: [],
          entityType: "WebSite",
          locale,
        };
  }

  if (bare === "/profile") {
    return {
      title: locale === "pt" ? "Perfil" : "Profile",
      description:
        locale === "pt"
        ? "Como Gabriela Schlemper trabalha entre interfaces, serviços de backend e dados: exemplos de investigação, decisões de arquitetura e desenvolvimento full-stack."
          : "How Gabriela Schlemper works across interfaces, backend services, and data, with examples of investigation, architecture decisions, and full-stack delivery.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Perfil" : "Profile", path }],
      entityType: "ProfilePage",
      locale,
    };
  }

  if (bare === "/journey") {
    return {
      title: locale === "pt" ? "Trajetória" : "Career Journey",
      description:
        locale === "pt"
          ? "De interfaces frontend a sistemas distribuídos: o caminho de carreira desde trabalhos freelance em Vue até o desenho de arquitetura orientada a eventos na Dynamox."
          : "From frontend interfaces to distributed systems: the career path from freelance Vue work to designing event-driven backend architecture at Dynamox.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Trajetória" : "Career Journey", path }],
      entityType: "CollectionPage",
      locale,
    };
  }

  if (bare === "/companies") {
    return {
      title: locale === "pt" ? "Empresas" : "Companies",
      description:
        locale === "pt"
          ? "Onde a engenharia aconteceu: Dynamox, AQTech e trabalho freelance, e o que cada fase ensinou sobre frontend, backend e sistemas distribuídos."
          : "Where the engineering happened: Dynamox, AQTech and freelance work, and what each phase taught about frontend, backend and distributed-systems engineering.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Empresas" : "Companies", path: withLocale("/companies", locale) }],
      entityType: "CollectionPage",
      locale,
    };
  }

  if (segments[0] === "companies" && segments[1]) {
    const company = companies.find((entry) => entry.id === segments[1]);
    if (!company) return notFound(path, locale);
    return {
      title: company.name,
      description:
        company.summary ||
        `${company.role} at ${company.name}: ${company.technologies.slice(0, 4).join(", ")}.`,
      path,
      breadcrumbs: [
        { name: locale === "pt" ? "Empresas" : "Companies", path: withLocale("/companies", locale) },
        { name: company.name, path },
      ],
      entityType: "ItemPage",
      locale,
    };
  }

  if (bare === "/cases") {
    return {
      title: locale === "pt" ? "Estudos de Caso" : "Case Studies",
      description:
        locale === "pt"
          ? "Histórias de engenharia da Dynamox e da AQTech: os problemas, as alternativas consideradas, as decisões tomadas e o que mudou depois."
          : "Engineering stories from Dynamox and AQTech: the problems, alternatives, decisions, and what changed afterward.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Estudos de Caso" : "Case Studies", path: withLocale("/cases", locale) }],
      entityType: "CollectionPage",
      locale,
    };
  }

  if (segments[0] === "cases" && segments[1]) {
    const study = cases.find((entry) => entry.id === segments[1]);
    if (!study) return notFound(path, locale);
    return {
      title: study.title,
      description: study.summary,
      path,
      breadcrumbs: [
        { name: locale === "pt" ? "Estudos de Caso" : "Case Studies", path: withLocale("/cases", locale) },
        { name: study.title, path },
      ],
      entityType: "Article",
      locale,
      article: {
        headline: study.title,
        keywords: [...study.technologies, ...study.capabilities],
        about: study.company,
      },
    };
  }

  if (bare === "/capabilities") {
    return {
      title: locale === "pt" ? "Capacidades" : "Capabilities",
      description:
        locale === "pt"
          ? "Temas que aparecem no trabalho de Gabriela: sistemas distribuídos, design de sistemas e desenvolvimento frontend e backend, ligados a exemplos concretos."
          : "Themes across Gabriela's work, from distributed systems and system design to frontend and backend delivery, linked to concrete examples.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Capacidades" : "Capabilities", path: withLocale("/capabilities", locale) }],
      entityType: "CollectionPage",
      locale,
    };
  }

  if (segments[0] === "capabilities" && segments[1]) {
    const capability = capabilities.find((entry) => entry.id === segments[1]);
    if (!capability) return notFound(path, locale);
    return {
      title: capability.name,
      description: capability.desc,
      path,
      breadcrumbs: [
        { name: locale === "pt" ? "Capacidades" : "Capabilities", path: withLocale("/capabilities", locale) },
        { name: capability.name, path },
      ],
      entityType: "ItemPage",
      locale,
    };
  }

  if (bare === "/technologies") {
    return {
      title: locale === "pt" ? "Tecnologias" : "Technologies",
      description:
        locale === "pt"
          ? "Como Gabriela Schlemper usou de fato React, TypeScript, Vue 2/3, NestJS, Kafka, PostgreSQL e outras — uso real por projeto, não uma grade de logos."
          : "How Gabriela Schlemper actually used React, TypeScript, Vue 2/3, NestJS, Kafka, PostgreSQL and more — real usage per project, not a logo grid.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Tecnologias" : "Technologies", path: withLocale("/technologies", locale) }],
      entityType: "CollectionPage",
      locale,
    };
  }

  if (segments[0] === "technologies" && segments[1]) {
    const name = techNameFromSlug(segments[1]);
    const tech = name ? technologies.find((entry) => entry.name === name) : undefined;
    if (!tech) return notFound(path, locale);
    return {
      title: tech.name,
      description: tech.usage,
      path,
      breadcrumbs: [
        { name: locale === "pt" ? "Tecnologias" : "Technologies", path: withLocale("/technologies", locale) },
        { name: tech.name, path },
      ],
      entityType: "ItemPage",
      locale,
    };
  }

  if (bare === "/principles") {
    return {
      title: locale === "pt" ? "Princípios de Engenharia" : "Engineering Principles",
      description:
        locale === "pt"
          ? "Dez princípios de engenharia que Gabriela Schlemper desenvolveu a partir de decisões e problemas reais."
          : "Ten engineering principles Gabriela Schlemper developed through real decisions and problems.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Princípios de Engenharia" : "Engineering Principles", path: withLocale("/principles", locale) }],
      entityType: "CollectionPage",
      locale,
    };
  }

  if (bare === "/map") {
    return {
      title: locale === "pt" ? "Mapa de Evidências" : "Evidence Map",
      description:
        locale === "pt"
          ? "Capacidades se conectam aos estudos de caso que as comprovam, às empresas onde aconteceram, e às tecnologias envolvidas — todo o grafo de evidências em uma única visão."
          : "Capabilities connect to the case studies that prove them, the companies where they happened, and the technologies involved — the whole evidence graph in one view.",
      path,
      breadcrumbs: [{ name: locale === "pt" ? "Mapa de Evidências" : "Evidence Map", path: withLocale("/map", locale) }],
      entityType: "CollectionPage",
      locale,
    };
  }

  return notFound(path, locale);
}

/** Enumerates every real (non-404) canonical (locale-bare) route. Both the
 *  sitemap and prerender scripts call this once per locale and prefix the
 *  result themselves via withLocale, so this stays locale-agnostic. */
export function allRoutes(kb: KnowledgeBaseModule): string[] {
  const { capabilities, cases, companies, technologies } = kb;
  return [
    "/",
    "/profile",
    "/journey",
    "/companies",
    "/cases",
    "/capabilities",
    "/technologies",
    "/principles",
    "/map",
    ...companies.map((c) => `/companies/${c.id}`),
    ...cases.map((c) => `/cases/${c.id}`),
    ...capabilities.map((c) => `/capabilities/${c.id}`),
    ...technologies.map((t) => `/technologies/${techSlug(t.name)}`),
  ];
}

export { HOME_LABEL };
