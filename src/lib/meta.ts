import { capabilities, cases, companies, technologies } from "../data/knowledge-base";
import { techNameFromSlug, techSlug } from "./slug";

/** Short brand — used as the " · {SITE_NAME}" suffix on every subpage title and as og:site_name. */
export const SITE_NAME = "Gabriela Schlemper";
/** Full keyword-bearing title used verbatim on the home route. */
export const SITE_TITLE =
  "Gabriela Schlemper — Software Engineer (React, TypeScript, Vue) · Ireland/EU";
export const SITE_URL = "https://gabschlemper.dev";
export const DEFAULT_DESCRIPTION =
  "Gabriela Schlemper — Software Engineer (React, TypeScript, Vue, Node.js) in Ireland/EU. Case studies, capabilities and principles with the evidence behind each claim, not a technology list.";
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
  path: string;
  breadcrumbs: Breadcrumb[];
  entityType: EntityType;
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

const NOT_FOUND: Omit<RouteMeta, "path"> = {
  title: "Not found",
  description: "No document exists at this path.",
  breadcrumbs: [],
  entityType: "ItemPage",
  notFound: true,
};

/**
 * Single source of truth for per-route SEO metadata. Consumed by the live
 * app (useRouteMeta, applied to <head> after mount) and by the build-time
 * prerender script (scripts/prerender.js), so the two never drift.
 */
export function resolveMeta(pathname: string): RouteMeta {
  const path = trimTrailingSlash(pathname || "/");
  const segments = path.split("/").filter(Boolean);

  if (path === "/") {
    return {
      title: undefined,
      description:
        "Gabriela Schlemper — Software Engineer specializing in React, TypeScript and Vue, based in Ireland (EU), open to remote and on-site roles. I document engineering decisions instead of listing technologies.",
      path,
      breadcrumbs: [],
      entityType: "WebSite",
    };
  }

  if (path === "/profile") {
    return {
      title: "Profile",
      description:
        "Gabriela Schlemper's technical identity: engineering philosophy, strengths and the kind of problems I look for — React, TypeScript, Vue and distributed-systems work in Ireland/EU.",
      path,
      breadcrumbs: [{ name: "Profile", path }],
      entityType: "ProfilePage",
    };
  }

  if (path === "/journey") {
    return {
      title: "Career Journey",
      description:
        "From frontend interfaces to distributed systems: the career path from freelance Vue work to designing event-driven backend architecture at Dynamox.",
      path,
      breadcrumbs: [{ name: "Career Journey", path }],
      entityType: "CollectionPage",
    };
  }

  if (path === "/companies") {
    return {
      title: "Companies",
      description:
        "Where the engineering happened: Dynamox, AQTech and freelance work, and what each phase taught about frontend, backend and distributed-systems engineering.",
      path,
      breadcrumbs: [{ name: "Companies", path }],
      entityType: "CollectionPage",
    };
  }

  if (segments[0] === "companies" && segments[1]) {
    const company = companies.find((entry) => entry.id === segments[1]);
    if (!company) return { ...NOT_FOUND, path };
    return {
      title: company.name,
      description:
        company.summary ||
        `${company.role} at ${company.name}: ${company.technologies.slice(0, 4).join(", ")}.`,
      path,
      breadcrumbs: [
        { name: "Companies", path: "/companies" },
        { name: company.name, path },
      ],
      entityType: "ItemPage",
    };
  }

  if (path === "/cases") {
    return {
      title: "Case Studies",
      description:
        "Software engineering case studies from Dynamox and AQTech: context, constraints, alternatives, decision and trade-offs behind React, TypeScript, Vue and Node.js systems.",
      path,
      breadcrumbs: [{ name: "Case Studies", path }],
      entityType: "CollectionPage",
    };
  }

  if (segments[0] === "cases" && segments[1]) {
    const study = cases.find((entry) => entry.id === segments[1]);
    if (!study) return { ...NOT_FOUND, path };
    return {
      title: study.title,
      description: study.summary,
      path,
      breadcrumbs: [
        { name: "Case Studies", path: "/cases" },
        { name: study.title, path },
      ],
      entityType: "Article",
      article: {
        headline: study.title,
        keywords: [...study.technologies, ...study.capabilities],
        about: study.company,
      },
    };
  }

  if (path === "/capabilities") {
    return {
      title: "Capabilities",
      description:
        "Engineering capabilities, not a technology list — distributed systems, system design, frontend and backend engineering, each backed by the case studies that prove it.",
      path,
      breadcrumbs: [{ name: "Capabilities", path }],
      entityType: "CollectionPage",
    };
  }

  if (segments[0] === "capabilities" && segments[1]) {
    const capability = capabilities.find((entry) => entry.id === segments[1]);
    if (!capability) return { ...NOT_FOUND, path };
    return {
      title: capability.name,
      description: capability.desc,
      path,
      breadcrumbs: [
        { name: "Capabilities", path: "/capabilities" },
        { name: capability.name, path },
      ],
      entityType: "ItemPage",
    };
  }

  if (path === "/technologies") {
    return {
      title: "Technologies",
      description:
        "How Gabriela Schlemper actually used React, TypeScript, Vue 2/3, NestJS, Kafka, PostgreSQL and more — real usage per project, not a logo grid.",
      path,
      breadcrumbs: [{ name: "Technologies", path }],
      entityType: "CollectionPage",
    };
  }

  if (segments[0] === "technologies" && segments[1]) {
    const name = techNameFromSlug(segments[1]);
    const tech = name ? technologies.find((entry) => entry.name === name) : undefined;
    if (!tech) return { ...NOT_FOUND, path };
    return {
      title: tech.name,
      description: tech.usage,
      path,
      breadcrumbs: [
        { name: "Technologies", path: "/technologies" },
        { name: tech.name, path },
      ],
      entityType: "ItemPage",
    };
  }

  if (path === "/principles") {
    return {
      title: "Engineering Principles",
      description:
        "Eight engineering principles with origin stories — how Gabriela Schlemper approaches invariants, correctness, adoption and decision-making in software architecture.",
      path,
      breadcrumbs: [{ name: "Engineering Principles", path }],
      entityType: "CollectionPage",
    };
  }

  if (path === "/map") {
    return {
      title: "Evidence Map",
      description:
        "Capabilities connect to the case studies that prove them, the companies where they happened, and the technologies involved — the whole evidence graph in one view.",
      path,
      breadcrumbs: [{ name: "Evidence Map", path }],
      entityType: "CollectionPage",
    };
  }

  return { ...NOT_FOUND, path };
}

/** Enumerates every real (non-404) route, used by the sitemap and prerender scripts. */
export function allRoutes(): string[] {
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
