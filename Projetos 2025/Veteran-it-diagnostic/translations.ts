import { Language } from './types';

type Translation = {
  tagline: string;
  heroTitle: string;
  heroTitleSpan: string;
  heroDesc: string;

  startDiagnosis: string;

  formLabel: string;
  formQuote: string;
  formPlaceholder: string;
  btnAnalyze: string;
  btnAnalyzing: string;

  reportTitle: string;
  recTitle: string;
  signOff: string;

  navPortfolio: string;
  navPrinciples: string;
  navContact: string;

  whyTitle: string;
  whySub: string;
  why1: string;
  why2: string;
  why3: string;

  principlesSectionTitle: string;
  principle1Title: string;
  principle1Text: string;
  principle2Title: string;
  principle2Text: string;
  principle3Title: string;
  principle3Text: string;

  contactTitle: string;
  contactName: string;
  contactRole: string;

  footerCopyright: string;
};

export const translations: Record<Language, Translation> = {
  pt: {
    tagline: "Consultoria Técnica de IA para Engenharia",
    heroTitle: "Diagnósticos Reais para",
    heroTitleSpan: "Sistemas Complexos.",
    heroDesc:
      "Sem modismos ou camadas de abstração inúteis. Apenas engenharia sólida, princípios de arquitetura clássica e experiência técnica real.",

    startDiagnosis: "Iniciar Diagnóstico",

    formLabel: "Descreva o Cenário Técnico",
    formQuote:
      "\"Se você não consegue explicar o problema em termos de engenharia, você ainda não entendeu o sistema.\"",
    formPlaceholder:
      "Ex: Vazamento de memória em clusters Node.js ou gargalos em queries SQL complexas...",
    btnAnalyze: "Gerar Diagnóstico",
    btnAnalyzing: "Processando...",

    reportTitle: "Relatório de Engenharia",
    recTitle: "Plano de Ação Técnica",
    signOff: "Veteran IT Engineering - Leandro Timóteo",

    navPortfolio: "Portfólio",
    navPrinciples: "Princípios",
    navContact: "Contato",

    whyTitle: "Por que Veteran IT?",
    whySub: "A experiência é o único atalho real.",
    why1: "Identificamos gargalos onde outros veem normalidade.",
    why2: "Simplicidade operacional acima de tudo.",
    why3: "Otimização focada em fundamentos.",

    principlesSectionTitle: "Manifesto Veteran IT",
    principle1Title: "Simplicidade sobre Abstração",
    principle1Text:
      "Cada camada de abstração é uma nova oportunidade para bugs. Use a ferramenta mais simples que resolve o problema.",
    principle2Title: "Confiabilidade como Padrão",
    principle2Text:
      "Se não é testado e monitorado, está quebrado. Sistemas críticos não aceitam suposições.",
    principle3Title: "Domínio da Base",
    principle3Text:
      "Frameworks mudam. O Modelo OSI e Estruturas de Dados são eternos. Domine a base para dominar o topo.",

    contactTitle: "Engenharia & Contato",
    contactName: "Leandro Timóteo",
    contactRole: "Analista de Sistemas / Software Engineer",

    footerCopyright:
      "© 2024 Veteran IT Diagnostic. Leandro Timóteo ADS."
  },

  en: {
    tagline: "AI-Powered Technical Engineering Consultant",
    heroTitle: "Real Diagnostics for",
    heroTitleSpan: "Complex Systems.",
    heroDesc:
      "No buzzwords or useless abstractions. Just solid engineering, classic architecture principles, and real technical experience.",

    startDiagnosis: "Start Diagnosis",

    formLabel: "Describe the Technical Scenario",
    formQuote:
      "\"If you can't explain the problem in engineering terms, you don't understand it yet.\"",
    formPlaceholder:
      "Ex: Memory leaks in Node.js clusters or bottlenecks in complex SQL queries...",
    btnAnalyze: "Generate Diagnosis",
    btnAnalyzing: "Processing...",

    reportTitle: "Engineering Report",
    recTitle: "Technical Action Plan",
    signOff: "Veteran IT Engineering - Leandro Timóteo",

    navPortfolio: "Portfolio",
    navPrinciples: "Principles",
    navContact: "Contact",

    whyTitle: "Why Veteran IT?",
    whySub: "Experience is the only real shortcut.",
    why1: "We find bottlenecks where others see normality.",
    why2: "Operational simplicity above all.",
    why3: "Optimization focused on fundamentals.",

    principlesSectionTitle: "Veteran IT Manifesto",
    principle1Title: "Simplicity over Abstraction",
    principle1Text:
      "Every abstraction layer is a new opportunity for bugs. Use the simplest tool that solves the problem.",
    principle2Title: "Reliability as Standard",
    principle2Text:
      "If it's not tested and monitored, it's broken. Critical systems don't accept assumptions.",
    principle3Title: "Base Mastery",
    principle3Text:
      "Frameworks change. The OSI Model and Data Structures are eternal. Master the base to master the top.",

    contactTitle: "Engineering & Contact",
    contactName: "Leandro Timóteo",
    contactRole: "Systems Analyst / Software Engineer",

    footerCopyright:
      "© 2024 Veteran IT Diagnostic. Leandro Timóteo ADS."
  }
};


