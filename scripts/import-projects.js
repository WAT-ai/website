#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_API_URL = "https://script.google.com/macros/s/AKfycbxrq50_YqA2gwj_r-CIECvsVsFZVDeYq1vBfajUJHoaCUEHufunx1qsx2ptC9F__fHv/exec";
const API_URL = String(process.env.PROJECTS_API_URL || DEFAULT_API_URL).trim();
const DATA_PATH = path.resolve(__dirname, "../src/data/projects.json");

const clean = (value) => String(value ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
const slugify = (value) => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const firstUrl = (value) => clean(value).match(/https?:\/\/[^\s,]+/i)?.[0];
const normalizeList = (value) => (Array.isArray(value) ? value : []).map(clean).filter(Boolean);

const getTerm = (started) => {
  const normalized = clean(started);
  const year = Number(normalized.match(/\b(20\d{2})\b/)?.[1] || 0);
  const lower = normalized.toLowerCase();
  const season = lower.startsWith("jan") ? "Winter" : lower.startsWith("may") ? "Summer" : lower.startsWith("sep") ? "Fall" : normalized.replace(/\s*20\d{2}.*/, "");
  return { term: [season, year || ""].filter(Boolean).join(" "), year };
};

const comparable = (value) => clean(value).toLowerCase();

const normalizeProject = (source) => {
  const started = clean(source.started);
  const title = clean(source.title);
  const summary = clean(source.summary);
  if (!title || !summary) throw new Error(`Every imported project needs a title and summary (received "${title || "untitled"}").`);

  const { term, year } = getTerm(started);
  const rawId = clean(source.projectId || source.id || "");
  const id = slugify(rawId);
  if (!rawId) throw new Error(`Project "${title}" is missing its permanent Project ID.`);
  if (id !== rawId) throw new Error(`Project ID "${rawId}" must contain only lowercase letters, numbers, and hyphens.`);

  const result = clean(source.result);
  return {
    id,
    started,
    term,
    year,
    title,
    summary,
    leads: (Array.isArray(source.leads) ? source.leads : []).map((lead) => ({
      name: clean(lead?.name),
      ...(clean(lead?.linkedin) ? { linkedin: clean(lead.linkedin) } : {}),
    })).filter((lead) => lead.name),
    members: normalizeList(source.members),
    ...(clean(source.partnership) ? { partnership: clean(source.partnership) } : {}),
    technologies: normalizeList(source.technologies),
    themes: normalizeList(source.themes),
    result,
    ...(clean(source.resultUrl) || firstUrl(result) ? { resultUrl: clean(source.resultUrl) || firstUrl(result) } : {}),
    ...(firstUrl(source.mediaUrl) ? { mediaUrl: firstUrl(source.mediaUrl) } : {}),
  };
};

const validateUniqueIds = (projects, label) => {
  const seen = new Set();
  for (const project of projects) {
    if (seen.has(project.id)) throw new Error(`Duplicate project ID "${project.id}" in ${label}.`);
    seen.add(project.id);
  }
};

async function main() {
  const existing = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  if (!Array.isArray(existing)) throw new Error("projects.json must contain an array.");
  validateUniqueIds(existing, "projects.json");

  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`Projects API returned HTTP ${response.status}.`);
  const payload = await response.json();
  if (payload.status !== "ok" || !Array.isArray(payload.projects)) throw new Error("Projects API returned an invalid response.");

  const incoming = payload.projects.map(normalizeProject);
  validateUniqueIds(incoming, "spreadsheet import");

  const representsSameProject = (left, right) => left.id === right.id || (
    comparable(left.title) === comparable(right.title)
    && comparable(left.started) === comparable(right.started)
  );
  const merged = existing.filter((project) => !incoming.some((candidate) => representsSameProject(project, candidate)));
  merged.push(...incoming);
  validateUniqueIds(merged, "merged projects");
  merged.sort((a, b) => (b.year || 0) - (a.year || 0) || clean(b.started).localeCompare(clean(a.started)) || a.title.localeCompare(b.title));

  const temporaryPath = `${DATA_PATH}.tmp`;
  fs.writeFileSync(temporaryPath, `${JSON.stringify(merged, null, 2)}\n`);
  fs.renameSync(temporaryPath, DATA_PATH);
  console.log(`Imported ${incoming.length} spreadsheet projects; projects.json now contains ${merged.length} projects.`);
  console.log("Review the git diff before committing.");
}

main().catch((error) => {
  console.error(`Project import failed: ${error.message}`);
  process.exitCode = 1;
});
