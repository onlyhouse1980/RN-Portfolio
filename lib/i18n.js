'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const translations = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
      switchLabel: 'Switch language',
    },
    hero: {
      tag: 'Available for work — 2026',
      title: ['FULL', 'STACK', 'DEV'],
      subtitle:
        'I build fast, scalable, and visually striking digital experiences using Next.js, React, and modern web technologies.',
      scroll: 'Scroll',
      quote: {
        eyebrow: 'A reader’s note',
        body: 'Step into the world of a developer who treats code not just as a utility but as a discipline… it reads less like a resume and more like a technical thriller.',
      },
    },
    about: {
      label: 'About Me',
      heading: ['Engineering the', 'Web'],
      text:
        "I develop high-performance, end-to-end web applications. From responsive user interfaces to resilient backend systems, my focus is on delivering seamless, high-quality digital experiences.",
      stats: [
        { num: '10+', target: '10', suffix: '+', label: 'Years of Experience' },
        { num: '100%', target: '100', suffix: '%', label: 'On-Time Delivery' },
      ],
    },
    sectionLines: {
      work: '02 — Selected Work',
      skills: '03 — Skills & Tech',
    },
    projects: {
      heading: ['Selected', 'Work'],
      countSuffix: 'projects',
      items: {
        '01': {
          title: 'BarStart DE\nRef. App',
          desc:
            `German-language bartending training PWA built mobile-first for new bartenders and trainees. The app teaches cocktail fundamentals through a recipe library, “Bar Basics” modules, and a gamified quiz system with progress tracking, mistake review, streaks, and a virtual tip jar.

Built with Next.js 16 App Router, React 19, TypeScript, React Native Web, custom SVG illustrations, service workers, web app manifest, Vercel Analytics, Google Analytics, and GTM, it is installable on iOS/Android and works fully offline.

The drink library includes recipes in cl, glassware guidance, technique tags, garnishes, pro tips, and custom hand-coded vector artwork for every drink, glass, and bar tool. Users can import additional drinks from the web, cache images as data URLs, and persist imported drinks, quiz progress, and tip-jar state via localStorage.`,
        },
        '02': {
          title: 'OBCG\nPortal',
          desc: `OBCG is a sophisticated, high-performance full-stack web application I led, built on Next.js (SSR) and a multi-language stack (JavaScript/Python) with a MongoDB/BSON backend. I drove a critical architectural shift by migrating BSON data types to integers for key fields, resulting in reduced storage overhead and more efficient range-based indexing. To ensure scalability and quality, I established high Developer Experience (DX) standards, including implementation of Instant Dev Environments (.devcontainer) and automated CI/CD workflows via GitHub Actions and ESLint.`,
        },
        '03': {
          title: 'Kanzlei Intake Suite\nData Intake',
          criticQuote:
            'The difference between a flashy AI gimmick and a legally compliant, production-ready tool.',
          criticLabel: 'Critic’s Quote',
          desc:
            `Bilingual legal-intake SaaS for tax-law and criminal-defense firms in Germany and the United States.
The platform digitizes the full client intake workflow, from first inquiry to lawyer-ready case briefing, with localized German/EU and US jurisdiction handling, role-based workspaces, secure document management, audit logging, AI-assisted internal analysis, and PDF exports.

Built with Next.js 16 App Router, React 19, JavaScript, Tailwind, Prisma/PostgreSQL, custom session auth, Google Gemini, Stripe, Resend, Vercel Blob, pdf-lib, and Electron, it supports public marketing pages, pricing, demo access, private firm dashboards, and a companion desktop app for offline case review.

The system includes geo-aware routing and localization using Vercel edge headers, dynamic /eu/[country] and /us/[state] routes, German/English language switching, jurisdiction-specific privacy/disclaimer logic, and market-aware intake flows.

AI-generated outputs are strictly framed as internal attorney work drafts, not client advice, with legal-compliance guardrails, mandatory disclaimers, no automated success predictions, authenticated document access, noindex internal pages, and environment-driven legal pages for multi-firm deployment.`,
        },
        '04': {
          title: 'Launchpad\nGemini Powered SaaS',
          desc:
            `LaunchPad is a SaaS template deployment platform for creating Project Vaults, storing server-side credentials, and downloading deployable full-stack SaaS templates. It uses Next.js App Router, React, TypeScript, Tailwind CSS, Supabase Auth/Postgres, Stripe Checkout/Webhooks, JSZip, and vault-managed AI/provider keys.

Its activation system has three enforcement layers:

1. **Build-time check**: downloaded templates run \`scripts/check-activation.mjs\` before deployment and call \`POST /api/activation/activate\`.
2. **Runtime check**: deployed apps call \`POST /api/activation/check\` from the server layout once per day.
3. **Remote vault dependency**: server-side services call \`POST /api/vault\` to retrieve Stripe, Gemini, or other secrets only after activation passes.

LaunchPad verifies the license key, account status, vault ownership, template match, and deployment record. If the account becomes invalid, expired, suspended, revoked, or unreachable in fail-closed mode, the deployed template renders an offline page and stops receiving vault credentials.

Because users download source code, activation is not fully tamper-proof. The real enforcement comes from making valuable server-side services depend on LaunchPad-controlled vault access.`,
        },
        '05': {
          title: 'Fine Truth\nForensic Audit',
          desc:
            'A multilingual web app that audits any company\'s website for predatory contract terms — hidden exit fees, obfuscated cancellation flows, auto-renewal traps, and unclear recurring billing — and returns a neutral 0–100 trust score with a plain-English verdict.\n\nUsers paste a URL; a scraper pulls the live page content and a Gemini-powered analysis engine grades it against a forensic rubric. The home page also surfaces region-aware "Hall of Fame" and "Wall of Shame" leaderboards across ISPs, mobile carriers, and SaaS, with auto-detected user location and 10-language UI support (EN, DE, ES, FR, IT, PT, NL, PL, TR, AR).\n\nStack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel AI SDK · Google Gemini 3.0 Pro · Firecrawl · standalone Node scraper on Render · Vercel hosting + Analytics · strict CSP headers · lucide-react for iconography.',
        },
        '06': {
          title: 'Can We Talk?\nAI Assisted Communication Engine',
          desc:
            'AI-Assisted Communication\n\nA real-time, two-person chat app that acts as a friendly third party in difficult conversations. Each session pairs a Shared Space where both partners talk together with an AI mediator ("Dr. Aidon") that intervenes only when needed — to de-escalate, defuse manipulative language, or unstick stalled exchanges — and a Private Space where each user can workshop their thoughts one-on-one with the AI before saying them out loud. Sessions are spun up instantly and shared via QR code or link, with live typing indicators, partner-joined toasts, and full i18n in English, Spanish, and German.\n\nStack\n- Frontend: Next.js 15 (App Router), React 19, Tailwind CSS v4\n- Realtime + Auth: Firebase Firestore (live message, presence, and typing-status streams) with anonymous Firebase Auth\n- AI: Google Gemini 2.0 Flash with carefully constrained prompts that let the model stay silent unless intervention helps\n- Extras: qrcode for session-sharing, Tone.js for join sounds, hardened Content-Security-Policy headers',
        },
        '07': {
          title: 'UX/UI\nEffects',
          desc:
            'A minimal, interactive before/after image slider that lets you drag a handle across a watch photo to reveal its lume (glow) shot underneath — comparing the same watch in daylight vs. in the dark.\n\nTech stack:\n- Next.js 16 (App Router) with React 19\n- Tailwind CSS v4 for styling\n- Custom client component using useRef / useEffect to handle mouse and touch drag events, with clipPath driving the reveal\n\nBuilt as a personal weekend project for learning — a quick excuse to play with the latest Next.js + React 19 stack and hand-roll a small interactive component instead of pulling in a library.',
        },
        '08': {
          title: 'Lifestory\nAI Creative',
          desc:
            'Android app Lifestory — an AI-supported autobiography app. Using Gemini Pro to help users craft their life stories with AI-assisted writing prompts, multimedia integration, and dynamic storytelling templates. The app features a user-friendly interface that encourages creativity while providing powerful tools such as character tracking, timeline organization, and interactive storytelling features to bring personal narratives to life. The app rounds out with an internal book printing service, allowing users to transform their digital stories into physical keepsakes.',
        },
        '09': {
          title: 'TSLearn\nTypescript',
          criticQuote:
            'Taking the hardest part of mental gymnastics and offloading it to the GPU… making the learning experience actually joyful.',
          criticLabel: 'Critic’s Quote',
          desc:
            `TS Learn App is an interactive TypeScript learning platform with 35 guided lessons covering fundamentals, intermediate concepts, advanced type patterns, and applied TypeScript with WebGL. Each lesson combines animated 3D visuals, syntax-highlighted examples, JavaScript vs. TypeScript comparisons, hands-on exercises, checkpoint quizzes, and saved progress.

Built with Next.js 16, React 19, TypeScript 6, Three.js/WebGL, custom GLSL shaders, GSAP, PWA support, localStorage, custom code highlighting, custom exercise validation, and ESLint with Next.js Core Web Vitals.`,
        },
        '10': {
          title: 'HandyWrap\nE-Commerce',
          desc:
            `Custom phone-case e-commerce platform with a live product configurator and Stripe checkout. The app lets customers upload artwork, position it on a realistic phone-case preview, resize/crop the design, choose phone model, material, finish, and color, then complete payment through Stripe and receive a branded confirmation email.

Built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, Prisma, PostgreSQL, Zod, TanStack Query, Sharp, Kinde Auth, Stripe, UploadThing, Resend, and React Email, the platform includes authenticated checkout, webhook-driven order handling, transactional emails, and server-side image processing.

It also includes an admin dashboard for viewing orders, managing fulfillment, and updating order status, plus a responsive marketing site with reviews, social proof, mobile navigation, animations, upload flows, toast notifications, and a polished Apple-inspired configuration experience.`,
        },
        '11': {
          title: 'Learn Next.js\nNext.js',
          desc:
            "Next.js learning resource. Lessons, exercises and lesson quizzes to help you learn Next.js. I built a comprehensive learning platform for Next.js, featuring interactive coding challenges, real-time feedback, and a dynamic curriculum that adapts to the user's progress. The site includes a custom-built code editor with integrated Next.js support, allowing users to practice and apply their skills in a hands-on environment. The graphics and animations are powered by Three.js and GSAP, creating an engaging and visually appealing learning experience that makes mastering Next.js both fun and effective.",
        },
        '12': {
          title: 'PDFKit\nNext.js',
          criticQuote:
            'Demonstrates a profound, intimate grasp of deep browser APIs… manipulating raw binary data entirely in the V8 engine.',
          criticLabel: 'Critic’s Quote',
          desc:
            'Browser-based PDF Toolkit\nA privacy-first, all-in-one progressive web app offering 20+ PDF tools that run entirely in the user\'s browser, even if the user is offline — no files are ever uploaded to a server. Users can merge, split, compress, rotate, crop, reorder, and delete pages; convert between PDF and JPG; extract text; add watermarks, page numbers, annotations, and signatures; edit text; password-protect or unlock documents; and view file info.\n\nWhy it stands out\n- Zero-server architecture — every PDF operation happens client-side, so sensitive documents never leave the user\'s device.\n- 20+ feature routes organized as discrete tools under a single, consistent UI.\n- Instant performance — no upload/download round trips; processing is bounded only by the user\'s hardware.\n\nHighlights for recruiters/clients\n- Built on the latest React 19 and Next.js 16 App Router — modern Server Component architecture with client-side computation where it matters.\n- Installs on any device, and once installed, 100% functional offline\n- Demonstrates strong grasp of binary file manipulation, browser APIs (File, Blob, ArrayBuffer), and performance-sensitive UI work.\n- Privacy-by-design: a deliberate architectural choice, not an afterthought.',
        },
        '13': {
          title: 'Next Practice',
          desc: 'Next Practice is an interactive, local Next.js 16 learning environment distributed as a standalone package. Designed for hands-on learners, it provides a unique side-by-side workflow where students fix intentionally incomplete or broken code in their IDE and instantly see the results in their browser. The app features 20 focused lessons covering essential Next.js App Router concepts—including dynamic routes, server actions, metadata, and optimistic updates. Its architecture ensures the dev server remains stable even when lesson files contain errors, ensuring an uninterrupted educational experience.',
        },
        '14': {
          title: 'Communiversity',
          desc: 'A Next.js study-anything app. Name anything you want to learn about and Gemini will create the entire course for you. Enroll in completely new courses, or enroll in a course already set up by another student. In each lesson there is a Gemini AI Teacher you can ask any questions pertaining to that course, if you get stuck or just want a deeper explanation.',
        },
        '15': {
          title: 'AdminPilot\nLife Admin',
          desc: `AdminPilot is a mobile-first Progressive Web App (PWA) designed to automate "life admin" obligations by extracting actionable items, deadlines, and financial amounts from raw text, uploaded PDFs, and forwarded emails. Built on Next.js 16 (React 19) and authenticated securely using Clerk, the application utilizes Vercel AI SDK integrated with Google Gemini (gemini-2.5-flash) to read, structure, and categorize incoming files or copy-pasted contents into detailed tasks and response drafts. To support seamless email integration, the platform features a SendGrid Inbound Email Webhook that automatically routes emails forwarded to scan@inbox.ryanernstnyberg.com directly to the matching user's inbox in the app. The database layer is powered by Neon Serverless Postgres using Prisma ORM for type-safe database queries. Finally, the user experience is optimized for native-like interactions across devices, featuring a responsive navigation system styled with Tailwind CSS and offline capabilities powered by Serwist for service worker caching.`,
        },
        '16': {
          title: 'VPD Tracker',
          desc: 'Vapor Pressure Deficit calculator. It measures the difference between the amount of moisture currently in the air and the maximum amount of moisture the air can hold at a specific temperature. It is a critical metric for optimizing plant growth, as it directly affects a plant\'s ability to transpire and absorb nutrients. Installable on Android, iOS and Desktop',
        },
        '17': {
          title: 'Legal Flow',
          desc: 'LegalFlow AI is a multi-tenant SaaS platform that modernizes the client intake process for German law firms. It replaces traditional paper forms and phone tag with a secure, embedded web portal where prospective clients can securely submit their legal issues. Under the hood, it leverages LLMs to instantly analyze the intake data, generating concise case summaries, extracting key facts, and automatically identifying critical legal deadlines. Built with Next.js, MongoDB, and Stripe, the platform ensures strict DSGVO (GDPR) compliance while saving lawyers hours of administrative work each week.',
        },
        '18': {
          title: 'CallBack AI\nMissed Call Recovery',
          desc: 'CallBack AI is an automated missed-call recovery and AI scheduling assistant dashboard designed for local and service-based businesses to instantly convert lost calls into revenue. When business phone calls go unanswered, the platform immediately initiates conversational SMS sessions over Twilio.\n\nPowered by Anthropic Claude and Google Gemini LLMs with custom rate card directives, the AI assistant answers caller questions, quotes service rates, schedules appointments directly via Calendly API, and collects email newsletter opt-ins into a serverless PostgreSQL database (Neon / Supabase).\n\nThe platform includes a Next.js admin dashboard to manage bookings, track subscribers, configure service location modes (Mobile Dispatch, In-Store, Virtual), and manage provider API keys.',
        },
      },
      summary: {
        heading: ['Engineering', 'Approach'],
        intro:
          'A consistent standard of quality is maintained across the portfolio through expert-level engineering and a craft-focused approach.',
        categories: [
          {
            num: '01',
            title: 'AI-Driven Applications',
            desc:
              'Sites that use Gemini 3.0 Pro as a core architectural engine rather than a secondary feature.',
            items: [
              {
                name: 'Fine Truth',
                desc:
                  'Forensic AI verification engine generating real-time integrity scores (0–100), with a dynamic Hall of Fame / Wall of Shame ranking.',
              },
              {
                name: 'Can We Talk?',
                desc:
                  'Multi-user chat interface with real-time emotional tone analysis and fact-checking for productive two-party dialogues.',
              },
              {
                name: 'Lifestory AI Creative',
                desc:
                  'Autobiography app with AI-assisted writing prompts, multimedia integration, and an internal book-printing service.',
              },
            ],
          },
          {
            num: '02',
            title: 'Professional & Legal Suites',
            desc:
              'Platforms that emphasize data integrity, privacy, and administrative efficiency.',
            items: [
              {
                name: 'Kanzlei Intake Suite',
                desc:
                  'Structured legal intake with jurisdiction-aware guardrails for all 50 U.S. states and Europe and a GenAI triage system that categorizes and summarizes client information.',
              },
              {
                name: 'Launchpad SaaS',
                desc:
                  'Template deployment platform with Project Vaults, activation enforcement, and LaunchPad-controlled access to server-side SaaS credentials.',
              },
            ],
          },
          {
            num: '03',
            title: 'Community & Educational Hubs',
            desc:
              'Sites focused on utility, real-time data, and instructional consistency.',
            items: [
              {
                name: 'BarStart DE',
                desc:
                  'Mobile-responsive bartender training hub with a searchable recipe database, interactive visual guides, and a dynamic quiz system.',
              },
              {
                name: 'OBCG Portal',
                desc:
                  'Community water-usage dashboard with real-time consumption insights and a backend leak-detection system that saves customers money.',
              },
            ],
          },
        ],
        techEyebrow: 'Technical Summary',
        techDesc:
          'Across all sites, quality is maintained through an expert-level stack:',
        techTiers: [
          {
            label: 'Frontend',
            detail: 'Next.js (95%), TypeScript (90%) — type-safety and performance.',
          },
          {
            label: 'Interactivity',
            detail: 'GSAP, Framer Motion (85%) — high-fidelity UI components.',
          },
          {
            label: 'Backend',
            detail:
              'Node.js (88%), Prisma, PostgreSQL/MongoDB (82%) — robust architectures.',
          },
        ],
        closing:
          'These sites represent a standard of high-performance engineering where technical automation and professional craft are prioritized to deliver reliable, scalable, and user-centric results.',
      },
      viewLabel: (title) => `View ${title}`,
    },
    skills: {
      label: 'Expertise',
      heading: ['My', 'Stack'],
      techLabel: 'Technologies',
    },
    closing: {
      eyebrow: 'Closing Argument',
      quote:
        'A thesis statement on how the modern web should feel: blindingly fast, fiercely private, and deeply functionally intelligent.',
      attribution: 'The Verdict',
      audioLabel: 'Listen to the full Technical Thriller',
    },
    contact: {
      big: ["Let's build", 'something', 'great.'],
      info: {
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        location: 'Location',
        locationValue: 'Remote — Worldwide',
      },
      desc:
        "I'm currently available for freelance projects, full-time roles, and exciting collaborations. If you have a project in mind or just want to chat, my inbox is always open.",
      cta: 'Start a conversation',
      modal: {
        eyebrow: 'Contact',
        title: 'Start a conversation',
        close: 'Close contact form',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent. I will get back to you soon.',
        errorDefault: 'Something went wrong. Please try again.',
      },
    },
    footer: 'Built with Next.js & GSAP',
    resume: {
        "contact": "Contact",
        "skills": "Skills",
        "experience": "Experience",
        "education": "Education",
        "title": "Full Stack Developer",
        "location": "City, State",
        "summary": "A highly adaptable Full Stack Developer and AI Engineer with a robust background in digital media and brand strategy. Proven track record in designing scalable web architectures, integrating complex backend systems, and crafting responsive, high-performance user interfaces. Adept at leveraging both technical acumen and creative marketing experience to drive user engagement and deliver impactful digital products.",
        "download": "Download PDF",
        "myResumeLabel": "My ",
        "myResumeHighlight": "Resume",
        "profSummary": "Professional Summary",
        "jobs": [
            {
                "date": "2016 - Present",
                "company": "Orchard Beach Community Group",
                "title": "Software Developer",
                "desc1": "Led the end-to-end development of a comprehensive community portal. Engineered a robust, scalable backend architecture using MongoDB to handle complex data relationships and real-time synchronisation.",
                "desc2": "Architected a secure automated billing system and an intuitive administrative dashboard, driving significant operational efficiency. Developed a custom CRM solution tailored to unique member management workflows, ultimately improving community engagement and data organization."
            },
            {
                "date": "2019 - 2021",
                "company": "The Evil Burrito",
                "title": "Javascript Developer",
                "desc1": "Conceptualized, designed, and deployed a highly performant and visually striking responsive website that elevated the brand's digital presence and user experience.",
                "desc2": "Devised and executed data-driven marketing strategies to increase customer acquisition. Produced compelling digital and physical marketing collateral, and led innovative guerilla marketing campaigns that successfully amplified brand awareness in key target demographics."
            },
            {
                "date": "2008 - 2012",
                "company": "Pirate's Booty",
                "title": "Area Brand Manager",
                "desc1": "Cultivated strategic B2B relationships with retail management, consistently maintaining top-performing regional sales records throughout my tenure. Designed and executed high-impact product displays and print marketing collateral to drive regional advertising and point-of-sale conversions.",
                "desc2": "Directed experiential marketing initiatives and managed high-visibility demo events. Recruited, trained, and led a team of dynamic Brand Ambassadors, ensuring consistent messaging and elevating the brand's overall presence in the market."
            },
            {
                "date": "2008 - 2012",
                "company": "Encore Nationwide",
                "title": "Brand Ambassador & Campaign Manager",
                "desc1": "Spearheaded the high-profile 'Camp Vegas' campaign, managing end-to-end promotional strategies and event operations to drive regional brand awareness. Executed targeted information distribution and high-energy product demonstrations at major events.",
                "desc2": "Served as a lead promotional model and brand ambassador for premium liquor promotions and sampling initiatives. Consistently delivered exceptional consumer engagement, maximizing brand visibility and driving direct consumer acquisition."
            },
            {
                "date": "2008 - 2012",
                "company": "Level 1 Promotion",
                "title": "Brand Ambassador",
                "desc1": "Served as an elite 'Allstar' Brand Ambassador and promotional model, acting as the dynamic frontline representative for diverse, high-profile client portfolios. Executed targeted grassroots and guerilla marketing campaigns to maximize brand visibility and consumer reach.",
                "desc2": "Facilitated direct consumer engagement through high-energy product demonstrations and sampling initiatives. Gathered actionable field data and consumer feedback to refine future marketing strategies and optimize overall event ROI."
            },
            {
                "date": "2008 - 2012",
                "company": "House of Blues Entertainment",
                "title": "Event & Promotion Coordinator",
                "desc1": "Orchestrated end-to-end live entertainment events by negotiating and booking high-profile acts, while executing comprehensive event promotion strategies to maximize attendance. Cultivated and managed targeted mailing lists to drive sustained audience engagement and ticket sales.",
                "desc2": "Directed on-site crew operations and guest list management, ensuring seamless event execution from load-in to load-out. Prioritized an exceptional customer experience, consistently maintaining high satisfaction rates across all venues and performances."
            }
        ],
        "edu": [
            {
                "date": "2026",
                "school": "Google AI Professional Certificate",
                "degree": "Certified Professional",
                "desc": "Demonstrated proficiency in artificial intelligence concepts, prompt engineering, and modern AI development workflows to solve complex technical problems."
            },
            {
                "date": "2011",
                "school": "SAE/Ex'pression College for Digital Arts",
                "degree": "Bachelor of Applied Science",
                "desc": "Specialized in digital media, interactive design, and multimedia production, establishing a rigorous foundation in creative technology and digital experiences."
            },
            {
                "date": "2011",
                "school": "Apple Certified Pro / Logic Pro",
                "degree": "Apple Certified Master Pro",
                "desc": "Recognized expertise in professional audio engineering, sound design, and advanced digital audio workstation processing."
            }
        ]
    }
  },
  de: {
    nav: {
      about: 'Über mich',
      work: 'Projekte',
      skills: 'Fähigkeiten',
      contact: 'Kontakt',
      switchLabel: 'Sprache wechseln',
    },
    hero: {
      tag: 'Verfügbar für Aufträge — 2026',
      title: ['FULL', 'STACK', 'DEV'],
      subtitle:
        'Ich entwickle schnelle, skalierbare und visuell beeindruckende digitale Erlebnisse mit Next.js, React und modernen Web-Technologien.',
      scroll: 'Scrollen',
      quote: {
        eyebrow: 'Stimme eines Lesers',
        body: 'Tritt ein in die Welt eines Entwicklers, der Code nicht nur als Werkzeug, sondern als Disziplin begreift … es liest sich weniger wie ein Lebenslauf als wie ein technischer Thriller.',
      },
    },
    about: {
      label: 'Über mich',
      heading: ['Code als', 'Handwerk'],
      text:
        'Ich entwickle hochperformante Webanwendungen, die die Grenzen dessen verschieben, was im Browser möglich ist. Mit jahrelanger Erfahrung spezialisiere ich mich auf nahtlose Benutzererlebnisse — von pixelgenauen Oberflächen bis zu skalierbaren Backend-Architekturen.',
      stats: [
        { num: '10+', target: '10', suffix: '+', label: 'Jahre Erfahrung' },
        { num: '100%', target: '100', suffix: '%', label: 'Pünktliche Lieferung' },
      ],
    },
    sectionLines: {
      work: '02 — Ausgewählte Arbeiten',
      skills: '03 — Fähigkeiten & Tech',
    },
    projects: {
      heading: ['Ausgewählte', 'Arbeiten'],
      countSuffix: 'Projekte',
      items: {
        '01': {
          title: 'BarStart DE\nRef.-App',
          desc:
            `Deutschsprachige Bartending-Training-PWA, mobile-first gebaut für neue Bartender und Auszubildende. Die App vermittelt Cocktail-Grundlagen über eine Rezeptbibliothek, „Bar Basics"-Module und ein gamifiziertes Quizsystem mit Fortschrittserfassung, Fehlerwiederholung, Streaks und virtueller Trinkgeldkasse.

Gebaut mit Next.js 16 App Router, React 19, TypeScript, React Native Web, eigenen SVG-Illustrationen, Service Workern, Web App Manifest, Vercel Analytics, Google Analytics und GTM ist sie auf iOS/Android installierbar und vollständig offline nutzbar.

Die Drink-Bibliothek umfasst Rezepte in cl, Glaswaren-Empfehlungen, Technik-Tags, Garnituren, Profi-Tipps und handcodierte Vektor-Illustrationen für jeden Drink, jedes Glas und jedes Bar-Werkzeug. Nutzer können zusätzliche Drinks aus dem Web importieren, Bilder als Data-URLs cachen und importierte Drinks, Quiz-Fortschritt sowie den Trinkgeldkassen-Stand via localStorage speichern.`,
        },
        '02': {
          title: 'OBCG\nPortal',
          desc:
            `OBCG ist eine hochentwickelte, leistungsstarke Full-Stack-Webanwendung, deren Entwicklung ich leitete; sie basiert auf Next.js (SSR) sowie einem mehrsprachigen Stack (JavaScript/Python) und verfügt über ein MongoDB/BSON-Backend. Ich trieb eine entscheidende architektonische Umstellung voran, indem ich BSON-Datentypen für zentrale Felder auf Integer umstellte – ein Schritt, der zu einem reduzierten Speicher-Overhead und einer effizienteren bereichsbasierten Indizierung führte. Um Skalierbarkeit und Qualität zu gewährleisten, etablierte ich hohe Standards für die Developer Experience (DX), einschließlich der Implementierung von „Instant Dev Environments“ (.devcontainer) sowie automatisierter CI/CD-Workflows mittels GitHub Actions und ESLint.`,
        },
        '03': {
          title: 'Kanzlei Intake Suite\nDatenerfassung',
          criticQuote:
            'Der Unterschied zwischen einer auffälligen KI-Spielerei und einem rechtskonformen, produktionsreifen Werkzeug.',
          criticLabel: 'Kritikerstimme',
          desc:
            `Zweisprachige Legal-Intake-SaaS für Kanzleien im Steuerrecht und in der Strafverteidigung in Deutschland und den Vereinigten Staaten.
Die Plattform digitalisiert den vollständigen Mandantenaufnahme-Workflow, von der ersten Anfrage bis zum anwaltlich nutzbaren Fall-Briefing, mit lokalisierter Behandlung deutscher/EU- und US-Jurisdiktionen, rollenbasierten Arbeitsbereichen, sicherem Dokumentenmanagement, Audit-Logging, KI-gestützter interner Analyse und PDF-Exporten.

Gebaut mit Next.js 16 App Router, React 19, JavaScript, Tailwind, Prisma/PostgreSQL, eigener Session-Authentifizierung, Google Gemini, Stripe, Resend, Vercel Blob, pdf-lib und Electron unterstützt sie öffentliche Marketingseiten, Pricing, Demo-Zugriff, private Kanzlei-Dashboards und eine begleitende Desktop-App für Offline-Fallprüfung.

Das System umfasst geo-aware Routing und Lokalisierung über Vercel-Edge-Header, dynamische /eu/[country]- und /us/[state]-Routen, deutsch/englische Sprachumschaltung, jurisdiktionsspezifische Datenschutz-/Disclaimer-Logik und marktbezogene Intake-Flows.

KI-generierte Ausgaben sind strikt als interne anwaltliche Arbeitsentwürfe gerahmt, nicht als Mandantenberatung, mit Legal-Compliance-Leitplanken, verpflichtenden Disclaimern, keinen automatisierten Erfolgsprognosen, authentifiziertem Dokumentenzugriff, noindex für interne Seiten und umgebungsgetriebenen Rechtsseiten für Multi-Kanzlei-Deployments.`,
        },
        '04': {
          title: 'Launchpad\nGemini-gestütztes SaaS',
          desc:
            `LaunchPad ist eine SaaS-Template-Deployment-Plattform zum Erstellen von Project Vaults, Speichern serverseitiger Zugangsdaten und Herunterladen deploybarer Full-Stack-SaaS-Templates. Sie nutzt Next.js App Router, React, TypeScript, Tailwind CSS, Supabase Auth/Postgres, Stripe Checkout/Webhooks, JSZip und vault-verwaltete AI-/Provider-Keys.

Das Aktivierungssystem hat drei Durchsetzungsebenen:

1. **Build-Time-Check**: heruntergeladene Templates führen vor dem Deployment \`scripts/check-activation.mjs\` aus und rufen \`POST /api/activation/activate\` auf.
2. **Runtime-Check**: deployte Apps rufen einmal täglich aus dem Server-Layout \`POST /api/activation/check\` auf.
3. **Remote-Vault-Abhängigkeit**: serverseitige Services rufen \`POST /api/vault\` auf, um Stripe-, Gemini- oder andere Secrets erst nach bestandener Aktivierung abzurufen.

LaunchPad prüft Lizenzschlüssel, Account-Status, Vault-Eigentum, Template-Übereinstimmung und Deployment-Datensatz. Wenn der Account ungültig, abgelaufen, gesperrt, widerrufen oder im Fail-Closed-Modus nicht erreichbar ist, rendert das deployte Template eine Offline-Seite und erhält keine Vault-Zugangsdaten mehr.

Da Nutzer den Quellcode herunterladen, ist die Aktivierung nicht vollständig manipulationssicher. Die eigentliche Durchsetzung entsteht dadurch, dass wertvolle serverseitige Services von LaunchPad-kontrolliertem Vault-Zugriff abhängen.`,
        },
        '05': {
          title: 'Fine Truth\nForensisches Audit',
          desc:
            'Eine mehrsprachige Web-App, die jede Unternehmens-Website auf räuberische Vertragsklauseln prüft — versteckte Ausstiegsgebühren, verschleierte Kündigungsstrecken, Auto-Renewal-Fallen und undurchsichtige wiederkehrende Abrechnungen — und einen neutralen Trust-Score von 0–100 mit verständlichem Urteil zurückgibt.\n\nNutzer fügen eine URL ein; ein Scraper holt den Live-Seiteninhalt, eine Gemini-gestützte Analyse-Engine bewertet ihn anhand einer forensischen Rubrik. Die Startseite zeigt zusätzlich regionsbewusste „Hall of Fame"- und „Wall of Shame"-Ranglisten für ISPs, Mobilfunkanbieter und SaaS, mit automatisch erkanntem Nutzerstandort und Oberfläche in 10 Sprachen (EN, DE, ES, FR, IT, PT, NL, PL, TR, AR).\n\nStack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel AI SDK · Google Gemini 3.0 Pro · Firecrawl · eigenständiger Node-Scraper auf Render · Vercel-Hosting + Analytics · strikte CSP-Header · lucide-react für die Icons.',
        },
        '06': {
          title: 'Can We Talk?\nKI-gestützte Kommunikations-Engine',
          desc:
            'KI-gestützte Kommunikation\n\nEine Echtzeit-Chat-App für zwei Personen, die sich in schwierigen Gesprächen wie eine freundliche dritte Partei verhält. Jede Sitzung kombiniert einen Shared Space, in dem beide Partner gemeinsam mit einem KI-Mediator („Dr. Aidon") sprechen — er greift nur dann ein, wenn es hilft: zur Deeskalation, zur Entschärfung manipulativer Sprache oder um festgefahrene Gespräche wieder in Gang zu bringen — und einen Private Space, in dem jeder Nutzer seine Gedanken zuerst eins-zu-eins mit der KI durchspielen kann, bevor er sie ausspricht. Sitzungen werden sofort gestartet und per QR-Code oder Link geteilt, mit Live-Tippanzeigen, Toasts beim Beitritt des Partners und voller i18n in Englisch, Spanisch und Deutsch.\n\nStack\n- Frontend: Next.js 15 (App Router), React 19, Tailwind CSS v4\n- Realtime + Auth: Firebase Firestore (Live-Streams für Nachrichten, Präsenz und Tippstatus) mit anonymer Firebase-Authentifizierung\n- KI: Google Gemini 2.0 Flash mit sorgfältig eingegrenzten Prompts, die das Modell stillschweigend lassen, sofern eine Intervention keinen Mehrwert bringt\n- Extras: qrcode zum Teilen der Sitzung, Tone.js für den Join-Sound, gehärtete Content-Security-Policy-Header',
        },
        '07': {
          title: 'UX/UI\nEffekte',
          desc:
            'Ein minimaler, interaktiver Vorher/Nachher-Bild-Slider: man zieht einen Griff über das Foto einer Uhr und legt darunter die Leucht-(Lume-)Aufnahme frei — derselbe Zeitmesser bei Tageslicht und im Dunkeln im direkten Vergleich.\n\nTech-Stack:\n- Next.js 16 (App Router) mit React 19\n- Tailwind CSS v4 für das Styling\n- Eigene Client-Komponente mit useRef / useEffect für Maus- und Touch-Drag-Events, wobei clipPath das Freilegen steuert\n\nGebaut als persönliches Wochenend-Lernprojekt — ein schneller Anlass, mit dem aktuellen Next.js- + React 19-Stack zu spielen und eine kleine interaktive Komponente von Hand zu bauen, statt eine Library einzubinden.',
        },
        '08': {
          title: 'Lifestory\nAI Creative',
          desc:
            'Lifestory ist eine Android-App zur KI-gestützten Autobiografie. Mit Gemini Pro hilft sie Nutzern, ihre Lebensgeschichte zu erzählen — durch KI-gestützte Schreibvorschläge, Multimedia-Integration und dynamische Storytelling-Vorlagen. Die App bietet Werkzeuge wie Charakter-Tracking, Zeitlinien-Organisation und interaktive Storytelling-Funktionen, um persönliche Erzählungen zum Leben zu erwecken. Abgerundet durch einen integrierten Buchdruck-Service, der digitale Geschichten in physische Erinnerungsstücke verwandelt.',
        },
        '09': {
          title: 'TSLearn\nTypescript',
          criticQuote:
            'Verlagert die härteste mentale Gymnastik auf die GPU … und macht das Lernen tatsächlich freudvoll.',
          criticLabel: 'Kritikerstimme',
          desc:
            `TS Learn App ist eine interaktive TypeScript-Lernplattform mit 35 geführten Lektionen zu Grundlagen, fortgeschrittenen Konzepten, Advanced-Type-Patterns und angewandtem TypeScript mit WebGL. Jede Lektion kombiniert animierte 3D-Visuals, Syntax-Highlighting-Beispiele, JavaScript-vs.-TypeScript-Vergleiche, praktische Übungen, Checkpoint-Quizze und gespeicherten Fortschritt.

Gebaut mit Next.js 16, React 19, TypeScript 6, Three.js/WebGL, eigenen GLSL-Shadern, GSAP, PWA-Unterstützung, localStorage, eigenem Code-Highlighting, eigener Übungsvalidierung und ESLint mit Next.js Core Web Vitals.`,
        },
        '10': {
          title: 'HandyWrap\nE-Commerce',
          desc:
            `Individuelle Phone-Case-E-Commerce-Plattform mit Live-Produktkonfigurator und Stripe Checkout. Die App lässt Kunden eigene Designs hochladen, auf einer realistischen Handyhüllen-Vorschau positionieren, das Motiv skalieren/zuschneiden, Handy-Modell, Material, Finish und Farbe auswählen, anschließend per Stripe bezahlen und eine gebrandete Bestätigungs-E-Mail erhalten.

Gebaut mit Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, Prisma, PostgreSQL, Zod, TanStack Query, Sharp, Kinde Auth, Stripe, UploadThing, Resend und React Email umfasst die Plattform authentifizierten Checkout, webhook-gesteuerte Bestellabwicklung, transaktionale E-Mails und serverseitige Bildverarbeitung.

Zusätzlich enthält sie ein Admin-Dashboard zum Anzeigen von Bestellungen, Verwalten der Erfüllung und Aktualisieren des Bestellstatus sowie eine responsive Marketingseite mit Reviews, Social Proof, mobiler Navigation, Animationen, Upload-Flows, Toast-Benachrichtigungen und einer polierten Apple-inspirierten Konfigurationserfahrung.`,
        },
        '11': {
          title: 'Learn Next.js\nNext.js',
          desc:
            'Eine Next.js-Lernplattform mit Lektionen, Übungen und Quizzen zum Erlernen von Next.js. Ich habe eine umfassende Lernumgebung mit interaktiven Coding-Challenges, Echtzeit-Feedback und einem dynamischen Curriculum entwickelt, das sich an den Fortschritt der Nutzer anpasst. Die Seite enthält einen individuell gebauten Code-Editor mit integrierter Next.js-Unterstützung, damit Nutzer ihre Fähigkeiten praktisch anwenden können. Grafiken und Animationen werden durch Three.js und GSAP angetrieben und schaffen eine ansprechende Lernerfahrung, die das Beherrschen von Next.js effektiv und motivierend macht.',
        },
        '12': {
          title: 'PDFKit\nNext.js',
          criticQuote:
            'Beweist ein tiefes, intimes Verständnis komplexer Browser-APIs … rohe Binärdaten werden vollständig in der V8-Engine verarbeitet.',
          criticLabel: 'Kritikerstimme',
          desc:
            'Browserbasierte PDF-Toolbox\nEine Privacy-First-All-in-One-Progressive-Web-App mit über 20 PDF-Werkzeugen, die vollständig im Browser des Nutzers ausgeführt werden, auch offline — es werden keinerlei Dateien auf einen Server hochgeladen. Nutzer können Seiten zusammenführen, teilen, komprimieren, drehen, zuschneiden, neu anordnen und löschen; zwischen PDF und JPG konvertieren; Text extrahieren; Wasserzeichen, Seitenzahlen, Anmerkungen und Signaturen hinzufügen; Text bearbeiten; Dokumente mit Passwort schützen oder entsperren; und Dateiinformationen einsehen.\n\nWas es besonders macht\n- Serverlose Architektur — jede PDF-Operation läuft clientseitig, sensible Dokumente verlassen also nie das Gerät des Nutzers.\n- Über 20 Funktionsrouten als eigenständige Tools unter einer einheitlichen Oberfläche.\n- Sofortige Performance — keine Upload-/Download-Round-Trips; die Verarbeitung ist nur durch die Hardware des Nutzers begrenzt.\n\nHighlights für Recruiter und Kunden\n- Auf dem aktuellsten React 19 und Next.js 16 App Router aufgebaut — moderne Server-Component-Architektur mit clientseitiger Berechnung dort, wo es darauf ankommt.\n- Installierbar auf jedem Gerät und nach der Installation zu 100 % offline funktionsfähig\n- Zeigt sicheres Verständnis von Binärdatei-Verarbeitung, Browser-APIs (File, Blob, ArrayBuffer) und performance-kritischer UI-Arbeit.\n- Privacy-by-Design: eine bewusste architektonische Entscheidung, kein nachträglicher Einfall.',
        },
        '13': {
          title: 'Next Practice',
          desc: 'Next Practice ist eine interaktive, lokale Next.js 16 Lernumgebung, die als eigenständiges Paket verteilt wird. Entwickelt für praxisorientiertes Lernen, bietet sie einen einzigartigen Side-by-Side-Workflow, bei dem Studenten absichtlich unvollständigen oder fehlerhaften Code in ihrer IDE reparieren und die Ergebnisse sofort im Browser sehen. Die App umfasst 20 gezielte Lektionen, die wesentliche Konzepte des Next.js App Routers abdecken – einschließlich dynamischer Routen, Server Actions, Metadaten und optimistischer Updates. Ihre Architektur stellt sicher, dass der Dev-Server auch dann stabil läuft, wenn Lektionsdateien Fehler enthalten, und garantiert so ein ununterbrochenes Lernerlebnis.',
        },
        '14': {
          title: 'Communiversity',
          desc: 'Eine Next.js App, mit der man alles lernen kann. Nenne ein beliebiges Thema, und Gemini erstellt den gesamten Kurs für dich. Schreibe dich in komplett neue Kurse ein oder in solche, die von anderen Studenten erstellt wurden. In jeder Lektion gibt es einen Gemini KI-Lehrer, dem du alle kursbezogenen Fragen stellen kannst, falls du nicht weiterkommst oder tiefere Erklärungen wünschst.',
        },
        '15': {
          title: 'AdminPilot\nLife-Admin',
          desc: `AdminPilot ist eine mobile-first Progressive Web App (PWA), die entwickelt wurde, um alltägliche administrative Pflichten („Life Admin“) zu automatisieren. Sie extrahiert handlungsrelevante Aufgaben, Fristen und finanzielle Beträge aus Rohdaten, hochgeladenen PDFs und weitergeleiteten E-Mails. Die Anwendung basiert auf Next.js 16 (React 19), wird sicher über Clerk authentifiziert und nutzt das Vercel AI SDK in Kombination mit Google Gemini (gemini-2.5-flash), um eingehende Dateien oder kopierte Inhalte zu analysieren, zu strukturieren und in detaillierte Aufgaben sowie Antwortentwürfe zu kategorisieren. Für eine nahtlose E-Mail-Integration sorgt ein SendGrid Inbound-E-Mail-Webhook, der E-Mails, die an scan@inbox.ryanernstnyberg.com weitergeleitet werden, automatisch an das Postfach des passenden Nutzers in der App weiterleitet. Die Datenbankschicht wird von Neon Serverless Postgres unter Verwendung von Prisma ORM für typsichere Abfragen betrieben. Schließlich ist die Benutzererfahrung für nativ-ähnliche Interaktionen auf allen Geräten optimiert, ausgestattet mit einem responsiven, mit Tailwind CSS gestalteten Navigationssystem und Offline-Funktionalitäten durch Serwist für Service-Worker-Caching.`,
        },
        '16': {
          title: 'VPD-Tracker',
          desc: 'Dampfdruckdefizit-Rechner (VPD). Er misst den Unterschied zwischen der aktuellen Luftfeuchtigkeit und der maximalen Feuchtigkeitsmenge, die die Luft bei einer bestimmten Temperatur aufnehmen kann. Dies ist ein entscheidender Wert zur Optimierung des Pflanzenwachstums, da er die Fähigkeit der Pflanze zur Transpiration und Nährstoffaufnahme direkt beeinflusst. Installierbar auf Android, iOS und Desktop',
        },
        '17': {
          title: 'Legal Flow',
          desc: 'LegalFlow AI ist eine mehrmandantenfähige SaaS-Plattform, die den Mandantenaufnahmeprozess für deutsche Kanzleien modernisiert. Sie ersetzt herkömmliche Papierformulare und zeitraubende telefonische Rückfragen durch ein sicheres, eingebettetes Webportal, über das potenzielle Mandanten ihre rechtlichen Anliegen sicher übermitteln können. Im Hintergrund nutzt sie LLMs, um die Aufnahmedaten sofort zu analysieren, prägnante Fallzusammenfassungen zu erstellen, wichtige Fakten zu extrahieren und kritische rechtliche Fristen automatisch zu erkennen. Die mit Next.js, MongoDB und Stripe entwickelte Plattform gewährleistet strikte DSGVO-Konformität und erspart Anwälten jede Woche stundenlange Verwaltungsarbeit.',
        },
        '18': {
          title: 'CallBack AI\nMissed Call Recovery',
          desc: 'CallBack AI ist ein automatisierte Anrufrückgewinnungs- und KI-Terminplanungs-Dashboard für lokale und dienstleistungsorientierte Unternehmen, um entgangene Anrufe sofort in gebuchte Termine zu verwandeln. Wenn Anrufe nicht entgegengenommen werden, leitet die Plattform umgehend dialogorientierte SMS-Sitzungen über Twilio ein.\n\nAngetrieben von Claude- und Gemini-LLMs beantwortet der KI-Assistent Kundenfragen, berechnet Preise auf Basis individueller Preislisten, bucht Termine direkt über die Calendly-API und erfasst Newsletter-Anmeldungen in einer serverlosen PostgreSQL-Datenbank (Neon / Supabase).\n\nDie Plattform bietet ein Next.js Admin-Dashboard zur Verwaltung von Buchungen, Abonnenten, Standortmodi (Mobil, Vor Ort, Virtuell) sowie zur Verwaltung von API-Schlüsseln.',
        },
      },
      summary: {
        heading: ['Entwicklungs', 'Ansatz'],
        intro:
          'Ein konsistenter Qualitätsstandard wird über das gesamte Portfolio durch fachkundige Entwicklung und einen handwerklich orientierten Ansatz gewährleistet.',
        categories: [
          {
            num: '01',
            title: 'KI-gestützte Anwendungen',
            desc:
              'Seiten, die Gemini 3.0 Pro als zentrale Architektur-Engine nutzen — nicht nur als Zusatzfunktion.',
            items: [
              {
                name: 'Fine Truth',
                desc:
                  'Forensische KI-Engine zur Echtzeit-Bewertung der Integrität (0–100), mit dynamischem Hall of Fame / Wall of Shame Ranking.',
              },
              {
                name: 'Can We Talk?',
                desc:
                  'Multi-User-Chat-Interface mit Echtzeit-Tonanalyse und Faktencheck für produktive Zwei-Parteien-Dialoge.',
              },
              {
                name: 'Lifestory AI Creative',
                desc:
                  'Autobiografie-App mit KI-gestützten Schreibvorschlägen, Multimedia-Integration und integriertem Buchdruck-Service.',
              },
            ],
          },
          {
            num: '02',
            title: 'Professionelle & juristische Anwendungen',
            desc:
              'Plattformen mit Fokus auf Datenintegrität, Datenschutz und Verwaltungseffizienz.',
            items: [
              {
                name: 'Kanzlei Intake Suite',
                desc:
                  'Strukturierte juristische Datenerfassung mit jurisdiktionsspezifischen Leitplanken für alle 50 US-Bundesstaaten und Europa und einem GenAI-Triage-System, das Mandanteninformationen kategorisiert und zusammenfasst.',
              },
              {
                name: 'Launchpad SaaS',
                desc:
                  'Template-Deployment-Plattform mit Project Vaults, Aktivierungsdurchsetzung und LaunchPad-kontrolliertem Zugriff auf serverseitige SaaS-Zugangsdaten.',
              },
            ],
          },
          {
            num: '03',
            title: 'Community & Bildungsplattformen',
            desc:
              'Seiten mit Fokus auf Nutzwert, Echtzeit-Daten und didaktische Konsistenz.',
            items: [
              {
                name: 'BarStart DE',
                desc:
                  'Mobil-optimierte Trainingsplattform für Bartender mit durchsuchbarer Rezeptdatenbank, interaktiven Anleitungen und dynamischem Quiz-System.',
              },
              {
                name: 'OBCG Portal',
                desc:
                  'Community-Dashboard zur Wassernutzung mit Echtzeit-Verbrauchseinblicken und einem Backend-Lecksuchsystem, das Kunden Geld spart.',
              },
            ],
          },
        ],
        techEyebrow: 'Technische Zusammenfassung',
        techDesc:
          'Über alle Seiten hinweg wird Qualität durch einen Stack auf Experten-Niveau gewährleistet:',
        techTiers: [
          {
            label: 'Frontend',
            detail: 'Next.js (95 %), TypeScript (90 %) — Typsicherheit und Performance.',
          },
          {
            label: 'Interaktivität',
            detail: 'GSAP, Framer Motion (85 %) — hochwertige UI-Komponenten.',
          },
          {
            label: 'Backend',
            detail:
              'Node.js (88 %), Prisma, PostgreSQL/MongoDB (82 %) — robuste Architekturen.',
          },
        ],
        closing:
          'Diese Seiten stehen für hochleistungsfähige Entwicklung, bei der technische Automatisierung und professionelles Handwerk priorisiert werden, um zuverlässige, skalierbare und nutzerorientierte Ergebnisse zu liefern.',
      },
      viewLabel: (title) => `${title} ansehen`,
    },
    skills: {
      label: 'Expertise',
      heading: ['Mein', 'Stack'],
      techLabel: 'Technologien',
    },
    closing: {
      eyebrow: 'Schlussplädoyer',
      quote:
        'Eine These darüber, wie sich das moderne Web anfühlen sollte: blitzschnell, kompromisslos privat und zutiefst funktional intelligent.',
      attribution: 'Das Urteil',
      audioLabel: 'Den vollständigen Technical Thriller anhören',
    },
    contact: {
      big: ['Lass uns', 'etwas', 'Großartiges bauen.'],
      info: {
        email: 'E-Mail',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        location: 'Standort',
        locationValue: 'Remote — Weltweit',
      },
      desc:
        'Ich bin derzeit verfügbar für Freelance-Projekte, Festanstellungen und spannende Kooperationen. Wenn du ein Projekt im Sinn hast oder einfach plaudern möchtest — mein Posteingang ist immer offen.',
      cta: 'Gespräch starten',
      modal: {
        eyebrow: 'Kontakt',
        title: 'Gespräch starten',
        close: 'Kontaktformular schließen',
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Nachricht gesendet. Ich melde mich in Kürze.',
        errorDefault: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
      },
    },
    footer: 'Gebaut mit Next.js & GSAP',
    resume: {
        "contact": "Kontakt",
        "skills": "Fähigkeiten",
        "experience": "Erfahrung",
        "education": "Bildung",
        "title": "Full Stack Entwickler",
        "location": "Stadt, Bundesland",
        "summary": "Ein äußerst anpassungsfähiger Full-Stack-Entwickler und KI-Ingenieur mit fundiertem Hintergrund in digitalen Medien und Markenstrategie. Nachgewiesene Erfolge bei der Entwicklung skalierbarer Web-Architekturen, der Integration komplexer Backend-Systeme und der Gestaltung reaktionsschneller, hochleistungsfähiger Benutzeroberflächen. Erfahren darin, sowohl technisches Verständnis als auch kreative Marketingerfahrung zu nutzen, um die Nutzerbindung zu fördern und wirkungsvolle digitale Produkte zu liefern.",
        "download": "PDF Herunterladen",
        "myResumeLabel": "Mein ",
        "myResumeHighlight": "Lebenslauf",
        "profSummary": "Zusammenfassung",
        "jobs": [
            {
                "date": "2016 - Heute",
                "company": "Orchard Beach Community Group",
                "title": "Softwareentwickler",
                "desc1": "Leitete die End-to-End-Entwicklung eines umfassenden Community-Portals. Entwickelte eine robuste, skalierbare Backend-Architektur mit MongoDB, um komplexe Datenbeziehungen und Echtzeitsynchronisation zu handhaben.",
                "desc2": "Entwarf ein sicheres, automatisiertes Abrechnungssystem und ein intuitives administratives Dashboard, was die betriebliche Effizienz erheblich steigerte. Entwickelte eine maßgeschneiderte CRM-Lösung, die auf einzigartige Workflows im Mitgliedermanagement zugeschnitten ist und letztendlich das Community-Engagement und die Datenorganisation verbesserte."
            },
            {
                "date": "2019 - 2021",
                "company": "The Evil Burrito",
                "title": "Javascript Entwickler",
                "desc1": "Konzipierte, entwarf und implementierte eine hochperformante und visuell ansprechende responsive Website, die die digitale Präsenz und das Nutzererlebnis der Marke aufwertete.",
                "desc2": "Entwarf und führte datengesteuerte Marketingstrategien zur Steigerung der Kundenakquise aus. Produzierte überzeugendes digitales und physisches Marketingmaterial und leitete innovative Guerilla-Marketing-Kampagnen, die die Markenbekanntheit in wichtigen Zielgruppen erfolgreich steigerten."
            },
            {
                "date": "2008 - 2012",
                "company": "Pirate's Booty",
                "title": "Area Brand Manager",
                "desc1": "Pflegte strategische B2B-Beziehungen zum Einzelhandelsmanagement und erzielte während meiner gesamten Amtszeit durchgehend regionale Spitzenumsätze. Entwarf und implementierte aufmerksamkeitsstarke Produktpräsentationen und Printmarketing-Materialien, um regionale Werbung und Point-of-Sale-Konversionen voranzutreiben.",
                "desc2": "Leitete erlebnisorientierte Marketinginitiativen und verwaltete öffentlichkeitswirksame Demo-Events. Rekrutierte, schulte und führte ein Team dynamischer Brand Ambassadors, um konsistente Botschaften zu gewährleisten und die allgemeine Markenpräsenz auf dem Markt zu erhöhen."
            },
            {
                "date": "2008 - 2012",
                "company": "Encore Nationwide",
                "title": "Brand Ambassador & Kampagnenmanager",
                "desc1": "Leitete die hochkarätige 'Camp Vegas'-Kampagne und verwaltete End-to-End-Promotionsstrategien sowie Event-Operationen, um die regionale Markenbekanntheit zu steigern. Führte gezielte Informationsverteilung und energiegeladene Produktdemonstrationen auf Großveranstaltungen durch.",
                "desc2": "Tätig als führendes Promotionsmodell und Brand Ambassador für Premium-Spirituosen-Promotions und Sampling-Initiativen. Lieferte durchweg eine außergewöhnliche Kundenbindung, maximierte die Markensichtbarkeit und trieb die direkte Kundenakquise voran."
            },
            {
                "date": "2008 - 2012",
                "company": "Level 1 Promotion",
                "title": "Brand Ambassador",
                "desc1": "Aktiv als erstklassiger 'Allstar' Brand Ambassador und Promotionsmodell eingesetzt, als dynamischer Repräsentant an vorderster Front für vielfältige, hochkarätige Kundenportfolios. Führte zielgerichtete Grassroots- und Guerilla-Marketing-Kampagnen durch, um die Markensichtbarkeit und Kundenreichweite zu maximieren.",
                "desc2": "Förderte die direkte Kundenbindung durch energiegeladene Produktdemonstrationen und Sampling-Initiativen. Sammelte verwertbare Felddaten und Verbraucherfeedback, um zukünftige Marketingstrategien zu verfeinern und den Gesamt-ROI von Events zu optimieren."
            },
            {
                "date": "2008 - 2012",
                "company": "House of Blues Entertainment",
                "title": "Event- & Promotionskoordinator",
                "desc1": "Organisierte Live-Entertainment-Events von der Planung bis zur Durchführung, einschließlich Verhandlung und Buchung hochkarätiger Acts. Entwickelte umfassende Event-Promotionsstrategien, um die Besucherzahlen zu maximieren, und verwaltete zielgerichtete Mailinglisten zur Steigerung der Ticketverkäufe.",
                "desc2": "Leitete die Crew vor Ort und das Gästelistenmanagement, um einen reibungslosen Ablauf der Veranstaltungen zu gewährleisten. Setzte höchste Priorität auf ein außergewöhnliches Kundenerlebnis und hielt durchweg hohe Zufriedenheitsraten bei allen Auftritten aufrecht."
            }
        ],
        "edu": [
            {
                "date": "2026",
                "school": "Google AI Professional Certificate",
                "degree": "Zertifizierter Experte",
                "desc": "Nachgewiesene Fachkenntnisse in Konzepten der künstlichen Intelligenz, Prompt-Engineering und modernen KI-Entwicklungsabläufen zur Lösung komplexer technischer Probleme."
            },
            {
                "date": "2011",
                "school": "SAE/Ex'pression College for Digital Arts",
                "degree": "Bachelor of Applied Science",
                "desc": "Spezialisiert auf digitale Medien, interaktives Design und Multimedia-Produktion. Schaffung eines rigorosen Fundaments in kreativer Technologie und digitalen Erlebnissen."
            },
            {
                "date": "2011",
                "school": "Apple Certified Pro / Logic Pro",
                "degree": "Apple Certified Master Pro",
                "desc": "Anerkannte Expertise in professioneller Audiotechnik, Sounddesign und fortgeschrittener Verarbeitung in digitalen Audio-Workstations."
            }
        ]
    }
  },
  es: {
    "nav": {
      "about": "Sobre mí",
      "work": "Proyectos",
      "skills": "Habilidades",
      "contact": "Contacto",
      "switchLabel": "Cambiar idioma"
    },
    "hero": {
      "tag": "Disponible para trabajar — 2026",
      "title": [
        "FULL",
        "STACK",
        "DEV"
      ],
      "subtitle": "Construyo experiencias digitales rápidas, escalables y visualmente impactantes usando Next.js, React y tecnologías web modernas.",
      "scroll": "Desplazarse",
      "quote": {
        "eyebrow": "Nota del lector",
        "body": "Adéntrate en el mundo de un desarrollador que trata el código no solo como una utilidad, sino como una disciplina... se lee menos como un currículum y más como un thriller técnico."
      }
    },
    "about": {
      "label": "Sobre Mí",
      "heading": [
        "El código como",
        "arte"
      ],
      "text": "Creo aplicaciones web de alto rendimiento que desafían los límites de lo posible en un navegador. Con años de experiencia, me especializo en construir experiencias de usuario fluidas, desde interfaces con precisión de píxeles hasta arquitecturas backend escalables.",
      "stats": [
        {
          "num": "10+",
          "target": "10",
          "suffix": "+",
          "label": "Años de Experiencia"
        },
        {
          "num": "100%",
          "target": "100",
          "suffix": "%",
          "label": "Entrega a Tiempo"
        }
      ]
    },
    "sectionLines": {
      "work": "02 — Trabajos Destacados",
      "skills": "03 — Habilidades y Tecnología"
    },
    "projects": {
      "heading": [
        "Trabajos",
        "Destacados"
      ],
      "countSuffix": "proyectos",
      "items": {
        "10": {
          "title": "HandyWrap\nE-Commerce",
          "desc": "Plataforma personalizada de comercio electrónico de fundas para teléfonos con un configurador de productos en vivo y pago a través de Stripe. La aplicación permite cargar diseños, posicionarlos, elegir el modelo de teléfono y material, y luego completar el pago.\n\nConstruida con Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Prisma, PostgreSQL, Zod y Kinde Auth."
        },
        "11": {
          "title": "Learn Next.js\nNext.js",
          "desc": "Recurso de aprendizaje de Next.js. Lecciones, ejercicios y cuestionarios. Construí una plataforma integral con desafíos interactivos de código, comentarios en tiempo real y un plan de estudios dinámico. Incluye un editor de código personalizado. Gráficos y animaciones impulsados por Three.js y GSAP."
        },
        "12": {
          "title": "PDFKit\nNext.js",
          "criticQuote": "Demuestra una profunda e íntima comprensión de las API del navegador... manipulando datos binarios sin procesar directamente en el motor V8.",
          "criticLabel": "Cita del Crítico",
          "desc": "Toolkit PDF basado en navegador\nUna aplicación web progresiva integral centrada en la privacidad que ofrece más de 20 herramientas PDF que se ejecutan completamente en el navegador del usuario, incluso sin conexión: no se sube ningún archivo a un servidor.\n\nAspectos destacados:\n- Arquitectura sin servidor: todo sucede en el lado del cliente.\n- Rendimiento instantáneo.\n- Construido en React 19 y Next.js 16 App Router."
        },
        "13": {
          "title": "Next Practice",
          "desc": "Next Practice es un entorno de aprendizaje interactivo y local de Next.js 16 distribuido como un paquete independiente. Diseñado para el aprendizaje práctico, proporciona un flujo de trabajo único donde los estudiantes corrigen código intencionalmente incompleto o con errores en su IDE y ven instantáneamente los resultados en su navegador. La aplicación cuenta con 20 lecciones enfocadas que cubren conceptos esenciales del App Router de Next.js, incluyendo rutas dinámicas, server actions, metadatos y actualizaciones optimistas. Su arquitectura asegura que el servidor de desarrollo se mantenga estable incluso cuando los archivos de las lecciones contienen errores, garantizando una experiencia educativa ininterrumpida."
        },
        "14": {
          "title": "Communiversity",
          "desc": "Una aplicación para estudiar de todo con Next.js. Nombra cualquier cosa y Gemini creará el curso completo para ti. En cada lección hay un maestro de IA de Gemini al que puedes hacer preguntas."
        },
        "01": {
          "title": "BarStart DE\nApp de Ref.",
          "desc": "PWA de formación para bartenders en alemán, construida primero para móviles. La aplicación enseña los fundamentos de la coctelería a través de una biblioteca de recetas, módulos de \"Conceptos Básicos\" y un sistema de cuestionarios gamificado con seguimiento del progreso, revisión de errores, rachas y un bote de propinas virtual.\n\nConstruida con Next.js 16 App Router, React 19, TypeScript, React Native Web, ilustraciones SVG personalizadas, service workers, web app manifest, Vercel Analytics, Google Analytics y GTM, es instalable en iOS/Android y funciona completamente offline.\n\nLa biblioteca de bebidas incluye recetas en cl, guía de cristalería, etiquetas de técnica, decoraciones, consejos profesionales y arte vectorial programado a mano para cada bebida, vaso y herramienta. Los usuarios pueden importar bebidas adicionales, almacenar imágenes en caché como URL de datos y conservar su progreso mediante localStorage."
        },
        "02": {
          "title": "Portal\nOBCG",
          "desc": "OBCG es una aplicación web full-stack sofisticada y de alto rendimiento que lideré, construida en Next.js (SSR) y un stack multilingüe (JavaScript/Python) con backend MongoDB/BSON. Impulsé un cambio arquitectónico crítico al migrar tipos de datos BSON a enteros para campos clave, lo que redujo el coste de almacenamiento y mejoró la indexación basada en rangos. Para garantizar la escalabilidad y la calidad, establecí altos estándares de Experiencia de Desarrollador (DX), incluida la implementación de Entornos de Desarrollo Instantáneos (.devcontainer) y flujos de trabajo de CI/CD automatizados."
        },
        "03": {
          "title": "Kanzlei Intake Suite\nIngesta de Datos",
          "criticQuote": "La diferencia entre un truco de IA llamativo y una herramienta lista para producción que cumple con la ley.",
          "criticLabel": "Cita del Crítico",
          "desc": "SaaS de ingesta legal bilingüe para firmas de derecho penal y fiscal en Alemania y EE. UU.\nLa plataforma digitaliza el flujo de trabajo completo de admisión de clientes, desde la primera consulta hasta el resumen del caso listo para abogados, con manejo localizado de jurisdicciones, espacios de trabajo basados en roles, gestión segura de documentos, auditorías, análisis interno asistido por IA y exportaciones a PDF.\n\nConstruida con Next.js 16 App Router, React 19, JavaScript, Tailwind, Prisma/PostgreSQL, Gemini, Stripe y Electron.\nEl sistema incluye enrutamiento basado en geolocalización, rutas dinámicas /eu/[país] y /us/[estado], cambio de idioma alemán/inglés y flujos de ingesta específicos del mercado.\n\nLos resultados generados por IA se enmarcan estrictamente como borradores de trabajo interno para abogados, no como asesoramiento legal."
        },
        "04": {
          "title": "Launchpad\nSaaS con Gemini",
          "desc": "LaunchPad es una plataforma de implementación de plantillas SaaS para crear Project Vaults, almacenar credenciales y descargar plantillas SaaS full-stack. Utiliza Next.js App Router, React, TypeScript, Tailwind CSS, Supabase Auth/Postgres, Stripe y claves de IA administradas por bóveda.\n\nSu sistema de activación tiene tres capas:\n\n1. **Verificación en build**: las plantillas descargadas llaman a `POST /api/activation/activate`.\n2. **Verificación en runtime**: las aplicaciones desplegadas llaman a `POST /api/activation/check` diariamente.\n3. **Dependencia de bóveda**: los servicios backend llaman a `POST /api/vault` para recuperar secretos solo después de pasar la activación.\n\nLa aplicación verifica la clave de licencia, estado de la cuenta, y más."
        },
        "05": {
          "title": "Fine Truth\nAuditoría Forense",
          "desc": "Una aplicación web multilingüe que audita la web de cualquier empresa en busca de términos de contrato abusivos, tarifas de salida ocultas y trampas de renovación automática, y devuelve un puntaje de confianza neutral del 0 al 100.\n\nLos usuarios pegan una URL; un scraper extrae el contenido y un motor de análisis impulsado por Gemini lo clasifica según una rúbrica forense. La página de inicio también muestra tablas de clasificación con reconocimiento de región.\n\nStack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel AI SDK · Google Gemini 3.0 Pro · Firecrawl."
        },
        "06": {
          "title": "Can We Talk?\nComunicación IA",
          "desc": "Comunicación asistida por IA\n\nUna aplicación de chat en tiempo real para dos personas que actúa como un mediador amigable en conversaciones difíciles. Empareja un Espacio Compartido donde ambos hablan y un \"Dr. Aidon\" que interviene para desescalar, con un Espacio Privado donde cada usuario puede procesar sus pensamientos uno a uno con la IA antes de decirlos.\n\nStack:\n- Frontend: Next.js 15, React 19\n- Backend: Firebase Firestore con autenticación anónima.\n- IA: Google Gemini 2.0 Flash."
        },
        "07": {
          "title": "UX/UI\nEfectos",
          "desc": "Un control deslizante de imagen antes/después mínimo e interactivo que permite arrastrar un controlador a través de la foto de un reloj para revelar su luminiscencia.\n\nStack tecnológico:\n- Next.js 16 (App Router) con React 19\n- Tailwind CSS v4\n- Componente de cliente personalizado usando useRef / useEffect.\n\nConstruido como un proyecto personal de fin de semana."
        },
        "08": {
          "title": "Lifestory\nCreativo IA",
          "desc": "Lifestory, aplicación Android. Aplicación de autobiografía compatible con IA. Utilizando Gemini Pro para ayudar a los usuarios a elaborar sus historias de vida con sugerencias de escritura, integración multimedia y plantillas de narración dinámicas. La aplicación cuenta con una interfaz que fomenta la creatividad."
        },
        "09": {
          "title": "TSLearn\nTypescript",
          "criticQuote": "Tomar la parte más difícil de la gimnasia mental y descargarla a la GPU... haciendo que la experiencia de aprendizaje sea realmente alegre.",
          "criticLabel": "Cita del Crítico",
          "desc": "TS Learn App es una plataforma interactiva de aprendizaje de TypeScript con 35 lecciones guiadas que cubren fundamentos, patrones avanzados y TypeScript aplicado con WebGL. Cada lección combina imágenes animadas en 3D, ejemplos, ejercicios y cuestionarios.\n\nConstruida con Next.js 16, React 19, TypeScript 6, Three.js/WebGL y shaders GLSL personalizados."
        },
        "15": {
          "title": "AdminPilot\nLife Admin",
          "desc": "AdminPilot es una aplicación web progresiva (PWA) móvil-first diseñada para automatizar las obligaciones de la administración de la vida cotidiana. Extrae elementos de acción, plazos y montos financieros a partir de texto sin formato, archivos PDF subidos y correos electrónicos reenviados. Basada en Next.js 16 (React 19) y autenticada de forma segura mediante Clerk, la aplicación utiliza Vercel AI SDK integrado con Google Gemini (gemini-2.5-flash) para leer, estructurar y clasificar los archivos entrantes o el contenido copiado y pegado en tareas detalladas y borradores de respuesta. Para admitir una integración de correo electrónico perfecta, la plataforma cuenta con un webhook de correo electrónico entrante de SendGrid que dirige automáticamente los correos reenviados a scan@inbox.ryanernstnyberg.com directamente a la bandeja de entrada del usuario correspondiente en la aplicación. La capa de base de datos funciona con Neon Serverless Postgres utilizando Prisma ORM para consultas de base de datos seguras y con tipado estricto. Finalmente, la experiencia del usuario está optimizada para interacciones de estilo nativo en todos los dispositivos, con un sistema de navegación responsivo diseñado con Tailwind CSS y capacidades sin conexión impulsadas por Serwist para el almacenamiento en caché del service worker."
        },
        "16": {
          "title": "Rastreador VPD",
          "desc": "Calculadora de déficit de presión de vapor (VPD). Mide la diferencia entre la cantidad de humedad actualmente en el aire y la cantidad máxima de humedad que el aire puede contener a una temperatura específica. Es una métrica crítica para optimizar el crecimiento de las plantas, ya que afecta directamente la capacidad de una planta para transpirar y absorber nutrientes. Instalable en Android, iOS y Escritorio"
        },
        "17": {
          "title": "Legal Flow",
          "desc": "LegalFlow AI es una plataforma SaaS multi-tenant que moderniza el proceso de admisión de clientes para los despachos de abogados alemanes. Sustituye los formularios tradicionales en papel y las interminables llamadas telefónicas por un portal web seguro e integrado, donde los clientes potenciales pueden enviar sus asuntos legales de forma segura. Internamente, utiliza LLM para analizar al instante los datos de admisión, generar resúmenes concisos de los casos, extraer hechos clave e identificar automáticamente plazos legales críticos. Desarrollada con Next.js, MongoDB y Stripe, la plataforma garantiza un estricto cumplimiento del RGPD (GDPR) y ahorra a los abogados horas de trabajo administrativo cada semana."
        }
      },
      "summary": {
        "heading": [
          "Enfoque de",
          "Ingeniería"
        ],
        "intro": "Un estándar constante de calidad se mantiene en todo el portafolio a través de una ingeniería de nivel experto.",
        "categories": [
          {
            "num": "01",
            "title": "Aplicaciones de IA",
            "desc": "Sitios que usan Gemini 3.0 Pro como un motor arquitectónico central.",
            "items": [
              {
                "name": "Fine Truth",
                "desc": "Motor de verificación forense por IA con puntuaciones en tiempo real."
              },
              {
                "name": "Can We Talk?",
                "desc": "Interfaz de chat multiusuario con análisis emocional y verificación de datos."
              },
              {
                "name": "Lifestory AI Creative",
                "desc": "App de autobiografía con escritura asistida por IA y servicio de impresión."
              }
            ]
          },
          {
            "num": "02",
            "title": "Suites Profesionales",
            "desc": "Plataformas que enfatizan la integridad de los datos, la privacidad y la eficiencia.",
            "items": [
              {
                "name": "Kanzlei Intake Suite",
                "desc": "Admisión legal estructurada con barandillas según la jurisdicción."
              },
              {
                "name": "Launchpad SaaS",
                "desc": "Plataforma de despliegue de plantillas con Project Vaults y acceso a credenciales controladas."
              }
            ]
          },
          {
            "num": "03",
            "title": "Educación y Comunidad",
            "desc": "Sitios centrados en la utilidad, datos en tiempo real y coherencia educativa.",
            "items": [
              {
                "name": "BarStart DE",
                "desc": "Centro de formación de bartenders interactivo con base de datos de recetas."
              },
              {
                "name": "OBCG Portal",
                "desc": "Panel de uso de agua comunitaria con análisis en tiempo real."
              }
            ]
          }
        ],
        "techEyebrow": "Resumen Técnico",
        "techDesc": "En todos los sitios, la calidad se mantiene a través de un stack de nivel experto:",
        "techTiers": [
          {
            "label": "Frontend",
            "detail": "Next.js (95%), TypeScript (90%) — seguridad de tipos y rendimiento."
          },
          {
            "label": "Interactividad",
            "detail": "GSAP, Framer Motion (85%) — componentes UI de alta fidelidad."
          },
          {
            "label": "Backend",
            "detail": "Node.js (88%), Prisma, PostgreSQL/MongoDB (82%) — arquitecturas robustas."
          }
        ],
        "closing": "Estos sitios representan un estándar de ingeniería de alto rendimiento para ofrecer resultados fiables, escalables y centrados en el usuario."
      },
      "viewLabel": (title) => `Ver ${title}`
    },
    "skills": {
      "label": "Experiencia",
      "heading": [
        "Mi",
        "Stack"
      ],
      "techLabel": "Tecnologías"
    },
    "closing": {
      "eyebrow": "Argumento Final",
      "quote": "Una declaración de intenciones sobre cómo debería sentirse la web moderna: increíblemente rápida, ferozmente privada y profundamente inteligente funcionalmente.",
      "attribution": "El Veredicto",
      "audioLabel": "Escucha el Thriller Técnico completo"
    },
    "contact": {
      "big": [
        "Construyamos",
        "algo",
        "genial."
      ],
      "info": {
        "email": "Email",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "location": "Ubicación",
        "locationValue": "Remoto — Mundial"
      },
      "desc": "Actualmente estoy disponible para proyectos freelance, roles de tiempo completo y colaboraciones emocionantes. Si tienes un proyecto en mente o solo quieres hablar, mi bandeja de entrada está abierta.",
      "cta": "Iniciar conversación",
      "modal": {
        "eyebrow": "Contacto",
        "title": "Iniciar conversación",
        "close": "Cerrar",
        "name": "Nombre",
        "email": "Email",
        "subject": "Asunto",
        "message": "Mensaje",
        "send": "Enviar",
        "sending": "Enviando...",
        "success": "Mensaje enviado. Te responderé pronto.",
        "errorDefault": "Algo salió mal. Inténtalo de nuevo."
      }
    },
    "footer": "Construido con Next.js y GSAP",
    resume: {
        "contact": "Contacto",
        "skills": "Habilidades",
        "experience": "Experiencia",
        "education": "Educación",
        "title": "Desarrollador Full Stack",
        "location": "Ciudad, Estado",
        "summary": "Desarrollador Full Stack e Ingeniero de IA altamente adaptable con una sólida formación en medios digitales y estrategia de marca. Historial probado en el diseño de arquitecturas web escalables, la integración de sistemas backend complejos y la creación de interfaces de usuario responsivas y de alto rendimiento. Experto en aprovechar tanto la perspicacia técnica como la experiencia en marketing creativo para impulsar la participación del usuario y ofrecer productos digitales impactantes.",
        "download": "Descargar PDF",
        "myResumeLabel": "Mi ",
        "myResumeHighlight": "Currículum",
        "profSummary": "Resumen Profesional",
        "jobs": [
            {
                "date": "2016 - Presente",
                "company": "Orchard Beach Community Group",
                "title": "Desarrollador de Software",
                "desc1": "Lideró el desarrollo integral de un portal comunitario exhaustivo. Diseñó una arquitectura backend robusta y escalable utilizando MongoDB para manejar relaciones de datos complejas y sincronización en tiempo real.",
                "desc2": "Ideó un sistema de facturación automatizado seguro y un panel administrativo intuitivo, impulsando una eficiencia operativa significativa. Desarrolló una solución CRM personalizada adaptada a los flujos de trabajo únicos de gestión de miembros, mejorando en última instancia la participación de la comunidad y la organización de datos."
            },
            {
                "date": "2019 - 2021",
                "company": "The Evil Burrito",
                "title": "Desarrollador Javascript",
                "desc1": "Conceptualizó, diseñó e implementó una web responsiva de alto rendimiento y visualmente impactante que elevó la presencia digital de la marca y la experiencia del usuario.",
                "desc2": "Ideó y ejecutó estrategias de marketing basadas en datos para aumentar la adquisición de clientes. Produjo material de marketing digital y físico convincente, y lideró campañas innovadoras de marketing de guerrilla que amplificaron con éxito la conciencia de marca en grupos demográficos objetivo clave."
            },
            {
                "date": "2008 - 2012",
                "company": "Pirate's Booty",
                "title": "Gerente de Marca de Área",
                "desc1": "Cultivé relaciones B2B estratégicas con la gerencia minorista, manteniendo constantemente récords de ventas regionales de alto rendimiento a lo largo de mi mandato. Diseñé y ejecuté exhibiciones de productos de alto impacto y material de marketing impreso para impulsar la publicidad regional y las conversiones en el punto de venta.",
                "desc2": "Dirigí iniciativas de marketing experiencial y gestioné eventos de demostración de alta visibilidad. Recluté, capacité y lideré un equipo de embajadores de marca dinámicos, garantizando mensajes consistentes y elevando la presencia general de la marca en el mercado."
            },
            {
                "date": "2008 - 2012",
                "company": "Encore Nationwide",
                "title": "Embajador de Marca y Gerente de Campaña",
                "desc1": "Dirigí la campaña de alto perfil 'Camp Vegas', gestionando estrategias promocionales de extremo a extremo y operaciones de eventos para impulsar el conocimiento de la marca a nivel regional. Ejecuté la distribución de información dirigida y demostraciones de productos de alta energía en los principales eventos.",
                "desc2": "Trabajé como modelo promocional principal y embajador de marca para promociones de licores premium e iniciativas de muestreo. Entregué consistentemente un compromiso excepcional del consumidor, maximizando la visibilidad de la marca e impulsando la adquisición directa de consumidores."
            },
            {
                "date": "2008 - 2012",
                "company": "Level 1 Promotion",
                "title": "Embajador de Marca",
                "desc1": "Me desempeñé como Embajador de Marca 'Allstar' de élite y modelo promocional, actuando como representante dinámico de primera línea para carteras de clientes diversas y de alto perfil. Ejecuté campañas dirigidas de marketing de base y de guerrilla para maximizar la visibilidad de la marca y el alcance del consumidor.",
                "desc2": "Facilité la interacción directa con el consumidor a través de demostraciones de productos de alta energía e iniciativas de muestreo. Recopilé datos de campo procesables y comentarios de los consumidores para refinar futuras estrategias de marketing y optimizar el ROI general del evento."
            },
            {
                "date": "2008 - 2012",
                "company": "House of Blues Entertainment",
                "title": "Coordinador de Eventos y Promociones",
                "desc1": "Orquesté eventos de entretenimiento en vivo de principio a fin, negociando y reservando actos de alto perfil, mientras ejecutaba estrategias integrales de promoción para maximizar la asistencia. Gestioné listas de correo específicas para impulsar la interacción de la audiencia y la venta de entradas.",
                "desc2": "Dirigí las operaciones del equipo en el lugar y la gestión de la lista de invitados, asegurando una ejecución impecable del evento. Prioricé una experiencia excepcional para el cliente, manteniendo consistentemente altas tasas de satisfacción en todos los recintos y presentaciones."
            }
        ],
        "edu": [
            {
                "date": "2026",
                "school": "Google AI Professional Certificate",
                "degree": "Profesional Certificado",
                "desc": "Demostró competencia en conceptos de inteligencia artificial, ingeniería rápida (prompt engineering) y flujos de trabajo modernos de desarrollo de IA para resolver problemas técnicos complejos."
            },
            {
                "date": "2011",
                "school": "SAE/Ex'pression College for Digital Arts",
                "degree": "Licenciatura en Ciencias Aplicadas",
                "desc": "Especializado en medios digitales, diseño interactivo y producción multimedia, estableciendo una base rigurosa en tecnología creativa y experiencias digitales."
            },
            {
                "date": "2011",
                "school": "Apple Certified Pro / Logic Pro",
                "degree": "Apple Certified Master Pro",
                "desc": "Experiencia reconocida en ingeniería de audio profesional, diseño de sonido y procesamiento avanzado en estaciones de trabajo de audio digital."
            }
        ]
    }
  },
  fr: {
    "nav": {
      "about": "À propos",
      "work": "Projets",
      "skills": "Compétences",
      "contact": "Contact",
      "switchLabel": "Changer de langue"
    },
    "hero": {
      "tag": "Disponible pour travailler — 2026",
      "title": [
        "FULL",
        "STACK",
        "DEV"
      ],
      "subtitle": "Je construis des expériences numériques rapides, évolutives et visuellement frappantes en utilisant Next.js, React et les technologies web modernes.",
      "scroll": "Défiler",
      "quote": {
        "eyebrow": "Note d'un lecteur",
        "body": "Entrez dans le monde d'un développeur qui traite le code non seulement comme un outil mais comme une discipline... cela se lit moins comme un CV et plus comme un thriller technique."
      }
    },
    "about": {
      "label": "À Propos de Moi",
      "heading": [
        "Le code comme",
        "artisanat"
      ],
      "text": "Je crée des applications web performantes qui repoussent les limites de ce qui est possible dans un navigateur. Je me spécialise dans la création d'expériences utilisateur fluides, des interfaces au pixel près aux architectures backend évolutives.",
      "stats": [
        {
          "num": "10+",
          "target": "10",
          "suffix": "+",
          "label": "Années d'Expérience"
        },
        {
          "num": "100%",
          "target": "100",
          "suffix": "%",
          "label": "Livraison à Temps"
        }
      ]
    },
    "sectionLines": {
      "work": "02 — Projets Sélectionnés",
      "skills": "03 — Compétences et Technologies"
    },
    "projects": {
      "heading": [
        "Projets",
        "Sélectionnés"
      ],
      "countSuffix": "projets",
      "items": {
        "10": {
          "title": "HandyWrap\nE-Commerce",
          "desc": "Boutique en ligne de coques de téléphone avec configurateur en direct et paiement Stripe."
        },
        "11": {
          "title": "Learn Next.js\nNext.js",
          "desc": "Plateforme d'apprentissage Next.js avec éditeur de code intégré et animations 3D."
        },
        "12": {
          "title": "PDFKit\nNext.js",
          "criticQuote": "Manipule les données binaires brutes directement dans le moteur V8.",
          "criticLabel": "Citation Critique",
          "desc": "Boîte à outils PDF 100% côté client préservant la confidentialité."
        },
        "13": {
          "title": "Next Practice",
          "desc": "Next Practice est un environnement d'apprentissage interactif et local Next.js 16 distribué sous forme de package autonome. Conçu pour un apprentissage pratique, il offre un flux de travail côte à côte unique où les étudiants corrigent du code intentionnellement incomplet ou erroné dans leur IDE et voient instantanément les résultats dans leur navigateur. L'application propose 20 leçons ciblées couvrant les concepts essentiels de l'App Router de Next.js, y compris les routes dynamiques, les server actions, les métadonnées et les mises à jour optimistes. Son architecture garantit que le serveur de développement reste stable même lorsque les fichiers de leçon contiennent des erreurs, assurant une expérience éducative ininterrompue."
        },
        "14": {
          "title": "Communiversity",
          "desc": "Étudiez n'importe quoi. Gemini crée le cours complet pour vous avec un tuteur IA intégré."
        },
        "01": {
          "title": "BarStart DE\nApp Réf.",
          "desc": "PWA de formation de barman en allemand, conçue d'abord pour mobile. Enseigne les bases via des recettes et des quiz interactifs. Fonctionne hors ligne."
        },
        "02": {
          "title": "Portail\nOBCG",
          "desc": "Application web full-stack sophistiquée en Next.js et MongoDB/BSON. Optimisation des performances et implémentation de pipelines CI/CD."
        },
        "03": {
          "title": "Kanzlei Intake Suite\nSaisie de Données",
          "criticQuote": "La différence entre un gadget d'IA et un outil conforme prêt pour la production.",
          "criticLabel": "Citation Critique",
          "desc": "SaaS d'intégration juridique bilingue pour l'Allemagne et les États-Unis. Digitalise l'intégration des clients."
        },
        "04": {
          "title": "Launchpad\nSaaS Gemini",
          "desc": "Plateforme de déploiement de modèles SaaS avec vérification de licence multicouche."
        },
        "05": {
          "title": "Fine Truth\nAudit Légal",
          "desc": "Audit des conditions abusives sur les sites web avec attribution d'un score de confiance généré par Gemini."
        },
        "06": {
          "title": "Can We Talk?\nMoteur de Communication IA",
          "desc": "Chat en temps réel avec un médiateur IA pour faciliter les conversations difficiles."
        },
        "07": {
          "title": "UX/UI\nEffets",
          "desc": "Curseur interactif avant/après montrant la luminescence d'une montre."
        },
        "08": {
          "title": "Lifestory\nCréation IA",
          "desc": "Application Android d'autobiographie aidée par IA."
        },
        "09": {
          "title": "TSLearn\nTypescript",
          "criticQuote": "Rend l'apprentissage véritablement joyeux grâce à l'accélération GPU.",
          "criticLabel": "Citation Critique",
          "desc": "Apprentissage interactif de TypeScript via 35 leçons avec rendus 3D et shaders GLSL."
        },
        "15": {
          "title": "AdminPilot\nLife Admin",
          "desc": "AdminPilot est une Progressive Web App (PWA) mobile-first conçue pour automatiser les tâches administratives quotidiennes. Elle extrait les actions à mener, les échéances et les montants financiers à partir de textes bruts, de PDF importés et d'e-mails transférés. Conçue avec Next.js 16 (React 19) et sécurisée avec Clerk pour l'authentification, l'application exploite le SDK Vercel AI intégré à Google Gemini (gemini-2.5-flash) pour lire, structurer et catégoriser les fichiers reçus ou le contenu copié-collé en tâches détaillées et en brouillons de réponse. Pour assurer une intégration fluide des e-mails, la plateforme dispose d'un webhook SendGrid pour les e-mails entrants qui redirige automatiquement les messages transférés vers scan@inbox.ryanernstnyberg.com directement dans la boîte de réception de l'utilisateur correspondant au sein de l'application. La couche de base de données est propulsée par Neon Serverless Postgres via Prisma ORM pour des requêtes sécurisées et typées. Enfin, l'expérience utilisateur est optimisée pour des interactions fluides de type natif sur tous les appareils, avec une navigation responsive stylisée avec Tailwind CSS et des fonctionnalités hors ligne gérées par Serwist pour la mise en cache des service workers."
        },
        "16": {
          "title": "Traqueur VPD",
          "desc": "Calculateur de déficit de pression de vapeur (VPD). Il mesure la différence entre la quantité d'humidité actuellement dans l'air et la quantité maximale d'humidité que l'air peut contenir à une température spécifique. C'est une mesure essentielle pour optimiser la croissance des plantes, car elle affecte directement la capacité d'une plante à transpirer et à absorber les nutriments. Installable sur Android, iOS et ordinateur de bureau"
        },
        "17": {
          "title": "Legal Flow",
          "desc": "LegalFlow AI est une plateforme SaaS multi-tenant qui modernise le processus d'accueil des clients pour les cabinets d'avocats allemands. Elle remplace les formulaires papier traditionnels et les échanges téléphoniques interminables par un portail web sécurisé et intégré, où les clients potentiels peuvent transmettre leurs questions juridiques en toute sécurité. En arrière-plan, elle exploite des LLM pour analyser instantanément les données d'admission, générer des résumés de dossier concis, extraire les faits essentiels et identifier automatiquement les échéances juridiques critiques. Conçue avec Next.js, MongoDB et Stripe, la plateforme garantit une conformité stricte au RGPD (GDPR) tout en faisant gagner chaque semaine aux avocats des heures de travail administratif."
        }
      },
      "summary": {
        "heading": [
          "Approche",
          "Ingénierie"
        ],
        "intro": "Une qualité constante est maintenue grâce à une ingénierie de pointe.",
        "categories": [
          {
            "num": "01",
            "title": "Applications IA",
            "desc": "Sites utilisant Gemini.",
            "items": [
              {
                "name": "Fine Truth",
                "desc": "Audit par IA."
              },
              {
                "name": "Can We Talk?",
                "desc": "Chat avec médiateur."
              },
              {
                "name": "Lifestory",
                "desc": "Autobiographie IA."
              }
            ]
          },
          {
            "num": "02",
            "title": "Suites Professionnelles",
            "desc": "Plateformes robustes.",
            "items": [
              {
                "name": "Kanzlei Intake",
                "desc": "Admission juridique."
              },
              {
                "name": "Launchpad",
                "desc": "Modèles SaaS."
              }
            ]
          },
          {
            "num": "03",
            "title": "Communauté et Éducation",
            "desc": "Plateformes éducatives.",
            "items": [
              {
                "name": "BarStart",
                "desc": "Formation barman."
              },
              {
                "name": "OBCG Portal",
                "desc": "Tableau de bord."
              }
            ]
          }
        ],
        "techEyebrow": "Résumé Technique",
        "techDesc": "Un stack technologique expert:",
        "techTiers": [
          {
            "label": "Frontend",
            "detail": "Next.js, TypeScript"
          },
          {
            "label": "Interactif",
            "detail": "GSAP, Framer Motion"
          },
          {
            "label": "Backend",
            "detail": "Node.js, Prisma, PostgreSQL"
          }
        ],
        "closing": "Ingénierie performante centrée sur l'utilisateur."
      },
      "viewLabel": (title) => `Voir ${title}`
    },
    "skills": {
      "label": "Expertise",
      "heading": [
        "Mon",
        "Stack"
      ],
      "techLabel": "Technologies"
    },
    "closing": {
      "eyebrow": "Argument Final",
      "quote": "Rapide, privé et profondément intelligent.",
      "attribution": "Le Verdict",
      "audioLabel": "Écoutez l'audio"
    },
    "contact": {
      "big": [
        "Créons",
        "quelque",
        "chose."
      ],
      "info": {
        "email": "Email",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "location": "Lieu",
        "locationValue": "À distance"
      },
      "desc": "Je suis disponible pour des projets.",
      "cta": "Commencer",
      "modal": {
        "eyebrow": "Contact",
        "title": "Contactez-moi",
        "close": "Fermer",
        "name": "Nom",
        "email": "Email",
        "subject": "Sujet",
        "message": "Message",
        "send": "Envoyer",
        "sending": "Envoi...",
        "success": "Message envoyé.",
        "errorDefault": "Erreur."
      }
    },
    "footer": "Créé avec Next.js & GSAP",
    resume: {
        "contact": "Contact",
        "skills": "Compétences",
        "experience": "Expérience",
        "education": "Éducation",
        "title": "Développeur Full Stack",
        "location": "Ville, État",
        "summary": "Développeur Full Stack et Ingénieur IA très adaptable avec une solide formation dans les médias numériques et la stratégie de marque. Expérience confirmée dans la conception d'architectures web évolutives, l'intégration de systèmes backend complexes et la création d'interfaces utilisateur réactives et très performantes. Expert dans l'exploitation de la perspicacité technique et de l'expérience en marketing créatif pour stimuler l'engagement des utilisateurs et proposer des produits numériques percutants.",
        "download": "Télécharger le PDF",
        "myResumeLabel": "Mon ",
        "myResumeHighlight": "CV",
        "profSummary": "Résumé Professionnel",
        "jobs": [
            {
                "date": "2016 - Présent",
                "company": "Orchard Beach Community Group",
                "title": "Développeur Logiciel",
                "desc1": "A dirigé le développement de bout en bout d'un portail communautaire complet. A conçu une architecture backend robuste et évolutive utilisant MongoDB pour gérer des relations de données complexes et une synchronisation en temps réel.",
                "desc2": "A conçu un système de facturation automatisé sécurisé et un tableau de bord administratif intuitif, favorisant une efficacité opérationnelle significative. A développé une solution CRM personnalisée adaptée aux flux de travail uniques de gestion des membres, améliorant en fin de compte l'engagement de la communauté et l'organisation des données."
            },
            {
                "date": "2019 - 2021",
                "company": "The Evil Burrito",
                "title": "Développeur Javascript",
                "desc1": "A conceptualisé, conçu et déployé un site web réactif hautement performant et visuellement frappant qui a élevé la présence numérique de la marque et l'expérience utilisateur.",
                "desc2": "A conçu et exécuté des stratégies de marketing basées sur les données pour accroître l'acquisition de clients. A produit des supports marketing numériques et physiques convaincants, et a dirigé des campagnes innovantes de guérilla marketing qui ont amplifié avec succès la notoriété de la marque dans des groupes démographiques cibles clés."
            },
            {
                "date": "2008 - 2012",
                "company": "Pirate's Booty",
                "title": "Responsable de Marque de Secteur",
                "desc1": "J'ai cultivé des relations B2B stratégiques avec la direction des ventes au détail, en maintenant constamment des records de ventes régionaux tout au long de mon mandat. J'ai conçu et exécuté des présentations de produits à fort impact et des supports de marketing imprimés pour stimuler la publicité régionale et les conversions sur le lieu de vente.",
                "desc2": "J'ai dirigé des initiatives de marketing expérientiel et géré des événements de démonstration à haute visibilité. J'ai recruté, formé et dirigé une équipe d'ambassadeurs de marque dynamiques, assurant une communication cohérente et renforçant la présence globale de la marque sur le marché."
            },
            {
                "date": "2008 - 2012",
                "company": "Encore Nationwide",
                "title": "Ambassadeur de Marque et Responsable de Campagne",
                "desc1": "J'ai dirigé la campagne de premier plan 'Camp Vegas', gérant les stratégies promotionnelles de bout en bout et les opérations événementielles pour stimuler la notoriété régionale de la marque. J'ai exécuté une distribution d'informations ciblée et des démonstrations de produits dynamiques lors d'événements majeurs.",
                "desc2": "J'ai agi en tant que modèle promotionnel principal et ambassadeur de marque pour des promotions de spiritueux haut de gamme et des initiatives d'échantillonnage. J'ai constamment offert un engagement exceptionnel aux consommateurs, maximisant la visibilité de la marque et stimulant l'acquisition directe de consommateurs."
            },
            {
                "date": "2008 - 2012",
                "company": "Level 1 Promotion",
                "title": "Ambassadeur de Marque",
                "desc1": "J'ai agi en tant qu'Ambassadeur de Marque 'Allstar' d'élite et modèle promotionnel, servant de représentant dynamique en première ligne pour des portefeuilles de clients divers et de premier plan. J'ai exécuté des campagnes de guérilla marketing et de terrain ciblées pour maximiser la visibilité de la marque et la portée auprès des consommateurs.",
                "desc2": "J'ai facilité l'engagement direct des consommateurs par le biais de démonstrations de produits dynamiques et d'initiatives d'échantillonnage. J'ai recueilli des données sur le terrain exploitables et des retours de consommateurs pour affiner les futures stratégies de marketing et optimiser le retour sur investissement global des événements."
            },
            {
                "date": "2008 - 2012",
                "company": "House of Blues Entertainment",
                "title": "Coordinateur d'Événements et de Promotions",
                "desc1": "J'ai orchestré des événements de divertissement en direct de bout en bout, en négociant et en réservant des artistes de premier plan, tout en exécutant des stratégies de promotion complètes pour maximiser la participation. J'ai géré des listes de diffusion ciblées pour stimuler l'engagement du public et les ventes de billets.",
                "desc2": "J'ai dirigé les opérations de l'équipe sur place et la gestion de la liste des invités, assurant une exécution sans faille de l'événement. J'ai accordé la priorité à une expérience client exceptionnelle, en maintenant constamment des taux de satisfaction élevés pour toutes les représentations."
            }
        ],
        "edu": [
            {
                "date": "2026",
                "school": "Google AI Professional Certificate",
                "degree": "Professionnel Certifié",
                "desc": "A démontré sa compétence dans les concepts d'intelligence artificielle, l'ingénierie des prompts et les flux de travail modernes de développement de l'IA pour résoudre des problèmes techniques complexes."
            },
            {
                "date": "2011",
                "school": "SAE/Ex'pression College for Digital Arts",
                "degree": "Licence en Sciences Appliquées",
                "desc": "Spécialisé dans les médias numériques, le design interactif et la production multimédia, établissant une base rigoureuse dans la technologie créative et les expériences numériques."
            },
            {
                "date": "2011",
                "school": "Apple Certified Pro / Logic Pro",
                "degree": "Apple Certified Master Pro",
                "desc": "Expertise reconnue dans l'ingénierie audio professionnelle, le design sonore et le traitement avancé sur les stations de travail audio numériques."
            }
        ]
    }
  },
  nl: {
    "nav": {
      "about": "Over",
      "work": "Werk",
      "skills": "Vaardigheden",
      "contact": "Contact",
      "switchLabel": "Taal wisselen"
    },
    "hero": {
      "tag": "Beschikbaar voor werk — 2026",
      "title": [
        "FULL",
        "STACK",
        "DEV"
      ],
      "subtitle": "Ik bouw snelle, schaalbare en visueel opvallende digitale ervaringen met Next.js en React.",
      "scroll": "Scrollen",
      "quote": {
        "eyebrow": "Opmerking van de lezer",
        "body": "Een technische thriller over code..."
      }
    },
    "about": {
      "label": "Over Mij",
      "heading": [
        "Code als",
        "ambacht"
      ],
      "text": "Ik maak high-performance webapplicaties die grenzen verleggen.",
      "stats": [
        {
          "num": "10+",
          "target": "10",
          "suffix": "+",
          "label": "Jaren Ervaring"
        },
        {
          "num": "100%",
          "target": "100",
          "suffix": "%",
          "label": "Op Tijd"
        }
      ]
    },
    "sectionLines": {
      "work": "02 — Geselecteerd Werk",
      "skills": "03 — Vaardigheden"
    },
    "projects": {
      "heading": [
        "Geselecteerd",
        "Werk"
      ],
      "countSuffix": "projecten",
      "items": {
        "10": {
          "title": "HandyWrap",
          "desc": "E-commerce platform voor telefoonhoesjes."
        },
        "11": {
          "title": "Learn Next.js",
          "desc": "Leren van Next.js met live code editor."
        },
        "12": {
          "title": "PDFKit",
          "criticQuote": "Manipuleert binaire data in de V8 engine.",
          "criticLabel": "Citaat",
          "desc": "Offline PDF tools in de browser."
        },
        "13": {
          "title": "Next Practice",
          "desc": "Next Practice is een interactieve, lokale Next.js 16 leeromgeving die wordt gedistribueerd als een op zichzelf staand pakket. Ontworpen voor hands-on leren, biedt het een unieke side-by-side workflow waarbij studenten opzettelijk onvolledige of foutieve code in hun IDE repareren en de resultaten onmiddellijk in hun browser zien. De app bevat 20 gerichte lessen die essentiële Next.js App Router-concepten behandelen, waaronder dynamische routes, server actions, metadata en optimistische updates. De architectuur zorgt ervoor dat de dev-server stabiel blijft, zelfs als lesbestanden fouten bevatten, waardoor een ononderbroken educatieve ervaring wordt gegarandeerd."
        },
        "14": {
          "title": "Communiversity",
          "desc": "Leer alles met Gemini AI leraar."
        },
        "01": {
          "title": "BarStart DE",
          "desc": "Duitstalige bartending PWA met offline support."
        },
        "02": {
          "title": "OBCG Portal",
          "desc": "Complexe full-stack MongoDB applicatie."
        },
        "03": {
          "title": "Kanzlei Intake",
          "criticQuote": "Een productieklare juridische tool.",
          "criticLabel": "Citaat",
          "desc": "Tweetalige SaaS voor advocatenkantoren."
        },
        "04": {
          "title": "Launchpad",
          "desc": "SaaS template platform met licentie verificatie."
        },
        "05": {
          "title": "Fine Truth",
          "desc": "AI website auditor voor verborgen kosten."
        },
        "06": {
          "title": "Can We Talk?",
          "desc": "AI-geassisteerde chat voor moeilijke gesprekken."
        },
        "07": {
          "title": "UX/UI Effecten",
          "desc": "Interactieve slider voor horloges."
        },
        "08": {
          "title": "Lifestory",
          "desc": "AI autobiografie Android app."
        },
        "09": {
          "title": "TSLearn",
          "criticQuote": "Maakt leren leuk.",
          "criticLabel": "Citaat",
          "desc": "TypeScript leren met WebGL."
        },
        "15": {
          "title": "AdminPilot\nLife Admin",
          "desc": "AdminPilot is een mobielvriendelijke Progressive Web App (PWA) die ontworpen is om alledaagse administratieve taken te automatiseren. De app extraheert actiepunten, deadlines en geldbedragen uit ruwe tekst, geüploade PDF's en doorgestuurde e-mails. Gebouwd op Next.js 16 (React 19) en veilig geauthenticeerd via Clerk, maakt de applicatie gebruik van de Vercel AI SDK geïntegreerd met Google Gemini (gemini-2.5-flash) om binnenkomende bestanden of gekopieerde inhoud te lezen, te structureren en te categoriseren in gedetailleerde taken en conceptantwoorden. Om een naadloze e-mailintegratie te ondersteunen, beschikt het platform over een SendGrid Inbound Email Webhook die e-mails die zijn doorgestuurd naar scan@inbox.ryanernstnyberg.com automatisch doorstuurt naar de inbox van de bijbehorende gebruiker in de app. De databaselaag wordt aangedreven door Neon Serverless Postgres met behulp van Prisma ORM voor typeveilige databasequery's. Tot slot is de gebruikerservaring geoptimaliseerd voor native-achtige interacties op verschillende apparaten, met een responsief navigatiesysteem gestyled met Tailwind CSS en offline mogelijkheden aangedreven door Serwist voor service worker-caching."
        },
        "16": {
          "title": "VPD Tracker",
          "desc": "Dampdruktekort (VPD) calculator. Deze meet het verschil tussen de hoeveelheid vocht die momenteel in de lucht zit en de maximale hoeveelheid vocht die de lucht bij een specifieke temperatuur kan bevatten. Het is een cruciale waarde voor het optimaliseren van de plantengroei, omdat het direct invloed heeft op het vermogen van een plant om te transpireren en voedingsstoffen op te nemen. Installeerbaar op Android, iOS en desktop"
        },
        "17": {
          "title": "Legal Flow",
          "desc": "LegalFlow AI is een multi-tenant SaaS-platform dat het cliëntintakeproces voor Duitse advocatenkantoren moderniseert. Het vervangt traditionele papieren formulieren en eindeloos heen-en-weer bellen door een veilige, ingebedde webportal waar potentiële cliënten hun juridische kwesties veilig kunnen indienen. Achter de schermen gebruikt het LLM's om intakegegevens direct te analyseren, beknopte zaakoverzichten te genereren, belangrijke feiten te extraheren en kritieke wettelijke termijnen automatisch te identificeren. Het platform is gebouwd met Next.js, MongoDB en Stripe, waarborgt strikte AVG (GDPR)-naleving en bespaart advocaten elke week uren administratief werk."
        }
      },
      "summary": {
        "heading": [
          "Engineering",
          "Aanpak"
        ],
        "intro": "Kwaliteit in het hele portfolio.",
        "categories": [
          {
            "num": "01",
            "title": "AI Apps",
            "desc": "Gemini",
            "items": []
          },
          {
            "num": "02",
            "title": "Professioneel",
            "desc": "SaaS",
            "items": []
          },
          {
            "num": "03",
            "title": "Educatie",
            "desc": "Leren",
            "items": []
          }
        ],
        "techEyebrow": "Technisch Overzicht",
        "techDesc": "Expert level stack:",
        "techTiers": [
          {
            "label": "Frontend",
            "detail": "Next.js"
          }
        ],
        "closing": "Hoogwaardige engineering."
      },
      "viewLabel": (title) => `Bekijk ${title}`
    },
    "skills": {
      "label": "Expertise",
      "heading": [
        "Mijn",
        "Stack"
      ],
      "techLabel": "Technologieën"
    },
    "closing": {
      "eyebrow": "Slotpleidooi",
      "quote": "Snel, privé en intelligent.",
      "attribution": "Het Oordeel",
      "audioLabel": "Luister"
    },
    "contact": {
      "big": [
        "Laten we",
        "bouwen"
      ],
      "info": {
        "email": "Email",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "location": "Locatie",
        "locationValue": "Remote"
      },
      "desc": "Beschikbaar voor projecten.",
      "cta": "Begin gesprek",
      "modal": {
        "eyebrow": "Contact",
        "title": "Neem contact op",
        "close": "Sluiten",
        "name": "Naam",
        "email": "Email",
        "subject": "Onderwerp",
        "message": "Bericht",
        "send": "Verstuur",
        "sending": "Verzenden...",
        "success": "Verzonden.",
        "errorDefault": "Fout."
      }
    },
    "footer": "Gebouwd met Next.js & GSAP",
    resume: {
        "contact": "Contact",
        "skills": "Vaardigheden",
        "experience": "Ervaring",
        "education": "Opleiding",
        "title": "Full Stack Ontwikkelaar",
        "location": "Stad, Provincie",
        "summary": "Een zeer aanpasbare Full Stack Ontwikkelaar en AI-ingenieur met een sterke achtergrond in digitale media en merkstrategie. Bewezen staat van dienst in het ontwerpen van schaalbare webarchitecturen, het integreren van complexe backend-systemen en het maken van responsieve, hoogwaardige gebruikersinterfaces. Bedreven in het benutten van zowel technisch inzicht als creatieve marketingervaring om gebruikersbetrokkenheid te stimuleren en impactvolle digitale producten te leveren.",
        "download": "PDF Downloaden",
        "myResumeLabel": "Mijn ",
        "myResumeHighlight": "CV",
        "profSummary": "Professionele Samenvatting",
        "jobs": [
            {
                "date": "2016 - Heden",
                "company": "Orchard Beach Community Group",
                "title": "Softwareontwikkelaar",
                "desc1": "Leidde de end-to-end ontwikkeling van een uitgebreid communityportaal. Ontwikkelde een robuuste, schaalbare backend-architectuur met MongoDB om complexe data-relaties en real-time synchronisatie af te handelen.",
                "desc2": "Ontwierp een veilig geautomatiseerd factureringssysteem en een intuïtief administratief dashboard, wat de operationele efficiëntie aanzienlijk verhoogde. Ontwikkelde een op maat gemaakte CRM-oplossing, afgestemd op unieke workflows voor ledenbeheer, wat uiteindelijk de betrokkenheid van de community en de data-organisatie verbeterde."
            },
            {
                "date": "2019 - 2021",
                "company": "The Evil Burrito",
                "title": "Javascript Ontwikkelaar",
                "desc1": "Conceptualiseerde, ontwierp en implementeerde een hoogwaardige en visueel opvallende responsieve website die de digitale aanwezigheid van het merk en de gebruikerservaring naar een hoger niveau tilde.",
                "desc2": "Bedacht en voerde datagestuurde marketingstrategieën uit om de klantenwerving te vergroten. Produceerde overtuigend digitaal en fysiek marketingmateriaal en leidde innovatieve guerrillamarketingcampagnes die de naamsbekendheid bij belangrijke doelgroepen met succes vergrootten."
            },
            {
                "date": "2008 - 2012",
                "company": "Pirate's Booty",
                "title": "Area Brand Manager",
                "desc1": "Onderhield strategische B2B-relaties met retailmanagement en behaalde gedurende mijn hele dienstverband consequent regionale topverkooprecords. Ontwierp en implementeerde impactvolle productdisplays en printmarketingmateriaal om regionale advertenties en point-of-sale conversies te stimuleren.",
                "desc2": "Gaf leiding aan ervaringsgerichte marketinginitiatieven en beheerde opvallende demo-evenementen. Wierven, trainden en stuurden een team van dynamische Brand Ambassadors aan, zorgden voor consistente berichtgeving en verhoogden de algehele merkaanwezigheid in de markt."
            },
            {
                "date": "2008 - 2012",
                "company": "Encore Nationwide",
                "title": "Brand Ambassador & Campagnemanager",
                "desc1": "Leidde de spraakmakende 'Camp Vegas'-campagne, beheerde end-to-end promotiestrategieën en evenementenoperaties om regionale naamsbekendheid te stimuleren. Voerde gerichte informatieverspreiding en energieke productdemonstraties uit op grote evenementen.",
                "desc2": "Fungeerde als toonaangevend promotiemodel en brand ambassador voor premium likeurpromoties en sampling-initiatieven. Leverde consequent een uitzonderlijke consumentenbetrokkenheid, maximaliseerde de merkzichtbaarheid en stimuleerde directe klantenwerving."
            },
            {
                "date": "2008 - 2012",
                "company": "Level 1 Promotion",
                "title": "Brand Ambassador",
                "desc1": "Fungeerde als een elite 'Allstar' Brand Ambassador en promotiemodel, optredend als dynamische vertegenwoordiger in de frontlinie voor diverse, spraakmakende klantportfolio's. Voerde gerichte grassroots- en guerillamarketingcampagnes uit om de merkzichtbaarheid en het bereik onder consumenten te maximaliseren.",
                "desc2": "Faciliteerde directe consumentenbetrokkenheid via energieke productdemonstraties en sampling-initiatieven. Verzamelde bruikbare veldgegevens en consumentenfeedback om toekomstige marketingstrategieën te verfijnen en de algehele ROI van evenementen te optimaliseren."
            },
            {
                "date": "2008 - 2012",
                "company": "House of Blues Entertainment",
                "title": "Event & Promotie Coördinator",
                "desc1": "Organiseerde live entertainment-evenementen van A tot Z, inclusief het onderhandelen en boeken van bekende acts, en voerde uitgebreide promotiestrategieën uit om de bezoekersaantallen te maximaliseren. Beheerde gerichte mailinglijsten om de betrokkenheid van het publiek en de kaartverkoop te stimuleren.",
                "desc2": "Gaf leiding aan de crew op locatie en het gastenlijstbeheer, wat zorgde voor een vlekkeloze uitvoering van evenementen. Stelde een uitzonderlijke klantervaring voorop en handhaafde consequent hoge tevredenheidscijfers bij alle optredens."
            }
        ],
        "edu": [
            {
                "date": "2026",
                "school": "Google AI Professional Certificate",
                "degree": "Gecertificeerd Professional",
                "desc": "Kennis gedemonstreerd van kunstmatige intelligentie-concepten, prompt engineering en moderne AI-ontwikkelingsworkflows om complexe technische problemen op te lossen."
            },
            {
                "date": "2011",
                "school": "SAE/Ex'pression College for Digital Arts",
                "degree": "Bachelor of Applied Science",
                "desc": "Gespecialiseerd in digitale media, interactief ontwerp en multimediaproductie, met een solide basis in creatieve technologie en digitale ervaringen."
            },
            {
                "date": "2011",
                "school": "Apple Certified Pro / Logic Pro",
                "degree": "Apple Certified Master Pro",
                "desc": "Erkende expertise in professionele audiotechniek, sound design en geavanceerde verwerking op digitale audiowerkstations."
            }
        ]
    }
  },
};

const STORAGE_KEY = 'portfolio-lang';
const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: translations.en });

/**
 * Provider component that manages the application's current language state.
 * It detects the user's preferred language from localStorage or the browser navigator,
 * and passes the appropriate translation object down via context.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The LanguageContext Provider wrapping the children.
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (['en', 'de', 'es', 'fr', 'nl'].includes(stored)) {
        setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const browser = navigator.language?.toLowerCase() || '';
      if (browser.startsWith('de')) {
        setLangState('de');
        document.documentElement.lang = 'de';
      } else if (browser.startsWith('es')) {
        setLangState('es');
        document.documentElement.lang = 'es';
      } else if (browser.startsWith('fr')) {
        setLangState('fr');
        document.documentElement.lang = 'fr';
      } else if (browser.startsWith('nl')) {
        setLangState('nl');
        document.documentElement.lang = 'nl';
      } else {
        document.documentElement.lang = 'en';
      }
    } catch {
      // ignore (SSR / restricted storage)
    }
  }, []);

  const setLang = (next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    } catch {
      // ignore
    }
  };

  const value = { lang, setLang, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/**
 * Custom hook to access the current language state and translation utilities.
 * Must be used within a LanguageProvider.
 *
 * @returns {{
 *   lang: string,
 *   setLang: (lang: string) => void,
 *   t: Object
 * }} The language context containing the current lang string, the setter function, and the translated text object `t`.
 */
export function useLang() {
  return useContext(LanguageContext);
}
