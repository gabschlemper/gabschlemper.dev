import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt' | 'es';

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
  'nav.about': { en: 'About', pt: 'Sobre', es: 'Acerca' },
  'nav.experience': { en: 'Experience', pt: 'Experiência', es: 'Experiencia' },
  'nav.skills': { en: 'Skills', pt: 'Habilidades', es: 'Habilidades' },
  'nav.contact': { en: 'Contact', pt: 'Contato', es: 'Contacto' },

  // Hero Section
  'hero.name': { en: 'Your Name', pt: 'Seu Nome', es: 'Tu Nombre' },
  'hero.title': { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack', es: 'Desarrollador Full Stack' },
  'hero.subtitle': { en: 'I build accessible, pixel-perfect digital experiences for the web.', pt: 'Eu crio experiências digitais acessíveis e pixel-perfect para a web.', es: 'Construyo experiencias digitales accesibles y pixel-perfect para la web.' },

  // About Section
  'about.title': { en: 'About Me', pt: 'Sobre Mim', es: 'Sobre Mí' },
  'about.description': { 
    en: 'Detail-oriented frontend developer passionate about bridging design and engineering. Recognized for building scalable, modular UIs and thriving in collaborative, agile environments. Seeking opportunities to apply expertise in React, TypeScript, and UI/UX best practices.',
    pt: 'Desenvolvedor frontend detalhista e apaixonado por conectar design e engenharia. Reconhecido por construir interfaces escaláveis e modulares, prosperando em ambientes colaborativos e ágeis. Buscando oportunidades para aplicar expertise em React, TypeScript e melhores práticas de UI/UX.',
    es: 'Desarrollador frontend detallista y apasionado por conectar diseño e ingeniería. Reconocido por construir interfaces escalables y modulares, prosperando en entornos colaborativos y ágiles. Buscando oportunidades para aplicar experiencia en React, TypeScript y mejores prácticas de UI/UX.'
  },

  // Experience Section
  'experience.title': { en: 'Experience', pt: 'Experiência', es: 'Experiencia' },
  
  // Dynamox
  'experience.dynamox.title': { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack', es: 'Desarrollador Full Stack' },
  'experience.dynamox.company': { en: 'Dynamox', pt: 'Dynamox', es: 'Dynamox' },
  'experience.dynamox.period': { en: 'Feb 2025 – Present', pt: 'Fev 2025 – Atual', es: 'Feb 2025 – Presente' },
  'experience.dynamox.location': { en: 'Florianópolis, Brazil', pt: 'Florianópolis, Brasil', es: 'Florianópolis, Brasil' },
  'experience.dynamox.description': {
    en: 'Recognized as the team\'s React and frontend specialist; mentored peers on performance and best practices. Designed and implemented scalable features with React.js and TypeScript, collaborating closely with backend and design teams.',
    pt: 'Reconhecido como especialista em React e frontend da equipe; mentoreei colegas sobre performance e melhores práticas. Projetei e implementei funcionalidades escaláveis com React.js e TypeScript, colaborando estreitamente com equipes de backend e design.',
    es: 'Reconocido como especialista en React y frontend del equipo; mentoré a colegas sobre rendimiento y mejores prácticas. Diseñé e implementé características escalables con React.js y TypeScript, colaborando estrechamente con equipos de backend y diseño.'
  },

  // AQTech
  'experience.aqtech.title': { en: 'Front End Developer', pt: 'Desenvolvedor Front End', es: 'Desarrollador Front End' },
  'experience.aqtech.company': { en: 'AQTech Power Prognosis', pt: 'AQTech Power Prognosis', es: 'AQTech Power Prognosis' },
  'experience.aqtech.period': { en: 'Jan 2024 – Feb 2025', pt: 'Jan 2024 – Fev 2025', es: 'Ene 2024 – Feb 2025' },
  'experience.aqtech.location': { en: 'Florianópolis, Brazil', pt: 'Florianópolis, Brasil', es: 'Florianópolis, Brasil' },
  'experience.aqtech.description': {
    en: 'Delivered impactful solutions for a wind turbine analysis product using Vue.js. Developed a Figma-based design system, accelerating development and ensuring consistent branding.',
    pt: 'Entreguei soluções impactantes para um produto de análise de turbinas eólicas usando Vue.js. Desenvolvi um sistema de design baseado no Figma, acelerando o desenvolvimento e garantindo branding consistente.',
    es: 'Entregué soluciones impactantes para un producto de análisis de turbinas eólicas usando Vue.js. Desarrollé un sistema de diseño basado en Figma, acelerando el desarrollo y garantizando branding consistente.'
  },

  // Freelance
  'experience.freelance.title': { en: 'Front End Developer', pt: 'Desenvolvedor Front End', es: 'Desarrollador Front End' },
  'experience.freelance.company': { en: 'Freelance', pt: 'Freelancer', es: 'Freelance' },
  'experience.freelance.period': { en: 'Mar 2021 – Oct 2022', pt: 'Mar 2021 – Out 2022', es: 'Mar 2021 – Oct 2022' },
  'experience.freelance.location': { en: 'Remote', pt: 'Remoto', es: 'Remoto' },
  'experience.freelance.description': {
    en: 'Built responsive, interactive websites and applications using React.js, Next.js, and Gatsby for clients worldwide. Optimized performance, accessibility, and user engagement on diverse projects.',
    pt: 'Construí sites e aplicações responsivos e interativos usando React.js, Next.js e Gatsby para clientes mundialmente. Otimizei performance, acessibilidade e engajamento do usuário em projetos diversos.',
    es: 'Construí sitios web y aplicaciones responsivas e interactivas usando React.js, Next.js y Gatsby para clientes de todo el mundo. Optimicé rendimiento, accesibilidad y engagement del usuario en proyectos diversos.'
  },

  // Skills Section
  'skills.title': { en: 'Skills & Technologies', pt: 'Habilidades e Tecnologias', es: 'Habilidades y Tecnologías' },
  'skills.languages': { en: 'Languages', pt: 'Linguagens', es: 'Lenguajes' },
  'skills.frameworks': { en: 'Frameworks', pt: 'Frameworks', es: 'Frameworks' },
  'skills.frontend': { en: 'Frontend', pt: 'Frontend', es: 'Frontend' },
  'skills.testing': { en: 'Testing', pt: 'Testes', es: 'Testing' },
  'skills.devops': { en: 'DevOps/Cloud', pt: 'DevOps/Cloud', es: 'DevOps/Cloud' },
  'skills.other': { en: 'Other', pt: 'Outros', es: 'Otros' },

  // Contact Section
  'contact.title': { en: 'Get In Touch', pt: 'Entre em Contato', es: 'Ponte en Contacto' },
  'contact.description': {
    en: 'I\'m always interested in new opportunities and collaborations. Feel free to reach out!',
    pt: 'Sempre interessado em novas oportunidades e colaborações. Fique à vontade para entrar em contato!',
    es: 'Siempre interesado en nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!'
  },

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