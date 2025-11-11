import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { BLOG_POSTS } from '@/constants/blogPosts';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: t('nav.blog') }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-20">
        <Breadcrumb items={breadcrumbItems} />
        
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('blog.title')}
          </h1>
          <p className="text-foreground-muted max-w-2xl">
            {t('blog.subtitle')}
          </p>
        </header>

        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="border-b border-border pb-8">
              <h2 className="text-2xl font-bold mb-2 text-foreground hover:text-accent transition-colors">
                <Link to={`/blog/${post.slug}`}>{t(post.titleKey)}</Link>
              </h2>
              
              <div className="flex items-center gap-4 mb-3">
                <time className="text-sm text-foreground-muted">
                  {t(post.dateKey)}
                </time>
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

              <p className="text-foreground-muted mb-4">{t(post.excerptKey)}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Read more &gt;&gt;
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
