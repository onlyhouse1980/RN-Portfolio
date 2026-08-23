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

function describe(source, destination) {
  console.log(`${dryRun ? "[DRY RUN] " : ""}${path.relative(projectRoot, source)} -> ${path.relative(projectRoot, destination)}`);
}

function copyFile(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });

  if (exists(destination) && !force) {
    fail(
      `${path.relative(projectRoot, destination)} already exists. Re-run with --force only if you intentionally want to replace the recruiter integration.`
    );
  }

  describe(source, destination);
  if (!dryRun) fs.copyFileSync(source, destination);
}

function copyTree(source, destination) {
  if (!exists(source)) fail(`Missing package source: ${source}`);

  const stat = fs.statSync(source);
  if (stat.isFile()) {
    copyFile(source, destination);
    return;
  }

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const src = path.join(source, entry.name);
    const dst = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyTree(src, dst);
    } else {
      copyFile(src, dst);
    }
  }
}

console.log(`\nDetected App Router root: ${path.relative(projectRoot, codeRoot) || "."}`);
console.log(force ? "Overwrite mode: ON" : "Overwrite mode: OFF");
console.log("");

for (const [source, destination] of mappings) {
  copyTree(source, destination);
}

if (!dryRun) {
  console.log("\nRecruiter pages installed.");
  console.log("Next:");
  console.log("  1. npm run dev");
  console.log("  2. open /for/notarpartner (and the other target routes)");
  console.log("  3. npm run build");
} else {
  console.log("\nDry run complete. No files were changed.");
}
