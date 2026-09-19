// pt-BR translation of knowledge-base.ts — AI-drafted, human-reviewable.
// Source of truth stays English (see professional-knowledge-base ADR-0001);
// this is a presentation-layer artifact, regenerate/re-review after any
// change to the English knowledge-base.ts.

export interface Stat { label: string; value: string }
export interface EvolutionStep { year: string; label: string; detail: string }

export interface Profile {
  name: string
  headline: string
  oneLiner: string
  about: string[]
  philosophy: string[]
  evolution: EvolutionStep[]
  howIThink: string[]
  strengths: string[]
  interests: string[]
  preferredProblems: string[]
  quote: string
}

export interface Company {
  id: string
  name: string
  role: string
  period: string
  domain: string
  phase: string
  summary: string
  overview: string[]
  businessDomain: string[]
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  capabilities: string[]
  caseIds: string[]
  lessons: string[]
}

export interface DiagramNode {
  id: string
  lines: string[]
  sub?: string
  x: number
  y: number
  w: number
  h: number
  /** accent = the chosen path; removed = what was eliminated, not part of the flow. */
  variant?: "accent" | "removed"
}

export interface DiagramEdge {
  from: string
  to: string
  label?: string
}

export interface CaseDiagramSpec {
  width: number
  height: number
  nodes: DiagramNode[]
  edges: DiagramEdge[]
}

export interface CaseSection {
  id: string
  title: string
  paras?: string[]
  bullets?: string[]
  /** Hand-authored architecture diagram illustrating this section: text-derived, not decorative. */
  diagram?: CaseDiagramSpec
}

export interface CaseStudy {
  id: string
  featured: boolean
  title: string
  company: string
  category: string
  summary: string
  capabilities: string[]
  technologies: string[]
  impact: string[]
  difficulty: string
  ownership: string
  customerFacing: string
  readingTime: string
  sections: CaseSection[]
}

export interface Capability { id: string; name: string; desc: string }
export interface Technology { name: string; usage: string }

export interface Principle {
  id: string
  text: string
  explanation: string
  origin: string
  /** null when the principle has no single originating case study. */
  caseId: string | null
  applied: string
}

export const profile: Profile = {
  "name": "Gabriela Schlemper",
  "headline": "Engenheira de Software focada em construir sistemas escaláveis através de decisões de engenharia bem pensadas.",
  "oneLiner": "Eu documento decisões de engenharia em vez de listar tecnologias.",
  "about": [
    "Sou uma engenheira de software cuja carreira evoluiu de implementar interfaces frontend para desenhar sistemas distribuídos. Não otimizo para o número de tecnologias que conheço; otimizo para entender por que os sistemas são construídos do jeito que são.",
    "Gosto de problemas envolvendo arquitetura, sistemas distribuídos, developer experience e engenharia frontend."
  ],
  "philosophy": [
    "Boa engenharia é, em grande parte, sobre decisões, não sobre código. Trato cada sistema como um conjunto de afirmações que precisam permanecer verdadeiras ao longo do tempo, sobre ownership, consistência e quem tem permissão para computar o quê. Quando essas afirmações são implícitas, os sistemas se desalinham; quando explícitas, permanecem corretos.",
    "Esta base de conhecimento é escrita da forma como acredito que engenharia deveria ser documentada: contexto, restrições, alternativas, decisão, trade-offs. Nunca só o resultado."
  ],
  "evolution": [
    {
      "year": "Hoje",
      "label": "Platform engineering, arquitetura e desenvolvimento assistido por IA",
      "detail": "Interessada nos sistemas que tornam outros engenheiros mais rápidos e seguros."
    },
    {
      "year": "2025",
      "label": "Desenhando sistemas distribuídos",
      "detail": "Dynamox. Consistência entre serviços, arquitetura orientada a eventos, ownership."
    },
    {
      "year": "2024",
      "label": "Construindo sistemas frontend",
      "detail": "Design System, arquitetura de componentes, padrões que o time adotou voluntariamente."
    },
    {
      "year": "2023",
      "label": "Construindo aplicações frontend em produção",
      "detail": "Frontend Intern na AQTech. Vue, usuários reais, restrições reais."
    },
    {
      "year": "2022",
      "label": "Aprendendo desenvolvimento de software profissional",
      "detail": "Trabalho freelance sob um engenheiro experiente. Git, code review, disciplina de entrega."
    }
  ],
  "howIThink": [
    "Comece pelos invariantes. Antes de desenhar, escrevo o que nunca pode ser falso, e então escolho a arquitetura que torna violações impossíveis, não apenas improváveis.",
    "Prefira a corretude enfadonha. Um sistema provadamente correto vence um sistema engenhoso, mesmo quando o engenhoso é mais rápido de construir.",
    "Torne a adoção o caminho mais fácil. Padrões, design systems e processos só sobrevivem quando segui-los dá menos trabalho do que ignorá-los.",
    "Decisões são documentos. Se uma decisão não é escrita com suas alternativas, o time vai reabrir essa discussão em seis meses."
  ],
  "strengths": [
    "Consistência entre serviços e design de ownership de dados",
    "Transformar conhecimento tácito do time em padrões explícitos",
    "Arquitetura de componentes e design systems",
    "Comunicação técnica escrita",
    "Ownership de ponta a ponta: da proposta à implementação à adoção"
  ],
  "interests": [
    "Sistemas Distribuídos",
    "Arquitetura de Software",
    "Developer Experience",
    "Engenharia Assistida por IA",
    "Platform Engineering",
    "Liderança Técnica",
    "Documentação de Engenharia",
    "Gestão do Conhecimento"
  ],
  "preferredProblems": [
    "Sistemas em que múltiplos serviços discordam sobre o mesmo fato",
    "Times que entregam rápido mas não conseguem explicar por que as coisas são construídas do jeito que são",
    "Bases de código frontend que precisam de arquitetura, não de mais componentes",
    "Fluxos de trabalho em que IA pode ajudar sem remover o julgamento humano"
  ],
  "quote": "O objetivo não é colecionar tecnologias. O objetivo é entender como tomar boas decisões de engenharia."
}

export const stats: Stat[] = [
  {
    "label": "Anos de Carreira",
    "value": "4+"
  },
  {
    "label": "Empresas",
    "value": "3"
  },
  {
    "label": "Estudos de Caso",
    "value": "14"
  },
  {
    "label": "Decisões de Arquitetura",
    "value": "5+"
  }
]

export const companies: Company[] = [
  {
    "id": "dynamox",
    "name": "Dynamox",
    "role": "Full Stack Developer (nível pleno)",
    "period": "2025-Present",
    "domain": "Inspeção industrial & monitoramento de condição",
    "phase": "Aprendendo sistemas distribuídos e arquitetura de software",
    "summary": "Empresa de monitoramento e inspeção industrial onde cresci de júnior a desenvolvedora full-stack plena, tornando-me a referência do time em sincronização de dados entre serviços.",
    "overview": [
      "A Dynamox constrói uma plataforma de monitoramento e inspeção industrial (manutenção preditiva para ativos industriais). Entrei em fevereiro de 2025 e trabalho no squad dono do domínio de inspeção: rotas de inspeção, checklists, times, conformidade (\"adherence\") e relatórios, construindo tanto o frontend web quanto os serviços de backend por trás dele."
    ],
    "businessDomain": [
      "Manutenção preditiva industrial e inspeção de ativos: equipes de campo seguem rotas de inspeção, preenchem checklists sobre equipamentos, e a plataforma rastreia cobertura e conformidade para que as plantas possam agir antes que falhas aconteçam. O trabalho abrange backends pesados em dados (hierarquias grandes de ativos, sincronização orientada a eventos entre serviços) e UIs web voltadas ao operador."
    ],
    "responsibilities": [
      "Entrega full-stack de funcionalidades do domínio de inspeção (frontend em React; backends em NestJS).",
      "Sincronização de dados entre serviços via uma arquitetura orientada a eventos (Kafka), o domínio no qual me tornei a referência do time.",
      "Confiabilidade em produção: resposta a incidentes, debugging de deadlocks/problemas de conexão, correções seguras de dados em produção.",
      "Trabalho de plataforma: remediação de segurança/CVEs, observabilidade, infraestrutura de CI/CD e testes, e infrastructure-as-code para o time."
    ],
    "achievements": [
      "Tornei-me a referência do time em sincronização entre serviços através de uma propagação atômica de edição em sete tabelas entre dois serviços, culminando em uma decisão de arquitetura que conduzi de forma autônoma.",
      "Tornei uma suite de testes não confiável em confiável novamente, desbloqueando o CI do time, e, em review, refutei empiricamente três das quatro mudanças de produção propostas.",
      "Fundei um novo serviço de analytics/relatórios, incluindo a decisão de arquitetura OLTP-vs-OLAP por trás dele, revisada e aprovada por sete stakeholders entre engenharia e o time de plataforma, com uma revisão de risco de segurança/privacidade incorporada à própria decisão e um risco de latência que identifiquei e corrigi entre duas versões do ADR.",
      "Fui responsável por confiabilidade em produção e integridade de dados, incluindo correções de dados em larga escala seguras e reversíveis, e resposta a incidentes com post-mortems.",
      "Transformei um incidente de produção que bloqueava clientes em uma decisão de arquitetura documentada através de um post-mortem, um ADR e um consumer reconstruído, depois identifiquei a causa raiz de um deadlock de produção posterior como uma incompatibilidade de particionamento de mensageria e fechei uma lacuna de falha silenciosa com retry e uma dead-letter queue.",
      "Entreguei uma funcionalidade complexa de ponta a ponta, sozinha, entre banco de dados, backend e frontend.",
      "Elevei o patamar de engenharia do time em observabilidade, segurança e documentação, muitas vezes por iniciativa própria.",
      "Prototipei IA aplicada com um design orientado à segurança, um agente human-in-the-loop para criação de rotas em massa: o modelo classifica candidatos e nunca emite identificadores, e toda escrita passa por confirmação humana explícita. Estágio de protótipo, chegando ao modo de escrita com testes, nunca lançado em produção. (Deliberadamente não é um estudo de caso; ver a nota de curadoria ao final deste arquivo.)",
      "Eliminei um schema de API de 5.000 linhas mantido manualmente ao gerar OpenAPI a partir dos próprios decorators do código, validado em um endpoint até o resultado gerado bater com o manual, depois expandido para ~10 domínios rumo a ~21 controllers, junto com a adição do primeiro pipeline de teste de CI do serviço. (Deliberadamente não é um estudo de caso; ver a nota de curadoria ao final deste arquivo.)",
      "Tornei o hardening de containers e dependências uma prática trimestral permanente ao longo de quatro trimestres: 135 CVEs sinalizados e todos os 7 críticos remediados na primeira passagem, depois uma auditoria levada de 69 achados para 16, CVEs de SO sem correção de 160 para 0, e a imagem final de 1,64 GB para 463 MB.",
      "Identifiquei uma query do warehouse em 69% de um teto rígido de bytes antes que começasse a falhar, depois auditei minha própria migração, encontrei 79% das linhas de produção nunca preenchidas retroativamente e 9.299 alertas silenciosamente perdidos do produto, e reparei 70.502 linhas de forma idempotente.",
      "Mudei o escopo de um épico definido pelo produto ao mover onde um novo estado é tratado. Um status de \"ativo hibernado\" em toda a plataforma foi especificado como uma regra de exclusão para oito caminhos de leitura; aplicá-lo uma única vez no limite de escrita tornou a maior parte desse escopo desnecessária, e o design refinado substituiu o item do roadmap como a fonte da verdade do épico. Contribuição de design; desenvolvimento programado para começar em 2026-08-31, então ainda não há número entregue.",
      "Promovida de júnior a pleno em ~11 meses, respaldada por evidências em todas as seis áreas de competência."
    ],
    "technologies": [
      "React",
      "NestJS",
      "Fastify",
      "Kafka",
      "PostgreSQL",
      "Prisma",
      "Terraform",
      "BigQuery",
      "Python",
      "Vertex AI",
      "Kubernetes",
      "Sentry",
      "Docker"
    ],
    "capabilities": [
      "Sistemas Distribuídos",
      "Design de Sistemas",
      "Tomada de Decisão Técnica",
      "Comunicação",
      "Senso de Dono",
      "Liderança Técnica",
      "Engenharia de Performance",
      "Engenharia Frontend",
      "Engenharia Backend",
      "Visão de Produto",
      "UX",
      "Debugging",
      "Segurança",
      "Confiabilidade",
      "Observabilidade",
      "Testes",
      "Engenharia de Dados",
      "Resposta a Incidentes"
    ],
    "caseIds": [
      "single-computation-path",
      "workspace-sync",
      "flaky-e2e",
      "analytics-service",
      "prod-data-correction",
      "asset-tree-search",
      "error-observability",
      "container-hardening",
      "production-incident-role-bindings-consumer",
      "code-review-technical-leadership",
      "ai-orchestrated-feature-flag-removal",
      "materialized-hierarchy-and-backfill-residue",
      "hibernation-scope-removal"
    ],
    "lessons": [
      "Dados derivados eventualmente consistentes deveriam ter exatamente um caminho de computação. Múltiplos escritores derivando o mesmo valor é o defeito; consolidar a derivação é a correção.",
      "Agentes de IA paralelos precisam do mesmo design de segurança que qualquer outro worker concorrente. Isole o trabalho deles por ownership de arquivos disjuntos, ou eles vão corromper as mudanças uns dos outros exatamente como qualquer outra race condition.",
      "Empurre a travessia de hierarquia para o banco de dados. Uma query recursiva que retorna resultados com seus ancestrais vence uma cascata de requisições por nível que o cliente teria que orquestrar."
    ]
  },
  {
    "id": "aqtech",
    "name": "AQTech",
    "role": "Frontend Developer",
    "period": "2024-2025",
    "domain": "Manutenção preditiva para parques eólicos",
    "phase": "Aprendendo engenharia frontend",
    "summary": "Empresa de manutenção preditiva para parques eólicos, e meu primeiro cargo profissional de engenharia em um time, onde passei de desenvolvedora freelance construindo telas para referência frontend do time, e introduzi padrões de engenharia frontend (um Design System) onde não existia nenhum.",
    "overview": [
      "A AQTech constrói software para manutenção preditiva de parques eólicos: transforma dados de vibração e operação de turbinas eólicas em informação acionável para engenheiros e gestores, para que falhas de equipamento possam ser antecipadas em vez de descobertas. Entrei como Frontend Intern, meu primeiro emprego em um time profissional de software depois de trabalhar só como desenvolvedora freelance, esperando aprender como times de engenharia operam. Em poucos meses me tornei a referência frontend do time, e a maioria das novas telas passava por mim."
    ],
    "businessDomain": [
      "Manutenção preditiva para energia renovável. Turbinas eólicas são fortemente instrumentadas; a plataforma ingere seus sinais de vibração e operação e transforma dados brutos em decisões sobre qual ativo precisa de atenção, e antes de qual falha. O trabalho do frontend é tornar dados densos e de alto volume de séries temporais e condição legíveis para os engenheiros e gestores que agem sobre eles, o que colocou visualização de dados e design de informação no centro do trabalho."
    ],
    "responsibilities": [
      "Entrega de funcionalidades frontend na plataforma de monitoramento de parques eólicos, construindo novas funcionalidades e melhorando as existentes (Vue 2 e Vue 3, Nuxt, Vuex/Pinia, TypeScript/JavaScript, Vuetify, Tailwind, Axios, ECharts).",
      "Construção de componentes reutilizáveis e manutenção da arquitetura frontend conforme a superfície de UI do produto crescia.",
      "Colaboração com os serviços de backend (.NET / C#) que alimentavam o frontend.",
      "Contribuição para um novo produto em Vue 3 construído em paralelo à plataforma existente em Vue 2.",
      "Atuação como referência frontend do time, revisando e orientando novas telas, e aconselhando sobre arquitetura, Design Systems, Figma, acessibilidade, UX e componentes reutilizáveis."
    ],
    "achievements": [
      "Introduzi padrões de engenharia frontend onde não existia nenhum. Identifiquei por conta própria a ausência de um Design System, propus, construí os componentes no Figma, validei com product owners e engenheiros, implementei os componentes Vue reutilizáveis, e ensinei o time a usá-los até virar parte de como o time construía software.",
      "Tornei-me a referência frontend do time. Influenciei como o time construía software frontend (arquitetura, componentes reutilizáveis, Figma, acessibilidade, UX), com a maioria das novas telas passando por mim.",
      "Tomei uma decisão de construir-vs-comprar e entreguei uma abstração reutilizável. Construí um seletor hierárquico (árvore) internamente em vez de trazer uma dependência externa para a necessidade de uma única tela, desenhando-o como um componente genérico, com carregamento preguiçoso, que o time pudesse reutilizar em vez de algo pontual. (Resumido aqui em vez de como um estudo de caso independente; ver nota abaixo.)",
      "Contribuí para um produto greenfield em Vue 3 desenvolvido em paralelo à plataforma existente em Vue 2."
    ],
    "technologies": [
      "Vue",
      "Nuxt",
      "Vuex",
      "Pinia",
      "TypeScript",
      "Vuetify",
      "Tailwind",
      "Axios",
      "ECharts",
      ".NET",
      "C#"
    ],
    "capabilities": [
      "Senso de Dono",
      "Engenharia Frontend",
      "Design de Sistemas",
      "Liderança Técnica",
      "Visão de Produto",
      "Comunicação",
      "Design Systems",
      "Acessibilidade",
      "Developer Experience"
    ],
    "caseIds": [
      "design-system"
    ],
    "lessons": [
      "Inconsistência de UI é um problema de engenharia, não cosmético. Componentes duplicados e divergentes são um problema de abstração ausente; a correção é uma base compartilhada, não estilização mais cuidadosa."
    ]
  },
  {
    "id": "freelance",
    "name": "Freelance",
    "role": "Freelance Frontend Developer",
    "period": "2021-2024",
    "domain": "Aplicações web para clientes",
    "phase": "Aprendendo desenvolvimento de software profissional",
    "summary": "Minha primeira experiência profissional em software, implementando funcionalidades frontend dentro de uma base de código existente, sob a revisão de um engenheiro experiente, onde aprendi como projetos de software de verdade realmente funcionam.",
    "overview": [
      "Antes do meu primeiro emprego em um time de software, fiz trabalho freelance de frontend ao lado de um engenheiro de software experiente que já entregava software para clientes internacionais. Ele recebia o trabalho dos clientes e delegava as tarefas frontend mais simples para mim, mantendo a engenharia mais complexa para si mesmo. Meu trabalho era implementar essas funcionalidades corretamente contra uma base de código existente e nos padrões dele, aprendendo com sua revisão e feedback.",
      "Este capítulo não é sobre complexidade técnica. Eu não era dona de produtos, arquitetura ou decisões técnicas. Sua importância é que foi onde parei de estudar programação e comecei a fazer software profissional: minha primeira exposição a como projetos reais são construídos, revisados e entregues. Essa base é o que me permitiu contribuir rapidamente assim que entrei na AQTech."
    ],
    "businessDomain": [
      "Trabalho variado para clientes. Como os projetos vinham através de outro engenheiro e alternavam por cliente, não havia um único domínio de indústria, e o domínio não é o ponto deste capítulo. O que importava era a prática de construir software profissionalmente, não o setor que servia."
    ],
    "responsibilities": [
      "Implementação de funcionalidades frontend contra uma base de código existente.",
      "Correção de problemas de UI.",
      "Seguir uma arquitetura existente e suas convenções em vez de definir a minha própria.",
      "Colaboração com um desenvolvedor mais experiente e incorporação de sua revisão.",
      "Aprendizado de Git e fluxos de trabalho de desenvolvimento profissional.",
      "Compreensão de ciclos de entrega, e que software é construído, revisado e entregue, não só escrito."
    ],
    "achievements": [
      "Aprendi Git, branching e fluxo de entrega profissional do zero.",
      "Internalizei code review como ferramenta de aprendizado, um princípio que ainda sustento.",
      "Entreguei funcionalidades em produção dentro de semanas do início, trabalhando dentro de uma base de código existente segundo os padrões de outro engenheiro. Essa base é o que fez minha adaptação na AQTech ser rápida."
    ],
    "technologies": [
      "JavaScript",
      "Git",
      "HTML/CSS"
    ],
    "capabilities": [
      "Engenharia Frontend",
      "Comunicação"
    ],
    "caseIds": [],
    "lessons": [
      "Escrever código é só uma parte da engenharia de software. Entender um sistema existente é igualmente importante.",
      "Code review é uma das formas mais rápidas de evoluir como engenheira.",
      "Seguir uma arquitetura estabelecida ensina disciplina antes da criatividade.",
      "Contribuições pequenas e bem executadas importam mais do que tentar resolver tudo sozinha.",
      "Desenvolvimento de software profissional é colaborativo por padrão."
    ]
  }
]

export const cases: CaseStudy[] = [
  {
    "id": "analytics-service",
    "featured": false,
    "title": "Fundando um serviço de analytics ao mover relatórios para fora do banco transacional",
    "company": "Dynamox",
    "category": "Greenfield",
    "summary": "Fundei um novo serviço de relatórios que separa leituras analíticas pesadas do banco de dados transacional, resolvendo timeouts de indicadores, enquadrando o trade-off OLTP-vs-OLAP, revisando criticamente a decisão de arquitetura, e construindo o walking skeleton e sua camada de dados.",
    "capabilities": [
      "Design de Sistemas",
      "Tomada de Decisão Técnica",
      "Senso de Dono",
      "Engenharia Backend",
      "Segurança"
    ],
    "technologies": [
      "NestJS",
      "Fastify",
      "BigQuery",
      "Terraform",
      "Redis"
    ],
    "impact": [
      "Fundei o serviço de relatórios (autora fundadora) com leituras analíticas separadas do banco transacional, que é a correção estrutural para os timeouts de indicadores.",
      "Entreguei o serviço base integrado ao warehouse analítico, com um modelo de dados curado, consciente de custo, isolado por tenant, e rotinas de carga em infrastructure-as-code.",
      "Tornei a decisão de arquitetura revisável e multifuncional ao enquadrá-la como uma matriz explícita com uma comparação escrita, uma revisão de segurança/privacidade, e uma recomendação preliminar, revisada e aprovada por sete stakeholders entre engenharia e o time de plataforma em vez de decidida isoladamente.",
      "Identifiquei e fechei um risco de latência antes de ir para produção, revisando minha própria recomendação de primeira passagem ao identificar que o warehouse analítico não era inerentemente de baixa latência, transformando um possível incidente pós-lançamento em um requisito de design.",
      "Qualitativo: arquitetura analítica em rollout para eliminar os timeouts; latência final do indicador ainda não capturada como um número de antes/depois. <!-- TODO: adicionar números de latência quando disponíveis -->"
    ],
    "difficulty": "Alta",
    "ownership": "Liderei",
    "customerFacing": "Sim",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais forte de design de sistemas estratégico, no nível de arquitetura de dados, e de ownership greenfield. A maior parte do meu trabalho estende sistemas existentes; aqui eu comecei um, o que significou tomar decisões fundamentais sobre runtime, processo de release, modelo de dados, modelo de custo e isolamento de tenant que são caras de reverter depois.",
          "Isso mostra que consigo manter uma decisão na altitude de *onde uma classe de carga de trabalho pertence* (armazenamento transacional vs. warehouse analítico) em vez da altitude de uma única query; que decomponho uma decisão conflada em eixos independentes em vez de comparar opções empacotadas; e que reviso minha própria análise anterior quando encontro uma lacuna real nela, em vez de defender a primeira versão. É também minha evidência mais clara de que incorporo segurança e privacidade em uma decisão de arquitetura como um insumo de primeira classe em vez de um checklist aplicado depois, e que a própria decisão foi revisada e aprovada por stakeholders entre engenharia e o time de plataforma, não tomada isoladamente."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Um conjunto de indicadores voltados ao cliente agregava grandes volumes de dados de inspeção. Essas agregações rodavam como queries analíticas pesadas, vários joins mais cálculos em tempo de execução (agregações, porcentagens, contagens), diretamente contra o banco de dados transacional que também servia tráfego de aplicação ao vivo. Conforme os dados cresciam, os indicadores começaram a dar timeout: o schema tinha sido desenhado para acesso transacional, não para leituras analíticas, e a carga analítica competia com a carga transacional com quem dividia o armazenamento. Otimizar queries individuais era tratar o sintoma; a carga de trabalho estava no lugar errado, e uma funcionalidade de relatórios relacionada estava prestes a precisar das mesmas agregações, o que só aumentaria a contenção."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "A decisão tinha dois eixos conflados. Uma passagem anterior por essa decisão comparava apenas duas alternativas empacotadas, cada uma mudando *tanto* qual serviço é dono da lógica de relatórios *quanto* qual banco de dados a sustenta, o que dificultava saber qual eixo estava de fato conduzindo cada trade-off.",
          "A correção óbvia subestimava um risco real. O warehouse analítico em consideração não é, por natureza, um armazenamento de baixa latência, já que toda query tem um piso de centenas de milissegundos a segundos. Servir uma tela síncrona voltada ao cliente diretamente dele arriscava trocar timeouts por lentidão em vez de corrigi-los.",
          "Fundar um serviço significa escolhas quase irreversíveis. Runtime, estrutura de projeto, ferramentas de release e o modelo de dados são baratos de escolher e caros de mudar depois que código e dados se acumulam.",
          "O espaço de trade-offs era amplo e multifuncional. Isolamento de carga, isolamento de deploy, complexidade operacional, consistência eventual, multi-tenancy, custo e vendor lock-in interagiam entre si, e a decisão precisava ser legível o suficiente para que stakeholders entre engenharia e o time de plataforma a revisassem e aprovassem.",
          "Custo é uma restrição de primeira classe em analytics. Um warehouse analítico cobra por dados escaneados, então uma query sem filtro é tanto um problema de custo quanto, no extremo, um problema de disponibilidade.",
          "Os dados cruzam uma fronteira de privacidade. A cópia analítica carregaria dados operacionais multi-tenant, incluindo campos que podem identificar a pessoa que realizou uma inspeção, tornando proteção de dados uma questão de arquitetura em vez de algo parafusado depois."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Comecei pelo trade-off, corrigi minha própria análise quando tinha uma lacuna, e depois reduzi o risco da construção."
        ],
        "bullets": [
          "Decompus a decisão em uma matriz 2×2 explícita. Qual serviço é dono da lógica de relatórios (o serviço transacional existente vs. um novo) cruzado com qual banco de dados a sustenta (um armazenamento relacional ajustado vs. um warehouse analítico), em vez de comparar alternativas empacotadas. Isolar os dois eixos tornou cada trade-off legível por si só: isolamento de carga acabou dependendo quase inteiramente do eixo do serviço, enquanto adequação analítica e custo dependiam quase inteiramente do eixo do banco de dados.",
          "Voltei atrás e corrigi minha própria recomendação anterior. Depois da primeira passagem, identifiquei que o warehouse analítico que eu estava recomendando não é um armazenamento de baixa latência por natureza, e que servir uma tela síncrona voltada ao cliente diretamente dele poderia trocar um tipo de timeout por outro tipo de lentidão. Revisei a decisão para exigir uma camada de serving explícita em vez de consultar o warehouse a cada requisição.",
          "Negociei uma fronteira de ownership explícita com o time de plataforma. O pipeline de ingestão deles já movia eventos operacionais para o warehouse analítico; escopei o novo serviço para ser dono apenas da camada de agregação, da API e do cache sobre ela, com uma camada bem definida de tabelas limpas como o contrato entre os dois domínios, em vez de duplicar ingestão, retry e dead-lettering que o time de plataforma já tinha construído.",
          "Rodei uma revisão completa de risco de segurança e privacidade como parte da mesma decisão, cobrindo confidencialidade (acesso de menor privilégio e autorização por tenant em cada leitura), integridade (deduplicando eventos que podem chegar mais de uma vez ou fora de ordem), disponibilidade (uma query sem filtro se torna um risco de custo e disponibilidade em um warehouse cobrado por escaneamento), e privacidade (campos que podem identificar a pessoa que realizou uma inspeção), com uma mitigação concreta para cada uma, respaldada por pesquisa comparativa de stacks e um benchmark de mercado para o restante da decisão.",
          "Construí um walking skeleton, a versão mais fina possível de ponta a ponta do serviço (um runtime enxuto, scaffolding de projeto, containerização, e uma conexão funcional com o warehouse analítico), para provar o formato antes de investir em funcionalidades. Sou a autora fundadora do repositório.",
          "Modelei tabelas analíticas curadas para custo e isolamento de tenant, incluindo um snapshot diário e uma view do estado mais recente, particionadas por data e clusterizadas com o identificador de tenant primeiro para que queries comuns escaneiem menos dados e a query de um tenant não possa ver as linhas de outro.",
          "Criei o dataset, as tabelas e as rotinas de carga como infrastructure-as-code, incluindo a lógica de consistência e incremental diária, para que a camada de dados seja reproduzível em vez de construída manualmente."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Separar leituras analíticas do OLTP em vez de ajustar as queries transacionais. Mover a carga de trabalho remove a causa raiz, contenção de recursos em um armazenamento construído para transações, enquanto ajustar apenas adia o problema. Custo aceito: um segundo armazenamento de dados e um pipeline para mantê-lo atualizado.",
          "Uma camada de serving materializada com um cache na frente dela, em vez de consultar o warehouse diretamente a cada requisição. Custa uma peça móvel extra, materialização agendada e invalidação de cache, mas é o que de fato corrige uma tela síncrona voltada ao cliente; consultar um warehouse cobrado por escaneamento ao vivo a cada requisição teria recriado o problema de latência em outro lugar.",
          "Um teto rígido de custo que falha a query de forma fechada, em vez de confiar que toda query será escrita eficientemente. Uma query sem os filtros exigidos é rejeitada antes de rodar, em vez de ter permissão para escanear (e cobrar por) uma tabela inteira. Custa uma query rejeitada ocasional; compra uma conta limitada e previsível em vez de um incidente silencioso de custo ou disponibilidade.",
          "Ser dona apenas da camada de agregação em vez de ser dona da ingestão de ponta a ponta. A alternativa rejeitada teria reconstruído os consumers de mensageria, retry e dead-lettering que o pipeline do time de plataforma já fornecia. A superfície operacional extra, e a migração de dados históricos que viria junto, não valia o controle marginal que compraria.",
          "Consistência eventual para relatórios em vez de atualização estrita. Relatórios toleram dados brevemente desatualizados, então um read model atualizado em uma agenda é aceitável, e bem mais barato, do que manter uma cópia analítica estritamente sincronizada."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Fundei o serviço de relatórios (autora fundadora) com leituras analíticas separadas do banco transacional, que é a correção estrutural para os timeouts de indicadores.",
          "Entreguei o serviço base integrado ao warehouse analítico, com um modelo de dados curado, consciente de custo, isolado por tenant, e rotinas de carga em infrastructure-as-code.",
          "Tornei a decisão de arquitetura revisável e multifuncional ao enquadrá-la como uma matriz explícita com uma comparação escrita, uma revisão de segurança/privacidade, e uma recomendação preliminar, revisada e aprovada por sete stakeholders entre engenharia e o time de plataforma em vez de decidida isoladamente.",
          "Identifiquei e fechei um risco de latência antes de ir para produção, revisando minha própria recomendação de primeira passagem ao identificar que o warehouse analítico não era inerentemente de baixa latência, transformando um possível incidente pós-lançamento em um requisito de design.",
          "Qualitativo: arquitetura analítica em rollout para eliminar os timeouts; latência final do indicador ainda não capturada como um número de antes/depois. <!-- TODO: adicionar números de latência quando disponíveis -->"
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Decomponha uma decisão conflada em eixos independentes antes de comparar alternativas. Empacotar duas escolhas em uma opção de \"ou/ou\" faz parecer um único trade-off quando na verdade são dois, e você pode acabar trocando algo que não precisava estar na mesa.",
          "Revisite sua própria decisão quando encontrar uma lacuna real nela. Perceber que um caminho de leitura síncrono e voltado ao cliente não tolera o piso natural de latência de um armazenamento, e corrigir a recomendação antes de ir para produção, valeu mais do que defender a primeira versão.",
          "Análise de segurança e privacidade pertence dentro da decisão de arquitetura, não depois dela. Uma decisão de modelo de dados já determina sua fronteira de isolamento de tenant, sua fronteira de acesso, e seu risco de disponibilidade baseado em custo, então revisar isso separadamente, depois, é revisar tarde demais para mudar barato.",
          "Carga analítica não pertence ao seu armazenamento transacional. Quando agregações pesadas e tráfego ao vivo dividem um banco de dados, a correção geralmente é separar a carga de trabalho, não ajustar a query.",
          "Em um warehouse analítico, o modelo de dados é uma decisão de custo, e uma query sem limites é um risco de disponibilidade, não só de lentidão. Clustering, tabelas curadas e um teto rígido de custo por query são o que mantém um armazenamento cobrado por escaneamento acessível e previsível."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Autora fundadora do repositório do serviço; construí o walking skeleton e a camada de dados.",
          "Escrevi uma decisão de arquitetura documentada comparando quatro alternativas em uma matriz explícita serviço × banco de dados, com uma análise de risco de segurança/privacidade dedicada e guardrails de custo como parte da recomendação, revisada e aprovada por sete stakeholders entre engenharia e o time de plataforma.",
          "Revisei a decisão entre duas versões depois de identificar um risco de latência que a primeira versão tinha subestimado.",
          "Tabelas analíticas curadas e rotinas de carga em infrastructure-as-code.",
          "Verificado o andamento contra o tracker (2026-07): o dataset de staging, depois duas tabelas curadas (uma tabela de staging delta de 24 horas e uma tabela clusterizada de estado atual diário) carregadas incrementalmente por um `MERGE` diário mais uma rotina de intervalo mais amplo como rede de segurança para mensagens atrasadas; uma table-valued function como o único ponto de entrada que o serviço chama, para que o formato da query fique em infraestrutura versionada em vez de SQL construído por strings; queries agendadas para atualização incremental; permissões de warehouse para o time; e então a mesma stack em produção. Cada peça entregue como infrastructure-as-code, staging primeiro.",
          "Verificado trabalho de performance e custo: testes de carga rodados contra queries de produção parametrizadas por dois contextos reais de tenant (2026-06-26 a 2026-07-17), e uma investigação separada de clustering para reduzir bytes escaneados, ambos antes do serviço ir amplo.",
          "Verificada a superfície de produto (2026-07 a 2026-08): a página de gestão de anomalias, uma aba de gráfico de adherence, uma tabela de alertas recorrentes com seu contrato de dados acordado de ponta a ponta antes de qualquer lado ser construído, o endpoint por trás dela, e uma view de alertas acumulados ainda em progresso, cada uma entregue atrás de uma feature flag, várias com um contrato mockado chegando antes do endpoint real.",
          "Fonte (privada): base de conhecimento de carreira consolidada; registro interno de decisão de arquitetura; épicos e subtarefas do Jira no domínio de inspeção, 2026-03 a 2026-08."
        ]
      }
    ]
  },
  {
    "id": "production-incident-role-bindings-consumer",
    "featured": false,
    "title": "Respondendo a um incidente de produção com a decisão de arquitetura que faltava, não só um patch",
    "company": "Dynamox",
    "category": "Incidente",
    "summary": "Identifiquei a causa raiz de um incidente de produção que bloqueava clientes como uma suposição de arquitetura não documentada, reconstruí o consumer afetado com um post-mortem, um ADR e documentação de regras de negócio, depois, após o rollout expor um deadlock de banco de dados, diagnostiquei-o como uma incompatibilidade de particionamento do Kafka e substituí a perda silenciosa de mensagens por retry, uma dead-letter queue e serialização por usuário.",
    "capabilities": [
      "Resposta a Incidentes",
      "Design de Sistemas",
      "Comunicação",
      "Senso de Dono"
    ],
    "technologies": [
      "NestJS",
      "Kafka",
      "PostgreSQL"
    ],
    "impact": [
      "Resolvi o incidente que bloqueava o cliente e documentei a decisão de arquitetura ausente para que a mesma lacuna não possa reabrir silenciosamente.",
      "Dei ao domínio um consumer devidamente consciente de workspace no serviço atual do time, onde nenhum existia antes.",
      "Eliminei o deadlock de produção em sua causa raiz (incompatibilidade de partition-key), não maquiando o sintoma.",
      "Substituí a perda silenciosa de mensagens por um caminho de falha recuperável, com retry para erros transitórios e uma dead-letter queue para os permanentes, fechando uma lacuna onde falhas antes desapareciam sem deixar rastro.",
      "Qualitativo: maior confiança na confiabilidade de um consumer crítico para permissões; nenhum incidente do mesmo tipo se repetiu após a correção."
    ],
    "difficulty": "Alta",
    "ownership": "Ponta a ponta",
    "customerFacing": "Sim",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais clara de resposta a incidentes que corrige a classe do bug, não a instância, e de permanecer com um problema ao longo de dois atos: o incidente inicial, e o modo de falha mais sutil que só apareceu depois que a correção foi para produção. Nas duas vezes, resisti ao patch mais rápido disponível em favor de entender por que o sistema estava errado desde o início, e deixei a resposta documentada para que a próxima pessoa não precisasse redescobri-la.",
          "Isso também mostra uma maturidade operacional que vai além de \"corrigi o bug\": diagnosticar um deadlock de produção a partir de logs, rastreando-o até uma incompatibilidade específica entre o particionamento de um sistema de mensageria e o padrão real de contenção dos dados, é raciocínio em nível de sistemas sob pressão, o tipo de debugging que separa \"reiniciei o pod\" de realmente entender a falha."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Um cliente ficou preso em uma tela permanente de \"erro de sincronização\" e não conseguia concluir seu trabalho, um bloqueio duro, não um bug cosmético. A causa próxima remontava a como um consumer de gestão de permissões tratava uma edição: uma decisão sobre se a lógica desse consumer deveria estar restrita a um workspace nunca tinha sido tornada explícita em lugar nenhum, então uma mudança que assumiu o escopo errado passou despercebida. O consumer subjacente para esse domínio também só existia no serviço legado do time; o serviço mais novo não tinha equivalente, o que era parte do motivo pelo qual a lacuna nunca tinha aparecido antes.",
          "Meses depois que a reconstrução foi para produção, um segundo problema, aparentemente não relacionado, apareceu: o novo consumer começou a lançar deadlocks de banco de dados em produção."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "O defeito real não estava no caminho de código que falhou. Estava em uma decisão que nunca foi escrita. Corrigir o bug de escopo imediato teria deixado a mesma classe de erro possível na próxima mudança, porque nada registrava *por que* o consumer precisava se comportar da forma que deveria.",
          "As próprias palavras do usuário tornaram o impacto concreto. Ele estava bloqueado no meio de uma tarefa e frustrado; não havia ambiguidade sobre se isso importava.",
          "O deadlock era intermitente e não óbvio. Um erro genérico de \"transação falhou\" não dá nenhuma pista por si só de que a causa real é uma incompatibilidade entre como o trabalho é distribuído (particionamento) e como os dados subjacentes são de fato disputados.",
          "O tratamento de falhas existente piorava o deadlock. Mensagens com falha estavam sendo silenciosamente engolidas e seu offset confirmado mesmo assim, então antes mesmo de poder ser corrigido de verdade, o próprio modo de falha teve que mudar de \"desaparece sem deixar rastro\" para \"visível e recuperável.\""
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Tratei o incidente como dois problemas de diagnóstico separados, meses um do outro, e recusei-me a encerrar qualquer um deles com uma correção superficial."
        ],
        "bullets": [
          "Escrevi o post-mortem primeiro. Antes de reconstruir qualquer coisa, documentei o que aconteceu e por quê, para que o incidente tivesse um registro de responsabilidade, não só um ticket fechado.",
          "Tornei a decisão ausente explícita em um ADR. Ele cobre por que o consumer precisa respeitar o escopo de workspace, como deveria lidar com exclusões, como proteger a rastreabilidade de registros, e como casos extremos deveriam se comportar, em vez de codificar a correção só no código, onde a próxima pessoa teria que fazer engenharia reversa do raciocínio.",
          "Documentei as regras de negócio separadamente, porque elas estavam espalhadas pelo código de aplicação sem uma referência central, o que era parte do motivo pelo qual a lacuna original passou despercebida.",
          "Reconstruí o consumer propriamente no serviço e stack atuais do time, em vez de aplicar patch na implementação legada, já que o domínio ainda não tinha um equivalente lá.",
          "Meses depois, diagnostiquei o deadlock a partir de logs de produção, não por tentativa e erro. Busquei a assinatura de erro específica, encontrei rajadas repetidas, e confirmei o mecanismo: o tópico era particionado pelo identificador da própria mudança, não pelo usuário afetado, então múltiplas mensagens sobre o *mesmo* usuário podiam cair em partições diferentes e ser processadas simultaneamente, colidindo ao atualizar a mesma linha.",
          "Corrigi o mecanismo, não só o sintoma. Serializei atualizações por usuário afetado para que mensagens concorrentes sobre a mesma pessoa não pudessem mais competir entre si, e substituí o caminho de falha silenciosa por retry para erros transitórios e uma dead-letter queue para os permanentes, para que uma falha agora seja visível e recuperável em vez de invisível."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Escrever um post-mortem, um ADR e documentação de regras de negócio em vez de entregar uma correção direta. Documentação tomou tempo real que o patch mais rápido não tomaria, mas a lacuna original existia *porque* a decisão nunca tinha sido escrita, e repetir esse erro teria custado mais depois do que economizou agora.",
          "Reconstruir o consumer na stack atual em vez de aplicar patch na legada. Um patch teria sido mais rápido, mas teria mantido o domínio dividido entre dois serviços sem uma única fonte da verdade, e deixado o serviço mais novo sem um comportamento de que precisava.",
          "Diagnosticar a causa raiz do deadlock em vez de adicionar um retry e chamar de resolvido. Um retry cego teria mascarado a colisão sem removê-la; rastrear a incompatibilidade até a partition key fez a correção endereçar a contenção real em vez de escondê-la.",
          "Serializar por usuário em vez de ampliar a transação ou o orçamento de retry. Estreitar a correção exatamente ao escopo da colisão (mesmo usuário, mensagens concorrentes) evitou uma lentidão mais ampla e vaga que uma correção mais defensiva teria introduzido em todo lugar."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Resolvi o incidente que bloqueava o cliente e documentei a decisão de arquitetura ausente para que a mesma lacuna não possa reabrir silenciosamente.",
          "Dei ao domínio um consumer devidamente consciente de workspace no serviço atual do time, onde nenhum existia antes.",
          "Eliminei o deadlock de produção em sua causa raiz (incompatibilidade de partition-key), não maquiando o sintoma.",
          "Substituí a perda silenciosa de mensagens por um caminho de falha recuperável, com retry para erros transitórios e uma dead-letter queue para os permanentes, fechando uma lacuna onde falhas antes desapareciam sem deixar rastro.",
          "Qualitativo: maior confiança na confiabilidade de um consumer crítico para permissões; nenhum incidente do mesmo tipo se repetiu após a correção."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Um incidente causado por uma decisão não documentada não está corrigido até que a decisão seja escrita. Do contrário, você corrigiu o sintoma e deixou a causa livre para ressurgir em outra forma.",
          "Um erro genérico de \"transação falhou\" é um ponto de partida, não um diagnóstico. A causa real costuma estar uma camada acima, aqui entre como o trabalho foi particionado e como os dados eram de fato disputados.",
          "Nunca deixe uma falha desaparecer silenciosamente. Um sistema que engole um erro e confirma mesmo assim é pior do que um que falha ruidosamente, porque você precisa conseguir ver uma falha antes de poder corrigir sua causa.",
          "Corrija o escopo exato da contenção, não toda a superfície ao redor. Serializar por usuário afetado resolveu a colisão real sem deixar tudo mais lento."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Escrevi o post-mortem, o ADR e a documentação de regras de negócio do domínio, antes de reconstruir o consumer.",
          "Reconstruí o consumer no serviço e stack atuais do time; ativado em produção.",
          "Diagnostiquei de forma independente um deadlock de produção posterior como uma incompatibilidade de partition-key do Kafka via análise de logs, e substituí a perda silenciosa de mensagens por retry, dead-letter queue e serialização por usuário.",
          "Verificado contra o tracker. O incidente é datado de 2026-01-13, e a resposta foi decomposta na mesma semana: o post-mortem (2026-01-13 a 2026-01-19), o documento de regras de negócio do domínio (fechado 2026-01-29) e o ADR (2026-01-19 a 2026-01-28) foram todas tarefas rastreadas que *precederam* a reconstrução, não redações produzidas depois.",
          "Verificada a reconstrução: serviço base e integração de mensageria (2026-01-21 a 2026-01-26), os casos de uso de criação e exclusão (fechado 2026-02-17), um endpoint de soft-delete em lote para as relações afetadas, uma feature flag em staging (2026-02-17), ativação em produção (2026-03-16) com um erro de produção investigado e fechado no mesmo dia, e uma tarefa separada para reparar os usuários que o bug original já tinha corrompido (2026-01-16 a 2026-02-20).",
          "Verificado o acompanhamento, meses depois: uma exceção de validação de contrato de dados (2026-06-29), o deadlock de transação (2026-06-30 a 2026-07-01, quatro pull requests), uma inconsistência de ciclo de vida de usuário entre upsert e exclusão de papel (2026-07-07), e tratamento para o caso em que todos os papéis de um usuário são excluídos de uma vez.",
          "Fonte (privada): registro de incidente do Jira e seu post-mortem, ADR e tarefas de acompanhamento vinculados, tracker de engenharia da Dynamox; os pull requests correspondentes."
        ]
      }
    ]
  },
  {
    "id": "materialized-hierarchy-and-backfill-residue",
    "featured": false,
    "title": "Trocando um join em tempo real por uma coluna materializada, depois encontrando os 79% que minha própria migração deixou para trás",
    "company": "Dynamox",
    "category": "Performance & Plataforma de Dados",
    "summary": "Um join do warehouse por requisição estava escaneando 658,8 MB contra um teto rígido de 953,7 MiB por job, em uma tabela que cresce a cada novo cliente. Medi, movi o join para o pipeline que já o executava, deletei o cache que escondia o problema, depois auditei minha própria migração e encontrei 79% das linhas de produção nunca preenchidas retroativamente, mais 9.299 alertas que nunca tinham aparecido no produto.",
    "capabilities": [
      "Engenharia de Performance",
      "Engenharia de Dados",
      "Debugging",
      "Confiabilidade",
      "Comunicação",
      "Senso de Dono"
    ],
    "technologies": [
      "BigQuery",
      "Terraform",
      "NestJS",
      "TypeScript"
    ],
    "impact": [
      "658,8 MB por cache miss removidos; o precipício de quota removido junto",
      "Latência a frio de 3,4s para ~0,8s (~77%)",
      "Jobs de warehouse por requisição a frio de 3 para 2",
      "70.502 linhas de produção reparadas, de forma idempotente",
      "9.299 alertas invisíveis (10,4%) recuperados para o produto"
    ],
    "difficulty": "Alta",
    "ownership": "Ponta a ponta",
    "customerFacing": "Sim",
    "readingTime": "8 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais clara de dois comportamentos sêniores em um único arco. Primeiro, decidir com base em medições, não em instinto: a correção não foi \"essa query parece lenta\", foi \"essa query está em 69% de um teto rígido em uma tabela que cresce a cada cliente que assinamos, e aqui estão os bytes\". Segundo, tratar minha própria mudança já entregue como algo a ser auditado. Ninguém reportou nenhum dos dois bugs. Eu fui atrás, descobri que minha migração tinha deixado a maior parte da produção desatualizada, documentei a causa raiz e o risco residual aceito em tickets públicos com meu nome neles, e corrigi. A capacidade que eu apontaria não é o SQL. É estar disposta a ser a pessoa que encontra o próprio resíduo."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Um serviço de relatórios serve uma view de gestão de anomalias: para cada alerta de inspeção pendente, o ativo e a cadeia de pastas organizacionais acima dele, para que um operador possa localizar o equipamento em uma planta.",
          "Essa cadeia era montada por requisição. O serviço emitia uma query extra no warehouse que unia linhas de alerta a uma tabela de referência de nós organizacionais por prefixo de caminho. A tabela de referência é clusterizada pelo seu identificador, não pelo caminho, então um join por prefixo não tem nenhuma poda disponível e lê a tabela do início ao fim. Medido em produção, essa única query escaneava 658,8 MB por cache miss, enquanto a query principal do mesmo endpoint escaneava 53 MB. Os bytes praticamente não mudavam entre uma requisição de um caminho e um lote de vinte caminhos, porque o custo era o escaneamento completo, não o lote.",
          "A plataforma limita cada job do warehouse a 953,7 MiB. Então uma única query de suporte estava consumindo 69% do teto, em uma tabela de referência já com 962 MB e 2,67M linhas que cresce toda vez que um cliente cria um workspace. Com aproximadamente 45% mais crescimento o endpoint para de ser lento e começa a retornar um erro rígido de quota. O que estava segurando a barra era um cache LRU em memória de 15 minutos que eu tinha adicionado antes no mesmo épico: uma mitigação, não uma correção, já que todo miss ainda pagava os 658,8 MB."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "paras": [
          "A parte difícil não era a query. Era enxergar o modo de falha corretamente e sequenciar a correção."
        ],
        "bullets": [
          "O sintoma mentia. A latência parecia um problema de cache. O risco real era um *precipício de quota*: não uma lentidão gradual, mas uma falha rígida em um limiar definido por uma tabela que cresce com a assinatura de clientes, então chega mais rápido exatamente quando o negócio está indo bem.",
          "Sete escritores, um schema. A coluna precisava ser adicionada ao schema da tabela, ao tipo de retorno declarado da table function, à carga incremental, ao merge diário, ao backfill, à checagem de consistência e a um script de migração. Perder um faz linhas chegarem incompletas, silenciosamente.",
          "A ordem era estrutural. Se o serviço começasse a ler a nova coluna antes do backfill ter rodado em produção, todo breadcrumb no produto ficaria em branco. Essa restrição é o que transformou isso em uma migração faseada em vez de um pull request.",
          "A rede de segurança não conseguia ver a falha. A checagem de consistência do pipeline compara o evento bruto com a linha curada, mas lê o caminho do *mesmo campo do evento* que o pipeline lê. Quando esse campo estava ausente, os dois lados eram NULL e a checagem reportava concordância perfeita. Um verificador de divergência estruturalmente não consegue detectar ausência."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Medi antes de propor qualquer coisa. Execuções reais de query com pruning de cluster tanto em staging quanto em produção: bytes da query de suporte, bytes da query principal, tamanho e contagem de linhas da tabela de referência, número de jobs de warehouse por requisição a frio, e latência a frio. Esses números são o que sustentou o argumento, e são o que me disse qual alavanca importava.",
          "Perguntei onde o trabalho já estava sendo feito. A carga incremental do pipeline já unia as mesmas linhas de alerta contra a mesma tabela de referência para computar quatro colunas fixas de profundidade. Então materializar a cadeia completa não era trabalho novo; era mais uma agregação dentro de um join que já rodava. Esse reenquadramento é o que tornou a mudança barata em vez de uma troca de custo de requisição por custo de pipeline.",
          "Escrevi a migração como quatro etapas ordenadas com seus próprios critérios de aceite: schema e pipeline em staging, depois produção, depois o serviço, depois uma limpeza opcional, com a dependência declarada explicitamente: o serviço não deve ler a coluna até que as linhas de produção estejam populadas. Também sinalizei, por escrito, que as colunas de profundidade existentes não filtravam nada por tipo de nó enquanto a nova cadeia precisava excluir nós de nível de máquina, então era uma nova agregação e não um reaproveitamento da antiga.",
          "Depois auditei minha própria mudança. Enquanto modelava a próxima funcionalidade, verifiquei se algum alerta ficaria fora do escopo de um workspace, e encontrei 70.684 de 88.995 alertas pendentes (79%) com uma cadeia de localização vazia. O script de backfill existia, tratava a nova coluna, e simplesmente nunca tinha sido executado em produção.",
          "Provei que era uma lacuna temporal, não um defeito de dados, antes de tocar em qualquer coisa: 61.385 linhas tinham a coluna de profundidade antiga populada e a nova cadeia vazia. Ambas vêm do mesmo join, na mesma expressão. Se o join tivesse falhado, ambas estariam vazias. Essas linhas passaram pelo join em um momento em que a nova coluna ainda não existia. Um segundo sinal concordava: 733 caminhos tinham linhas em *ambos* os estados, as vazias parando no dia da migração e as populadas continuando.",
          "Reparei com uma instrução idempotente e direcionada em vez de uma recarga. O movimento óbvio, truncar e rodar o backfill de novo sobre uma janela de dez anos, era mais raio de impacto do que o problema justificava. Em vez disso escrevi um `UPDATE` restrito a linhas com cadeia vazia, e reaproveitei a própria lógica do pipeline com uma mudança: resolver ancestrais enumerando prefixos de caminho e unindo por igualdade, em vez do join por correspondência de prefixo que o pipeline usa, que levava mais de quatro minutos aqui. Validei que as duas formas produziam saída idêntica em 500 caminhos amostrados (500/500) antes de rodar. O predicado de cadeia vazia aparece tanto no alvo quanto no filtro deliberadamente, então a instrução é idempotente e não pode sobrescrever um valor bom. 61.203 linhas reparadas.",
          "O resíduo foi a descoberta real. 9.299 linhas não se moveram, e todas tinham um caminho NULL, de um período antes do produtor de eventos começar a enviar o campo. A table function filtra escopo com `path = workspace OR STARTS_WITH(path, workspace || '/')`. Com um caminho NULL, ambas as comparações avaliam para NULL, `NULL OR NULL` é NULL, e `WHERE NULL` descarta a linha. Esses alertas não estavam aparecendo sem localização. Não estavam aparecendo de jeito nenhum: 10,4% dos alertas pendentes, incluindo 5.469 na faixa de maior severidade, em 1.588 checklists, 91% deles dentro de um único tenant. Staging estava proporcionalmente pior, em 31,9%. Nenhum cliente tinha reportado, porque a resposta do produto para \"quantos alertas pendentes eu tenho?\" estava simples e silenciosamente errada.",
          "Recuperei esses caminhos de uma fonte materializada indexada por checklist, e validei antes de executar em vez de depois: uma checagem de join 1:1 (2.167.356 linhas para 2.167.356 ids distintos), zero caminhos NULL na fonte, formatação byte-idêntica em amostras, 99,57% de concordância (32.846 de 32.988) no subconjunto onde ambos os valores existiam, e um ensaio completo em staging que corrigiu 139 de 139 com zero resíduo."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Materializar a cadeia no pipeline em vez de elevar o teto de bytes por job. Elevar o teto converte uma falha rígida e visível em um custo silencioso e crescente. Documentei isso como um paliativo aceitável se o trabalho atrasasse, explicitamente não como a solução.",
          "Materializar em vez de manter o cache em tempo de requisição e ajustá-lo. O cache era mitigação real e eu mesma o tinha construído, mas todo miss ainda pagava o escaneamento completo. Mantê-lo significava manter a lógica de TTL, LRU e cache negativo que existia *só* por causa dessa única query. Remover a causa me permitiu deletar tudo isso.",
          "Um `UPDATE` idempotente e direcionado em vez de truncar-e-recarregar a partir do script de backfill. A recarga era o caminho sancionado e teria sido mais simples de justificar. Escolhi a instrução mais estreita porque toca só linhas quebradas, é segura para rodar de novo, e não pode sobrescrever um valor correto; o custo é que tive que provar que minha resolução reescrita de ancestrais era equivalente à do pipeline.",
          "Enumeração de prefixo com join por igualdade em vez do join por correspondência de prefixo do pipeline. Mais rápido por ordens de magnitude na escala do reparo, ao preço de uma segunda implementação da mesma regra. Paguei esse preço com uma checagem de equivalência de 500 amostras em vez de um argumento.",
          "Recuperar caminhos da fonte materializada atual em vez de deixar 9.299 alertas invisíveis. A fonte guarda a localização *atual* de um checklist, enquanto o relatório guardava sua localização *no momento da resposta*. Na base comparável, 143 linhas (0,43%) discordavam, 14 delas sob uma raiz diferente: checklists que tinham sido movidos. Extrapolado para o conjunto recuperado, isso é aproximadamente 7 movidos internamente e possivelmente 1 entre raízes, e como essas linhas não tinham caminho algum, não há como identificar quais. Escolhi visível-e-possivelmente-desatualizado em vez de invisível, e documentei o risco residual no ticket para que a próxima pessoa a ser perguntada \"por que esse alerta antigo está arquivado ali?\" tenha a resposta.",
          "Sem snapshot antes do reparo em vez de uma cópia defensiva. Uma escolha consciente, não um descuido. As instruções eram idempotentes, estreitas, ensaiadas em staging, e o time-travel de 7 dias do warehouse era o fallback. Registrei que a decisão foi tomada e por quê, porque os números pré-reparo no ticket agora são o único registro do estado anterior."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Removi 658,8 MB de bytes escaneados por cache miss e, com eles, o precipício de quota. O endpoint não fica mais em 69% de um teto rígido em uma tabela que cresce com a contagem de clientes.",
          "Latência a frio de 3,4s → ~0,8s (~77%), cortando jobs de warehouse por requisição a frio de 3 para 2.",
          "Deletei o cache de localização por completo, junto com sua lógica de TTL, LRU e cache negativo, já que o código existia só para compensar a query que não roda mais. O breadcrumb também parou de ficar limitado a quatro níveis: as cadeias agora vão de 1 a 10 de profundidade.",
          "Reparei 70.502 linhas de produção: 61.203 com uma cadeia vazia desatualizada, 9.299 que estavam sendo descartadas do produto por completo. Estado final verificado: 89.067 alertas pendentes, zero sem um caminho, zero com uma cadeia vazia.",
          "Recuperei 9.299 alertas (10,4% dos alertas pendentes) para o produto, incluindo 5.469 na faixa de maior severidade, em um relatório que clientes usam para priorizar manutenção. Contadores e listagens estavam subestimando o backlog real.",
          "Desbloqueei a funcionalidade que encontrou o bug. Uma view de alertas acumulados escopada por workspace teria visto apenas 20% dos dados.",
          "Registrei o trabalho de prevenção honestamente como *a fazer*, não como feito: um fallback no pipeline quando o campo de evento está ausente, uma asserção de completude na checagem de consistência, e uma decisão sobre se a table function deveria excluir caminhos NULL explicitamente e contá-los em vez de deixá-los desaparecer."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "bullets": [
          "Uma quota é um precipício, não uma rampa. Limites de cobrança por byte e similares não degradam, eles falham de forma abrupta em um limiar. Quando o motor desse limiar é uma tabela que cresce com o sucesso do negócio, \"está tudo bem hoje\" não é uma medição, é uma contagem regressiva.",
          "Meça a alavanca, não a suspeita. Duas otimizações plausíveis estavam na mesa. A medição disse que uma estava em 69% do teto e a outra em 18% de uma query que não era o problema. Escrever \"não é a alavanca, revisitar se a base crescer 10x\" na seção fora de escopo é parte da entrega.",
          "Um verificador de divergência não consegue detectar ausência. Se sua validação lê a mesma fonte da coisa que ela valida, NULL concorda com NULL e a checagem passa. Checagens de integridade precisam de ao menos um invariante de *completude*, verificado de forma independente.",
          "Filtros que descartam NULL falham de forma fechada e silenciosa. `WHERE prefix_match(NULL, x)` não retorna uma linha sem localização, retorna nenhuma linha. Um registro que desaparece é muito pior do que um que renderiza incompleto, e nada no sistema vai te avisar.",
          "Adicionar uma coluna derivada a um pipeline é uma migração, não uma edição. Linhas históricas não se reconstroem sozinhas. \"Rodar o backfill\" pertence aos critérios de aceite do PR que adiciona a coluna, não à memória de alguém.",
          "Prefira a escrita idempotente e estreita à ampla sancionada quando você conseguir provar equivalência. Repetir a guarda tanto no alvo quanto no filtro é o que torna um reparo seguro para rodar de novo às 3 da manhã.",
          "Publicar o risco residual é parte de entregar a correção. Eu não conseguia identificar quais alertas recuperados poderiam mostrar uma localização desatualizada. Dizer isso, com a taxa medida, converte um passivo desconhecido em um documentado."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Fui dona de ponta a ponta e sozinha: medição, a decisão escrita com suas alternativas rejeitadas, um rollout faseado em quatro etapas em dois ambientes com critérios de aceite por etapa, a mudança do lado do serviço, e os dois reparos forenses.",
          "Medições tomadas como execuções reais com pruning de cluster tanto em staging quanto em produção, registradas no ticket junto com o teto contra o qual foram comparadas, incluindo a contra-medição que eliminou a otimização alternativa.",
          "Ambos os defeitos foram encontrados por mim durante a modelagem da próxima funcionalidade, não reportados por um cliente ou por monitoramento; ambos foram documentados como tickets públicos de causa raiz com queries de reprodução, a correção aplicada, o risco residual aceito, e itens de prevenção.",
          "Todo reparo ensaiado em staging antes de produção, com a tabela de validação pré-voo (cardinalidade de join, completude da fonte, igualdade de formato, taxa de concordância) registrada antes da execução em vez de depois.",
          "Fonte (privada): épico e tickets de causa raiz do Jira no domínio de inspeção (2026-08), mais os pull requests correspondentes de infrastructure-as-code e de serviço."
        ]
      }
    ]
  },
  {
    "id": "prod-data-correction",
    "featured": false,
    "title": "Corrigindo dados de produção com segurança, com ferramentas reversíveis e auditáveis",
    "company": "Dynamox",
    "category": "Incidente",
    "summary": "Corrigi dezenas de milhares de registros corrompidos em produção (~33k em um caso) sem janela de manutenção, usando comandos CLI reutilizáveis com dry-run, arquivos de rollback, auditoria em lote e republicação de eventos, um padrão de \"comando de correção\" que o time depois reutilizou.",
    "capabilities": [
      "Resposta a Incidentes",
      "Senso de Dono",
      "Engenharia Backend",
      "Debugging",
      "Confiabilidade"
    ],
    "technologies": [
      "NestJS",
      "PostgreSQL",
      "Kafka",
      "Kubernetes"
    ],
    "impact": [
      "~33.000 registros corrigidos em produção sem janela de manutenção, com uma trilha de auditoria e rollback disponível.",
      "Um padrão reutilizável de \"comando de correção\" adotado pelo time (vários comandos construídos sobre ele), transformando uma operação arriscada e pontual em uma operação repetível e segura.",
      "Consumers downstream reconvergiram sobre os dados corrigidos via republicação de eventos, então as correções ficaram completas de ponta a ponta em vez de só na fonte.",
      "Qualitativo: maior confiança na integridade dos dados de produção; correções se tornaram rotineiras e seguras em vez de excepcionais e arriscadas."
    ],
    "difficulty": "Média",
    "ownership": "Ponta a ponta",
    "customerFacing": "Sim",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais forte de maturidade operacional e ownership sobre integridade de dados. Uma correção de dados de produção é uma das coisas de maior risco que uma engenheira faz: é uma escrita em dados reais de clientes sem desfazer, a menos que você construa um. Tratar isso com o rigor de uma funcionalidade, ou seja, reversível, auditável e visualizável antes de aplicar, em vez de um script apressado, é a distinção que quero que isso mostre.",
          "Isso também mostra que otimizo para o time, não só para o incidente: transformei cada correção em ferramentas reutilizáveis, então uma correção pontual virou uma capacidade que outros podiam aplicar com segurança."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Vários bugs distintos tinham deixado dados ruins em produção, por exemplo:"
        ],
        "bullets": [
          "~33.000 registros com um timestamp armazenado sem informação de timezone, então um campo sensível ao tempo estava errado.",
          "Linhas duplicadas em uma tabela de relacionamento.",
          "Registros poluídos por uma execução de teste de uma integração externa.",
          "Atribuições de ownership incorretas em registros que deveriam ter um único responsável."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "Escrever em dados de produção ao vivo não tem desfazer natural. Se uma correção está errada, você corrompeu os dados duas vezes, então reversibilidade precisa ser projetada, não presumida.",
          "Sem janela de manutenção. O sistema permanecia no ar, então as correções precisavam ser seguras para rodar contra um alvo em movimento e considerar a carga.",
          "Consumers downstream já tinham ingerido os dados ruins. Corrigir o registro na fonte não basta se consumers orientados a eventos ainda mantêm o valor antigo. Eles precisam ser reconvergidos.",
          "Algumas correções eram sutis. Uma correção de timezone precisa considerar horário de verão, deduplicação precisa escolher o sobrevivente certo, e backfills grandes precisam ser ritmados para não sobrecarregar o sistema."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Recusei-me a tratar isso como scripts descartáveis e em vez disso os construí como ferramentas com segurança embutida."
        ],
        "bullets": [
          "Dry-run por padrão. Todo comando primeiro reporta exatamente o que *mudaria*, então o efeito é revisado antes de qualquer escrita.",
          "Um arquivo de rollback escrito antes de qualquer escrita. Cada comando registra o estado anterior em um arquivo de antemão, e um comando dedicado de rollback pode restaurá-lo, então toda correção é reversível.",
          "Auditoria em lote. Correções rodam em lotes auditados, deixando um rastro do que mudou e quando.",
          "Republicação enriquecida de eventos. Depois de corrigir um registro na fonte, o comando republica os eventos correspondentes para que consumers orientados a eventos reconvirjam sobre os dados corrigidos em vez de manter o valor antigo.",
          "Corretude nos detalhes. A correção de timezone considerava horário de verão, a deduplicação escolhia sobreviventes de forma determinística, e um backfill grande usava paginação por cursor e micro-lotes ritmados com concorrência limitada para não sobrecarregar o sistema.",
          "Rodei-os contra produção com cuidado, diagnosticando as peculiaridades do ambiente containerizado ao executar dentro de pods ao vivo."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Dry-run e arquivo de rollback em vez de uma correção direta. Construir preview e desfazer em cada comando custa esforço real antecipado, mas uma escrita em dados de produção sem desfazer é uma aposta que não estou disposta a fazer. Custo aceito: cada comando é mais trabalho do que uma query bruta.",
          "Republicar eventos em vez de corrigir só as linhas na fonte. Reemitir eventos adiciona uma etapa e alguma carga, mas sem isso os consumers downstream continuam errados e a correção fica só pela metade.",
          "Comandos reutilizáveis em vez de scripts pontuais. Generalizar em um padrão de \"comando de correção\" custou mais do que um script para o caso único, e se pagou imediatamente quando o mesmo arcabouço de segurança foi reutilizado na correção seguinte.",
          "Lotes ritmados em vez de uma escrita em massa única. Paginação por cursor e micro-lotes são mais lentos do que uma única instrução grande, mas mantêm um sistema ao vivo saudável durante um backfill grande."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "~33.000 registros corrigidos em produção sem janela de manutenção, com uma trilha de auditoria e rollback disponível.",
          "Um padrão reutilizável de \"comando de correção\" adotado pelo time (vários comandos construídos sobre ele), transformando uma operação arriscada e pontual em uma operação repetível e segura.",
          "Consumers downstream reconvergiram sobre os dados corrigidos via republicação de eventos, então as correções ficaram completas de ponta a ponta em vez de só na fonte.",
          "Qualitativo: maior confiança na integridade dos dados de produção; correções se tornaram rotineiras e seguras em vez de excepcionais e arriscadas."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Uma correção de dados de produção merece o rigor de uma funcionalidade. Reversibilidade, auditabilidade e um preview não são extras opcionais quando você está escrevendo em dados reais de clientes.",
          "Dry-run por padrão; escreva o rollback antes da escrita. O desfazer precisa existir antes da mudança, não depois de você descobrir que precisava dele.",
          "Corrigir a fonte não basta em um sistema orientado a eventos. Republique para que consumers downstream reconvirjam, ou você corrigiu metade do sistema.",
          "Transforme uma correção em ferramenta. Generalizar uma correção em um comando reutilizável transforma um risco pontual em uma capacidade que todo o time pode aplicar com segurança."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "~33k registros corrigidos em produção sem janela de manutenção; trilha de auditoria e rollback disponíveis.",
          "Padrão de comando de correção (dry-run, arquivo de rollback, republicação de eventos) reutilizado em vários comandos do time.",
          "Verificado contra o tracker, cinco comandos de correção distintos em vez de um: rotas deixadas com mais de um usuário responsável (2025-10-15), rotas corrompidas por um teste de integração contra um sistema parceiro (2025-12-03 a 12-08), reprocessamento de rotas afetadas pelo novo caminho de atualização parcial (2026-01), usuários corrompidos por um bug de consumer (2026-01-16 a 2026-02-20), e ciclos duplicados removidos (2026-03-19 a 03-25). Esse espalhamento por quatro meses e quatro defeitos de dados distintos é o que faz disso um *padrão*, não um script pontual.",
          "Fonte: tarefas do Jira no domínio de inspeção, 2025-10 a 2026-03, e os pull requests correspondentes; contagens de registros e os detalhes de rollback/dry-run vêm da base de conhecimento de carreira consolidada (privada)."
        ]
      }
    ]
  },
  {
    "id": "asset-tree-search",
    "featured": false,
    "title": "Entregando uma árvore de ativos grande de ponta a ponta, do SQL recursivo ao prefetch progressivo",
    "company": "Dynamox",
    "category": "Performance",
    "summary": "Entreguei busca e navegação rápida sobre árvores de ativos muito grandes de ponta a ponta, com SQL recursivo no backend e uma UX de busca com cache em memória e prefetch progressivo em segundo plano no frontend, eliminando o carregamento repetido que tornava o fluxo mais usado lento.",
    "capabilities": [
      "Engenharia de Performance",
      "Engenharia Frontend",
      "Engenharia Backend",
      "Visão de Produto",
      "Senso de Dono",
      "UX"
    ],
    "technologies": [
      "PostgreSQL",
      "NestJS",
      "React"
    ],
    "impact": [
      "Entreguei busca e navegação rápida sobre árvores de ativos grandes de ponta a ponta entre banco de dados, backend e frontend, no fluxo mais usado do módulo.",
      "Eliminei o carregamento repetido que tornava lenta a navegação em árvores grandes, via cache e prefetch progressivo.",
      "Adicionei busca de ativos onde não havia nenhuma, com resultados mostrados em contexto.",
      "Qualitativo: uma melhora clara na performance percebida e na UX em um fluxo de alto tráfego; nenhuma métrica rígida de antes/depois foi capturada. <!-- TODO: adicionar números de tempo se disponíveis -->"
    ],
    "difficulty": "Alta",
    "ownership": "Ponta a ponta",
    "customerFacing": "Sim",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais forte de ownership full-stack e raciocínio de performance. Por ser dona do banco de dados, do backend e do frontend, pude colocar cada parte da solução na camada a que pertencia, travessia no banco de dados e ocultação de latência no cliente, em vez de forçar uma camada a compensar outra.",
          "Isso também mostra uma decisão de UX em nível de produto tomada como um trade-off de engenharia: escolher revelar resultados de busca expandindo a árvore em vez de filtrá-la mudou tanto o que o usuário vê quanto como os dados precisam carregar."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Ao construir ou editar uma rota de inspeção, usuários navegam por uma hierarquia de ativos que pode ser muito grande. Eles precisavam ver descrições de ativos e buscar ativos por nome, mas a árvore carregava devagar e não havia busca. No fluxo mais usado do módulo, isso significava espera repetida e nenhuma forma de pular para um ativo conhecido."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "Os dados são profundamente hierárquicos e grandes. Encontrar resultados e mostrá-los em contexto significa percorrer uma árvore grande, e a abordagem ingênua é uma cascata de queries por nível.",
          "Busca sobre uma árvore tem uma bifurcação de UX com consequências de dados. Você filtra a árvore até os resultados, ou revela os resultados no lugar? A escolha muda o que o usuário entende e quais dados você precisa carregar.",
          "Performance percebida é o alvo real. Até um backend rápido parece lento se o cliente bloqueia a cada expansão, então a latência precisava ser escondida, não só reduzida.",
          "Eu era dona das três camadas, então todo trade-off entre fazer o trabalho em SQL, na API, ou no cliente era meu para acertar."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Coloquei cada responsabilidade na camada adequada a ela."
        ],
        "bullets": [
          "Travessia no banco de dados, via SQL recursivo. Uma query recursiva encontra ativos correspondentes e sobe até seus ancestrais em uma única passagem, então o servidor retorna resultados já em seu contexto de árvore em vez do cliente costurar várias requisições. Deduplicei resultados e computei \"tem filhos\" de forma barata para que os nós renderizassem corretamente sem round-trips extras.",
          "Busca que revela em vez de filtrar. No frontend, apliquei debounce na query e escolhi expandir os nós dos resultados no lugar, com navegação entre resultados, em vez de reduzir a árvore só aos resultados. Isso mantém cada resultado legível em sua hierarquia real.",
          "Um cache em memória por termo de busca, para que repetir ou refinar uma busca não recarregue o que já é conhecido.",
          "Prefetch progressivo, nível a nível, em segundo plano, para que os próximos níveis já estejam carregando antes do usuário expandi-los, o que esconde latência no caminho comum.",
          "Documentei os casos de uso (incluindo fluxos alternativos para os diferentes atores) e fiz o rollout atrás de uma feature flag, staging antes de produção."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Uma query recursiva em vez de muitas queries por nível. Uma travessia recursiva retorna resultados com seus ancestrais em uma única passagem, evitando uma cascata tagarela, ao custo de uma query mais complexa para ser dona e raciocinar sobre ela.",
          "Expandir resultados no lugar em vez de filtrar a árvore. Revelar resultados em sua hierarquia real preserva contexto e orientação, onde uma lista filtrada seria mais simples mas removeria a estrutura de que os usuários dependem. Aceitei uma lógica de carregamento mais envolvida para manter o resultado significativo.",
          "Prefetch progressivo em segundo plano em vez de carregamento sob demanda. Prefetch esconde latência no caminho mais comum ao custo de buscar antecipadamente algo que o usuário pode não acabar precisando, uma boa troca no fluxo mais movimentado do módulo.",
          "Um cache em memória por termo em vez de recarregar. Cache troca um pouco de memória e contabilidade de cache pela eliminação do carregamento repetido durante uma sessão de busca."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Entreguei busca e navegação rápida sobre árvores de ativos grandes de ponta a ponta entre banco de dados, backend e frontend, no fluxo mais usado do módulo.",
          "Eliminei o carregamento repetido que tornava lenta a navegação em árvores grandes, via cache e prefetch progressivo.",
          "Adicionei busca de ativos onde não havia nenhuma, com resultados mostrados em contexto.",
          "Qualitativo: uma melhora clara na performance percebida e na UX em um fluxo de alto tráfego; nenhuma métrica rígida de antes/depois foi capturada. <!-- TODO: adicionar números de tempo se disponíveis -->"
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Empurre a travessia de hierarquia para o banco de dados. Uma query recursiva que retorna resultados com seus ancestrais vence uma cascata de requisições por nível que o cliente teria que orquestrar.",
          "Uma escolha de UX de busca é uma decisão de engenharia. \"Revelar no lugar\" vs. \"filtrar até os resultados\" muda tanto a compreensão quanto o formato dos dados que você carrega, então decida isso deliberadamente.",
          "Esconda a latência, não só a reduza. Prefetch progressivo e cache por termo fazem o caminho comum parecer instantâneo mesmo quando ainda resta algum trabalho.",
          "Ser dona de cada camada permite resolver cada problema onde ele pertence. Essa é a maior vantagem de um ownership full-stack de verdade."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Entreguei sozinha entre banco de dados (SQL recursivo), backend e frontend.",
          "Funcionalidade lançada em produção atrás de uma feature flag depois de staging.",
          "Documentei casos de uso incluindo fluxos alternativos por ator.",
          "Verificado contra o tracker (2026-05-19 a 2026-06-17): dois itens, o endpoint que expõe a descrição de um ativo aos formulários de rota, e a travessia recursiva em si. O antes/depois registrado é N×3 queries sequenciais substituídas por 3 no total: uma CTE recursiva para todos os nós descendentes, depois uma query em lote para pontos de medição e outra para checklists, com a árvore montada em memória em O(n) via um mapa id→nó.",
          "Verificado trabalho arquitetural, não só uma query: as regras de montagem da árvore (agrupar uma única folha como um nó direto versus N folhas sob um agrupador, a regra de ordenação, e `hasChildren` computado a partir dos filhos montados em vez de uma subquery no banco) foram extraídas do adapter do repositório para um montador na camada de domínio, restaurando a fronteira hexagonal que o código anterior tinha cruzado. Um nó raiz sentinela removeu a necessidade de arrays separados para filhos de raiz versus aninhados.",
          "Verificado um bug encontrado e com causa raiz identificada na mesma passagem: máquinas folha sem nós filhos mas com pontos de medição diretos não retornavam nada de forma recursiva, porque um retorno antecipado em \"nenhuma linha descendente\" as descartava antes da query de folha rodar. Corrigido incluindo o próprio id da raiz na busca de folhas.",
          "Verificado trabalho de frontend: eliminei uma dupla busca ao adicionar (uma expansão de um nível seguida imediatamente por uma recursiva), armazenei em cache o resultado recursivo na árvore do cliente para que uma expansão posterior não custe nada, e mudei a saga de latest-wins para tratamento por ação para que adicionar duas máquinas rapidamente não cancele mais a primeira. Tudo isso protegido por uma feature flag, com o caminho legado intocado quando a flag está desligada.",
          "Fonte (privada): itens do Jira no domínio de inspeção, 2026-05 a 2026-06; base de conhecimento de carreira consolidada."
        ]
      }
    ]
  },
  {
    "id": "single-computation-path",
    "featured": true,
    "title": "Desenhando um único caminho de computação para uma métrica entre serviços",
    "company": "Dynamox",
    "category": "Sistemas Distribuídos",
    "summary": "Dois serviços calculavam de forma independente a mesma métrica voltada ao cliente, causando dados inconsistentes. Redesenhei a arquitetura para que só um serviço fosse dono do cálculo enquanto todo outro serviço simplesmente sinalizava dados desatualizados.",
    "capabilities": [
      "Sistemas Distribuídos",
      "Design de Sistemas",
      "Tomada de Decisão Técnica",
      "Comunicação",
      "Senso de Dono"
    ],
    "technologies": [
      "NestJS",
      "PostgreSQL",
      "Kafka"
    ],
    "impact": [
      "Eliminação de race conditions",
      "Arquitetura simplificada",
      "Confiança do cliente melhorada"
    ],
    "difficulty": "Alta",
    "ownership": "Ponta a ponta",
    "customerFacing": "Sim",
    "readingTime": "7 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "A plataforma da Dynamox deriva uma métrica de conclusão para rotas de inspeção industrial: quanto de uma rota foi inspecionado, por ativo, por cliente. A métrica é voltada ao cliente, aparecendo em dashboards que operadores usam para planejar trabalho.",
          "Os fatos subjacentes vivem em eventos. Inspeções, edições e exclusões fluem através do Kafka para múltiplos serviços, cada um mantendo sua própria projeção dos dados."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Dois serviços computavam a métrica de forma independente, cada um a partir de sua própria projeção. Em condições normais, concordavam. Sob retries, entrega fora de ordem ou falhas parciais, divergiam, e clientes viam dois números diferentes para a mesma rota dependendo de qual tela abriam.",
          "Cada divergência virava um ticket de suporte, uma reconciliação manual, e uma pequena perda de confiança do cliente. O time tinha construído um job de reconciliação para corrigir diferenças, o que tratava o sintoma e adicionava um terceiro componente que podia discordar."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "Entrega pelo menos uma vez: todo consumer precisa tolerar duplicatas e reordenação.",
          "Sem transações distribuídas, já que os serviços fazem deploy e falham de forma independente.",
          "Zero downtime: a métrica está em uso operacional diário.",
          "Dados históricos precisavam de backfill para um estado consistente.",
          "Os dois serviços que faziam o cálculo eram de responsabilidade de pessoas diferentes; qualquer correção precisava sobreviver a fronteiras de time."
        ]
      },
      {
        "id": "alternatives",
        "title": "Alternativas Consideradas",
        "bullets": [
          "Manter os dois cálculos, melhorar o job de reconciliação. Rejeitada: reconciliar dois cálculos independentes é trabalho ilimitado, porque todo novo caso extremo reaparece duas vezes.",
          "Extrair o cálculo para uma biblioteca compartilhada. Rejeitada: código idêntico sobre projeções não idênticas ainda diverge. O bug estava nos dados, não na fórmula.",
          "Computar na leitura, no API gateway. Rejeitada: empurrava latência para todo carregamento de dashboard e ainda exigia uma projeção de fonte consistente.",
          "Serviço único dono; todos os outros emitem sinais de desatualização. Escolhida."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Exatamente um serviço é dono da métrica. É o único caminho de código na empresa autorizado a computá-la.",
          "Todo outro serviço que toca dados subjacentes para de computar qualquer coisa. Em vez disso, emite um sinal leve de 'desatualizado': 'a rota X pode ter mudado'. O dono recomputa a métrica a partir da fonte da verdade, de forma idempotente, sempre que um sinal chega.",
          "Foi aqui que um princípio pessoal se cristalizou: dados derivados eventualmente consistentes deveriam ter exatamente um caminho de computação. E seu corolário: se um valor sempre pode ser recomputado a partir da fonte, prefira recomputação a sincronização."
        ],
        "diagram": {
          "width": 800,
          "height": 400,
          "nodes": [
            {
              "id": "kafka",
              "lines": [
                "Kafka: eventos de inspeção · edição · exclusão"
              ],
              "x": 200,
              "y": 16,
              "w": 400,
              "h": 40
            },
            {
              "id": "svcA",
              "lines": [
                "Serviço A",
                "(projeção própria)"
              ],
              "x": 60,
              "y": 110,
              "w": 220,
              "h": 54
            },
            {
              "id": "svcB",
              "lines": [
                "Serviço B",
                "(projeção própria)"
              ],
              "x": 520,
              "y": 110,
              "w": 220,
              "h": 54
            },
            {
              "id": "owner",
              "lines": [
                "Serviço Dono da Métrica"
              ],
              "sub": "recompute idempotente · caminho único de computação",
              "x": 205,
              "y": 220,
              "w": 390,
              "h": 64,
              "variant": "accent"
            },
            {
              "id": "dashboards",
              "lines": [
                "Dashboards"
              ],
              "sub": "voltado ao cliente",
              "x": 290,
              "y": 330,
              "w": 220,
              "h": 44
            },
            {
              "id": "removed",
              "lines": [
                "✕ removido:",
                "2º cálculo em B",
                "+ job de reconciliação"
              ],
              "x": 615,
              "y": 220,
              "w": 175,
              "h": 64,
              "variant": "removed"
            }
          ],
          "edges": [
            {
              "from": "kafka",
              "to": "svcA"
            },
            {
              "from": "kafka",
              "to": "svcB"
            },
            {
              "from": "svcA",
              "to": "owner",
              "label": "sinal de desatualização"
            },
            {
              "from": "svcB",
              "to": "owner",
              "label": "sinal de desatualização"
            },
            {
              "from": "owner",
              "to": "dashboards",
              "label": "valor recomputado"
            }
          ]
        }
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Recomputação custa mais do que atualizações incrementais. Aceito: o cálculo é barato em relação ao custo da divergência, e os sinais têm debounce.",
          "Existe uma janela de desatualização entre o sinal e a recomputação. Aceito: segundos de desatualização com convergência garantida vence valores instantâneos que podem estar permanentemente errados.",
          "O serviço dono se torna um caminho crítico. Mitigado: consumers idempotentes, dead-letter queue, e alertas sobre atraso de sinal."
        ]
      },
      {
        "id": "implementation",
        "title": "Implementação",
        "paras": [
          "Sinais de desatualização viajam por um tópico Kafka dedicado, com chave por rota, então recomputações para a mesma rota serializam naturalmente. O dono consome com handlers idempotentes, então recomputar duas vezes é seguro por construção e retries não precisam de tratamento especial.",
          "Um script de backfill recomputou cada métrica histórica a partir da fonte, migrando o sistema para uma baseline consistente antes do novo caminho ir ao ar. O cálculo antigo no segundo serviço foi deletado em vez de desativado, porque deixá-lo dormente convidava a uma ressurreição."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Tickets de inconsistência da métrica caíram a zero após o rollout.",
          "O job de reconciliação foi deletado, removendo uma classe inteira de manutenção.",
          "Race conditions se tornaram estruturalmente impossíveis em vez de meramente improváveis.",
          "O padrão foi reutilizado para outros dados derivados; tornei-me a referência do time em sincronização entre serviços."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Debates de consistência terminam quando o ownership é explícito. A maior parte do trabalho de design foi conseguir concordância sobre a frase 'só este serviço computa este valor', não escrever código.",
          "Deletar código é parte da arquitetura. A migração não estava concluída até que o segundo caminho de computação deixasse de existir fisicamente."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "paras": [
          "Este documento é a evidência primária das capacidades que reivindica: Sistemas Distribuídos (design de consistência orientado a eventos), Arquitetura (fronteiras de ownership), Senso de Dono (proposta até backfill até exclusão), Comunicação (a decisão sobreviveu porque foi escrita e acordada entre dois donos de serviço)."
        ]
      }
    ]
  },
  {
    "id": "ai-orchestrated-feature-flag-removal",
    "featured": false,
    "title": "Desenhando as garantias de segurança para uma limpeza orquestrada por IA, não só automatizando o trabalho braçal",
    "company": "Dynamox",
    "category": "Arquitetura",
    "summary": "Desenhei e construí uma skill de Claude Code que orquestra com segurança agentes paralelos para remover feature flags expiradas em um frontend compartilhado e dois serviços de backend, fechando um épico de limpeza de 36 subtarefas (24 feature flags mais 3 tours de produto expirados e uma página legada, ~3.100 linhas removidas em um único commit), com batching por conjuntos de arquivos disjuntos para que agentes não possam colidir, validação por diff contra baseline em vez de aprovação/reprovação absoluta, e uma ordem de deploy entre dois repositórios reforçada para que mudanças de infraestrutura nunca possam preceder o código do qual dependem.",
    "capabilities": [
      "Design de Sistemas",
      "Tomada de Decisão Técnica",
      "Senso de Dono",
      "Liderança Técnica"
    ],
    "technologies": [
      "Claude Code",
      "TypeScript",
      "React"
    ],
    "impact": [
      "Fechei um épico de limpeza de 35 tarefas abrangendo um frontend compartilhado e dois serviços de backend, removendo mais de 25 feature flags expiradas e infraestrutura obsoleta de tours de produto. Um único commit removeu sozinho cerca de 3.100 linhas de código morto.",
      "Produzi uma ferramenta reutilizável, não um script pontual: a mesma skill se aplica ao próximo épico de limpeza de flags em qualquer um dos três repositórios, codificando convenções que antes só existiam na memória.",
      "Removi os modos de falha que tornam esse tipo de limpeza perigoso à mão, ou seja, classificar mal uma flag, agentes colidindo em um arquivo compartilhado, ou inverter a ordem de deploy entre dois repositórios, desenhando-os para fora da ferramenta em vez de depender de quem a executa lembrar dos três sob pressão de tempo.",
      "Qualitativo: uma base de código mais simples e legível como resultado direto da remoção de código morto; nenhuma métrica isolada de antes/depois de tempo de build foi capturada só para esta mudança."
    ],
    "difficulty": "Alta",
    "ownership": "Ponta a ponta",
    "customerFacing": "Não",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais clara de tratar agentes de IA como uma força de trabalho que precisa de pensamento real de design de sistemas, não só uma forma mais rápida de digitar código. A engenharia interessante aqui não é \"usei IA para remover algumas flags\". É reconhecer que rodar vários agentes simultaneamente em uma base de código compartilhada é um problema de concorrência (agentes podem colidir no mesmo arquivo), que a saída de ferramentas genéricas é ruidosa em uma base de código grande e imperfeita (um typecheck bruto ou relatório de código morto afoga o sinal real), e que uma decisão específica nesse fluxo pode silenciosamente mudar o que vai para produção e portanto precisa continuar sendo uma decisão humana. Codificar as três coisas em uma ferramenta reutilizável, em vez de fazer a tarefa uma vez à mão e seguir em frente, é o tipo de alavancagem que escala além de qualquer limpeza única."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Feature flags e tours de produto antigos tinham se acumulado em um frontend compartilhado e dois serviços de backend, rastreados como 35 tarefas individuais de remoção em um épico. Os três serviços não compartilhavam uma convenção para onde o valor de uma flag realmente vive ou como o código a lê: o frontend mantém valores em arquivos de ambiente com vários padrões de código para lê-los (acesso direto, um helper tipado, e indireções de re-exportação local que tinham que ser rastreadas); um backend lê um serviço de ambiente tipado protegido por um decorator; o outro mantém seus valores de flag em um repositório de infraestrutura totalmente separado, implantado de forma independente do código de serviço que os lê.",
          "Esse último ponto é a aresta mais afiada: remover o valor de uma flag do repositório de infraestrutura antes que a mudança de código correspondente tenha sido implantada pode silenciosamente desativar uma funcionalidade que ainda está ao vivo em produção, sem nenhum erro para pegar isso."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "Nenhuma regra mecânica única cobria os três repositórios. Cada um tinha uma convenção de armazenamento diferente e padrões de código diferentes para ler uma flag, então uma ferramenta que funcionasse para o formato de um repositório silenciosamente perderia casos em outro.",
          "O valor real de produção da flag decide o que é seguro automatizar. Uma flag que é `true` em produção significa que o caminho de código antigo está genuinamente morto e é seguro deletar automaticamente. Uma flag que é `false` pode significar uma funcionalidade que o time ainda pretende lançar, e colapsar essa distinção automaticamente arrisca deletar código que ninguém tinha abandonado.",
          "Paralelizar a remoção introduz um novo modo de falha. Vários agentes editando uma base de código grande e compartilhada ao mesmo tempo podem colidir no mesmo arquivo e corromper o trabalho um do outro se nada coordenar quem toca em quê.",
          "As checagens de segurança padrão são ruidosas nessa escala. Um monorepo com erros de typecheck pré-existentes e falsos positivos de código morto torna uma leitura absoluta de aprovação/reprovação inútil: ou esconde uma regressão real no ruído ou sinaliza fantasmas.",
          "O caso de dois repositórios tem um invariante de ordenação fácil de inverter sob pressão de tempo, e inverter isso tem uma consequência de produção, não só um build falho."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Tratei os agentes paralelos como uma força de trabalho que precisava do mesmo design de segurança que qualquer sistema concorrente, e tratei a única decisão que afeta produção como algo que a ferramenta deveria expor, não resolver sozinha."
        ],
        "bullets": [
          "Codifiquei explicitamente as convenções reais de armazenamento e leitura de cada repositório, para que a classificação fosse determinística por repositório em vez de re-derivada à mão a cada vez.",
          "Fiz o valor real de produção da flag conduzir a decisão. `true` em produção embute como `true` e deleta o caminho morto automaticamente; `false` em produção para e pergunta, recomendando o padrão seguro (manter o comportamento de produção) em vez de adivinhar silenciosamente, porque esse ramo específico pode mudar o que vai para produção.",
          "Agrupei agentes por conjuntos de arquivos disjuntos, computados a partir da sobreposição entre os arquivos que cada flag toca, para que agentes designados ao mesmo lote nunca escrevam no mesmo arquivo; flags que compartilhavam um arquivo foram serializadas em vez de paralelizadas.",
          "Validei fazendo diff contra uma baseline pré-mudança, ou seja, contagens de erro de typecheck e um relatório de código morto rodados uma vez no código não modificado e uma vez depois, em vez de ler a saída bruta de qualquer ferramenta, então só regressões que a remoção de fato introduziu aparecem.",
          "Tornei a ordem de deploy entre os dois repositórios uma etapa explícita e reforçada, não uma nota em uma página de wiki: a própria mudança do serviço vai para produção e é implantada primeiro; a mudança de infraestrutura que remove a variável agora não utilizada é marcada como dependente desse deploy e nunca autorizada a precedê-lo.",
          "Exigi um gate de confirmação explícito antes de fazer commit ou abrir um PR, com um checklist de telas ou endpoints afetados derivado dos arquivos de fato tocados, para uma pessoa verificar manualmente antes do merge."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Batching por conjuntos de arquivos disjuntos em vez de paralelizar por padrão. Computar sobreposição de arquivos antes de designar trabalho custa uma etapa de planejamento, mas deixar agentes compartilharem um arquivo sem isso arrisca um merge silenciosamente quebrado, o que vale a etapa extra quando dezenas de tarefas rodam simultaneamente.",
          "Diff contra uma baseline em vez de confiar na saída bruta de uma ferramenta. Rodar cada checagem de segurança duas vezes custa tempo, mas uma leitura absoluta em uma base de código grande e imperfeita ou esconde uma regressão real no ruído pré-existente ou reporta fantasmas, e nenhuma das duas é utilizável.",
          "Perguntar antes de embutir uma flag que é `false` em produção, em vez de sempre deletar o caminho que nunca foi lançado. Uma etapa mais lenta e confirmada por humano aqui é o custo certo, porque automatizar isso errado significa matar silenciosamente uma funcionalidade que o time não tinha abandonado.",
          "Reforçar a ordem de deploy na ferramenta em vez de documentá-la e confiar nos revisores. Uma regra que só vive na memória de uma pessoa não sobrevive a turnover ou a um release apressado; codificá-la significa que não pode ser pulada por acidente."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Fechei um épico de limpeza de 35 tarefas abrangendo um frontend compartilhado e dois serviços de backend, removendo mais de 25 feature flags expiradas e infraestrutura obsoleta de tours de produto. Um único commit removeu sozinho cerca de 3.100 linhas de código morto.",
          "Produzi uma ferramenta reutilizável, não um script pontual: a mesma skill se aplica ao próximo épico de limpeza de flags em qualquer um dos três repositórios, codificando convenções que antes só existiam na memória.",
          "Removi os modos de falha que tornam esse tipo de limpeza perigoso à mão, ou seja, classificar mal uma flag, agentes colidindo em um arquivo compartilhado, ou inverter a ordem de deploy entre dois repositórios, desenhando-os para fora da ferramenta em vez de depender de quem a executa lembrar dos três sob pressão de tempo.",
          "Qualitativo: uma base de código mais simples e legível como resultado direto da remoção de código morto; nenhuma métrica isolada de antes/depois de tempo de build foi capturada só para esta mudança."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Agentes de IA paralelos precisam do mesmo design de segurança que qualquer outro worker concorrente. Isole o trabalho deles por ownership de arquivos disjuntos, ou eles vão corromper as mudanças uns dos outros exatamente como qualquer outra race condition.",
          "Valide contra uma baseline, não uma leitura absoluta, em qualquer base de código velha o suficiente para ter ruído pré-existente. Do contrário, o sinal que realmente importa fica enterrado ou afogado por falsos positivos.",
          "Codifique um invariante na ferramenta; não só o documente. Uma regra que depende de uma pessoa se lembrar dela sob pressão eventualmente será pulada; uma ferramenta que a reforça não pode ser.",
          "Automatize tudo exceto a única decisão que pode mudar silenciosamente o comportamento de produção. Esse único ramo merece uma pessoa, mesmo dentro de um pipeline por outro lado totalmente automatizado."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Verificado contra o tracker: uma story carregando 36 subtarefas (27 delas atribuídas a mim) sob um épico de sanitização, abrangendo um frontend compartilhado e dois serviços de backend. Composição: 24 feature flags, 3 tours de produto expirados, e a remoção de uma página de dashboard legada, todas fechadas 2026-07-17 a 2026-07-23, incluindo um commit que removeu cerca de 3.100 linhas de código morto.",
          "Construí uma skill reutilizável de Claude Code codificando as regras de classificação, segurança paralela e validação para as convenções dos três repositórios.",
          "Parte de uma prática mais ampla e sustentada de construir ferramentas confiáveis sobre agentes de codificação com IA: um servidor MCP construído do zero expondo a API do SonarCloud para revisão de quality-gate dentro do mesmo fluxo, e outras ferramentas automatizando investigação de bug até correção entregue (com arqueologia de git/Jira e criação de PR), triagem de erros de produção escopada por time, e análise de latência pós-incidente.",
          "Fonte (privada): tracker de engenharia da Dynamox (épico e subtarefas do Jira) e repositório pessoal de ferramentas."
        ]
      }
    ]
  },
  {
    "id": "flaky-e2e",
    "featured": false,
    "title": "Tornando uma suite end-to-end instável determinística sem esconder falhas",
    "company": "Dynamox",
    "category": "Debugging",
    "summary": "Transformei uma suite end-to-end não determinística (25 a 37 falhas variando por execução) em 302 passando com zero falhas (8 skips pré-existentes deixados intocados, e o consumer rodando), sem adicionar um skip ou enfraquecer uma asserção, e, em review, provei empiricamente que três das quatro mudanças de produção propostas eram desnecessárias.",
    "capabilities": [
      "Debugging",
      "Liderança Técnica",
      "Senso de Dono",
      "Comunicação",
      "Testes"
    ],
    "technologies": [
      "NestJS",
      "Vitest",
      "PostgreSQL"
    ],
    "impact": [
      "302 testes passando, zero falhas, comportamento determinístico com o consumer rodando, a partir de uma suite que produzia de 25 a 37 falhas variáveis por execução. Os 8 skips na contagem final já existiam e foram deixados como estavam; não adicionei nenhum.",
      "O CI de backend voltou a ser confiável, então uma execução vermelha volta a significar um problema real.",
      "Protegi o código e as regras de negócio de produção de serem alterados para agradar um teste instável, refutando três das quatro mudanças propostas em review.",
      "Qualitativo: regressões voltam a ser capturadas pela suite em vez de escondidas por ela."
    ],
    "difficulty": "Alta",
    "ownership": "Ponta a ponta",
    "customerFacing": "Não",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência mais forte de rigor metodológico e de liderança técnica em code review. Qualquer um pode deixar uma suite instável verde afrouxando-a; a engenharia está em se recusar a fazer isso. As restrições que impus (nenhum skip novo, nenhuma asserção mais fraca, nenhum timeout maior) são o que forçou cada correção a ser uma causa raiz de verdade.",
          "Isso também captura um momento do qual me orgulho: em vez de aceitar mudanças de produção que tinham sido feitas para acalmar os testes, provei empiricamente que a maioria delas não era necessária e protegi o código de produção de ser alterado para satisfazer um artefato de teste. Esse é o tipo de julgamento que quero que recrutadores vejam."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "A suite end-to-end do serviço era não determinística: uma dada execução podia produzir de 25 a 37 falhas, e um conjunto diferente a cada vez. Como o resultado não era confiável, o CI não podia ser confiado. Uma execução vermelha podia significar uma regressão real ou nada, então regressões reais podiam se esconder no ruído. A suite exercitava dependências reais (um provedor de auth real, um banco de dados, um message broker local, e uma API sandbox externa), qualquer uma das quais podia contribuir para a instabilidade."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "A falha era estatística, não reproduzível sob demanda. Você não pode corrigir o que não consegue observar de forma confiável; o primeiro trabalho foi tornar a instabilidade mensurável.",
          "Uma suite instável é um instrumento de medição quebrado. Toda \"correção\" é medida pela mesma suite não confiável, então tive que validar mudanças ao longo de muitas execuções, não uma.",
          "As correções fáceis eram todas as erradas. Pular os testes ofensores, relaxar asserções, ou aumentar timeouts teria deixado a suite verde enquanto destruía seu valor. Eliminei essas opções de saída.",
          "Parte do ruído vinha de dependências reais, então as causas raiz variavam de setup de teste a código de produção a configuração de ambiente."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Tratei isso como um problema de diagnóstico com um protocolo rigoroso."
        ],
        "bullets": [
          "Reproduzir e caracterizar estatisticamente. Rodar a suite muitas vezes para medir quais testes falhavam e com que frequência, transformando \"é instável\" em uma lista ranqueada de ofensores concretos.",
          "Categorizar por causa raiz, não por sintoma. As causas acabaram sendo variadas: um schema de banco de dados divergente, um bypass de auth retornando sucesso onde deveria retornar proibido, credenciais de teste inválidas, dados de seed ausentes, IDs hardcoded, e um spread acidental de campo em um handler de patch.",
          "Corrigir cada causa na fonte, incrementalmente, rodando de novo para confirmar que cada correção reduzia falhas sem introduzir novas.",
          "Validar ao longo de várias execuções em vez de uma execução verde, já que determinismo é uma propriedade que se demonstra estatisticamente.",
          "Documentei as variáveis de ambiente de runtime das quais a suite dependia, para que seu comportamento parasse de ser folclore."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Correções de causa raiz em vez de mascaramento (pular / enfraquecer / inflar). Mascarar é minutos de trabalho e destrói a razão de existir da suite; corrigir a causa raiz é mais lento mas deixa uma suite em que você pode confiar. Escolhi me restringir a evitar todo atalho.",
          "Validar empiricamente as mudanças de produção propostas por um colega em vez de aceitá-las. Testar cada mudança custou tempo e uma conversa de review potencialmente desconfortável, mas mudar código de produção para satisfazer um teste instável teria sido o rabo abanando o cachorro. Preferi reverter mudanças que eu conseguia provar serem desnecessárias.",
          "Corrigir o ambiente/setup em vez de confiar nas suposições da suite. Documentar variáveis de ambiente e corrigir desvios de seed/schema não é glamouroso mas remove classes inteiras de falha intermitente."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "302 testes passando, zero falhas, comportamento determinístico com o consumer rodando, a partir de uma suite que produzia de 25 a 37 falhas variáveis por execução. Os 8 skips na contagem final já existiam e foram deixados como estavam; não adicionei nenhum.",
          "O CI de backend voltou a ser confiável, então uma execução vermelha volta a significar um problema real.",
          "Protegi o código e as regras de negócio de produção de serem alterados para agradar um teste instável, refutando três das quatro mudanças propostas em review.",
          "Qualitativo: regressões voltam a ser capturadas pela suite em vez de escondidas por ela."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Uma suite instável é um instrumento de medição que você precisa primeiro tornar confiável. Até que esteja, todo resultado, incluindo suas próprias correções, é não confiável. Caracterize antes de mudar.",
          "Corrija a causa raiz; nunca enfraqueça o teste. Skips, asserções relaxadas e timeouts inflados convertem um sinal em silêncio.",
          "Nunca mude código de produção para fazer um teste passar até ter provado que o código, não o teste, está errado, e conseguir provar isso empiricamente.",
          "Determinismo se demonstra estatisticamente. Uma execução verde não prova nada sobre uma suite que era instável; muitas provam."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "De 25 a 37 falhas variáveis por execução para 302 aprovados, 8 pulados, 0 falhos com o consumer ativo, que foi o critério de aceite escrito no ticket antes do trabalho e o número em que fechou.",
          "Restrições autoimpostas: nenhum skip *novo*, nenhuma asserção enfraquecida, nenhum timeout inflado. Os 8 skips já existiam; não adicionei a eles nem os reivindiquei como meus.",
          "Verificado contra o tracker (2026-06-02 a 2026-06-23): as causas raiz registradas são setup/dados de teste mais uma race condition genuína em um teste de cancelamento (uma instabilidade 404-vs-202 onde a operação deixava seu estado pendente antes do cancelamento rodar). De-instabilizado semeando a operação diretamente em seu estado pendente através do repositório, contornando o message broker, o que tornou o teste determinístico em vez de meramente re-tentado.",
          "Verificado: três das quatro mudanças de produção propostas revertidas como desnecessárias: um remapeamento de status de auth-guard, uma cláusula de ordenação dentro de uma subquery para o ciclo ativo, e um filtro no caminho de opções de localização, com os testes de opções de localização reescritos para verificar o comportamento que já existia. A única mudança mantida foi um lateral join resolvendo um identificador de versão na listagem de ciclos: revertê-la teria reintroduzido um bug conhecido reportado por clientes, então foi mantida, documentada e rastreada em seu próprio ticket em vez de contrabandeada junto com correções de teste.",
          "Entregue como um único pull request no serviço de backend, o mais discutido do épico (25 comentários de review).",
          "Fonte (privada): ticket do Jira no domínio de inspeção, 2026-06; base de conhecimento de carreira consolidada."
        ]
      }
    ]
  },
  {
    "id": "container-hardening",
    "featured": false,
    "title": "Tornando o hardening de containers e dependências uma prática permanente, não uma resposta a auditoria",
    "company": "Dynamox",
    "category": "Segurança",
    "summary": "Transformei o hardening de containers e dependências em uma prática trimestral permanente em dois serviços de backend ao longo de quatro trimestres, cobrindo runtimes non-root, 135 CVEs sinalizados e todos os 7 classificados como críticos remediados na primeira passagem, depois uma revisão de imagem base e dependências que levou a auditoria de 69 achados para 16, CVEs de SO sem correção de 160 para 0, e a imagem final de 1,64 GB para 463 MB, com risco aceito baseado em explorabilidade documentado em vez de números de versão perseguidos, e uma regressão de rollout autoinfligida com causa raiz identificada e corrigida no mesmo dia.",
    "capabilities": [
      "Segurança",
      "Confiabilidade",
      "Engenharia Backend",
      "Tomada de Decisão Técnica"
    ],
    "technologies": [
      "Docker",
      "Kubernetes",
      "NestJS"
    ],
    "impact": [
      "Primeira passagem (2025): 135 CVEs sinalizados em dois serviços, todos os 7 classificados como críticos remediados; runtimes trocados para um usuário non-root; imagem base modernizada.",
      "Última passagem (2026-08): auditoria de dependências 69 → 16 achados; CVEs de nível de SO sem correção upstream 160 → 0; imagem final 1,64 GB → 463 MB (−72%); quatro críticos removidos diretamente ao expurgar um pacote base não utilizado.",
      "Seis advisories conscientemente deixados abertos com justificativa escrita, baseada em explorabilidade, que é a parte do trabalho que mantém o relatório confiável.",
      "O hardening de segurança se tornou parte permanente de como serviços de backend são lançados, ao longo de quatro épicos trimestrais consecutivos de \"redução de vulnerabilidade\" a partir de 2025Q3, uma das seis áreas citadas na minha promoção a pleno, e, na última passagem, automatizado com uma skill de IA feita sob medida.",
      "Uma indisponibilidade autoinfligida em staging, com causa raiz identificada e corrigida no mesmo dia; nada chegou a produção."
    ],
    "difficulty": "Média",
    "ownership": "Ponta a ponta",
    "customerFacing": "Não",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é minha evidência de segurança como prática de engenharia em vez de simulação de incêndio. Segurança foi uma das seis áreas de competência no meu dossiê de promoção, e este é o trabalho concreto por trás dela, mas a parte que eu de fato defenderia em uma entrevista é o que aconteceu *depois* da promoção: a mesma prática rodou por mais quatro trimestres, e a última passagem é onde o julgamento aparece. Nem todo advisory merece um upgrade, nem todo CVE é alcançável no seu código, e uma imagem base que elimina 160 vulnerabilidades sem correção ainda pode derrubar seu serviço se você não checar do que seu entrypoint depende."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Serviços de backend rodavam em containers no Kubernetes sem uma prática formal de hardening ou remediação de CVEs. Exposição a vulnerabilidades em imagens base e dependências é o tipo de dívida mais fácil de adiar: não quebra um build, um teste, ou um deploy, só se acumula até que uma auditoria ou um incidente force atenção.",
          "Concretamente, no início: as imagens rodavam como root por padrão, a saída do scan de containers nunca tinha sido triada, e ninguém era dono do trabalho recorrente."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "A exposição estava espalhada por dois serviços e suas árvores completas de dependências, não uma única linha corrigível: 135 CVEs sinalizados no primeiro scan, de severidade variada, e 69 achados de auditoria ainda abertos um ano depois, quando o toolchain já tinha avançado.",
          "Containerização non-root toca todo o runtime, não só o Dockerfile: permissões de arquivo, ownership de processo, e tudo que assumia root precisava ser reverificado.",
          "Remediar um CVE muitas vezes não é um bump de versão. Alguns advisories não têm correção na major em que você está fixado; alguns são corrigidos só em uma linha de framework para a qual você não pode migrar; alguns residem em pacotes de sistema operacional que a distribuição nunca corrigiu. Perseguir o número não é o mesmo que reduzir risco.",
          "Priorização importava. Com 135 sinalizados, tratar todos como igualmente urgentes teria significado tratar nenhum como urgente.",
          "Uma imagem base é um contrato de runtime. Trocar a distribuição muda quais binários existem, e as coisas que quebram não estão no seu código, estão no manifesto de deploy."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "2025, estabelecer o piso. Mapeei a saída do scanner de containers para os dois serviços em trabalho rastreado em vez de deixá-la como um relatório, troquei o runtime para um usuário non-root, migrei para uma base mais enxuta, e trabalhei os achados críticos primeiro: um cluster de CVEs da biblioteca Kerberos, um CVE do Berkeley DB, um advisory de form-data em ambos os serviços, um advisory do test runner. Sete críticos, todos fechados. Depois transformei isso em um épico trimestral recorrente (\"redução de vulnerabilidade\") em vez de uma tarefa concluída, que é o único motivo pelo qual a prática sobreviveu além da auditoria que a motivou.",
          "2026, atacar as causas, não a contagem. Na última passagem, os achados interessantes não eram dependências de aplicação de jeito nenhum:"
        ],
        "bullets": [
          "Dependências transitivas foram fixadas, não atualizadas. Overrides do gerenciador de pacotes corrigiram as dependências de produção alcançáveis sem uma mudança que quebrasse compatibilidade, e separadamente fixaram um lote de pacotes de toolchain que nunca chegam ao runtime.",
          "O sistema operacional era o problema real. A base Debian-slim carregava 160 CVEs de nível de SO sem correção upstream disponível, inacionáveis por definição. Migrar para uma base Alpine levou isso a zero, porque todo advisory restante tinha uma correção. Também expurguei um pacote base que carregava quatro críticos que a Debian nunca tinha corrigido.",
          "A imagem estava carregando sua própria build. Camadas do Docker são cumulativas, então devDependencies e uma mudança recursiva de ownership permaneciam na imagem mesmo depois de removidas. Dividir o Dockerfile em estágios de build e runtime levou a imagem final de 1,64 GB para 463 MB.",
          "Escrevi o que não estava corrigindo, e por quê. Quatro pacotes de toolchain não tinham correção na major fixada e um upgrade seria desproporcional. Dois pacotes de framework tinham correções só em uma linha major para a qual o serviço não pode migrar, e o caminho de código vulnerável é o transporte SSE/TCP, enquanto este serviço só usa o transporte Kafka, então o caminho nunca é exercitado. Esse raciocínio está no pull request, como risco aceito com uma justificativa declarada, não omitido para fazer um número parecer melhor."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Alpine sobre Debian-slim, escolhido porque moveu 160 CVEs de SO *sem correção* para zero, que é uma redução de risco real em vez de um número menor. Custo aceito: uma libc diferente, o que significou verificar o motor nativo do cliente de banco de dados e, como se viu, um shell ausente no caminho de deploy.",
          "Fixar dependências transitivas via overrides em vez de atualizar os dependentes diretos, sem mudanças que quebrem compatibilidade e com cobertura imediata, ao custo de um lockfile que agora codifica decisões que alguém precisa revisitar.",
          "Risco aceito documentado em vez de perseguir um relatório limpo. Deixar seis advisories abertos com justificativa escrita (sem correção na major fixada; transporte vulnerável nunca usado) é mais honesto e mais útil do que um upgrade que desestabiliza o serviço para deixar um dashboard verde.",
          "Imagens non-root em vez de root (o padrão), para um raio de impacto menor se um container for comprometido, ao custo de reverificar tudo que assumia root.",
          "Remediar por severidade em vez de por volume, atacando os 7 críticos primeiro mesmo que isso deixasse itens de menor severidade abertos por mais tempo.",
          "Um épico trimestral recorrente em vez de uma limpeza única. Mais overhead de processo, mas é a diferença entre uma prática e uma anedota. Quatro trimestres depois ainda está rodando, mais recentemente executado com uma skill de IA construída para esse fim."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Primeira passagem (2025): 135 CVEs sinalizados em dois serviços, todos os 7 classificados como críticos remediados; runtimes trocados para um usuário non-root; imagem base modernizada.",
          "Última passagem (2026-08): auditoria de dependências 69 → 16 achados; CVEs de nível de SO sem correção upstream 160 → 0; imagem final 1,64 GB → 463 MB (−72%); quatro críticos removidos diretamente ao expurgar um pacote base não utilizado.",
          "Seis advisories conscientemente deixados abertos com justificativa escrita, baseada em explorabilidade, que é a parte do trabalho que mantém o relatório confiável.",
          "O hardening de segurança se tornou parte permanente de como serviços de backend são lançados, ao longo de quatro épicos trimestrais consecutivos de \"redução de vulnerabilidade\" a partir de 2025Q3, uma das seis áreas citadas na minha promoção a pleno, e, na última passagem, automatizado com uma skill de IA feita sob medida.",
          "Uma indisponibilidade autoinfligida em staging, com causa raiz identificada e corrigida no mesmo dia; nada chegou a produção."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Exposição a vulnerabilidades se acumula silenciosamente. Nada em um ciclo normal de build/teste/deploy força atenção a isso, então precisa da sua própria prática permanente com um horário recorrente em vez de uma resposta a uma auditoria.",
          "Um CVE sem correção upstream não é uma tarefa, é uma decisão de imagem base. 160 advisories inacionáveis não são um backlog a trabalhar; são um sinal de que a distribuição é o problema.",
          "Argumente explorabilidade, não números de versão. \"Corrigido só na próxima major, e o transporte vulnerável nunca é usado neste serviço\" é uma posição mais forte do que um upgrade disruptivo, mas só se você escrever isso onde um revisor possa contestar.",
          "Camadas do Docker são cumulativas, então limpar dentro de uma camada não limpa nada. Multi-stage é como você de fato remove peso de build-time do que você entrega.",
          "Uma imagem base é um contrato de runtime. O que quebra quando você a troca vive no manifesto de deploy, não no seu código, e só quebra quando um rollout substitui os pods, que é o pior momento possível para descobrir.",
          "Non-root por padrão é uma decisão de runtime, não uma linha de Dockerfile. Precisa ser verificada em todo o serviço, não só declarada."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Passagem de 2025: achados do scanner de containers mapeados para trabalho rastreado nos dois serviços; runtime non-root; os 7 CVEs críticos fechados como itens rastreados individualmente (cluster da biblioteca Kerberos, Berkeley DB, form-data em ambos os serviços, test runner), todos com pull requests mesclados.",
          "Passagem de 2026-08, verificada a partir do próprio pull request: auditoria 69 → 16; CVEs de SO sem correção 160 → 0; imagem 1,64 GB → 463 MB; saída de scanner antes/depois anexada; validada com um build e lint completos, 1.870 testes unitários com zero falhas, a suite e2e em 328/330, um build de container real, e um boot de API ao vivo dentro da nova imagem.",
          "Risco aceito documentado no pull request, não omitido: seis advisories com justificativa escrita, incluindo o argumento de alcançabilidade para os dois pacotes de framework.",
          "Regressão assumida: a troca para Alpine causou crash-loop em três deploys de staging porque os entrypoints do Kubernetes invocam `bash`; causa raiz identificada a partir dos eventos do pod e corrigida em um follow-up no mesmo dia, com a mudança lançada concorrentemente explicitamente descartada como causa.",
          "Prática, não projeto: quatro épicos trimestrais consecutivos de \"redução de vulnerabilidade\" a partir de 2025Q3, o mais recente (2026-08) executado rodando uma skill de IA feita sob medida contra o serviço.",
          "Citada como uma das seis áreas de competência (segurança) no meu dossiê de promoção (ver companies/dynamox.md).",
          "Fonte (privada): épicos e tarefas do Jira no domínio de inspeção, 2025-07 a 2026-08; os pull requests correspondentes em ambos os repositórios de serviço de backend; base de conhecimento de carreira consolidada."
        ]
      }
    ]
  },
  {
    "id": "workspace-sync",
    "featured": false,
    "title": "Sincronizando uma Edição de Dados Entre Serviços de Forma Atômica",
    "company": "Dynamox",
    "category": "Sistemas Distribuídos",
    "summary": "Fiz uma edição em um nó organizacional na hierarquia de ativos se propagar de forma consistente entre cópias desnormalizadas em sete tabelas e dois serviços, via uma única transação atômica com eventos pós-commit, o trabalho que me tornou a referência do time em sincronização entre serviços.",
    "capabilities": [
      "Sistemas Distribuídos",
      "Design de Sistemas",
      "Engenharia Backend",
      "Senso de Dono",
      "Comunicação",
      "Confiabilidade"
    ],
    "technologies": [
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Prisma"
    ],
    "impact": [
      "Fiz edições de nós organizacionais se propagarem de forma consistente pela superfície de sete tabelas e dois serviços, sem mais dados contraditórios de uma atualização parcial.",
      "Tornei-me a referência do time em sincronização de dados entre serviços (reconhecido em uma avaliação de performance), e esse trabalho ancorou uma série de épicos de sincronização relacionados.",
      "Removi um vazamento de domínio e um bug latente de DI no refactor de acompanhamento, deixando o código mais sustentável do que a funcionalidade sozinha exigia.",
      "Qualitativo: maior confiança em dados de hierarquia voltados ao cliente; nenhum número rígido de antes/depois foi capturado."
    ],
    "difficulty": "Alta",
    "ownership": "Liderei",
    "customerFacing": "Sim",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é a experiência que me estabeleceu como a pessoa de referência para consistência de dados entre serviços no meu time, uma reputação que depois carreguei por várias peças relacionadas de trabalho. É evidência forte de que consigo manter uma fronteira de consistência na cabeça entre serviços que não compartilham uma transação, decompor um épico grande em trabalho rastreado e revisável, e raciocinar sobre ordenação de eventos em vez de só \"fazer a escrita acontecer\".",
          "Isso também me ensinou a enxergar um caso de uso inchado como um cheiro de design: o refactor de acompanhamento, onde desmontei um caso de uso superdimensionado e descobri um bug real de injeção de dependência, é parte do motivo pelo qual isso mudou como penso sobre fronteiras de domínio."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "O produto permite que usuários reorganizem sua hierarquia de ativos: renomear um nó organizacional, editar sua descrição, ou movê-lo para uma posição diferente na árvore. Por performance, dados sobre aquele nó eram desnormalizados, com cópias e referências derivadas vivendo em cerca de sete tabelas, divididas entre dois serviços de backend implantados de forma independente.",
          "Uma única edição de usuário, portanto, tinha que se propagar em muitas escritas coordenadas através de uma fronteira de serviço. Se só algumas dessas escritas chegassem, o produto exibiria dados inconsistentes: um nó com um nome aqui e outro ali, ou preso ao ramo errado da árvore. Não havia uma transação compartilhada abrangendo os dois serviços em que se apoiar."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "A fronteira de consistência cruzava uma fronteira de serviço. Dois serviços, implantados e escalados de forma independente, precisavam concordar sobre o resultado de uma edição, sem nenhuma transação distribuída disponível.",
          "Dois fluxos distintos, raios de impacto diferentes. Uma edição simples de campo (nome/descrição) é contida; mover um nó para um novo caminho na árvore cascateia para contexto de rota, times, checklists e categorias que o referenciam. O caso de movimento é onde a falha parcial dói mais.",
          "Eventos podiam chegar desatualizados ou fora de ordem. Como a propagação era orientada a eventos, o evento de uma edição posterior podia ser ultrapassado por um anterior, revertendo silenciosamente os dados.",
          "Era um épico grande, não uma única mudança. O trabalho tinha que ser decomposto em peças revisáveis de forma independente sem perder a garantia de consistência de ponta a ponta."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Decompus o épico em uma sequência de subtarefas rastreadas e tratei a garantia de consistência, em vez das escritas individuais, como a coisa que eu realmente estava construindo."
        ],
        "bullets": [
          "Fiz de cada edição uma única transação atômica. Todas as escritas de uma única edição têm sucesso ou falham juntas, então as cópias desnormalizadas nunca podem ficar parcialmente atualizadas. Os dois fluxos (edição simples vs. movimento de caminho) compartilhavam essa fronteira mas diferiam em escopo, com o fluxo de movimento recomputando o contexto de rota afetado.",
          "Publiquei eventos só depois que a transação era confirmada. Nada a jusante é informado de que a edição aconteceu até que ela de fato tenha ocorrido de forma durável, então um rollback não pode vazar um evento para uma mudança que não se sustentou.",
          "Descartei eventos desatualizados do lado consumidor. Consumers comparam o timestamp da edição contra o que já têm e descartam qualquer coisa mais antiga, então entrega fora de ordem não pode reverter dados mais novos.",
          "Lancei atrás de uma feature flag por ambiente para que o novo caminho pudesse ser lançado e revertido com segurança.",
          "Refatorei depois, não antes. Uma vez que funcionou, desmontei um caso de uso superdimensionado (tinha crescido para mais de mil linhas e muitas dependências, um vazamento de domínio) e, ao fazer isso, encontrei e corrigi um bug real de injeção de dependência (um provider ausente)."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Uma única transação atômica em vez de uma cascata de eventos independentes. Coordenar as escritas como uma transação garante consistência tudo-ou-nada; uma cascata de eventos teria sido mais solta e simples de escrever mas reintroduz exatamente o problema de atualização parcial. Custo aceito: uma transação maior e acoplamento mais forte ao armazenamento de dados.",
          "Publicar eventos depois do commit em vez de publicá-los inline. Publicação pós-commit significa que sistemas a jusante nunca ouvem falar de uma mudança que depois sofreu rollback, ao custo de uma pequena janela em que a escrita está feita mas o evento ainda não foi enviado.",
          "Descartar eventos desatualizados por timestamp em vez de confiar na ordem de entrega. Comparar timestamps custa uma checagem extra por evento mas remove toda uma classe de bugs de \"dado mais novo silenciosamente revertido\" que a ordenação de mensagens sozinha não consegue prevenir.",
          "Uma feature flag em vez de um corte abrupto. A flag adicionou ramificação mas tornou uma mudança de dados aparentemente irreversível reversível em produção."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Fiz edições de nós organizacionais se propagarem de forma consistente pela superfície de sete tabelas e dois serviços, sem mais dados contraditórios de uma atualização parcial.",
          "Tornei-me a referência do time em sincronização de dados entre serviços (reconhecido em uma avaliação de performance), e esse trabalho ancorou uma série de épicos de sincronização relacionados.",
          "Removi um vazamento de domínio e um bug latente de DI no refactor de acompanhamento, deixando o código mais sustentável do que a funcionalidade sozinha exigia.",
          "Qualitativo: maior confiança em dados de hierarquia voltados ao cliente; nenhum número rígido de antes/depois foi capturado."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Dados desnormalizados precisam de uma única fronteira atômica de escrita. Se uma única edição lógica mapeia para muitas escritas físicas, elas precisam ter sucesso ou falhar juntas. Qualquer coisa a menos eventualmente mostrará uma contradição ao usuário.",
          "Publique eventos só depois que a transação confirma. Do contrário, um rollback vaza uma mensagem sobre algo que nunca aconteceu, e consumers a jusante divergem.",
          "Assuma que eventos chegam desatualizados e fora de ordem. Uma comparação barata de timestamp no consumer é o que impede entregas atrasadas de reverter estado mais novo.",
          "Um caso de uso que não para de crescer é uma fronteira de domínio pedindo para ser desenhada. Tamanho e contagem de dependências são sinais de design, não só questões de limpeza."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Fui dona de ponta a ponta: decomposição do épico em subtarefas rastreadas, implementação dos dois fluxos, e rollout atrás de uma feature flag.",
          "O refactor de acompanhamento dividiu um caso de uso superdimensionado e corrigiu um bug latente de injeção de dependência que ele vinha escondendo.",
          "Citado como a base para me tornar a referência de sincronização entre serviços do time (avaliação de performance).",
          "Verificado contra o tracker (2026-03 a 2026-06): a story foi aberta em 2026-03-12 e resolvida em 2026-06-12, com nove subtarefas de implementação executadas de 2026-04-22 a 2026-05-19, decompostas uma por tabela mais uma para o caminho de edição simples e uma para recomputar o contexto de rota.",
          "Superfície verificada: as sete tabelas desnormalizadas nomeadas no requisito são a tabela de nó organizacional, sua cópia escopada por rota, checklists, rotas, categorias, times e quizzes, com um evento a jusante publicado especificamente para checklists.",
          "Garantias verificadas, como escritas nos critérios de aceite antes da implementação: uma única transação atômica com rollback em caso de erro; idempotência descartando eventos cujo timestamp de atualização não é mais novo que o armazenado; registros de auditoria carregando valores antigos e novos tanto para o caso de edição quanto de movimento; e um rollout gradual atrás de uma feature flag pré-existente que até então não estava conectada a nada.",
          "Acompanhamento verificado: uma tarefa de refactor (2026-06) dividiu o caso de uso superdimensionado de criar/atualizar/excluir, e uma correção separada de consumer parou uma movimentação de máquina de remover pontos de medição de uma rota discriminando pelo id do pai.",
          "Comportamento documentado como cenários BDD em uma tarefa dedicada, por exigência de documentação do próprio ADR.",
          "Fonte (privada): story e subtarefas do Jira no domínio de inspeção, 2026-03 a 2026-06; base de conhecimento de carreira consolidada."
        ]
      }
    ]
  },
  {
    "id": "hibernation-scope-removal",
    "featured": false,
    "title": "Mudando onde um novo estado é tratado, em vez de ensinar oito caminhos de leitura sobre ele",
    "company": "Dynamox",
    "category": "Arquitetura & Escopo de Produto",
    "summary": "Um novo estado operacional de ativo, válido para toda a plataforma, foi especificado como uma regra que oito caminhos de leitura diferentes tinham que aprender. Propus aplicá-la uma única vez na fronteira de escrita, removendo o ativo do escopo da rota e restaurando-o na reativação, o que tornou a maior parte do escopo original desnecessária e deixou contadores, relatórios, sincronização com o app e adherence intocados.",
    "capabilities": [
      "Design de Sistemas",
      "Tomada de Decisão Técnica",
      "Visão de Produto",
      "Liderança Técnica",
      "Comunicação",
      "Senso de Dono"
    ],
    "technologies": [
      "PostgreSQL",
      "Kafka",
      "NestJS"
    ],
    "impact": [
      "~8 regras de caminho de leitura substituídas por 1 regra do lado da escrita + 2 proteções de UI + 1 mensagem",
      "O caso de uso inteiro cabe em uma fatia por fluxo, não um épico multi-superfície",
      "Zero mudanças em relatórios, impressão, sincronização com o app ou cálculo de adherence",
      "Nenhuma tabela nova, nenhuma nova versão de rota, nenhuma reescrita de histórico",
      "Design refinado adotado como a fonte da verdade do épico em vez do item de roadmap"
    ],
    "difficulty": "Média",
    "ownership": "Contribuição de design",
    "customerFacing": "Sim",
    "readingTime": "7 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Este é o caso que eu usaria para mostrar que consigo mudar o *escopo* mudando o *design*, sem que isso seja uma negociação. Não argumentei que a funcionalidade era grande demais nem pedi para fazer menos. Movi onde uma regra é aplicada, e a maior parte do escopo original deixou de ser necessária como consequência, o que é uma conversa bem melhor de se ter com o produto do que \"podemos cortar isso\".",
          "É também a instância mais clara de uma decisão minha anterior valendo a pena. Um mês antes disso, eu tinha consolidado uma métrica entre serviços em um único caminho de computação alimentado por uma fila de recálculo e um worker. Essa decisão é exatamente por que \"os contadores vêm de graça\" é uma afirmação verdadeira aqui, não uma esperança. Arquitetura se acumula, e essa foi a primeira vez que vi a minha própria se acumulando."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Um contrato de cliente introduziu um novo status operacional em ativos na árvore de ativos compartilhada: *hibernado*, significando equipamento intencionalmente fora de serviço por um tempo, que deveria parar de produzir ruído operacional em toda a plataforma. Todo produto tinha que reagir: alertas, emails de notificação, o visualizador de pontos, horímetros, planos de análise, comparação de pontos, e rotas de inspeção.",
          "O caso de uso de inspeção, como escrito inicialmente, mantinha o ativo hibernado dentro de suas rotas e fazia todo consumidor compensar:"
        ],
        "bullets": [
          "a coluna *Itens na Rota* na gestão de rotas subtrai ativos hibernados e seus itens filhos, ou seja, subconjuntos, componentes, checklists e pontos de medição;",
          "a árvore de ativos sinaliza ativos hibernados;",
          "a seleção de um ativo hibernado é bloqueada;",
          "na tela de edição, um ativo hibernado que já estava vinculado permanece vinculado, o planejador não pode removê-lo, e ele não aparecerá no app;",
          "o relatório de rota mostra um total com ativos hibernados subtraídos;",
          "os indicadores de adherence do relatório excluem ativos hibernados do cálculo;",
          "o relatório impresso faz o mesmo."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "A especificação não estava errada, estava no lugar errado. Toda regra nela descrevia um comportamento real e desejável. Não havia nada a rejeitar, o que é precisamente por que \"isso é escopo demais\" não teria ido a lugar nenhum.",
          "A regra vazaria através de uma fronteira de serviço e de time. Contadores de rota, adherence e o payload do app são produzidos por serviços diferentes daquele dono da árvore de ativos e de seu status. Exclusão em tempo de leitura significa que o estado de hibernação precisa estar disponível, e corretamente unido, em cada um desses pontos.",
          "O número de caminhos de leitura só cresce. Qualquer superfície futura que conte itens de rota, um novo indicador, uma nova exportação, uma nova tela, herda a obrigação de lembrar a regra. O custo não são os oito; é que oito não é o número final.",
          "Remoção soa como perda de dados. \"Só tirar da rota\" só é seguro se o planejador não perder informação, o ativo voltar ao lugar certo, e o histórico não se mover. Se qualquer um desses falhar, exclusão em tempo de leitura é o design correto afinal.",
          "O estado não é de propriedade deste domínio. Inspeção consome hibernação da árvore de ativos e nunca deve escrevê-la, então fosse qual fosse o design, ele tinha que ser conduzido por um evento em vez de uma flag local."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Perguntei o que o estado realmente significa para este domínio. Hibernado não significa \"conte isso diferente\". Para rotas de inspeção significa *este ativo não faz parte do trabalho agora*. Pertencimento a uma rota já tem uma representação para isso. Então a pergunta não era \"onde subtraímos?\" mas \"por que ainda está na rota?\"",
          "Movi a regra para a fronteira de escrita. Quando o evento da árvore de ativos diz que um ativo está hibernado, o backend remove esse item e seus descendentes do escopo da rota. Quando o ativo é reativado, ele volta para sua rota original, com os filhos que de fato estavam nela, em sua posição anterior onde essa ainda existe. Hibernação é aplicada uma única vez, onde a mudança de estado chega.",
          "Depois verifiquei o que isso torna desnecessário. Tudo, do lado da leitura. Contadores e indicadores são computados sobre os itens vivos da rota, então já são naturalmente corretos *sem nenhum cálculo especial para desconsiderar ativos hibernados*. O app recebe os itens da rota, então nunca vê um hibernado. Relatórios e impressão totalizam o que está lá. O cálculo de adherence não precisa de nenhum conceito de hibernação. Esse é todo o ponto: não \"mais barato de construir\", mas *nada para construir*.",
          "Mantive as duas coisas que genuinamente pertencem ao lado da leitura, a sinalização visual na árvore de ativos e o bloqueio à seleção de um ativo hibernado, porque essas são sobre a escolha do planejador no momento de autoria, não sobre aritmética.",
          "E paguei o único custo real que o design cria. Remoção silenciosa confundiria o planejador: ativos desaparecem de uma rota sem explicação. Então o design adiciona uma mensagem na tela de edição que nomeia cada ativo removido por hibernação e afirma que ele voltará automaticamente quando reativado. Uma superfície informacional substitui oito aritméticas, e o planejador acaba mais bem informado do que no design original, onde o ativo estava presente mas inerte.",
          "O caso de uso refinado se tornou o escopo. As duas fatias agora declaram, por escrito, que as páginas de caso de uso são a fonte da verdade e que o item de roadmap \"registra o escopo inicial e não reflete as mudanças acordadas durante o refinamento.\" O fluxo básico inteiro mais os dois fluxos alternativos cabem em uma única fatia: quatro stories para gestão dinâmica de escopo, três para restauração automática.",
          "Um spike posterior confirmou a suposição estrutural no código, que é a parte que eu mais gostaria que um revisor checasse em vez de aceitar por confiança. Descobriu que o mecanismo de soft-delete de item e descendentes já roda em produção, já que é o que acontece quando um ativo é excluído da árvore, e não cria uma nova versão de rota; que contadores de rota e adherence do ciclo ativo já são recomputados a partir de itens vivos pela fila de recálculo e pelo worker, então \"vêm de graça\"; que ciclos fechados são imunes, porque o recálculo toca só o ciclo ativo e a adherence agregada lê um valor consolidado por ciclo; que nenhuma tabela nova é necessária, já que a tabela de item de rota já carrega colunas de soft-delete, ordenação e pai; e que respostas de checklist são casadas por checklist e ciclo em vez de por item de rota, então sobrevivem à ida e volta."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Remover do escopo em vez de excluir em tempo de leitura. Uma regra em uma fronteira em vez de uma regra em cada consumidor, e todo consumidor futuro correto por padrão. O custo aceito: o planejador vê ativos sumirem de uma rota, o que teve que ser respondido com uma mensagem explícita em vez de deixado implícito.",
          "Restaurar automaticamente em vez de pedir ao planejador para readicionar. Reativação não é uma decisão de planejamento, então fazer uma pessoa refazer isso seria trabalho braçal e derivaria. Custo: o sistema agora precisa lembrar posição e pertencimento original, e decidir o que fazer quando a rota encolheu ou foi reordenada desde então.",
          "Uma mensagem informacional em vez de manter o ativo visível mas inerte. O item \"vinculado, não removível, invisível no app\" do design original teria mantido o ativo na tela, mas introduz um estado que nada mais no sistema tem, e mente silenciosamente para todo contador até que cada um seja ensinado o contrário.",
          "Conduzir a partir do evento da árvore de ativos em vez de uma flag local de hibernação no domínio de inspeção. Inspeção não deve ser dona desse estado. Custo: o comportamento é eventualmente consistente, então o design se compromete apenas a refletir a mudança dentro de um intervalo de sincronização aceitável, não instantaneamente.",
          "Esse formato é certo para um *escopo*, e eu não o generalizaria. Squads irmãs tratando o mesmo estado de plataforma para horímetros, planos de análise e comparação de pontos foram pelo caminho de exclusão em tempo de leitura, e para pelo menos uma delas isso está correto: comparar os dados de um ponto antes e durante a hibernação *é* o produto, então o ativo hibernado não pode ser removido da coisa que está sendo lida. Remoção está disponível para mim porque uma rota é um escopo de trabalho, reconstruível e sem sentido quando o trabalho não está acontecendo. Um histórico não é. A lição não é \"sempre remova\"; é \"verifique se a coisa que você está filtrando é um escopo ou um registro.\""
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "paras": [
          "Dito com honestidade: esta é uma contribuição de design e escopo, e não está lançada. O desenvolvimento estava programado para começar em 2026-08-31; as duas fatias estavam no backlog quando isso foi escrito, com um spike em review. Não há métrica realizada de antes/depois, e não existe número de horas ou story points para citar.",
          "O que *é* verificável:"
        ],
        "bullets": [
          "O design refinado substituiu o item de roadmap como a fonte da verdade do épico. As duas fatias dizem isso explicitamente, e as páginas de caso de uso carregam o fluxo baseado em remoção, incluindo a linha de que os contadores refletem ativos operacionais \"sem nenhum cálculo especial para desconsiderar os hibernados\".",
          "Aproximadamente oito regras de caminho de leitura colapsaram em uma regra do lado da escrita, duas proteções de UI e uma mensagem. Relatórios, relatórios impressos, o payload do app e o cálculo de adherence ficam intocados pela funcionalidade.",
          "Nenhuma nova versão de rota, nenhuma tabela nova, nenhuma reescrita de histórico, confirmado em código pelo spike, reaproveitando um mecanismo já em produção.",
          "O caso de uso inteiro cabe em uma fatia por fluxo, quatro stories para gestão dinâmica de escopo e três para restauração automática, em vez de uma mudança espalhada por toda superfície que conta itens de rota.",
          "O design trouxe à tona dois problemas reais em vez de escondê-los, ambos agora rastreados antes da implementação. Primeiro, atualmente não há discriminador entre \"removido por hibernação\", \"removido pelo planejador\", \"ativo excluído da árvore\" e \"restante de uma versão de rota mais antiga\", tudo o mesmo estado, então a restauração automática poderia ressuscitar um item removido por outro motivo. Segundo, um caminho pré-existente de perda silenciosa de dados fica amplificado, onde uma resposta coletada para um item que saiu do escopo é aceita e confirmada ao inspetor, depois descartada de forma assíncrona em um log de erro. Esse segundo já acontece hoje sempre que um item sai do escopo; hibernação multiplica sua frequência, e a correção simétrica ingênua converteria perda silenciosa em uma falha nas mãos do inspetor, então as duas pontas precisam ser decididas juntas."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "bullets": [
          "Pergunte onde um novo estado deveria ser aplicado antes de perguntar como cada consumidor deveria tratá-lo. \"Todo caminho de leitura subtrai X\" é quase sempre um sinal de que X pertence à fronteira de escrita. Um ponto de aplicação vence N compensações, e torna consumidores futuros corretos sem saber que a regra existe.",
          "A melhor forma de cortar escopo é torná-lo desnecessário, não negociá-lo para fora. Nada na especificação original estava errado, então discutir tamanho teria fracassado. Mudar onde uma regra vive deletou a maior parte disso como efeito colateral, e essa é uma conversa de design, não uma briga de priorização.",
          "Verifique se a coisa que você está filtrando é um escopo ou um registro. Um escopo de trabalho pode ser reduzido e reconstruído; um histórico não pode. Remoção só está disponível no primeiro, que é por que o mesmo estado de plataforma merecia um formato diferente em um produto irmão.",
          "Corretude silenciosa precisa de uma explicação explícita. Deixar o dado certo não é o trabalho todo. Se a rota de um usuário silenciosamente muda de forma, \"correto\" soa como \"quebrado\". Uma mensagem que nomeia o que aconteceu e promete a reversão é o preço do design mais simples, e é barato.",
          "Arquitetura se acumula, e dá para sentir. \"Contadores e adherence vêm de graça\" só é verdade por causa de uma decisão de caminho único de computação tomada um mês antes. O retorno dessa decisão apareceu como escopo que eu não precisei escrever.",
          "Desenhe os modos de falha da sua própria proposta no plano. A lacuna do discriminador e o caminho amplificado de perda de resposta são ambos consequências do meu design. Nomeá-los no refinamento, antes da implementação, é o que separa uma proposta de um discurso de vendas."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Verificado: o escopo refinado substituiu o original. As duas fatias do épico (abertas em 2026-07-16 e 2026-08-20) declaram que as páginas de caso de uso e de aceite de design são a fonte da verdade e que o item de roadmap, aberto em 2026-07-06 pelo produto, \"registra o escopo inicial e não reflete as mudanças acordadas durante o refinamento.\"",
          "Verificado: o caso de uso publicado é o design baseado em remoção. Seu fluxo básico abre com ativos hibernados já excluídos das rotas pelo backend e contadores que refletem ativos operacionais \"sem nenhum cálculo especial para desconsiderar os hibernados\"; seu fluxo alternativo é a mensagem informacional mais o retorno automático na reativação. As stories decompostas dele batem uma a uma.",
          "Verificado em código pelo spike do time (2026-08-21): o caminho de soft-delete com descendentes já roda em produção sem versionar a rota; contadores e adherence do ciclo ativo já recomputam a partir de itens vivos via a fila de recálculo e o worker; ciclos fechados não são afetados; nenhuma tabela nova é necessária; respostas de checklist são indexadas por checklist e ciclo, não por item de rota. O spike também produziu os dois problemas abertos listados em Impacto.",
          "Verificado como uma iniciativa genuinamente multi-produto, que é o que torna a questão de posicionamento interessante: o mesmo estado de plataforma tem épicos de reação paralelos nas squads de monitoramento de condição, árvore de ativos e indicadores de gestão, e o item de roadmap irmão para horímetros, planos de análise e comparação de pontos especifica exclusão em tempo de leitura, incluindo \"excluir máquinas hibernadas do cálculo de adherence e conclusão\", para produtos onde remoção não está disponível.",
          "Não lançado. Desenvolvimento programado para 2026-08-31; fatias no backlog, spike em review, a partir de 2026-08-28.",
          "Nota de atribuição (VERIFICAR): o refinamento é meu, mas os artefatos compartilhados são de propriedade do time. Os épicos e stories foram escritos pela gerente de produto e pelo tech lead do squad, e o último editor da página de caso de uso no wiki é um colega de produto. Se este estudo de caso for usado em uma conversa de contratação, ancore a contribuição a um rastro concreto (uma nota de reunião de refinamento, um comentário, ou uma thread de mensagens) em vez de à autoria da página.",
          "Fonte (privada): item de roadmap do Jira, as duas fatias do épico e suas stories, o spike de implementação, e as páginas internas do wiki de documentação de produto para o caso de uso e seus critérios de aceite de design."
        ]
      }
    ]
  },
  {
    "id": "design-system",
    "featured": true,
    "title": "Introduzindo um Design System onde não existia nenhum",
    "company": "AQTech",
    "category": "Engenharia Frontend",
    "summary": "Identifiquei a ausência de padrões frontend, propus um Design System, construí-o do zero e ensinei o time a adotá-lo.",
    "capabilities": [
      "Senso de Dono",
      "Engenharia Frontend",
      "Design de Sistemas",
      "Liderança Técnica",
      "Visão de Produto",
      "Comunicação",
      "Design Systems",
      "Acessibilidade",
      "Developer Experience"
    ],
    "technologies": [
      "Vue",
      "TypeScript",
      "Vuetify"
    ],
    "impact": [
      "Desenvolvimento frontend padronizado",
      "Componentes duplicados reduzidos",
      "Tornou-se referência frontend"
    ],
    "difficulty": "Média",
    "ownership": "Iniciei e liderei",
    "customerFacing": "Indireto",
    "readingTime": "6 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "O frontend da AQTech tinha crescido funcionalidade por funcionalidade. Cada desenvolvedor resolvia problemas de UI localmente: três date pickers, quatro variantes de botão, espaçamento inconsistente, nenhum vocabulário compartilhado entre design e código.",
          "Eu era estagiária. Ninguém pediu um Design System, porque o custo era invisível: era pago em pequenos incrementos em cada funcionalidade."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "Duplicação era o sintoma visível; o problema real era fadiga de decisão. Toda funcionalidade exigia redecidir paddings, cores, estados de erro e APIs de componente. Reviews discutiam pixels em vez de lógica. Onboarding significava absorver folclore."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "Sem tempo dedicado, então o sistema tinha que ser construído junto com o trabalho de funcionalidades.",
          "Sem ownership de designer: a fonte da verdade precisava viver em código.",
          "Vuetify já estava no stack; o sistema precisava envolvê-lo, não lutar contra ele.",
          "Como estagiária, eu não tinha autoridade para mandar em nada. A adoção precisava ser voluntária."
        ]
      },
      {
        "id": "alternatives",
        "title": "Alternativas Consideradas",
        "bullets": [
          "Adotar os padrões do Vuetify em tudo. Rejeitada: os padrões não codificavam nossos padrões de domínio (dados densos de engenharia, hierarquias de ativos), e essa lacuna era onde a duplicação crescia.",
          "Um guia de estilo escrito sem código. Rejeitada: documentação que exige disciplina perde para prazos.",
          "Uma biblioteca de componentes envolvendo o Vuetify com nossos tokens, padrões e docs. Escolhida."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Construir o Design System como o caminho de menor resistência: importar o componente do sistema tinha que ser estritamente menos trabalho do que escrever um local.",
          "Todo componente vinha com docs de uso e exemplos prontos para copiar e colar. Migrei as telas de maior tráfego eu mesma primeiro, para que o sistema provasse seu valor antes de pedir a alguém para adotá-lo."
        ],
        "diagram": {
          "width": 760,
          "height": 260,
          "nodes": [
            {
              "id": "screenA",
              "lines": [
                "Tela: Lista de ativos"
              ],
              "x": 40,
              "y": 16,
              "w": 170,
              "h": 44
            },
            {
              "id": "screenB",
              "lines": [
                "Tela: Detalhe do sensor"
              ],
              "x": 225,
              "y": 16,
              "w": 170,
              "h": 44
            },
            {
              "id": "screenC",
              "lines": [
                "Tela: Editor de rotas"
              ],
              "x": 410,
              "y": 16,
              "w": 170,
              "h": 44
            },
            {
              "id": "removed",
              "lines": [
                "✕ eliminados:",
                "componentes locais",
                "pontuais"
              ],
              "x": 600,
              "y": 16,
              "w": 150,
              "h": 70,
              "variant": "removed"
            },
            {
              "id": "ds",
              "lines": [
                "Design System"
              ],
              "sub": "tokens · padrões · a11y por padrão · docs",
              "x": 180,
              "y": 100,
              "w": 400,
              "h": 64,
              "variant": "accent"
            },
            {
              "id": "vuetify",
              "lines": [
                "Vuetify (biblioteca base)"
              ],
              "x": 280,
              "y": 190,
              "w": 200,
              "h": 44
            }
          ],
          "edges": [
            {
              "from": "vuetify",
              "to": "ds",
              "label": "envolve"
            },
            {
              "from": "ds",
              "to": "screenA"
            },
            {
              "from": "ds",
              "to": "screenB"
            },
            {
              "from": "ds",
              "to": "screenC"
            }
          ]
        }
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Envolver o Vuetify significava herdar suas restrições e ciclo de upgrade. Aceito por velocidade.",
          "Construir junto com o trabalho de funcionalidades significava cobertura lenta e incremental. Aceito, porque forçou o sistema a crescer a partir de necessidades reais em vez de especulação.",
          "Adoção voluntária é mais lenta do que mandato. Aceito, e é por isso que os padrões sobreviveram depois que saí."
        ]
      },
      {
        "id": "implementation",
        "title": "Implementação",
        "paras": [
          "Biblioteca de componentes em TypeScript sobre Vue 3 envolvendo o Vuetify, pareada com uma biblioteca de componentes no Figma mantida sincronizada com o código: design tokens, padrões de formulário, presets de densidade de dados e padrões de acessibilidade embutidos. A documentação vivia ao lado do código e toda página de componente respondia \"quando eu uso isso em vez de X\".",
          "Estratégia de adoção: migrar as telas de maior visibilidade primeiro, fazer pareamento com cada desenvolvedor em seu primeiro uso, e tratar todo \"o sistema não consegue fazer X\" como um bug do sistema, não do desenvolvedor."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Desenvolvimento frontend padronizado; componentes duplicados pararam de aparecer em review.",
          "Novas funcionalidades passaram a partir de composição em vez de construção.",
          "Tornei-me a referência frontend do time, e os padrões permaneceram depois que saí.",
          "A experiência produziu um princípio duradouro: um Design System só tem sucesso quando a adoção se torna o caminho mais fácil."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Autoridade não é pré-requisito para padrões; evidência é. Migrar telas reais antes de pedir adoção convertia céticos melhor do que qualquer argumento.",
          "Os melhores padrões de engenharia são adotados voluntariamente; o sistema precisa vencer a alternativa em esforço, não em princípio."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "paras": [
          "Capacidades reivindicadas e demonstradas: Design Systems (construí um do zero), Liderança Técnica (adoção sem autoridade), Developer Experience (mentalidade de adoção como produto), Engenharia Frontend (os próprios componentes), Acessibilidade (padrões embutidos nos componentes, não retrofitados por tela)."
        ]
      }
    ]
  },
  {
    "id": "error-observability",
    "featured": false,
    "title": "Trazendo observabilidade de erros para um time que não tinha nenhuma",
    "company": "Dynamox",
    "category": "Liderança",
    "summary": "Dei a um time que não tinha nenhum monitoramento de erros uma prática estruturada de observabilidade construída a partir de um reporter compartilhado e um interceptor de API com tagging em tempo de requisição mais dashboards e um fluxo de triagem, transformando bugs de produção de algo reportado pelo suporte em algo que o time pode ver e priorizar.",
    "capabilities": [
      "Senso de Dono",
      "Engenharia Frontend",
      "Visão de Produto",
      "Liderança Técnica",
      "Observabilidade"
    ],
    "technologies": [
      "React",
      "Sentry",
      "TypeScript"
    ],
    "impact": [
      "O time passou de nenhum monitoramento de erros para uma prática estruturada de observabilidade, capaz de responder \"qual serviço ou funcionalidade está falhando mais?\" e de revisar issues abertas por prioridade.",
      "Bugs de produção se tornaram visíveis proativamente em vez de chegar só pelo suporte.",
      "Erros são atribuíveis a funcionalidade e endpoint, graças ao tagging de contexto em tempo de requisição, e a configuração é a base para alertas pós-deploy.",
      "Qualitativo: detecção mais rápida de problemas de produção; nenhum número rígido de tempo médio de detecção foi capturado. <!-- TODO: adicionar números de MTTD ou volume de issues se disponíveis -->"
    ],
    "difficulty": "Média",
    "ownership": "Liderei",
    "customerFacing": "Não",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "Esta é evidência de que identifico e fecho lacunas que ninguém me atribuiu, a mesma iniciativa que definiu meu crescimento mais inicial, agora aplicada em escala de time. Ninguém pediu observabilidade. Percebi que éramos o único time voando às cegas e defendi a correção disso.",
          "Isso também mostra pensamento de sistemas de frontend. O núcleo da solução é uma camada de instrumentação compartilhada e reutilizável com um design deliberado de tagging em vez de um espalhamento de logs de erro pontuais, mais o senso de produto para construir dashboards em torno de como o time realmente faz triagem."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "O frontend era uma base de código compartilhada dividida entre as áreas de vários times. Toda área de outro time tinha monitoramento de erros; a minha não tinha nenhum. A consequência era concreta: ficávamos sabendo de bugs de produção quando um ticket de suporte chegava, não quando o erro acontecia. Não tínhamos como ver quais partes da nossa área estavam falhando, com que frequência, ou se um release tinha piorado as coisas, então a triagem era reativa e anedótica."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "Ninguém era dono do problema. Era uma lacuna estrutural, não um ticket. Alguém tinha que percebê-la e decidir que valia a pena resolver.",
          "Atribuição de erro é a parte difícil. Capturar erros é fácil. Fazer cada erro carregar contexto suficiente para dizer *qual funcionalidade e qual chamada de API* o produziu, preservando a rota que de fato falhou, é onde o design mora.",
          "Instrumentação precisa ser compartilhada, não espalhada. Logging de erro ad-hoc por dezenas de rotas teria produzido ruído. O valor está em uma camada única e consistente e reutilizável.",
          "Observabilidade só é útil se conduz a ação. Um dashboard que ninguém faz triagem não muda nada, então a prática precisava incluir um fluxo de trabalho."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Tratei isso como introduzir uma prática, não instalar uma ferramenta."
        ],
        "bullets": [
          "Diagnostiquei e defendi a causa. Identifiquei que nossa área era a única sem monitoramento e propus a iniciativa a partir do meu próprio diagnóstico.",
          "Construí um reporter de erros compartilhado conectado aos fluxos assíncronos críticos, para que erros fossem capturados de forma consistente em vez de por tela.",
          "Adicionei um interceptor de API compartilhado que marca em tempo de requisição. Cada erro carrega tags de contexto para time, funcionalidade, e o serviço e endpoint de API específicos. Eu os capturei no momento da requisição para que a tag reflita a rota que de fato falhou, em vez de qualquer contexto que existisse quando o erro surgiu. Fiz isso de forma aditiva para que nunca sobrescrevesse tags existentes.",
          "Construí dashboards com limiares, organizados em torno de como o time realmente os usaria, e mapeei as rotas da nossa área para filtros para que erros pudessem ser fatiados por funcionalidade.",
          "Defini o fluxo de triagem, ou seja, como um erro se torna um ticket rastreado, para que o monitoramento se transforme em ação, e estabeleci a base para alertas pós-deploy."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Marcar em tempo de requisição em vez de marcar na resposta/erro. Capturar contexto quando a requisição é feita preserva o endpoint que de fato falhou para atribuição correta; lê-lo depois às vezes atribuiria o erro errado. Custo aceito: um pouco mais de cuidado no interceptor.",
          "Uma camada de instrumentação compartilhada em vez de logging de erro por tela. Um reporter e interceptor únicos e reutilizáveis são mais design antecipado do que blocos `catch` espalhados, mas blocos espalhados não teriam produzido nada sobre o qual um time pudesse agir.",
          "Tagging aditivo em vez de sobrescrever. Nunca atropelar tags existentes mantém intacto o outro contexto da base de código compartilhada, ao custo de ser disciplinada sobre como as tags são definidas.",
          "Dashboards por persona de uso em vez de um padrão genérico. Construir views em torno de como o time faz triagem exige mais reflexão do que um dashboard pronto, mas então os dados respondem às perguntas que as pessoas realmente fazem."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "O time passou de nenhum monitoramento de erros para uma prática estruturada de observabilidade, capaz de responder \"qual serviço ou funcionalidade está falhando mais?\" e de revisar issues abertas por prioridade.",
          "Bugs de produção se tornaram visíveis proativamente em vez de chegar só pelo suporte.",
          "Erros são atribuíveis a funcionalidade e endpoint, graças ao tagging de contexto em tempo de requisição, e a configuração é a base para alertas pós-deploy.",
          "Qualitativo: detecção mais rápida de problemas de produção; nenhum número rígido de tempo médio de detecção foi capturado. <!-- TODO: adicionar números de MTTD ou volume de issues se disponíveis -->"
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Ninguém consegue priorizar um bug que não consegue ver. Observabilidade vem antes do trabalho de confiabilidade, não depois.",
          "Atribua erros onde o contexto é verdadeiro. Marque no ponto (tempo de requisição) que preserva o que de fato falhou, ou seus dashboards vão te enganar.",
          "Instrumente uma vez, de forma compartilhada. Um reporter e interceptor reutilizáveis vencem logging espalhado, porque consistência é o que transforma dado de erro em algo acionável.",
          "Observabilidade precisa de um fluxo de trabalho. Sem um caminho de triagem do erro ao ticket, o dado nunca vira uma correção.",
          "Perceber uma lacuna não atribuída é parte do trabalho. O diagnóstico valeu tanto quanto o código que veio depois."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Propus e liderei a iniciativa a partir do meu próprio diagnóstico (nossa área era a única sem monitoramento).",
          "Construí um reporter compartilhado e um interceptor de API com tagging em tempo de requisição, dashboards com limiares, e um fluxo de triagem de erro-para-ticket.",
          "Verificado contra o tracker (2026-05 a 2026-06): um épico que abri em 2026-05-25 e decompus em cinco tarefas: o reporter compartilhado conectado às sagas do time (fechado 2026-05-27), o dashboard do time (2026-06-18), tags de contexto nas páginas críticas (2026-06-22), cobertura automática via um interceptor de cliente HTTP, e identificação de usuário mais rastreamento de release.",
          "Verificado honestamente como inacabado: duas das cinco tarefas continuam abertas. Rastreamento de release nunca começou, e a tarefa de cobertura do interceptor permanece no backlog mesmo que o interceptor em si tenha ido para produção (um pull request de 27 comentários, mesclado em 2026-06-08). A prática é real e em uso; não está completa.",
          "Fonte (privada): épico do Jira no domínio de inspeção, 2026-05 a 2026-06; base de conhecimento de carreira consolidada."
        ]
      }
    ]
  },
  {
    "id": "code-review-technical-leadership",
    "featured": false,
    "title": "Escolhendo a altitude certa para corrigir um bug encontrado em review, não só o patch mais rápido",
    "company": "Dynamox",
    "category": "Colaboração",
    "summary": "Em code review, identifiquei um bug de null-safety que teria derrubado três componentes de produção, e corrigi a classe do defeito em vez das três instâncias, propondo um helper compartilhado na camada de dados para a autora do PR em vez de aplicar patch em cada ponto de renderização eu mesma; um dos 310 pull requests em que dei um veredito explícito de review naquele semestre (702 em quatro repositórios entre 2025-03 e 2026-08), medido a partir da API do Bitbucket em vez de lembrado de memória.",
    "capabilities": [
      "Liderança Técnica",
      "Comunicação",
      "Debugging"
    ],
    "technologies": [
      "React",
      "TypeScript"
    ],
    "impact": [
      "Evitei um crash em três componentes de produção antes de irem ao ar.",
      "Removi a classe de defeito subjacente, não só as três instâncias conhecidas, via um helper compartilhado na camada de dados que qualquer consumidor futuro agora usa.",
      "Mantive a correção sob ownership da autora original, reforçando o padrão para ela em vez de substituir meu julgamento pelo dela.",
      "Parte de uma prática de review reconhecida em feedback de performance pela clareza de suas perguntas e documentação, com mais de 100 reviews em um único semestre entre frontend, backend e testes."
    ],
    "difficulty": "Média",
    "ownership": "Contribuí",
    "customerFacing": "Sim",
    "readingTime": "2 min",
    "sections": [
      {
        "id": "context",
        "title": "Contexto",
        "paras": [
          "A maioria dos meus estudos de caso é sobre trabalho que fui dona de ponta a ponta. Este é evidência de uma capacidade diferente, igualmente importante: elevar o padrão de qualidade do trabalho de outra pessoa sem tomá-lo para mim. Code review é onde muito julgamento real de engenharia é invisível: identificar um defeito que não está obviamente errado, decidir corrigir o caso geral em vez da instância, e escolher sugerir em vez de reescrever para que a autora mantenha ownership e a lição. Isso é parte de uma prática sustentada, mais de 100 reviews entre frontend, backend e testes em um único semestre, ao lado de pair programming em trabalho crítico, em vez de uma pegada pontual."
        ]
      },
      {
        "id": "problem",
        "title": "Problema",
        "paras": [
          "O pull request de uma colega de time renderizava uma lista de itens depois de filtrá-la, mas uma lógica próxima no mesmo componente ainda se referia ao tamanho do array original, não filtrado. As duas linhas eram localmente corretas, e nenhuma estava errada por si só, mas juntas codificavam uma suposição de que os dois valores sempre concordariam. Não concordariam: no momento em que o filtro de fato removesse um item, os dois valores derivados divergiriam, e três componentes compartilhavam exatamente esse padrão."
        ]
      },
      {
        "id": "constraints",
        "title": "Restrições",
        "bullets": [
          "O bug era invisível linha a linha. Nada no diff estava individualmente errado. O defeito só existe na *relação* entre dois valores derivados da mesma fonte, exatamente o tipo de bug que um review rápido e focado no diff perde.",
          "A correção rápida era tentadora e insuficiente. Aplicar patch nos três pontos de chamada conhecidos teria feito o sintoma visível desaparecer sem remover a classe de defeito subjacente, e o próximo componente construído da mesma forma o reintroduziria.",
          "Não era o meu código. Propor uma mudança estrutural mais profunda no pull request de outra pessoa arrisca ser ignorada (leve demais) ou tomar o trabalho dela (pesado demais). Acertar esse equilíbrio é, em si, a habilidade."
        ]
      },
      {
        "id": "decision",
        "title": "Decisão",
        "paras": [
          "Reconheci o formato do bug antes de decidir o que fazer sobre ele: dois valores derivados da mesma fonte, lidos de forma independente, sem garantia de que permaneceriam sincronizados. Era o mesmo tipo de problema que já resolvi arquiteturalmente em outro lugar dando a um valor derivado um único caminho de computação."
        ],
        "bullets": [
          "Rastreei o padrão até os três componentes afetados, não só o do diff, para que a correção pudesse endereçar a classe real do defeito.",
          "Propus um helper compartilhado na camada de dados, um único lugar que deriva o valor de que ambas as lógicas precisam, para que nada a jusante possa mais ler duas respostas diferentes da mesma fonte.",
          "Sugeri à autora em vez de implementar eu mesma. Deixar a mudança nas mãos dela custou uma rodada extra de review, mas manteve o ownership dela sobre o PR intacto e ensinou o padrão em vez de silenciosamente sobrescrever o trabalho dela."
        ]
      },
      {
        "id": "tradeoffs",
        "title": "Trade-offs",
        "bullets": [
          "Um helper compartilhado na camada de dados em vez de aplicar patch nos três pontos de renderização. Corrigir as três instâncias é mais rápido; dar a elas uma fonte compartilhada remove a classe de defeito para qualquer consumidor futuro também, o que valeu a etapa extra de design para um padrão que já tinha se repetido três vezes.",
          "Sugerir a correção em vez de implementá-la eu mesma. Escrever a correção diretamente teria sido mais rápido e garantido meu resultado preferido, mas teria tirado o PR de sua autora. Propor e deixá-la aplicar custou um ciclo de review e produziu uma colega que entendeu o padrão, não só uma correção mesclada.",
          "Revisar o invariante em vez de revisar o diff. Raciocinar sobre o que os dois valores derivados deveriam garantir juntos, em vez de checar cada linha isoladamente, é mais lento por review mas é a única forma dessa classe de bug ser pega antes de produção."
        ]
      },
      {
        "id": "impact",
        "title": "Impacto",
        "bullets": [
          "Evitei um crash em três componentes de produção antes de irem ao ar.",
          "Removi a classe de defeito subjacente, não só as três instâncias conhecidas, via um helper compartilhado na camada de dados que qualquer consumidor futuro agora usa.",
          "Mantive a correção sob ownership da autora original, reforçando o padrão para ela em vez de substituir meu julgamento pelo dela.",
          "Parte de uma prática de review reconhecida em feedback de performance pela clareza de suas perguntas e documentação, com mais de 100 reviews em um único semestre entre frontend, backend e testes."
        ]
      },
      {
        "id": "lessons",
        "title": "Lições Aprendidas",
        "paras": [
          "Conhecimento de engenharia reutilizável que levo adiante disso:"
        ],
        "bullets": [
          "Um valor com dois leitores independentes é um bug esperando o dia em que vão divergir. O mesmo princípio que rege consistência de dados entre serviços se aplica igualmente dentro de um único componente.",
          "Em review, corrija a classe quando conseguir vê-la, não só a instância na sua frente. Três repetições do mesmo padrão são um sinal de que aplicar patch na visível vai deixar as outras duas para falhar depois.",
          "Sugira, não tome para si. Um review que corrige o padrão e devolve a implementação ensina; um review que silenciosamente reescreve o PR não ensina.",
          "Revise o que o código assume, não só o que ele mudou. O bug só era visível ao raciocinar sobre o invariante que as duas linhas deveriam compartilhar."
        ]
      },
      {
        "id": "evidence",
        "title": "Evidência",
        "bullets": [
          "Identifiquei e redirecionei um bug de divergência de null-safety em três componentes antes do lançamento, via uma abstração compartilhada proposta em vez de uma reescrita direta.",
          "Parte de uma prática de review sustentada, medida a partir da fonte (Bitbucket, 2025-03 a 2026-08): 702 pull requests em que registrei um veredito explícito de review, 692 aprovações e 10 solicitações de mudança, em quatro repositórios (dois serviços de backend, a aplicação web compartilhada, e o repositório de infraestrutura), de 1.221 em que fui designada como revisora. Semestre de pico: 310 veredictos em 2025-07 a 2025-12, que é de onde veio o número \"mais de 100 reviews em um semestre\" na minha avaliação de performance. O número real era o triplo disso. Para efeito de escala, eu escrevi 360 pull requests no mesmo período (337 mesclados), então revisei aproximadamente duas mudanças de colegas para cada uma minha.",
          "Também entre frontend, backend, testes e infrastructure-as-code, mais pair programming em entregas críticas.",
          "Reconhecida em feedback de performance pela clareza das perguntas de review e da documentação de PR, e pelo volume, subindo de 18 reviews no ciclo anterior.",
          "Fonte: contagens de review computadas diretamente da API do Bitbucket sobre os quatro repositórios em que contribuo (veredito como autora e como revisora por pull request), 2025-03 a 2026-08. Narrativa e o review-âncora: base de conhecimento de carreira consolidada e evidência de avaliação de performance (privada)."
        ]
      }
    ]
  }
]

export const capabilities: Capability[] = [
  {
    "id": "system-design",
    "name": "Design de Sistemas",
    "desc": "Moldar serviços, contratos e fluxos de dados antes do código existir."
  },
  {
    "id": "technical-decision-making",
    "name": "Tomada de Decisão Técnica",
    "desc": "Ponderar alternativas explicitamente, escolhendo a opção que envelhece bem em vez da que entrega mais rápido."
  },
  {
    "id": "ownership",
    "name": "Senso de Dono",
    "desc": "Proposta → implementação → adoção → exclusão do caminho antigo."
  },
  {
    "id": "backend-engineering",
    "name": "Engenharia Backend",
    "desc": "Serviços, APIs, consumers de eventos e os dados de que são donos."
  },
  {
    "id": "security",
    "name": "Segurança",
    "desc": "Risco de ameaça e privacidade incorporado ao próprio design, não parafusado depois, de containers hardened a fronteiras de acesso e proteção de dados."
  },
  {
    "id": "incident-response",
    "name": "Resposta a Incidentes",
    "desc": "Diagnosticar problemas de produção sob pressão e fechar o ciclo com um post-mortem."
  },
  {
    "id": "communication",
    "name": "Comunicação",
    "desc": "Decisões escritas com alternativas; documentos que encerram debates."
  },
  {
    "id": "performance-engineering",
    "name": "Engenharia de Performance",
    "desc": "Tornar o caminho comum rápido, e esconder a latência que resta."
  },
  {
    "id": "data-engineering",
    "name": "Engenharia de Dados",
    "desc": ""
  },
  {
    "id": "debugging",
    "name": "Debugging",
    "desc": "Encontrar a causa raiz sob incerteza: reproduzir, isolar e corrigir sem adivinhar."
  },
  {
    "id": "reliability",
    "name": "Confiabilidade",
    "desc": "Idempotência, reversibilidade, e desenhar para a falha como padrão."
  },
  {
    "id": "frontend-engineering",
    "name": "Engenharia Frontend",
    "desc": "Interfaces em produção: arquitetura, performance, acessibilidade."
  },
  {
    "id": "product-thinking",
    "name": "Visão de Produto",
    "desc": "Escolhas de engenharia avaliadas pelo efeito no fluxo de trabalho do usuário."
  },
  {
    "id": "ux",
    "name": "UX",
    "desc": "Dados densos de engenharia mantidos legíveis sob pressão de tempo."
  },
  {
    "id": "distributed-systems",
    "name": "Sistemas Distribuídos",
    "desc": "Desenhar sistemas em que serviços independentes permanecem consistentes sobre fatos compartilhados."
  },
  {
    "id": "technical-leadership",
    "name": "Liderança Técnica",
    "desc": "Padrões adotados voluntariamente; tornar-se a referência que os outros consultam."
  },
  {
    "id": "testing",
    "name": "Testes",
    "desc": "Suites que permanecem confiáveis, porque um build vermelho precisa significar algo."
  },
  {
    "id": "design-systems",
    "name": "Design Systems",
    "desc": "Sistemas de componentes que superam soluções locais em esforço."
  },
  {
    "id": "accessibility",
    "name": "Acessibilidade",
    "desc": "Padrões embutidos em componentes, não retrofitados por tela."
  },
  {
    "id": "developer-experience",
    "name": "Developer Experience",
    "desc": "Tornar o caminho correto o caminho mais fácil para outros engenheiros."
  },
  {
    "id": "observability",
    "name": "Observabilidade",
    "desc": "Encontrar erros antes que os clientes encontrem; alertas que continuam acionáveis."
  }
]

export const technologies: Technology[] = [
  {
    "name": "React",
    "usage": "Stack frontend principal na Dynamox: dashboards, diffs de IA revisáveis, UIs de árvore de ativos."
  },
  {
    "name": "Vue",
    "usage": "Stack frontend da AQTech ao longo das eras Vue 2 e Vue 3; o Design System e o seletor em árvore foram ambos construídos sobre ele."
  },
  {
    "name": "TypeScript",
    "usage": "Linguagem padrão nos dois frontends e nos serviços NestJS. Tipos como documentação."
  },
  {
    "name": "NestJS",
    "usage": "Serviços de backend na Dynamox, incluindo o serviço dono da métrica e seus consumers Kafka."
  },
  {
    "name": "Fastify",
    "usage": "Serviços mais leves e a API de busca da árvore de ativos."
  },
  {
    "name": "Kafka",
    "usage": "A espinha dorsal de eventos: sinais de desatualização, ordenação com chave de partição, consumo idempotente."
  },
  {
    "name": "PostgreSQL",
    "usage": "Armazenamentos de fonte da verdade; também onde aprendi correção reversível de dados de produção."
  },
  {
    "name": "Prisma",
    "usage": "ORM para serviços Postgres; disciplina de migração para mudanças de schema."
  },
  {
    "name": "Redis",
    "usage": "Cache gerenciado na frente do warehouse de analytics para leituras síncronas e quentes."
  },
  {
    "name": "Vuetify",
    "usage": "A base que o Design System envolveu, e a biblioteca cujo seletor em árvore ausente eu construí."
  },
  {
    "name": "Terraform",
    "usage": "Infrastructure as code na Dynamox, incluindo o provisionamento do serviço de analytics."
  },
  {
    "name": "BigQuery",
    "usage": "O lado OLAP da decisão do serviço de analytics."
  },
  {
    "name": "Kubernetes",
    "usage": "Plataforma de deploy dos serviços da Dynamox (GKE)."
  },
  {
    "name": "Sentry",
    "usage": "A metade de ferramental da prática de observabilidade de erros."
  },
  {
    "name": "Docker",
    "usage": "Imagens de container hardened e non-root para serviços de backend no GKE."
  },
  {
    "name": "Vitest",
    "usage": "A suite de testes unitários deste próprio site."
  },
  {
    "name": "Claude Code",
    "usage": "Construção de skills do Claude Code orientadas à segurança e um servidor MCP que orquestram mudanças reais de produção, não só autocomplete."
  }
]

export const principles: Principle[] = [
  {
    "id": "p1",
    "text": "Dados derivados eventualmente consistentes deveriam ter exatamente um caminho de computação.",
    "explanation": "Quando dois caminhos de código podem produzir o mesmo valor derivado, eles eventualmente discordam, porque retries, reordenação e falhas parciais garantem isso. Consistência não se alcança sincronizando computações; se alcança tornando todas menos uma impossíveis.",
    "origin": "Nascido ao debugar uma métrica voltada ao cliente que dois serviços computavam de forma independente na Dynamox.",
    "caseId": "single-computation-path",
    "applied": "Reaplicado no design de sincronização de workspace: um dono por tipo de entidade, todo o resto converge."
  },
  {
    "id": "p2",
    "text": "Um Design System só tem sucesso quando a adoção se torna o caminho mais fácil.",
    "explanation": "Padrões não falham por estarem errados; falham porque ignorá-los dá menos trabalho. Um design system precisa vencer soluções locais em esforço, então importar o componente tem que ser melhor do que escrever um.",
    "origin": "Construir o primeiro Design System da AQTech como estagiária sem autoridade para mandar em nada.",
    "caseId": "design-system",
    "applied": "A mesma lógica conduziu a adoção de observabilidade na Dynamox: ownership de triagem desenhado para ser mais leve do que ignorar erros."
  },
  {
    "id": "p3",
    "text": "Prefira sistemas provadamente corretos a sistemas engenhosos.",
    "explanation": "Um design cuja corretude decorre da estrutura (idempotência, ownership único, reversibilidade) não precisa de vigilância. Um design engenhoso que é correto sob suposições decai conforme as suposições decaem.",
    "origin": "Contrastando a abordagem do job de reconciliação (engenhosa, com vazamentos) com o redesign de dono único (enfadonho, hermético).",
    "caseId": "single-computation-path",
    "applied": "Correções de dados de produção: scripts reversíveis em três fases em vez de UPDATEs pontuais cuidadosos."
  },
  {
    "id": "p4",
    "text": "Uma dependência é um passivo de longo prazo, não um atalho.",
    "explanation": "Uma biblioteca economiza semanas agora e custa indefinidamente, através de upgrades, lacunas no comportamento central, e o roadmap de outra pessoa. Quanto mais perto um componente estiver do coração do seu domínio, mais forte o argumento para ser dono dele.",
    "origin": "Avaliar bibliotecas de seletor em árvore na AQTech e descobrir que todo candidato falhava em comportamento central.",
    "caseId": null,
    "applied": "O mesmo cálculo moldou o serviço de analytics: seja dona do caminho de query, alugue o motor de armazenamento."
  },
  {
    "id": "p5",
    "text": "Se um valor sempre pode ser recomputado a partir da fonte, prefira recomputação a sincronização.",
    "explanation": "Sincronização significa manter concordância entre cópias para sempre. Recomputação significa derivar a verdade da fonte sob demanda. A segunda é mais lenta por operação e drasticamente mais barata por ano.",
    "origin": "O design de sinal de desatualização: serviços sinalizam 'isso pode ter mudado' em vez de mandar valores computados por aí.",
    "caseId": "single-computation-path",
    "applied": "Guia toda decisão de cache e projeção que tomo desde então."
  },
  {
    "id": "p6",
    "text": "Os melhores padrões de engenharia são adotados voluntariamente.",
    "explanation": "Um padrão mandado é seguido enquanto alguém observa. Um padrão que vence pelo mérito, provado em telas reais e mais barato de seguir do que de pular, sobrevive à saída de sua autora. O meu sobreviveu.",
    "origin": "Os padrões do Design System da AQTech continuarem em uso depois que saí da empresa.",
    "caseId": "design-system",
    "applied": "Como introduzo toda prática desde então: evidência primeiro, adoção segundo, mandato nunca."
  },
  {
    "id": "p7",
    "text": "Code review é uma das ferramentas de aprendizado mais rápidas em engenharia de software.",
    "explanation": "Review comprime anos do julgamento de outra pessoa em comentários sobre o seu próprio trabalho. Levar feedback de review a sério, e depois dar feedback a sério, é o ciclo de aprendizado de maior densidade que conheço.",
    "origin": "Trabalho freelance sob um engenheiro experiente que tratava todo PR como um momento de ensino.",
    "caseId": null,
    "applied": "Como referência frontend na AQTech, review virou como eu ensinava o Design System."
  },
  {
    "id": "p8",
    "text": "Documentação deveria comunicar decisões, não só implementação.",
    "explanation": "Docs de implementação respondem 'o que é isso'. Docs de decisão respondem 'por que é isso e não a alternativa', a única pergunta que importa seis meses depois. Contexto, restrições, alternativas, trade-offs.",
    "origin": "Escrever a avaliação OLTP vs OLAP como um documento e ver isso encerrar debates antes que começassem.",
    "caseId": "analytics-service",
    "applied": "Toda essa base de conhecimento é o princípio aplicado a uma carreira."
  },
  {
    "id": "p9",
    "text": "Decida onde um novo estado é aplicado antes de decidir como cada consumidor o trata.",
    "explanation": "\"Todo caminho de leitura subtrai X\" é um cheiro de posicionamento, não um requisito. Se um estado pode ser aplicado uma vez na fronteira de escrita, todo consumidor existente se torna correto sem mudar, e todo consumidor futuro se torna correto sem saber que a regra existe. N compensações é o mesmo bug escrito N vezes.",
    "origin": "Um estado de \"ativo hibernado\" válido para toda a plataforma especificado como uma regra de exclusão para oito caminhos de leitura diferentes (contadores, payload do app, relatórios, impressão, adherence) quando poderia ser aplicado uma única vez removendo o ativo do escopo da rota.",
    "caseId": "hibernation-scope-removal",
    "applied": "A mesma pergunta fechou um join de warehouse por requisição: a hierarquia estava sendo resolvida em cada leitura quando o pipeline poderia materializá-la uma vez."
  },
  {
    "id": "p10",
    "text": "Uma validação que lê a mesma fonte da coisa que valida não consegue detectar ausência.",
    "explanation": "Checagens de divergência comparam duas derivações e passam quando concordam, e NULL concorda com NULL. Integridade precisa de ao menos um invariante de completude independente, verificado contra uma fonte diferente, ou uma classe inteira de dados ausentes permanece invisível enquanto o dashboard continua verde.",
    "origin": "Uma checagem de consistência de pipeline que comparava bruto contra curado usando o mesmo campo de evento, reportando concordância perfeita enquanto 79% das linhas estavam sem uma coluna derivada e 10% dos registros estavam sendo descartados por completo pela semântica de NULL do SQL.",
    "caseId": "materialized-hierarchy-and-backfill-residue",
    "applied": "Agora uma pergunta permanente sobre qualquer coluna derivada: o que garante que ela está populada, e essa garantia lê de outro lugar?"
  }
]

