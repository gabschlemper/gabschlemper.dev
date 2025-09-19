import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import HeroSection from '@/components/HeroSection';
import WhyHireSection from '@/components/WhyHireSection';
import JourneySection from '@/components/JourneySection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Contact from '@/components/Contact';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      {/* Main Content */}
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