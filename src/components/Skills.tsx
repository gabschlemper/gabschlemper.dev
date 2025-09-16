import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: t('skills.languages'),
      skills: ['TypeScript', 'JavaScript', 'SQL']
    },
    {
      title: t('skills.frameworks'),
      skills: ['React.js', 'Next.js', 'Vue.js (2 & 3)', 'Redux', 'Nuxt', 'Pinia', 'Vuex', 'Node.js']
    },
    {
      title: t('skills.frontend'),
      skills: ['CSS', 'HTML', 'Styled Components', 'Tailwind CSS']
    },
    {
      title: t('skills.testing'),
      skills: ['Vitest', 'Jest', 'Cypress', 'Playwright']
    },
    {
      title: t('skills.devops'),
      skills: ['Google Cloud Platform', 'Bitbucket', 'GitHub', 'CI/CD']
    },
    {
      title: t('skills.other'),
      skills: ['RESTful APIs', 'Figma', 'UI/UX', 'Agile', 'English (B2)']
    }
  ];

  const getTechBadgeClass = (skill: string): string => {
    const lowerSkill = skill.toLowerCase();
    if (lowerSkill.includes('react') || lowerSkill.includes('typescript')) return 'tech-badge-react';
    if (lowerSkill.includes('vue')) return 'tech-badge-vue';
    if (lowerSkill.includes('javascript')) return 'tech-badge-javascript';
    if (lowerSkill.includes('test') || lowerSkill.includes('cypress') || lowerSkill.includes('jest') || lowerSkill.includes('vitest') || lowerSkill.includes('playwright')) return 'tech-badge-testing';
    if (lowerSkill.includes('google') || lowerSkill.includes('cloud') || lowerSkill.includes('github') || lowerSkill.includes('ci/cd')) return 'tech-badge-cloud';
    return 'tech-badge-default';
  };

  return (
    <section id="skills" className="py-12 lg:py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 glow-text fade-in text-center lg:text-left">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`portfolio-card fade-in-delay-${categoryIndex % 4 + 1}`}
            >
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-4 lg:mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`tech-badge ${getTechBadgeClass(skill)} text-xs lg:text-sm`}
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6 lg:mb-8 fade-in text-center lg:text-left">
            {t('education.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="portfolio-card fade-in-delay-1">
              <h4 className="text-base lg:text-lg font-medium text-primary mb-2">
                {t('education.senai')}
              </h4>
              <p className="text-foreground-muted text-sm">
                Senai/SC — Florianópolis, Brazil
              </p>
              <p className="text-foreground-muted text-sm">
                Jan 2024 – Jul 2026
              </p>
            </div>
            
            <div className="portfolio-card fade-in-delay-2">
              <h4 className="text-base lg:text-lg font-medium text-primary mb-2">
                {t('education.cs50')}
              </h4>
              <p className="text-foreground-muted text-sm">
                Harvard University
              </p>
              <p className="text-foreground-muted text-sm">
                Oct 2023 – Jan 2024
              </p>
            </div>
            
            <div className="portfolio-card fade-in-delay-3">
              <h4 className="text-base lg:text-lg font-medium text-primary mb-2">
                {t('education.rocketseat')}
              </h4>
              <p className="text-foreground-muted text-sm">
                Rocketseat
              </p>
              <p className="text-foreground-muted text-sm">
                May 2023 – Nov 2023
              </p>
            </div>
            
            <div className="portfolio-card fade-in-delay-4">
              <h4 className="text-base lg:text-lg font-medium text-primary mb-2">
                English Language Immersion
              </h4>
              <p className="text-foreground-muted text-sm">
                Berlitz Dublin Language Centre
              </p>
              <p className="text-foreground-muted text-sm">
                Mar 2022 – Nov 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;