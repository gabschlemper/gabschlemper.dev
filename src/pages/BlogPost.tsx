import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { useSEO } from '@/hooks/useSEO';
import { getBlogPost } from '@/lib/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(slug, language);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const { Component } = post;

  // Use post-specific image or fallback to profile
  const socialImage = post.image 
    ? `https://gabschlemper.dev${post.image}`
    : 'https://gabschlemper.dev/images/profile-512.webp';

  useSEO({
    title: `${post.title} - Gabriela Schlemper Blog`,
    description: post.excerpt,
    url: post.canonical || `https://gabschlemper.dev/blog/${slug}`,
    image: socialImage,
    type: 'article',
    keywords: post.keywords || post.tags
  });

  // Add JSON-LD structured data for blog post
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": socialImage,
      "datePublished": post.date,
      "dateModified": post.lastModified || post.date,
      "author": {
        "@type": "Person",
        "name": post.author || "Gabriela Schlemper",
        "url": "https://gabschlemper.dev"
      },
      "publisher": {
        "@type": "Person",
        "name": "Gabriela Schlemper",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gabschlemper.dev/images/profile-512.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://gabschlemper.dev/blog/${slug}`
      },
      "keywords": post.keywords?.join(', ') || post.tags.join(', '),
      "articleSection": post.tags[0] || "Technology",
      "inLanguage": language,
      "timeRequired": post.readingTime
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'blog-post-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('blog-post-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [post, slug, language, socialImage]);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: t('nav.blog'), href: '/blog' },
    { label: post.title }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-20">
        <Breadcrumb items={breadcrumbItems} />
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-foreground-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(language, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              {post.readingTime && (
                <span>• {post.readingTime}</span>
              )}
              
              {post.author && (
                <span>• By {post.author}</span>
              )}
              
              {post.tags && post.tags.length > 0 && (
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
              )}
            </div>

            {/* Featured image if provided */}
            {post.image && (
              <img 
                src={post.image} 
                alt={post.imageAlt || post.title}
                className="w-full rounded-lg mb-6"
                loading="eager"
              />
            )}
          </header>

          {/* Render the MDX content */}
          <div className="prose prose-lg max-w-none dark:prose-invert
            [&>h1:first-child]:hidden
            prose-headings:font-bold prose-headings:text-foreground prose-headings:mb-4
            prose-h1:text-4xl prose-h1:mt-8
            prose-h2:text-3xl prose-h2:mt-6 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-4
            prose-p:text-foreground prose-p:leading-7 prose-p:mb-4
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:list-disc prose-ul:ml-6 prose-ul:my-4
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-4
            prose-li:text-foreground prose-li:mb-2
            prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
            prose-pre:code:bg-transparent prose-pre:code:text-slate-50 prose-pre:code:p-0
            prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent/80 hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-foreground-muted
            prose-table:w-full prose-table:border-collapse
            prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-border
            prose-td:p-3 prose-td:border prose-td:border-border
          ">
            <Component />
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
