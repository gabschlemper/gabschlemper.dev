import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getBlogPostBySlug } from '@/constants/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t(post.titleKey) }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-20">
        <Breadcrumb items={breadcrumbItems} />
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t(post.titleKey)}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
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
          </header>

          <div className="prose prose-lg max-w-none text-foreground-muted">
            <p className="text-lg leading-relaxed">
              {t(post.contentKey)}
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
