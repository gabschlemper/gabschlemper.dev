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
  'hero.greeting': { en: 'Hey, I am', pt: 'Olá, eu sou', es: 'Hola, soy' },
  'hero.name': { en: 'Gabriela Schlemper', pt: 'Gabriela Schlemper', es: 'Gabriela Schlemper' },
  'hero.role': { en: 'Web Dev', pt: 'Desenvolvedora Web', es: 'Desarrolladora Web' },
  'hero.tagline': { en: 'Building your dream pixel by pixel!', pt: 'Construindo seu sonho pixel por pixel!', es: '¡Construyendo tu sueño pixel por pixel!' },
  'hero.readMore': { en: 'Read More', pt: 'Ler Mais', es: 'Leer Más' },

  // Why Hire Me Section
  'whyhire.title': { en: 'Why hire me for your next project?', pt: 'Por que me contratar para seu próximo projeto?', es: '¿Por qué contratarme para tu próximo proyecto?' },
  'whyhire.description': { 
    en: 'I am a professional with a degree in computer science, with more than two years of experience, including 1 year of experience working as a software developer and 2 years as a freelancer.',
    pt: 'Sou uma profissional com formação em ciência da computação, com mais de dois anos de experiência, incluindo 1 ano de experiência trabalhando como desenvolvedora de software e 2 anos como freelancer.',
    es: 'Soy una profesional con formación en ciencias de la computación, con más de dos años de experiencia, incluyendo 1 año de experiencia trabajando como desarrolladora de software y 2 años como freelancer.'
  },
  'whyhire.yearsExp': { en: '3 years', pt: '3 anos', es: '3 años' },
  'whyhire.expLabel': { en: 'Experience', pt: 'Experiência', es: 'Experiencia' },
  'whyhire.projectsCount': { en: '+50 Projects', pt: '+50 Projetos', es: '+50 Proyectos' },
  'whyhire.projectsLabel': { en: 'GitHub', pt: 'GitHub', es: 'GitHub' },

  // Journey Section
  'journey.title': { en: 'My Academic and Professional Journey', pt: 'Minha Jornada Acadêmica e Profissional', es: 'Mi Trayectoria Académica y Profesional' },
  'journey.education': { en: 'Education', pt: 'Educação', es: 'Educación' },
  'journey.experience': { en: 'Professional Experience', pt: 'Experiência Profissional', es: 'Experiencia Profesional' },

  // Education
  'education.senai.title': { en: 'Analysis and System Development', pt: 'Análise e Desenvolvimento de Sistemas', es: 'Análisis y Desarrollo de Sistemas' },
  'education.senai.period': { en: '2024 - 2026', pt: '2024 - 2026', es: '2024 - 2026' },
  'education.senai.institution': { en: 'Senai/SC', pt: 'Senai/SC', es: 'Senai/SC' },
  
  'education.cs50.title': { en: 'CS50: Introduction to Computer Science', pt: 'CS50: Introdução à Ciência da Computação', es: 'CS50: Introducción a las Ciencias de la Computación' },
  'education.cs50.period': { en: '2023 - 2024', pt: '2023 - 2024', es: '2023 - 2024' },
  'education.cs50.institution': { en: 'Harvard University', pt: 'Universidade de Harvard', es: 'Universidad de Harvard' },
  
  'education.bootcamp.title': { en: 'FullStack Ignite Bootcamp', pt: 'Bootcamp FullStack Ignite', es: 'Bootcamp FullStack Ignite' },
  'education.bootcamp.period': { en: '2023', pt: '2023', es: '2023' },
  'education.bootcamp.institution': { en: 'Rocketseat', pt: 'Rocketseat', es: 'Rocketseat' },
  
  'education.english.title': { en: 'English Language Immersion', pt: 'Imersão em Língua Inglesa', es: 'Inmersión en Idioma Inglés' },
  'education.english.period': { en: '2022', pt: '2022', es: '2022' },
  'education.english.institution': { en: 'Dublin, Ireland', pt: 'Dublin, Irlanda', es: 'Dublín, Irlanda' },
  
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