import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin } from 'lucide-react';

const WhyHireSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center text-foreground">
          {t('whyhire.title')}
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 fade-in-delay-1">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden border-2 border-primary/30">
              <img 
                src="/images/profile.png" 
                alt="Gabriela Schlemper - Full Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 fade-in-delay-2">
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              {t('whyhire.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/gabschlemper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/gabrielaschlemper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {t('whyhire.yearsExp')}
                </div>
                <div className="text-foreground-muted text-sm">
                  {t('whyhire.expLabel')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {t('whyhire.projectsCount')}
                </div>
                <div className="text-foreground-muted text-sm">
                  {t('whyhire.projectsLabel')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;