export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  aboutText?: string;
  highlights?: string[];
  linkedinUrl?: string;
  whatsappUrl?: string;
  email?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
  external?: boolean;
}

export interface Client {
  name: string;
  category: string;
  logo: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
