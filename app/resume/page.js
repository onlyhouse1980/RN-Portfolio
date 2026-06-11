'use client';

import Navbar from '../../components/Navbar';
import CustomCursor from '../../components/CustomCursor';
import PlasmaGrid from '../../components/PlasmaGrid';
import { LanguageProvider, useLang } from '../../lib/i18n';
import { useEffect } from 'react';

import Image from 'next/image';

const TECH = [
  'Next.js', 'React', 'TypeScript', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'AWS', 'Vercel', 'Git',
  'Tailwind', 'GSAP', 'Prisma', 'Stripe',
  'REST APIs', 'WebSockets',
  'React Native', 'Framer Motion', 'Three.js', 'WebGL',
];

function ResumeContent() {
  const { lang, t } = useLang();
  useEffect(() => {
    let lenis;
    let ctx;
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

      ctx = gsap.context(() => {
        // Page Load Animations
        gsap.fromTo(
          '.resume-header-img',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power4.out' }
        );

        gsap.fromTo(
          '.resume-header-title',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.1 }
        );

        gsap.fromTo(
          '.resume-header-download',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
        );

        gsap.fromTo(
          '.resume-contact-item',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.3 }
        );

        // Scroll Animations with ScrollTrigger
        gsap.fromTo(
          '.resume-summary-section',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.resume-summary-section',
              start: 'top 85%',
            },
          }
        );

        gsap.fromTo(
          '.resume-experience-title',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.resume-experience-title',
              start: 'top 85%',
            },
          }
        );

        gsap.fromTo(
          '.resume-job-item',
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: '.resume-experience-list',
              start: 'top 80%',
            },
          }
        );

        gsap.fromTo(
          '.resume-education-title',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.resume-education-title',
              start: 'top 85%',
            },
          }
        );

        gsap.fromTo(
          '.resume-edu-item',
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: '.resume-education-list',
              start: 'top 80%',
            },
          }
        );

        gsap.fromTo(
          '.resume-skills-title',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.resume-skills-title',
              start: 'top 85%',
            },
          }
        );

        gsap.fromTo(
          '.resume-skill-badge',
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.04,
            scrollTrigger: {
              trigger: '.resume-skills-list',
              start: 'top 85%',
            },
          }
        );
      });
    };

    init();

    return () => {
      if (lenis) lenis.destroy();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <>
      <PlasmaGrid />
      <CustomCursor />
      <Navbar />

      <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '4rem', gap: '2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', gap: '2rem' }}>
              <div>
                <Image 
                  className="resume-header-img"
                  src="/profile.jpg" 
                  alt="Ryan Nyberg" 
                  width={150} 
                  height={210} 
                  unoptimized
                  priority
                  style={{ borderRadius: '50%', border: '2px solid var(--lime)', objectFit: 'cover', objectPosition: 'top center', marginBottom: '2rem' }}
                />
                <h1 className="about__heading resume-header-title" style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', margin: 0 }}>
                  {t.resume?.myResumeLabel}<em>{t.resume?.myResumeHighlight}</em>
                </h1>
              </div>
              <a 
                className="resume-header-download"
                href={`/Ryan_Nyberg_Resume_${lang}.pdf`} 
                target="_blank"
                download={`Ryan_Nyberg_Resume_${lang}.pdf`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: 'var(--lime)',
                  color: 'var(--bg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '3px',
                  fontWeight: 'bold',
                  transition: 'opacity 0.2s',
                  marginBottom: '1.5rem'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.8'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                {t.resume?.download || 'Download PDF'}
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--gray)' }}>
            <div className="resume-contact-item">
              <span style={{ color: 'var(--lime)' }}>// EMAIL </span> onlyhouse@gmail.com
            </div>
            <div className="resume-contact-item">
              <span style={{ color: 'var(--lime)' }}>// PHONE </span> +49 0157 56424428
            </div>
            <div className="resume-contact-item">
              <span style={{ color: 'var(--lime)' }}>// LOCATION </span> Leipziger Str. 222, 01139 Dresden, Germany, Remote
            </div>
            <div className="resume-contact-item">
              <span style={{ color: 'var(--lime)' }}>// LANGUAGES </span> English, German
            </div>
          </div>
          
          <div className="resume-summary-section" style={{ marginBottom: '4rem', maxWidth: '900px' }}>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '1.5rem' }}>
              // {t.resume?.profSummary}
            </h2>
            <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.2rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.6 }}>
              {t.resume?.summary}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6rem' }}>
            
            {/* Experience Section */}
            <section>
              <h2 className="resume-experience-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '2rem' }}>
                // {t.resume?.experience}
              </h2>
              
              <div className="resume-experience-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {t.resume?.jobs?.map((job, idx) => (
                  <div className="resume-job-item" key={idx} style={{ borderLeft: '1px solid var(--lime)', paddingLeft: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.05em', color: 'var(--white)', margin: 0 }}>{job.company}</h3>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray)' }}>{job.date}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--lime)', marginBottom: '0.8rem', marginTop: 0 }}>{job.title}</p>
                    <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.6, maxWidth: '800px', marginBottom: job.desc2 ? '0.8rem' : 0 }}>
                      {job.desc1}
                    </p>
                    {job.desc2 && (
                      <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.6, maxWidth: '800px' }}>
                        {job.desc2}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="resume-education-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '2rem' }}>
                // {t.resume?.education}
              </h2>
              
              <div className="resume-education-list" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {t.resume?.edu?.map((item, idx) => (
                  <div className="resume-edu-item" key={idx} style={{ borderLeft: '1px solid var(--lime)', paddingLeft: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.05em', color: 'var(--white)', margin: 0 }}>{item.school}</h3>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray)' }}>{item.date}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--lime)', margin: 0 }}>{item.degree}</p>
                    <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '1rem', fontWeight: 300, color: 'var(--gray)', marginTop: '0.5rem', maxWidth: '700px', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="resume-skills-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '2rem' }}>
                // {t.resume?.skills}
              </h2>
              
              <div className="resume-skills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {TECH.map(skill => (
                  <span className="resume-skill-badge" key={skill} style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid var(--lime)',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--lime)',
                    backgroundColor: 'rgba(180, 255, 0, 0.05)',
                    display: 'inline-block'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="footer" style={{ borderTop: '1px solid var(--gray-dim)', padding: '2rem 3rem', textAlign: 'center' }}>
        <p className="footer__copy" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          © 2026 <span style={{ color: 'var(--white)' }}>RYAN.NYBERG</span>
        </p>
      </footer>
    </>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <ResumeContent />
    </LanguageProvider>
  );
}
