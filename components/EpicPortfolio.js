'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';
import { PROJECTS } from './Projects';
import Contact from './Contact';
import CustomCursor from './CustomCursor';

const FEATURED_PROJECT_NUMBERS = ['05', '04', '14'];

const TECH_STACK = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Node.js',
  'AI systems',
  'PostgreSQL',
  'GSAP',
  'Vercel',
  'Prisma',
  'Stripe',
  'WebSockets',
  'Three.js',
];

function truncateDescription(description, length = 220) {
  const normalized = description
    .replace(/[`*_#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return normalized.length > length
    ? `${normalized.slice(0, length).trimEnd()}…`
    : normalized;
}

function SceneAtmosphere({ variant = '' }) {
  return (
    <>
      <div
        className={`scene-layer depth-0 scene-atmosphere scene-atmosphere--far ${variant}`}
        data-depth="0"
        aria-hidden="true"
      />
      <div
        className={`scene-layer depth-1 scene-atmosphere scene-atmosphere--glow ${variant}`}
        data-depth="1"
        data-parallax="1"
        aria-hidden="true"
      />
      <div
        className={`scene-layer depth-2 scene-atmosphere scene-atmosphere--grid ${variant}`}
        data-depth="2"
        data-parallax="2"
        aria-hidden="true"
      />
    </>
  );
}

function EpicNavigation({ motionEnabled, onMotionToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const languages = ['en', 'de', 'es', 'fr', 'nl'];

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`epic-nav${menuOpen ? ' epic-nav--open' : ''}`}>
      <a className="epic-nav__brand" href="#hero" onClick={closeMenu}>
        <span>RYAN</span>
        <span className="epic-nav__brand-mark" aria-hidden="true">/</span>
        <span>NYBERG</span>
      </a>

      <p className="epic-nav__role">
        <span className="epic-nav__role-title">Independent full-stack engineer</span>
        <span className="epic-nav__role-location">Berlin · Worldwide</span>
      </p>

      <button
        type="button"
        className="epic-nav__menu-button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav className="epic-nav__panel" id="primary-navigation" aria-label="Primary navigation">
        <div className="epic-nav__links">
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#projects" onClick={closeMenu}>{t.nav.work}</a>
          <a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
          <a href="/resume" onClick={closeMenu}>Resume</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
        </div>

        <div className="epic-nav__controls">
          <div className="language-switcher" role="group" aria-label={t.nav.switchLabel}>
            {languages.map((language) => (
              <button
                type="button"
                key={language}
                className={lang === language ? 'is-active' : ''}
                aria-pressed={lang === language}
                onClick={() => setLang(language)}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="motion-control"
            aria-pressed={!motionEnabled}
            onClick={onMotionToggle}
          >
            <span className="motion-control__icon" aria-hidden="true">✦</span>
            Motion {motionEnabled ? 'on' : 'off'}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const heroTitle = t.hero.title.join(' ');

  return (
    <section className="scene hero-scene" id="hero" aria-label="Introduction">
      <div className="hero-stage">
        <div className="scene-layer depth-0 hero-depth hero-depth--void" data-depth="0" aria-hidden="true">
          <div className="hero-depth__halo" />
        </div>

        <div
          className="scene-layer depth-1 hero-depth hero-depth--ghost"
          data-depth="1"
          data-parallax="1"
          aria-hidden="true"
        >
          <span>RYAN</span>
          <span>NYBERG</span>
        </div>

        <div
          className="scene-layer depth-2 hero-depth hero-depth--orbit"
          data-depth="2"
          data-parallax="2"
          aria-hidden="true"
        >
          <div className="hero-orbit hero-orbit--one float-loop" />
          <div className="hero-orbit hero-orbit--two float-loop" />
          <span className="hero-coordinate hero-coordinate--left">52.5200° N</span>
          <span className="hero-coordinate hero-coordinate--right">13.4050° E</span>
        </div>

        <div className="scene-layer depth-3 hero-depth hero-depth--portrait" data-depth="3" data-parallax="3">
          <div className="hero-portrait-frame">
            <Image
              className="hero-portrait"
              src="/profile.jpg"
              alt="Portrait of full-stack developer Ryan Nyberg"
              fill
              priority
              sizes="(max-width: 760px) 82vw, 34vw"
            />
            <span className="hero-portrait-frame__index" aria-hidden="true">RN / 01</span>
          </div>
        </div>

        <div className="scene-layer depth-4 hero-depth hero-depth--content" data-depth="4">
          <div className="hero-kicker" data-animate="curtain">
            <span className="hero-kicker__status" aria-hidden="true" />
            {t.hero.tag}
          </div>

          <h1 className="hero-title" aria-label={heroTitle}>
            {t.hero.title.map((line, index) => (
              <span
                className={`hero-title__mask hero-title__mask--${index + 1}`}
                key={line}
                aria-hidden="true"
              >
                <span className="hero-title__line">{line}</span>
              </span>
            ))}
          </h1>

          <div className="hero-intro" data-animate="fade-up">
            <p>{t.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="button button--signal" href="#projects">
                Explore the work
                <span aria-hidden="true">↘</span>
              </a>
              <a className="button button--quiet" href="/resume">
                View résumé
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="scene-layer depth-5 hero-depth hero-depth--foreground"
          data-depth="5"
          data-parallax="5"
          aria-hidden="true"
        >
          <div className="hero-sight">
            <span />
            <span />
          </div>
          <div className="hero-scroll-cue">
            <span>{t.hero.scroll}</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const { t } = useLang();
  const words = t.about.text.split(/\s+/);

  return (
    <section className="scene manifesto-scene" id="about" aria-label={t.about.label}>
      <SceneAtmosphere variant="scene-atmosphere--manifesto" />

      <div className="depth-3 manifesto-index" data-depth="3" data-parallax="3" aria-hidden="true">
        <span>02</span>
        <span>ABOUT / METHOD</span>
      </div>

      <div className="depth-4 manifesto-content" data-depth="4">
        <p className="section-kicker reveal">{t.about.label}</p>
        <h2 className="manifesto-heading reveal">
          {t.about.heading[0]} <em>{t.about.heading[1]}</em>
        </h2>
        <p className="manifesto-copy" aria-label={t.about.text}>
          {words.map((word, index) => (
            <span className="manifesto-word" aria-hidden="true" key={`${word}-${index}`}>
              {word}
            </span>
          ))}
        </p>

        <div className="manifesto-stats">
          {t.about.stats.map((stat) => (
            <div className="manifesto-stat reveal" key={stat.label}>
              <strong>{stat.num}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <div className="manifesto-stat reveal">
            <strong>{PROJECTS.length}</strong>
            <span>Production-grade case studies</span>
          </div>
        </div>
      </div>

      <div className="depth-5 manifesto-asterisk float-loop" data-depth="5" data-parallax="5" aria-hidden="true">
        ✦
      </div>
    </section>
  );
}

function FeaturedProject({ project, index }) {
  const colorClass = `featured-project--${index + 1}`;

  return (
    <article className={`scene featured-project ${colorClass}`} data-project={project.num}>
      <div className="featured-project__stage">
        <div className="scene-layer depth-0 featured-project__background" data-depth="0" aria-hidden="true">
          <span className="featured-project__giant-number">{project.num}</span>
        </div>
        <div
          className="scene-layer depth-1 featured-project__glow"
          data-depth="1"
          data-parallax="1"
          aria-hidden="true"
        />
        <div
          className="scene-layer depth-2 featured-project__wire"
          data-depth="2"
          data-parallax="2"
          aria-hidden="true"
        >
          <span />
          <span />
        </div>

        <a
          className="depth-3 featured-project__visual"
          data-depth="3"
          data-parallax="3"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title.replace('\n', ' ')}`}
        >
          <div className="featured-project__screen">
            <Image
              src={project.fallbackImage}
              alt={`Screenshot of ${project.title.replace('\n', ' ')}`}
              fill
              sizes="(max-width: 900px) 92vw, 58vw"
              loading="lazy"
            />
          </div>
        </a>

        <div className="depth-4 featured-project__copy" data-depth="4">
          <div className="featured-project__eyebrow">
            <span>Case study / {project.year}</span>
            <span>{String(index + 1).padStart(2, '0')} — 03</span>
          </div>
          <h3>
            {project.title.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h3>
          <p>{truncateDescription(project.desc, 300)}</p>
          <div className="featured-project__meta">
            <div>
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className="scene-layer depth-5 featured-project__foreground"
          data-depth="5"
          data-parallax="5"
          aria-hidden="true"
        >
          <span>BUILD / SHIP / REFINE</span>
        </div>
      </div>
    </article>
  );
}

function Work({ projects }) {
  const { t } = useLang();
  const featuredProjects = FEATURED_PROJECT_NUMBERS
    .map((number) => projects.find((project) => project.num === number))
    .filter(Boolean);
  const archiveProjects = projects.filter(
    (project) => !FEATURED_PROJECT_NUMBERS.includes(project.num),
  );

  return (
    <section className="work-scene" id="projects" aria-label={t.projects.heading.join(' ')}>
      <div className="work-heading scene">
        <SceneAtmosphere variant="scene-atmosphere--work" />
        <div className="depth-4 work-heading__inner" data-depth="4">
          <p className="section-kicker reveal">03 / Selected work</p>
          <h2 className="reveal">
            <span>{t.projects.heading[0]}</span>
            <em>{t.projects.heading[1]}</em>
          </h2>
          <p className="work-heading__note reveal">
            Production systems, AI products, learning platforms, and high-craft interfaces.
          </p>
        </div>
        <div className="depth-5 work-heading__count" data-depth="5" aria-hidden="true">
          {projects.length.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="featured-stack">
        {featuredProjects.map((project, index) => (
          <FeaturedProject project={project} index={index} key={project.num} />
        ))}
      </div>

      <div className="scene project-archive" aria-label="Project archive">
        <SceneAtmosphere variant="scene-atmosphere--archive" />
        <div className="depth-4 project-archive__inner" data-depth="4">
          <div className="project-archive__heading reveal">
            <p className="section-kicker">The archive</p>
            <h3>More systems.<br /><em>More proof.</em></h3>
            <span>{archiveProjects.length} additional projects</span>
          </div>

          <div className="project-archive__grid">
            {archiveProjects.map((project, index) => (
              <a
                className="archive-card"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.num}
                data-archive-card
              >
                <div className="archive-card__image">
                  <Image
                    src={project.fallbackImage}
                    alt={`Screenshot of ${project.title.replace('\n', ' ')}`}
                    fill
                    sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 31vw"
                    loading="lazy"
                  />
                  <span className="archive-card__launch" aria-hidden="true">↗</span>
                </div>
                <div className="archive-card__topline">
                  <span>{project.num}</span>
                  <span>{project.year}</span>
                </div>
                <h4>
                  {project.title.split('\n').map((line) => <span key={line}>{line}</span>)}
                </h4>
                <div className="archive-card__tags">
                  {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="archive-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="depth-5 project-archive__mark float-loop" data-depth="5" aria-hidden="true">✦</div>
      </div>
    </section>
  );
}

function Capabilities() {
  const { t } = useLang();

  return (
    <section className="scene capabilities-scene" id="skills" aria-label={t.skills.label}>
      <SceneAtmosphere variant="scene-atmosphere--capabilities" />

      <div className="depth-3 capability-wheel" data-depth="3" data-parallax="3" aria-hidden="true">
        <div>
          <span>DESIGN</span>
          <span>ENGINEER</span>
          <span>SHIP</span>
          <span>ITERATE</span>
        </div>
      </div>

      <div className="depth-4 capabilities-content" data-depth="4">
        <div className="capabilities-heading">
          <p className="section-kicker reveal">04 / {t.skills.label}</p>
          <h2 className="reveal">
            <span>{t.skills.heading[0]}</span>
            <em>{t.skills.heading[1]}</em>
          </h2>
        </div>

        <div className="capability-list">
          {t.projects.summary.categories.map((category) => (
            <article className="capability-row reveal" key={category.num}>
              <span>{category.num}</span>
              <h3>{category.title}</h3>
              <p>{category.desc}</p>
            </article>
          ))}
        </div>

        <div className="tech-marquee" aria-label={TECH_STACK.join(', ')}>
          <div className="tech-marquee__track" aria-hidden="true">
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <span key={`${tech}-${index}`}>
                {tech}<i>✦</i>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="depth-5 capabilities-coordinate" data-depth="5" aria-hidden="true">
        RN © 2026 / 05
      </div>
    </section>
  );
}

function ClosingStatement() {
  const { t } = useLang();

  return (
    <section className="scene statement-scene" aria-label={t.closing.eyebrow}>
      <SceneAtmosphere variant="scene-atmosphere--statement" />
      <div className="depth-3 statement-quote-mark" data-depth="3" data-parallax="3" aria-hidden="true">
        “
      </div>
      <div className="depth-4 statement-content" data-depth="4">
        <p className="section-kicker reveal">{t.closing.eyebrow}</p>
        <blockquote className="reveal">
          <p>{t.closing.quote}</p>
        </blockquote>
        <span className="statement-attribution reveal">— {t.closing.attribution}</span>
        <div className="statement-audio reveal">
          <span>{t.closing.audioLabel}</span>
          <audio controls preload="metadata">
            <source src="/Ryan_Nyberg_s_Technical_Thriller_in_Web_Engineering.m4a" type="audio/mp4" />
          </audio>
        </div>
      </div>
      <div className="depth-5 statement-star float-loop" data-depth="5" aria-hidden="true">✦</div>
    </section>
  );
}

export default function EpicPortfolio() {
  const rootRef = useRef(null);
  const { t, lang } = useLang();
  const [motionEnabled, setMotionEnabled] = useState(true);

  const localizedProjects = useMemo(
    () => PROJECTS.map((project) => {
      const localized = t.projects.items[project.num] || {};
      return {
        ...project,
        title: localized.title || project.title,
        desc: localized.desc || project.desc,
      };
    }),
    [t],
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const savedPreference = window.localStorage.getItem('portfolio-motion');
    const shouldEnable = savedPreference ? savedPreference === 'on' : !reducedMotion;
    setMotionEnabled(shouldEnable);
    document.documentElement.classList.toggle('no-motion', !shouldEnable);

    return () => {
      document.documentElement.classList.remove('no-motion', 'perf-lite');
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    let animationContext;
    let lenis;
    let tickerCallback;
    let cancelled = false;

    const initAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled || !rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const liteMode = reducedMotion || coarsePointer || !motionEnabled;

      document.documentElement.classList.toggle('perf-lite', coarsePointer);

      if (!liteMode) {
        const Lenis = (await import('lenis')).default;
        if (cancelled) return;
        lenis = new Lenis({
          duration: 1.15,
          easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
          smoothWheel: true,
          syncTouch: false,
        });
        lenis.on('scroll', ScrollTrigger.update);
        tickerCallback = (time) => lenis?.raf(time * 1000);
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);
      }

      animationContext = gsap.context(() => {
        const compactLayout = window.matchMedia('(max-width: 900px)').matches;

        if (liteMode) {
          gsap.set(
            '.hero-title__line, .hero-kicker, .hero-intro, .hero-portrait-frame, .reveal, [data-archive-card]',
            { clearProps: 'all', opacity: 1, x: 0, y: 0, clipPath: 'inset(0 0% 0 0)' },
          );
          gsap.set('.manifesto-word', { color: 'rgba(245, 242, 234, 0.92)' });
          return;
        }

        const heroIntro = gsap.timeline({ defaults: { ease: 'power4.out' } });
        heroIntro
          .from('.hero-kicker', { opacity: 0, y: 22, duration: 0.65 }, 0.15)
          .from('.hero-title__line', {
            yPercent: 115,
            duration: 1.05,
            stagger: 0.1,
          }, 0.08)
          .from('.hero-portrait-frame', {
            opacity: 0,
            scale: 0.78,
            clipPath: 'inset(48% 16% 48% 16% round 40%)',
            duration: 1.35,
          }, 0.28)
          .from('.hero-intro', { opacity: 0, y: 30, duration: 0.8 }, 0.65)
          .from('.hero-sight', { opacity: 0, scale: 1.4, duration: 0.9 }, 0.75);

        const heroScroll = gsap.timeline({
          scrollTrigger: {
            trigger: '.hero-scene',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.15,
          },
        });
        heroScroll
          .to('.hero-title__mask--1 .hero-title__line', { xPercent: -28, opacity: 0.12 }, 0)
          .to('.hero-title__mask--2 .hero-title__line', { xPercent: 22, opacity: 0.16 }, 0)
          .to('.hero-title__mask--3 .hero-title__line', { xPercent: -18, opacity: 0.1 }, 0)
          .to('.hero-portrait-frame', { scale: 1.12, yPercent: -6 }, 0)
          .to('.hero-orbit--one', { rotate: 170, scale: 1.14 }, 0)
          .to('.hero-orbit--two', { rotate: -130, scale: 0.86 }, 0)
          .to('.hero-intro, .hero-kicker, .hero-scroll-cue', { opacity: 0, y: -36 }, 0.1)
          .to('.hero-depth--ghost', { opacity: 0.45, scale: 1.08 }, 0.12);

        gsap.utils.toArray('[data-parallax]').forEach((element) => {
          const depth = Number(element.dataset.depth || 1);
          const scene = element.closest('.scene');
          if (!scene || scene.classList.contains('hero-scene')) return;

          gsap.fromTo(
            element,
            { yPercent: 6 * Math.max(1, depth / 2) },
            {
              yPercent: -8 * Math.max(1, depth / 2),
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });

        gsap.fromTo(
          '.manifesto-word',
          { color: 'rgba(245, 242, 234, 0.12)' },
          {
            color: 'rgba(245, 242, 234, 0.96)',
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: '.manifesto-copy',
              start: 'top 78%',
              end: 'bottom 38%',
              scrub: 0.6,
            },
          },
        );

        gsap.utils.toArray('.reveal').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 54,
            clipPath: 'inset(0 0 18% 0)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          });
        });

        const featuredCards = gsap.utils.toArray('.featured-project');
        featuredCards.forEach((card, index) => {
          if (!compactLayout && index < featuredCards.length - 1) {
            gsap.to(card.querySelector('.featured-project__stage'), {
              scale: 0.92,
              filter: 'brightness(0.48) blur(4px)',
              opacity: 0.7,
              ease: 'none',
              scrollTrigger: {
                trigger: featuredCards[index + 1],
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
          }

          const screen = card.querySelector('.featured-project__screen');
          const copy = card.querySelector('.featured-project__copy');
          gsap.from(screen, {
            scale: 0.78,
            opacity: 0,
            clipPath: 'inset(22% 14% 22% 14% round 30px)',
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 72%',
              end: 'top 28%',
              scrub: 1,
            },
          });
          gsap.from(copy, {
            opacity: 0,
            xPercent: index % 2 === 0 ? -10 : 10,
            scrollTrigger: {
              trigger: card,
              start: 'top 68%',
              end: 'top 34%',
              scrub: 1,
            },
          });
        });

        gsap.utils.toArray('[data-archive-card]').forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 70,
            rotate: index % 2 === 0 ? -1.5 : 1.5,
            clipPath: 'inset(0 0 26% 0 round 24px)',
            duration: 0.9,
            delay: (index % 3) * 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              once: true,
            },
          });
        });
      }, rootRef);

      ScrollTrigger.refresh();
    };

    initAnimations();

    return () => {
      cancelled = true;
      animationContext?.revert();
      lenis?.destroy();
      document.documentElement.classList.remove('perf-lite');
      if (tickerCallback) {
        import('gsap').then(({ gsap }) => gsap.ticker.remove(tickerCallback));
      }
    };
  }, [lang, motionEnabled]);

  const handleMotionToggle = () => {
    setMotionEnabled((current) => {
      const next = !current;
      window.localStorage.setItem('portfolio-motion', next ? 'on' : 'off');
      document.documentElement.classList.toggle('no-motion', !next);
      return next;
    });
  };

  return (
    <div className="epic-portfolio" ref={rootRef}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="site-grain" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <CustomCursor />
      <EpicNavigation motionEnabled={motionEnabled} onMotionToggle={handleMotionToggle} />

      <main id="main-content">
        <Hero />
        <Manifesto />
        <Work projects={localizedProjects} />
        <Capabilities />
        <ClosingStatement />
        <Contact />
      </main>

      <footer className="epic-footer">
        <a href="#hero">Ryan Nyberg</a>
        <span>Full-stack engineering / digital experiences</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
