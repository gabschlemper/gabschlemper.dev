import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Import tool icons
import reactIcon from '@/assets/react-icon.png';
import javascriptIcon from '@/assets/javascript-icon.png';
import typescriptIcon from '@/assets/typescript-icon.png';
import vueIcon from '@/assets/vue-icon.png';
import nodejsIcon from '@/assets/nodejs-icon.png';
import nextjsIcon from '@/assets/nextjs-icon.png';
import htmlIcon from '@/assets/html-icon.png';
import cssIcon from '@/assets/css-icon.png';
import figmaIcon from '@/assets/figma-icon.png';
import gitIcon from '@/assets/git-icon.png';
import gcpIcon from '@/assets/gcp-icon.png';
import tailwindIcon from '@/assets/tailwind-icon.png';
import jestIcon from '@/assets/jest-icon.png';
import cypressIcon from '@/assets/cypress-icon.png';
import playwrightIcon from '@/assets/playwright-icon.png';
import vitestIcon from '@/assets/vitest-icon.png';
import reduxIcon from '@/assets/redux-icon.png';
import sqlIcon from '@/assets/sql-icon.png';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const tools = [
    { name: 'React', icon: reactIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'Vue.js', icon: vueIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Next.js', icon: nextjsIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Google Cloud', icon: gcpIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Jest', icon: jestIcon },
    { name: 'Cypress', icon: cypressIcon },
    { name: 'Playwright', icon: playwrightIcon },
    { name: 'Vitest', icon: vitestIcon },
    { name: 'Redux', icon: reduxIcon },
    { name: 'SQL', icon: sqlIcon }
  ];

  const skillLevels = [
    { name: 'HTML', level: 95 },
    { name: 'React', level: 90 },
    { name: 'CSS', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Vue.js', level: 75 }
  ];

  return (
    <section className="py-20">
      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">What I Use to</span> <span className="text-foreground">Build Stuff</span>
        </h2>
        <p className="text-center text-foreground-muted mb-12 max-w-4xl mx-auto">
          Here are the powerful tools and technologies I use to bring your ideas to life. From front-end frameworks to back-end systems, I create seamless, scalable solutions tailored to your needs, delivering high-quality results with lasting impact.
        </p>
        
        {/* Tools Carousel */}
        <div className="mb-16 fade-in-delay-1">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tools.map((tool, index) => (
                <CarouselItem key={tool.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="bg-background-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={tool.icon} 
                          alt={`${tool.name} icon`} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Skills Progress Bars */}
        <div className="fade-in-delay-2">
          <h3 className="text-xl font-semibold mb-8 text-center text-primary">Skill Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillLevels.map((skill) => (
              <div key={skill.name} className="bg-background-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary text-sm font-bold">{skill.level}%</span>
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
    </section>
  );
};

export default SkillsSection;