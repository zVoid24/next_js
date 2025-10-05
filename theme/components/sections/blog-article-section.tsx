export type BlogArticleSectionData = {
  id?: string;
  title: string;
  author: string;
  publishDate: string;
  readingTime?: string;
  featuredImageSrc?: string;
  featuredImageAlt?: string;
  content: string;
};

export function BlogArticleSection({ data }: { data: BlogArticleSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-16 text-foreground">
      <div className="mx-auto max-w-3xl px-6">
        <header className="text-center">
          <p className="text-xs uppercase tracking-wide text-primary">{data.publishDate}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{data.title}</h1>
          <div className="mt-4 flex justify-center gap-3 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{data.author}</span>
            {data.readingTime && <span>{data.readingTime}</span>}
          </div>
        </header>
        {data.featuredImageSrc && data.featuredImageAlt && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-lg">
            <img src={data.featuredImageSrc} alt={data.featuredImageAlt} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="prose prose-lg mx-auto mt-10 max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </section>
  );
}
