import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE_URL = "https://gabschlemper.dev";

/**
 * The route table lives in TypeScript, so bundle the data and route helpers
 * in-memory rather than duplicating them here. Sharing allRoutes() with
 * scripts/prerender.js keeps the two build steps from ever drifting apart.
 * Route ids are locale-stable (see knowledge-base.pt.ts's header comment),
 * so the canonical list only needs the English module.
 */
async function loadRoutes() {
  const result = await esbuild.build({
    stdin: {
      contents: `
        export { allRoutes } from "./src/lib/meta";
        export { withLocale } from "./src/lib/locale";
        export * as en from "./src/data/knowledge-base";
      `,
      resolveDir: root,
      loader: "ts",
    },
    bundle: true,
    format: "esm",
    platform: "neutral",
    write: false,
  });

  const code = result.outputFiles[0].text;
  const { allRoutes, withLocale, en } = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`
  );
  const canonical = allRoutes(en);
  return canonical.flatMap((path) => [
    { path, alt: withLocale(path, "pt") },
    { path: withLocale(path, "pt"), alt: path },
  ]);
}

function priorityFor(path) {
  const bare = path.replace(/^\/pt/, "") || "/";
  if (bare === "/") return "1.0";
  if (bare === "/profile") return "0.9";
  if (bare === "/cases") return "0.9";
  if (bare.startsWith("/cases/")) return "0.8";
  if (bare === "/journey") return "0.8";
  if (bare === "/companies") return "0.8";
  if (bare === "/capabilities") return "0.8";
  if (bare === "/principles") return "0.8";
  if (bare.startsWith("/companies/")) return "0.7";
  if (bare === "/technologies") return "0.7";
  if (bare.startsWith("/capabilities/")) return "0.6";
  if (bare === "/map") return "0.6";
  if (bare.startsWith("/technologies/")) return "0.5";
  return "0.5";
}

function changefreqFor(path) {
  const bare = path.replace(/^\/pt/, "") || "/";
  if (bare === "/" || bare === "/cases") return "weekly";
  return "monthly";
}

function hreflangOf(path) {
  return path.startsWith("/pt") ? "pt-BR" : "en";
}

function urlEntry({ path, alt }, lastmod) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(path)}</changefreq>
    <priority>${priorityFor(path)}</priority>
    <xhtml:link rel="alternate" hreflang="${hreflangOf(path)}" href="${BASE_URL}${path}" />
    <xhtml:link rel="alternate" hreflang="${hreflangOf(alt)}" href="${BASE_URL}${alt}" />
  </url>`;
}

const routes = await loadRoutes();
const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map((entry) => urlEntry(entry, today)).join("\n")}
</urlset>
`;

const outputPath = join(root, "public", "sitemap.xml");
writeFileSync(outputPath, sitemap);

console.log(`✅ Sitemap generated with ${routes.length} URLs (en + pt-BR)`);
console.log(`   Written to: ${outputPath}`);
