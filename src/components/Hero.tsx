import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="fade-in max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
            Gabriela Schlemper
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium mb-8 text-foreground-muted">
            {t('hero.title')}
          </h2>
          <p className="text-lg lg:text-xl text-foreground-muted leading-relaxed">
            {t('about.description')}
          </p>
        </div>
        <div className="fade-in ml-10 flex-shrink-0">
          <img 
            src="/images/profile.png" 
            alt="Gabriela Schlemper" 
            className="rounded-full w-64 h-64 object-cover border-4 border-background-secondary shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;