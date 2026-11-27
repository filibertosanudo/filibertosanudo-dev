import type { Dictionary } from "@/lib/i18n/dictionary";
import { profile } from "@/lib/profile";

export default function About({ dict }: { dict: Dictionary }) {
  const { aboutSection, skillGroups } = dict;

  return (
    <section
      id="sobre-mi"
      className="border-t border-ash bg-white px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[104px]"
    >
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-10 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-ink-muted">
          {aboutSection.eyebrow}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-start gap-10 lg:gap-[72px]">
          <div>
            <p className="text-2xl font-normal leading-[1.55] text-ink text-pretty">
              {aboutSection.paragraphs[0]}
            </p>
            <p className="mt-[26px] text-lg font-normal leading-[1.6] text-ink-muted text-pretty">
              {aboutSection.paragraphs[1]}
            </p>
            <a
              href={profile.cvHref}
              download
              className="mt-[38px] inline-flex items-center gap-[10px] rounded-[10px] border border-ash px-5 py-[14px] text-base font-semibold text-ink transition hover:border-ink hover:bg-bg-subtle"
            >
              {aboutSection.cvLabel}
              <span className="font-mono text-[15px]">&darr;</span>
            </a>
          </div>
          <div className="flex flex-col gap-[26px]">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.03em] text-ink">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-ash bg-bg-subtle px-[11px] py-[6px] font-mono text-[12.5px] font-medium text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
