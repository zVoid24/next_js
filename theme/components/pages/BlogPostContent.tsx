import type { JSX } from "react";
import { HeaderSection } from "../sections/header-section";
import { BlogArticleSection } from "../sections/blog-article-section";
import { BlogTeaserSection } from "../sections/blog-teaser-section";
import { ContactSection } from "../sections/contact-section";
import { FooterSection } from "../sections/footer-section";

const sectionRenderers: Record<string, (props: { data: any }) => JSX.Element> = {
  header: HeaderSection,
  blogArticle: BlogArticleSection,
  blogTeaser: BlogTeaserSection,
  contact: ContactSection,
  footer: FooterSection,
};

export default function BlogPostContent({ initialData }: { initialData: any }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {initialData?.pages?.["blog-post"]?.sections?.map((section: any) => {
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
