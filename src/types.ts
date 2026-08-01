export type PageRoute = 'home' | 'about' | 'solutions' | 'industries' | 'process' | 'contact';

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  techStack: string[];
  illustrationType: 'software' | 'app' | 'ai' | 'cloud' | 'blockchain' | 'design';
  metrics: { label: string; value: string }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  keyBenefits: string[];
  compliance: string[];
  caseStudyTitle: string;
  caseStudyStat: string;
}

export interface ProcessPhase {
  step: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  expertise: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  author: string;
  authorRole: string;
  content?: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
  metric: string;
}
