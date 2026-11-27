import "server-only";
import { defaultLocale, locales, type Locale } from "./config";

export type ProjectEntry = {
  index: string;
  name: string;
  problem: string;
  decisions: string;
  result: string;
  stack: string[];
  /**
   * A full system with a screenshot and links (lib/projects.ts). Shown first,
   * as a large card; the rest stay in the compact grid.
   */
  featured?: {
    slug: string;
    tagline: string;
    imageAlt: string;
    /** One line: what to do in the demo to see the point of it. */
    tryIt: string;
  };
};

export type ExperienceEntry = {
  period: string;
  role: string;
  context: string;
  description: string;
  stack: string[];
};

export type EducationEntry = {
  period: string;
  title: string;
  institution: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    valueProp: string;
    ctaLabel: string;
    viewProjectsLabel: string;
    statusAvailable: string;
    statusBusy: string;
    location: string;
    scrollCta: string;
  };
  stack: string[];
  projectsSection: {
    eyebrow: string;
    title: string;
    problemLabel: string;
    decisionsLabel: string;
    resultLabel: string;
    tryItLabel: string;
    demoLabel: string;
    codeLabel: string;
    moreTitle: string;
  };
  projects: ProjectEntry[];
  aboutSection: {
    eyebrow: string;
    paragraphs: [string, string];
    cvLabel: string;
  };
  skillGroups: SkillGroup[];
  experienceSection: {
    eyebrow: string;
  };
  experience: ExperienceEntry[];
  educationSection: {
    eyebrow: string;
  };
  education: EducationEntry[];
  contactSection: {
    eyebrow: string;
    heading: string;
    headingMark: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      sendingLabel: string;
      successMessage: string;
      errors: {
        validation: string;
        notConfigured: string;
        sendFailed: string;
        generic: string;
      };
    };
    githubLabel: string;
    linkedinLabel: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const getDictionary = async (locale: string): Promise<Dictionary> =>
  dictionaries[hasLocale(locale) ? locale : defaultLocale]();
