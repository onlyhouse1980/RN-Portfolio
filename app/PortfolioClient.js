'use client';

import { useEffect, useRef, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import PlasmaGrid from '../components/PlasmaGrid';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { LanguageProvider, useLang } from '../lib/i18n';

function PortfolioBody() {
  const { t } = useLang();
  const [audioOpen, setAudioOpen] = useState(false);
  const audioRef = useRef(null);

  const handleAudioClick = (e) => {
    e.preventDefault();
    setAudioOpen(true);
    requestAnimationFrame(() => {
      const el = audioRef.current;
      if (el) {
        el.currentTime = 0;
        const playPromise = el.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
      }
    });
  };

  // Lenis smooth scroll — initialised once at the client root
  useEffect(() => {
    let lenis;

    const init = async () => {
      const LenisModule = await import('lenis');
      const Lenis = LenisModule.default;

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false,
        touchMultiplier: 1.5,
      });

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <PlasmaGrid />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />

        <div className="section-line" aria-hidden="true">
          <div className="section-line__bar" />
          <span className="section-line__text">{t.sectionLines.work}</span>
          <div className="section-line__bar" />
        </div>

        <Projects />

        <div className="section-line" aria-hidden="true">
          <div className="section-line__bar" />
          <span className="section-line__text">{t.sectionLines.skills}</span>
          <div className="section-line__bar" />
        </div>

        <Skills />

        <section className="closing-quote" aria-label={t.closing.eyebrow}>
          <blockquote className="closing-quote__body">
            <span className="closing-quote__mark" aria-hidden="true">“</span>
            <p>{t.closing.quote}</p>
          </blockquote>
          <span className="closing-quote__attribution">— {t.closing.attribution}</span>
          <a
            className="closing-quote__audio"
            href="/Ryan_Nyberg_s_Technical_Thriller_in_Web_Engineering.m4a"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAudioClick}
            aria-expanded={audioOpen}
            aria-controls="closing-quote-player"
          >
            <span className="closing-quote__audio-icon" aria-hidden="true">▶</span>
            <span>{t.closing.audioLabel}</span>
          </a>
          {audioOpen && (
            <audio
              id="closing-quote-player"
              ref={audioRef}
              className="closing-quote__player"
              src="/Ryan_Nyberg_s_Technical_Thriller_in_Web_Engineering.m4a"
              controls
              autoPlay
              preload="auto"
            />
          )}
        </section>

        <Contact />
      </main>

      <footer className="footer">
        <p className="footer__copy">
          © 2025 <span>RYAN.NYBERG</span> — {t.footer}
        </p>
      </footer>
    </>
  );
}

export default function PortfolioClient() {
  return (
    <LanguageProvider>
      <PortfolioBody />
    </LanguageProvider>
  );
}
