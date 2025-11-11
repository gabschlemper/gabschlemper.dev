import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-20">
        <nav className="text-sm text-foreground-muted mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">About</span>
        </nav>

        <ExperienceTimeline />
        <SkillsSection />
      </main>
    </div>
  );
};

export default About;
