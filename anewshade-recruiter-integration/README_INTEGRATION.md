# anewshade.de Recruiter Page Integration

This package is designed to **add** recruiter-facing `/for/*` pages to your existing portfolio without replacing the current homepage or changing its design system.

It adds only:

- `app/for/[slug]/page.js`
- `app/for/page.js`
- `components/recruiter/*`
- `data/recruiter-projects.js`
- `data/recruiter-targets.js`
- `public/recruiter/*`

The page styles are isolated in a CSS Module. They do **not** modify `globals.css`.

## Resulting URLs

After deployment:

- https://anewshade.de/for/metanoia
- https://anewshade.de/for/notarpartner
- https://anewshade.de/for/krisenchat
- https://anewshade.de/for/wynwood
- https://anewshade.de/for/fastrocket

The `/for` index itself redirects back to the main portfolio.

Each recruiter page is `noindex, follow`, so it is designed to be shared directly rather than placed in the public navigation.

---

## Recommended installation

### 1. Put this folder inside your portfolio repository

Your repository should temporarily look like:

```text
your-portfolio/
  package.json
  app/ or src/app/
  public/
  anewshade-recruiter-integration/
```

### 2. Make a branch first

```bash
git checkout -b recruiter-pages
```

### 3. Preview what will be copied

```bash
node anewshade-recruiter-integration/install-recruiter-pages.mjs --dry-run
```

The installer automatically detects whether the project uses:

```text
app/
```

or:

```text
src/app/
```

### 4. Install

```bash
node anewshade-recruiter-integration/install-recruiter-pages.mjs
```

It refuses to overwrite an existing recruiter integration unless you explicitly use `--force`.

### 5. Validate the integration package

```bash
node anewshade-recruiter-integration/validate.mjs
```

### 6. Start your existing site

```bash
npm run dev
```

Open:

```text
http://localhost:3000/for/notarpartner
http://localhost:3000/for/metanoia
http://localhost:3000/for/krisenchat
http://localhost:3000/for/wynwood
http://localhost:3000/for/fastrocket
```

Check desktop and mobile widths.

### 7. Run the production build

```bash
npm run build
```

Do not deploy until the production build succeeds.

### 8. Commit

```bash
git add .
git commit -m "Add role-specific recruiter pages"
git push -u origin recruiter-pages
```

Then merge/deploy using your normal workflow.

---

# Manual installation

If you do not want to use the installer, copy the files manually.

If your project uses `src/app`:

```text
payload/app/for/                     -> src/app/for/
payload/components/recruiter/        -> src/components/recruiter/
payload/data/recruiter-projects.js   -> src/data/recruiter-projects.js
payload/data/recruiter-targets.js    -> src/data/recruiter-targets.js
payload/public/recruiter/            -> public/recruiter/
```

If your project uses a root `app` directory:

```text
payload/app/for/                     -> app/for/
payload/components/recruiter/        -> components/recruiter/
payload/data/recruiter-projects.js   -> data/recruiter-projects.js
payload/data/recruiter-targets.js    -> data/recruiter-targets.js
payload/public/recruiter/            -> public/recruiter/
```

The route imports are relative, so the same source files work in either layout.

---

# Why this is safe to merge

The recruiter page does not depend on:

- Tailwind
- shadcn
- a third-party component library
- your existing Navbar component
- your existing project-card data model
- changes to `layout.js`
- changes to `globals.css`

It uses standard Next.js App Router APIs and one scoped CSS Module.

The CSS intentionally starts with:

```css
--rp-bg: var(--background, #0b0b0b);
--rp-fg: var(--foreground, #f5f5f2);
```

If your current portfolio defines `--background` and `--foreground`, the recruiter pages automatically pick them up. Otherwise they use a neutral dark editorial fallback.

---

# Do not put `/for/*` in your main navigation

These are application landing pages, not normal portfolio sections.

Use them only in:

- a targeted application email
- a LinkedIn message to the hiring team
- a cover/application note
- a recruiter follow-up

Example:

> I prepared a short role-specific evidence page so you can evaluate the relevant project work without searching through my entire portfolio: https://anewshade.de/for/notarpartner

---

# Adding another company later

You do **not** create another route.

The route is dynamic:

```text
app/for/[slug]/page.js
```

To add a company:

1. Add another object to `data/recruiter-targets.js`.
2. Select project slugs from `data/recruiter-projects.js`.
3. Put the tailored files in:
   - `public/recruiter/resumes/<slug>.pdf`
   - `public/recruiter/resumes/<slug>.docx`
   - `public/recruiter/applications/<slug>.pdf`
   - `public/recruiter/applications/<slug>.docx`
4. Deploy.

The new URL is automatically:

```text
https://anewshade.de/for/<slug>
```

See `docs/ADDING_NEW_COMPANY.md`.

---

# Current portfolio cleanup

I did **not** automatically modify the existing homepage.

Before using the portfolio heavily in applications, review `docs/HOMEPAGE_CLEANUP.md`. It covers:

- Berlin vs. Dresden location
- future-dated project labels
- wording around "10+ years"
- replacing "100% on-time delivery" with a technical proof point

Those changes should be made deliberately in the real current source, not guessed by an installer.
