import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { createRequire } from "module";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const BASE_URL = "https://gabschlemper.dev";

/**
 * Bundles a small server entry (Shell rendered inside a StaticRouter, plus
 * the meta resolver) with esbuild so it can run in plain Node — no browser,
 * no dev server. Mirrors the in-memory data-URI trick already used by
 * generate-sitemap.js.
 */
async function loadServerBundle() {
  const result = await esbuild.build({
    stdin: {
      contents: `
        import { createElement } from "react";
        import { renderToStaticMarkup } from "react-dom/server";
        import { StaticRouter } from "react-router-dom/server";
        import { Shell } from "./src/App";
        import { KnowledgeBaseProvider } from "./src/lib/KnowledgeBaseContext";
        import { resolveMeta, allRoutes, SITE_NAME, SITE_TITLE, HOME_LABEL } from "./src/lib/meta";
        import { readKnowledgeBaseSync, preloadKnowledgeBase } from "./src/data/knowledgeBase";
        import { localeFromPath, withLocale } from "./src/lib/locale";
        import * as en from "./src/data/knowledge-base";

        // renderToStaticMarkup is synchronous and can't await a dynamic
        // import, so the pt-BR data chunk has to already be resolved (not
        // just kicked off) before any /pt/* route renders. Once warm,
        // KnowledgeBaseProvider picks the module up synchronously (effects
        // never run in a static render, so it must not depend on one).
        export async function warmup() {
          await preloadKnowledgeBase("pt");
        }

        export function canonicalRoutes() {
          return allRoutes(en);
        }

        export function renderRoute(path) {
          const kb = readKnowledgeBaseSync(localeFromPath(path));
          const html = renderToStaticMarkup(
            createElement(
              StaticRouter,
              { location: path },
              createElement(KnowledgeBaseProvider, null, createElement(Shell)),
            ),
          );
          return { html, meta: resolveMeta(path, kb) };
        }

        export { SITE_NAME, SITE_TITLE, HOME_LABEL, withLocale };
      `,
      resolveDir: root,
      loader: "js",
    },
    bundle: true,
    // CommonJS, not ESM: react-dom/server's bundled internals call require()
    // for Node built-ins (stream, util, ...), which only resolves natively
    // under a real CJS module — an ESM bundle would need a require() shim
    // that doesn't exist at runtime.
    format: "cjs",
    platform: "node",
    jsx: "automatic",
    loader: { ".tsx": "tsx", ".ts": "ts", ".css": "empty" },
    define: { "process.env.NODE_ENV": '"production"' },
    write: false,
  });

  const code = result.outputFiles[0].text;
  const tmpFile = join(os.tmpdir(), `ekb-ssr-${Date.now()}-${process.pid}.cjs`);
  writeFileSync(tmpFile, code);
  const require = createRequire(import.meta.url);
  return require(tmpFile);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeJsonForScript(json) {
  // Prevents "</script>" inside serialized content from closing the tag early.
  return JSON.stringify(json).replace(/</g, "\\u003c");
}

function buildBreadcrumbJsonLd(meta, homeLabel) {
  if (meta.breadcrumbs.length === 0) return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: `${BASE_URL}${meta.locale === "pt" ? "/pt" : ""}`,
      },
      ...meta.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.path}`,
      })),
    ],
  };
}

function buildArticleJsonLd(meta, homeLabel) {
  if (meta.entityType !== "Article" || !meta.article) return null;
  const breadcrumb = buildBreadcrumbJsonLd(meta, homeLabel);
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: meta.article.headline,
    description: meta.description,
    keywords: meta.article.keywords.join(", "),
    about: meta.article.about,
    image: `${BASE_URL}/images/profile-512.webp`,
    inLanguage: meta.locale === "pt" ? "pt-BR" : "en",
    author: { "@type": "Person", name: "Gabriela Schlemper", url: BASE_URL },
    publisher: { "@type": "Person", name: "Gabriela Schlemper", url: BASE_URL },
    mainEntityOfPage: `${BASE_URL}${meta.path}`,
    ...(breadcrumb ? { breadcrumb } : {}),
  };
}

function applyMeta(template, html, meta, siteName, siteTitleByLocale, homeLabelByLocale) {
  const fullTitle = meta.title ? `${meta.title} · ${siteName}` : siteTitleByLocale[meta.locale];
  const canonicalUrl = `${BASE_URL}${meta.path}`;
  const ogType =
    meta.entityType === "Article" ? "article" : meta.entityType === "ProfilePage" ? "profile" : "website";
  const enPath = meta.locale === "pt" ? meta.path.replace(/^\/pt/, "") || "/" : meta.path;
  const ptPath = meta.locale === "pt" ? meta.path : meta.path === "/" ? "/pt" : `/pt${meta.path}`;

  let page = template;

  page = page.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(fullTitle)}</title>`);
  page = page.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  );
  page = page.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/>/s,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
  );
  page = page.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/s,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
  );
  page = page.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/>/s,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
  );
  page = page.replace(
    /<meta\s+property="og:type"\s+content=".*?"\s*\/>/s,
    `<meta property="og:type" content="${ogType}" />`,
  );
  page = page.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
  );
  page = page.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
  );
  page = page.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/s,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
  );
  page = page.replace(/<html\s+lang="[^"]*"/, `<html lang="${meta.locale === "pt" ? "pt-BR" : "en"}"`);
  page = page.replace(
    /<meta\s+property="og:locale"\s+content=".*?"\s*\/>/s,
    `<meta property="og:locale" content="${meta.locale === "pt" ? "pt_BR" : "en_US"}" />`,
  );

  if (meta.notFound) {
    page = page.replace(
      /<meta\s+name="robots"\s+content=".*?"\s*\/>/s,
      `<meta name="robots" content="noindex, follow" />`,
    );
  }

  const homeLabel = homeLabelByLocale[meta.locale];
  const breadcrumb = buildBreadcrumbJsonLd(meta, homeLabel);
  const routeJsonLd =
    buildArticleJsonLd(meta, homeLabel) ?? (breadcrumb && { "@context": "https://schema.org", ...breadcrumb });
  const hreflangTags = [
    `<link rel="alternate" hreflang="en" href="${escapeHtml(`${BASE_URL}${enPath}`)}" />`,
    `<link rel="alternate" hreflang="pt-BR" href="${escapeHtml(`${BASE_URL}${ptPath}`)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeHtml(`${BASE_URL}${enPath}`)}" />`,
  ].join("\n    ");
  page = page.replace("</head>", `${hreflangTags}\n  </head>`);
  const jsonLdTag = routeJsonLd
    ? `\n    <script type="application/ld+json" id="route-jsonld">${escapeJsonForScript(routeJsonLd)}</script>`
    : "";

  page = page.replace("</head>", `${jsonLdTag}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  return page;
}

async function main() {
  if (!existsSync(join(distDir, "index.html"))) {
    console.error("dist/index.html not found — run `vite build` before prerendering.");
    process.exit(1);
  }

  const template = readFileSync(join(distDir, "index.html"), "utf8");
  const { renderRoute, canonicalRoutes, warmup, SITE_NAME, SITE_TITLE, HOME_LABEL, withLocale } =
    await loadServerBundle();

  // Resolve the pt-BR data chunk once, up front — renderRoute below is
  // synchronous (renderToStaticMarkup can't await mid-render).
  await warmup();

  const canonical = canonicalRoutes();
  const routes = canonical.flatMap((path) => [path, withLocale(path, "pt")]);

  let count = 0;
  for (const routePath of routes) {
    const { html, meta } = renderRoute(routePath);
    const page = applyMeta(template, html, meta, SITE_NAME, SITE_TITLE, HOME_LABEL);

    const outPath =
      routePath === "/"
        ? join(distDir, "index.html")
        : join(distDir, routePath.replace(/^\//, ""), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, page);
    count += 1;
  }

  console.log(`✅ Prerendered ${count} routes into dist/ (en + pt-BR)`);
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
