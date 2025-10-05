export type ServicePricingSectionData = {
  id?: string;
  title: string;
  description: string;
  tiers: Array<{
    name: string;
    price: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
  }>;
};

export function ServicePricingSection({ data }: { data: ServicePricingSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-muted/10 py-16 text-foreground">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.tiers.map((tier) => (
            <div key={tier.name} className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-sm">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-3xl font-bold text-foreground">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.ctaHref}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {tier.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
