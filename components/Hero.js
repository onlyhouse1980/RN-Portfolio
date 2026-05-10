'use client';

import { useEffect, useRef } from 'react';
import { useLang } from '../lib/i18n';

// Particle system for background
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 255, 0, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(180, 255, 0, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);
  const numberRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    let gsap, ScrollTrigger;

    const init = async () => {
      const gsapModule = await import('gsap');
      const stModule = await import('gsap/ScrollTrigger');
      gsap = gsapModule.gsap;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const lines = heroRef.current?.querySelectorAll('.hero__title-inner');
      if (!lines) return;

      // Entrance animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(lines, {
        translateY: '0%',
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.12,
      })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6')
        .to(scrollRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.4');

      // Scroll parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (numberRef.current) {
            numberRef.current.style.transform = `translateY(calc(-50% + ${progress * 80}px))`;
            numberRef.current.style.opacity = 1 - progress * 2;
          }
          if (titleRef.current) {
            titleRef.current.style.transform = `translateY(${progress * 60}px)`;
            titleRef.current.style.opacity = 1 - progress * 1.5;
          }
        },
      });
    };

    init();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero__bg-grid" />
      <div className="hero__noise" />
      <ParticleCanvas />

      <div className="hero__number" ref={numberRef} aria-hidden="true">01</div>

      <div className="hero__content" ref={titleRef}>
        <p className="hero__tag">{t.hero.tag}</p>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-inner">{t.hero.title[0]}</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-inner accent">{t.hero.title[1]}</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__title-inner">{t.hero.title[2]}</span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__subtitle" ref={subtitleRef} style={{ transform: 'translateY(20px)' }}>
            {t.hero.subtitle}
          </p>

          <div className="hero__scroll-indicator" ref={scrollRef}>
            <span>{t.hero.scroll}</span>
            <div className="hero__scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
