import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const JourneySection: React.FC = () => {
  const { t } = useLanguage();

  const educationItems = [
    {
      title: t('education.senai.title'),
      period: t('education.senai.period'),
      institution: t('education.senai.institution')
    },
    {
      title: t('education.cs50.title'),
      period: t('education.cs50.period'),
      institution: t('education.cs50.institution')
    },
    {
      title: t('education.bootcamp.title'),
      period: t('education.bootcamp.period'),
      institution: t('education.bootcamp.institution')
    },
    {
      title: t('education.english.title'),
      period: t('education.english.period'),
      institution: t('education.english.institution')
    }
  ];

  const experienceItems = [
    {
      title: t('experience.dynamox.title'),
      company: t('experience.dynamox.company'),
      period: t('experience.dynamox.period'),
      location: t('experience.dynamox.location')
    },
    {
      title: t('experience.aqtech.title'),
      company: t('experience.aqtech.company'),
      period: t('experience.aqtech.period'),
      location: t('experience.aqtech.location')
    },
    {
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      period: t('experience.freelance.period'),
      location: t('experience.freelance.location')
    }
  ];

  return (
    <section className="py-20">
      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center text-primary">
          {t('journey.title')}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div className="fade-in-delay-1">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {t('journey.education')}
            </h3>
            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <div key={index} className="bg-background-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-foreground-muted text-sm mb-1">{item.institution}</p>
                  <p className="text-primary text-sm">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Experience */}
          <div className="fade-in-delay-2">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {t('journey.experience')}
            </h3>
            <div className="space-y-4">
              {experienceItems.map((item, index) => (
                <div key={index} className="bg-background-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-foreground-muted text-sm mb-1">{item.company}</p>
                  <p className="text-primary text-sm">{item.period}</p>
                  <p className="text-foreground-muted text-xs">{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;