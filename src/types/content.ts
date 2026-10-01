export type MetricViz =
{kind: 'dots';count: number;caption: string;} |
{kind: 'grid';count: number;caption: string;} |
{kind: 'compare';baseline: string;result: string;resultValue: number;caption: string;} |
{kind: 'reduce';before: string;after: string;afterValue: number;caption: string;} |
{kind: 'ring';value: number;caption: string;} |
{kind: 'multiply';factor: number;caption: string;};

export interface Stat {
  /** Animated visual shown with the metric in the Impact section */
  viz?: MetricViz;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Renders a range like "92–96" that counts up together */
  rangeStart?: number;
  /** Static text instead of a counting number (e.g. "AWS") */
  text?: string;
  label: string;
  context?: string;
  featured?: boolean;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface Trait {
  title: string;
  body: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  highlight: string;
  pipeline?: string[];
  metric: {display: string;label: string;};
  tags: string[];
  image: string;
  imageAlt: string;
  /** Omit when the repo isn't public */
  githubUrl?: string;
  /** Deployed, openable app (e.g. AWS endpoint) */
  liveUrl?: string;
  related?: {label: string;url: string;};
}

export interface SideProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export type ProcessIcon = 'train' | 'evaluate' | 'container' | 'deploy';

export interface ProcessStep {
  id: string;
  title: string;
  body: string;
  proof: string;
  icon: ProcessIcon;
}

export type SkillIcon = 'brain' | 'sparkles' | 'cloud' | 'server' | 'code';

export interface SkillCategory {
  name: string;
  note: string;
  icon: SkillIcon;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}