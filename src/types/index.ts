export type ProjectCategory = "UI/UX Design" | "Frontend Development" | "Full Stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  coverImage: string;
  caseStudyLink: string;
  githubLink?: string;
  liveLink?: string;
  featured?: boolean;
  year?: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  images?: string[];
  bullets?: string[];
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  subtitle: string;
  coverImage: string;
  overview: string;
  role: string;
  timeline: string;
  tools: string[];
  sections: {
    problem: CaseStudySection;
    research: CaseStudySection;
    insights: CaseStudySection;
    personas: CaseStudySection;
    userJourney: CaseStudySection;
    competitiveAnalysis: CaseStudySection;
    wireframes: CaseStudySection;
    designDecisions: CaseStudySection;
    finalScreens: CaseStudySection;
    prototype: CaseStudySection;
    impact: CaseStudySection;
    learnings: CaseStudySection;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "Design Process" | "Case Studies" | "Learning Journey" | "Frontend Tips";
  author: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  slug: string;
  content: string;
  published: boolean;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
