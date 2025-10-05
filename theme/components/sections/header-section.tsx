import Link from "next/link";

export type HeaderSectionData = {
  id?: string;
  logoSrc: string;
  logoAlt: string;
  brandName: string;
  navigation: Array<{
    label: string;
    href: string;
  }>;
  ctaButtons: Array<{
    label: string;
    href: string;
    style?: "primary" | "secondary";
  }>;
};

export function HeaderSection({ data }: { data: HeaderSectionData }) {
  const sectionId = data.id ? `section-${data.id}` : undefined;

  return (
    <section
      id={sectionId}
      className="bg-background text-foreground border-b border-border"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <img src={data.logoSrc} alt={data.logoAlt} className="h-6 w-6 object-contain" />
          </span>
          <span className="text-lg font-semibold text-foreground">{data.brandName}</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {data.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {data.ctaButtons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className={
                button.style === "secondary"
                  ? "rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  : "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              }
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
