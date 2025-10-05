export type ServiceContactSectionData = {
  id?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  supportDetails: Array<{
    label: string;
    value: string;
    href?: string;
  }>;
};

export function ServiceContactSection({ data }: { data: ServiceContactSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
        <p className="mt-4 text-base text-primary-foreground/80">{data.description}</p>
        <a
          href={data.ctaHref}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
        >
          {data.ctaLabel}
        </a>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {data.supportDetails.map((detail) => (
            <div key={detail.label} className="rounded-2xl border border-primary-foreground/20 bg-primary/20 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">{detail.label}</div>
              <div className="mt-2 text-sm font-semibold text-primary-foreground">
                {detail.href ? (
                  <a href={detail.href} className="transition-colors hover:text-primary-foreground/70">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
