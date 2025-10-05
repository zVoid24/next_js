export type ServiceDescriptionSectionData = {
  id?: string;
  title: string;
  overview: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
};

export function ServiceDescriptionSection({ data }: { data: ServiceDescriptionSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-16 text-foreground">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
        <p className="mt-4 text-base text-muted-foreground">{data.overview}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {data.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-border bg-muted/10 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
