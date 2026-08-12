export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  period: string;
  tag: string;
  summary: string;
  summaryEn: string;
  techStack: string[];
  highlights: Highlight[];
}

export interface Highlight {
  title: string;
  content: string;
}

export interface Experience {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  period: string;
  content: string;
  contentEn: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  nameEn: string;
  items: string[];
}

export interface Award {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Article {
  title: string;
  description: string;
  url: string;
  platform: string;
  platformIcon: string;
  tags: string[];
  date: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'email' | 'csdn' | 'link';
  value: string;
}

export interface SiteData {
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  school: string;
  schoolEn: string;
  major: string;
  majorEn: string;
  intro: string[];
  introEn: string[];
  projects: Project[];
  experiences: Experience[];
  skills: SkillCategory[];
  awards: Award[];
  socials: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    author: string;
  };
}
