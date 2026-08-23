export const recruiterProjects = [
  {
    "slug": "obcg",
    "title": "OBCG Customer & Administration Portal",
    "category": "Operational full-stack product",
    "stack": [
      "Next.js 16",
      "React 19",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "NextAuth"
    ],
    "summary": "A public community site plus authenticated customer and administration workflows for water usage, billing visibility, meter lookup and meter-reading administration.",
    "evidence": [
      "Database-backed customer dashboards for water usage and overage visibility.",
      "Authenticated signup, login, password-reset and customer/admin workflows.",
      "Spreadsheet-style meter-reading administration backed by MongoDB.",
      "Current public repository documents Next.js 16, React 19, JavaScript/TypeScript, MongoDB, Mongoose and App Router route handlers."
    ],
    "liveUrl": "https://obcg.org",
    "repoUrl": "https://github.com/onlyhouse1980/OBCG-Modern"
  },
  {
    "slug": "adminpilot",
    "title": "AdminPilot",
    "category": "AI-native life-admin PWA",
    "stack": [
      "Next.js 16",
      "React 19",
      "Vercel AI SDK",
      "Gemini",
      "Clerk",
      "Neon Postgres",
      "Prisma",
      "SendGrid",
      "PWA"
    ],
    "summary": "A mobile-first application that turns raw text, PDFs and forwarded emails into structured tasks, deadlines, amounts and response drafts.",
    "evidence": [
      "Production-style LLM integration using Vercel AI SDK with Google Gemini.",
      "Neon Serverless Postgres with Prisma for structured application data.",
      "Inbound email automation through SendGrid webhooks.",
      "Installable/offline PWA behavior with a mobile-first interaction model."
    ],
    "liveUrl": "https://adminpilot.ryanernstnyberg.com",
    "repoUrl": null
  },
  {
    "slug": "kanzlei",
    "title": "Kanzlei Intake Suite",
    "category": "Legal-tech workflow SaaS",
    "stack": [
      "Next.js 16",
      "React 19",
      "Prisma",
      "PostgreSQL",
      "Gemini",
      "Stripe",
      "Resend",
      "Vercel Blob",
      "pdf-lib"
    ],
    "summary": "Bilingual legal-intake SaaS for German and US law firms covering client intake, secure documents, role-based workspaces, internal AI analysis and lawyer-ready PDF exports.",
    "evidence": [
      "Jurisdiction-aware German/EU and US workflows with localized privacy/disclaimer behavior.",
      "Prisma/PostgreSQL data layer and authenticated private firm workspaces.",
      "AI outputs constrained to internal attorney work drafts with explicit guardrails.",
      "Stripe, Resend, Vercel Blob and PDF workflows integrated into one product."
    ],
    "liveUrl": "https://kanzlei-intake-suite.online",
    "repoUrl": null
  },
  {
    "slug": "erechnungfix",
    "title": "ERechnungFix",
    "category": "German e-invoicing product",
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "fast-xml-parser"
    ],
    "summary": "Privacy-first browser application for reading, validating and generating German XRechnung and ZUGFeRD electronic invoices.",
    "evidence": [
      "Current TypeScript application built on Next.js 16 and React 19.",
      "Complex XML parsing across CII/UBL-style invoice structures.",
      "Client-side privacy architecture keeps sensitive invoice data out of an application server.",
      "Domain-specific validation rules turned into understandable product feedback."
    ],
    "liveUrl": "https://erechnungfix-mvp.vercel.app",
    "repoUrl": null
  },
  {
    "slug": "fine-truth",
    "title": "Fine Truth",
    "category": "AI web-audit product",
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Vercel AI SDK",
      "Gemini",
      "Firecrawl",
      "Node.js",
      "Render"
    ],
    "summary": "A multilingual website-audit application that retrieves live site content and uses an LLM-backed rubric to identify predatory contract patterns and return a neutral trust assessment.",
    "evidence": [
      "TypeScript + Next.js 16 product with production-style AI API orchestration.",
      "External scraping layer and standalone Node service.",
      "Region-aware and multilingual interface.",
      "Strict CSP and failure-aware integration across multiple external services."
    ],
    "liveUrl": "https://consumer-watchdog.vercel.app",
    "repoUrl": null
  },
  {
    "slug": "launchpad",
    "title": "LaunchPad",
    "category": "SaaS deployment platform",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL",
      "Stripe",
      "JSZip"
    ],
    "summary": "A SaaS template deployment platform with project vaults, server-side credential storage, Stripe payments and activation enforcement.",
    "evidence": [
      "TypeScript full-stack application with Supabase Auth and PostgreSQL.",
      "Stripe Checkout/webhooks and server-side account state.",
      "Server-side credential vault and downloadable full-stack template workflow.",
      "Multi-layer activation model spanning build-time and runtime checks."
    ],
    "liveUrl": "https://saas-boilerplate-xi-rose.vercel.app",
    "repoUrl": null
  },
  {
    "slug": "can-we-talk",
    "title": "Can We Talk?",
    "category": "Realtime AI-assisted communication",
    "stack": [
      "Next.js 15",
      "React 19",
      "Firebase",
      "Firestore",
      "Gemini",
      "Realtime streams",
      "i18n"
    ],
    "summary": "A real-time two-person communication app with a shared conversation, private preparation spaces and an AI mediator that intervenes only when predefined conditions are met.",
    "evidence": [
      "Realtime Firestore streams for messages, presence and typing state.",
      "Anonymous authentication and instantly shareable sessions.",
      "Constrained AI intervention behavior rather than unrestricted chatbot output.",
      "Multilingual UI and explicit separation between shared and private spaces."
    ],
    "liveUrl": "https://therapy.anewshade.de",
    "repoUrl": null
  }
];
