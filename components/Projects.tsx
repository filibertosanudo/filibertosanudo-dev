import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary, ProjectEntry } from "@/lib/i18n/dictionary";
import { projectLinks } from "@/lib/projects";

type Labels = Dictionary["projectsSection"];

function Field({ label, children, strong = false }: { label: string; children: string; strong?: boolean }) {
  return (
    <div>
      <p className="mb-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-navy">{label}</p>
      <p
        className={`text-[14.5px] leading-[1.55] text-pretty ${strong ? "font-medium text-ink" : "text-ink-muted"}`}
      >
        {children}
      </p>
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-ash bg-bg-subtle px-[10px] py-[5px] font-mono text-xs font-medium text-ink-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

/** A full system: screenshot, the case, what to try, and its links. */
function FeaturedCard({ project, labels, lang, readCase }: { project: ProjectEntry; labels: Labels; lang: Locale; readCase: string }) {
  const featured = project.featured!;
  const links = projectLinks[featured.slug];

  return (
    <article className="flex flex-col overflow-hidden rounded-[14px] border border-ash bg-white transition hover:-translate-y-[3px] hover:border-navy">
      {links && (
        <div className="relative aspect-[16/10] border-b border-ash bg-bg-subtle">
          <Image
            src={links.image}
            alt={featured.imageAlt}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-[30px_28px]">
        <span className="font-mono text-xs font-medium text-ink-muted">{project.index}</span>
        <h3 className="mt-[14px] text-[23px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink text-balance">
          {project.name}
        </h3>
        <p className="mt-[6px] text-[14.5px] leading-[1.55] text-ink-muted">{featured.tagline}</p>

        <div className="mt-[22px] flex flex-1 flex-col gap-4">
          <Field label={labels.problemLabel}>{project.problem}</Field>
          <Field label={labels.decisionsLabel}>{project.decisions}</Field>
          <Field label={labels.resultLabel} strong>
            {project.result}
          </Field>
          <div className="rounded-[10px] border border-cream-border bg-cream px-4 py-[14px]">
            <p className="mb-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-cream-muted">
              {labels.tryItLabel}
            </p>
            <p className="text-[14.5px] leading-[1.55] text-ink text-pretty">{featured.tryIt}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-ash pt-5">
          <Stack items={project.stack} />
        </div>

        {links && (
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/proyectos/${featured.slug}`}
              className="inline-flex items-center justify-center rounded-[10px] bg-ink px-5 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-navy"
            >
              {readCase}
            </Link>
            {/* Only once the public demo is online: lib/projects.ts. */}
            {links.demoUrl && (
              <a
                href={links.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-navy px-5 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-navy-hover"
              >
                {labels.demoLabel}
              </a>
            )}
            <a
              href={links.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] border border-ash px-5 py-3 text-[15px] font-semibold text-ink transition hover:border-ink hover:bg-bg-subtle"
            >
              {labels.codeLabel}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function CompactCard({ project, labels }: { project: ProjectEntry; labels: Labels }) {
  return (
    <article className="flex flex-col rounded-[14px] border border-ash bg-white p-[30px_28px] transition hover:-translate-y-[3px] hover:border-navy">
      <span className="font-mono text-xs font-medium text-ink-muted">{project.index}</span>
      <h3 className="mt-[14px] text-[21px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink text-balance">
        {project.name}
      </h3>
      <div className="mt-[22px] flex flex-1 flex-col gap-4">
        <Field label={labels.problemLabel}>{project.problem}</Field>
        <Field label={labels.decisionsLabel}>{project.decisions}</Field>
        <Field label={labels.resultLabel} strong>
          {project.result}
        </Field>
      </div>
      <div className="mt-6 border-t border-ash pt-5">
        <Stack items={project.stack} />
      </div>
    </article>
  );
}

export default function Projects({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { projectsSection, projects, caseStudyLabels } = dict;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      className="border-t border-ash bg-bg-subtle px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[104px]"
    >
      <div className="mx-auto max-w-[1160px]">
        <p className="mb-3 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-ink-muted">
          {projectsSection.eyebrow}
        </p>
        <h2 className="mb-12 text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.15] lg:leading-[1.1] tracking-[-0.025em] text-ink">
          {projectsSection.title}
        </h2>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6">
            {featured.map((p) => (
              <FeaturedCard key={p.index} project={p} labels={projectsSection} lang={lang} readCase={caseStudyLabels.readCase} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <h3 className="mb-6 mt-16 text-[20px] font-semibold tracking-[-0.015em] text-ink">
                {projectsSection.moreTitle}
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-6">
              {rest.map((p) => (
                <CompactCard key={p.index} project={p} labels={projectsSection} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
