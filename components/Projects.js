'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';

// ─── YOUR PROJECTS — Edit this array to customize ────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'BarStart DE\nRef. App',
    tags: ['Next.js', 'Rest API', 'Expo'],
    desc: `German-language bartending training PWA built mobile-first for new bartenders and trainees. The app teaches cocktail fundamentals through a recipe library, “Bar Basics” modules, and a gamified quiz system with progress tracking, mistake review, streaks, and a virtual tip jar.

Built with Next.js 16 App Router, React 19, TypeScript, React Native Web, custom SVG illustrations, service workers, web app manifest, Vercel Analytics, Google Analytics, and GTM, it is installable on iOS/Android and works fully offline.

The drink library includes recipes in cl, glassware guidance, technique tags, garnishes, pro tips, and custom hand-coded vector artwork for every drink, glass, and bar tool. Users can import additional drinks from the web, cache images as data URLs, and persist imported drinks, quiz progress, and tip-jar state via localStorage.`,
    year: '2026',
    link: 'https://bartender-blue.vercel.app',
    icon: '🛒',
    fallbackImage: '/barstart.png',
  },
  {
    num: '02',
    title: 'OBCG\nPortal',
    tags: ['Next.Js', 'MongoDB', 'Node'],
    desc: `Community water-utility portal for member transparency, billing, and usage management.
The platform gives residents a centralized dashboard to monitor water usage, review billing details, access annual water-quality reports, view governance records, and stay informed about utility updates.

For administrators, it functions as a customer billing and management system with customer histories, meter readings, billing records, account activity, and community-wide usage analytics.

A core feature is usage-pattern leak detection: by comparing historical readings and identifying abnormal consumption spikes, the executive team can detect possible leaks before they are physically visible, notify customers quickly, reduce water loss, and help prevent unexpected high bills.

Overall, the portal replaces manual processes with structured data, improves transparency, supports conservation, and gives both members and leadership a clearer view of water usage across the community.`,
    year: '2026',
    link: 'https://obcg-modern.vercel.app',
    icon: '📊',
    fallbackImage: '/obcg.png',
  },
  {
    num: '03',
    title: 'Kanzlei Intake Suite\nData Intake',
    tags: ['Next.js', 'Prisma', 'GenAI'],
    desc: `Bilingual legal-intake SaaS for tax-law and criminal-defense firms in Germany and the United States.
The platform digitizes the full client intake workflow, from first inquiry to lawyer-ready case briefing, with localized German/EU and US jurisdiction handling, role-based workspaces, secure document management, audit logging, AI-assisted internal analysis, and PDF exports.

Built with Next.js 16 App Router, React 19, JavaScript, Tailwind, Prisma/PostgreSQL, custom session auth, Google Gemini, Stripe, Resend, Vercel Blob, pdf-lib, and Electron, it supports public marketing pages, pricing, demo access, private firm dashboards, and a companion desktop app for offline case review.

The system includes geo-aware routing and localization using Vercel edge headers, dynamic /eu/[country] and /us/[state] routes, German/English language switching, jurisdiction-specific privacy/disclaimer logic, and market-aware intake flows.

AI-generated outputs are strictly framed as internal attorney work drafts, not client advice, with legal-compliance guardrails, mandatory disclaimers, no automated success predictions, authenticated document access, noindex internal pages, and environment-driven legal pages for multi-firm deployment.`,
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
    tags: ['Websockets', 'Gemini', 'Multi-Chat'],
    desc: 'AI-Assisted Communication\n\nA real-time, two-person chat app that acts as a friendly third party in difficult conversations. Each session pairs a Shared Space where both partners talk together with an AI mediator ("Dr. Aidon") that intervenes only when needed — to de-escalate, defuse manipulative language, or unstick stalled exchanges — and a Private Space where each user can workshop their thoughts one-on-one with the AI before saying them out loud. Sessions are spun up instantly and shared via QR code or link, with live typing indicators, partner-joined toasts, and full i18n in English, Spanish, and German.\n\nStack\n- Frontend: Next.js 15 (App Router), React 19, Tailwind CSS v4\n- Realtime + Auth: Firebase Firestore (live message, presence, and typing-status streams) with anonymous Firebase Auth\n- AI: Google Gemini 2.0 Flash with carefully constrained prompts that let the model stay silent unless intervention helps\n- Extras: qrcode for session-sharing, Tone.js for join sounds, hardened Content-Security-Policy headers',
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
    desc: `TS Learn App is an interactive TypeScript learning platform with 35 guided lessons covering fundamentals, intermediate concepts, advanced type patterns, and applied TypeScript with WebGL. Each lesson combines animated 3D visuals, syntax-highlighted examples, JavaScript vs. TypeScript comparisons, hands-on exercises, checkpoint quizzes, and saved progress.

Built with Next.js 16, React 19, TypeScript 6, Three.js/WebGL, custom GLSL shaders, GSAP, PWA support, localStorage, custom code highlighting, custom exercise validation, and ESLint with Next.js Core Web Vitals.`,
    year: '2026',
    link: 'https://ts-learn-lac.vercel.app/',
    icon: '🔗',
    fallbackImage: '/tslearn.png',
  },
  {
    num: '10',
    title: 'HandyWrap\nE-Commerce',
    tags: ['Radix', 'Zod', 'Prisma'],
    desc: `Custom phone-case e-commerce platform with a live product configurator and Stripe checkout.
The app lets customers upload artwork, position it on a realistic phone-case preview, resize/crop the design, choose phone model, material, finish, and color, then complete payment through Stripe and receive a branded confirmation email.

Built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, Prisma, PostgreSQL, Zod, TanStack Query, Sharp, Kinde Auth, Stripe, UploadThing, Resend, and React Email, the platform includes authenticated checkout, webhook-driven order handling, transactional emails, and server-side image processing.

It also includes an admin dashboard for viewing orders, managing fulfillment, and updating order status, plus a responsive marketing site with reviews, social proof, mobile navigation, animations, upload flows, toast notifications, and a polished Apple-inspired configuration experience.`,
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
      className={`project-card${isFlipped ? ' project-card--flipped' : ''}${project.criticQuote ? ' project-card--has-critic' : ''}`}
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
          {project.criticQuote && (
            <aside className="project-card__critic" aria-label={project.criticLabel || 'Critic quote'}>
              <span className="project-card__critic-label">{project.criticLabel || 'Critic’s Quote'}</span>
              <blockquote className="project-card__critic-quote">
                {project.criticQuote}
              </blockquote>
            </aside>
          )}
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
      criticQuote: localized.criticQuote || null,
      criticLabel: localized.criticLabel || null,
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
