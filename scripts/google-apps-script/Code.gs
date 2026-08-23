const SPREADSHEET_ID = "1y95UWwpNNwWkoivU2j3jt1q3JwBG-OCpxUjVfW-WV5w";
const PROJECTS_SHEET_NAME = "Projects for website";

function doGet(event) {
  const callback = sanitizeCallback_(event && event.parameter && event.parameter.callback);
  const payload = JSON.stringify({
    status: "ok",
    projects: readProjects_(),
    updatedAt: new Date().toISOString(),
  });

  if (callback) {
    return ContentService
      .createTextOutput(callback + "(" + payload + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}

function readProjects_() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(PROJECTS_SHEET_NAME);
  if (!sheet) throw new Error("Missing sheet: " + PROJECTS_SHEET_NAME);

  const range = sheet.getDataRange();
  const values = range.getDisplayValues();
  const richText = range.getRichTextValues();
  if (values.length < 2) return [];

  const headers = values[0].map(normalizeHeader_);
  const indexes = {
    started: findColumn_(headers, ["started"]),
    title: findColumn_(headers, ["project title"]),
    summary: findColumn_(headers, ["project summary"]),
    leads: findColumn_(headers, ["project leads"]),
    members: findColumn_(headers, ["project members"]),
    partnership: findColumn_(headers, ["partnerships", "partnership"]),
    technology: findColumn_(headers, ["technology"]),
    theme: findColumn_(headers, ["theme"]),
    result: findColumn_(headers, ["links and results"]),
    media: findColumn_(headers, ["demo media", "demo video", "demo image", "media"]),
  };

  return values.slice(1).map(function(row, rowOffset) {
    const summary = valueAt_(row, indexes.summary);
    const title = valueAt_(row, indexes.title);
    if (!title || !summary) return null;

    return {
      started: valueAt_(row, indexes.started),
      title: title,
      summary: summary,
      leads: extractLinkedPeople_(
        valueAt_(row, indexes.leads),
        richText[rowOffset + 1] && richText[rowOffset + 1][indexes.leads]
      ),
      members: splitList_(valueAt_(row, indexes.members)),
      partnership: normalizePartnership_(valueAt_(row, indexes.partnership)),
      technologies: splitList_(valueAt_(row, indexes.technology)),
      themes: splitList_(valueAt_(row, indexes.theme)),
      result: valueAt_(row, indexes.result),
      resultUrl: firstLink_(richText[rowOffset + 1] && richText[rowOffset + 1][indexes.result]),
      mediaUrl: firstLink_(richText[rowOffset + 1] && richText[rowOffset + 1][indexes.media]) || valueAt_(row, indexes.media),
    };
  }).filter(Boolean);
}

function extractLinkedPeople_(text, richValue) {
  const people = splitList_(text);
  const linkedRuns = richValue ? richValue.getRuns().map(function(run) {
    return { text: clean_(run.getText()), url: run.getLinkUrl() || "" };
  }).filter(function(run) { return run.url; }) : [];

  return people.map(function(name) {
    const match = linkedRuns.find(function(run) {
      return name.indexOf(run.text) !== -1 || run.text.indexOf(name) !== -1;
    });
    return { name: name, linkedin: match ? match.url : "" };
  });
}

function firstLink_(richValue) {
  if (!richValue) return "";
  const directLink = richValue.getLinkUrl();
  if (directLink) return directLink;
  const linkedRun = richValue.getRuns().find(function(run) { return run.getLinkUrl(); });
  return linkedRun ? linkedRun.getLinkUrl() : "";
}

function splitList_(value) {
  const source = clean_(value).replace(/\s+and\s+/gi, ", ");
  const items = [];
  let current = "";
  let depth = 0;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (character === "(") depth += 1;
    if (character === ")") depth = Math.max(0, depth - 1);
    if (character === "," && depth === 0) {
      if (clean_(current)) items.push(clean_(current));
      current = "";
    } else {
      current += character;
    }
  }

  if (clean_(current)) items.push(clean_(current));
  return items;
}

function findColumn_(headers, names) {
  return headers.findIndex(function(header) {
    return names.some(function(name) { return header === name || header.indexOf(name) !== -1; });
  });
}

function valueAt_(row, index) {
  return index >= 0 ? clean_(row[index]) : "";
}

function normalizeHeader_(value) {
  return clean_(value).toLowerCase();
}

function normalizePartnership_(value) {
  const normalized = clean_(value);
  return /^(none|n\/a|-)?$/i.test(normalized) ? "" : normalized;
}

function clean_(value) {
  return String(value || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function sanitizeCallback_(value) {
  const callback = String(value || "");
  return /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback) ? callback : "";
}
