import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 lg:py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 glow-text fade-in text-center lg:text-left">
          {t('contact.title')}
        </h2>
        
        <div className="portfolio-card fade-in-delay-1 text-center">
          <p className="text-lg lg:text-xl text-foreground-muted leading-relaxed mb-6 lg:mb-8">
            {t('contact.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default"
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-300 glow-text"
              asChild
            >
              <a href="mailto:your.email@example.com">
                Send Email
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
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