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
      heading: ['Code as', 'craft'],
      text:
        "I craft high-performance web applications that push the boundaries of what's possible in a browser. With years of experience, I specialize in building seamless user experiences from pixel-perfect interfaces to scalable backend architectures.",
      stats: [
        { num: '10+', target: '10', suffix: '+', label: 'Years of Experience' },
        { num: '40+', target: '40', suffix: '+', label: 'Projects Shipped' },
        { num: '20+', target: '20', suffix: '+', label: 'Happy Clients' },
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
            'A German-language progressive web app that teaches bartending fundamentals through a drink library, "Bar Basics" modules, and a gamified quiz with a virtual tip jar. Built mobile-first and installable to the home screen, with full offline support so trainees can drill recipes behind the bar without a connection.\n\nHighlights\n- Drink library with recipes in cl, glassware guidance, technique tags (Aufbauen, Shaken, Rühren, Blenden), garnishes, and pro tips\n- Custom vector artwork — every drink, glass, and bar tool is rendered from a hand-coded illustration spec (no stock images), so the visuals stay crisp and themeable\n- Quiz mode (Einsteiger / Service) with per-drink progress tracking, "only mistakes" review pool, correct/wrong streaks, and a tip-jar reward system\n- Drink import — search the web for additional drinks and import them into the library, with image caching to data URLs for offline use\n- Persistence via localStorage for imported drinks, quiz progress, and tip jar state\n- PWA — service worker, offline fallback, web app manifest, iOS/Android install support\n\nStack\n- Next.js 16 (App Router) with React 19 and TypeScript\n- React Native Web — UI written against react-native primitives (View, Pressable, Animated, ScrollView) and rendered on the web, keeping a single component model that could port to native\n- Custom SVG illustration system for drinks, glassware, and bar tools driven by typed artwork specs\n- Service worker + Web App Manifest for installable PWA + offline mode\n- Vercel Analytics, Google Analytics, and Google Tag Manager via @next/third-parties\n- Deployed on Vercel',
        },
        '02': {
          title: 'OBCG\nPortal',
          desc:
            "Community portal that serves as a digital hub for members to monitor water usage, review annual quality reports, and access governance records on the front end. On the back end it serves as a customer billing and management system. The portal features a dynamic dashboard that provides real-time insights into water consumption patterns, allowing users to track their usage and identify opportunities for conservation. The executive team has access to customer histories and usage patterns and can instantly detect leaks even when they're not physically apparent — saving customers money.",
        },
        '03': {
          title: 'Kanzlei Intake Suite\nData Intake',
          criticQuote:
            'The difference between a flashy AI gimmick and a legally compliant, production-ready tool.',
          criticLabel: 'Critic’s Quote',
          desc:
            'A bilingual SaaS platform for law firms specializing in tax law, tax criminal law, and criminal defense — fully functional in both Germany and the United States, with localized intake flows, jurisdiction-aware legal framing, and language support for each market. The app digitizes the client intake process — from the first inquiry through to the lawyer\'s preparatory case briefing — and produces internal working documents (case summaries, potential lines of argument, statutory references, missing-information checklists) that make the first client meeting dramatically more efficient.\n\nWhat it does\n- Role-based workflows for secretariat staff, lawyers, and admins, each with a tailored view of the case\n- Multi-step intake form that captures the client\'s situation, documents, agencies involved, deadlines, and prior correspondence — adapted to the visitor\'s market (German tax/criminal law on the DE side, US federal/state framing on the US side)\n- AI-assisted case analysis using Google Gemini (with a fallback model chain) to draft internal briefings and surface possible legal arguments — explicitly flagged as internal working drafts, never as client advice\n- Document management with metadata, categorization, type/size validation, and secure private storage\n- Single-page lawyer workspace combining briefing, arguments, statutes, notes, and conversation history\n- PDF export of the lawyer\'s working view via pdf-lib\n- Audit log for full internal traceability\n- Public marketing surface — landing page, pricing with Stripe Checkout, public inquiry form, fictional demo, and full legal pages (Impressum, Datenschutz, Cookies for DE; equivalent privacy/terms framing for US) driven by environment-configured firm data\n- Companion desktop app (Electron) for lawyers and admins that authenticates against the web instance and caches all open prospect cases locally for offline review, with signed/notarized builds for macOS and Windows via GitHub Actions\n- Official statute corpus importer that pulls StGB, StPO, AO and related German criminal-law texts from Gesetze im Internet as reference material\n\nGeo-aware, multi-market experience\nThe platform is built as a true multi-jurisdiction product — Germany and the United States, federal, state, and local markets — and the public site adapts itself to the visitor\'s jurisdiction in real time:\n- Edge-level IP geolocation via Vercel\'s x-vercel-ip-country / x-vercel-ip-country-region headers (with Cloudflare header fallback) detects the country, state, and city without a round-trip to a third-party service\n- Jurisdiction-aware routing with dynamic segments for /eu/[country] and /us/[state] — Germany, all EU member states, and all 50 US states each have their own landing pages with localized intake messaging, applicable privacy regime, and references to the relevant local laws and regulators\n- Auto-detected region banner that surfaces when a visitor lands outside their nearest market, offering a one-click jump to the localized view, plus a manual country/language selector for when IP detection is ambiguous (VPNs, corporate proxies)\n- Privacy and disclaimer adaptation: GDPR/DSGVO language for EU visitors; US visitors see state-specific privacy framing (e.g. CCPA-adjacent jurisdictions) and clearer "no attorney-client relationship" notices that match US bar-association conventions\n- Language switching between German and English driven by the resolved market context, with a runtime translation cache to keep localized copy fast\n- Resolution priority chain: explicit URL market parameter → referrer market → IP-derived region → sensible default — so deep-link campaigns and shared URLs always win over geo-guessing\n- Market context flows into intake: the detected jurisdiction is captured on submitted inquiries so the firm knows which legal framework the lead is operating under before they pick up the phone\n\nTech stack\n- Framework: Next.js 16 (App Router), React 19, JavaScript\n- Styling: Tailwind CSS, Lucide icons\n- Database: PostgreSQL via Prisma ORM (Prisma Postgres in production)\n- Auth: Custom session-based authentication with server-stored sessions, role-based authorization, and personal invite links with expiry\n- AI: Google Gemini (@google/genai) with primary/fallback model chain for law analysis\n- Payments: Stripe Checkout for tiered subscription plans\n- Email: Resend for demo-access invitations\n- File storage: Vercel Blob in production (private access), local filesystem in development — switched automatically based on env\n- PDF generation: pdf-lib\n- Geo / i18n: Vercel edge geolocation headers, custom market-resolution layer, runtime translation cache (DE/EN), dynamic [market] and /eu/[country] / /us/[state] route segments\n- Hosting: Vercel (Fluid Compute, serverless functions, Routing Middleware for route protection)\n- Desktop: Electron with shared web auth, electron-builder for cross-platform signed releases, GitHub Actions CI for macOS notarization and Windows code-signing\n- Other: bcryptjs, fast-xml-parser (statute corpus parsing), adm-zip\n\nNotable engineering decisions\n- Strict legal-compliance guardrails: every AI-generated analysis is wrapped with the mandatory disclaimer "Potenzielle Argumentationslinien – nur zur anwaltlichen Prüfung" and the app makes no automated success predictions or binding legal statements\n- Environment-driven legal pages: Impressum/privacy/cookie pages render from LEGAL_* env vars so the same codebase can be deployed for different firms in either market\n- Internal pages are noindex and gated by middleware; only the demo, landing, pricing, and inquiry routes are publicly indexable\n- Originals stored outside /public to prevent accidental exposure; documents served through an authenticated app route',
        },
        '04': {
          title: 'Launchpad\nGemini Powered SaaS',
          desc:
            'A high-velocity, full-stack SaaS boilerplate designed to deploy production-ready applications in minutes. The core architecture leverages Gemini 3.0 Pro to provide advanced AI capabilities across a variety of specialized industry modules. A robust Stripe integration handles complex subscription models — including Starter, Pro, and Unlimited tiers — allowing for immediate monetization upon deployment.',
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
            "Next.js TypeScript learning resource. I built a comprehensive learning platform for TypeScript, featuring interactive coding challenges, real-time feedback, and a dynamic curriculum that adapts to the user's progress. The site includes a custom-built code editor with integrated TypeScript support, allowing users to practice and apply their skills in a hands-on environment. The graphics and animations are powered by Three.js and WebGL, creating an engaging learning experience that makes mastering TypeScript both fun and effective.",
        },
        '10': {
          title: 'HandyWrap\nE-Commerce',
          desc:
            "HandyWrap is a specialized e-commerce platform built to deliver a pixel-perfect user experience for creating personalized, high-quality phone cases. I used Prisma as the ORM to manage the application's scalable backend architecture, integrated Stripe for secure production-ready checkout, and combined Radix UI with Zod for accessible interface patterns and reliable validation.",
        },
        '11': {
          title: 'Learn Next\nNext.Js',
          desc:
            "Next Js learning resource. Lessons, exercises and lesson quizzes to help you learn Next.Js. I built a comprehensive learning platform for Next.Js, featuring interactive coding challenges, real-time feedback, and a dynamic curriculum that adapts to the user\'s progress. The site includes a custom-built code editor with integrated Next.Js support, allowing users to practice and apply their skills in a hands-on environment. The graphics and animations are powered by Three.js, and Gsap, creating an engaging and visually appealing learning experience that makes mastering Next.Js both fun and effective.",
        },
        '12': {
          title: 'PDFKit\nNext.Js',
          criticQuote:
            'Demonstrates a profound, intimate grasp of deep browser APIs… manipulating raw binary data entirely in the V8 engine.',
          criticLabel: 'Critic’s Quote',
          desc:
            'Browser-based PDF Toolkit\nA privacy-first, all-in-one progressive web app offering 20+ PDF tools that run entirely in the user browser, even if the user is offline — no files are ever uploaded to a server. Users can merge, split, compress, rotate, crop, reorder, and delete pages; convert between PDF and JPG; extract text; add watermarks, page numbers, annotations, and signatures; edit text; password-protect or unlock documents; and view file info.\n\nWhy it stands out\n- Zero-server architecture — every PDF operation happens client-side, so sensitive documents never leave the user\'s device.\n- 20+ feature routes organized as discrete tools under a single, consistent UI.\n- Instant performance — no upload/download round trips; processing is bounded only by the user\'s hardware.\n\nHighlights for recruiters/clients\n- Built on the latest React 19 and Next.js 16 App Router — modern Server Component architecture with client-side computation where it matters.\n- Installs on any device, and once installed, 100% functional offline\n- Demonstrates strong grasp of binary file manipulation, browser APIs (File, Blob, ArrayBuffer), and performance-sensitive UI work.\n- Privacy-by-design: a deliberate architectural choice, not an afterthought.',
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
                  'High-velocity boilerplate with production-grade Stripe integrations supporting complex subscription tiers.',
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
        { num: '40+', target: '40', suffix: '+', label: 'Umgesetzte Projekte' },
        { num: '20+', target: '20', suffix: '+', label: 'Zufriedene Kunden' },
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
            'Eine deutschsprachige Progressive Web App, die Bartender-Grundlagen über eine Drink-Bibliothek, „Bar Basics"-Module und ein gamifiziertes Quiz mit virtueller Trinkgeldkasse vermittelt. Mobile-first konzipiert und auf den Homescreen installierbar, mit vollständiger Offline-Unterstützung, damit Auszubildende Rezepte hinter der Bar auch ohne Verbindung üben können.\n\nHighlights\n- Drink-Bibliothek mit Rezepten in cl, Glaswaren-Empfehlungen, Technik-Tags (Aufbauen, Shaken, Rühren, Blenden), Garnituren und Profi-Tipps\n- Eigene Vektor-Illustrationen — jeder Drink, jedes Glas und jedes Bar-Werkzeug wird aus einer handcodierten Illustrations-Spezifikation gerendert (keine Stockbilder), damit die Visuals scharf und themenfähig bleiben\n- Quiz-Modus (Einsteiger / Service) mit Fortschritt pro Drink, „Nur Fehler"-Wiederholungspool, Richtig-/Falsch-Streaks und einem Trinkgeldkassen-Belohnungssystem\n- Drink-Import — Web-Suche nach zusätzlichen Drinks und Import in die Bibliothek, mit Bild-Caching als Data-URLs für die Offline-Nutzung\n- Persistenz via localStorage für importierte Drinks, Quiz-Fortschritt und Trinkgeldkassen-Stand\n- PWA — Service Worker, Offline-Fallback, Web App Manifest, iOS- und Android-Installation\n\nStack\n- Next.js 16 (App Router) mit React 19 und TypeScript\n- React Native Web — UI gegen react-native-Primitiven (View, Pressable, Animated, ScrollView) geschrieben und im Web gerendert, mit einem einzigen Komponentenmodell, das sich auf Native portieren ließe\n- Eigenes SVG-Illustrationssystem für Drinks, Glaswaren und Bar-Werkzeuge, gesteuert durch typisierte Artwork-Spezifikationen\n- Service Worker + Web App Manifest für installierbare PWA + Offline-Modus\n- Vercel Analytics, Google Analytics und Google Tag Manager via @next/third-parties\n- Deployment auf Vercel',
        },
        '02': {
          title: 'OBCG\nPortal',
          desc:
            'Ein Community-Portal, das Mitgliedern als digitaler Hub dient: Wasserverbrauch überwachen, jährliche Qualitätsberichte einsehen und auf Verwaltungsunterlagen zugreifen. Im Backend dient es als Abrechnungs- und Verwaltungssystem. Ein dynamisches Dashboard liefert Echtzeit-Einblicke in den Wasserverbrauch — Nutzer erkennen Einsparpotenziale, das Führungsteam hat Zugriff auf Kundenhistorien und kann Lecks sofort erkennen, selbst wenn sie nicht sichtbar sind, was Kunden Geld spart.',
        },
        '03': {
          title: 'Kanzlei Intake Suite\nDatenerfassung',
          criticQuote:
            'Der Unterschied zwischen einer auffälligen KI-Spielerei und einem rechtskonformen, produktionsreifen Werkzeug.',
          criticLabel: 'Kritikerstimme',
          desc:
            'Eine zweisprachige SaaS-Plattform für Kanzleien mit Schwerpunkten Steuerrecht, Steuerstrafrecht und Strafverteidigung — voll funktionsfähig in Deutschland und den USA, mit lokalisierten Intake-Flows, jurisdiktionsspezifischer juristischer Einordnung und Sprachunterstützung für beide Märkte. Die Anwendung digitalisiert den Mandantenaufnahmeprozess — von der ersten Anfrage bis zum vorbereitenden Fall-Briefing des Anwalts — und erzeugt interne Arbeitsdokumente (Fallzusammenfassungen, mögliche Argumentationslinien, Gesetzesverweise, Checklisten für fehlende Informationen), die das erste Mandantengespräch deutlich effizienter machen.\n\nWas die Anwendung leistet\n- Rollenbasierte Workflows für Sekretariat, Anwälte und Admins, jeweils mit einer auf die Rolle zugeschnittenen Sicht auf den Fall\n- Mehrstufiges Aufnahmeformular, das Situation des Mandanten, Dokumente, beteiligte Behörden, Fristen und vorangegangene Korrespondenz erfasst — angepasst an den Markt des Besuchers (deutsches Steuer-/Strafrecht auf der DE-Seite, US-Bundes-/Bundesstaatenrahmen auf der US-Seite)\n- KI-gestützte Fallanalyse mit Google Gemini (inklusive Fallback-Modellkette), um interne Briefings und mögliche Argumentationslinien zu entwerfen — ausdrücklich als interne Arbeitsentwürfe gekennzeichnet, niemals als Mandantenberatung\n- Dokumentenverwaltung mit Metadaten, Kategorisierung, Typ-/Größenprüfung und sicherer privater Ablage\n- Single-Page-Anwaltsarbeitsplatz, der Briefing, Argumente, Gesetze, Notizen und Gesprächshistorie vereint\n- PDF-Export der Anwaltsansicht via pdf-lib\n- Audit-Log für vollständige interne Nachvollziehbarkeit\n- Öffentliche Marketing-Oberfläche — Landingpage, Preisseite mit Stripe Checkout, öffentliches Anfrageformular, fiktive Demo und vollständige Rechtstexte (Impressum, Datenschutz, Cookies für DE; entsprechende Privacy-/Terms-Texte für die USA), gesteuert über umgebungskonfigurierte Kanzleidaten\n- Begleitende Desktop-App (Electron) für Anwälte und Admins, die sich gegen die Web-Instanz authentifiziert und alle offenen Interessentenfälle lokal für die Offline-Sichtung zwischenspeichert; signierte/notarisierte Builds für macOS und Windows über GitHub Actions\n- Importer für den offiziellen Gesetzes-Korpus, der StGB, StPO, AO und verwandte deutsche strafrechtliche Texte von Gesetze im Internet als Referenzmaterial bezieht\n\nGeo-bewusstes, multimarktfähiges Erlebnis\nDie Plattform ist als echtes Multi-Jurisdiktions-Produkt konzipiert — Deutschland und die USA, auf Bundes-, Landes- und kommunaler Ebene — und der öffentliche Auftritt passt sich der Jurisdiktion des Besuchers in Echtzeit an:\n- Edge-IP-Geolokalisierung über Vercels Header x-vercel-ip-country / x-vercel-ip-country-region (mit Cloudflare-Header-Fallback) erkennt Land, Bundesstaat und Stadt ohne Round-Trip zu einem Drittanbieter\n- Jurisdiktionsbewusstes Routing mit dynamischen Segmenten /eu/[country] und /us/[state] — Deutschland, alle EU-Mitgliedstaaten und alle 50 US-Bundesstaaten haben jeweils eigene Landingpages mit lokalisierter Intake-Botschaft, anwendbarem Datenschutzregime und Verweisen auf die relevanten lokalen Gesetze und Aufsichtsbehörden\n- Auto-erkanntes Regions-Banner, das eingeblendet wird, wenn ein Besucher außerhalb seines nächsten Marktes landet, mit Ein-Klick-Sprung zur lokalisierten Sicht; zusätzlich manueller Länder-/Sprachwähler, falls die IP-Erkennung mehrdeutig ist (VPNs, Firmenproxies)\n- Anpassung von Datenschutz und Disclaimern: DSGVO-Sprache für EU-Besucher; US-Besucher erhalten staatsbezogene Datenschutzformulierungen (z. B. CCPA-nahe Bundesstaaten) und deutlichere „no attorney-client relationship"-Hinweise, die den Konventionen der US-Anwaltskammern entsprechen\n- Sprachumschaltung zwischen Deutsch und Englisch auf Basis des aufgelösten Marktkontextes, mit Laufzeit-Übersetzungscache für performante lokalisierte Texte\n- Auflösungspriorität: expliziter URL-Marktparameter → Referrer-Markt → IP-basierte Region → sinnvoller Default — so haben Deep-Link-Kampagnen und geteilte URLs immer Vorrang vor dem Geo-Guessing\n- Marktkontext fließt in die Aufnahme ein: die erkannte Jurisdiktion wird mit jeder eingereichten Anfrage gespeichert, sodass die Kanzlei den rechtlichen Rahmen des Leads kennt, bevor sie zum Hörer greift\n\nTech-Stack\n- Framework: Next.js 16 (App Router), React 19, JavaScript\n- Styling: Tailwind CSS, Lucide-Icons\n- Datenbank: PostgreSQL via Prisma ORM (Prisma Postgres in Produktion)\n- Auth: Eigene session-basierte Authentifizierung mit serverseitig gespeicherten Sessions, rollenbasierte Autorisierung und personalisierte Einladungslinks mit Ablauffrist\n- KI: Google Gemini (@google/genai) mit Primär-/Fallback-Modellkette für die Rechtsanalyse\n- Payments: Stripe Checkout für gestaffelte Abo-Pläne\n- E-Mail: Resend für Demo-Zugangs-Einladungen\n- Dateispeicher: Vercel Blob in Produktion (privater Zugriff), lokales Dateisystem in der Entwicklung — automatischer Wechsel je nach Umgebung\n- PDF-Generierung: pdf-lib\n- Geo / i18n: Vercel-Edge-Geolokalisierungs-Header, eigene Marktauflösungs-Schicht, Laufzeit-Übersetzungscache (DE/EN), dynamische Segmente [market], /eu/[country] und /us/[state]\n- Hosting: Vercel (Fluid Compute, Serverless Functions, Routing Middleware für den Routenschutz)\n- Desktop: Electron mit geteiltem Web-Login, electron-builder für plattformübergreifende signierte Releases, GitHub Actions CI für macOS-Notarisierung und Windows-Code-Signing\n- Sonstiges: bcryptjs, fast-xml-parser (Gesetzes-Korpus-Parsing), adm-zip\n\nBemerkenswerte Engineering-Entscheidungen\n- Strikte Compliance-Leitplanken: jede KI-erzeugte Analyse wird mit dem verpflichtenden Hinweis „Potenzielle Argumentationslinien – nur zur anwaltlichen Prüfung" versehen; die Anwendung trifft keine automatisierten Erfolgsprognosen oder verbindlichen Rechtsaussagen\n- Umgebungsgesteuerte Rechtstexte: Impressum-, Datenschutz- und Cookie-Seiten werden aus LEGAL_*-Env-Variablen gerendert, sodass dieselbe Codebasis für unterschiedliche Kanzleien in beiden Märkten ausgeliefert werden kann\n- Interne Seiten sind noindex und durch Middleware geschützt; nur Demo, Landingpage, Preisseite und Anfrageformular sind öffentlich indexierbar\n- Originaldateien werden außerhalb von /public abgelegt, um versehentliche Veröffentlichung zu verhindern; die Auslieferung erfolgt ausschließlich über eine authentifizierte App-Route',
        },
        '04': {
          title: 'Launchpad\nGemini-gestütztes SaaS',
          desc:
            'Ein hochperformantes Full-Stack-SaaS-Boilerplate, das produktionsreife Anwendungen in Minuten ausrollt. Die Kernarchitektur nutzt Gemini 3.0 Pro für fortgeschrittene KI-Funktionen in spezialisierten Branchenmodulen. Eine robuste Stripe-Integration deckt komplexe Abonnementmodelle ab — Starter, Pro und Unlimited — für sofortige Monetarisierung nach dem Deployment.',
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
            'Eine Next.js-Lernplattform für TypeScript. Ich habe eine umfassende Lernumgebung mit interaktiven Coding-Challenges, Echtzeit-Feedback und einem dynamischen Curriculum entwickelt, das sich an den Fortschritt der Nutzer anpasst. Die Seite enthält einen individuell gebauten Code-Editor mit integrierter TypeScript-Unterstützung, damit Nutzer ihre Fähigkeiten praktisch anwenden können. Grafiken und Animationen werden durch Three.js und WebGL angetrieben und schaffen eine ansprechende Lernerfahrung.',
        },
        '10': {
          title: 'HandyWrap\nE-Commerce',
          desc:
            'HandyWrap ist eine spezialisierte E-Commerce-Plattform für personalisierte, hochwertige Handyhüllen mit pixelgenauer Benutzererfahrung. Prisma verwaltet die skalierbare Backend-Architektur, Stripe unterstützt den sicheren produktionsreifen Checkout, und Radix UI mit Zod sorgt für zugängliche Interface-Komponenten und zuverlässige Validierung.',
        },
        '11': {
          title: 'Learn Next.Js\nNext.Js',
          desc:
            'Eine Next.js-Lernplattform mit Lektionen, Übungen und Quizzen zum Erlernen von Next.js. Ich habe eine umfassende Lernumgebung mit interaktiven Coding-Challenges, Echtzeit-Feedback und einem dynamischen Curriculum entwickelt, das sich an den Fortschritt der Nutzer anpasst. Die Seite enthält einen individuell gebauten Code-Editor mit integrierter Next.js-Unterstützung, damit Nutzer ihre Fähigkeiten praktisch anwenden können. Grafiken und Animationen werden durch Three.js und GSAP angetrieben und schaffen eine ansprechende Lernerfahrung, die das Beherrschen von Next.js effektiv und motivierend macht.',
        },
        '12': {
          title: 'PDFKit\nNext.Js',
          criticQuote:
            'Beweist ein tiefes, intimes Verständnis komplexer Browser-APIs … rohe Binärdaten werden vollständig in der V8-Engine verarbeitet.',
          criticLabel: 'Kritikerstimme',
          desc:
            'Browserbasierte PDF-Toolbox\nEine Privacy-First-All-in-One-Progressive-Web-App mit über 20 PDF-Werkzeugen, die vollständig im Browser des Nutzers ausgeführt werden, auch offline — es werden keinerlei Dateien auf einen Server hochgeladen. Nutzer können Seiten zusammenführen, teilen, komprimieren, drehen, zuschneiden, neu anordnen und löschen; zwischen PDF und JPG konvertieren; Text extrahieren; Wasserzeichen, Seitenzahlen, Anmerkungen und Signaturen hinzufügen; Text bearbeiten; Dokumente mit Passwort schützen oder entsperren; und Dateiinformationen einsehen.\n\nWas es besonders macht\n- Serverlose Architektur — jede PDF-Operation läuft clientseitig, sensible Dokumente verlassen also nie das Gerät des Nutzers.\n- Über 20 Funktionsrouten als eigenständige Tools unter einer einheitlichen Oberfläche.\n- Sofortige Performance — keine Upload-/Download-Round-Trips; die Verarbeitung ist nur durch die Hardware des Nutzers begrenzt.\n\nHighlights für Recruiter und Kunden\n- Auf dem aktuellsten React 19 und Next.js 16 App Router aufgebaut — moderne Server-Component-Architektur mit clientseitiger Berechnung dort, wo es darauf ankommt.\n- Installierbar auf jedem Gerät und nach der Installation zu 100 % offline funktionsfähig\n- Zeigt sicheres Verständnis von Binärdatei-Verarbeitung, Browser-APIs (File, Blob, ArrayBuffer) und performance-kritischer UI-Arbeit.\n- Privacy-by-Design: eine bewusste architektonische Entscheidung, kein nachträglicher Einfall.',
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
                  'Hochperformantes Boilerplate mit produktionsreifer Stripe-Integration für komplexe Abonnement-Modelle.',
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
  },
};

const STORAGE_KEY = 'portfolio-lang';
const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: translations.en });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'de') {
        setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const browser = navigator.language?.toLowerCase() || '';
      if (browser.startsWith('de')) {
        setLangState('de');
        document.documentElement.lang = 'de';
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

export function useLang() {
  return useContext(LanguageContext);
}
