import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { locales } from "@/lib/i18n/config";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionary";
import { projectLinks } from "@/lib/projects";

type Params = Promise<{ lang: string; slug: string }>;

// Only the case studies that exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => Object.keys(projectLinks).map((slug) => ({ lang, slug })));
}

async function load(params: Params) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const study = dict.caseStudies[slug];
  const links = projectLinks[slug];
  const project = dict.projects.find((p) => p.featured?.slug === slug);
  if (!study || !links || !project) notFound();
  return { lang, slug, dict, study, links, project };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug, dict, study, links } = await load(params);
  const title = `${study.title} — ${dict.caseStudyLabels.metaSuffix}`;
  return {
    title,
    description: study.summary,
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/proyectos/${slug}`])),
    },
    openGraph: {
      title,
      description: study.summary,
      url: `/${lang}/proyectos/${slug}`,
      images: [{ url: links.image }],
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { lang, slug, dict, study, links, project } = await load(params);
  return (
    <CaseStudy
      lang={lang}
      slug={slug}
      study={study}
      labels={dict.caseStudyLabels}
      projectsLabels={dict.projectsSection}
      links={links}
      stack={project.stack}
    />
  );
}
