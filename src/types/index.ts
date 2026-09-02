export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
  project: string;
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  badgeColor?: 'sky' | 'bubblegum' | 'sprout' | 'orange';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Pro' | 'All Levels';
  duration: string;
  rollNo: string;
  techStack: string[];
  highlights: string[];
  price: string;
  originalPrice: string;
  featured?: boolean;
  modules: CourseModule[];
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular?: boolean;
  rollNo: string;
  features: {
    text: string;
    included: boolean;
  }[];
  ctaText: string;
  note?: string;
}

export interface StatItem {
  value: string;
  label: string;
  annotation?: string;
}

export interface CaseStudy {
  id: string;
  studentName: string;
  role: string;
  company: string;
  agentName: string;
  metric: string;
  metricLabel: string;
  description: string;
  tech: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  highlightWord: string;
  cohort: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
