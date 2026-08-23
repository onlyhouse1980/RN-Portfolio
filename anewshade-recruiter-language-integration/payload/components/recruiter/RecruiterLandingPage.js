import styles from "./RecruiterLandingPage.module.css";

const ui = {
  en: {
    application: "APPLICATION",
    roleSnapshot: "ROLE SNAPSHOT",
    checked: "CHECKED",
    workModel: "Work model",
    location: "Location",
    language: "Language",
    compensation: "Compensation",
    resumePdf: "Tailored résumé — PDF",
    resumeDocx: "DOCX",
    rolePosting: "Role posting ↗",
    whyRoleKicker: "01 / WHY THIS ROLE",
    whyCompany: (company) => `Why ${company}`,
    requirementKicker: "02 / REQUIREMENT MAP",
    requirementTitle: "What you need. What I can prove.",
    requirement: "Requirement",
    status: "Status",
    evidence: "Evidence",
    proofKicker: "03 / SELECTED PROOF",
    proofTitle: "Projects I would discuss in your interview.",
    evidenceBadge: "Evidence",
    liveProduct: "Live product ↗",
    publicRepo: "Public repository ↗",
    approachKicker: "04 / ENGINEERING APPROACH",
    approachTitle: "How I would enter the problem.",
    interviewKicker: "05 / INTERVIEW",
    interviewTitle: "Questions I would ask you.",
    transparency: "TRANSPARENCY NOTE",
    nextKicker: "06 / NEXT STEP",
    nextTitle: "Everything needed for a first technical conversation.",
    downloadResume: "Download tailored résumé",
    applicationPdf: "Application note — PDF",
    applicationDocx: "Application note — DOCX",
  },
  de: {
    application: "BEWERBUNG",
    roleSnapshot: "STELLENPROFIL",
    checked: "GEPRÜFT",
    workModel: "Arbeitsmodell",
    location: "Standort",
    language: "Sprache",
    compensation: "Vergütung",
    resumePdf: "Passender Lebenslauf — PDF",
    resumeDocx: "DOCX",
    rolePosting: "Stellenanzeige ↗",
    whyRoleKicker: "01 / WARUM DIESE STELLE",
    whyCompany: (company) => `Warum ${company}`,
    requirementKicker: "02 / ANFORDERUNGEN",
    requirementTitle: "Anforderungen und konkrete Nachweise.",
    requirement: "Anforderung",
    status: "Einordnung",
    evidence: "Nachweis",
    proofKicker: "03 / AUSGEWÄHLTE PROJEKTE",
    proofTitle: "Projekte, über die ich im Interview sprechen würde.",
    evidenceBadge: "Nachweis",
    liveProduct: "Live-Anwendung ↗",
    publicRepo: "Öffentliches Repository ↗",
    approachKicker: "04 / VORGEHENSWEISE",
    approachTitle: "So würde ich an das Problem herangehen.",
    interviewKicker: "05 / INTERVIEW",
    interviewTitle: "Fragen, die ich euch stellen würde.",
    transparency: "TRANSPARENZHINWEIS",
    nextKicker: "06 / NÄCHSTER SCHRITT",
    nextTitle: "Alles für ein erstes technisches Gespräch.",
    downloadResume: "Passenden Lebenslauf herunterladen",
    applicationPdf: "Bewerbungsnotiz — PDF",
    applicationDocx: "Bewerbungsnotiz — DOCX",
  },
};

function statusTone(status = "") {
  const normalized = status.toLowerCase();
  const positive = [
    "strong", "meets", "relevant evidence",
    "starker", "anforderung erfüllt", "relevanter nachweis", "sehr relevant"
  ];
  const gap = [
    "gap", "not claimed", "ramp-up",
    "lücke", "nicht behauptet", "einarbeitungsbereich", "formale lücke"
  ];

  if (positive.some((token) => normalized.includes(token))) return styles.statusGood;
  if (gap.some((token) => normalized.includes(token))) return styles.statusGap;
  return styles.statusNeutral;
}

function ProjectEvidence({ project, labels }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectTopline}>
        <p>{project.category}</p>
        <span>{labels.evidenceBadge}</span>
      </div>

      <h3>{project.title}</h3>
      <p className={styles.projectSummary}>{project.summary}</p>

      <div className={styles.stackList} aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <ul className={styles.evidenceList}>
        {project.evidence.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.projectLinks}>
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            {labels.liveProduct}
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            {labels.publicRepo}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function RecruiterLandingPage({ target, projects, profile }) {
  const locale = target.locale === "de" ? "de" : "en";
  const labels = ui[locale];
  const emailSubject = encodeURIComponent(
    locale === "de" ? `Bewerbung — ${target.role}` : `Application — ${target.role}`
  );
  const tel = profile.phone.replace(/\s+/g, "");

  return (
    <div className={styles.page} lang={locale}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Return to Ryan Nyberg portfolio">
          <span>RYAN</span>
          <span>/</span>
          <span>NYBERG</span>
        </a>

        <div className={styles.headerMeta}>
          <span>{profile.location}</span>
          <span className={styles.languageBadge}>{locale.toUpperCase()}</span>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              {labels.application} / {target.company}
            </p>
            <h1>{target.role}</h1>
            <p className={styles.heroLead}>{target.pitch}</p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href={target.resumePdf}>
                {labels.resumePdf}
              </a>
              <a className={styles.secondaryButton} href={target.resumeDocx}>
                {labels.resumeDocx}
              </a>
              <a
                className={styles.textLink}
                href={target.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {labels.rolePosting}
              </a>
            </div>
          </div>

          <aside className={styles.snapshot} aria-label={labels.roleSnapshot}>
            <div className={styles.snapshotHeader}>
              <span>{labels.roleSnapshot}</span>
              <span>{labels.checked} {target.checked.toUpperCase()}</span>
            </div>
            <dl>
              <div>
                <dt>{labels.workModel}</dt>
                <dd>{target.workModel}</dd>
              </div>
              <div>
                <dt>{labels.location}</dt>
                <dd>{target.location}</dd>
              </div>
              <div>
                <dt>{labels.language}</dt>
                <dd>{target.languageRequirement}</dd>
              </div>
              <div>
                <dt>{labels.compensation}</dt>
                <dd>{target.compensation}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className={styles.signalBand} aria-label="Key requirements">
          {target.roleSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p>{labels.whyRoleKicker}</p>
            <h2>{labels.whyCompany(target.company)}</h2>
          </div>
          <p className={styles.sectionLead}>{target.whyCompany}</p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p>{labels.requirementKicker}</p>
            <h2>{labels.requirementTitle}</h2>
          </div>

          <div className={styles.matchTable}>
            <div className={`${styles.matchRow} ${styles.matchHeader}`} aria-hidden="true">
              <span>{labels.requirement}</span>
              <span>{labels.status}</span>
              <span>{labels.evidence}</span>
            </div>

            {target.match.map((item) => (
              <div className={styles.matchRow} key={`${item.requirement}-${item.status}`}>
                <div className={styles.requirement}>
                  <span className={styles.mobileLabel}>{labels.requirement}</span>
                  {item.requirement}
                </div>
                <div>
                  <span className={styles.mobileLabel}>{labels.status}</span>
                  <span className={`${styles.status} ${statusTone(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <div className={styles.matchEvidence}>
                  <span className={styles.mobileLabel}>{labels.evidence}</span>
                  {item.evidence}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p>{labels.proofKicker}</p>
            <h2>{labels.proofTitle}</h2>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <ProjectEvidence
                project={project}
                labels={labels}
                key={project.slug}
              />
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.twoColumn}`}>
          <div>
            <div className={styles.sectionHeading}>
              <p>{labels.approachKicker}</p>
              <h2>{labels.approachTitle}</h2>
            </div>
            <ol className={styles.numberedList}>
              {target.approach.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className={styles.sectionHeading}>
              <p>{labels.interviewKicker}</p>
              <h2>{labels.interviewTitle}</h2>
            </div>
            <ol className={styles.questionList}>
              {target.questions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.transparency}>
          <p>{labels.transparency}</p>
          <blockquote>{target.note}</blockquote>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p>{labels.nextKicker}</p>
            <h2>{labels.nextTitle}</h2>
          </div>

          <div className={styles.finalActions}>
            <a className={styles.primaryButton} href={target.resumePdf}>
              {labels.downloadResume}
            </a>
            <a className={styles.secondaryButton} href={target.applicationPdf}>
              {labels.applicationPdf}
            </a>
            <a className={styles.secondaryButton} href={target.applicationDocx}>
              {labels.applicationDocx}
            </a>
            <a
              className={styles.textLink}
              href={`mailto:${profile.email}?subject=${emailSubject}`}
            >
              {profile.email}
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="/">anewshade.de</a>
        <span>{profile.name}</span>
        <a href={`tel:${tel}`}>{profile.phone}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </footer>
    </div>
  );
}
