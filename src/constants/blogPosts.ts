export interface BlogPost {
  id: number;
  slug: string;
  titleKey: string;
  dateKey: string;
  excerptKey: string;
  contentKey: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'optimizing-react-performance',
    titleKey: 'blog.post1.title',
    dateKey: 'blog.post1.date',
    excerptKey: 'blog.post1.excerpt',
    contentKey: 'blog.post1.content',
    tags: ['React', 'TypeScript', 'Performance']
  },
  {
    id: 2,
    slug: 'building-design-systems',
    titleKey: 'blog.post2.title',
    dateKey: 'blog.post2.date',
    excerptKey: 'blog.post2.excerpt',
    contentKey: 'blog.post2.content',
    tags: ['Frontend', 'Design Systems', 'UX']
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};
