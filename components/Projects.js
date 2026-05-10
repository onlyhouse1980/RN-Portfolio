'use client';

import { useEffect, useRef, useState } from 'react';

// ─── YOUR PROJECTS — Edit this array to customize ────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'BarStart DE\nRef. App',
    tags: ['Next.js', 'Rest API', 'Expo'],
    desc: 'BarStart DE is a mobile-responsive digital training hub for new bartenders. It combines a robust searchable database of classic and custom cocktails with step-by-step service tutorials and interactive visual guides. The user can add their own personal creations, which seemlessly integrate with the library. There is also a dynamic quiz system that tests users on cocktail recipes, techniques, and industry knowledge, providing instant feedback and progress tracking to help them master their craft. Built with Next.js, and Rest API, it\'s designed to be an essential tool for aspiring bartenders looking to learn and grow in the industry.',
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
    desc: 'Compliance-First Data Intake: I developed a structured legal intake suite designed for internal case preparation, featuring jurisdiction-aware guardrails to ensure data collection meets state-specific privacy requirements. It automatically categorizes and summarizes client information using GenAI, streamlining the intake process while maintaining strict adherence to legal standards. The system includes a secure document upload interface, dynamic form generation based on case type, and an AI-powered triage system that prioritizes cases based on urgency and complexity. It uses location data to automatically determine local laws for better accuracy when building the case.',
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
    desc: 'A universal forensic auditing platform designed to evaluate and score global service providers across the ISP, SaaS, and Mobile sectors. I engineered a ￼Forensic AI verification engine that analyzes company contracts and privacy practices to generate real-time integrity scores (0-100). The platform features a dynamic ranking system that automatically categorizes entities into a "Hall of Fame" or "Wall of Shame" based on verified forensic data, providing users with immediate transparency into corporate ethics and accountability. The site uses ip location information to determine the language as well as local business to make it relevant for users worldwide.',
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
    desc: 'A sleek, utility-focused web application built with Next.js and deployed on Vercel. I developed a custom interactive comparison slider to facilitate real-time "before and after" visual analysis. The project demonstrates my ability to integrate modern frontend frameworks with high-fidelity UI components to create engaging, purpose-driven user experiences.',
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
];
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project, index, isFlipped, setFlippedNum }) {
  const cardRef = useRef(null);
  const backRef = useRef(null);

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
      const cs = getComputedStyle(card);
      console.log('[card]', project.num, {
        isFlipped,
        target,
        prevInline: card.style.height,
        prevComputed: cs.height,
        transition: cs.transition,
      });
      card.style.height = `${target}px`;
      requestAnimationFrame(() => {
        console.log('[card-after]', project.num, {
          inline: card.style.height,
          computed: getComputedStyle(card).height,
        });
      });
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

      gsap.fromTo(
        card,
        { opacity: 0, x: fromX, scale: 0.92 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
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
    if (e.pointerType === 'mouse') {
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
                aria-label={`View ${project.title}`}
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
          <p className="project-card__desc">{project.desc}</p>
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
              aria-label={`View ${project.title}`}
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
          Selected<br />
          <span style={{ color: 'var(--lime)' }}>Work</span>
        </h2>
        <div className="projects__count">
          <span>{PROJECTS.length}</span> projects
        </div>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            isFlipped={flippedNum === project.num}
            setFlippedNum={setFlippedNum}
          />
        ))}
      </div>
    </section>
  );
}
