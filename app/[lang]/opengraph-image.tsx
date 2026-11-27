import { ImageResponse } from "next/og";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionary";
import { profile } from "@/lib/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(hasLocale(lang) ? lang : "es");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFFFF",
          color: "#232C3B",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#1B367B",
            color: "#FFFFFF",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#57646C" }}>
          {dict.hero.eyebrow}
        </div>
      </div>
    ),
    { ...size },
  );
}
