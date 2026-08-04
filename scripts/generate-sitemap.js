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
 */
async function loadRoutes() {
  const result = await esbuild.build({
    stdin: {
      contents: `export { allRoutes } from "./src/lib/meta";`,
      resolveDir: root,
      loader: "ts",
    },
    bundle: true,
    format: "esm",
    platform: "neutral",
    write: false,
  });

  const code = result.outputFiles[0].text;
  const { allRoutes } = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`
  );
  return allRoutes();
}

function priorityFor(path) {
  if (path === "/") return "1.0";
  if (path === "/profile") return "0.9";
  if (path === "/cases") return "0.9";
  if (path.startsWith("/cases/")) return "0.8";
  if (path === "/journey") return "0.8";
  if (path === "/companies") return "0.8";
  if (path === "/capabilities") return "0.8";
  if (path === "/principles") return "0.8";
  if (path.startsWith("/companies/")) return "0.7";
  if (path === "/technologies") return "0.7";
  if (path.startsWith("/capabilities/")) return "0.6";
  if (path === "/map") return "0.6";
  if (path.startsWith("/technologies/")) return "0.5";
  return "0.5";
}

function changefreqFor(path) {
  if (path === "/" || path === "/cases") return "weekly";
  return "monthly";
}

function urlEntry(path, lastmod) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(path)}</changefreq>
    <priority>${priorityFor(path)}</priority>
  </url>`;
}

const routes = await loadRoutes();
const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((path) => urlEntry(path, today)).join("\n")}
</urlset>
`;

const outputPath = join(root, "public", "sitemap.xml");
writeFileSync(outputPath, sitemap);

console.log(`✅ Sitemap generated with ${routes.length} URLs`);
console.log(`   Written to: ${outputPath}`);
