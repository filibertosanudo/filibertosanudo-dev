import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const siteUrl = "https://filibertosanudo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])),
    },
  }));
}
