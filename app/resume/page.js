'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import CustomCursor from '../../components/CustomCursor';
import { ContactModal } from '../../components/Contact';
import { EpicNavigation } from '../../components/EpicPortfolio';
import { LanguageProvider, useLang } from '../../lib/i18n';

const TECH = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'AWS',
  'Vercel',
  'Git',
  'Tailwind',
  'GSAP',
  'Prisma',
  'Stripe',
  'REST APIs',
  'WebSockets',
  'React Native',
  'Three.js',
  'AI Systems',
];

function ResumeAtmosphere({ variant = '' }) {
  return (
    <>
      <div
        className={`resume-scene-layer depth-0 resume-atmosphere resume-atmosphere--far ${variant}`}
        data-depth="0"
        aria-hidden="true"
      />
      <div
        className={`resume-scene-layer depth-1 resume-atmosphere resume-atmosphere--glow ${variant}`}
        data-depth="1"
        data-resume-parallax="1"
        aria-hidden="true"
      />
      <div
        className={`resume-scene-layer depth-2 resume-atmosphere resume-atmosphere--grid ${variant}`}
        data-depth="2"
        data-resume-parallax="2"
        aria-hidden="true"
      />
    </>
  );
}

function ResumeContent() {
  const { lang, t } = useLang();
  const rootRef = useRef(null);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const summaryWords = useMemo(
    () => (t.resume?.summary || '').split(/\s+/).filter(Boolean),
    [t.resume?.summary],
  );

  const pdfPath = `/Ryan_Nyberg_Resume_${lang}.pdf`;
  const resumeTitle = `${t.resume?.myResumeLabel || 'My '}${t.resume?.myResumeHighlight || 'Resume'}`;

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const savedPreference = window.localStorage.getItem('portfolio-motion');
    const shouldEnable = savedPreference ? savedPreference === 'on' : !reducedMotion;

    setMotionEnabled(shouldEnable);
    document.documentElement.classList.toggle('no-motion', !shouldEnable);

    return () => {
      document.documentElement.classList.remove('no-motion', 'resume-perf-lite');
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

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled || !rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const liteMode = reducedMotion || coarsePointer || !motionEnabled;

      document.documentElement.classList.toggle('resume-perf-lite', coarsePointer);

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
        if (liteMode) {
          gsap.set(
            '.resume-hero__kicker, .resume-hero__title-line, .resume-portrait-frame, .resume-hero__meta, .resume-reveal, .resume-job, .resume-education-card, .resume-tech-chip',
            {
              clearProps: 'all',
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              clipPath: 'inset(0 0% 0 0)',
            },
          );
          gsap.set('.resume-summary__word', { color: 'rgba(245, 242, 234, 0.96)' });
          return;
        }

        // Frame-sequenced entrance: crisp editorial ease, shared timing across
        // typography, portrait, metadata, and actions.
        const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
        intro
          .from('.resume-hero__kicker', { opacity: 0, y: 20, duration: 0.55 }, 0.12)
          .from('.resume-hero__title-line', {
            yPercent: 115,
            duration: 1,
            stagger: 0.11,
          }, 0.08)
          .from('.resume-portrait-frame', {
            opacity: 0,
            scale: 0.78,
            clipPath: 'inset(48% 18% 48% 18% round 42%)',
            duration: 1.3,
          }, 0.28)
          .from('.resume-hero__meta', {
            opacity: 0,
            y: 28,
            duration: 0.72,
          }, 0.62)
          .from('.resume-hero__actions', {
            opacity: 0,
            y: 22,
            duration: 0.64,
          }, 0.76);

        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.resume-hero',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.1,
          },
        });
        heroTimeline
          .to('.resume-hero__title-mask--one .resume-hero__title-line', {
            xPercent: -28,
            opacity: 0.14,
          }, 0)
          .to('.resume-hero__title-mask--two .resume-hero__title-line', {
            xPercent: 24,
            opacity: 0.14,
          }, 0)
          .to('.resume-portrait-frame', {
            scale: 1.1,
            yPercent: -7,
          }, 0)
          .to('.resume-hero__ring--outer', { rotate: 170, scale: 1.1 }, 0)
          .to('.resume-hero__ring--inner', { rotate: -130, scale: 0.88 }, 0)
          .to('.resume-hero__meta, .resume-hero__actions, .resume-hero__kicker', {
            opacity: 0,
            y: -30,
          }, 0.12);

        gsap.utils.toArray('[data-resume-parallax]').forEach((element) => {
          const depth = Number(element.dataset.depth || 1);
          const scene = element.closest('.scene');
          if (!scene || scene.classList.contains('resume-hero')) return;

          gsap.fromTo(
            element,
            { yPercent: 5 * Math.max(1, depth / 2) },
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
          '.resume-summary__word',
          { color: 'rgba(245, 242, 234, 0.12)' },
          {
            color: 'rgba(245, 242, 234, 0.96)',
            stagger: 0.075,
            ease: 'none',
            scrollTrigger: {
              trigger: '.resume-summary__copy',
              start: 'top 80%',
              end: 'bottom 38%',
              scrub: 0.6,
            },
          },
        );

        gsap.utils.toArray('.resume-reveal').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 48,
            clipPath: 'inset(0 0 18% 0)',
            duration: 0.88,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          });
        });

        gsap.utils.toArray('.resume-job').forEach((job, index) => {
          gsap.from(job, {
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
            clipPath: index % 2 === 0
              ? 'inset(0 18% 0 0)'
              : 'inset(0 0 0 18%)',
            duration: 0.92,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: job,
              start: 'top 88%',
              once: true,
            },
          });
        });

        gsap.from('.resume-education-card', {
          opacity: 0,
          y: 54,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.resume-education-grid',
            start: 'top 84%',
            once: true,
          },
        });

        gsap.from('.resume-tech-chip', {
          opacity: 0,
          scale: 0.82,
          y: 18,
          stagger: 0.035,
          duration: 0.48,
          ease: 'back.out(1.35)',
          scrollTrigger: {
            trigger: '.resume-tech-grid',
            start: 'top 86%',
            once: true,
          },
        });
      }, rootRef);

      ScrollTrigger.refresh();
    };

    init();

    return () => {
      cancelled = true;
      animationContext?.revert();
      lenis?.destroy();
      document.documentElement.classList.remove('resume-perf-lite');
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
    <div className="resume-epic" ref={rootRef}>
      <a className="skip-link" href="#resume-main">Skip to résumé content</a>
      <div className="resume-grain" aria-hidden="true" />
      <CustomCursor />
      <EpicNavigation
        motionEnabled={motionEnabled}
        onMotionToggle={handleMotionToggle}
        homePath="/"
      />

      <main id="resume-main">
        <section className="scene resume-hero" aria-label={resumeTitle}>
          <div className="resume-hero__stage">
            <div className="resume-scene-layer depth-0 resume-hero__void" data-depth="0" aria-hidden="true" />

            <div
              className="resume-scene-layer depth-1 resume-hero__ghost"
              data-depth="1"
              aria-hidden="true"
            >
              <span>CURRICULUM</span>
              <span>VITAE</span>
            </div>

            <div
              className="resume-scene-layer depth-2 resume-hero__geometry"
              data-depth="2"
              aria-hidden="true"
            >
              <div className="resume-hero__ring resume-hero__ring--outer" />
              <div className="resume-hero__ring resume-hero__ring--inner" />
              <span className="resume-hero__coordinate resume-hero__coordinate--one">CV / 2026</span>
              <span className="resume-hero__coordinate resume-hero__coordinate--two">52.5200° N</span>
            </div>

            <div className="resume-scene-layer depth-3 resume-hero__portrait" data-depth="3">
              <div className="resume-portrait-frame">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of full-stack developer and AI engineer Ryan Nyberg"
                  fill
                  priority
                  sizes="(max-width: 760px) 78vw, 34vw"
                />
                <span aria-hidden="true">RN / PROFILE</span>
              </div>
            </div>

            <div className="resume-scene-layer depth-4 resume-hero__content" data-depth="4">
              <p className="resume-hero__kicker">
                <span aria-hidden="true" />
                {t.resume?.title} · 2026
              </p>

              <h1 className="resume-hero__title" aria-label={resumeTitle}>
                <span className="resume-hero__title-mask resume-hero__title-mask--one" aria-hidden="true">
                  <span className="resume-hero__title-line">{t.resume?.myResumeLabel || 'My'}</span>
                </span>
                <span className="resume-hero__title-mask resume-hero__title-mask--two" aria-hidden="true">
                  <span className="resume-hero__title-line">{t.resume?.myResumeHighlight || 'Resume'}</span>
                </span>
              </h1>

              <div className="resume-hero__meta">
                <div>
                  <span>{t.contact?.info?.location}</span>
                  <strong>Dresden · Germany · Remote</strong>
                </div>
                <div>
                  <span>{t.contact?.info?.email}</span>
                  <a href="mailto:onlyhouse@gmail.com">onlyhouse@gmail.com</a>
                </div>
                <div>
                  <span>{t.contact?.info?.linkedin}</span>
                  <a href="https://linkedin.com/in/ryan-nyberg" target="_blank" rel="noreferrer">
                    /in/ryan-nyberg
                  </a>
                </div>
              </div>

              <div className="resume-hero__actions">
                <a
                  className="button button--signal"
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`Ryan_Nyberg_Resume_${lang}.pdf`}
                >
                  {t.resume?.download || 'Download PDF'}
                  <span aria-hidden="true">↓</span>
                </a>
                <a className="button button--quiet" href="#resume-experience">
                  {t.resume?.experience}
                  <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>

            <div
              className="resume-scene-layer depth-5 resume-hero__foreground"
              data-depth="5"
              aria-hidden="true"
            >
              <span className="resume-hero__chapter">01 / INTRODUCTION</span>
              <span className="resume-hero__scroll">SCROLL TO READ <i /></span>
            </div>
          </div>
        </section>

        <section className="scene resume-summary-scene" id="resume-summary" aria-label={t.resume?.profSummary}>
          <ResumeAtmosphere variant="resume-atmosphere--summary" />
          <div className="depth-3 resume-summary__index" data-depth="3" data-resume-parallax="3" aria-hidden="true">
            02
          </div>

          <div className="depth-4 resume-summary__content" data-depth="4">
            <p className="section-kicker resume-reveal">02 / {t.resume?.profSummary}</p>
            <h2 className="resume-summary__heading resume-reveal">
              Engineer with <em>range.</em>
            </h2>
            <p className="resume-summary__copy" aria-label={t.resume?.summary}>
              {summaryWords.map((word, index) => (
                <span className="resume-summary__word" aria-hidden="true" key={`${word}-${index}`}>
                  {word}
                </span>
              ))}
            </p>

            <div className="resume-summary__metrics">
              <article className="resume-reveal">
                <strong>10+</strong>
                <span>Years across engineering, media, and brand systems</span>
              </article>
              <article className="resume-reveal">
                <strong>16</strong>
                <span>Production case studies shipped and documented</span>
              </article>
              <article className="resume-reveal">
                <strong>05</strong>
                <span>Languages supported across this résumé experience</span>
              </article>
            </div>
          </div>

          <div className="depth-5 resume-summary__star" data-depth="5" data-resume-parallax="5" aria-hidden="true">
            ✦
          </div>
        </section>

        <section className="scene resume-experience-scene" id="resume-experience" aria-label={t.resume?.experience}>
          <ResumeAtmosphere variant="resume-atmosphere--experience" />
          <div className="depth-3 resume-experience__rail" data-depth="3" aria-hidden="true">
            <span>2016</span>
            <i />
            <span>2008</span>
          </div>

          <div className="depth-4 resume-experience__content" data-depth="4">
            <header className="resume-experience__header resume-reveal">
              <p className="section-kicker">03 / {t.resume?.experience}</p>
              <h2>
                Built in the <em>real world.</em>
              </h2>
              <p>{t.resume?.jobs?.length || 0} roles across software, live experiences, and brand operations.</p>
            </header>

            <div className="resume-experience__list">
              {t.resume?.jobs?.map((job, index) => (
                <article className="resume-job" key={`${job.company}-${job.date}`}>
                  <div className="resume-job__number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="resume-job__date">{job.date}</div>
                  <div className="resume-job__body">
                    <h3>{job.company}</h3>
                    <p className="resume-job__title">{job.title}</p>
                    <div className="resume-job__description">
                      <p>{job.desc1}</p>
                      {job.desc2 && <p>{job.desc2}</p>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="depth-5 resume-experience__mark" data-depth="5" data-resume-parallax="5" aria-hidden="true">
            EXPERIENCE
          </div>
        </section>

        <section className="scene resume-credentials-scene" id="resume-credentials" aria-label={`${t.resume?.education} and ${t.resume?.skills}`}>
          <ResumeAtmosphere variant="resume-atmosphere--credentials" />
          <div className="depth-3 resume-credentials__orbit" data-depth="3" data-resume-parallax="3" aria-hidden="true">
            <span>LEARN</span>
            <span>BUILD</span>
            <span>REFINE</span>
          </div>

          <div className="depth-4 resume-credentials__content" data-depth="4">
            <div className="resume-credentials__heading resume-reveal">
              <p className="section-kicker">04 / {t.resume?.education}</p>
              <h2>Proof of <em>practice.</em></h2>
            </div>

            <div className="resume-education-grid">
              {t.resume?.edu?.map((item, index) => (
                <article className="resume-education-card" key={`${item.school}-${item.date}`}>
                  <div className="resume-education-card__topline">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3>{item.school}</h3>
                  <strong>{item.degree}</strong>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="resume-skills-block">
              <div className="resume-skills-block__heading resume-reveal">
                <p className="section-kicker">05 / {t.resume?.skills}</p>
                <h2>Tools that <em>ship.</em></h2>
              </div>

              <div className="resume-tech-marquee" aria-label={TECH.join(', ')}>
                <div className="resume-tech-marquee__track" aria-hidden="true">
                  {[...TECH, ...TECH].map((skill, index) => (
                    <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
                  ))}
                </div>
              </div>

              <div className="resume-tech-grid">
                {TECH.map((skill, index) => (
                  <span className="resume-tech-chip" key={skill}>
                    <i>{String(index + 1).padStart(2, '0')}</i>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="depth-5 resume-credentials__coordinate" data-depth="5" aria-hidden="true">
            RN / CREDENTIALS / 2026
          </div>
        </section>

        <section className="scene resume-cta-scene" id="resume-contact" aria-label={t.resume?.contact}>
          <ResumeAtmosphere variant="resume-atmosphere--cta" />
          <div className="depth-3 resume-cta__index" data-depth="3" data-resume-parallax="3" aria-hidden="true">
            06
          </div>
          <div className="depth-4 resume-cta__content" data-depth="4">
            <p className="section-kicker resume-reveal">06 / {t.resume?.contact}</p>
            <h2 className="resume-reveal">
              {t.contact?.big?.map((line, index) => (
                <span className={index === 1 ? 'is-accent' : ''} key={line}>{line}</span>
              ))}
            </h2>
            <p className="resume-cta__description resume-reveal">{t.contact?.desc}</p>
            <div className="resume-cta__actions resume-reveal">
              <a
                className="button resume-cta__download"
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download={`Ryan_Nyberg_Resume_${lang}.pdf`}
              >
                {t.resume?.download || 'Download PDF'} <span aria-hidden="true">↓</span>
              </a>
              <button
                type="button"
                className="button resume-cta__email"
                onClick={() => setIsContactModalOpen(true)}
              >
                {t.contact?.cta} <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
          <div className="depth-5 resume-cta__foreground" data-depth="5" aria-hidden="true">
            AVAILABLE / WORLDWIDE
          </div>
        </section>
      </main>

      <footer className="resume-footer">
        <a href="/">Ryan Nyberg</a>
        <span>{t.resume?.title}</span>
        <span>© 2026</span>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <ResumeContent />
    </LanguageProvider>
  );
}
