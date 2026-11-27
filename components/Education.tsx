import type { Dictionary } from "@/lib/i18n/dictionary";

export default function Education({ dict }: { dict: Dictionary }) {
  const { educationSection, education } = dict;

  return (
    <section
      id="formacion"
      className="border-t border-ash bg-white px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[104px]"
    >
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-10 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-ink-muted">
          {educationSection.eyebrow}
        </p>
        <div className="flex flex-col">
          {education.map((entry, i) => (
            <div
              key={entry.title}
              className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] items-start gap-3 sm:gap-12 ${
                i === 0 ? "pb-7" : "border-t border-ash pt-7"
              }`}
            >
              <p className="mt-1 font-mono text-sm font-medium text-ink-muted">
                {entry.period}
              </p>
              <div>
                <h3 className="text-[23px] font-semibold leading-none tracking-[-0.015em] text-ink">
                  {entry.title}
                </h3>
                <p className="mt-[10px] text-base font-normal text-ink-muted">
                  {entry.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
