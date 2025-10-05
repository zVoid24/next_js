import { HeaderSection } from "../sections/header-section";
import { BlogListSection } from "../sections/blog-list-section";
import { FooterSection } from "../sections/footer-section";

const sectionRenderers: Record<string, (props: { data: any }) => JSX.Element> = {
  header: HeaderSection,
  blogList: BlogListSection,
  footer: FooterSection,
};

export default function BlogIndexContent({ initialData }: { initialData: any }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {initialData?.pages?.["blog-index"]?.sections?.map((section: any) => {
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
