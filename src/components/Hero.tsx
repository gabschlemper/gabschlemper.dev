import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl">
        <div className="fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
            Gabriela Schlemper
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium mb-8 text-foreground-muted">
            {t('hero.title')}
          </h2>
          <p className="text-lg lg:text-xl text-foreground-muted leading-relaxed max-w-3xl">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;