export type TestimonialsSectionData = {
  id?: string;
  title: string;
  description?: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role?: string;
    avatarSrc?: string;
    avatarAlt?: string;
  }>;
};

export function TestimonialsSection({ data }: { data: TestimonialsSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-20 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          {data.description && (
            <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          )}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.testimonials.map((testimonial, index) => (
            <figure
              key={`${testimonial.author}-${index}`}
              className="flex h-full flex-col justify-between rounded-3xl border border-border bg-muted/10 p-8 shadow-sm"
            >
              <blockquote className="text-base text-muted-foreground">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                {testimonial.avatarSrc && testimonial.avatarAlt && (
                  <img
                    src={testimonial.avatarSrc}
                    alt={testimonial.avatarAlt}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="text-sm font-semibold text-foreground">{testimonial.author}</div>
                  {testimonial.role && (
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
