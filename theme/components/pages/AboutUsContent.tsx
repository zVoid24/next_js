import type { JSX } from "react";
import { HeaderSection } from "../sections/header-section";
import { HeroSection } from "../sections/hero-section";
import { AboutSection } from "../sections/about-section";
import { TeamSection } from "../sections/team-section";
import { ContactSection } from "../sections/contact-section";
import { FooterSection } from "../sections/footer-section";

const sectionRenderers: Record<string, (props: { data: any }) => JSX.Element> = {
  header: HeaderSection,
  aboutUsHero: HeroSection,
  about: AboutSection,
  team: TeamSection,
  contact: ContactSection,
  footer: FooterSection,
};

export default function AboutUsContent({ initialData }: { initialData: any }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {initialData?.pages?.["about-us"]?.sections?.map((section: any) => {
        if (!section.enabled) {
          return null;
        }

        const Renderer = sectionRenderers[section.type];
        if (!Renderer) {
          return null;
        }

        return <Renderer key={section.id} data={{ id: section.id, ...section.data }} />;
      })}
    </main>
  );
}
