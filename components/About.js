'use client';

import { useEffect, useRef } from 'react';
import { useLang } from '../lib/i18n';

export default function About() {
  const sectionRef = useRef(null);
  const wordsRef = useRef(null);
  const statsRef = useRef(null);
  const headingRef = useRef(null);
  const { t, lang } = useLang();

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      const words = wordsRef.current?.querySelectorAll('.about__word');
      if (words) {
        gsap.set(words, { opacity: 0, y: 18 });
        gsap.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wordsRef.current,
            start: 'top 80%',
          },
        });
      }

      const stats = statsRef.current?.querySelectorAll('.about__stat');
      if (stats) {
        gsap.fromTo(
          stats,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      const counters = statsRef.current?.querySelectorAll('.about__stat-num');
      if (counters) {
        counters.forEach((counter) => {
          const target = parseInt(counter.dataset.target, 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              counter.textContent = Math.round(obj.val) + (counter.dataset.suffix || '');
            },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
            },
          });
        });
      }
    };

    init();
  }, [lang]);

  const words = t.about.text.split(' ');

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__inner">
        <div>
          <p className="about__label">{t.about.label}</p>
          <h2 className="about__heading" ref={headingRef} style={{ opacity: 0 }}>
            {t.about.heading[0]}<br /><em>{t.about.heading[1]}</em>
          </h2>

          <p className="about__text" ref={wordsRef}>
            {words.map((word, i) => (
              <span key={`${lang}-${i}`} className="about__word">{word}</span>
            ))}
          </p>
        </div>

        <div>
          <div className="about__stats" ref={statsRef}>
            {t.about.stats.map((stat, i) => (
              <div
                key={i}
                className="about__stat"
                role="group"
                aria-label={`${stat.num} ${stat.label}`}
              >
                <span
                  className="about__stat-num"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                  aria-hidden="true"
                >
                  {stat.num}
                </span>
                <span className="about__stat-label" aria-hidden="true">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
