'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const bigTextRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Big heading lines reveal
      const lines = bigTextRef.current?.querySelectorAll('.line-inner');
      if (lines) {
        gsap.to(lines, {
          translateY: '0%',
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: bigTextRef.current,
            start: 'top 85%',
          },
        });
      }

      // Contact info and CTA
      gsap.fromTo(
        splitRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: splitRef.current,
            start: 'top 85%',
          },
        }
      );
    };

    init();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <div className="contact__big" ref={bigTextRef}>
          <span className="line-wrap">
            <span className="line-inner" style={{ transform: 'translateY(110%)' }}>
              Let&apos;s build
            </span>
          </span>
          <span className="line-wrap">
            <span className="line-inner accent" style={{ transform: 'translateY(110%)' }}>
              something
            </span>
          </span>
          <span className="line-wrap">
            <span className="line-inner" style={{ transform: 'translateY(110%)' }}>
              great.
            </span>
          </span>
        </div>

        <div className="contact__split" ref={splitRef} style={{ opacity: 0 }}>
          <div className="contact__info">
            <div className="contact__info-item">
              <label>Email</label>
              <a href="mailto:onlyhouse@gmail.com">onlyhouse@gmail.com</a>
            </div>
            <div className="contact__info-item">
              <label>GitHub</label>
              <a href="https://github.com/onlyhouse1980" target="_blank" rel="noreferrer">
                github.com/onlyhouse1980
              </a>
            </div>
            <div className="contact__info-item">
              <label>LinkedIn</label>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="contact__info-item">
              <label>Location</label>
              <span>Remote — Worldwide</span>
            </div>
          </div>

          <div className="contact__cta">
            <p className="contact__desc">
              I&apos;m currently available for freelance projects, full-time roles, and
              exciting collaborations. If you have a project in mind or just want
              to chat, my inbox is always open.
            </p>
            <a href="mailto:hello@yourname.dev" className="contact__btn">
              <span>Start a conversation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
