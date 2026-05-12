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
          desc:
            'Compliance-First Data Intake: a structured legal intake suite designed for internal case preparation, featuring jurisdiction-aware guardrails to ensure data collection meets state-specific privacy requirements. It automatically categorizes and summarizes client information using GenAI, streamlining the intake process while maintaining strict adherence to legal standards. The system includes a secure document upload interface, dynamic form generation based on case type, and an AI-powered triage system that prioritizes cases based on urgency and complexity. It uses location data to automatically determine local laws for better accuracy when building the case.',
        },
        '04': {
          title: 'Launchpad\nGemini Powered SaaS',
          desc:
            'A high-velocity, full-stack SaaS boilerplate designed to deploy production-ready applications in minutes. The core architecture leverages Gemini 3.0 Pro to provide advanced AI capabilities across a variety of specialized industry modules. A robust Stripe integration handles complex subscription models — including Starter, Pro, and Unlimited tiers — allowing for immediate monetization upon deployment.',
        },
        '05': {
          title: 'Fine Truth\nForensic Audit',
          desc:
            'A universal forensic auditing platform designed to evaluate and score global service providers across the ISP, SaaS, and Mobile sectors. I engineered a Forensic AI verification engine that analyzes company contracts and privacy practices to generate real-time integrity scores (0–100). The platform features a dynamic ranking system that automatically categorizes entities into a "Hall of Fame" or "Wall of Shame" based on verified forensic data, providing users with immediate transparency into corporate ethics and accountability. The site uses IP-based location data to determine the language and surface relevant local businesses worldwide.',
        },
        '06': {
          title: 'Can We Talk?\nAI Assisted Communication Engine',
          desc:
            'A web-based communication tool I developed to help people have better, more productive conversations. The platform features an integrated AI assistant that provides real-time support for two-party dialogues, creating a structured and friendly environment for high-stakes or collaborative discussions. The multi-user chat interface allows both parties to interact with the AI simultaneously, from remote locations, offering suggestions, fact-checking, and emotional tone analysis to facilitate clearer communication and mutual understanding. The tool is designed to be universally applicable, whether for personal relationships, business negotiations, or conflict resolution scenarios.',
        },
        '07': {
          title: 'UX/UI\nEffects',
          desc:
            'A sleek, utility-focused web application built with Next.js and deployed on Vercel. I developed a custom interactive comparison slider to facilitate real-time "before and after" visual analysis. The project demonstrates my ability to integrate modern frontend frameworks with high-fidelity UI components to create engaging, purpose-driven user experiences.',
        },
        '08': {
          title: 'Lifestory\nAI Creative',
          desc:
            'Android app Lifestory — an AI-supported autobiography app. Using Gemini Pro to help users craft their life stories with AI-assisted writing prompts, multimedia integration, and dynamic storytelling templates. The app features a user-friendly interface that encourages creativity while providing powerful tools such as character tracking, timeline organization, and interactive storytelling features to bring personal narratives to life. The app rounds out with an internal book printing service, allowing users to transform their digital stories into physical keepsakes.',
        },
        '09': {
          title: 'TSLearn\nTypescript',
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
          desc:
            'Browser-based PDF Toolkit\nA privacy-first, all-in-one web app offering 20+ PDF tools that run entirely in the user browser — no files are ever uploaded to a server. Users can merge, split, compress, rotate, crop, reorder, and delete pages; convert between PDF and JPG; extract text; add watermarks, page numbers, annotations, and signatures; edit text; password-protect or unlock documents; and view file info.\n\nWhy it stands out\n- Zero-server architecture — every PDF operation happens client-side, so sensitive documents never leave the user\'s device.\n- 20+ feature routes organized as discrete tools under a single, consistent UI.\n- Instant performance — no upload/download round trips; processing is bounded only by the user\'s hardware.\n\nHighlights for recruiters/clients\n- Built on the latest React 19 and Next.js 16 App Router — modern Server Component architecture with client-side computation where it matters.\n- Demonstrates strong grasp of binary file manipulation, browser APIs (File, Blob, ArrayBuffer), and performance-sensitive UI work.\n- Privacy-by-design: a deliberate architectural choice, not an afterthought.',
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
                  'Structured legal intake with jurisdiction-aware guardrails for all 50 U.S. states and a GenAI triage system that categorizes and summarizes client information.',
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
          desc:
            'Compliance-First Datenerfassung: eine strukturierte juristische Intake-Suite zur internen Fallvorbereitung, mit jurisdiktionsspezifischen Leitplanken für bundesstaaten-konforme Datenschutzanforderungen. Mandanteninformationen werden automatisch durch GenAI kategorisiert und zusammengefasst, was den Aufnahmeprozess beschleunigt und gleichzeitig strikte juristische Standards wahrt. Das System bietet sicheren Dokumenten-Upload, dynamische Formulargenerierung je nach Falltyp und ein KI-gestütztes Triage-System, das Fälle nach Dringlichkeit und Komplexität priorisiert. Standortdaten ermitteln automatisch lokales Recht für höhere Genauigkeit beim Fallaufbau.',
        },
        '04': {
          title: 'Launchpad\nGemini-gestütztes SaaS',
          desc:
            'Ein hochperformantes Full-Stack-SaaS-Boilerplate, das produktionsreife Anwendungen in Minuten ausrollt. Die Kernarchitektur nutzt Gemini 3.0 Pro für fortgeschrittene KI-Funktionen in spezialisierten Branchenmodulen. Eine robuste Stripe-Integration deckt komplexe Abonnementmodelle ab — Starter, Pro und Unlimited — für sofortige Monetarisierung nach dem Deployment.',
        },
        '05': {
          title: 'Fine Truth\nForensisches Audit',
          desc:
            'Eine universelle forensische Audit-Plattform zur Bewertung globaler Service-Provider in den Bereichen ISP, SaaS und Mobile. Eine forensische KI-Engine analysiert Verträge und Datenschutzpraktiken und generiert Echtzeit-Integritätswerte (0–100). Ein dynamisches Ranking kategorisiert Anbieter automatisch in eine "Hall of Fame" oder "Wall of Shame" auf Basis verifizierter forensischer Daten und sorgt für unmittelbare Transparenz bei Unternehmensethik. Über IP-basierte Standortdaten passt die Seite Sprache und lokale Empfehlungen weltweit an.',
        },
        '06': {
          title: 'Can We Talk?\nKI-gestützte Kommunikations-Engine',
          desc:
            'Ein webbasiertes Kommunikationswerkzeug, das Menschen zu besseren, produktiveren Gesprächen verhilft. Ein integrierter KI-Assistent unterstützt Zwei-Parteien-Dialoge in Echtzeit und schafft eine strukturierte, freundliche Umgebung für anspruchsvolle oder kollaborative Diskussionen. Das Multi-User-Chat-Interface ermöglicht beiden Parteien, simultan und ortsunabhängig mit der KI zu interagieren — mit Vorschlägen, Faktenprüfung und Tonanalyse für klarere Kommunikation. Universell einsetzbar — von persönlichen Beziehungen über Geschäftsverhandlungen bis zur Konfliktlösung.',
        },
        '07': {
          title: 'UX/UI\nEffekte',
          desc:
            'Eine schlanke, nutzwertorientierte Webanwendung mit Next.js, deployt auf Vercel. Ich habe einen interaktiven Vergleichs-Slider entwickelt, der visuelle "Vorher/Nachher"-Analysen in Echtzeit ermöglicht. Das Projekt zeigt die Integration moderner Frontend-Frameworks mit hochwertigen UI-Komponenten für ansprechende, zweckgebundene Benutzererlebnisse.',
        },
        '08': {
          title: 'Lifestory\nAI Creative',
          desc:
            'Lifestory ist eine Android-App zur KI-gestützten Autobiografie. Mit Gemini Pro hilft sie Nutzern, ihre Lebensgeschichte zu erzählen — durch KI-gestützte Schreibvorschläge, Multimedia-Integration und dynamische Storytelling-Vorlagen. Die App bietet Werkzeuge wie Charakter-Tracking, Zeitlinien-Organisation und interaktive Storytelling-Funktionen, um persönliche Erzählungen zum Leben zu erwecken. Abgerundet durch einen integrierten Buchdruck-Service, der digitale Geschichten in physische Erinnerungsstücke verwandelt.',
        },
        '09': {
          title: 'TSLearn\nTypescript',
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
          desc:
            'Browserbasierte PDF-Toolbox\nEine Privacy-First-All-in-One-Webanwendung mit über 20 PDF-Werkzeugen, die vollständig im Browser des Nutzers ausgeführt werden — es werden keinerlei Dateien auf einen Server hochgeladen. Nutzer können Seiten zusammenführen, teilen, komprimieren, drehen, zuschneiden, neu anordnen und löschen; zwischen PDF und JPG konvertieren; Text extrahieren; Wasserzeichen, Seitenzahlen, Anmerkungen und Signaturen hinzufügen; Text bearbeiten; Dokumente mit Passwort schützen oder entsperren; und Dateiinformationen einsehen.\n\nWas es besonders macht\n- Serverlose Architektur — jede PDF-Operation läuft clientseitig, sensible Dokumente verlassen also nie das Gerät des Nutzers.\n- Über 20 Funktionsrouten als eigenständige Tools unter einer einheitlichen Oberfläche.\n- Sofortige Performance — keine Upload-/Download-Round-Trips; die Verarbeitung ist nur durch die Hardware des Nutzers begrenzt.\n\nHighlights für Recruiter und Kunden\n- Auf dem aktuellsten React 19 und Next.js 16 App Router aufgebaut — moderne Server-Component-Architektur mit clientseitiger Berechnung dort, wo es darauf ankommt.\n- Zeigt sicheres Verständnis von Binärdatei-Verarbeitung, Browser-APIs (File, Blob, ArrayBuffer) und performance-kritischer UI-Arbeit.\n- Privacy-by-Design: eine bewusste architektonische Entscheidung, kein nachträglicher Einfall.',
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
                  'Strukturierte juristische Datenerfassung mit jurisdiktionsspezifischen Leitplanken für alle 50 US-Bundesstaaten und einem GenAI-Triage-System, das Mandanteninformationen kategorisiert und zusammenfasst.',
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
