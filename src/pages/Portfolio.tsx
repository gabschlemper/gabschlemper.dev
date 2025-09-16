import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <Hero />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;