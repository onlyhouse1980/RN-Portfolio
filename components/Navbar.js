'use client';

import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav.style.background = 'rgba(6,6,6,0.9)';
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.mixBlendMode = 'normal';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.mixBlendMode = 'difference';
        nav.style.borderBottom = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className="navbar" style={{ transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s, mix-blend-mode 0.1s' }}>
      <a href="/" className="navbar__logo">
        RYAN<span>.</span>NYBERG
      </a>
      <ul className="navbar__links">
        <li><a onClick={() => scrollTo('about')} href="#about">About</a></li>
        <li><a onClick={() => scrollTo('projects')} href="#projects">Work</a></li>
        <li><a onClick={() => scrollTo('skills')} href="#skills">Skills</a></li>
        <li><a onClick={() => scrollTo('contact')} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
