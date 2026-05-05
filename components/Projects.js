'use client';

import { useEffect, useRef } from 'react';

// ─── YOUR PROJECTS — Edit this array to customize ────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'Instructional\nRef. App',
    tags: ['Next.js', 'Rest API', 'Claude AI'],
    desc: 'Full-stack e-commerce with real-time inventory, checkout flows, and admin dashboard.',
    year: '2026',
    link: 'https://bartender-blue.vercel.app',
    icon: '🛒',
  },
  {
    num: '02',
    title: 'Full Stack\nUtilities Site',
    tags: ['Next.Js', 'MongoDB', 'Node'],
    desc: 'Analytics platform with live data visualization for 10k+ concurrent users.',
    year: '2026',
    link: 'https://obcg.org',
    icon: '📊',
  },
  {
    num: '03',
    title: 'Onboarding\nLegal',
    tags: ['Next.js', 'OpenAI', 'Vercel'],
    desc: 'Real-time AI assistant with streaming responses and custom model fine-tuning.',
    year: '2026',
    link: 'https://kanzlei-intake-suite.online/',
    icon: '🤖',
  },
  {
    num: '04',
    title: 'SAAS\nDashboard',
    tags: ['Next.Js', 'Supabase', 'Resend'],
    desc: 'Cross-platform mobile social app with 50k+ downloads and real-time messaging.',
    year: '2025',
    link: 'https://saas-boilerplate-xi-rose.vercel.app',
    icon: '🌐',
  },
  {
    num: '05',
    title: 'Consumer\nProtection',
    tags: ['Next.js', 'Prisma', 'Redis'],
    desc: 'Multi-tenant booking platform with calendar sync and automated notifications.',
    year: '2025',
    link: 'https://consumer-watchdog.vercel.app',
    icon: '📅',
  },
  {
    num: '06',
    title: 'AI\nMulti-Chat',
    tags: ['React', 'Solidity', 'IPFS'],
    desc: 'NFT marketplace with smart contract integration and gasless transactions.',
    year: '2025',
    link: 'https://ryanernstnyberg.com',
    icon: '🔗',
  },
  {
    num: '07',
    title: 'UX/UI\nDemo',
    tags: ['React', 'Solidity', 'IPFS'],
    desc: 'NFT marketplace with smart contract integration and gasless transactions.',
    year: '2025',
    link: 'https://lumen-b4-after.vercel.app',
    icon: '🔗',
  },
  {
    num: '08',
    title: 'AI\nCreative',
    tags: ['React', 'Solidity', 'IPFS'],
    desc: 'NFT marketplace with smart contract integration and gasless transactions.',
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
