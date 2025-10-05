export type PricingSectionData = {
  id?: string;
  title: string;
  description: string;
  plans: Array<{
    name: string;
    price: string;
    billingNote?: string;
    features: Array<{
      value: string;
    }>;
    ctaLabel: string;
    ctaHref: string;
    highlighted?: boolean;
  }>;
};

export function PricingSection({ data }: { data: PricingSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-primary text-primary-foreground py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-primary-foreground/80">{data.description}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border border-primary-foreground/20 bg-primary/10 p-8 text-left shadow-lg ${
                plan.highlighted ? "ring-2 ring-primary-foreground" : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-4xl font-bold">{plan.price}</p>
                {plan.billingNote && (
                  <p className="mt-1 text-sm text-primary-foreground/70">{plan.billingNote}</p>
                )}
                <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
                  {plan.features.map((feature, index) => (
                    <li key={`${plan.name}-feature-${index}`} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                      <span>{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.ctaHref}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
