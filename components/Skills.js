'use client';

import { useEffect, useRef } from 'react';
import { useLang } from '../lib/i18n';

const SKILLS = [
  { name: 'React / Next.js', pct: 95 },
  { name: 'Node.js / Express', pct: 88 },
  { name: 'TypeScript', pct: 90 },
  { name: 'PostgreSQL / MongoDB', pct: 82 },
  { name: 'AWS / DevOps', pct: 75 },
  { name: 'UI/UX & Animation', pct: 85 },
];

const TECH = [
  'Next.js', 'React', 'TypeScript', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'AWS', 'Vercel', 'Git',
  'Tailwind', 'GSAP', 'Prisma', 'Stripe',
  'REST APIs', 'WebSockets',
  'React Native', 'Framer Motion', 'Three.js', 'WebGL',
];

export default function Skills() {
  const sectionRef = useRef(null);
  const barsRef = useRef(null);
  const techRef = useRef(null);
  const headingRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      // Skill bars animate in
      const fills = barsRef.current?.querySelectorAll('.skill-item__fill');
      fills?.forEach((fill, i) => {
        const pct = fill.dataset.pct;
        gsap.to(fill, {
          scaleX: parseFloat(pct) / 100,
          duration: 1.2,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: barsRef.current,
            start: 'top 80%',
          },
        });
      });

      // Skill items stagger in
      const items = barsRef.current?.querySelectorAll('.skill-item');
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: barsRef.current,
            start: 'top 85%',
          },
        }
      );

      // Tech badges scatter in
      const badges = techRef.current?.querySelectorAll('.tech-badge');
      gsap.fromTo(
        badges,
        { opacity: 0, scale: 0.7, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 85%',
          },
        }
      );
    };

    init();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills__inner">
        {/* Left: skill bars */}
        <div>
          <div ref={headingRef} style={{ opacity: 0 }}>
            <p className="skills__label">{t.skills.label}</p>
            <h2 className="skills__heading">
              {t.skills.heading[0]}<br />
              <span style={{ color: 'var(--lime)' }}>{t.skills.heading[1]}</span>
            </h2>
          </div>
          <div className="skills__list" ref={barsRef}>
            {SKILLS.map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-item__header">
                  <span className="skill-item__name">{s.name}</span>
                  <span className="skill-item__pct">{s.pct}%</span>
                </div>
                <div className="skill-item__track">
                  <div
                    className="skill-item__fill"
                    data-pct={s.pct}
                    style={{ transformOrigin: 'left center' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: tech badge grid */}
        <div className="skills__tech">
          <p
            className="skills__label"
            style={{ opacity: 0 }}
            ref={(el) => {
              if (el) {
                import('gsap').then(({ gsap }) => {
                  import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                    gsap.registerPlugin(ScrollTrigger);
                    gsap.fromTo(el, { opacity: 0 }, {
                      opacity: 1, duration: 0.5,
                      scrollTrigger: { trigger: el, start: 'top 85%' },
                    });
                  });
                });
              }
            }}
          >
            {t.skills.techLabel}
          </p>
          <div className="skills__tech-grid" ref={techRef}>
            {TECH.map((t) => (
              <div key={t} className="tech-badge">
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
