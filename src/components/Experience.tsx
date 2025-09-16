import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRandomBadgeClass } from '@/hooks/use-random-badge-class';

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  const badgeClass = useRandomBadgeClass(tech);
  return (
    <span className={`tech-badge ${badgeClass}`}>
      {tech}
    </span>
  );
};

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      id: 'dynamox',
      title: t('experience.dynamox.title'),
      company: t('experience.dynamox.company'),
      period: t('experience.dynamox.period'),
      location: t('experience.dynamox.location'),
      description: t('experience.dynamox.description'),
      technologies: ['React.js', 'TypeScript', 'Vitest', 'Cypress', 'GCP']
    },
    {
      id: 'aqtech',
      title: t('experience.aqtech.title'),
      company: t('experience.aqtech.company'),
      period: t('experience.aqtech.period'),
      location: t('experience.aqtech.location'),
      description: t('experience.aqtech.description'),
      technologies: ['Vue.js', 'Figma', 'Vitest', 'Jest', 'Playwright', 'C#/.NET']
    },
    {
      id: 'freelance',
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      period: t('experience.freelance.period'),
      location: t('experience.freelance.location'),
      description: t('experience.freelance.description'),
      technologies: ['React.js', 'Next.js', 'Gatsby', 'Tailwind CSS', 'Styled Components']
    }
  ];


  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-primary fade-in">
          {t('experience.title')}
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`portfolio-card fade-in-delay-${index + 1}`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="text-left lg:text-right text-foreground-muted">
                  <p className="font-medium text-sm lg:text-base">{exp.period}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>
              
              <p className="text-foreground-muted leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;