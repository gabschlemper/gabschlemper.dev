import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const tools = [
    { name: 'React', iconUrl: 'https://skillicons.dev/icons?i=react' },
    { name: 'JavaScript', iconUrl: 'https://skillicons.dev/icons?i=js' },
    { name: 'TypeScript', iconUrl: 'https://skillicons.dev/icons?i=ts' },
    { name: 'Vue.js', iconUrl: 'https://skillicons.dev/icons?i=vue' },
    { name: 'Node.js', iconUrl: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Next.js', iconUrl: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'HTML', iconUrl: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', iconUrl: 'https://skillicons.dev/icons?i=css' },
    { name: 'Figma', iconUrl: 'https://skillicons.dev/icons?i=figma' },
    { name: 'Git', iconUrl: 'https://skillicons.dev/icons?i=git' },
    { name: 'Google Cloud', iconUrl: 'https://skillicons.dev/icons?i=gcp' },
    { name: 'Tailwind CSS', iconUrl: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Jest', iconUrl: 'https://skillicons.dev/icons?i=jest' },
    { name: 'Cypress', iconUrl: 'https://skillicons.dev/icons?i=cypress' },
    { name: 'Vitest', iconUrl: 'https://skillicons.dev/icons?i=vitest' },
    { name: 'Redux', iconUrl: 'https://skillicons.dev/icons?i=redux' },
    { name: 'SQL', iconUrl: 'https://skillicons.dev/icons?i=mysql' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="fade-in">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">What I Use to</span> <span className="text-foreground">Build Stuff</span>
        </h2>
        <p className="text-center text-foreground-muted mb-12 max-w-4xl mx-auto">
          Here are the powerful tools and technologies I use to bring your ideas to life. From front-end frameworks to back-end systems, I create seamless, scalable solutions tailored to your needs, delivering high-quality results with lasting impact.
        </p>
        
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
                  <div className="bg-background-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 group">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={tool.iconUrl} 
                          alt={`${tool.name} icon`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
      </div>
    </section>
  );
};

export default SkillsSection;