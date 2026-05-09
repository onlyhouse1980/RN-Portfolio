'use client';

import { useEffect, useRef } from 'react';

// ─── YOUR PROJECTS — Edit this array to customize ────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'BarStart DE\nRef. App',
    tags: ['Next.js', 'Rest API', 'Expo'],
    desc: 'BarStart DE is a mobile-responsive digital training hub for bartenders. It combines a robust searchable database of classic and custom cocktails with step-by-step service tutorials and interactive visual guides.',
    year: '2026',
    link: 'https://bartender-blue.vercel.app',
    icon: '🛒',
  },
  {
    num: '02',
    title: 'OBCG\nPortal',
    tags: ['Next.Js', 'MongoDB', 'Node'],
    desc: 'Community portal, which serves as a digital hub for members to monitor water usage, review annual quality reports, and access governance records on the front end. On the back end it serves as a customer billing and management system.',
    year: '2026',
    link: 'https://obcg-modern.vercel.app',
    icon: '📊',
  },
  {
    num: '03',
    title: 'Kanzlei Intake Suite\nData Intake',
    tags: ['Next.js', 'Prisma', 'GenAI'],
    desc: 'Compliance-First Data Intake: I developed a structured legal intake suite designed for internal case preparation, featuring jurisdiction-aware guardrails to ensure data collection meets state-specific privacy requirements.',
    year: '2026',
    link: 'https://kanzlei-intake-suite.online/',
    icon: '🤖',
  },
  {
    num: '04',
    title: 'Launchpad\nGemini Powered SaaS',
    tags: ['Next.Js', 'Supabase', 'SaaS'],
    desc: 'A high-velocity, full-stack SaaS boilerplate designed to deploy production-ready applications in minutes. The core architecture leverages Gemini 3.0 Pro to provide advanced AI capabilities across a variety of specialized industry modules. I implemented a robust Stripe integration to handle complex subscription models—including Starter, Pro, and Unlimited tiers—allowing for immediate monetization upon deployment.',
    year: '2025',
    link: 'https://saas-boilerplate-xi-rose.vercel.app',
    icon: '🌐',
  },
  {
    num: '05',
    title: 'Fine Truth\nForensic Audit',
    tags: ['Next.js', 'Gemini 3.0 Pro', 'Analytics'],
    desc: 'A universal forensic auditing platform designed to evaluate and score global service providers across the ISP, SaaS, and Mobile sectors. I engineered a ￼Forensic AI verification engine that analyzes company contracts and privacy practices to generate real-time integrity scores (0-100). The platform features a dynamic ranking system that automatically categorizes entities into a "Hall of Fame" or "Wall of Shame" based on verified forensic data, providing users with immediate transparency into corporate ethic',
    year: '2025',
    link: 'https://consumer-watchdog.vercel.app',
    icon: '📅',
  },
  {
    num: '06',
    title: 'Can We Talk?\nAI Assisted Commmunication Engine',
    tags: ['NextJs', 'Gemini', 'Multi-Chat'],
    desc: 'A web-based communication tool I developed to help people have better, more productive conversations. The platform features an integrated AI assistant that provides real-time support for two-party dialogues, creating a structured and friendly environment for high-stakes or collaborative discussions.',
    year: '2025',
    link: 'https://ryanernstnyberg.com',
    icon: '🔗',
  },
  {
    num: '07',
    title: 'UX/UI\nEffects',
    tags: ['React', 'NextJs', 'Interactive'],
    desc: 'A sleek, utility-focused web application built with Next.js and deployed on Vercel. I developed a custom interactive comparison slider to facilitate real-time "before and after" visual analysis. The project demonstrates my ability to integrate modern frontend frameworks with high-fidelity UI components to create engaging, purpose-driven user experiences.',
    year: '2025',
    link: 'https://lumen-b4-after.vercel.app',
    icon: '🔗',
  },
  {
    num: '08',
    title: 'Lifestory\nAI Creative',
    tags: ['Kotlin', 'Java', 'Android'],
    desc: 'Download site for the Android app Lifestory, my AI Supported autobiography app.',
    year: '2025',
    link: 'https://apk-dl-site.vercel.app',
    icon: '🔗',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const previewRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const preview = previewRef.current;
    const iframe = iframeRef.current;
    if (!preview || !iframe) return;

    const updateScale = () => {
      if (!preview.offsetWidth) return;
      const scale = preview.offsetWidth / 1280;
      iframe.style.transform = `scale(${scale})`;
    };

    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(preview);
    return () => ro.disconnect();
  }, []);

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
        { opacity: 0, x: fromX, rotateY: index % 2 === 0 ? -10 : 10, scale: 0.92 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        }
      );

      // Tilt on mouse move
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / rect.height) * 8;
        const tiltY = -(x / rect.width) * 8;
        gsap.to(card, {
          rotateX: tiltX,
          rotateY: tiltY,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    init();
  }, [index]);

  return (
    <div className="project-card" ref={cardRef} style={{ opacity: 0 }}>
      <div className="project-card__bg" />
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
            className="project-card__arrow"
            aria-label={`View ${project.title}`}
          >
            ↗
          </a>
        </div>
      </div>
      <div className="project-card__preview" ref={previewRef}>
        <span className="project-card__preview-fallback">{project.icon}</span>
        <iframe
          ref={iframeRef}
          src={project.link}
          className="project-card__iframe"
          title={`Preview of ${project.title}`}
          loading="lazy"
          tabIndex={-1}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);

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
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
