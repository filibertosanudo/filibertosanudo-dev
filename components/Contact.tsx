import type { Dictionary } from "@/lib/i18n/dictionary";
import { profile } from "@/lib/profile";
import ContactForm from "./ContactForm";

export default function Contact({ dict }: { dict: Dictionary }) {
  const { contactSection } = dict;

  return (
    <section id="contacto" className="bg-cream px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[104px]">
      <div className="mx-auto max-w-[640px]">
        <p className="mb-6 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-ink-muted">
          {contactSection.eyebrow}
        </p>
        <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.1] lg:leading-[1.05] tracking-[-0.03em] text-ink text-balance">
          {contactSection.heading}
          <span className="text-navy">{contactSection.headingMark}</span>
        </h2>
        <p className="mt-5 text-lg sm:text-xl leading-[1.55] text-cream-muted text-pretty">
          {contactSection.subtitle}
        </p>

        <ContactForm form={contactSection.form} />

        <div className="mt-11 flex flex-wrap items-center justify-between gap-4 border-t border-cream-border pt-7">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[15px] font-medium text-navy"
          >
            {profile.email}
          </a>
          <div className="flex items-center gap-[10px]">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-cream-border px-[14px] py-[9px] font-mono text-[13px] font-medium text-ink transition hover:border-ink hover:bg-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
              {contactSection.githubLabel}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-cream-border px-[14px] py-[9px] font-mono text-[13px] font-medium text-ink transition hover:border-ink hover:bg-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
              </svg>
              {contactSection.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
