import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.post1.title'),
      date: t('blog.post1.date'),
      tags: ['React', 'TypeScript', 'Performance'],
      excerpt: t('blog.post1.excerpt'),
      slug: 'optimizing-react-performance'
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      date: t('blog.post2.date'),
      tags: ['Frontend', 'Design Systems', 'UX'],
      excerpt: t('blog.post2.excerpt'),
      slug: 'building-design-systems'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-12">
          <nav className="text-sm text-foreground-muted mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">Blog</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('blog.title')}
          </h1>
          <p className="text-foreground-muted max-w-2xl">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-border pb-8">
              <h2 className="text-2xl font-bold mb-2 text-foreground hover:text-accent transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <div className="flex items-center gap-4 mb-3">
                <time className="text-sm text-foreground-muted">{post.date}</time>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-foreground-muted mb-4">{post.excerpt}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Read more &gt;&gt;
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Older posts
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;
