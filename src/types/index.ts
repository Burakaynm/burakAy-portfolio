export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
};