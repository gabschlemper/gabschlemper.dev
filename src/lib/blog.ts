// Import all MDX files from content directory
// This uses Vite's import.meta.glob feature

export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  language: string;
  author?: string;
  // SEO fields
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  readingTime?: string;
  lastModified?: string;
  canonical?: string;
}

export interface BlogPost extends BlogPostMeta {
  Component: React.ComponentType;
}

// Import all MDX files eagerly (loaded at build time)
const blogModules = import.meta.glob<{
  default: React.ComponentType;
  frontmatter: BlogPostMeta;
}>('../content/blog/**/*.mdx', { eager: true });

/**
 * Load all blog posts from MDX files
 * This function runs at build time and bundles posts into the app
 */
export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, module] of Object.entries(blogModules)) {
    // Extract language from path: ../content/blog/en/post.mdx -> en
    const language = path.split('/')[3];
    
    posts.push({
      ...module.frontmatter,
      language,
      Component: module.default,
    });
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get blog posts filtered by language
 */
export function getBlogPostsByLanguage(lang: string): BlogPost[] {
  return getAllBlogPosts().filter(post => post.language === lang);
}

/**
 * Get a single blog post by slug and language
 */
export function getBlogPost(slug: string, lang: string): BlogPost | undefined {
  return getAllBlogPosts().find(
    post => post.slug === slug && post.language === lang
  );
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allTags = getAllBlogPosts().flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
}
