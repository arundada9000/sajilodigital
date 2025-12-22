export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  client: string;
  duration: string;
  year: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export type Projects = Project[];

// Helper type for project categories
export type ProjectCategory =
  | "E-commerce"
  | "Mobile App"
  | "Web Application"
  | "Corporate Website"
  | "Landing Page"
  | "Dashboard"
  | "SaaS Platform"
  | "Portfolio"
  | "Blog"
  | "Other";

// Helper type for project status (if you want to add this feature later)
export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Maintenance"
  | "Archived";

// Extended project interface with optional fields for future use
export interface ExtendedProject extends Project {
  status?: ProjectStatus;
  tags?: string[];
  featured?: boolean;
  teamSize?: number;
  budget?: {
    min: number;
    max: number;
    currency: string;
  };
  challenges?: string[];
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
}
