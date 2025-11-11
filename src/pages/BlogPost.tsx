import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
          {/* Blog post header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
              <time>{post.date}</time>
              {post.readingTime && <span>{post.readingTime}</span>}
              {post.author && <span>by {post.author}</span>}
            </div>
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Featured image if provided */}
            {post.image && (
              <img 
                src={post.image} 
                alt={post.imageAlt || post.title}
                className="w-full rounded-lg mt-6 mb-6"
                loading="eager"
              />
            )}
          </header>

          {/* Render the MDX content */}
          <div className="prose prose-lg max-w-none dark:prose-invert
            [&>h1:first-child]:hidden
            prose-headings:font-bold prose-headings:text-foreground prose-headings:mb-4
            prose-h1:text-4xl prose-h1:mt-8
            prose-h2:text-3xl prose-h2:mt-6 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-2
            prose-h3:text-2xl prose-h3:mt-4
            prose-p:text-foreground prose-p:leading-7 prose-p:mb-4
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:list-disc prose-ul:ml-6 prose-ul:my-4
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-4
            prose-li:text-foreground prose-li:mb-2
            prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:shadow-lg
            prose-pre:code:bg-transparent prose-pre:code:text-slate-50 prose-pre:code:p-0
            prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:pl-4 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:rounded-r prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-table:border-collapse prose-table:border prose-table:border-gray-200 dark:prose-table:border-gray-700 prose-table:my-6
            prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-gray-200 dark:prose-th:border-gray-700
            prose-td:p-3 prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-700
          ">
            <Component />
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;