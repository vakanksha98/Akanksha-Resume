export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  score: string;
  location?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  tech: string;
  date: string;
  points: string[];
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  status: string;
  contact: ContactInfo;
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  coursework: string[];
}