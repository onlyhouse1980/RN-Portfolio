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
            `German-language bartending training PWA built mobile-first for new bartenders and trainees. The app teaches cocktail fundamentals through a recipe library, “Bar Basics” modules, and a gamified quiz system with progress tracking, mistake review, streaks, and a virtual tip jar.

Built with Next.js 16 App Router, React 19, TypeScript, React Native Web, custom SVG illustrations, service workers, web app manifest, Vercel Analytics, Google Analytics, and GTM, it is installable on iOS/Android and works fully offline.

The drink library includes recipes in cl, glassware guidance, technique tags, garnishes, pro tips, and custom hand-coded vector artwork for every drink, glass, and bar tool. Users can import additional drinks from the web, cache images as data URLs, and persist imported drinks, quiz progress, and tip-jar state via localStorage.`,
        },
        '02': {
          title: 'OBCG\nPortal',
          desc:
            `Community water-utility portal for member transparency, billing, and usage management. The platform gives residents a centralized dashboard to monitor water usage, review billing details, access annual water-quality reports, view governance records, and stay informed about utility updates.

For administrators, it functions as a customer billing and management system with customer histories, meter readings, billing records, account activity, and community-wide usage analytics.

A core feature is usage-pattern leak detection: by comparing historical readings and identifying abnormal consumption spikes, the executive team can detect possible leaks before they are physically visible, notify customers quickly, reduce water loss, and help prevent unexpected high bills.

Overall, the portal replaces manual processes with structured data, improves transparency, supports conservation, and gives both members and leadership a clearer view of water usage across the community.`,
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
            `Deutschsprachige Bartending-Training-PWA, mobile-first gebaut für neue Bartender und Auszubildende. Die App vermittelt Cocktail-Grundlagen über eine Rezeptbibliothek, „Bar Basics"-Module und ein gamifiziertes Quizsystem mit Fortschrittserfassung, Fehlerwiederholung, Streaks und virtueller Trinkgeldkasse.

Gebaut mit Next.js 16 App Router, React 19, TypeScript, React Native Web, eigenen SVG-Illustrationen, Service Workern, Web App Manifest, Vercel Analytics, Google Analytics und GTM ist sie auf iOS/Android installierbar und vollständig offline nutzbar.

Die Drink-Bibliothek umfasst Rezepte in cl, Glaswaren-Empfehlungen, Technik-Tags, Garnituren, Profi-Tipps und handcodierte Vektor-Illustrationen für jeden Drink, jedes Glas und jedes Bar-Werkzeug. Nutzer können zusätzliche Drinks aus dem Web importieren, Bilder als Data-URLs cachen und importierte Drinks, Quiz-Fortschritt sowie den Trinkgeldkassen-Stand via localStorage speichern.`,
        },
        '02': {
          title: 'OBCG\nPortal',
          desc:
            `Community-Wasserversorgungsportal für Transparenz, Abrechnung und Nutzungsverwaltung der Mitglieder.
Die Plattform gibt Bewohnern ein zentrales Dashboard, um den Wasserverbrauch zu verfolgen, Abrechnungsdetails zu prüfen, jährliche Wasserqualitätsberichte aufzurufen, Governance-Unterlagen einzusehen und über Updates des Versorgers informiert zu bleiben.

Für Administratoren dient sie als Kundenabrechnungs- und Verwaltungssystem mit Kundenhistorien, Zählerständen, Abrechnungsdaten, Kontoaktivität und gemeindeweiten Nutzungsanalysen.

Eine Kernfunktion ist die nutzungsmusterbasierte Leckerkennung: Durch den Vergleich historischer Messwerte und die Erkennung ungewöhnlicher Verbrauchsspitzen kann das Führungsteam mögliche Lecks erkennen, bevor sie physisch sichtbar sind, Kunden schnell benachrichtigen, Wasserverlust reduzieren und unerwartet hohe Rechnungen vermeiden helfen.

Insgesamt ersetzt das Portal manuelle Prozesse durch strukturierte Daten, verbessert Transparenz, unterstützt Ressourcenschonung und gibt Mitgliedern wie Führung einen klareren Blick auf den Wasserverbrauch in der gesamten Community.`,
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
