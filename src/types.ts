export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Web App' | 'Mobile App' | 'API' | 'Tool';
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  current?: boolean;
  type: 'academic' | 'professional'| 'learning';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
