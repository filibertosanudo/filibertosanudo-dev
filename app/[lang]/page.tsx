import { notFound } from "next/navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getDictionary, hasLocale } from "@/lib/i18n/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <Projects dict={dict} lang={lang} />
      <About dict={dict} />
      <Experience dict={dict} />
      <Education dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
