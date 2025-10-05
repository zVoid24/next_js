import { HeaderSection } from "../sections/header-section";
import { HeroSection } from "../sections/hero-section";
import { FeaturesSection } from "../sections/features-section";
import { ServicesSection } from "../sections/services-section";
import { ProcessSection } from "../sections/process-section";
import { PricingSection } from "../sections/pricing-section";
import { TestimonialsSection } from "../sections/testimonials-section";
import { BlogTeaserSection } from "../sections/blog-teaser-section";
import { ContactSection } from "../sections/contact-section";
import { FooterSection } from "../sections/footer-section";

const sectionRenderers: Record<string, (props: { data: any }) => JSX.Element> = {
  header: HeaderSection,
  hero: HeroSection,
  features: FeaturesSection,
  services: ServicesSection,
  process: ProcessSection,
  pricing: PricingSection,
  testimonials: TestimonialsSection,
  blogTeaser: BlogTeaserSection,
  contact: ContactSection,
  footer: FooterSection,
};

export default function HomeContent({ initialData }: { initialData: any }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {initialData?.pages?.home?.sections?.map((section: any) => {
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
