export type FooterSectionData = {
  id?: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  navigationGroups: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  contactInfo: Array<{
    label: string;
    value: string;
    href?: string;
  }>;
  copyright: string;
};

export function FooterSection({ data }: { data: FooterSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section id={sectionId} className="bg-foreground text-foreground">
      <footer className="mx-auto max-w-6xl px-6 py-16 text-background">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10">
                <img src={data.logoSrc} alt={data.logoAlt} className="h-7 w-7 object-contain" />
              </span>
              <p className="text-lg font-semibold text-background">{data.description}</p>
            </div>
            <ul className="space-y-2 text-sm text-background/70">
              {data.contactInfo.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-background">
                      <span className="font-semibold text-background">{item.label}:</span> {item.value}
                    </a>
                  ) : (
                    <span>
                      <span className="font-semibold text-background">{item.label}:</span> {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.navigationGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-background/70">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-background/70">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition-colors hover:text-background">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-background/10 pt-6 text-xs text-background/60">{data.copyright}</div>
      </footer>
    </section>
  );
}
