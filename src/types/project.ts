export interface ProjectLead {
  name: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  started: string;
  term: string;
  year: number;
  title: string;
  summary: string;
  leads: ProjectLead[];
  members: string[];
  partnership?: string;
  technologies: string[];
  themes: string[];
  result: string;
  resultUrl?: string;
  mediaUrl?: string;
}
