# Upgrading from the first recruiter integration

If you already installed the previous package, you do not need to remove it manually.

From your portfolio root:

```bash
node anewshade-recruiter-language-integration/install-language-aware-recruiter-pages.mjs --dry-run
```

Then:

```bash
node anewshade-recruiter-language-integration/install-language-aware-recruiter-pages.mjs --force
```

The updated files replace only the recruiter integration.

Then run:

```bash
npm run dev
```

Verify:

- `/for/metanoia` — German
- `/for/notarpartner` — German
- `/for/fastrocket` — German
- `/for/krisenchat` — English
- `/for/wynwood` — English

Finally:

```bash
npm run build
```

If the build succeeds, commit and deploy.

## What changed

- Added `locale` per target.
- German UI labels and German role-specific copy for German listings.
- English retained for English listings.
- Localized page title/description/Open Graph metadata.
- Added `lang="de"` or `lang="en"` to the recruiter-page wrapper.
- Added a small DE/EN language badge.
- Updated current vacancy source links where the listing URL changed.
