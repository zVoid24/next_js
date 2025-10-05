import type { JSX } from "react";
import { HeaderSection } from "../../sections/header-section";
import { ServiceHeroSection } from "../../sections/service-hero-section";
import { ServiceDescriptionSection } from "../../sections/service-description-section";
import { ServicePricingSection } from "../../sections/service-pricing-section";
import { ServiceContactSection } from "../../sections/service-contact-section";
import { FooterSection } from "../../sections/footer-section";

const sectionRenderers: Record<string, (props: { data: any }) => JSX.Element> = {
  header: HeaderSection,
  serviceHero: ServiceHeroSection,
  serviceDescription: ServiceDescriptionSection,
  servicePricing: ServicePricingSection,
  serviceContact: ServiceContactSection,
  footer: FooterSection,
};

export default function ServiceDetail({ initialData }: { initialData: any }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {initialData?.pages?.["service-detail"]?.sections?.map((section: any) => {
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
