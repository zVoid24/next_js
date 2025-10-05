export type TeamSectionData = {
  id?: string;
  title: string;
  description?: string;
  members: Array<{
    name: string;
    role: string;
    bio?: string;
    imageSrc?: string;
    imageAlt?: string;
    socialLinks?: Array<{
      label: string;
      href: string;
    }>;
  }>;
};

export function TeamSection({ data }: { data: TeamSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-muted/20 py-20 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.title}</h2>
          {data.description && (
            <p className="mt-4 text-base text-muted-foreground">{data.description}</p>
          )}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.members.map((member) => (
            <div key={member.name} className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-sm">
              {member.imageSrc && member.imageAlt && (
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  className="h-40 w-full rounded-2xl object-cover"
                />
              )}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
              </div>
              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-primary">
                  {member.socialLinks.map((link) => (
                    <a key={link.href} href={link.href} className="transition-colors hover:text-primary/70">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
