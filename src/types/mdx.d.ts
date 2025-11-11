declare module '*.mdx' {
  import { ComponentType } from 'react';
  
  export const frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    slug: string;
    language: string;
    author?: string;
    // SEO enhancements
    image?: string;           // Featured image for social sharing
    imageAlt?: string;        // Alt text for featured image
    keywords?: string[];      // SEO keywords
    readingTime?: string;     // e.g., "5 min read"
    lastModified?: string;    // Last update date
    canonical?: string;       // Canonical URL if reposted
  };
  
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
