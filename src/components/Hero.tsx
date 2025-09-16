import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-20" itemScope itemType="https://schema.org/Person">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="fade-in w-full md:max-w-3xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-primary" itemProp="name">
            Gabriela Schlemper
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 md:mb-8 text-foreground-muted">
            <span itemProp="jobTitle">{t('hero.title')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground-muted leading-relaxed" itemProp="description">
            {t('about.description')}
          </p>
        </div>
        <div className="fade-in flex-shrink-0 order-first md:order-last">
          <img 
            src="/images/profile.png" 
            alt="Gabriela Schlemper - Full Stack Developer and Frontend Engineer" 
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 border-background-secondary shadow-lg mx-auto"
            itemProp="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;