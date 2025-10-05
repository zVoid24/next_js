export type BlogListSectionData = {
  id?: string;
  title: string;
  description?: string;
  posts: Array<{
    title: string;
    excerpt: string;
    href: string;
    author: string;
    publishDate: string;
    readingTime?: string;
  }>;
};

export function BlogListSection({ data }: { data: BlogListSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-background py-16 text-foreground">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{data.title}</h1>
          {data.description && (
            <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          )}
        </div>
        <div className="mt-12 space-y-10">
          {data.posts.map((post) => (
            <article key={post.href} className="rounded-3xl border border-border bg-muted/10 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-primary">{post.publishDate}</div>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                <a href={post.href} className="transition-colors hover:text-primary">
                  {post.title}
                </a>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{post.author}</span>
                {post.readingTime && <span>{post.readingTime}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
