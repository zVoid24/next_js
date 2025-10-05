export const siteSchema = {
  _meta: { schemaVersion: 1 },
  sectionTypes: {
    header: {
      displayName: "Header",
      schema: {
        logoSrc: { type: "image", editable: true },
        logoAlt: { type: "string", editable: true, maxLength: 80 },
        brandName: { type: "string", editable: true, maxLength: 80 },
        navigation: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 40 },
            href: { type: "string", editable: true, maxLength: 120 },
          },
        },
        ctaButtons: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 30 },
            href: { type: "string", editable: true, maxLength: 120 },
            style: {
              type: "select",
              editable: true,
              options: [
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
              ],
            },
          },
        },
      },
      defaultData: {
        logoSrc: "/logo.svg",
        logoAlt: "Company logo",
        brandName: "Compass",
        navigation: [],
        ctaButtons: [],
      },
    },
    hero: {
      displayName: "Hero",
      schema: {
        eyebrow: { type: "string", editable: true, maxLength: 80 },
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 200 },
        primaryCtaLabel: { type: "string", editable: true, maxLength: 40 },
        primaryCtaHref: { type: "string", editable: true, maxLength: 120 },
        secondaryCtaLabel: { type: "string", editable: true, maxLength: 40 },
        secondaryCtaHref: { type: "string", editable: true, maxLength: 120 },
        stats: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 60 },
            value: { type: "string", editable: true, maxLength: 40 },
          },
        },
        imageSrc: { type: "image", editable: true },
        imageAlt: { type: "string", editable: true, maxLength: 120 },
        partnerLogos: {
          type: "array",
          itemSchema: {
            src: { type: "image", editable: true },
            alt: { type: "string", editable: true, maxLength: 80 },
          },
        },
      },
      defaultData: {
        eyebrow: "Streamlined accounting",
        title: "Accounting support tailored to your growth",
        description: "Modern bookkeeping, tax strategy, and advisory designed for ambitious teams.",
        primaryCtaLabel: "Schedule a call",
        primaryCtaHref: "/contact",
        secondaryCtaLabel: "See pricing",
        secondaryCtaHref: "/pricing",
        stats: [],
        imageSrc: "/images/hero.jpg",
        imageAlt: "Accounting team collaborating",
        partnerLogos: [],
      },
    },
    aboutUsHero: {
      displayName: "About Hero",
      schema: {
        eyebrow: { type: "string", editable: true, maxLength: 80 },
        title: { type: "string", editable: true, maxLength: 140 },
        description: { type: "string", editable: true, maxLength: 220 },
        primaryCtaLabel: { type: "string", editable: true, maxLength: 40 },
        primaryCtaHref: { type: "string", editable: true, maxLength: 120 },
        secondaryCtaLabel: { type: "string", editable: true, maxLength: 40 },
        secondaryCtaHref: { type: "string", editable: true, maxLength: 120 },
        stats: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 60 },
            value: { type: "string", editable: true, maxLength: 40 },
          },
        },
        imageSrc: { type: "image", editable: true },
        imageAlt: { type: "string", editable: true, maxLength: 120 },
        partnerLogos: {
          type: "array",
          itemSchema: {
            src: { type: "image", editable: true },
            alt: { type: "string", editable: true, maxLength: 80 },
          },
        },
      },
      defaultData: {
        eyebrow: "About",
        title: "Purpose-built for accounting leaders",
        description: "Share your origin story and impact with prospects and clients.",
        primaryCtaLabel: "Connect with us",
        primaryCtaHref: "/contact",
        secondaryCtaLabel: "Our services",
        secondaryCtaHref: "/services",
        stats: [],
        imageSrc: "/images/about-hero.jpg",
        imageAlt: "Team collaborating",
        partnerLogos: [],
      },
    },
    features: {
      displayName: "Features",
      schema: {
        eyebrow: { type: "string", editable: true, maxLength: 60 },
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        items: {
          type: "array",
          itemSchema: {
            icon: { type: "image", editable: true },
            title: { type: "string", editable: true, maxLength: 80 },
            description: { type: "string", editable: true, maxLength: 200 },
          },
        },
      },
      defaultData: {
        eyebrow: "Capabilities",
        title: "Streamlined solutions for every finance team",
        description: "Comprehensive services that scale with your business as it grows.",
        items: [],
      },
    },
    services: {
      displayName: "Services",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        ctaLabel: { type: "string", editable: true, maxLength: 40 },
        services: {
          type: "array",
          itemSchema: {
            name: { type: "string", editable: true, maxLength: 80 },
            summary: { type: "string", editable: true, maxLength: 200 },
            href: { type: "string", editable: true, maxLength: 120 },
            features: {
              type: "array",
              itemSchema: {
                value: { type: "string", editable: true, maxLength: 120 },
              },
            },
          },
        },
      },
      defaultData: {
        title: "Services tailored to your needs",
        description: "Choose the support level that fits your stage and industry.",
        ctaLabel: "Learn more",
        services: [],
      },
    },
    process: {
      displayName: "Process",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        steps: {
          type: "array",
          itemSchema: {
            title: { type: "string", editable: true, maxLength: 80 },
            description: { type: "string", editable: true, maxLength: 200 },
          },
        },
        imageSrc: { type: "image", editable: true },
        imageAlt: { type: "string", editable: true, maxLength: 120 },
      },
      defaultData: {
        title: "How we collaborate",
        description: "A proven onboarding approach that removes friction from your finance operations.",
        steps: [],
        imageSrc: "/images/process.jpg",
        imageAlt: "Team meeting",
      },
    },
    pricing: {
      displayName: "Pricing",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        plans: {
          type: "array",
          itemSchema: {
            name: { type: "string", editable: true, maxLength: 60 },
            price: { type: "string", editable: true, maxLength: 40 },
            billingNote: { type: "string", editable: true, maxLength: 80 },
            features: {
              type: "array",
              itemSchema: {
                value: { type: "string", editable: true, maxLength: 120 },
              },
            },
            ctaLabel: { type: "string", editable: true, maxLength: 40 },
            ctaHref: { type: "string", editable: true, maxLength: 120 },
            highlighted: { type: "boolean", editable: true },
          },
        },
      },
      defaultData: {
        title: "Flexible plans",
        description: "Transparent pricing aligned with your growth goals.",
        plans: [],
      },
    },
    testimonials: {
      displayName: "Testimonials",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        testimonials: {
          type: "array",
          itemSchema: {
            quote: { type: "string", editable: true, maxLength: 260 },
            author: { type: "string", editable: true, maxLength: 80 },
            role: { type: "string", editable: true, maxLength: 80 },
            avatarSrc: { type: "image", editable: true },
            avatarAlt: { type: "string", editable: true, maxLength: 80 },
          },
        },
      },
      defaultData: {
        title: "Clients love us",
        description: "Hear from the teams who trust Compass with their finances.",
        testimonials: [],
      },
    },
    about: {
      displayName: "About",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        highlights: {
          type: "array",
          itemSchema: {
            title: { type: "string", editable: true, maxLength: 80 },
            description: { type: "string", editable: true, maxLength: 200 },
          },
        },
        imageSrc: { type: "image", editable: true },
        imageAlt: { type: "string", editable: true, maxLength: 120 },
      },
      defaultData: {
        title: "Who we are",
        description: "Dedicated specialists with a passion for simplifying accounting.",
        highlights: [],
        imageSrc: "/images/about.jpg",
        imageAlt: "Team portrait",
      },
    },
    team: {
      displayName: "Team",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        members: {
          type: "array",
          itemSchema: {
            name: { type: "string", editable: true, maxLength: 80 },
            role: { type: "string", editable: true, maxLength: 80 },
            bio: { type: "string", editable: true, maxLength: 220 },
            imageSrc: { type: "image", editable: true },
            imageAlt: { type: "string", editable: true, maxLength: 120 },
            socialLinks: {
              type: "array",
              itemSchema: {
                label: { type: "string", editable: true, maxLength: 40 },
                href: { type: "string", editable: true, maxLength: 120 },
              },
            },
          },
        },
      },
      defaultData: {
        title: "Meet the leadership",
        description: "Experts with decades of accounting experience.",
        members: [],
      },
    },
    contact: {
      displayName: "Contact",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        contactMethods: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 60 },
            value: { type: "string", editable: true, maxLength: 120 },
            href: { type: "string", editable: true, maxLength: 120 },
          },
        },
        cardTitle: { type: "string", editable: true, maxLength: 120 },
        cardDescription: { type: "string", editable: true, maxLength: 200 },
        formCtaLabel: { type: "string", editable: true, maxLength: 40 },
        formCtaHref: { type: "string", editable: true, maxLength: 120 },
      },
      defaultData: {
        title: "Let’s work together",
        description: "Share a few details and our advisors will respond within one day.",
        contactMethods: [],
        cardTitle: "Get a tailored proposal",
        cardDescription: "Tell us about your team and goals so we can personalize your plan.",
        formCtaLabel: "Start the conversation",
        formCtaHref: "/contact",
      },
    },
    footer: {
      displayName: "Footer",
      schema: {
        logoSrc: { type: "image", editable: true },
        logoAlt: { type: "string", editable: true, maxLength: 80 },
        description: { type: "string", editable: true, maxLength: 160 },
        navigationGroups: {
          type: "array",
          itemSchema: {
            title: { type: "string", editable: true, maxLength: 60 },
            links: {
              type: "array",
              itemSchema: {
                label: { type: "string", editable: true, maxLength: 60 },
                href: { type: "string", editable: true, maxLength: 120 },
              },
            },
          },
        },
        contactInfo: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 60 },
            value: { type: "string", editable: true, maxLength: 120 },
            href: { type: "string", editable: true, maxLength: 120 },
          },
        },
        copyright: { type: "string", editable: true, maxLength: 120 },
      },
      defaultData: {
        logoSrc: "/logo.svg",
        logoAlt: "Compass logo",
        description: "Streamlined accounting for modern teams.",
        navigationGroups: [],
        contactInfo: [],
        copyright: "© 2024 Compass Accounting. All rights reserved.",
      },
    },
    blogTeaser: {
      displayName: "Blog Teaser",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        viewAllLabel: { type: "string", editable: true, maxLength: 60 },
        viewAllHref: { type: "string", editable: true, maxLength: 120 },
        posts: {
          type: "array",
          itemSchema: {
            title: { type: "string", editable: true, maxLength: 80 },
            excerpt: { type: "string", editable: true, maxLength: 200 },
            href: { type: "string", editable: true, maxLength: 120 },
            author: { type: "string", editable: true, maxLength: 60 },
            publishDate: { type: "string", editable: true, maxLength: 40 },
            ctaLabel: { type: "string", editable: true, maxLength: 40 },
            imageSrc: { type: "image", editable: true },
            imageAlt: { type: "string", editable: true, maxLength: 120 },
          },
        },
      },
      defaultData: {
        title: "Insights and resources",
        description: "Explore the latest guides and tips from our advisory team.",
        viewAllLabel: "View all articles",
        viewAllHref: "/blog",
        posts: [],
      },
    },
    blogList: {
      displayName: "Blog List",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        posts: {
          type: "array",
          itemSchema: {
            title: { type: "string", editable: true, maxLength: 100 },
            excerpt: { type: "string", editable: true, maxLength: 260 },
            href: { type: "string", editable: true, maxLength: 120 },
            author: { type: "string", editable: true, maxLength: 60 },
            publishDate: { type: "string", editable: true, maxLength: 40 },
            readingTime: { type: "string", editable: true, maxLength: 30 },
          },
        },
      },
      defaultData: {
        title: "Latest articles",
        description: "Stay updated with guidance from Compass advisors.",
        posts: [],
      },
    },
    blogArticle: {
      displayName: "Blog Article",
      schema: {
        title: { type: "string", editable: true, maxLength: 160 },
        author: { type: "string", editable: true, maxLength: 80 },
        publishDate: { type: "string", editable: true, maxLength: 40 },
        readingTime: { type: "string", editable: true, maxLength: 30 },
        featuredImageSrc: { type: "image", editable: true },
        featuredImageAlt: { type: "string", editable: true, maxLength: 120 },
        content: { type: "richtext", editable: true },
      },
      defaultData: {
        title: "How to scale your finance operations",
        author: "Jordan Spencer",
        publishDate: "2024-04-01",
        readingTime: "6 min read",
        featuredImageSrc: "/images/blog-hero.jpg",
        featuredImageAlt: "Financial planning session",
        content: "<p>Share your expertise here.</p>",
      },
    },
    serviceHero: {
      displayName: "Service Hero",
      schema: {
        eyebrow: { type: "string", editable: true, maxLength: 80 },
        title: { type: "string", editable: true, maxLength: 140 },
        description: { type: "string", editable: true, maxLength: 220 },
        imageSrc: { type: "image", editable: true },
        imageAlt: { type: "string", editable: true, maxLength: 120 },
        ctaLabel: { type: "string", editable: true, maxLength: 40 },
        ctaHref: { type: "string", editable: true, maxLength: 120 },
      },
      defaultData: {
        eyebrow: "Service",
        title: "Full-service bookkeeping",
        description: "Dedicated specialists, tailored workflows, and modern software to keep you audit ready.",
        imageSrc: "/images/service-hero.jpg",
        imageAlt: "Professional working on laptop",
        ctaLabel: "Book a consultation",
        ctaHref: "/contact",
      },
    },
    serviceDescription: {
      displayName: "Service Description",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        overview: { type: "string", editable: true, maxLength: 260 },
        benefits: {
          type: "array",
          itemSchema: {
            title: { type: "string", editable: true, maxLength: 80 },
            description: { type: "string", editable: true, maxLength: 220 },
          },
        },
      },
      defaultData: {
        title: "What’s included",
        overview: "Comprehensive bookkeeping, reconciliations, and reporting to support leadership decisions.",
        benefits: [],
      },
    },
    servicePricing: {
      displayName: "Service Pricing",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        tiers: {
          type: "array",
          itemSchema: {
            name: { type: "string", editable: true, maxLength: 60 },
            price: { type: "string", editable: true, maxLength: 40 },
            features: {
              type: "array",
              itemSchema: {
                value: { type: "string", editable: true, maxLength: 120 },
              },
            },
            ctaLabel: { type: "string", editable: true, maxLength: 40 },
            ctaHref: { type: "string", editable: true, maxLength: 120 },
          },
        },
      },
      defaultData: {
        title: "Tailored plans",
        description: "Choose the tier that matches your volume and complexity.",
        tiers: [],
      },
    },
    serviceContact: {
      displayName: "Service Contact",
      schema: {
        title: { type: "string", editable: true, maxLength: 120 },
        description: { type: "string", editable: true, maxLength: 220 },
        ctaLabel: { type: "string", editable: true, maxLength: 40 },
        ctaHref: { type: "string", editable: true, maxLength: 120 },
        supportDetails: {
          type: "array",
          itemSchema: {
            label: { type: "string", editable: true, maxLength: 60 },
            value: { type: "string", editable: true, maxLength: 120 },
            href: { type: "string", editable: true, maxLength: 120 },
          },
        },
      },
      defaultData: {
        title: "Let’s build your service plan",
        description: "Connect with our specialists to receive a custom proposal for this service.",
        ctaLabel: "Talk to an expert",
        ctaHref: "/contact",
        supportDetails: [],
      },
    },
  },
  pages: {
    home: {
      path: "/",
      allowedSectionTypes: [
        "header",
        "hero",
        "features",
        "services",
        "process",
        "pricing",
        "testimonials",
        "blogTeaser",
        "contact",
        "footer",
      ],
    },
    "about-us": {
      path: "/about-us",
      allowedSectionTypes: ["header", "aboutUsHero", "about", "team", "contact", "footer"],
    },
    "blog-index": {
      path: "/blog",
      allowedSectionTypes: ["header", "blogList", "footer"],
    },
    "blog-post": {
      path: "/blog/[slug]",
      allowedSectionTypes: ["header", "blogArticle", "blogTeaser", "contact", "footer"],
    },
    "service-detail": {
      path: "/services/[slug]",
      allowedSectionTypes: [
        "header",
        "serviceHero",
        "serviceDescription",
        "servicePricing",
        "serviceContact",
        "footer",
      ],
    },
  },
} as const;

export type SiteSchema = typeof siteSchema;
