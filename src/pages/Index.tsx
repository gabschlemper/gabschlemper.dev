import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Github, Linkedin } from 'lucide-react';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full py-20">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent">
              <ResponsiveImage
                src="/images/profile"
                alt="Gabriela Schlemper"
                className="w-full h-full object-cover"
                sizes="128px"
                priority={true}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Gabriela Schlemper
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted mb-6">
              {t('hero.tagline')}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-foreground leading-relaxed">
              {t('whyhire.description')}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/gabrielaschlemper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/gabrielaschlemper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={32} />
            </a>
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              {t('hero.readMore')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
