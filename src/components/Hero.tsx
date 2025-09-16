import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative px-4 lg:px-0">
      <div className="max-w-4xl w-full text-center lg:text-left">
        <div className="fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 glow-text">
            Full Stack Developer
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-8 fade-in-delay-1">
            {t('hero.title')}
          </h2>
          <p className="text-lg lg:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 fade-in-delay-2">
            {t('about.description')}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl float-animation opacity-50 lg:opacity-100" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl float-animation opacity-50 lg:opacity-100" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-green/10 rounded-full blur-2xl float-animation opacity-30 lg:opacity-100" 
             style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default Hero;