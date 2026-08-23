export const recruiterProfile = {
  "name": "Ryan Nyberg",
  "email": "ryan@ryanernstnyberg.com",
  "phone": "+49 15756424428",
  "location": "Dresden, Germany",
  "german": "C2",
  "linkedin": "https://www.linkedin.com/in/ryan-nyberg",
  "github": "https://github.com/onlyhouse1980",
  "portfolio": "https://anewshade.de"
};

export const recruiterTargets = {
  "metanoia": {
    "company": "Metanoia IT Solutions",
    "role": "Fullstack Developer — AI & SaaS Startups",
    "shortRole": "Fullstack · AI & SaaS",
    "sourceUrl": "https://join.com/companies/metanoia-itde/16592360-fullstack-developer-m-w-d-ai-und-saas-startups",
    "checked": "23 Aug 2026",
    "workModel": "Employee · Remote",
    "location": "Remote",
    "language": "German B2+ required · C2 held",
    "compensation": "Not listed",
    "pitch": "My recent work now overlaps strongly with the role's core: Next.js/React product engineering, Node-backed integrations, production-style LLM APIs, PostgreSQL/NoSQL and SaaS workflows.",
    "whyCompany": "Metanoia's mix of SaaS startup delivery and AI-enabled product work fits the way I build: start with the user workflow, own the vertical slice across interface/server/data/integrations, and ship something operational rather than stopping at a frontend prototype.",
    "roleSignals": [
      "React / Next.js / Node.js",
      "LLM & AI APIs",
      "SQL + NoSQL",
      "SaaS delivery",
      "Cloud integrations",
      "German B2+"
    ],
    "match": [
      {
        "requirement": "React / Next.js / full-stack delivery",
        "status": "Strong evidence",
        "evidence": "AdminPilot, Fine Truth, LaunchPad and OBCG show end-to-end product ownership across UI, server behavior, data and deployment."
      },
      {
        "requirement": "LLM / AI API integration",
        "status": "Strong evidence",
        "evidence": "AdminPilot and Fine Truth use Vercel AI SDK + Gemini in application workflows; other current projects also integrate Gemini/Claude."
      },
      {
        "requirement": "SQL and NoSQL",
        "status": "Strong evidence",
        "evidence": "PostgreSQL/Supabase/Neon through LaunchPad, AdminPilot and Kanzlei; MongoDB in OBCG."
      },
      {
        "requirement": "SaaS + external APIs",
        "status": "Strong evidence",
        "evidence": "Stripe, SendGrid, Resend, Firebase, Firecrawl, Supabase and other third-party services are part of current projects."
      },
      {
        "requirement": "Cloud / DevOps depth",
        "status": "Relevant evidence",
        "evidence": "Vercel/Render deployments and webhook/service integrations are proven; infrastructure-heavy Kubernetes-style operations are not claimed."
      },
      {
        "requirement": "German",
        "status": "Meets requirement",
        "evidence": "German CEFR C2."
      }
    ],
    "projectSlugs": [
      "adminpilot",
      "fine-truth",
      "launchpad"
    ],
    "approach": [
      "Define one production-worthy vertical slice around the user/business outcome before expanding architecture.",
      "Keep deterministic business rules separate from probabilistic model behavior.",
      "Add observability around prompts, model configuration, outputs and failure modes.",
      "Ship in short increments and use real behavior to decide what deserves hardening next."
    ],
    "questions": [
      "Which SaaS customer workflows currently benefit most from LLM integration rather than deterministic automation?",
      "How do you evaluate model-output quality today: manual review, golden sets, automated evals or production telemetry?",
      "How much ownership does a developer retain over deployment and production observation after a feature ships?"
    ],
    "note": "This page leads with shipped AI/SaaS evidence and intentionally distinguishes application engineering from infrastructure areas I would still need to ramp into.",
    "resumePdf": "/recruiter/resumes/metanoia.pdf",
    "resumeDocx": "/recruiter/resumes/metanoia.docx",
    "applicationPdf": "/recruiter/applications/metanoia.pdf",
    "applicationDocx": "/recruiter/applications/metanoia.docx"
  },
  "notarpartner": {
    "company": "NotarPartner",
    "role": "Junior Fullstack Engineer — TS, React, Next.js & AI",
    "shortRole": "Junior Fullstack · Legal Tech",
    "sourceUrl": "https://join.com/companies/notarpartnerde/16561348-junior-fullstack-engineer-m-w-d-ts-react-next-js-und-ai-100-remote",
    "checked": "23 Aug 2026",
    "workModel": "Employee · 100% remote Germany",
    "location": "Germany · occasional Hamburg/Berlin meetings",
    "language": "German C2 required · C2 held",
    "compensation": "€50k–€65k incl. VSOP",
    "pitch": "This role is unusually aligned with my current portfolio: TypeScript/Next.js, PostgreSQL, document-heavy professional workflows and AI-assisted processing are all represented in shipped or public-facing projects.",
    "whyCompany": "The underlying NotarPartner problem is not simply 'build a website'; it is to turn document-heavy professional workflows into reliable software. Kanzlei Intake Suite, AdminPilot and OBCG demonstrate exactly that kind of workflow translation across authenticated interfaces, data models, documents and operational administration.",
    "roleSignals": [
      "React / Next.js / TypeScript",
      "Node.js",
      "PostgreSQL / Supabase",
      "AI document workflows",
      "Independent projects",
      "German C2"
    ],
    "match": [
      {
        "requirement": "Strong independently shipped projects",
        "status": "Strong evidence",
        "evidence": "Multiple complete products are live and span UI, backend logic, auth, databases, documents, payments and deployment."
      },
      {
        "requirement": "React / Next.js / TypeScript",
        "status": "Strong evidence",
        "evidence": "ERechnungFix, Fine Truth and LaunchPad provide current TypeScript evidence; Next.js/React is the primary portfolio stack."
      },
      {
        "requirement": "PostgreSQL / Supabase",
        "status": "Strong evidence",
        "evidence": "LaunchPad uses Supabase/Postgres; AdminPilot uses Neon Postgres/Prisma; Kanzlei also uses Prisma/PostgreSQL."
      },
      {
        "requirement": "AI + document/professional workflows",
        "status": "Strongly relevant",
        "evidence": "AdminPilot processes PDFs/emails with AI; Kanzlei combines secure documents, internal AI analysis and PDF exports."
      },
      {
        "requirement": "Node.js / backend ownership",
        "status": "Relevant evidence",
        "evidence": "Server-side Next.js/Node logic, route handlers, webhooks, auth and external API integrations appear across current products."
      },
      {
        "requirement": "German C2",
        "status": "Meets requirement",
        "evidence": "German CEFR C2."
      },
      {
        "requirement": "Notarial-domain knowledge",
        "status": "Ramp-up area",
        "evidence": "Legal-tech workflow experience is relevant, but notarial-domain expertise is not claimed."
      }
    ],
    "projectSlugs": [
      "kanzlei",
      "adminpilot",
      "obcg"
    ],
    "approach": [
      "Map the notarial workflow and invariants before translating screens into code.",
      "Treat document provenance, access control and auditability as first-class product requirements.",
      "Use AI for extraction/drafting where outputs remain reviewable; keep legal/business rules deterministic.",
      "Build one complete document workflow end-to-end before widening the product surface."
    ],
    "questions": [
      "Which notarial workflow currently creates the most duplicated manual data entry?",
      "Where do you draw the boundary between deterministic document logic and AI-assisted extraction or drafting?",
      "What would you expect a new engineer to own independently in the first 60–90 days?"
    ],
    "note": "NotarPartner explicitly values strong self-directed project evidence. The page therefore emphasizes working systems and domain-adjacent workflows rather than credential theater.",
    "resumePdf": "/recruiter/resumes/notarpartner.pdf",
    "resumeDocx": "/recruiter/resumes/notarpartner.docx",
    "applicationPdf": "/recruiter/applications/notarpartner.pdf",
    "applicationDocx": "/recruiter/applications/notarpartner.docx"
  },
  "krisenchat": {
    "company": "krisenchat",
    "role": "Midlevel Full-Stack Engineer",
    "shortRole": "Full Stack · Realtime & AI",
    "sourceUrl": "https://de.linkedin.com/jobs/view/midlevel-full-stack-engineer-at-krisenchat-4449857000",
    "checked": "23 Aug 2026",
    "workModel": "Employee · Remote in Germany",
    "location": "Germany",
    "language": "German/English role environment · German C2 held",
    "compensation": "€50k–€60k",
    "pitch": "The technical overlap is real: realtime communication, Next.js/React, TypeScript, privacy-sensitive workflows and constrained AI behavior are all represented in current project work. The formal experience/degree criteria remain the part I would not try to disguise.",
    "whyCompany": "krisenchat is not a place where AI can be treated as a novelty layer. The appeal is precisely the opposite: reliability, privacy, escalation boundaries and careful product behavior matter. My strongest evidence here is the combination of realtime interaction work and projects where AI output is deliberately constrained by the workflow.",
    "roleSignals": [
      "Next.js / React / TypeScript",
      "Realtime communication",
      "AI integration",
      "Privacy & safety",
      "Product reliability",
      "Comparable experience"
    ],
    "match": [
      {
        "requirement": "Next.js / React / TypeScript",
        "status": "Strong evidence",
        "evidence": "Multiple current Next.js 16/React 19 products use TypeScript, including Fine Truth and ERechnungFix."
      },
      {
        "requirement": "Realtime communication",
        "status": "Strong evidence",
        "evidence": "Can We Talk? uses live Firestore message/presence/typing streams with shared and private conversation spaces."
      },
      {
        "requirement": "Production-style AI integration",
        "status": "Strong evidence",
        "evidence": "AdminPilot, Fine Truth and Can We Talk? integrate LLM behavior into application workflows."
      },
      {
        "requirement": "Privacy / guardrails",
        "status": "Relevant evidence",
        "evidence": "Kanzlei constrains AI to internal drafts and authenticated document access; ERechnungFix uses privacy-first client-side processing."
      },
      {
        "requirement": "Degree + comparable midlevel experience",
        "status": "Credential gap",
        "evidence": "I would ask to be assessed on shipped product evidence rather than imply credentials not represented in my application."
      }
    ],
    "projectSlugs": [
      "can-we-talk",
      "adminpilot",
      "kanzlei"
    ],
    "approach": [
      "Define failure and escalation behavior before adding new AI-assisted interaction.",
      "Treat privacy, access control and data minimization as product requirements, not cleanup work.",
      "Use scenario-based evals for model behavior and preserve explicit 'model must not decide' boundaries.",
      "Keep core communication resilient when models or external services are slow or unavailable."
    ],
    "questions": [
      "Which AI-assisted use cases are already considered production-safe, and which remain intentionally human-only?",
      "How do you test safety/privacy behavior when model providers or model versions change?",
      "What reliability issue in the core communication platform would this role own first?"
    ],
    "note": "This is intentionally transparent about the formal-experience requirement while making the realtime, AI and privacy-adjacent engineering evidence easy to inspect.",
    "resumePdf": "/recruiter/resumes/krisenchat.pdf",
    "resumeDocx": "/recruiter/resumes/krisenchat.docx",
    "applicationPdf": "/recruiter/applications/krisenchat.pdf",
    "applicationDocx": "/recruiter/applications/krisenchat.docx"
  },
  "wynwood": {
    "company": "wynwood tech",
    "role": "Fullstack Developers — 100% Remote, 12+ Months",
    "shortRole": "Freelance Fullstack · Remote",
    "sourceUrl": "https://www.freelancermap.de/projekt/fullstack-developers-100-prozent-remote-asap-12-months",
    "checked": "23 Aug 2026",
    "workModel": "Freelance / contract · 12+ months",
    "location": "100% remote · CET",
    "language": "German · C2 held",
    "compensation": "Rate not listed",
    "pitch": "The strongest match is practical: JavaScript/TypeScript, React/Next.js, Node-backed APIs and long-running product ownership are all represented. CMS/Auth0 exposure exists in my wider repository history; Playwright/Shopify depth is not inflated.",
    "whyCompany": "For a long-running client engagement, the useful question is whether I can enter an existing architecture, understand integration boundaries and ship without demanding a rewrite. My current work demonstrates that across auth, data, payments, AI services, documents and external APIs.",
    "roleSignals": [
      "JavaScript + TypeScript",
      "React + Next.js",
      "Node.js",
      "API integration",
      "Headless CMS",
      "Auth0",
      "Playwright"
    ],
    "match": [
      {
        "requirement": "JavaScript / TypeScript",
        "status": "Strong evidence",
        "evidence": "JavaScript is the long-running base language; several current applications use TypeScript in production-style builds."
      },
      {
        "requirement": "React / Next.js",
        "status": "Strong evidence",
        "evidence": "Primary application stack across current portfolio work."
      },
      {
        "requirement": "Node.js / API integrations",
        "status": "Strong evidence",
        "evidence": "External services include Stripe, Gemini, Firebase, Firecrawl, SendGrid, Supabase and database-backed route handlers."
      },
      {
        "requirement": "PostgreSQL / backend data",
        "status": "Strong evidence",
        "evidence": "Supabase, Neon and Prisma/PostgreSQL appear in current full-stack projects."
      },
      {
        "requirement": "Sanity / Auth0",
        "status": "Repository exposure",
        "evidence": "Earlier GitHub work includes Sanity and Auth0 experiments; not represented as client production experience."
      },
      {
        "requirement": "Storyblok / Shopify / Playwright",
        "status": "Not claimed",
        "evidence": "These keywords are deliberately left uninflated."
      }
    ],
    "projectSlugs": [
      "launchpad",
      "erechnungfix",
      "obcg"
    ],
    "approach": [
      "Map the client architecture and service boundaries before making changes.",
      "Make API contracts and failure behavior explicit when integrating CMS, commerce and identity services.",
      "Prioritize tests around revenue-critical and frequently changing journeys.",
      "Use short written technical notes to keep a distributed client team aligned."
    ],
    "questions": [
      "Which CMS/commerce platform is actually used in the client engagement attached to this opening?",
      "Is the first phase feature delivery, migration work or platform stabilization?",
      "How is the frontend/backend split expected to look week to week?"
    ],
    "note": "The page is designed for a client-facing contract review: strong evidence is separated from historical exposure and skills that are not claimed.",
    "resumePdf": "/recruiter/resumes/wynwood.pdf",
    "resumeDocx": "/recruiter/resumes/wynwood.docx",
    "applicationPdf": "/recruiter/applications/wynwood.pdf",
    "applicationDocx": "/recruiter/applications/wynwood.docx"
  },
  "fastrocket": {
    "company": "FastRocket",
    "role": "Full-Stack Softwareentwickler — React/Next.js + Node.js",
    "shortRole": "Full Stack · Greenfield delivery",
    "sourceUrl": "https://join.com/companies/fastrocket/16583691-full-stack-softwareentwickler-m-w-d-react-next-js-oder-angular-nest-js-node-js-100-remote",
    "checked": "23 Aug 2026",
    "workModel": "Employee · 100% remote Germany",
    "location": "Remote within Germany",
    "language": "German C2 + English · German C2 held",
    "compensation": "€45k–€60k",
    "pitch": "Greenfield Next.js work, Node-backed services, AI integrations and customer-facing product ownership are a strong technical overlap. Azure OpenAI/Nest.js and the explicit formal-IT credential requirement are the areas I would address directly rather than hide.",
    "whyCompany": "Custom software for mid-sized clients rewards the engineering behavior I want to sell: understand the workflow quickly, own a complete vertical slice, communicate directly and stay responsible after deployment.",
    "roleSignals": [
      "React / Next.js",
      "Node.js + TypeScript / Nest.js",
      "AI integration",
      "Docker + CI/CD",
      "Customer communication",
      "German C2"
    ],
    "match": [
      {
        "requirement": "React / Next.js",
        "status": "Strong evidence",
        "evidence": "Primary stack across multiple complete applications."
      },
      {
        "requirement": "Node.js / backend",
        "status": "Strong evidence",
        "evidence": "Route handlers, webhooks, auth, data access and external-service orchestration across current projects."
      },
      {
        "requirement": "TypeScript",
        "status": "Relevant evidence",
        "evidence": "Fine Truth, ERechnungFix and LaunchPad provide current TypeScript application evidence."
      },
      {
        "requirement": "AI integration",
        "status": "Strong evidence",
        "evidence": "Gemini/Claude-backed application workflows are live in multiple projects; Azure OpenAI specifically is not claimed."
      },
      {
        "requirement": "Docker / Bitbucket CI/CD / Nest.js",
        "status": "Ramp-up area",
        "evidence": "Current strongest deployment proof is Vercel/Render and GitHub-oriented workflow, not this exact toolchain."
      },
      {
        "requirement": "Formal IT education + post-training experience",
        "status": "Credential gap",
        "evidence": "I would ask whether equivalent shipped project evidence can be considered."
      },
      {
        "requirement": "German C2",
        "status": "Meets requirement",
        "evidence": "German CEFR C2."
      }
    ],
    "projectSlugs": [
      "obcg",
      "adminpilot",
      "fine-truth"
    ],
    "approach": [
      "Translate customer requirements into one thin vertical slice before scaling the architecture.",
      "Keep backend contracts explicit and frontend states resilient to partial failures.",
      "Treat observability, CI/CD and deployment as part of delivery ownership.",
      "Use AI coding tools for speed while keeping review, tests and documentation as quality gates."
    ],
    "questions": [
      "How often do developers work directly with client stakeholders during discovery and iteration?",
      "What is your greenfield baseline for tests, Docker, CI/CD and observability?",
      "Would you consider strong equivalent project evidence where the formal IT training requirement is not met exactly?"
    ],
    "note": "The technical overlap is substantial; the credential requirement should be resolved early. The page makes that distinction clear before either side invests heavily in the process.",
    "resumePdf": "/recruiter/resumes/fastrocket.pdf",
    "resumeDocx": "/recruiter/resumes/fastrocket.docx",
    "applicationPdf": "/recruiter/applications/fastrocket.pdf",
    "applicationDocx": "/recruiter/applications/fastrocket.docx"
  }
};
