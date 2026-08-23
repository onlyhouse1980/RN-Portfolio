# Adding a new `/for/*` company page

The recruiter system uses a single dynamic route:

```text
app/for/[slug]/page.js
```

You normally never edit the route.

## Step 1 — choose a slug

Example:

```text
heritaxa
```

That becomes:

```text
https://anewshade.de/for/heritaxa
```

Use lowercase letters and hyphens only.

## Step 2 — add the target

Edit:

```text
data/recruiter-targets.js
```

Add:

```js
heritaxa: {
  company: "Heritaxa GmbH",
  role: "...",
  shortRole: "...",
  sourceUrl: "...",
  checked: "23 Aug 2026",
  workModel: "...",
  location: "...",
  language: "...",
  compensation: "...",
  pitch: "...",
  whyCompany: "...",
  roleSignals: [
    "Next.js",
    "React",
    "PostgreSQL"
  ],
  match: [
    {
      requirement: "Next.js",
      status: "Strong evidence",
      evidence: "..."
    }
  ],
  projectSlugs: [
    "obcg",
    "adminpilot",
    "erechnungfix"
  ],
  approach: [
    "..."
  ],
  questions: [
    "..."
  ],
  note: "...",
  resumePdf: "/recruiter/resumes/heritaxa.pdf",
  resumeDocx: "/recruiter/resumes/heritaxa.docx",
  applicationPdf: "/recruiter/applications/heritaxa.pdf",
  applicationDocx: "/recruiter/applications/heritaxa.docx"
}
```

## Step 3 — use only relevant projects

Do not automatically use your three most visually impressive projects.

Use the three that answer the employer's actual requirements.

Examples:

### Legal / document workflow

- Kanzlei Intake Suite
- AdminPilot
- OBCG

### AI / SaaS startup

- AdminPilot
- Fine Truth
- LaunchPad

### TypeScript-heavy frontend/full stack

- ERechnungFix
- Fine Truth
- LaunchPad

### Operational business software

- OBCG
- AdminPilot
- LaunchPad

## Step 4 — add new project evidence if necessary

Edit:

```text
data/recruiter-projects.js
```

A project entry has:

```js
{
  slug: "...",
  title: "...",
  category: "...",
  stack: ["...", "..."],
  summary: "...",
  evidence: [
    "...",
    "..."
  ],
  liveUrl: "...",
  repoUrl: null
}
```

Use `repoUrl: null` if the repository is private.

## Step 5 — add the tailored files

```text
public/recruiter/resumes/heritaxa.pdf
public/recruiter/resumes/heritaxa.docx
public/recruiter/applications/heritaxa.pdf
public/recruiter/applications/heritaxa.docx
```

## Step 6 — build

```bash
npm run build
```

Because `generateStaticParams()` reads the target data, the new page will be generated automatically.

## Rule: never keyword-stuff the match table

Use:

- Strong evidence
- Relevant evidence
- Repository exposure
- Ramp-up area
- Credential gap
- Not claimed

The credibility of these pages comes from making the gaps as easy to inspect as the strengths.
