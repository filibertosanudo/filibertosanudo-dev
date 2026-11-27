import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { CaseSection, CaseStudy as CaseStudyContent, Dictionary } from "@/lib/i18n/dictionary";
import type { ProjectLinks } from "@/lib/projects";
import { profile } from "@/lib/profile";

function Screen({ slug, image }: { slug: string; image: NonNullable<CaseSection["image"]> }) {
  const src = `/projects/${slug}/${image.file}`;

  if (image.phone) {
    return (
      <figure className="mx-auto w-full max-w-[300px]">
        <div className="rounded-[34px] border border-ash bg-ink p-[10px] shadow-[0_30px_60px_-30px_rgba(35,44,59,0.45)]">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[26px] bg-white">
            <Image src={src} alt={image.alt} fill sizes="280px" className="object-cover object-top" />
          </div>
        </div>
        <figcaption className="mt-3 text-center text-[13.5px] text-ink-muted">{image.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-ash bg-bg-subtle shadow-[0_30px_60px_-34px_rgba(35,44,59,0.4)]">
        <Image src={src} alt={image.alt} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover object-top" />
      </div>
      <figcaption className="mt-3 text-[13.5px] text-ink-muted">{image.caption}</figcaption>
    </figure>
  );
}

export default function CaseStudy({
  lang,
  slug,
  study,
  labels,
  projectsLabels,
  links,
  stack,
}: {
  lang: Locale;
  slug: string;
  study: CaseStudyContent;
  labels: Dictionary["caseStudyLabels"];
  projectsLabels: Dictionary["projectsSection"];
  links: ProjectLinks;
  stack: string[];
}) {
  return (
    <div className="px-6 sm:px-10 lg:px-16 pt-8 lg:pt-10 pb-20">
      <header className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-3">
        <Link href={`/${lang}#proyectos`} className="group flex items-center gap-3">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-navy text-[16px] font-bold tracking-[-0.5px] text-white">
            {profile.initials}
          </span>
          <span className="font-mono text-[13px] font-medium text-ink-muted transition group-hover:text-ink">
            ← {labels.back}
          </span>
        </Link>
        <LanguageSwitcher lang={lang} path={`/proyectos/${slug}`} />
      </header>

      <main className="mx-auto max-w-[1160px]">
        <section className="pt-14 lg:pt-20">
          <p className="mb-4 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-ink-muted">{study.kicker}</p>
          <h1 className="max-w-[900px] text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-ink text-balance">
            {study.title}
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-[1.6] text-ink-muted text-pretty">{study.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.demoUrl && (
              <a
                href={links.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-navy px-5 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-navy-hover"
              >
                {projectsLabels.demoLabel}
              </a>
            )}
            <a
              href={links.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] border border-ash px-5 py-3 text-[15px] font-semibold text-ink transition hover:border-ink hover:bg-bg-subtle"
            >
              {projectsLabels.codeLabel}
            </a>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-ash bg-ash sm:grid-cols-2 lg:grid-cols-4">
            {study.facts.map((fact) => (
              <div key={fact.label} className="bg-white p-5">
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-navy">{fact.label}</dt>
                <dd className="mt-2 text-[14.5px] leading-[1.5] text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {study.sections.map((section, index) => {
            const text = (
              <div className="max-w-[520px]">
                <p className="font-mono text-xs font-medium text-ink-muted">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-[26px] sm:text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-ink text-balance">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[16.5px] leading-[1.65] text-ink-muted text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            );

            if (!section.image) return <section key={section.heading}>{text}</section>;

            // Phone shots sit beside their text; wide ones get the row, with
            // the text above, so a screen full of small type stays legible.
            return section.image.phone ? (
              <section key={section.heading} className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
                {text}
                <div className="lg:w-[300px]">
                  <Screen slug={slug} image={section.image} />
                </div>
              </section>
            ) : (
              <section key={section.heading} className="space-y-8">
                {text}
                <Screen slug={slug} image={section.image} />
              </section>
            );
          })}
        </div>

        <section className="mt-20 rounded-[14px] border border-ash bg-bg-subtle p-7 sm:p-10 lg:mt-28">
          <h2 className="text-[24px] sm:text-[28px] font-bold tracking-[-0.02em] text-ink">{study.engineeringTitle}</h2>
          <ul className="mt-6 grid gap-x-10 gap-y-4 lg:grid-cols-2">
            {study.engineering.map((line) => (
              <li key={line} className="flex gap-3 text-[15px] leading-[1.6] text-ink-muted text-pretty">
                <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-navy" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2 border-t border-ash pt-6">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ash bg-white px-[10px] py-[5px] font-mono text-xs font-medium text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <Link href={`/${lang}#proyectos`} className="font-mono text-[13px] font-medium text-ink-muted transition hover:text-ink">
            ← {labels.back}
          </Link>
          <a href={links.codeUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] font-medium text-navy hover:underline">
            {projectsLabels.codeLabel} →
          </a>
        </div>
      </main>
    </div>
  );
}
