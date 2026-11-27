import type { Dictionary } from "@/lib/i18n/dictionary";

export default function Experience({ dict }: { dict: Dictionary }) {
  const { experienceSection, experience } = dict;

  return (
    <section
      id="experiencia"
      className="border-t border-ash bg-bg-subtle px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[104px]"
    >
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-10 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-ink-muted">
          {experienceSection.eyebrow}
        </p>
        <div className="flex flex-col gap-7">
          {experience.map((job) => (
            <div
              key={job.role}
              className="grid grid-cols-1 sm:grid-cols-[220px_1fr] items-start gap-3 sm:gap-12"
            >
              <p className="mt-1 font-mono text-sm font-medium text-ink-muted">
                {job.period}
              </p>
              <div>
                <h3 className="text-[26px] font-semibold leading-none tracking-[-0.015em] text-ink">
                  {job.role}{" "}
                  <span className="font-medium text-ink-muted">
                    — {job.context}
                  </span>
                </h3>
                <p className="mt-[18px] max-w-[640px] text-[19px] leading-[1.6] text-ink-muted text-pretty">
                  {job.description}
                </p>
                <div className="mt-[22px] flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-ash bg-white px-[11px] py-[6px] font-mono text-[12.5px] font-medium text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
