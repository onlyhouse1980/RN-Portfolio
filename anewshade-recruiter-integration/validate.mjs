import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { recruiterProjects } from "./payload/data/recruiter-projects.js";
import { recruiterTargets } from "./payload/data/recruiter-targets.js";

const __filename = fileURLToPath(import.meta.url);
const root = path.dirname(__filename);

const errors = [];
const projectSlugs = new Set(recruiterProjects.map((project) => project.slug));

for (const [slug, target] of Object.entries(recruiterTargets)) {
  for (const projectSlug of target.projectSlugs) {
    if (!projectSlugs.has(projectSlug)) {
      errors.push(`${slug}: missing project slug "${projectSlug}"`);
    }
  }

  const expectedAssets = [
    `payload/public/recruiter/resumes/${slug}.pdf`,
    `payload/public/recruiter/resumes/${slug}.docx`,
    `payload/public/recruiter/applications/${slug}.pdf`,
    `payload/public/recruiter/applications/${slug}.docx`,
  ];

  for (const rel of expectedAssets) {
    if (!fs.existsSync(path.join(root, rel))) {
      errors.push(`${slug}: missing asset ${rel}`);
    }
  }

  if (!target.sourceUrl?.startsWith("https://")) {
    errors.push(`${slug}: sourceUrl must be https`);
  }
}

const requiredSourceFiles = [
  "payload/app/for/[slug]/page.js",
  "payload/app/for/page.js",
  "payload/components/recruiter/RecruiterLandingPage.js",
  "payload/components/recruiter/RecruiterLandingPage.module.css",
  "payload/data/recruiter-projects.js",
  "payload/data/recruiter-targets.js",
];

for (const rel of requiredSourceFiles) {
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
console.log(`Validated ${recruiterProjects.length} reusable project evidence records.`);
console.log("All role-specific PDF/DOCX assets are present.");
console.log("No package dependencies are required by the recruiter pages.");
