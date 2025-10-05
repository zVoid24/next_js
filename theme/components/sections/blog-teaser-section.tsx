export type BlogTeaserSectionData = {
  id?: string;
  title: string;
  description?: string;
  viewAllLabel: string;
  viewAllHref: string;
  posts: Array<{
    title: string;
    excerpt: string;
    href: string;
    author: string;
    publishDate: string;
    ctaLabel: string;
    imageSrc?: string;
    imageAlt?: string;
  }>;
};

export function BlogTeaserSection({ data }: { data: BlogTeaserSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-muted/10 py-20 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
            {data.description && (
              <p className="mt-2 text-base text-muted-foreground">{data.description}</p>
            )}
          </div>
          <a href={data.viewAllHref} className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
            {data.viewAllLabel}
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {data.posts.map((post) => (
            <article key={post.href} className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-sm">
              {post.imageSrc && post.imageAlt && (
                <img src={post.imageSrc} alt={post.imageAlt} className="h-40 w-full rounded-2xl object-cover" />
              )}
              <div className="mt-4 flex-1">
                <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{post.author}</span> · {post.publishDate}
              </div>
              <a
                href={post.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {post.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
