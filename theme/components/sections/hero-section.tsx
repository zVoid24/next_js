export type HeroSectionData = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  imageSrc: string;
  imageAlt: string;
  partnerLogos?: Array<{
    src: string;
    alt: string;
  }>;
};

export function HeroSection({ data }: { data: HeroSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {data.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{data.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={data.primaryCtaHref}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              {data.primaryCtaLabel}
            </a>
            {data.secondaryCtaLabel && data.secondaryCtaHref && (
              <a
                href={data.secondaryCtaHref}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {data.secondaryCtaLabel}
              </a>
            )}
          </div>
          {data.stats.length > 0 && (
            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border p-6 shadow-sm">
                  <dt className="text-sm font-semibold text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-bold text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-muted/20 p-4 shadow-lg">
            <img
              src={data.imageSrc}
              alt={data.imageAlt}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          {data.partnerLogos && data.partnerLogos.length > 0 && (
            <div className="flex items-center justify-around gap-6 rounded-2xl border border-dashed border-border px-6 py-4">
              {data.partnerLogos.map((logo) => (
                <img key={logo.src} src={logo.src} alt={logo.alt} className="h-8 w-auto opacity-70" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
