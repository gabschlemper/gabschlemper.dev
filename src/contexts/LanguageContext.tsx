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
  'nav.blog': { en: 'Blog', pt: 'Blog', es: 'Blog' },
  'nav.experience': { en: 'Journey', pt: 'Jornada', es: 'Trayectoria' },
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
    en: 'Frontend specialist with full stack capabilities, passionate about bridging design and engineering. I create responsive, accessible UIs with React and TypeScript while collaborating effectively across teams to deliver exceptional user experiences.',
    pt: 'Especialista em frontend com capacidades full stack, apaixonada por unir design e engenharia. Crio interfaces responsivas e acessíveis com React e TypeScript, colaborando efetivamente entre equipes para entregar experiências excepcionais aos usuários.',
    es: 'Especialista frontend con capacidades full stack, apasionada por unir diseño e ingeniería. Creo interfaces responsivas y accesibles con React y TypeScript, colaborando efectivamente entre equipos para entregar experiencias excepcionales a los usuarios.'
  },
  'whyhire.yearsExp': { en: '5 years', pt: '5 anos', es: '5 años' },
  'whyhire.expLabel': { en: 'Experience', pt: 'Experiência', es: 'Experiencia' },
  'whyhire.projectsCount': { en: '+20 Projects', pt: '+20 Projetos', es: '+20 Proyectos' },
  'whyhire.projectsLabel': { en: 'GitHub', pt: 'GitHub', es: 'GitHub' },

  // Journey Section
  'journey.title': { en: 'Professional Journey', pt: 'Jornada Profissional', es: 'Trayectoria Profesional' },

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

  // Contact Section
  'contact.title': { en: 'Get In Touch', pt: 'Entre em Contato', es: 'Ponte en Contacto' },
  'contact.description': {
    en: 'I\'m always interested in new opportunities and collaborations. Feel free to reach out!',
    pt: 'Sempre interessado em novas oportunidades e colaborações. Fique à vontade para entrar em contato!',
    es: 'Siempre interesado en nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!'
  },

  // Blog Section
  'blog.title': { en: "Gabriela Schlemper's Blog", pt: 'Blog da Gabriela Schlemper', es: 'Blog de Gabriela Schlemper' },
  'blog.subtitle': { en: 'The latest ideas, writing, and projects from Gabriela Schlemper.', pt: 'As últimas ideias, escritos e projetos de Gabriela Schlemper.', es: 'Las últimas ideas, escritos y proyectos de Gabriela Schlemper.' },
  
  'blog.post1.title': { en: 'Optimizing React Performance for Large Applications', pt: 'Otimizando Performance do React em Aplicações Grandes', es: 'Optimizando el Rendimiento de React en Aplicaciones Grandes' },
  'blog.post1.date': { en: '6 days ago', pt: '6 dias atrás', es: 'hace 6 días' },
  'blog.post1.excerpt': { en: 'An honest look at performance optimization techniques for React applications. Learn how to identify bottlenecks and improve your app\'s speed.', pt: 'Um olhar honesto sobre técnicas de otimização de performance para aplicações React. Aprenda como identificar gargalos e melhorar a velocidade do seu app.', es: 'Una mirada honesta a las técnicas de optimización de rendimiento para aplicaciones React. Aprende a identificar cuellos de botella y mejorar la velocidad de tu aplicación.' },
  'blog.post1.content': { 
    en: 'Performance optimization is crucial for delivering exceptional user experiences in large React applications. In this comprehensive guide, I share practical techniques and real-world strategies that have helped me optimize production applications at scale. From lazy loading and code splitting to memoization and virtual scrolling, we\'ll explore proven approaches to identify and eliminate performance bottlenecks. I\'ll walk you through profiling tools, common pitfalls to avoid, and best practices that ensure your React apps remain fast and responsive as they grow.',
    pt: 'A otimização de performance é crucial para entregar experiências excepcionais aos usuários em grandes aplicações React. Neste guia abrangente, compartilho técnicas práticas e estratégias do mundo real que me ajudaram a otimizar aplicações de produção em escala. De lazy loading e code splitting a memoização e virtual scrolling, exploraremos abordagens comprovadas para identificar e eliminar gargalos de performance. Vou guiá-lo através de ferramentas de profiling, armadilhas comuns a evitar e melhores práticas que garantem que suas apps React permaneçam rápidas e responsivas à medida que crescem.',
    es: 'La optimización del rendimiento es crucial para ofrecer experiencias excepcionales a los usuarios en grandes aplicaciones React. En esta guía completa, comparto técnicas prácticas y estrategias del mundo real que me han ayudado a optimizar aplicaciones de producción a escala. Desde lazy loading y code splitting hasta memoización y virtual scrolling, exploraremos enfoques probados para identificar y eliminar cuellos de botella de rendimiento. Te guiaré a través de herramientas de profiling, trampas comunes a evitar y mejores prácticas que aseguran que tus aplicaciones React se mantengan rápidas y receptivas a medida que crecen.'
  },
  
  'blog.post2.title': { en: 'Building Scalable Design Systems', pt: 'Construindo Design Systems Escaláveis', es: 'Construyendo Sistemas de Diseño Escalables' },
  'blog.post2.date': { en: '19 days ago', pt: '19 dias atrás', es: 'hace 19 días' },
  'blog.post2.excerpt': { en: 'My experience creating design systems that scale with your product. From components to documentation, here\'s what worked and what didn\'t.', pt: 'Minha experiência criando design systems que escalam com seu produto. De componentes a documentação, aqui está o que funcionou e o que não funcionou.', es: 'Mi experiencia creando sistemas de diseño que escalan con tu producto. Desde componentes hasta documentación, esto es lo que funcionó y lo que no.' },
  'blog.post2.content': { 
    en: 'Building a design system is more than just creating a component library. It\'s about establishing a shared language between designers and developers, creating consistency across products, and enabling teams to move faster. In this article, I share lessons learned from building design systems at both startups and established companies. We\'ll cover the critical decisions around architecture, token systems, component APIs, and documentation strategies. I\'ll also discuss the organizational challenges and how to get stakeholder buy-in for your design system initiative.',
    pt: 'Construir um design system é mais do que apenas criar uma biblioteca de componentes. É sobre estabelecer uma linguagem compartilhada entre designers e desenvolvedores, criar consistência entre produtos e permitir que as equipes se movam mais rápido. Neste artigo, compartilho lições aprendidas ao construir design systems tanto em startups quanto em empresas estabelecidas. Abordaremos as decisões críticas sobre arquitetura, sistemas de tokens, APIs de componentes e estratégias de documentação. Também discutirei os desafios organizacionais e como obter a adesão das partes interessadas para sua iniciativa de design system.',
    es: 'Construir un sistema de diseño es más que simplemente crear una biblioteca de componentes. Se trata de establecer un lenguaje compartido entre diseñadores y desarrolladores, crear consistencia en los productos y permitir que los equipos se muevan más rápido. En este artículo, comparto lecciones aprendidas al construir sistemas de diseño tanto en startups como en empresas establecidas. Cubriremos las decisiones críticas sobre arquitectura, sistemas de tokens, APIs de componentes y estrategias de documentación. También discutiré los desafíos organizacionales y cómo obtener la adhesión de las partes interesadas para tu iniciativa de sistema de diseño.'
  },

  // Journey Section
  'journey.education': { en: 'Education', pt: 'Educação', es: 'Educación' },
  'journey.experience': { en: 'Professional Experience', pt: 'Experiência Profissional', es: 'Experiencia Profesional' },

  // Education
  'education.senai.title': { en: 'Technical Course in Systems Development', pt: 'Curso Técnico em Desenvolvimento de Sistemas', es: 'Curso Técnico en Desarrollo de Sistemas' },
  'education.senai.period': { en: '2020 - 2022', pt: '2020 - 2022', es: '2020 - 2022' },
  'education.senai.institution': { en: 'SENAI', pt: 'SENAI', es: 'SENAI' },

  'education.cs50.title': { en: 'CS50: Introduction to Computer Science', pt: 'CS50: Introdução à Ciência da Computação', es: 'CS50: Introducción a la Ciencia de la Computación' },
  'education.cs50.period': { en: '2021', pt: '2021', es: '2021' },
  'education.cs50.institution': { en: 'Harvard University (Online)', pt: 'Universidade de Harvard (Online)', es: 'Universidad de Harvard (En línea)' },

  'education.bootcamp.title': { en: 'Full Stack Web Development Bootcamp', pt: 'Bootcamp de Desenvolvimento Web Full Stack', es: 'Bootcamp de Desarrollo Web Full Stack' },
  'education.bootcamp.period': { en: '2021', pt: '2021', es: '2021' },
  'education.bootcamp.institution': { en: 'Digital Innovation One', pt: 'Digital Innovation One', es: 'Digital Innovation One' },

  'education.english.title': { en: 'Advanced English Course', pt: 'Curso de Inglês Avançado', es: 'Curso de Inglés Avanzado' },
  'education.english.period': { en: '2019 - 2022', pt: '2019 - 2022', es: '2019 - 2022' },
  'education.english.institution': { en: 'CNA Language School', pt: 'CNA Idiomas', es: 'CNA Idiomas' },

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