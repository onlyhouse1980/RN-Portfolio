'use client';
import Image from 'next/image';
import { translations } from '../../lib/i18n';
import { use } from 'react';

const TECH = [
  'Next.js', 'React', 'TypeScript', 'Node.js',
  'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'AWS', 'Vercel', 'Git',
  'Tailwind', 'GSAP', 'Prisma', 'Stripe',
  'REST APIs', 'WebSockets',
  'React Native', 'Framer Motion', 'Three.js', 'WebGL',
];

type ResumePDFProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

const GermanCV = ({ t }) => (
  <>
    <style>{`
      body { background-color: white !important; color: #333 !important; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important; }
      .cv-container { display: flex; width: 210mm; min-height: 297mm; margin: 0 auto; background: white; box-sizing: border-box; }
      .cv-sidebar { width: 32%; background-color: #f4f4f4; padding: 40px 30px; border-right: 1px solid #ddd; box-sizing: border-box; }
      .cv-main { width: 68%; padding: 40px 40px; box-sizing: border-box; }
      .cv-name { font-size: 24px; font-weight: bold; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 2px; color: #222; }
      .cv-title { font-size: 14px; color: #666; margin-bottom: 30px; text-transform: uppercase; letter-spacing: 1px; }
      .cv-section-title { font-size: 16px; font-weight: bold; text-transform: uppercase; border-bottom: 2px solid #333; padding-bottom: 5px; margin-bottom: 20px; margin-top: 30px; letter-spacing: 1px; color: #222; }
      .cv-sidebar .cv-section-title { border-bottom: 2px solid #999; margin-top: 40px; }
      .cv-contact-item { font-size: 12px; margin-bottom: 10px; color: #444; }
      .cv-skill-item { font-size: 12px; background: #e0e0e0; padding: 4px 8px; border-radius: 4px; display: inline-block; margin-right: 5px; margin-bottom: 5px; color: #333; }
      .cv-entry { display: flex; margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid; }
      .cv-date { width: 120px; flex-shrink: 0; font-size: 12px; font-weight: bold; color: #555; padding-top: 2px; }
      .cv-content { flex-grow: 1; }
      .cv-content h3 { margin: 0 0 4px 0; font-size: 15px; color: #222; }
      .cv-content h4 { margin: 0 0 8px 0; font-size: 13px; font-weight: normal; color: #666; }
      .cv-content p { margin: 0; font-size: 12px; line-height: 1.5; color: #444; }
      @media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .cv-container { width: 100%; min-height: 100%; } }
    `}</style>
    <div className="cv-container">
      <div className="cv-sidebar">
        <Image src="/profile.jpg" alt="Profile" width={120} height={160} unoptimized priority style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', marginBottom: '30px', display: 'block', border: '3px solid #ddd' }} />
        <h1 className="cv-name">Ryan Nyberg</h1>
        <div className="cv-title">{t.title}</div>
        <h2 className="cv-section-title">{t.contact}</h2>
        <div className="cv-contact-item">Email: onlyhouse@gmail.com</div>
        <div className="cv-contact-item">Phone: +49 0157 56424428</div>
        <div className="cv-contact-item">Location: Leipziger Str. 222, 01139 Dresden, Germany, Remote</div>
        <div className="cv-contact-item">Languages: English, German</div>
        <h2 className="cv-section-title">{t.skills}</h2>
        <div>{TECH.map(s => <span key={s} className="cv-skill-item">{s}</span>)}</div>
      </div>
      <div className="cv-main">
        <div style={{ marginBottom: '30px' }}><p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#444' }}>{t.summary}</p></div>
        <h2 className="cv-section-title" style={{ marginTop: 0 }}>{t.experience}</h2>
        {t.jobs.map((job, i) => (
          <div className="cv-entry" key={i}>
            <div className="cv-date">{job.date}</div>
            <div className="cv-content">
              <h3>{job.company}</h3><h4>{job.title}</h4>
              <p style={{ marginBottom: job.desc2 ? '8px' : '0' }}>{job.desc1}</p>
              {job.desc2 && <p>{job.desc2}</p>}
            </div>
          </div>
        ))}
        <h2 className="cv-section-title">{t.education}</h2>
        {t.edu.map((item, i) => (
          <div className="cv-entry" key={i}>
            <div className="cv-date">{item.date}</div>
            <div className="cv-content">
              <h3>{item.school}</h3><h4>{item.degree}</h4><p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const EnglishCV = ({ t }) => (
  <>
    <style>{`
      body { background-color: white !important; color: #222 !important; margin: 0; padding: 0; font-family: 'Georgia', serif !important; }
      .cv-container { width: 210mm; min-height: 297mm; margin: 0 auto; background: white; padding: 40px 60px; box-sizing: border-box; }
      .cv-header { text-align: center; border-bottom: 2px solid #222; padding-bottom: 20px; margin-bottom: 20px; }
      .cv-name { font-size: 32px; font-weight: bold; margin: 0 0 5px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-transform: uppercase; letter-spacing: 2px; }
      .cv-title { font-size: 16px; color: #555; margin-bottom: 10px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      .cv-contact { font-size: 12px; color: #444; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      .cv-summary { font-size: 14px; line-height: 1.6; margin-bottom: 30px; text-align: justify; }
      .cv-section-title { font-size: 16px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 15px; margin-top: 25px; letter-spacing: 1px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      .cv-entry { margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid; }
      .cv-entry-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px; }
      .cv-company { font-size: 16px; font-weight: bold; margin: 0; }
      .cv-date { font-size: 14px; color: #555; font-style: italic; }
      .cv-job-title { font-size: 15px; font-weight: normal; margin: 0 0 8px 0; color: #444; }
      .cv-desc { margin: 0; font-size: 13px; line-height: 1.6; color: #333; }
      .cv-skills { display: flex; flex-wrap: wrap; gap: 8px; }
      .cv-skill { font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 1px solid #ccc; padding: 3px 8px; border-radius: 3px; }
      @media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .cv-container { width: 100%; min-height: 100%; } }
    `}</style>
    <div className="cv-container">
      <div className="cv-header">
        <h1 className="cv-name">Ryan Nyberg</h1>
        <div className="cv-title">{t.title}</div>
        <div className="cv-contact">onlyhouse@gmail.com &nbsp;|&nbsp; +49 0157 56424428 &nbsp;|&nbsp; Leipziger Str. 222, 01139 Dresden, Germany, Remote &nbsp;|&nbsp; Languages: English, German</div>
      </div>
      <div className="cv-summary">{t.summary}</div>
      
      <h2 className="cv-section-title">{t.experience}</h2>
      {t.jobs.map((job, i) => (
        <div className="cv-entry" key={i}>
          <div className="cv-entry-header">
            <h3 className="cv-company">{job.company}</h3>
            <div className="cv-date">{job.date}</div>
          </div>
          <h4 className="cv-job-title">{job.title}</h4>
          <p className="cv-desc" style={{ marginBottom: job.desc2 ? '8px' : '0' }}>{job.desc1}</p>
          {job.desc2 && <p className="cv-desc">{job.desc2}</p>}
        </div>
      ))}
      
      <h2 className="cv-section-title">{t.education}</h2>
      {t.edu.map((item, i) => (
        <div className="cv-entry" key={i}>
          <div className="cv-entry-header">
            <h3 className="cv-company">{item.school}</h3>
            <div className="cv-date">{item.date}</div>
          </div>
          <h4 className="cv-job-title">{item.degree}</h4>
          <p className="cv-desc">{item.desc}</p>
        </div>
      ))}
      
      <h2 className="cv-section-title">{t.skills}</h2>
      <div className="cv-skills">
        {TECH.map(s => <span key={s} className="cv-skill">{s}</span>)}
      </div>
    </div>
  </>
);

const FrenchCV = ({ t }) => (
  <>
    <style>{`
      body { background-color: white !important; color: #333 !important; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important; }
      .cv-container { width: 210mm; min-height: 297mm; margin: 0 auto; background: white; padding: 40px; box-sizing: border-box; display: flex; flex-direction: column; }
      .cv-header { display: flex; align-items: center; border-bottom: 3px solid #1a5f7a; padding-bottom: 30px; margin-bottom: 30px; }
      .cv-photo { margin-right: 40px; }
      .cv-header-info { flex-grow: 1; }
      .cv-name { font-size: 36px; font-weight: 300; margin: 0 0 10px 0; color: #1a5f7a; letter-spacing: 1px; }
      .cv-title { font-size: 18px; font-weight: bold; color: #444; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
      .cv-contact { font-size: 13px; color: #666; line-height: 1.6; }
      .cv-body { display: flex; gap: 40px; }
      .cv-main { width: 65%; }
      .cv-sidebar { width: 35%; }
      .cv-section-title { font-size: 18px; font-weight: bold; color: #1a5f7a; text-transform: uppercase; margin-bottom: 20px; margin-top: 0; }
      .cv-entry { margin-bottom: 25px; page-break-inside: avoid; break-inside: avoid; }
      .cv-date { font-size: 13px; color: #1a5f7a; font-weight: bold; margin-bottom: 5px; }
      .cv-company { font-size: 16px; font-weight: bold; margin: 0 0 5px 0; color: #222; }
      .cv-job-title { font-size: 14px; font-style: italic; margin: 0 0 10px 0; color: #555; }
      .cv-desc { margin: 0; font-size: 12px; line-height: 1.5; color: #444; text-align: justify; }
      .cv-summary { font-size: 13px; line-height: 1.6; color: #444; margin-bottom: 40px; text-align: justify; }
      .cv-skills { margin-bottom: 40px; }
      .cv-skill-group { display: flex; flex-direction: column; gap: 8px; }
      .cv-skill { font-size: 13px; color: #333; display: flex; align-items: center; }
      .cv-skill::before { content: "•"; color: #1a5f7a; font-weight: bold; margin-right: 10px; font-size: 18px; }
      @media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .cv-container { width: 100%; min-height: 100%; } }
    `}</style>
    <div className="cv-container">
      <div className="cv-header">
        <div className="cv-photo">
          <Image src="/profile.jpg" alt="Profile" width={140} height={180} unoptimized priority style={{ borderRadius: '10px', objectFit: 'cover', objectPosition: 'top center', border: '1px solid #ccc' }} />
        </div>
        <div className="cv-header-info">
          <h1 className="cv-name">RYAN <strong>NYBERG</strong></h1>
          <div className="cv-title">{t.title}</div>
          <div className="cv-contact">
            Leipziger Str. 222, 01139 Dresden, Germany, Remote<br/>onlyhouse@gmail.com<br/>+49 0157 56424428<br/>Languages: English, German
          </div>
        </div>
      </div>
      
      <div className="cv-body">
        <div className="cv-main">
          <h2 className="cv-section-title">{t.experience}</h2>
          {t.jobs.map((job, i) => (
            <div className="cv-entry" key={i}>
              <div className="cv-date">{job.date}</div>
              <h3 className="cv-company">{job.company}</h3>
              <h4 className="cv-job-title">{job.title}</h4>
              <p className="cv-desc" style={{ marginBottom: job.desc2 ? '8px' : '0' }}>{job.desc1}</p>
              {job.desc2 && <p className="cv-desc">{job.desc2}</p>}
            </div>
          ))}
          
          <h2 className="cv-section-title" style={{ marginTop: '30px' }}>{t.education}</h2>
          {t.edu.map((item, i) => (
            <div className="cv-entry" key={i}>
              <div className="cv-date">{item.date}</div>
              <h3 className="cv-company">{item.school}</h3>
              <h4 className="cv-job-title">{item.degree}</h4>
              <p className="cv-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="cv-sidebar">
          <h2 className="cv-section-title">Profil</h2>
          <div className="cv-summary">{t.summary}</div>
          
          <h2 className="cv-section-title">{t.skills}</h2>
          <div className="cv-skills">
            <div className="cv-skill-group">
              {TECH.map(s => <div key={s} className="cv-skill">{s}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const SpanishCV = ({ t }) => (
  <>
    <style>{`
      body { background-color: white !important; color: #333 !important; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important; }
      .cv-container { display: flex; width: 210mm; min-height: 297mm; margin: 0 auto; background: white; box-sizing: border-box; }
      .cv-sidebar { width: 35%; background-color: #2c3e50; color: #ecf0f1; padding: 40px 30px; box-sizing: border-box; }
      .cv-main { width: 65%; padding: 40px; box-sizing: border-box; }
      .cv-photo-container { text-align: center; margin-bottom: 30px; }
      .cv-name { font-size: 28px; font-weight: bold; margin-bottom: 5px; color: #ecf0f1; text-align: center; }
      .cv-title { font-size: 15px; color: #bdc3c7; text-align: center; margin-bottom: 40px; font-weight: 300; letter-spacing: 1px; text-transform: uppercase; }
      .cv-section-title-side { font-size: 16px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #7f8c8d; padding-bottom: 5px; margin-bottom: 20px; color: #ecf0f1; letter-spacing: 1px; }
      .cv-contact-item { font-size: 13px; margin-bottom: 15px; color: #bdc3c7; display: flex; align-items: center; }
      .cv-skill-item { font-size: 13px; color: #bdc3c7; margin-bottom: 8px; }
      .cv-section-title-main { font-size: 20px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 2px solid #3498db; padding-bottom: 8px; margin-bottom: 25px; margin-top: 0; }
      .cv-summary { font-size: 13px; line-height: 1.6; color: #555; margin-bottom: 35px; text-align: justify; }
      .cv-entry { margin-bottom: 25px; page-break-inside: avoid; break-inside: avoid; }
      .cv-job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px; }
      .cv-job-title { font-size: 16px; font-weight: bold; color: #2c3e50; margin: 0; }
      .cv-date { font-size: 13px; color: #3498db; font-weight: bold; }
      .cv-company { font-size: 14px; font-weight: bold; color: #7f8c8d; margin: 0 0 8px 0; text-transform: uppercase; }
      .cv-desc { margin: 0; font-size: 13px; line-height: 1.5; color: #555; }
      @media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .cv-container { width: 100%; min-height: 100%; } }
    `}</style>
    <div className="cv-container">
      <div className="cv-sidebar">
        <div className="cv-photo-container">
          <Image src="/profile.jpg" alt="Profile" width={130} height={130} unoptimized priority style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '3px solid #ecf0f1' }} />
        </div>
        <h1 className="cv-name">RYAN NYBERG</h1>
        <div className="cv-title">{t.title}</div>
        
        <h2 className="cv-section-title-side">{t.contact}</h2>
        <div className="cv-contact-item">Leipziger Str. 222, 01139 Dresden, Germany, Remote</div>
        <div className="cv-contact-item">onlyhouse@gmail.com</div>
        <div className="cv-contact-item">+49 0157 56424428</div>
        <div className="cv-contact-item">Languages: English, German</div>
        
        <h2 className="cv-section-title-side" style={{ marginTop: '40px' }}>{t.skills}</h2>
        <div>{TECH.map(s => <div key={s} className="cv-skill-item">{s}</div>)}</div>
      </div>
      
      <div className="cv-main">
        <h2 className="cv-section-title-main">Perfil</h2>
        <div className="cv-summary">{t.summary}</div>
        
        <h2 className="cv-section-title-main">{t.experience}</h2>
        {t.jobs.map((job, i) => (
          <div className="cv-entry" key={i}>
            <div className="cv-job-header">
              <h3 className="cv-job-title">{job.title}</h3>
              <div className="cv-date">{job.date}</div>
            </div>
            <h4 className="cv-company">{job.company}</h4>
            <p className="cv-desc" style={{ marginBottom: job.desc2 ? '8px' : '0' }}>{job.desc1}</p>
            {job.desc2 && <p className="cv-desc">{job.desc2}</p>}
          </div>
        ))}
        
        <h2 className="cv-section-title-main" style={{ marginTop: '30px' }}>{t.education}</h2>
        {t.edu.map((item, i) => (
          <div className="cv-entry" key={i}>
            <div className="cv-job-header">
              <h3 className="cv-job-title">{item.degree}</h3>
              <div className="cv-date">{item.date}</div>
            </div>
            <h4 className="cv-company">{item.school}</h4>
            <p className="cv-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

const DutchCV = ({ t }) => (
  <>
    <style>{`
      body { background-color: white !important; color: #333 !important; margin: 0; padding: 0; font-family: 'Open Sans', 'Helvetica Neue', sans-serif !important; }
      .cv-container { width: 210mm; min-height: 297mm; margin: 0 auto; background: white; padding: 50px; box-sizing: border-box; }
      .cv-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; }
      .cv-header-left { display: flex; align-items: flex-end; gap: 30px; }
      .cv-name { font-size: 38px; font-weight: 800; margin: 0 0 5px 0; color: #222; text-transform: uppercase; letter-spacing: -1px; }
      .cv-title { font-size: 18px; color: #e67e22; font-weight: 600; text-transform: lowercase; margin: 0; }
      .cv-contact { text-align: right; font-size: 13px; color: #666; line-height: 1.5; }
      .cv-summary { font-size: 14px; line-height: 1.6; color: #444; margin-bottom: 40px; padding: 20px; background: #f9f9f9; border-left: 4px solid #e67e22; }
      .cv-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
      .cv-section-title { font-size: 22px; font-weight: 800; color: #222; margin-top: 0; margin-bottom: 25px; text-transform: uppercase; letter-spacing: -0.5px; }
      .cv-entry { margin-bottom: 30px; page-break-inside: avoid; break-inside: avoid; }
      .cv-company { font-size: 16px; font-weight: 700; color: #222; margin: 0 0 3px 0; }
      .cv-job-title { font-size: 14px; color: #e67e22; font-weight: 600; margin: 0 0 5px 0; }
      .cv-date { font-size: 12px; color: #888; font-weight: 600; margin-bottom: 10px; text-transform: uppercase; }
      .cv-desc { margin: 0; font-size: 13px; line-height: 1.6; color: #555; }
      .cv-skills { display: flex; flex-wrap: wrap; gap: 10px; }
      .cv-skill { font-size: 12px; background: #222; color: white; padding: 5px 10px; border-radius: 20px; font-weight: 600; }
      @media print { @page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .cv-container { width: 100%; min-height: 100%; } }
    `}</style>
    <div className="cv-container">
      <div className="cv-header">
        <div className="cv-header-left">
          <Image src="/profile.jpg" alt="Profile" width={100} height={100} unoptimized priority style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center' }} />
          <div>
            <h1 className="cv-name">Ryan Nyberg</h1>
            <div className="cv-title">{t.title}</div>
          </div>
        </div>
        <div className="cv-contact">
          Leipziger Str. 222, 01139 Dresden, Germany, Remote<br/>onlyhouse@gmail.com<br/>+49 0157 56424428<br/>Languages: English, German
        </div>
      </div>
      
      <div className="cv-summary">{t.summary}</div>
      
      <div className="cv-grid">
        <div>
          <h2 className="cv-section-title">{t.experience}</h2>
          {t.jobs.map((job, i) => (
            <div className="cv-entry" key={i}>
              <h3 className="cv-company">{job.company}</h3>
              <h4 className="cv-job-title">{job.title}</h4>
              <div className="cv-date">{job.date}</div>
              <p className="cv-desc" style={{ marginBottom: job.desc2 ? '8px' : '0' }}>{job.desc1}</p>
              {job.desc2 && <p className="cv-desc">{job.desc2}</p>}
            </div>
          ))}
          
          <h2 className="cv-section-title" style={{ marginTop: '40px' }}>{t.education}</h2>
          {t.edu.map((item, i) => (
            <div className="cv-entry" key={i}>
              <h3 className="cv-company">{item.school}</h3>
              <h4 className="cv-job-title">{item.degree}</h4>
              <div className="cv-date">{item.date}</div>
              <p className="cv-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="cv-section-title">{t.skills}</h2>
          <div className="cv-skills">
            {TECH.map(s => <span key={s} className="cv-skill">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default function ResumePDF({ searchParams }: ResumePDFProps) {
  const resolvedParams = use(searchParams);
  const lang = (resolvedParams?.lang || 'en') as keyof typeof translations;
  const t = translations[lang]?.resume || translations['en']?.resume;

  switch (lang) {
    case 'en': return <EnglishCV t={t} />;
    case 'de': return <GermanCV t={t} />;
    case 'fr': return <FrenchCV t={t} />;
    case 'es': return <SpanishCV t={t} />;
    case 'nl': return <DutchCV t={t} />;
    default:   return <EnglishCV t={t} />;
  }
}
