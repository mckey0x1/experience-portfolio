export interface Experience {
  id: string;
  property: string;
  propertyType: "business" | "heritage" | "resort";
  isFlagship: boolean;
  role: string;
  location: string;
  duration: string;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  overview: string;
  launchDate?: string;
  tools?: string[];
  metrics: Record<string, any> | null;
  initiatives?: Initiative[];
  guestFeedback?: number[];
  modules?: Record<string, Module>;
  team?: TeamMember[];
  imageUrl?: string;
  documentLinks?: string[];
}

export interface Initiative {
  name: string;
  result: string;
}

export interface Module {
  summary: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  lead: boolean;
}

export interface FilterState {
  propertyType: string;
  year: string;
  flagshipOnly: boolean;
  searchTerm: string;
}
