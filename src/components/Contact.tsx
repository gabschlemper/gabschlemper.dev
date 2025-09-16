import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-primary fade-in text-center">
          {t('contact.title')}
        </h2>
        
        <div className="portfolio-card fade-in-delay-1 text-center">
          <p className="text-lg lg:text-xl text-foreground-muted leading-relaxed mb-8">
            {t('contact.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="mailto:gabschlemper@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-primary/90"
            >
              Send Email
            </a>
            
            <a 
              href="https://linkedin.com/in/gabrielaschlemper" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium transition-all duration-200 hover:bg-muted"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="text-foreground-muted text-sm">
              Florianópolis, Brazil • Available for Remote Work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;