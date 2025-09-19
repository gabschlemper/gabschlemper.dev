import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceTimeline: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: '1',
      title: t('experience.dynamox.title'),
      company: t('experience.dynamox.company'),
      period: t('experience.dynamox.period'),
      location: t('experience.dynamox.location'),
      current: true,
      companyInitials: 'DX'
    },
    {
      id: '2',
      title: t('experience.aqtech.title'),
      company: t('experience.aqtech.company'),
      period: t('experience.aqtech.period'),
      location: t('experience.aqtech.location'),
      current: false,
      companyInitials: 'AQ'
    },
    {
      id: '3',
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      period: t('experience.freelance.period'),
      location: t('experience.freelance.location'),
      current: false,
      companyInitials: 'FL'
    }
  ];

  return (
    <section className="py-20">
      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-primary">Professional</span> <span className="text-foreground">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot and company icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-background-card border-2 border-primary rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">{experience.companyInitials}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:pr-8 md:text-right' 
                    : 'md:pl-8 md:text-left'
                }`}>
                  <div className="bg-background-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    } justify-start`}>
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      {experience.current && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-1">{experience.company}</p>
                    <p className="text-foreground-muted text-sm mb-1">{experience.period}</p>
                    <p className="text-foreground-muted text-xs">{experience.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;