import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="footer shell">
      <div>
        <strong>{profile.name}</strong>
        <span>{profile.location}</span>
      </div>
      <div className="footerLinks">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}
