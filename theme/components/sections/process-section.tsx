export type ProcessSectionData = {
  id?: string;
  title: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  imageSrc?: string;
  imageAlt?: string;
};

export function ProcessSection({ data }: { data: ProcessSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-muted/10 py-16 text-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          <ol className="mt-8 space-y-6">
            {data.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                  {index + 1}
                </span>
                <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {data.imageSrc && data.imageAlt && (
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img src={data.imageSrc} alt={data.imageAlt} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
