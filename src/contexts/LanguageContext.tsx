import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.blog': { en: 'Blog', pt: 'Blog' },
  'nav.experience': { en: 'Journey', pt: 'Jornada' },
  'nav.skills': { en: 'Skills', pt: 'Habilidades' },
  'nav.contact': { en: 'Contact', pt: 'Contato' },

  // Hero Section
  'hero.greeting': { en: 'Hey, I am', pt: 'Olá, eu sou' },
  'hero.name': { en: 'Gabriela Schlemper', pt: 'Gabriela Schlemper' },
  'hero.role': { en: 'Web Dev', pt: 'Desenvolvedora Web' },
  'hero.tagline': { en: 'Building your dream pixel by pixel!', pt: 'Construindo seu sonho pixel por pixel!' },
  'hero.readMore': { en: 'Read More', pt: 'Ler Mais' },

  // Why Hire Me Section
  'whyhire.title': { en: 'Why hire me for your next project?', pt: 'Por que me contratar para seu próximo projeto?' },
  'whyhire.description': { 
    en: 'Frontend specialist with full stack capabilities, passionate about bridging design and engineering. I create responsive, accessible UIs with React and TypeScript while collaborating effectively across teams to deliver exceptional user experiences.',
    pt: 'Especialista em frontend com capacidades full stack, apaixonada por unir design e engenharia. Crio interfaces responsivas e acessíveis com React e TypeScript, colaborando efetivamente entre equipes para entregar experiências excepcionais aos usuários.'
  },
  'whyhire.yearsExp': { en: '5 years', pt: '5 anos' },
  'whyhire.expLabel': { en: 'Experience', pt: 'Experiência' },
  'whyhire.projectsCount': { en: '+20 Projects', pt: '+20 Projetos' },
  'whyhire.projectsLabel': { en: 'GitHub', pt: 'GitHub' },

  // Journey Section
  'journey.title': { en: 'Professional Journey', pt: 'Jornada Profissional' },

  // Dynamox
  'experience.dynamox.title': { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
  'experience.dynamox.company': { en: 'Dynamox', pt: 'Dynamox' },
  'experience.dynamox.period': { en: 'Feb 2025 – Present', pt: 'Fev 2025 – Atual' },
  'experience.dynamox.location': { en: 'Florianópolis, Brazil', pt: 'Florianópolis, Brasil' },
  'experience.dynamox.description': {
    en: 'Recognized as the team\'s React and frontend specialist; mentored peers on performance and best practices. Designed and implemented scalable features with React.js and TypeScript, collaborating closely with backend and design teams.',
    pt: 'Reconhecido como especialista em React e frontend da equipe; mentoreei colegas sobre performance e melhores práticas. Projetei e implementei funcionalidades escaláveis com React.js e TypeScript, colaborando estreitamente com equipes de backend e design.'
  },

  // AQTech
  'experience.aqtech.title': { en: 'Front End Developer', pt: 'Desenvolvedor Front End' },
  'experience.aqtech.company': { en: 'AQTech Power Prognosis', pt: 'AQTech Power Prognosis' },
  'experience.aqtech.period': { en: 'Jan 2024 – Feb 2025', pt: 'Jan 2024 – Fev 2025' },
  'experience.aqtech.location': { en: 'Florianópolis, Brazil', pt: 'Florianópolis, Brasil' },
  'experience.aqtech.description': {
    en: 'Delivered impactful solutions for a wind turbine analysis product using Vue.js. Developed a Figma-based design system, accelerating development and ensuring consistent branding.',
    pt: 'Entreguei soluções impactantes para um produto de análise de turbinas eólicas usando Vue.js. Desenvolvi um sistema de design baseado no Figma, acelerando o desenvolvimento e garantindo branding consistente.'
  },

  // Freelance
  'experience.freelance.title': { en: 'Front End Developer', pt: 'Desenvolvedor Front End' },
  'experience.freelance.company': { en: 'Freelance', pt: 'Freelancer' },
  'experience.freelance.period': { en: 'Mar 2021 – Oct 2022', pt: 'Mar 2021 – Out 2022' },
  'experience.freelance.location': { en: 'Remote', pt: 'Remoto' },
  'experience.freelance.description': {
    en: 'Built responsive, interactive websites and applications using React.js, Next.js, and Gatsby for clients worldwide. Optimized performance, accessibility, and user engagement on diverse projects.',
    pt: 'Construí sites e aplicações responsivos e interativos usando React.js, Next.js e Gatsby para clientes mundialmente. Otimizei performance, acessibilidade e engajamento do usuário em projetos diversos.'
  },

  // Contact Section
  'contact.title': { en: 'Get In Touch', pt: 'Entre em Contato' },
  'contact.description': {
    en: 'I\'m always interested in new opportunities and collaborations. Feel free to reach out!',
    pt: 'Sempre interessado em novas oportunidades e colaborações. Fique à vontade para entrar em contato!'
  },
  // Journey Section
  'journey.education': { en: 'Education', pt: 'Educação' },
  'journey.experience': { en: 'Professional Experience', pt: 'Experiência Profissional' },

  // Education
  'education.senai.title': { en: 'Technical Course in Systems Development', pt: 'Curso Técnico em Desenvolvimento de Sistemas' },
  'education.senai.period': { en: '2020 - 2022', pt: '2020 - 2022' },
  'education.senai.institution': { en: 'SENAI', pt: 'SENAI' },

  'education.cs50.title': { en: 'CS50: Introduction to Computer Science', pt: 'CS50: Introdução à Ciência da Computação' },
  'education.cs50.period': { en: '2021', pt: '2021' },
  'education.cs50.institution': { en: 'Harvard University (Online)', pt: 'Universidade de Harvard (Online)' },

  'education.bootcamp.title': { en: 'Full Stack Web Development Bootcamp', pt: 'Bootcamp de Desenvolvimento Web Full Stack' },
  'education.bootcamp.period': { en: '2021', pt: '2021' },
  'education.bootcamp.institution': { en: 'Digital Innovation One', pt: 'Digital Innovation One' },

  'education.english.title': { en: 'Advanced English Course', pt: 'Curso de Inglês Avançado' },
  'education.english.period': { en: '2019 - 2022', pt: '2019 - 2022' },
  'education.english.institution': { en: 'CNA Language School', pt: 'CNA Idiomas' },

};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};