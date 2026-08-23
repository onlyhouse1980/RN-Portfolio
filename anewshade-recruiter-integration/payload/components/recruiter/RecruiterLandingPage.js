import styles from "./RecruiterLandingPage.module.css";

function statusTone(status = "") {
  const normalized = status.toLowerCase();

  if (
    normalized.includes("strong") ||
    normalized.includes("meets") ||
    normalized.includes("relevant evidence")
  ) {
    return styles.statusGood;
  }

  if (
    normalized.includes("gap") ||
    normalized.includes("not claimed") ||
    normalized.includes("ramp-up")
  ) {
    return styles.statusGap;
  }

  return styles.statusNeutral;
}

function ProjectEvidence({ project }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectTopline}>
        <p>{project.category}</p>
        <span>Evidence</span>
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
            Live product ↗
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Public repository ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function RecruiterLandingPage({ target, projects, profile }) {
  const emailSubject = encodeURIComponent(`Application — ${target.role}`);
  const tel = profile.phone.replace(/\s+/g, "");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Return to Ryan Nyberg portfolio">
          <span>RYAN</span>
          <span>/</span>
          <span>NYBERG</span>
        </a>

        <div className={styles.headerMeta}>
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>APPLICATION / {target.company}</p>
            <h1>{target.role}</h1>
            <p className={styles.heroLead}>{target.pitch}</p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href={target.resumePdf}>
                Tailored résumé — PDF
              </a>
              <a className={styles.secondaryButton} href={target.resumeDocx}>
                DOCX
              </a>
              <a
                className={styles.textLink}
                href={target.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Role posting ↗
              </a>
            </div>
          </div>

          <aside className={styles.snapshot} aria-label="Role snapshot">
            <div className={styles.snapshotHeader}>
              <span>ROLE SNAPSHOT</span>
              <span>CHECKED {target.checked.toUpperCase()}</span>
            </div>
            <dl>
              <div>
                <dt>Work model</dt>
                <dd>{target.workModel}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{target.location}</dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>{target.language}</dd>
              </div>
              <div>
                <dt>Compensation</dt>
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
            <p>01 / WHY THIS ROLE</p>
            <h2>Why {target.company}</h2>
          </div>
          <p className={styles.sectionLead}>{target.whyCompany}</p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p>02 / REQUIREMENT MAP</p>
            <h2>What you need. What I can prove.</h2>
          </div>

          <div className={styles.matchTable}>
            <div className={`${styles.matchRow} ${styles.matchHeader}`} aria-hidden="true">
              <span>Requirement</span>
              <span>Status</span>
              <span>Evidence</span>
            </div>

            {target.match.map((item) => (
              <div className={styles.matchRow} key={`${item.requirement}-${item.status}`}>
                <div className={styles.requirement}>
                  <span className={styles.mobileLabel}>Requirement</span>
                  {item.requirement}
                </div>
                <div>
                  <span className={styles.mobileLabel}>Status</span>
                  <span className={`${styles.status} ${statusTone(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <div className={styles.matchEvidence}>
                  <span className={styles.mobileLabel}>Evidence</span>
                  {item.evidence}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p>03 / SELECTED PROOF</p>
            <h2>Projects I would discuss in your interview.</h2>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <ProjectEvidence project={project} key={project.slug} />
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.twoColumn}`}>
          <div>
            <div className={styles.sectionHeading}>
              <p>04 / ENGINEERING APPROACH</p>
              <h2>How I would enter the problem.</h2>
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
              <p>05 / INTERVIEW</p>
              <h2>Questions I would ask you.</h2>
            </div>
            <ol className={styles.questionList}>
              {target.questions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.transparency}>
          <p>TRANSPARENCY NOTE</p>
          <blockquote>{target.note}</blockquote>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p>06 / NEXT STEP</p>
            <h2>Everything needed for a first technical conversation.</h2>
          </div>

          <div className={styles.finalActions}>
            <a className={styles.primaryButton} href={target.resumePdf}>
              Download tailored résumé
            </a>
            <a className={styles.secondaryButton} href={target.applicationPdf}>
              Application note — PDF
            </a>
            <a className={styles.secondaryButton} href={target.applicationDocx}>
              Application note — DOCX
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
