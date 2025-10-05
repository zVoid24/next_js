export type ServicesSectionData = {
  id?: string;
  title: string;
  description: string;
  services: Array<{
    name: string;
    summary: string;
    href: string;
    features: Array<{
      value: string;
    }>;
  }>;
  ctaLabel?: string;
};

export function ServicesSection({ data }: { data: ServicesSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-16 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.services.map((service) => (
            <div
              key={service.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-muted/10 p-6 shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, index) => (
                    <li key={`${service.name}-feature-${index}`} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={service.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {data.ctaLabel ?? "Learn more"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
