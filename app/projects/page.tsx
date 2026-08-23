import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../lib/auth';
import { getProjects } from '../../lib/projects';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const metadata = {
  title: 'Projects Admin | Ryan Nyberg',
  robots: {
    index: false,
    follow: false,
  },
};

function tagsValue(tags) {
  return Array.isArray(tags) ? tags.join(', ') : '';
}

export default async function ProjectsAdminPage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/projects');
  }

  const projects = await getProjects();
  const params = await searchParams;
  const updated = params?.updated;
  const deleted = params?.deleted;
  const error = params?.error;

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.header}>
          <a href="/" className={styles.backLink}>Portfolio</a>
          <div>
            <p className={styles.kicker}>Project Admin</p>
            <h1>Projects</h1>
          </div>
          <div className={styles.headerActions}>
            <a href="/projects/input">Add project</a>
            <span>Signed in as {session.user?.name || 'admin'}</span>
          </div>
        </div>

        {updated && (
          <div className={styles.notice} role="status">
            Project {updated} was updated.
          </div>
        )}

        {deleted && (
          <div className={styles.notice} role="status">
            Project {deleted} was deleted.
          </div>
        )}

        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}

        <div className={styles.summary}>
          <span>{projects.length} projects in MongoDB</span>
          <span>Upload a replacement image only when changing the project screenshot.</span>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.num}>
              <div className={styles.projectTop}>
                <div className={styles.projectImage}>
                  <img
                    src={project.fallbackImage}
                    alt={`Screenshot for ${project.title.replace('\n', ' ')}`}
                    loading="lazy"
                  />
                </div>

                <div className={styles.projectMeta}>
                  <span>Project {project.num} / Year {project.year}</span>
                  <h2>{project.title.replace('\n', ' ')}</h2>
                  <p>{tagsValue(project.tags)}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit project
                  </a>
                </div>

                <form className={styles.deleteForm} action="/api/projects/manage" method="post">
                  <input type="hidden" name="projectAction" value="delete" />
                  <input type="hidden" name="num" value={project.num} />
                  <button type="submit">Delete</button>
                </form>
              </div>

              <details className={styles.editor}>
                <summary>Edit project</summary>

                <form action="/api/projects/manage" method="post" encType="multipart/form-data">
                  <input type="hidden" name="projectAction" value="update" />
                  <input type="hidden" name="originalNum" value={project.num} />
                  <input type="hidden" name="currentFallbackImage" value={project.fallbackImage} />

                  <div className={styles.grid}>
                    <label>
                      <span>Project number</span>
                      <input name="num" defaultValue={project.num} required />
                    </label>

                    <label>
                      <span>Year</span>
                      <input name="year" defaultValue={project.year} required />
                    </label>
                  </div>

                  <label>
                    <span>Title</span>
                    <textarea name="title" rows={2} defaultValue={project.title} required />
                  </label>

                  <label>
                    <span>Tags</span>
                    <input name="tags" defaultValue={tagsValue(project.tags)} required />
                  </label>

                  <label>
                    <span>Project URL</span>
                    <input name="link" type="url" defaultValue={project.link} required />
                  </label>

                  <div className={styles.grid}>
                    <label>
                      <span>Icon</span>
                      <input name="icon" defaultValue={project.icon || '🔗'} />
                    </label>

                    <label>
                      <span>Replacement image</span>
                      <input name="fallbackImageFile" type="file" accept="image/*" />
                    </label>
                  </div>

                  <label>
                    <span>Current image URL</span>
                    <input value={project.fallbackImage} readOnly />
                  </label>

                  <label>
                    <span>Description</span>
                    <textarea name="desc" rows={8} defaultValue={project.desc} required />
                  </label>

                  <div className={styles.grid}>
                    <label>
                      <span>Critic label</span>
                      <input name="criticLabel" defaultValue={project.criticLabel || ''} />
                    </label>

                    <label>
                      <span>Critic quote</span>
                      <input name="criticQuote" defaultValue={project.criticQuote || ''} />
                    </label>
                  </div>

                  <button className={styles.saveButton} type="submit">
                    Save changes
                  </button>
                </form>
              </details>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
