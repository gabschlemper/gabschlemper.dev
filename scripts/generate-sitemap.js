import { getAllBlogPosts } from './src/lib/blog';
import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Generate dynamic sitemap.xml including all blog posts
 * Run this script before deployment: node scripts/generate-sitemap.js
 */
function generateSitemap() {
  const posts = getAllBlogPosts();
  const baseUrl = 'https://gabschlemper.dev';
  
  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  ];

  // Dynamic blog posts
  const blogPages = posts.map(post => ({
    url: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.lastModified || post.date,
  }));

  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : `<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to public directory
  const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemap);
  
  console.log(`✅ Sitemap generated with ${allPages.length} URLs`);
  console.log(`   - ${staticPages.length} static pages`);
  console.log(`   - ${blogPages.length} blog posts`);
}

generateSitemap();
