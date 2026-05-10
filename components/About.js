'use client';

import { useEffect, useRef } from 'react';

const TEXT =
  'I craft high-performance web applications that push the boundaries of what\'s possible in a browser. With years of experience, I specialize in building seamless user experiences from pixel-perfect interfaces to scalable backend architectures.';

export default function About() {
  const sectionRef = useRef(null);
  const wordsRef = useRef(null);
  const statsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Heading reveal
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

      // Word-by-word text reveal
      const words = wordsRef.current?.querySelectorAll('.about__word');
      if (words) {
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

      // Stats reveal
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

      // Counter animation for numbers
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
  }, []);

  const words = TEXT.split(' ');

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__inner">
        {/* Left column */}
        <div>
          <p className="about__label">About Me</p>
          <h2 className="about__heading" ref={headingRef} style={{ opacity: 0 }}>
            Code as<br /><em>craft</em>
          </h2>

          <p className="about__text" ref={wordsRef}>
            {words.map((word, i) => (
              <span key={i} className="about__word">{word}</span>
            ))}
          </p>
        </div>

        {/* Right column */}
        <div>
          <div className="about__stats" ref={statsRef}>
            <div className="about__stat">
              <span
                className="about__stat-num"
                data-target="10"
                data-suffix="+"
              >
                10+
              </span>
              <span className="about__stat-label">Years of Experience</span>
            </div>
            <div className="about__stat">
              <span
                className="about__stat-num"
                data-target="40"
                data-suffix="+"
              >
                40+
              </span>
              <span className="about__stat-label">Projects Shipped</span>
            </div>
            <div className="about__stat">
              <span
                className="about__stat-num"
                data-target="20"
                data-suffix="+"
              >
                10+
              </span>
              <span className="about__stat-label">Happy Clients</span>
            </div>
            <div className="about__stat">
              <span
                className="about__stat-num"
                data-target="100"
                data-suffix="%"
              >
                90%
              </span>
              <span className="about__stat-label">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
