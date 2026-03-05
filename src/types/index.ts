export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  profileImage: string;
  cvPDF: string;
  stats: Array<{ label: string; value: string | number }>;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI & Agentic' | 'Cloud & Infrastructure' | 'Cybersecurity' | 'Data Science';
  credentialId?: string;
  link?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Agentic AI' | 'Cybersecurity' | 'Full-Stack' | 'Data Science';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  isCurrent: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
