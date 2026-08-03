import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE_URL = "https://gabschlemper.dev";

/**
 * The route table lives in TypeScript, so bundle the data and slug helpers
 * in-memory rather than duplicating them here.
 */
async function loadData() {
  const result = await esbuild.build({
    stdin: {
      contents: `
        export { capabilities, cases, companies, technologies } from "./src/data/knowledge-base";
        export { techSlug } from "./src/lib/slug";
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
  return import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
}

function urlEntry(path, priority, changefreq, lastmod) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const { capabilities, cases, companies, technologies, techSlug } = await loadData();
const today = new Date().toISOString().split("T")[0];

const entries = [
  urlEntry("/", "1.0", "weekly", today),
  urlEntry("/profile", "0.9", "monthly", today),
  urlEntry("/journey", "0.8", "monthly", today),
  urlEntry("/companies", "0.8", "monthly", today),
  urlEntry("/cases", "0.9", "weekly", today),
  urlEntry("/capabilities", "0.8", "monthly", today),
  urlEntry("/technologies", "0.7", "monthly", today),
  urlEntry("/principles", "0.8", "monthly", today),
  urlEntry("/map", "0.6", "monthly", today),
  ...companies.map((c) => urlEntry(`/companies/${c.id}`, "0.7", "monthly", today)),
  ...cases.map((c) => urlEntry(`/cases/${c.id}`, "0.8", "monthly", today)),
  ...capabilities.map((c) => urlEntry(`/capabilities/${c.id}`, "0.6", "monthly", today)),
  ...technologies.map((t) =>
    urlEntry(`/technologies/${techSlug(t.name)}`, "0.5", "monthly", today),
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

const outputPath = join(root, "public", "sitemap.xml");
writeFileSync(outputPath, sitemap);

console.log(`✅ Sitemap generated with ${entries.length} URLs`);
console.log(`   Written to: ${outputPath}`);
