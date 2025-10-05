export type ContactSectionData = {
  id?: string;
  title: string;
  description: string;
  contactMethods: Array<{
    label: string;
    value: string;
    href: string;
  }>;
  cardTitle: string;
  cardDescription: string;
  formCtaLabel?: string;
  formCtaHref?: string;
};

export function ContactSection({ data }: { data: ContactSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-20 text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          <dl className="mt-8 space-y-4">
            {data.contactMethods.map((method) => (
              <div key={method.label} className="flex flex-col rounded-2xl border border-border bg-muted/10 p-6 shadow-sm">
                <dt className="text-sm font-semibold text-muted-foreground">{method.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">
                  <a href={method.href} className="transition-colors hover:text-primary">
                    {method.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl border border-border bg-muted/10 p-10 shadow-sm">
          <div className="text-lg font-semibold text-foreground">{data.cardTitle}</div>
          <p className="mt-2 text-sm text-muted-foreground">{data.cardDescription}</p>
          {data.formCtaLabel && data.formCtaHref && (
            <a
              href={data.formCtaHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {data.formCtaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
