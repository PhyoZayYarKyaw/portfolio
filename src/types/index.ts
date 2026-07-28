// =============================================
// Global Type Definitions
// =============================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
  icon: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export interface SoftSkill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  level: string;
  percent: number;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}
