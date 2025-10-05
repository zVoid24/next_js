export type FeaturesSectionData = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: Array<{
    icon?: string;
    title: string;
    description: string;
  }>;
};

export function FeaturesSection({ data }: { data: FeaturesSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-16 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        {data.eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{data.eyebrow}</p>
        )}
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
            {data.description && (
              <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {data.items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-muted/10 p-6 shadow-sm"
              >
                {item.icon && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <img src={item.icon} alt={item.title} className="h-6 w-6" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
