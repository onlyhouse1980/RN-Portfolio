import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../../lib/auth';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const metadata = {
  title: 'Project Input | Ryan Nyberg',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ProjectInputPage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/projects/input');
  }

  const params = await searchParams;
  const created = params?.created;
  const error = params?.error;

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.header}>
          <a href="/" className={styles.backLink}>Portfolio</a>
          <div>
            <p className={styles.kicker}>Project Admin</p>
            <h1>Add Project</h1>
          </div>
          <p className={styles.session}>Signed in as {session.user?.name || 'admin'}</p>
        </div>

        {created && (
          <div className={styles.notice} role="status">
            Project {created} was added to MongoDB.
          </div>
        )}

        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}

        <form className={styles.form} action="/api/projects" method="post" encType="multipart/form-data">
          <div className={styles.grid}>
            <label>
              <span>Project number</span>
              <input name="num" placeholder="18" />
            </label>

            <label>
              <span>Year</span>
              <input name="year" placeholder="2026" required />
            </label>
          </div>

          <label>
            <span>Title</span>
            <textarea name="title" rows={2} placeholder={'Project Name\nCategory'} required />
          </label>

          <label>
            <span>Tags</span>
            <input name="tags" placeholder="Next.js, MongoDB, AI" required />
          </label>

          <label>
            <span>Project URL</span>
            <input name="link" type="url" placeholder="https://example.com" required />
          </label>

          <div className={styles.grid}>
            <label>
              <span>Icon</span>
              <input name="icon" placeholder="🔗" />
            </label>

            <label>
              <span>Project image</span>
              <input name="fallbackImageFile" type="file" accept="image/*" required />
            </label>
          </div>

          <label>
            <span>Description</span>
            <textarea name="desc" rows={10} placeholder="Describe the project, stack, and outcome." required />
          </label>

          <div className={styles.grid}>
            <label>
              <span>Critic label</span>
              <input name="criticLabel" placeholder="Critic’s Quote" />
            </label>

            <label>
              <span>Critic quote</span>
              <input name="criticQuote" placeholder="Optional short quote" />
            </label>
          </div>

          <button className={styles.submit} type="submit">
            Add project
          </button>
        </form>
      </section>
    </main>
  );
}
