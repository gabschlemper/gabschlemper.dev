import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const getBadgeClass = (index: number) => {
    const classes = ['tech-badge-color-1', 'tech-badge-color-2', 'tech-badge-color-3', 'tech-badge-color-4'];
    return classes[index % classes.length];
  };

  const skillCategories = [
    {
      name: t('skills.languages'),
      items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL']
    },
    {
      name: t('skills.frameworks'),
      items: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Redux']
    },
    {
      name: t('skills.frontend'),
      items: ['Tailwind CSS', 'Styled Components', 'Figma', 'UI/UX']
    },
    {
      name: t('skills.testing'),
      items: ['Vitest', 'Jest', 'Cypress', 'Playwright']
    },
    {
      name: t('skills.devops'),
      items: ['Google Cloud', 'GitHub', 'CI/CD', 'Git']
    }
  ];

  const skillLevels = [
    { name: 'HTML', level: 95 },
    { name: 'React', level: 90 },
    { name: 'CSS', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Vue.js', level: 75 }
  ];

  let skillIndex = 0;

  return (
    <section className="py-20">
      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Tools</span> <span className="text-foreground">and</span> <span className="text-primary">Skills</span>
        </h2>
        
        {/* Skill Categories */}
        <div className="mb-16 fade-in-delay-1">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skillCategories.map((category) => (
              <div key={category.name} className="mb-6">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className={`tech-badge ${getBadgeClass(skillIndex++)} mr-2 mb-2 inline-block`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 fade-in-delay-2">
          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Tools</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">VS</span>
                </div>
                <span className="text-foreground-muted flex-1">Visual Studio Code</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">GIT</span>
                </div>
                <span className="text-foreground-muted flex-1">Git</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">GH</span>
                </div>
                <span className="text-foreground-muted flex-1">GitHub</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">FG</span>
                </div>
                <span className="text-foreground-muted flex-1">Figma</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Skills</h3>
            <div className="space-y-4">
              {skillLevels.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground-muted text-sm">{skill.name}</span>
                    <span className="text-primary text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;