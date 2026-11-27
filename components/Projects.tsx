import type { Dictionary } from "@/lib/i18n/dictionary";

export default function Projects({ dict }: { dict: Dictionary }) {
  const { projectsSection, projects } = dict;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-6">
          {projects.map((p) => (
            <article
              key={p.index}
              className="flex flex-col rounded-[14px] border border-ash bg-white p-[30px_28px] transition hover:-translate-y-[3px] hover:border-navy"
            >
              <span className="font-mono text-xs font-medium text-ink-muted">
                {p.index}
              </span>
              <h3 className="mt-[14px] text-[21px] font-semibold leading-[1.25] tracking-[-0.015em] text-ink text-balance">
                {p.name}
              </h3>
              <div className="mt-[22px] flex flex-1 flex-col gap-4">
                <div>
                  <p className="mb-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-navy">
                    {projectsSection.problemLabel}
                  </p>
                  <p className="text-[14.5px] leading-[1.55] text-ink-muted text-pretty">
                    {p.problem}
                  </p>
                </div>
                <div>
                  <p className="mb-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-navy">
                    {projectsSection.decisionsLabel}
                  </p>
                  <p className="text-[14.5px] leading-[1.55] text-ink-muted text-pretty">
                    {p.decisions}
                  </p>
                </div>
                <div>
                  <p className="mb-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-navy">
                    {projectsSection.resultLabel}
                  </p>
                  <p className="text-[14.5px] font-medium leading-[1.55] text-ink text-pretty">
                    {p.result}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-ash pt-5">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-ash bg-bg-subtle px-[10px] py-[5px] font-mono text-xs font-medium text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
