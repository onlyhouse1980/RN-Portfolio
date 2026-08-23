import Link from 'next/link';

export default function Nav() {
  return (
    <header className="navWrap">
      <nav className="nav shell">
        <Link className="brand" href="/">RYAN NYBERG</Link>
        <div className="navLinks">
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/github">GitHub strategy</Link>
          <a className="navCta" href="/Ryan_Nyberg_ATS_Resume.pdf">Resume PDF</a>
        </div>
      </nav>
    </header>
  );
}
