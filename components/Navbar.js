'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const apply = () => {
      const isMobile = window.matchMedia('(max-width: 900px)').matches;
      if (menuOpen) {
        nav.style.background = 'rgba(6,6,6,0.95)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.mixBlendMode = 'normal';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      } else if (window.scrollY > 80) {
        nav.style.background = 'rgba(6,6,6,0.9)';
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.mixBlendMode = 'normal';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      } else {
        nav.style.background = isMobile ? 'rgba(6,6,6,0.6)' : 'transparent';
        nav.style.backdropFilter = isMobile ? 'blur(8px)' : 'none';
        nav.style.mixBlendMode = isMobile ? 'normal' : 'difference';
        nav.style.borderBottom = 'none';
      }
    };

    apply();
    window.addEventListener('scroll', apply);
    return () => window.removeEventListener('scroll', apply);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar${menuOpen ? ' navbar--open' : ''}`}
      style={{ transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s, mix-blend-mode 0.1s' }}
    >
      <a href="/" className="navbar__logo">
        RYAN<span>.</span>NYBERG
      </a>
      <div className="navbar__lang" role="group" aria-label={t.nav.switchLabel}>
        <button
          type="button"
          className={`navbar__lang-btn${lang === 'en' ? ' navbar__lang-btn--active' : ''}`}
          aria-pressed={lang === 'en'}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <span className="navbar__lang-sep" aria-hidden="true">/</span>
        <button
          type="button"
          className={`navbar__lang-btn${lang === 'de' ? ' navbar__lang-btn--active' : ''}`}
          aria-pressed={lang === 'de'}
          onClick={() => setLang('de')}
        >
          DE
        </button>
      </div>
      <button
        type="button"
        className="navbar__toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span /><span /><span />
      </button>
      <ul className="navbar__links">
        <li><a onClick={() => scrollTo('about')} href="#about">{t.nav.about}</a></li>
        <li><a onClick={() => scrollTo('projects')} href="#projects">{t.nav.work}</a></li>
        <li><a onClick={() => scrollTo('skills')} href="#skills">{t.nav.skills}</a></li>
        <li><a onClick={() => scrollTo('contact')} href="#contact">{t.nav.contact}</a></li>
      </ul>
    </nav>
  );
}
