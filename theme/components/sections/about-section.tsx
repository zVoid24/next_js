export type AboutSectionData = {
  id?: string;
  title: string;
  description: string;
  highlights: Array<{
    title: string;
    description: string;
  }>;
  imageSrc: string;
  imageAlt: string;
};

export function AboutSection({ data }: { data: AboutSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-muted/20 py-16 text-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
          <img src={data.imageSrc} alt={data.imageAlt} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          <dl className="mt-8 space-y-6">
            {data.highlights.map((highlight, index) => (
              <div key={`${highlight.title}-${index}`} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <dt className="text-lg font-semibold text-foreground">{highlight.title}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{highlight.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
