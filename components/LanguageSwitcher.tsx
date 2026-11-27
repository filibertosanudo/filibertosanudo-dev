"use client";

import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

/** `path` keeps the visitor on the same page in the other language (e.g. "/proyectos/marea"). */
export default function LanguageSwitcher({ lang, path = "" }: { lang: Locale; path?: string }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 rounded-full border border-ash p-1 font-mono text-[12px] font-medium"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${path}`}
          onClick={() => {
            document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
          }}
          aria-current={locale === lang ? "page" : undefined}
          className={`rounded-full px-[10px] py-[4px] transition ${
            locale === lang ? "bg-navy text-white" : "text-ink-muted hover:text-ink"
          }`}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}
