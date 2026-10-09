import type { Locale } from "./locale";

/**
 * Every hardcoded UI-chrome string in the app (not content — content comes
 * from the knowledge-base data modules), keyed by page/component. English is
 * the complete reference; pt only needs the same keys.
 */
export interface Strings {
  nav: {
    groupOverview: string;
    groupEvidence: string;
    home: string;
    profile: string;
    journey: string;
    companies: string;
    cases: string;
    capabilities: string;
    technologies: string;
    principles: string;
    map: string;
  };
  sidebar: {
    brandSub: string;
    search: string;
    close: string;
    menu: string;
    searchTrigger: string;
    documentsLabel: string;
    theme: string;
    themeDark: string;
    themeLight: string;
    switchToTheme: (theme: "dark" | "light") => string;
  };
  palette: {
    placeholder: string;
    close: string;
    closeAria: string;
    searchLabel: string;
    empty: string;
    navigate: string;
    open: string;
    escClose: string;
    dialogLabel: string;
    kind: Record<"company" | "case" | "capability" | "tech" | "principle" | "page", string>;
  };
  search: {
    profile: string;
    profileSub: string;
    journey: string;
    journeySub: string;
    companies: string;
    entries: (n: number) => string;
    cases: string;
    capabilities: string;
    capabilitiesWithEvidence: (n: number) => string;
    technologies: string;
    principles: string;
    principlesCount: (n: number) => string;
    map: string;
    mapSub: string;
    engineeringPrinciple: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    downloadCv: string;
    openToOpportunities: string;
  };
  home: {
    availability: string;
    yearsExperience: (n: string) => string;
    abstractLabel: string;
    careerJourney: (n: number) => string;
    highlightedCaseStudies: string;
    all: (n: number) => string;
    impact: string;
    heroEvidenceLead: string;
    heroEvidenceStrong: string;
    heroEvidenceAside: string;
    figCaption: string;
  };
  companies: {
    title: string;
    docket: (n: number) => string;
    caseStudiesAnd: (cases: number, techs: number) => string;
    phase: (phase: string) => string;
  };
  companyDetail: {
    breadcrumb: string;
    role: string;
    period: string;
    domain: string;
    overview: string;
    businessDomain: string;
    responsibilities: string;
    achievements: string;
    technologies: string;
    caseStudiesHere: (n: number) => string;
    lessonsLearned: string;
  };
  cases: {
    title: string;
    docket: (n: number) => string;
    lede: string;
    featured: (readingTime: string) => string;
  };
  caseDetail: {
    breadcrumb: string;
    at: string;
    impact: string;
    category: string;
    difficulty: string;
    ownership: string;
    customerFacing: string;
    readingTime: string;
    company: string;
    capabilities: string;
    technologies: string;
    copyLink: string;
    linkCopied: string;
    onThisPage: string;
  };
  capabilities: {
    title: string;
    docket: (n: number) => string;
    lede: string;
    evidence: (cases: number, companies: number) => string;
  };
  capabilityDetail: {
    breadcrumb: string;
    citedIn: (cases: number, companies: number) => string;
    provingDocuments: string;
    exercisedAt: string;
  };
  technologies: {
    title: string;
    docket: (n: number) => string;
    lede: string;
    freelance: string;
  };
  technologyDetail: {
    breadcrumb: string;
    howIUsedIt: string;
    companies: string;
    appearsIn: string;
  };
  journey: {
    title: string;
    docket: string;
    lede: string;
    whereItHappened: string;
  };
  principles: {
    title: string;
    docket: string;
    lede: string;
    explanation: string;
    origin: string;
    relatedCaseStudy: string;
    whereAppliedAgain: string;
  };
  profile: {
    title: string;
    docket: string;
    lede: string;
    marginNote: string;
    engineeringPhilosophy: string;
    careerEvolution: string;
    howIThink: string;
    strengths: string;
    preferredProblems: string;
    currentlyInto: string;
  };
  evidenceMap: {
    title: string;
    docket: string;
    lede: string;
    hint: string;
    columns: { capabilities: string; caseStudies: string; companies: string; technologies: string };
  };
  notFound: {
    code: string;
    title: string;
    lede: string;
    index: string;
    marginNote: string;
  };
  misc: {
    skipToContent: string;
  };
}

export const en: Strings = {
  nav: {
    groupOverview: "overview",
    groupEvidence: "evidence",
    home: "Home",
    profile: "Profile",
    journey: "Career Journey",
    companies: "Companies",
    cases: "Case Studies",
    capabilities: "Capabilities",
    technologies: "Technologies",
    principles: "Principles",
    map: "Evidence Map",
  },
  sidebar: {
    brandSub: "love building stuff.",
    search: "search",
    close: "✕ close",
    menu: "☰ menu",
    searchTrigger: "search…",
    documentsLabel: "Documents",
    theme: "theme",
    themeDark: "dark ●",
    themeLight: "light ○",
    switchToTheme: (theme) => `Switch to ${theme} theme`,
  },
  palette: {
    placeholder: "search companies, cases, capabilities…",
    close: "close",
    closeAria: "Close search",
    searchLabel: "Search query",
    empty: "no documents match",
    navigate: "↑↓ navigate",
    open: "↵ open",
    escClose: "esc close",
    dialogLabel: "Search documents",
    kind: { company: "company", case: "case", capability: "capability", tech: "tech", principle: "principle", page: "page" },
  },
  search: {
    profile: "Profile",
    profileSub: "technical identity",
    journey: "Career Journey",
    journeySub: "how the capability grew",
    companies: "Companies",
    entries: (n) => `${n} entries`,
    cases: "Case Studies",
    capabilities: "Capabilities",
    capabilitiesWithEvidence: (n) => `${n} capabilities backed by evidence`,
    technologies: "Technologies",
    principles: "Engineering Principles",
    principlesCount: (n) => `${n} principles`,
    map: "Evidence Map",
    mapSub: "how the evidence connects",
    engineeringPrinciple: "engineering principle",
  },
  contact: {
    email: "email",
    linkedin: "linkedin",
    github: "github",
    downloadCv: "download cv ↓",
    openToOpportunities: "open to opportunities",
  },
  home: {
    availability: "Based in Florianópolis, Brazil · Italian (EU) citizenship · able to relocate to Ireland within a few weeks of an offer",
    yearsExperience: (n) => ` · ${n} years experience`,
    abstractLabel: "Abstract",
    careerJourney: (n) => `where I've worked — ${n} companies`,
    highlightedCaseStudies: "selected engineering stories",
    all: (n) => `all ${n} →`,
    impact: "impact:",
    heroEvidenceLead: "A few problems I've worked through:",
    heroEvidenceStrong: "keeping a change correct across screens, services, and data.",
    heroEvidenceAside: "Each story explains what I did and why the choices mattered.",
    figCaption: "Gabriela Schlemper",
  },
  companies: {
    title: "Companies",
    docket: (n) => `${n} companies documented`,
    caseStudiesAnd: (cases, techs) => `${cases} case studies · ${techs} technologies`,
    phase: (phase) => `phase: ${phase.toLowerCase()}`,
  },
  companyDetail: {
    breadcrumb: "companies",
    role: "role",
    period: "period",
    domain: "domain",
    overview: "overview",
    businessDomain: "business domain",
    responsibilities: "responsibilities",
    achievements: "achievements",
    technologies: "technologies",
    caseStudiesHere: (n) => `${n} case studies here`,
    lessonsLearned: "lessons learned",
  },
  cases: {
    title: "Case Studies",
    docket: (n) => `${n} case studies documented`,
    lede: "Context, constraints, alternatives, decision, trade-offs. Never just the output.",
    featured: (readingTime) => `★ featured · ${readingTime}`,
  },
  caseDetail: {
    breadcrumb: "case-studies",
    at: "at",
    impact: "impact",
    category: "category",
    difficulty: "difficulty",
    ownership: "ownership",
    customerFacing: "customer facing",
    readingTime: "reading time",
    company: "company",
    capabilities: "capabilities",
    technologies: "technologies",
    copyLink: "copy link",
    linkCopied: "✓ link copied",
    onThisPage: "on this page",
  },
  capabilities: {
    title: "Capabilities",
    docket: (n) => `${n} capabilities, each backed by evidence`,
    lede: "Not technologies — capabilities. Each one links to the documents that prove it.",
    evidence: (cases, companies) => `${cases} case studies · ${companies} companies`,
  },
  capabilityDetail: {
    breadcrumb: "capabilities",
    citedIn: (cases, companies) => `evidenced in: ${cases} case studies · ${companies} companies`,
    provingDocuments: "proving documents",
    exercisedAt: "exercised at",
  },
  technologies: {
    title: "Technologies",
    docket: (n) => `${n} technologies — how, not just what`,
    lede: "Every entry documents how I used it — not a logo grid.",
    freelance: "freelance",
  },
  technologyDetail: {
    breadcrumb: "technologies",
    howIUsedIt: "how i used it",
    companies: "companies",
    appearsIn: "appears in",
  },
  journey: {
    title: "How my work has changed",
    docket: "career timeline",
    lede: "A short account of what I was learning at each stage, and how the work widened from frontend features to systems that span teams and services.",
    whereItHappened: "where it happened",
  },
  principles: {
    title: "Engineering Principles",
    docket: "earned, not adopted",
    lede: "Each principle has an origin story and at least one place it was applied again. Open one.",
    explanation: "explanation",
    origin: "origin",
    relatedCaseStudy: "related case study",
    whereAppliedAgain: "where i applied it again",
  },
  profile: {
    title: "Who I am",
    docket: "how I work",
    lede: "The examples on this site say more than a list of strengths could. Here are a few patterns in how I approach the work.",
    marginNote: "↳ usually starts with who controls the data",
    engineeringPhilosophy: "engineering philosophy",
    careerEvolution: "career evolution",
    howIThink: "how i think",
    strengths: "strengths",
    preferredProblems: "preferred problems",
    currentlyInto: "currently into",
  },
  evidenceMap: {
    title: "Evidence Map",
    docket: "citation network — how the evidence connects",
    lede: "Capabilities connect to the case studies that prove them, the companies where they happened, and the technologies involved. Tap or hover a node to trace a connection; open it to read the document.",
    hint: "the graph is wider than the screen — drag it sideways →",
    columns: {
      capabilities: "capabilities",
      caseStudies: "case studies",
      companies: "companies",
      technologies: "technologies",
    },
  },
  notFound: {
    code: "404 — no such document on file",
    title: "Nothing filed here",
    lede: "This path does not match any document in the repository. Try the search, or start from the",
    index: "index",
    marginNote: "↳ the one page I didn't write a case study about",
  },
  misc: {
    skipToContent: "skip to content",
  },
};

export const pt: Strings = {
  nav: {
    groupOverview: "visão geral",
    groupEvidence: "evidências",
    home: "Início",
    profile: "Perfil",
    journey: "Trajetória",
    companies: "Empresas",
    cases: "Estudos de Caso",
    capabilities: "Capacidades",
    technologies: "Tecnologias",
    principles: "Princípios",
    map: "Mapa de Evidências",
  },
  sidebar: {
    brandSub: "gosto de construir coisas.",
    search: "buscar",
    close: "✕ fechar",
    menu: "☰ menu",
    searchTrigger: "buscar…",
    documentsLabel: "Documentos",
    theme: "tema",
    themeDark: "escuro ●",
    themeLight: "claro ○",
    switchToTheme: (theme) => `Mudar para o tema ${theme === "dark" ? "escuro" : "claro"}`,
  },
  palette: {
    placeholder: "buscar empresas, casos, capacidades…",
    close: "fechar",
    closeAria: "Fechar busca",
    searchLabel: "Termo de busca",
    empty: "nenhum documento encontrado",
    navigate: "↑↓ navegar",
    open: "↵ abrir",
    escClose: "esc fechar",
    dialogLabel: "Buscar documentos",
    kind: { company: "empresa", case: "caso", capability: "capacidade", tech: "tecnologia", principle: "princípio", page: "página" },
  },
  search: {
    profile: "Perfil",
    profileSub: "identidade técnica",
    journey: "Trajetória",
    journeySub: "como a capacidade foi construída",
    companies: "Empresas",
    entries: (n) => `${n} registros`,
    cases: "Estudos de Caso",
    capabilities: "Capacidades",
    capabilitiesWithEvidence: (n) => `${n} capacidades comprovadas com evidência`,
    technologies: "Tecnologias",
    principles: "Princípios de Engenharia",
    principlesCount: (n) => `${n} princípios`,
    map: "Mapa de Evidências",
    mapSub: "como a evidência se conecta",
    engineeringPrinciple: "princípio de engenharia",
  },
  contact: {
    email: "email",
    linkedin: "linkedin",
    github: "github",
    downloadCv: "baixar currículo ↓",
    openToOpportunities: "aberta a propostas",
  },
  home: {
    availability: "Em Florianópolis, Brasil · cidadania italiana (UE) · posso me mudar para a Irlanda em poucas semanas após uma oferta",
    yearsExperience: (n) => ` · ${n} anos de experiência`,
    abstractLabel: "Resumo",
    careerJourney: (n) => `onde trabalhei — ${n} empresas`,
    highlightedCaseStudies: "histórias de engenharia selecionadas",
    all: (n) => `todos os ${n} →`,
    impact: "impacto:",
    heroEvidenceLead: "Alguns problemas que já enfrentei:",
    heroEvidenceStrong: "manter uma mudança correta entre telas, serviços e dados.",
    heroEvidenceAside: "Cada história explica minha contribuição e por que as escolhas importaram.",
    figCaption: "Gabriela Schlemper",
  },
  companies: {
    title: "Empresas",
    docket: (n) => `${n} empresas documentadas`,
    caseStudiesAnd: (cases, techs) => `${cases} estudos de caso · ${techs} tecnologias`,
    phase: (phase) => `fase: ${phase.toLowerCase()}`,
  },
  companyDetail: {
    breadcrumb: "empresas",
    role: "cargo",
    period: "período",
    domain: "domínio",
    overview: "visão geral",
    businessDomain: "domínio de negócio",
    responsibilities: "responsabilidades",
    achievements: "conquistas",
    technologies: "tecnologias",
    caseStudiesHere: (n) => `${n} estudos de caso aqui`,
    lessonsLearned: "lições aprendidas",
  },
  cases: {
    title: "Estudos de Caso",
    docket: (n) => `${n} estudos de caso documentados`,
    lede: "Contexto, restrições, alternativas, decisão, trade-offs. Nunca só o resultado.",
    featured: (readingTime) => `★ destaque · ${readingTime}`,
  },
  caseDetail: {
    breadcrumb: "estudos-de-caso",
    at: "na",
    impact: "impacto",
    category: "categoria",
    difficulty: "dificuldade",
    ownership: "responsabilidade",
    customerFacing: "voltado ao cliente",
    readingTime: "tempo de leitura",
    company: "empresa",
    capabilities: "capacidades",
    technologies: "tecnologias",
    copyLink: "copiar link",
    linkCopied: "✓ link copiado",
    onThisPage: "nesta página",
  },
  capabilities: {
    title: "Capacidades",
    docket: (n) => `${n} capacidades, cada uma comprovada por evidência`,
    lede: "Não são tecnologias — são capacidades. Cada uma linka para os documentos que a comprovam.",
    evidence: (cases, companies) => `${cases} estudos de caso · ${companies} empresas`,
  },
  capabilityDetail: {
    breadcrumb: "capacidades",
    citedIn: (cases, companies) => `evidenciada em: ${cases} estudos de caso · ${companies} empresas`,
    provingDocuments: "documentos comprobatórios",
    exercisedAt: "exercida em",
  },
  technologies: {
    title: "Tecnologias",
    docket: (n) => `${n} tecnologias — como, não só o quê`,
    lede: "Cada entrada documenta como eu usei — não é uma grade de logos.",
    freelance: "freelance",
  },
  technologyDetail: {
    breadcrumb: "tecnologias",
    howIUsedIt: "como eu usei",
    companies: "empresas",
    appearsIn: "aparece em",
  },
  journey: {
    title: "Como meu trabalho mudou",
    docket: "trajetória profissional",
    lede: "Um resumo do que aprendi em cada etapa e de como meu trabalho passou de funcionalidades frontend para sistemas que atravessam times e serviços.",
    whereItHappened: "onde aconteceu",
  },
  principles: {
    title: "Princípios de Engenharia",
    docket: "conquistados, não adotados",
    lede: "Cada princípio tem uma origem e pelo menos um lugar onde foi aplicado de novo. Abra um.",
    explanation: "explicação",
    origin: "origem",
    relatedCaseStudy: "estudo de caso relacionado",
    whereAppliedAgain: "onde apliquei de novo",
  },
  profile: {
    title: "Quem eu sou",
    docket: "como eu trabalho",
    lede: "Os exemplos deste site dizem mais do que uma lista de qualidades. Aqui estão alguns padrões de como abordo o trabalho.",
    marginNote: "↳ geralmente começa por quem controla os dados",
    engineeringPhilosophy: "filosofia de engenharia",
    careerEvolution: "evolução de carreira",
    howIThink: "como eu penso",
    strengths: "pontos fortes",
    preferredProblems: "problemas preferidos",
    currentlyInto: "atualmente estudando",
  },
  evidenceMap: {
    title: "Mapa de Evidências",
    docket: "rede de citações — como a evidência se conecta",
    lede: "Capacidades se conectam aos estudos de caso que as comprovam, às empresas onde aconteceram, e às tecnologias envolvidas. Toque ou passe o mouse sobre um nó para rastrear uma conexão; abra-o para ler o documento.",
    hint: "o grafo é mais largo que a tela — arraste para o lado →",
    columns: {
      capabilities: "capacidades",
      caseStudies: "estudos de caso",
      companies: "empresas",
      technologies: "tecnologias",
    },
  },
  notFound: {
    code: "404 — nenhum documento registrado nesse endereço",
    title: "Nada registrado aqui",
    lede: "Este caminho não corresponde a nenhum documento no repositório. Tente a busca, ou comece pelo",
    index: "índice",
    marginNote: "↳ a única página sobre a qual eu não escrevi um estudo de caso",
  },
  misc: {
    skipToContent: "pular para o conteúdo",
  },
};

export function stringsFor(locale: Locale): Strings {
  return locale === "pt" ? pt : en;
}
