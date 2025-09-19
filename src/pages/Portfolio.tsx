import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import HeroSection from '@/components/HeroSection';
import WhyHireSection from '@/components/WhyHireSection';
import Contact from '@/components/Contact';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <WhyHireSection />
          <ExperienceTimeline />
          <SkillsSection />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;