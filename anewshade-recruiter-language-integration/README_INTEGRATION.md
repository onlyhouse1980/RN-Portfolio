# anewshade.de — Language-Aware Recruiter Page Integration

This is the revised recruiter integration for `anewshade.de`.

The recruiter page language now follows the **language used in the actual vacancy**:

| Route | Page language |
|---|---|
| `/for/metanoia` | German |
| `/for/notarpartner` | German |
| `/for/fastrocket` | German |
| `/for/krisenchat` | English |
| `/for/wynwood` | English |

Important: wynwood requires German for the engagement, but the current vacancy itself is written in English, so the recruiter page stays English.

The route, labels, metadata, section headings, match table, role-specific reasoning, engineering approach, interview questions and transparency note all use the configured target language.

No new npm packages are required.

---

# Installation / update

Unzip this folder into the root of your existing portfolio repository.

Temporary structure:

```text
your-portfolio/
  package.json
  app/ or src/app/
  public/
  anewshade-recruiter-language-integration/
```

## 1. Create a branch

```bash
git checkout -b recruiter-pages-language
```

## 2. Preview changes

```bash
node anewshade-recruiter-language-integration/install-language-aware-recruiter-pages.mjs --dry-run
```

The installer automatically detects `app/` vs `src/app/`.

If you previously installed the first recruiter package, the dry run will show those paths as `UPDATE`.

## 3. Install into a project that does not yet have recruiter pages

```bash
node anewshade-recruiter-language-integration/install-language-aware-recruiter-pages.mjs
```

## 4. Update/replace the previous recruiter integration

If you already installed the previous version, run:

```bash
node anewshade-recruiter-language-integration/install-language-aware-recruiter-pages.mjs --force
```

`--force` affects only the recruiter integration paths included in this package:

```text
app/for/
components/recruiter/
data/recruiter-projects.js
data/recruiter-targets.js
public/recruiter/
```

It does not modify your homepage, layout, global CSS, navbar or existing portfolio project components.

## 5. Validate

```bash
node anewshade-recruiter-language-integration/validate.mjs
```

Expected output includes:

```text
Locale split: DE = Metanoia, NotarPartner, FastRocket; EN = krisenchat, wynwood.
```

## 6. Run locally

```bash
npm run dev
```

Test:

```text
http://localhost:3000/for/metanoia
http://localhost:3000/for/notarpartner
http://localhost:3000/for/fastrocket
http://localhost:3000/for/krisenchat
http://localhost:3000/for/wynwood
```

Check that the first three render in German and the last two in English.

## 7. Production build

```bash
npm run build
```

Do not deploy until this succeeds in your local project.

## 8. Commit

```bash
git add .
git commit -m "Make recruiter pages vacancy-language aware"
git push -u origin recruiter-pages-language
```

---

# How the language system works

Each target in:

```text
data/recruiter-targets.js
```

contains:

```js
locale: "de"
```

or:

```js
locale: "en"
```

The shared component:

```text
components/recruiter/RecruiterLandingPage.js
```

contains the reusable interface labels for both languages.

The actual company copy lives inside the company target data and is written natively in that vacancy's language.

This avoids five duplicated page components.

---

# Adding a future vacancy

1. Read the actual vacancy.
2. Set `locale` to the language the vacancy itself uses.
3. Write the entire target-specific copy in that language.
4. Select the three most relevant portfolio projects.
5. Add the tailored resume/application assets.
6. Build and deploy.

Do not choose German simply because the employer is German. Match the language of the actual listing.

---

# No public navigation

The `/for/*` pages remain:

```js
robots: {
  index: false,
  follow: true
}
```

They should not be added to your normal portfolio navigation.

Send only the relevant company link directly to that employer.
