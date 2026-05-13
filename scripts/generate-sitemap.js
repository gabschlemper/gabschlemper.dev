import { writeFileSync, readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://gabschlemper.dev';

/**
 * Parse YAML frontmatter from an MDX file (minimal parser for our schema).
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([a-zA-Z]+):\s*"?([^"]*)"?\s*$/);
    if (m) fm[m[1]] = m[2];
  }
  return fm;
}

function getBlogPosts() {
  const blogDir = join(__dirname, '..', 'src', 'content', 'blog', 'en');
  return readdirSync(blogDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const fm = parseFrontmatter(readFileSync(join(blogDir, file), 'utf-8'));
      return {
        url: `/blog/${fm.slug || file.replace(/\.mdx$/, '')}`,
        lastmod: fm.date || new Date().toISOString().split('T')[0],
        priority: '0.7',
        changefreq: 'monthly',
      };
    });
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { url: '/about', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { url: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: today },
  ];

  const pages = [...staticPages, ...getBlogPosts()];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated with ${pages.length} URLs at ${outputPath}`);
}

generateSitemap();
