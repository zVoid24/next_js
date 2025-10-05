export type ServiceHeroSectionData = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ServiceHeroSection({ data }: { data: ServiceHeroSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-muted/10 py-16 text-foreground">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div>
          {data.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{data.eyebrow}</p>
          )}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{data.title}</h1>
          <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          {data.ctaLabel && data.ctaHref && (
            <a
              href={data.ctaHref}
              className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {data.ctaLabel}
            </a>
          )}
        </div>
        {data.imageSrc && data.imageAlt && (
          <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-lg">
            <img src={data.imageSrc} alt={data.imageAlt} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
