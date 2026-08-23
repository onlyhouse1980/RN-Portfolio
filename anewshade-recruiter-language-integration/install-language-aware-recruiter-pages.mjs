import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const integrationRoot = path.dirname(__filename);
const projectRoot = process.cwd();
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const force = args.has("--force");

function exists(p) {
  return fs.existsSync(p);
}

function fail(message) {
  console.error(`\nERROR: ${message}\n`);
  process.exit(1);
}

if (!exists(path.join(projectRoot, "package.json"))) {
  fail("Run this command from the root of your portfolio project (the directory containing package.json).");
}

let codeRoot;
if (exists(path.join(projectRoot, "src", "app"))) {
  codeRoot = path.join(projectRoot, "src");
} else if (exists(path.join(projectRoot, "app"))) {
  codeRoot = projectRoot;
} else {
  fail("Could not find src/app or app. This integration expects a Next.js App Router project.");
}

const mappings = [
  [
    path.join(integrationRoot, "payload", "app", "for"),
    path.join(codeRoot, "app", "for"),
  ],
  [
    path.join(integrationRoot, "payload", "components", "recruiter"),
    path.join(codeRoot, "components", "recruiter"),
  ],
  [
    path.join(integrationRoot, "payload", "data", "recruiter-projects.js"),
    path.join(codeRoot, "data", "recruiter-projects.js"),
  ],
  [
    path.join(integrationRoot, "payload", "data", "recruiter-targets.js"),
    path.join(codeRoot, "data", "recruiter-targets.js"),
  ],
  [
    path.join(integrationRoot, "payload", "public", "recruiter"),
    path.join(projectRoot, "public", "recruiter"),
  ],
];

let hasExisting = false;

function scanExisting(source, destination) {
  const stat = fs.statSync(source);

  if (stat.isFile()) {
    if (exists(destination)) hasExisting = true;
    return;
  }

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const src = path.join(source, entry.name);
    const dst = path.join(destination, entry.name);
    scanExisting(src, dst);
  }
}

for (const [source, destination] of mappings) scanExisting(source, destination);

if (hasExisting && !force && !dryRun) {
  fail(
    "Recruiter integration files already exist. Re-run with --force to replace/update them. " +
    "Use --dry-run first to inspect the destinations."
  );
}

function describe(source, destination, replacing) {
  const action = replacing ? "UPDATE" : "ADD";
  console.log(
    `${dryRun ? "[DRY RUN] " : ""}${action}  ${path.relative(projectRoot, destination)}`
  );
}

function copyFile(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const replacing = exists(destination);
  describe(source, destination, replacing);
  if (!dryRun) fs.copyFileSync(source, destination);
}

function copyTree(source, destination) {
  const stat = fs.statSync(source);

  if (stat.isFile()) {
    copyFile(source, destination);
    return;
  }

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const src = path.join(source, entry.name);
    const dst = path.join(destination, entry.name);

    if (entry.isDirectory()) copyTree(src, dst);
    else copyFile(src, dst);
  }
}

console.log(`\nDetected App Router root: ${path.relative(projectRoot, codeRoot) || "."}`);
console.log(`Language-aware recruiter pages: DE = Metanoia, NotarPartner, FastRocket; EN = krisenchat, wynwood`);
console.log(force ? "Existing recruiter files will be updated." : "Existing recruiter files will not be overwritten without --force.");
console.log("");

for (const [source, destination] of mappings) {
  copyTree(source, destination);
}

if (!dryRun) {
  console.log("\nLanguage-aware recruiter pages installed/updated.");
  console.log("Next:");
  console.log("  1. npm run dev");
  console.log("  2. test /for/metanoia, /for/notarpartner, /for/fastrocket");
  console.log("  3. test /for/krisenchat and /for/wynwood");
  console.log("  4. npm run build");
} else {
  console.log("\nDry run complete. No files were changed.");
  if (hasExisting) {
    console.log("Existing recruiter files were detected. Use --force when you are ready to update them.");
  }
}
