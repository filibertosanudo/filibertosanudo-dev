import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { projectLinks } from "@/lib/projects";

const siteUrl = "https://filibertosanudo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...Object.keys(projectLinks).map((slug) => `/proyectos/${slug}`)];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
      },
    }))
  );
}
