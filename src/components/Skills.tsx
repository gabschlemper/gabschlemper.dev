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
    <section id="skills" className="py-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-primary fade-in">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`portfolio-card fade-in-delay-${categoryIndex % 4 + 1}`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`tech-badge ${getTechBadgeClass(skill)}`}
                  >
                    {skill}
                  </span>
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