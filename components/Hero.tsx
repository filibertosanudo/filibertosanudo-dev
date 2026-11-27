import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { profile } from "@/lib/profile";

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero, stack } = dict;

  return (
    <div className="min-h-screen flex flex-col px-6 sm:px-10 lg:px-16 pt-8 lg:pt-10 pb-8">
      <header className="flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-navy text-[16px] font-bold tracking-[-0.5px] text-white">
            {profile.initials}
          </div>
          <span className="font-mono text-[13px] font-medium text-ink">
            {profile.handle}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-ash px-[13px] py-[7px] font-mono text-[12.5px] font-medium text-ink">
            <span className="h-2 w-2 rounded-full bg-navy shadow-[0_0_0_4px_rgba(27,54,123,0.12)]" />
            {profile.available ? hero.statusAvailable : hero.statusBusy}
          </div>
          <LanguageSwitcher lang={lang} />
        </div>
      </header>

      <main className="flex max-w-[920px] flex-1 flex-col justify-center py-10 lg:py-0">
        <p className="mb-[26px] font-mono text-sm font-medium tracking-[0.02em] text-ink-muted">
          {hero.eyebrow}
        </p>

        <h1 className="m-0 text-[42px] sm:text-[56px] md:text-[68px] lg:text-[78px] font-bold leading-[1.05] lg:leading-[1.02] tracking-[-0.03em] lg:tracking-[-0.035em] text-ink text-balance">
          {profile.name}
          <span className="text-navy">.</span>
        </h1>

        <p className="mt-[28px] max-w-[700px] text-lg sm:text-xl lg:text-[22px] font-normal leading-[1.5] text-ink-muted text-pretty">
          {hero.valueProp}
        </p>

        <div className="mt-[42px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-[10px] rounded-[10px] bg-navy px-[26px] py-[15px] text-base font-semibold text-white transition hover:-translate-y-px hover:bg-navy-hover"
          >
            {hero.ctaLabel}
            <span className="font-mono text-[15px]">&rarr;</span>
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center rounded-[10px] border border-ash px-5 py-[15px] text-base font-semibold text-ink transition hover:border-ink hover:bg-bg-subtle"
          >
            {hero.viewProjectsLabel}
          </a>
        </div>

        <div className="mt-[46px] flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-ash bg-bg-subtle px-[11px] py-[6px] font-mono text-[12.5px] font-medium text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>

      <footer className="flex flex-wrap gap-3 shrink-0 items-center justify-between border-t border-ash pt-6 font-mono text-[12.5px] text-ink-muted">
        <span>{hero.location}</span>
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 font-medium text-ink-muted"
        >
          {hero.scrollCta}
          <span className="inline-block animate-bob">&darr;</span>
        </a>
      </footer>
    </div>
  );
}
