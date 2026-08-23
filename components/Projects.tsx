'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';

/**
 * Individual Project Card component with an interactive flip effect.
 * Displays project overview on the front, and localized details/links on the back.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.project - The project data object (contains localized text).
 * @param {number} props.index - The index of the project in the list.
 * @param {boolean} props.isFlipped - Whether this specific card is currently flipped.
 * @param {Function} props.setFlippedNum - State setter to control which card is flipped.
 * @param {boolean} [props.priority] - If true, tells Next.js Image to eager load (LCP optimization).
 * @returns {JSX.Element} The 3D flip card.
 */
function ProjectCard({ project, index, isFlipped, setFlippedNum, priority }) {
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
            <span className="project-card__num">Project {project.num} / Year {project.year}</span>
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
            <Image
              className="project-card__preview-image"
              src={project.fallbackImage}
              alt={`Screenshot of ${project.title.replace('\n', ' ')}`}
              fill
              priority={priority}
              loading={priority ? undefined : "lazy"}
              sizes="(max-width: 900px) 86vw, 36vw"
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
          <span className="project-card__num">Project {project.num} / Year {project.year}</span>
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

/**
 * The Projects section.
 * Renders a grid of ProjectCard components, handling localization injections
 * and GSAP ScrollTrigger entry animations.
 *
 * @returns {JSX.Element} The Projects section wrapper.
 */
export default function Projects({ projects = [] }) {
  const headerRef = useRef(null);
  const [flippedNum, setFlippedNum] = useState(null);
  const { t } = useLang();

  const localizedProjects = projects.map((p) => {
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

      if (!headerRef.current) return;

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
            priority={i < 2 || i === localizedProjects.length - 1}
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
