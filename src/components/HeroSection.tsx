import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToWhy = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 text-center">
      <div className="fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-foreground">{t('hero.greeting')} </span>
          <span className="text-primary">{t('hero.role')}</span>
          <br />
          <span className="text-foreground">{t('hero.tagline')}</span>
        </h1>
        
        <button 
          onClick={scrollToWhy}
          className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 btn-glow"
        >
          {t('hero.readMore')}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;