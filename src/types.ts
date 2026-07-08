export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  learningOutcomes?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  status?: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage, e.g., 85
}

export interface SkillCategory {
  title: string;
  skills: string[] | Skill[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Name of Lucide icon
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description?: string;
  tags?: string[];
  points?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  status: "In Progress" | "Completed" | string;
  description: string;
  period?: string;
  skills?: string[];
  imageUrl?: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  avatarUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  type: "Work" | "Training" | "Academic" | string;
  summary?: string;
}

