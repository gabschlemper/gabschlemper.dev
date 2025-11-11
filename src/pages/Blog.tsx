import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { useSEO } from '@/hooks/useSEO';
import { getBlogPostsByLanguage } from '@/lib/blog';

const Blog: React.FC = () => {
  const { language, t } = useLanguage();

  // Get blog posts for current language
  const posts = getBlogPostsByLanguage(language);

  useSEO({
    title: 'Blog - Gabriela Schlemper | Tech Articles & Insights',
    description: 'Read articles about Full Stack Development, Frontend Engineering, React, TypeScript, Vue.js, and modern web development best practices.',
    url: 'https://gabschlemper.dev/blog',
    image: 'https://gabschlemper.dev/images/profile-512.webp'
  });

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
            Blog
          </h1>
          <p className="text-foreground-muted max-w-2xl">
            Thoughts on web development.
          </p>
        </header>

        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-foreground-muted">
              No blog posts available in {language.toUpperCase()} yet.
            </p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="border-b border-border pb-8">
                <h2 className="text-2xl font-bold mb-2 text-foreground hover:text-accent transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <div className="flex items-center gap-4 mb-3">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString(language, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium group"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
