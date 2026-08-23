export const PROJECT_SHEET_ID = "1y95UWwpNNwWkoivU2j3jt1q3JwBG-OCpxUjVfW-WV5w";
export const PROJECT_SHEET_GID = "1142127646";
const PROJECTS_API_URL = process.env.REACT_APP_PROJECTS_API_URL?.trim()
  || "https://script.google.com/macros/s/AKfycbxrq50_YqA2gwj_r-CIECvsVsFZVDeYq1vBfajUJHoaCUEHufunx1qsx2ptC9F__fHv/exec";

export interface SheetProjectLead {
  name: string;
  linkedin?: string;
}

export interface SheetProject {
  id: string;
  started: string;
  term: string;
  year: number;
  title: string;
  summary: string;
  leads: SheetProjectLead[];
  members: string[];
  partnership?: string;
  technologies: string[];
  themes: string[];
  result: string;
  resultUrl?: string;
  mediaUrl?: string;
}

interface GvizCell {
  v?: string | number | null;
  f?: string;
}

interface GvizResponse {
  status: string;
  errors?: Array<{ message?: string }>;
  table?: {
    cols: Array<{ label?: string }>;
    rows: Array<{ c: Array<GvizCell | null> }>;
  };
}

interface AppsScriptResponse {
  status: string;
  projects: Array<{
    started?: string;
    title?: string;
    summary?: string;
    leads?: SheetProjectLead[];
    members?: string[];
    partnership?: string;
    technologies?: string[];
    themes?: string[];
    result?: string;
    resultUrl?: string;
    mediaUrl?: string;
  }>;
}

let requestSequence = 0;

const clean = (value: unknown) =>
  String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const splitList = (value: string) => {
  const source = clean(value).replace(/\s+and\s+/gi, ", ");
  const items: string[] = [];
  let current = "";
  let parenthesesDepth = 0;

  for (const character of source) {
    if (character === "(") parenthesesDepth += 1;
    if (character === ")") parenthesesDepth = Math.max(0, parenthesesDepth - 1);

    if ((character === "," || character === "\n") && parenthesesDepth === 0) {
      if (clean(current)) items.push(clean(current));
      current = "";
    } else {
      current += character;
    }
  }

  if (clean(current)) items.push(clean(current));
  return items;
};

const normalizePartnership = (value: string) => {
  const normalized = clean(value);
  return /^(none|n\/a|-)?$/i.test(normalized) ? undefined : normalized;
};

const getTerm = (started: string) => {
  const normalized = clean(started);
  const year = Number(normalized.match(/\b(20\d{2})\b/)?.[1] || 0);
  const month = normalized.toLowerCase();
  const season = month.startsWith("jan")
    ? "Winter"
    : month.startsWith("may")
      ? "Spring"
      : month.startsWith("sep")
        ? "Fall"
        : normalized.replace(/\s*20\d{2}.*/, "");

  return { term: [season, year || ""].filter(Boolean).join(" "), year };
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const findUrl = (value: string) => value.match(/https?:\/\/[^\s,]+/i)?.[0];

const mapResponse = (response: GvizResponse): SheetProject[] => {
  if (response.status !== "ok" || !response.table) {
    throw new Error(response.errors?.[0]?.message || "Google Sheets returned an invalid response.");
  }

  const headers = response.table.cols.map((column) => clean(column.label).toLowerCase());
  const columnIndex = (...names: string[]) =>
    headers.findIndex((header) => names.some((name) => header === name || header.includes(name)));

  const indexes = {
    started: columnIndex("started"),
    title: columnIndex("project title"),
    summary: columnIndex("project summary"),
    leads: columnIndex("project leads"),
    members: columnIndex("project members"),
    partnership: columnIndex("partnership"),
    technology: columnIndex("technology"),
    theme: columnIndex("theme"),
    result: columnIndex("links and results"),
    media: columnIndex("demo media", "demo video", "demo image", "media"),
  };

  const cellValue = (cells: Array<GvizCell | null>, index: number) => {
    if (index < 0) return "";
    const cell = cells[index];
    return clean(cell?.f ?? cell?.v ?? "");
  };

  return response.table.rows
    .map((row) => {
      const started = cellValue(row.c, indexes.started);
      const title = cellValue(row.c, indexes.title);
      const summary = cellValue(row.c, indexes.summary);
      const result = cellValue(row.c, indexes.result);
      const mediaUrl = findUrl(cellValue(row.c, indexes.media));
      const { term, year } = getTerm(started);

      return {
        id: `${slugify(title)}-${slugify(term)}`,
        started,
        term,
        year,
        title,
        summary,
        leads: splitList(cellValue(row.c, indexes.leads)).map((name) => ({ name })),
        members: splitList(cellValue(row.c, indexes.members)),
        partnership: normalizePartnership(cellValue(row.c, indexes.partnership)),
        technologies: splitList(cellValue(row.c, indexes.technology)),
        themes: splitList(cellValue(row.c, indexes.theme)),
        result,
        resultUrl: findUrl(result),
        mediaUrl,
      };
    })
    .filter((project) => project.title && project.summary)
    .sort((a, b) => b.year - a.year || b.started.localeCompare(a.started));
};

const mapAppsScriptResponse = (response: AppsScriptResponse): SheetProject[] => {
  if (response.status !== "ok" || !Array.isArray(response.projects)) {
    throw new Error("The projects API returned an invalid response.");
  }

  return response.projects
    .map((project) => {
      const started = clean(project.started);
      const title = clean(project.title);
      const summary = clean(project.summary);
      const result = clean(project.result);
      const { term, year } = getTerm(started);
      return {
        id: `${slugify(title)}-${slugify(term)}`,
        started,
        term,
        year,
        title,
        summary,
        leads: (project.leads || []).map((lead) => ({ name: clean(lead.name), linkedin: clean(lead.linkedin) || undefined })).filter((lead) => lead.name),
        members: (project.members || []).map(clean).filter(Boolean),
        partnership: normalizePartnership(clean(project.partnership)),
        technologies: (project.technologies || []).map(clean).filter(Boolean),
        themes: (project.themes || []).map(clean).filter(Boolean),
        result,
        resultUrl: clean(project.resultUrl) || findUrl(result),
        mediaUrl: findUrl(clean(project.mediaUrl)),
      };
    })
    .filter((project) => project.title && project.summary)
    .sort((a, b) => b.year - a.year || b.started.localeCompare(a.started));
};

export const loadProjectsFromSheet = () =>
  new Promise<SheetProject[]>((resolve, reject) => {
    const callbackName = `__wataiProjectsCallback_${Date.now()}_${requestSequence++}`;
    const callbackHost = window as unknown as Record<string, ((response: GvizResponse | AppsScriptResponse) => void) | undefined>;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("The project sheet took too long to respond."));
    }, 12000);

    const cleanup = () => {
      window.clearTimeout(timeout);
      delete callbackHost[callbackName];
      script.remove();
    };

    callbackHost[callbackName] = (response) => {
      try {
        resolve("projects" in response ? mapAppsScriptResponse(response) : mapResponse(response));
      } catch (error) {
        reject(error);
      } finally {
        cleanup();
      }
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Unable to load projects from Google Sheets."));
    };

    if (PROJECTS_API_URL) {
      const separator = PROJECTS_API_URL.includes("?") ? "&" : "?";
      script.src = `${PROJECTS_API_URL}${separator}callback=${encodeURIComponent(callbackName)}`;
    } else {
      const query = new URLSearchParams({
        gid: PROJECT_SHEET_GID,
        tqx: `responseHandler:${callbackName}`,
        headers: "1",
      });
      script.src = `https://docs.google.com/spreadsheets/d/${PROJECT_SHEET_ID}/gviz/tq?${query}`;
    }
    document.head.appendChild(script);
  });
