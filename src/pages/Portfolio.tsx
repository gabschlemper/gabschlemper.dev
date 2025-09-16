import React from 'react';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <Navigation />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* Main Content */}
      <main className="lg:ml-80 pt-20 lg:pt-0 px-6 lg:p-12">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;