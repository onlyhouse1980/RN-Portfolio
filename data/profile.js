export const profile = {
  name: 'Ryan Nyberg',
  location: 'Dresden, Germany',
  github: 'https://github.com/onlyhouse1980',
  linkedin: 'https://www.linkedin.com/in/ryan-nyberg',
  email: 'ryan@ryanernstnyberg.com',
  phone: '+49 15756424428',
  headline: 'Full-Stack JavaScript Developer · Next.js · React · Node.js',
  german: 'C2',
  subheadline: 'I build complete web products — frontend, backend, authentication, databases, APIs and deployment — with modern Next.js and AI-assisted engineering workflows.',
};

export const skills = [
  'JavaScript', 'Next.js 13–16', 'React', 'Node.js', 'MongoDB Atlas', 'Tailwind CSS',
  'Auth.js / NextAuth', 'OAuth 2.0', 'REST APIs', 'Vercel', 'Cloudinary', 'Upstash Redis',
  'Lemon Squeezy', 'PDF.js', 'pdf-lib', 'GSAP', 'Three.js', 'Git / GitHub'
];

export const projects = [
  {
    slug: 'water-utility-portal',
    title: 'Water Utility Customer & Admin Portal',
    category: 'Production-style full-stack product',
    stack: ['Next.js 16', 'React 19', 'JavaScript', 'TypeScript', 'MongoDB Atlas', 'Node.js'],
    repoUrl: 'https://github.com/onlyhouse1980/OBCG-Modern',
    liveUrl: 'https://obcg.org',
    summary: 'Customer dashboards, usage monitoring, billing-threshold calculations and an administrative meter-reading editor built around real operational workflows.',
    evidence: [
      'Dynamic customer routes and database-driven dashboards',
      'Usage and overage calculations based on billing thresholds',
      'Administrative grid editor with changed-value-only persistence',
      'MongoDB Atlas using the native Node.js driver'
    ],
    fit: ['Full-stack ownership', 'Next.js', 'Node.js', 'NoSQL', 'Product thinking']
  },
  {
    slug: 'contract-copilot',
    title: 'Contract Management Platform',
    category: 'SaaS / document workflow',
    stack: ['Next.js 15', 'React', 'MongoDB', 'Auth.js', 'Google OAuth', 'Upstash Redis', 'PDF.js'],
    summary: 'A contract-management product covering authenticated workflows, document processing, providers, evidence and scheduled application behavior.',
    evidence: [
      'Google OAuth authentication with Auth.js',
      'MongoDB-backed application entities and workflows',
      'PDF processing and document-related functionality',
      'Redis-backed functionality with Upstash'
    ],
    fit: ['Authentication', 'OAuth', 'Documents', 'APIs', 'SaaS workflows']
  },
  {
    slug: 'laser-svg-club',
    title: 'Digital Membership Platform',
    category: 'Subscription product',
    stack: ['Next.js 16', 'React', 'JavaScript', 'Lemon Squeezy', 'Vercel'],
    summary: 'Membership and digital-content platform with payment integration, protected functionality, preview generation and watermarking.',
    evidence: [
      'Membership and payment flows using Lemon Squeezy',
      'Protected member functionality and content delivery',
      'Digital preview and watermark generation',
      'Current Next.js App Router architecture'
    ],
    fit: ['Next.js 16', 'Payments', 'Product delivery', 'Vercel']
  },
  {
    slug: 'personal-assistant-pwa',
    title: 'Personal Assistant PWA',
    category: 'Responsive application',
    stack: ['Next.js', 'React', 'JavaScript', 'PWA'],
    summary: 'Installable productivity application combining scheduling, calendar and expense workflows for desktop and mobile use.',
    evidence: [
      'Reusable React UI components',
      'Responsive desktop/mobile experience',
      'Installable Progressive Web App behavior',
      'Workflow-oriented product design'
    ],
    fit: ['React', 'PWA', 'Responsive UI', 'Product UX']
  }
];

export const targets = {
  metanoia: {
    company: 'Metanoia IT Solutions',
    role: 'Fullstack Developer — AI & SaaS Startups',
    shortRole: 'Fullstack · AI & SaaS',
    sourceUrl: 'https://join.com/companies/metanoia-itde/16592360-fullstack-developer-m-w-d-ai-und-saas-startups',
    sourceLabel: 'Current JOIN posting',
    checked: '23 Aug 2026',
    status: 'Strong directional fit',
    employment: 'Employee · Remote',
    location: 'Remote',
    language: 'German B2+ required · C2 held',
    compensation: 'Not listed',
    pitch: 'The role sits directly at the intersection I am targeting: modern full-stack product work, SaaS, API integration and AI-native delivery. My strongest evidence today is in Next.js/React, Node.js application logic, NoSQL data models and end-to-end product workflows; production LLM integration and SQL are the areas I am deliberately expanding next.',
    whyCompany: 'Metanoia builds software for SaaS startups and explicitly expects engineers to move from product problem to scalable implementation. That is a better match for how I work than a narrow frontend-only role: I prefer owning a workflow across UI, server logic, data, integrations and deployment.',
    roleSignals: ['React / Next.js / Node.js', 'LLMs and AI APIs', 'SQL + NoSQL', 'Cloud services', 'Clean code / DevOps', 'German B2+'],
    match: [
      { requirement: 'Modern full-stack frameworks', status: 'Strong evidence', evidence: 'Multiple Next.js/React products with server-side application logic and database-backed workflows.' },
      { requirement: 'NoSQL databases', status: 'Strong evidence', evidence: 'MongoDB Atlas and native Node.js driver work in operational applications.' },
      { requirement: 'SaaS and API integration', status: 'Strong evidence', evidence: 'OAuth, payment, Google services, PDF/document workflows and third-party integrations.' },
      { requirement: 'AI-native engineering', status: 'Relevant workflow', evidence: 'AI-assisted architecture, implementation, debugging and iteration are part of my daily engineering workflow.' },
      { requirement: 'LLM / AI APIs in production', status: 'Expansion area', evidence: 'I do not present AI-assisted coding as production LLM integration. A public AI feature is the next portfolio addition.' },
      { requirement: 'SQL / cloud / DevOps depth', status: 'Expansion area', evidence: 'Current public proof is stronger in MongoDB and Vercel than PostgreSQL and infrastructure-heavy DevOps.' },
      { requirement: 'German', status: 'Meets requirement', evidence: 'German CEFR C2.' },
    ],
    projectSlugs: ['contract-copilot', 'water-utility-portal', 'laser-svg-club'],
    approach: [
      'Start with the user/business outcome and define the smallest production-worthy vertical slice.',
      'Keep AI functionality observable: capture inputs, model/configuration choices, outputs and failure modes rather than treating the model as a black box.',
      'Separate deterministic business rules from probabilistic LLM behavior so critical workflows stay testable.',
      'Ship in small increments, instrument what matters, and use real output to decide what to harden next.'
    ],
    questions: [
      'Which customer workflows are currently generating the most repeated engineering work across your SaaS clients?',
      'How do you evaluate LLM output quality today — manual review, golden sets, automated evals, or production telemetry?',
      'How much ownership does a developer have over deployment and production observation after a feature ships?'
    ],
    note: 'I would use the interview to show working products first, then discuss how I am extending that foundation into TypeScript, SQL and production AI integration.',
    resume: '/resumes/metanoia.pdf',
    application: '/applications/metanoia.pdf',
    applicationLabel: 'Tailored application note'
  },

  notarpartner: {
    company: 'NotarPartner',
    role: 'Junior Fullstack Engineer — TS, React, Next.js & AI',
    shortRole: 'Junior Fullstack · Legal Tech',
    sourceUrl: 'https://join.com/companies/notarpartnerde/16561348-junior-fullstack-engineer-m-w-d-ts-react-next-js-und-ai-100-remote',
    sourceLabel: 'Current JOIN posting',
    checked: '23 Aug 2026',
    status: 'High-priority application',
    employment: 'Employee · 100% remote Germany',
    location: 'Germany · occasional Hamburg/Berlin meetings',
    language: 'German C2 required · C2 held',
    compensation: '€50k–€65k incl. VSOP',
    pitch: 'This is one of the most relevant openings I found because NotarPartner explicitly accepts strong independently shipped projects instead of requiring formal experience. My contract/document workflow, authentication and database-backed application work maps naturally to legal-tech product problems, while TypeScript and PostgreSQL/Supabase are the two technical gaps I would address immediately.',
    whyCompany: 'The product turns document-heavy professional workflows into structured software. I have already built around contracts, evidence, PDF processing, authentication and operational data. I am not claiming notarial-domain expertise; I am showing that the underlying engineering problem — converting document and business workflows into reliable software — is familiar territory.',
    roleSignals: ['React / Next.js / TypeScript', 'Node.js services', 'PostgreSQL / Supabase or NoSQL', 'AI document workflows', 'Product ownership', 'German C2'],
    match: [
      { requirement: 'Independent full-stack projects', status: 'Strong evidence', evidence: 'Multiple products designed across UI, application logic, data models, auth and deployment.' },
      { requirement: 'React / Next.js', status: 'Strong evidence', evidence: 'Primary application stack across current projects, including App Router work through Next.js 16.' },
      { requirement: 'Document workflows', status: 'Strongly relevant', evidence: 'Contract-management application with PDF processing, evidence/provider entities and authenticated workflows.' },
      { requirement: 'Node.js + NoSQL', status: 'Relevant evidence', evidence: 'Server-side Next.js/Node.js logic with MongoDB Atlas and native driver usage.' },
      { requirement: 'TypeScript', status: 'Expansion area', evidence: 'Current strongest production-style work is JavaScript; I would not overstate TypeScript proficiency.' },
      { requirement: 'PostgreSQL / Supabase', status: 'Expansion area', evidence: 'Database experience is currently strongest in MongoDB; relational schema work needs public proof.' },
      { requirement: 'German C2', status: 'Meets requirement', evidence: 'German CEFR C2.' },
    ],
    projectSlugs: ['contract-copilot', 'water-utility-portal', 'laser-svg-club'],
    approach: [
      'Model the notarial workflow and domain rules explicitly before adding automation around them.',
      'Keep document generation deterministic where rules are known; use AI only where it adds measurable value and preserve human review for high-stakes output.',
      'Design tenant boundaries and authorization as first-class architecture rather than retrofitting them after growth.',
      'Build integrations behind narrow interfaces so XNP, Word and practice-software exports remain replaceable and testable.'
    ],
    questions: [
      'Which part of the current product creates the highest engineering risk as you scale from roughly 120 to 2,000 connected notaries?',
      'Where does the AI assistant currently sit between deterministic document rules and free-form model behavior?',
      'What would you want one of the first in-house engineers to own end-to-end during the first two months?'
    ],
    note: 'The posting says a CV or GitHub/LinkedIn profile is sufficient and no cover letter is required. This page is therefore designed to function as the supporting evidence layer behind the tailored CV.',
    resume: '/resumes/notarpartner.pdf',
    application: '/applications/notarpartner.pdf',
    applicationLabel: 'Optional application note'
  },

  krisenchat: {
    company: 'krisenchat',
    role: 'Midlevel Full Stack Engineer',
    shortRole: 'Full Stack · Mission-driven product',
    sourceUrl: 'https://de.linkedin.com/jobs/view/midlevel-full-stack-engineer-at-krisenchat-4449857000',
    sourceLabel: 'Current LinkedIn posting',
    checked: '23 Aug 2026',
    status: 'Stretch application with relevant product fit',
    employment: '40h/week · project-funded through 31 Dec 2026',
    location: 'Remote with German residence',
    language: 'English · German bonus',
    compensation: '€50k–€60k',
    pitch: 'The product and stack are compelling: Next.js/React/Tailwind, backend APIs and responsible AI inside a privacy-sensitive service. My relevant evidence is end-to-end Next.js product work, authentication, APIs and user workflows. I would treat the stated degree/3+ year requirement and production AI experience as real gaps, not keywords to disguise.',
    whyCompany: 'krisenchat is not an ordinary engagement product: reliability, privacy and responsible product decisions affect people in vulnerable situations. That makes disciplined workflow design and careful boundaries around AI more important than novelty. I would be interested in a role where engineering quality and user impact are visibly connected.',
    roleSignals: ['Next.js / React / TypeScript / Tailwind', 'Node.js or Python APIs', 'AI integration', 'Privacy and security', 'End-to-end ownership', 'Mission-driven collaboration'],
    match: [
      { requirement: 'Next.js / React', status: 'Strong evidence', evidence: 'Core stack across multiple full-stack products and responsive applications.' },
      { requirement: 'Tailwind / user-facing UI', status: 'Relevant evidence', evidence: 'Responsive React interfaces and Tailwind-based application work.' },
      { requirement: 'API / backend services', status: 'Relevant evidence', evidence: 'Node.js/Next.js server logic, MongoDB data flows, OAuth and third-party APIs.' },
      { requirement: 'Privacy-aware application work', status: 'Relevant foundation', evidence: 'Authentication, protected workflows and document-related data; I would not claim prior crisis-data production experience.' },
      { requirement: 'Production AI integration', status: 'Expansion area', evidence: 'AI-assisted development workflow is established; production model integration needs stronger public proof.' },
      { requirement: 'TypeScript', status: 'Expansion area', evidence: 'Current strongest public work is JavaScript-based.' },
      { requirement: 'Degree + 3+ years comparable role', status: 'Requirement gap', evidence: 'I would ask to be assessed on shipped project evidence rather than represent credentials I do not list.' },
    ],
    projectSlugs: ['contract-copilot', 'personal-assistant-pwa', 'water-utility-portal'],
    approach: [
      'Treat privacy, access control and data minimization as product requirements, not post-launch security work.',
      'For AI-assisted counseling features, define human escalation paths and explicit “model must not decide” boundaries before implementation.',
      'Measure quality with scenario-based evals and failure analysis, especially for safety-sensitive language and edge cases.',
      'Keep the user experience resilient when external models or services are slow, degraded or unavailable.'
    ],
    questions: [
      'Which AI use cases are already in production, and which are intentionally kept human-only?',
      'How do you test privacy and safety behavior across model/provider changes?',
      'What is the most important reliability problem in the core chat platform that this role should own first?'
    ],
    note: 'This is intentionally framed as a stretch application. The goal is to make the relevant evidence easy to evaluate while being explicit about the formal-experience and production-AI requirements.',
    resume: '/resumes/krisenchat.pdf',
    application: '/applications/krisenchat.pdf',
    applicationLabel: 'Tailored application note'
  },

  wynwood: {
    company: 'wynwood tech',
    role: 'Fullstack Developers — 100% Remote, 12+ Months',
    shortRole: 'Freelance Fullstack · Remote',
    sourceUrl: 'https://www.freelancermap.de/projekt/fullstack-developers-100-prozent-remote-asap-12-months',
    sourceLabel: 'Current Freelancermap posting',
    checked: '23 Aug 2026',
    status: 'Relevant contract target',
    employment: 'Freelance / contract · 12+ months',
    location: '100% remote · CET',
    language: 'German · C2 held',
    compensation: 'Rate not listed',
    pitch: 'The core request — JavaScript/TypeScript, React/Next.js, Node.js, APIs and headless CMS — overlaps substantially with my JavaScript/React/Next.js and integration work. My GitHub also contains Sanity and Auth0 experimentation, but I would label that accurately as exposure rather than production CMS expertise. The main screening gap is TypeScript depth and Playwright evidence.',
    whyCompany: 'This is a practical contracting match rather than a culture narrative: wynwood needs developers who can join a long-running client engagement, work independently during German business hours and integrate across frontend, backend and external systems. My application should therefore be concrete, scannable and evidence-heavy.',
    roleSignals: ['JavaScript + TypeScript', 'React + Next.js', 'Node.js', 'API integration', 'Sanity / Storyblok / Shopify', 'Auth0', 'Playwright'],
    match: [
      { requirement: 'Full-stack development', status: 'Strong evidence', evidence: 'Projects span React UI, Next.js server logic, MongoDB, authentication, APIs and deployment.' },
      { requirement: 'JavaScript', status: 'Strong evidence', evidence: 'Primary programming language across the current portfolio.' },
      { requirement: 'React / Next.js', status: 'Strong evidence', evidence: 'Primary frontend/application stack across multiple projects.' },
      { requirement: 'API integrations + Node.js', status: 'Strong evidence', evidence: 'OAuth, Google services, payments, database services and Node.js-backed application logic.' },
      { requirement: 'Sanity / Auth0', status: 'Repository exposure', evidence: 'Public/private GitHub history contains Sanity and Auth0 experiments; not presented as production client experience.' },
      { requirement: 'TypeScript', status: 'Expansion area', evidence: 'Needs stronger current public proof before I would score it as expert-level.' },
      { requirement: 'Storyblok / Shopify / Playwright', status: 'Not claimed', evidence: 'I would leave these uninflated rather than optimize the CV with unsupported keywords.' },
    ],
    projectSlugs: ['contract-copilot', 'water-utility-portal', 'laser-svg-club'],
    approach: [
      'Map the client architecture and integration boundaries first so changes fit the existing delivery model instead of imposing a rewrite.',
      'Make API contracts and error behavior explicit, especially when orchestrating CMS, commerce and identity services.',
      'Add or extend end-to-end tests around revenue-critical or frequently changing journeys before accelerating feature delivery.',
      'Use short written technical notes to keep distributed client teams aligned on assumptions, trade-offs and handover.'
    ],
    questions: [
      'Which headless platform is used in the specific client engagement attached to this opening?',
      'Is the team looking for feature ownership inside an existing product, migration work, or greenfield delivery?',
      'How much of the work is expected to be backend Node.js versus frontend/CMS integration?'
    ],
    note: 'wynwood explicitly asks applicants for 0–10 self-ratings across the stack. I would submit ratings only after calibrating them against concrete interview-level tasks; this page instead distinguishes strong evidence, exposure, expansion areas and skills not claimed.',
    resume: '/resumes/wynwood.pdf',
    application: '/applications/wynwood.pdf',
    applicationLabel: 'Tailored application note'
  },

  fastrocket: {
    company: 'FastRocket',
    role: 'Full-Stack Softwareentwickler — React/Next.js + Node.js',
    shortRole: 'Full Stack · Greenfield delivery',
    sourceUrl: 'https://join.com/companies/fastrocket/16583691-full-stack-softwareentwickler-m-w-d-react-next-js-oder-angular-nest-js-node-js-100-remote',
    sourceLabel: 'Current JOIN posting',
    checked: '23 Aug 2026',
    status: 'Technical overlap · credential stretch',
    employment: 'Employee · 100% remote Germany',
    location: 'Remote within Germany',
    language: 'German C2 + English · C2 German held',
    compensation: '€45k–€60k',
    pitch: 'The day-to-day engineering work is appealing: greenfield web applications, React/Next.js, Node.js, AI integration, direct customer coordination and “you build it, you run it” ownership. My project evidence supports the product and integration side strongly; the gaps are TypeScript/Nest.js, Docker/CI/CD proof and the posting’s explicit formal IT education plus post-training experience requirement.',
    whyCompany: 'FastRocket develops custom applications for mid-sized clients rather than a single narrow product. That rewards engineers who can understand a workflow quickly, cross frontend/backend boundaries and communicate directly with users or customers — exactly the type of end-to-end work I want to emphasize.',
    roleSignals: ['React / Next.js', 'Node.js + TypeScript / Nest.js', 'Azure OpenAI + prompting', 'Docker + Bitbucket CI/CD', 'Claude Code', 'Client communication', 'German C2'],
    match: [
      { requirement: 'React / Next.js', status: 'Strong evidence', evidence: 'Primary application stack with multiple complete project examples.' },
      { requirement: 'Node.js / backend', status: 'Relevant evidence', evidence: 'Server-side Next.js/Node.js application logic, APIs, database work and authentication.' },
      { requirement: 'Client-facing product delivery', status: 'Relevant evidence', evidence: 'Operational portals and workflow tools built around concrete user/business requirements.' },
      { requirement: 'AI-assisted engineering', status: 'Relevant workflow', evidence: 'AI tools are integrated into architecture, implementation, debugging and iteration.' },
      { requirement: 'TypeScript / Nest.js', status: 'Expansion area', evidence: 'Needs stronger current proof; I would not label JavaScript experience as TypeScript expertise.' },
      { requirement: 'Docker / CI/CD / cloud', status: 'Expansion area', evidence: 'Deployment experience is currently strongest with Vercel; infrastructure-heavy proof needs to be added.' },
      { requirement: 'Formal IT education + 3 years after training/study', status: 'Credential gap to verify', evidence: 'The portfolio does not present a qualifying formal IT credential; I would ask whether equivalent project experience can be considered.' },
      { requirement: 'German C2', status: 'Meets requirement', evidence: 'German CEFR C2.' },
    ],
    projectSlugs: ['water-utility-portal', 'contract-copilot', 'laser-svg-club'],
    approach: [
      'Translate customer requirements into a thin vertical slice before committing to a larger architecture.',
      'Keep backend contracts explicit and frontend states resilient to partial failures and changing APIs.',
      'Treat CI/CD, containerization and observability as part of delivery ownership rather than separate operations work.',
      'Use AI coding tools for speed, but preserve code review, tests and documentation as the quality gate.'
    ],
    questions: [
      'How often do developers work directly with customer stakeholders during discovery and iteration?',
      'What does your typical greenfield baseline include for testing, Docker, CI/CD and observability?',
      'Would you consider strong equivalent project evidence where the formal IT training requirement is not met exactly?'
    ],
    note: 'The technical overlap is real, but the credential requirement should be resolved early. This page is designed to make it easy to judge the engineering evidence before deciding whether that requirement is flexible.',
    resume: '/resumes/fastrocket.pdf',
    application: '/applications/fastrocket.pdf',
    applicationLabel: 'Tailored application note'
  }
};
