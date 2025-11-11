import React from 'react';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import { useSEO } from '@/hooks/useSEO';

const About: React.FC = () => {
  useSEO({
    title: 'About - Gabriela Schlemper | Full Stack Developer',
    description: 'Learn about my experience as a Full Stack Developer, Frontend Engineer, and Software Engineer. Explore my skills in React, TypeScript, Vue.js, and modern web development.',
    url: 'https://gabschlemper.dev/about',
    image: 'https://gabschlemper.dev/images/profile-512.webp'
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-20">
        <Breadcrumb items={breadcrumbItems} />
        <ExperienceTimeline />
        <SkillsSection />
      </main>
    </div>
  );
};

export default About;
