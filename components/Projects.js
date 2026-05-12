'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';

// ─── YOUR PROJECTS — Edit this array to customize ────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'BarStart DE\nRef. App',
    tags: ['Next.js', 'Rest API', 'Expo'],
    desc: 'A German-language progressive web app that teaches bartending fundamentals through a drink library, "Bar Basics" modules, and a gamified quiz with a virtual tip jar. Built mobile-first and installable to the home screen, with full offline support so trainees can drill recipes behind the bar without a connection.\n\nHighlights\n- Drink library with recipes in cl, glassware guidance, technique tags (Aufbauen, Shaken, Rühren, Blenden), garnishes, and pro tips\n- Custom vector artwork — every drink, glass, and bar tool is rendered from a hand-coded illustration spec (no stock images), so the visuals stay crisp and themeable\n- Quiz mode (Einsteiger / Service) with per-drink progress tracking, "only mistakes" review pool, correct/wrong streaks, and a tip-jar reward system\n- Drink import — search the web for additional drinks and import them into the library, with image caching to data URLs for offline use\n- Persistence via localStorage for imported drinks, quiz progress, and tip jar state\n- PWA — service worker, offline fallback, web app manifest, iOS/Android install support\n\nStack\n- Next.js 16 (App Router) with React 19 and TypeScript\n- React Native Web — UI written against react-native primitives (View, Pressable, Animated, ScrollView) and rendered on the web, keeping a single component model that could port to native\n- Custom SVG illustration system for drinks, glassware, and bar tools driven by typed artwork specs\n- Service worker + Web App Manifest for installable PWA + offline mode\n- Vercel Analytics, Google Analytics, and Google Tag Manager via @next/third-parties\n- Deployed on Vercel',
    year: '2026',
    link: 'https://bartender-blue.vercel.app',
    icon: '🛒',
    fallbackImage: '/barstart.png',
  },
  {
    num: '02',
    title: 'OBCG\nPortal',
    tags: ['Next.Js', 'MongoDB', 'Node'],
    desc: 'Community portal, which serves as a digital hub for members to monitor water usage, review annual quality reports, and access governance records on the front end. On the back end it serves as a customer billing and management system. The portal features a dynamic dashboard that provides real-time insights into water consumption patterns, allowing users to track their usage and identify opportunities for conservation. For the executive team, they have access to customer histories and and usage patterns and can instantly detect if there are leaks even if it\'s not physically apparent, saving customers money.',
    year: '2026',
    link: 'https://obcg-modern.vercel.app',
    icon: '📊',
    fallbackImage: '/obcg.png',
  },
  {
    num: '03',
    title: 'Kanzlei Intake Suite\nData Intake',
    tags: ['Next.js', 'Prisma', 'GenAI'],
    desc: 'A bilingual SaaS platform for law firms specializing in tax law, tax criminal law, and criminal defense — fully functional in both Germany and the United States, with localized intake flows, jurisdiction-aware legal framing, and language support for each market. The app digitizes the client intake process — from the first inquiry through to the lawyer\'s preparatory case briefing — and produces internal working documents (case summaries, potential lines of argument, statutory references, missing-information checklists) that make the first client meeting dramatically more efficient.\n\nWhat it does\n- Role-based workflows for secretariat staff, lawyers, and admins, each with a tailored view of the case\n- Multi-step intake form that captures the client\'s situation, documents, agencies involved, deadlines, and prior correspondence — adapted to the visitor\'s market (German tax/criminal law on the DE side, US federal/state framing on the US side)\n- AI-assisted case analysis using Google Gemini (with a fallback model chain) to draft internal briefings and surface possible legal arguments — explicitly flagged as internal working drafts, never as client advice\n- Document management with metadata, categorization, type/size validation, and secure private storage\n- Single-page lawyer workspace combining briefing, arguments, statutes, notes, and conversation history\n- PDF export of the lawyer\'s working view via pdf-lib\n- Audit log for full internal traceability\n- Public marketing surface — landing page, pricing with Stripe Checkout, public inquiry form, fictional demo, and full legal pages (Impressum, Datenschutz, Cookies for DE; equivalent privacy/terms framing for US) driven by environment-configured firm data\n- Companion desktop app (Electron) for lawyers and admins that authenticates against the web instance and caches all open prospect cases locally for offline review, with signed/notarized builds for macOS and Windows via GitHub Actions\n- Official statute corpus importer that pulls StGB, StPO, AO and related German criminal-law texts from Gesetze im Internet as reference material\n\nGeo-aware, multi-market experience\nThe platform is built as a true multi-jurisdiction product — Germany and the United States, federal, state, and local markets — and the public site adapts itself to the visitor\'s jurisdiction in real time:\n- Edge-level IP geolocation via Vercel\'s x-vercel-ip-country / x-vercel-ip-country-region headers (with Cloudflare header fallback) detects the country, state, and city without a round-trip to a third-party service\n- Jurisdiction-aware routing with dynamic segments for /eu/[country] and /us/[state] — Germany, all EU member states, and all 50 US states each have their own landing pages with localized intake messaging, applicable privacy regime, and references to the relevant local laws and regulators\n- Auto-detected region banner that surfaces when a visitor lands outside their nearest market, offering a one-click jump to the localized view, plus a manual country/language selector for when IP detection is ambiguous (VPNs, corporate proxies)\n- Privacy and disclaimer adaptation: GDPR/DSGVO language for EU visitors; US visitors see state-specific privacy framing (e.g. CCPA-adjacent jurisdictions) and clearer "no attorney-client relationship" notices that match US bar-association conventions\n- Language switching between German and English driven by the resolved market context, with a runtime translation cache to keep localized copy fast\n- Resolution priority chain: explicit URL market parameter → referrer market → IP-derived region → sensible default — so deep-link campaigns and shared URLs always win over geo-guessing\n- Market context flows into intake: the detected jurisdiction is captured on submitted inquiries so the firm knows which legal framework the lead is operating under before they pick up the phone\n\nTech stack\n- Framework: Next.js 16 (App Router), React 19, JavaScript\n- Styling: Tailwind CSS, Lucide icons\n- Database: PostgreSQL via Prisma ORM (Prisma Postgres in production)\n- Auth: Custom session-based authentication with server-stored sessions, role-based authorization, and personal invite links with expiry\n- AI: Google Gemini (@google/genai) with primary/fallback model chain for law analysis\n- Payments: Stripe Checkout for tiered subscription plans\n- Email: Resend for demo-access invitations\n- File storage: Vercel Blob in production (private access), local filesystem in development — switched automatically based on env\n- PDF generation: pdf-lib\n- Geo / i18n: Vercel edge geolocation headers, custom market-resolution layer, runtime translation cache (DE/EN), dynamic [market] and /eu/[country] / /us/[state] route segments\n- Hosting: Vercel (Fluid Compute, serverless functions, Routing Middleware for route protection)\n- Desktop: Electron with shared web auth, electron-builder for cross-platform signed releases, GitHub Actions CI for macOS notarization and Windows code-signing\n- Other: bcryptjs, fast-xml-parser (statute corpus parsing), adm-zip\n\nNotable engineering decisions\n- Strict legal-compliance guardrails: every AI-generated analysis is wrapped with the mandatory disclaimer "Potenzielle Argumentationslinien – nur zur anwaltlichen Prüfung" and the app makes no automated success predictions or binding legal statements\n- Environment-driven legal pages: Impressum/privacy/cookie pages render from LEGAL_* env vars so the same codebase can be deployed for different firms in either market\n- Internal pages are noindex and gated by middleware; only the demo, landing, pricing, and inquiry routes are publicly indexable\n- Originals stored outside /public to prevent accidental exposure; documents served through an authenticated app route.',
    year: '2026',
    link: 'https://kanzlei-intake-suite.online/',
    icon: '🤖',
    fallbackImage: '/kanzlei.png',
  },
  {
    num: '04',
    title: 'Launchpad\nGemini Powered SaaS',
    tags: ['Next.Js', 'Supabase', 'SaaS'],
    desc: 'A high-velocity, full-stack SaaS boilerplate designed to deploy production-ready applications in minutes. The core architecture leverages Gemini 3.0 Pro to provide advanced AI capabilities across a variety of specialized industry modules. I implemented a robust Stripe integration to handle complex subscription models—including Starter, Pro, and Unlimited tiers—allowing for immediate monetization upon deployment.',
    year: '2025',
    link: 'https://saas-boilerplate-xi-rose.vercel.app',
    icon: '🌐',
    fallbackImage: '/launchpad.png',
  },
  {
    num: '05',
    title: 'Fine Truth\nForensic Audit',
    tags: ['Next.js', 'Gemini 3.0 Pro', 'Analytics'],
    desc: 'A multilingual web app that audits any company\'s website for predatory contract terms — hidden exit fees, obfuscated cancellation flows, auto-renewal traps, and unclear recurring billing — and returns a neutral 0–100 trust score with a plain-English verdict.\n\nUsers paste a URL; a scraper pulls the live page content and a Gemini-powered analysis engine grades it against a forensic rubric. The home page also surfaces region-aware "Hall of Fame" and "Wall of Shame" leaderboards across ISPs, mobile carriers, and SaaS, with auto-detected user location and 10-language UI support (EN, DE, ES, FR, IT, PT, NL, PL, TR, AR).\n\nStack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel AI SDK · Google Gemini 3.0 Flash · Firecrawl · standalone Node scraper on Render · Vercel hosting + Analytics · strict CSP headers · lucide-react for iconography.',
    year: '2025',
    link: 'https://consumer-watchdog.vercel.app',
    icon: '📅',
    fallbackImage: '/finetruth.png',
  },
  {
    num: '06',
    title: 'Can We Talk?\nAI Assisted Commmunication Engine',
    tags: ['NextJs', 'Gemini', 'Multi-Chat'],
    desc: 'A web-based communication tool I developed to help people have better, more productive conversations. The platform features an integrated AI assistant that provides real-time support for two-party dialogues, creating a structured and friendly environment for high-stakes or collaborative discussions. I implemented a multi-user chat interface that allows both parties to interact with the AI simultaneously, from remote locations, offering suggestions, fact-checking, and emotional tone analysis to facilitate clearer communication and mutual understanding. The tool is designed to be universally applicable, whether for personal relationships, business negotiations, or conflict resolution scenarios.',
    year: '2025',
    link: 'https://ryanernstnyberg.com',
    icon: '🔗',
    fallbackImage: '/canwetalk.png',
  },
  {
    num: '07',
    title: 'UX/UI\nEffects',
    tags: ['React', 'NextJs', 'Interactive'],
    desc: `A minimal, interactive before/after image slider that lets you drag a
handle across a watch photo to reveal its lume (glow) shot underneath —
comparing the same watch in daylight vs. in the dark.

Tech stack:
- Next.js 16 (App Router) with React 19
- Tailwind CSS v4 for styling
- Custom client component using useRef / useEffect to handle mouse and
touch drag events, with clipPath driving the reveal

Built as a personal weekend project for learning — a quick excuse to
play with the latest Next.js + React 19 stack and hand-roll a small
interactive component instead of pulling in a library.`,
    year: '2025',
    link: 'https://lumen-b4-after.vercel.app',
    icon: '🔗',
    fallbackImage: '/uxui.png',
  },
  {
    num: '08',
    title: 'Lifestory\nAI Creative',
    tags: ['Kotlin', 'Java', 'Android'],
    desc: 'Android app Lifestory. AI Supported autobiography app. Utilizing Gemini Pro to help users craft their life stories with AI-assisted writing prompts, multimedia integration, and dynamic storytelling templates. The app features a user-friendly interface that encourages creativity while providing powerful tools such as character tracking, timeline organization, and interactive storytelling features to bring personal narratives to life. The app rounds out with an internal book printing service, allowing users to transform their digital stories into physical keepsakes.',
    year: '2025',
    link: 'https://apk-dl-site.vercel.app/',
    icon: '🔗',
    fallbackImage: '/lifestory.png',
  },
  {
    num: '09',
    title: 'TSLearn\nTypescript',
    tags: ['Typescript', 'Three.js', 'WebGL'],
    desc: 'Next Js Typescript learning resource. I built a comprehensive learning platform for TypeScript, featuring interactive coding challenges, real-time feedback, and a dynamic curriculum that adapts to the user\'s progress. The site includes a custom-built code editor with integrated TypeScript support, allowing users to practice and apply their skills in a hands-on environment. The graphics and animations are powered by Three.js, and WebGL, creating an engaging and visually appealing learning experience that makes mastering TypeScript both fun and effective.',
    year: '2026',
    link: 'https://ts-learn-lac.vercel.app/',
    icon: '🔗',
    fallbackImage: '/tslearn.png',
  },
  {
    num: '10',
    title: 'HandyWrap\nE-Commerce',
    tags: ['Radix', 'Zod', 'Prisma'],
    desc: 'HandyWrap is a specialized e-commerce platform built to deliver a "pixel-perfect" user experience for creating personalized, high-quality phone cases. Database Management (Prisma): I utilized Prisma as the ORM to manage the applications scalable backend architecture. Payment Processing (Stripe): To facilitate secure, production-ready transactions, I integrated Stripe to manage the checkout flow. UI & Validation (Radix & Zod).',
    year: '2025',
    link: 'https://casecobra-ihyo.vercel.app/',
    icon: '🔗',
    fallbackImage: '/handywrap.png',
  },
  {
    num: '11',
    title: 'Learn Next.Js\nNext.Js',
    tags: ['Next.Js', 'Three.js', 'Gsap'],
    desc: 'Next Js learning resource. Lessons, exercises and lesson quizzes to help you learn Next.Js. I built a comprehensive learning platform for Next.Js, featuring interactive coding challenges, real-time feedback, and a dynamic curriculum that adapts to the user\'s progress. The site includes a custom-built code editor with integrated Next.Js support, allowing users to practice and apply their skills in a hands-on environment. The graphics and animations are powered by Three.js, and Gsap, creating an engaging and visually appealing learning experience that makes mastering Next.Js both fun and effective.',
    year: '2026',
    link: 'https://next-learn-delta-two.vercel.app',
    icon: '🔗',
    fallbackImage: '/nextlearn.png',
  },
  {
    num: '12',
    title: 'PDFKit\nNext.Js',
    tags: ['Next.Js', 'PDF-Lib', 'React-PDF'],
    desc: 'Browser-based PDF Toolkit\nA privacy-first, all-in-one progressive web app offering 20+ PDF tools that run entirely in the user browser, even if the user is offline — no files are ever uploaded to a server. Users can merge, split, compress, rotate, crop, reorder, and delete pages; convert between PDF and JPG; extract text; add watermarks, page numbers, annotations, and signatures; edit text; password-protect or unlock documents; and view file info.\n\nWhy it stands out\n- Zero-server architecture —every PDF operation happens client-side, so sensitive documents never leave the users device.\n- 20+ feature routes organized as discrete tools under a single, consistent UI.\n- Instant performance — no upload/download round trips; processing is bounded only by the user hardware.\n\nHighlights for recruiters/clients\n- Built on the latest React 19 and Next.js 16 App Router — modern Server Component architecture with client-side computation where it matters.\n- Installs on any device, and once installed, 100% functional offline\n- Demonstrates strong grasp of binary file manipulation, browser APIs (File, Blob, ArrayBuffer), and performance-sensitive UI work.\n- Privacy-by-design: a deliberate architectural choice, not an afterthought.',
    year: '2026',
    link: 'https://pdf-online-editor-mu.vercel.app',
    icon: '🔗',
    fallbackImage: '/pdfkit.png',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project, index, isFlipped, setFlippedNum }) {
  const cardRef = useRef(null);
  const backRef = useRef(null);
  const descRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const isDraggingRef = useRef(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const desc = descRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!desc || !track || !thumb) return;

    const update = () => {
      const ratio = desc.clientHeight / desc.scrollHeight;
      const overflowing = ratio < 0.999;
      setHasOverflow(overflowing);
      if (!overflowing) return;
      const trackH = track.clientHeight;
      const thumbH = Math.max(30, trackH * ratio);
      const maxScroll = desc.scrollHeight - desc.clientHeight;
      const scrollRatio = maxScroll > 0 ? desc.scrollTop / maxScroll : 0;
      const thumbTop = scrollRatio * (trackH - thumbH);
      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = `translateY(${thumbTop}px)`;
    };

    update();

    desc.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(desc);

    let dragging = false;
    let startY = 0;
    let startScroll = 0;

    const onThumbDown = (e) => {
      dragging = true;
      isDraggingRef.current = true;
      startY = e.clientY;
      startScroll = desc.scrollTop;
      thumb.classList.add('is-dragging');
      e.preventDefault();
      e.stopPropagation();
    };

    const onMove = (e) => {
      if (!dragging) return;
      const dy = e.clientY - startY;
      const trackH = track.clientHeight;
      const thumbH = thumb.clientHeight;
      const maxScroll = desc.scrollHeight - desc.clientHeight;
      const scrollDelta = (dy / (trackH - thumbH)) * maxScroll;
      desc.scrollTop = startScroll + scrollDelta;
    };

    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      isDraggingRef.current = false;
      thumb.classList.remove('is-dragging');
      const card = cardRef.current;
      if (card && e) {
        const r = card.getBoundingClientRect();
        const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (!inside) setFlippedNum((prev) => (prev === project.num ? null : prev));
      }
    };

    const onTrackClick = (e) => {
      if (e.target === thumb) return;
      const rect = track.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const thumbH = thumb.clientHeight;
      const targetThumbTop = Math.max(0, Math.min(rect.height - thumbH, clickY - thumbH / 2));
      const maxScroll = desc.scrollHeight - desc.clientHeight;
      desc.scrollTop = (targetThumbTop / (rect.height - thumbH)) * maxScroll;
      e.stopPropagation();
    };

    thumb.addEventListener('mousedown', onThumbDown);
    track.addEventListener('mousedown', onTrackClick);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    return () => {
      desc.removeEventListener('scroll', update);
      ro.disconnect();
      thumb.removeEventListener('mousedown', onThumbDown);
      track.removeEventListener('mousedown', onTrackClick);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [project.desc, isFlipped]);

  useEffect(() => {
    const card = cardRef.current;
    const back = backRef.current;
    if (!card || !back) return;

    const apply = () => {
      const isMobile = window.matchMedia('(max-width: 900px)').matches;
      if (!isMobile) {
        card.style.height = '';
        return;
      }
      const cardWidth = card.offsetWidth;
      const frontHeight = (cardWidth * 3) / 4;
      const target = isFlipped ? back.scrollHeight : frontHeight;
      card.style.height = `${target}px`;
    };

    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [isFlipped]);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const card = cardRef.current;
      if (!card) return;

      // Alternate entrance direction
      const fromX = index % 2 === 0 ? -80 : 80;
      const isMobile = window.matchMedia('(max-width: 900px)').matches;

      gsap.fromTo(
        card,
        { opacity: 0, x: fromX, scale: 0.92 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: isMobile
            ? {
                trigger: card,
                start: 'top bottom',
                end: 'top center',
                scrub: 0.5,
              }
            : {
                trigger: card,
                start: 'top 88%',
              },
        }
      );
    };

    init();
  }, [index]);

  const toggle = () => {
    setFlippedNum((prev) => (prev === project.num ? null : project.num));
  };

  const handleCardClick = (e) => {
    if (e.pointerType !== undefined && e.pointerType !== 'mouse') {
      toggle();
      return;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
      toggle();
    }
  };

  const handlePointerEnter = (e) => {
    if (e.pointerType === 'mouse') setFlippedNum(project.num);
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType === 'mouse' && !isDraggingRef.current) {
      setFlippedNum((prev) => (prev === project.num ? null : prev));
    }
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className={`project-card${isFlipped ? ' project-card--flipped' : ''}`}
      ref={cardRef}
      style={{ opacity: 0 }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleCardClick}
    >
      <div className="project-card__inner">
        <div className="project-card__face project-card__face--front">
          <div className="project-card__lines" />
          <div className="project-card__overlay">
            <span className="project-card__num">{project.num} — {project.year}</span>
            <h3 className="project-card__title">
              {project.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h3>
            <div className="project-card__meta">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__arrow"
                aria-label={project.viewLabel}
                onClick={stopPropagation}
              >
                ↗
              </a>
            </div>
          </div>
          <div className="project-card__preview">
            <img
              className="project-card__preview-image"
              src={project.fallbackImage}
              alt={`${project.title.replace('\n', ' ')} preview`}
              loading="lazy"
            />
          </div>
        </div>
        <div className="project-card__face project-card__face--back" ref={backRef}>
          <span className="project-card__num">{project.num} — {project.year}</span>
          <h3 className="project-card__back-title">
            {project.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h3>
          <div className={`project-card__desc-wrap${hasOverflow ? ' has-overflow' : ''}`}>
            <p className="project-card__desc" ref={descRef} style={{ whiteSpace: 'pre-line' }}>{project.desc}</p>
            <div className="project-card__scrollbar" ref={trackRef}>
              <div className="project-card__scrollbar-thumb" ref={thumbRef} />
            </div>
          </div>
          <div className="project-card__back-meta">
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__arrow"
              aria-label={project.viewLabel}
              onClick={stopPropagation}
            >
              ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const [flippedNum, setFlippedNum] = useState(null);
  const { t } = useLang();

  const localizedProjects = PROJECTS.map((p) => {
    const localized = t.projects.items[p.num] || {};
    const title = localized.title || p.title;
    return {
      ...p,
      title,
      desc: localized.desc || p.desc,
      viewLabel: t.projects.viewLabel(title.replace('\n', ' ')),
    };
  });

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );
    };
    init();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects__header" ref={headerRef} style={{ opacity: 0 }}>
        <h2 className="projects__heading">
          {t.projects.heading[0]}<br />
          <span style={{ color: 'var(--lime)' }}>{t.projects.heading[1]}</span>
        </h2>
        <div className="projects__count">
          <span>{localizedProjects.length}</span> {t.projects.countSuffix}
        </div>
      </div>

      <div className="projects__grid">
        {localizedProjects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            isFlipped={flippedNum === project.num}
            setFlippedNum={setFlippedNum}
          />
        ))}
      </div>

      <div className="projects__summary">
        <div className="projects__summary-header">
          <h3 className="projects__summary-heading">
            {t.projects.summary.heading[0]}<br />
            <span style={{ color: 'var(--lime)' }}>{t.projects.summary.heading[1]}</span>
          </h3>
          <p className="projects__summary-intro">{t.projects.summary.intro}</p>
        </div>

        <div className="projects__summary-grid">
          {t.projects.summary.categories.map((cat) => (
            <div className="summary-card" key={cat.num}>
              <span className="summary-card__num">{cat.num}</span>
              <h4 className="summary-card__title">{cat.title}</h4>
              <p className="summary-card__desc">{cat.desc}</p>
              <ul className="summary-card__list">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="projects__summary-tech">
          <span className="projects__summary-tech-eyebrow">{t.projects.summary.techEyebrow}</span>
          <p className="projects__summary-tech-desc">{t.projects.summary.techDesc}</p>
          <div className="projects__summary-tech-grid">
            {t.projects.summary.techTiers.map((tier) => (
              <div className="tech-tier" key={tier.label}>
                <span className="tech-tier__label">{tier.label}</span>
                <span className="tech-tier__detail">{tier.detail}</span>
              </div>
            ))}
          </div>
          <p className="projects__summary-closing">{t.projects.summary.closing}</p>
        </div>
      </div>
    </section>
  );
}
