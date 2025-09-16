import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRandomBadgeClass } from '@/hooks/use-random-badge-class';

const TechBadge: React.FC<{ skill: string }> = ({ skill }) => {
  const badgeClass = useRandomBadgeClass(skill);
  return (
    <span className={`tech-badge ${badgeClass}`}>
      {skill}
    </span>
  );
};

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


  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-primary fade-in">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`portfolio-card fade-in-delay-${categoryIndex % 4 + 1}`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 md:mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;