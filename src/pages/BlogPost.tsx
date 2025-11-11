import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { useSEO } from '@/hooks/useSEO';
import { getBlogPost } from '@/lib/blog';
import { MDXComponents } from '@/components/MDXComponents';
import { Button } from '@/components/ui/button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

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
      
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Button
          variant="ghost"
          className="mb-8 -ml-2 mt-10 hover:bg-muted"
          onClick={() => navigate('/blog')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article>
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm mb-6">
              <time className="font-medium">{post.date}</time>
              {post.readingTime && (
                <>
                  <span className="text-muted-foreground/50">•</span>
                  <span>{post.readingTime}</span>
                </>
              )}
              {post.author && (
                <>
                  <span className="text-muted-foreground/50">•</span>
                  <span>by {post.author}</span>
                </>
              )}
            </div>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium"
                  >
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
                className="w-full rounded-lg mt-8 mb-8 shadow-md"
                loading="eager"
              />
            )}
          </header>

          {/* Render the MDX content */}
          <MDXProvider components={MDXComponents}>
            <div className="max-w-none [&>h1:first-of-type]:hidden [&>h1:first-of-type+h2]:mt-0">
              <Component />
            </div>
          </MDXProvider>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;