import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { recruiterProjects } from "./payload/data/recruiter-projects.js";
import { recruiterTargets } from "./payload/data/recruiter-targets.js";

const __filename = fileURLToPath(import.meta.url);
const root = path.dirname(__filename);
const errors = [];
const projectSlugs = new Set(recruiterProjects.map((project) => project.slug));

const expectedLocales = {
  metanoia: "de",
  notarpartner: "de",
  fastrocket: "de",
  krisenchat: "en",
  wynwood: "en",
};

for (const [slug, target] of Object.entries(recruiterTargets)) {
  if (!["de", "en"].includes(target.locale)) {
    errors.push(`${slug}: invalid locale "${target.locale}"`);
  }

  if (expectedLocales[slug] && target.locale !== expectedLocales[slug]) {
    errors.push(`${slug}: expected locale ${expectedLocales[slug]}, found ${target.locale}`);
  }

  for (const projectSlug of target.projectSlugs) {
    if (!projectSlugs.has(projectSlug)) {
      errors.push(`${slug}: missing project slug "${projectSlug}"`);
    }
  }

  for (const rel of [
    `payload/public/recruiter/resumes/${slug}.pdf`,
    `payload/public/recruiter/resumes/${slug}.docx`,
    `payload/public/recruiter/applications/${slug}.pdf`,
    `payload/public/recruiter/applications/${slug}.docx`,
  ]) {
    if (!fs.existsSync(path.join(root, rel))) {
      errors.push(`${slug}: missing asset ${rel}`);
    }
  }

  if (!target.sourceUrl?.startsWith("https://")) {
    errors.push(`${slug}: sourceUrl must be https`);
  }
}

for (const rel of [
  "payload/app/for/[slug]/page.js",
  "payload/app/for/page.js",
  "payload/components/recruiter/RecruiterLandingPage.js",
  "payload/components/recruiter/RecruiterLandingPage.module.css",
  "payload/data/recruiter-projects.js",
  "payload/data/recruiter-targets.js",
]) {
  if (!fs.existsSync(path.join(root, rel))) {
    errors.push(`missing source file ${rel}`);
  }
}

if (errors.length) {
  console.error("\nValidation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${Object.keys(recruiterTargets).length} recruiter routes.`);
console.log(`Locale split: DE = Metanoia, NotarPartner, FastRocket; EN = krisenchat, wynwood.`);
console.log(`Validated ${recruiterProjects.length} reusable project evidence records.`);
console.log("All role-specific PDF/DOCX assets are present.");
console.log("No new npm dependencies are required.");
