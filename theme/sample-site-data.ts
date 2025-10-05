const IMAGE_PLACEHOLDERS = {
  heroTeam: "https://placehold.co/1600x900/EEF2FF/1E293B?text=Compass%20Team",
  processCollaboration: "https://placehold.co/1200x800/F8FAFC/0F172A?text=Process%20Collaboration",
  blogRollingForecast: "https://placehold.co/1200x800/DBEAFE/1E293B?text=Rolling%20Forecasts",
  blogMonthEnd: "https://placehold.co/1200x800/E0E7FF/1E293B?text=Month-End%20Close",
  blogCommunication: "https://placehold.co/1200x800/F5F3FF/312E81?text=Client%20Communication",
  blogAutomation: "https://placehold.co/1200x800/EFF6FF/1D4ED8?text=Accounts%20Payable",
  aboutHero: "https://placehold.co/1600x900/F8FAFC/0F172A?text=About%20Compass",
  aboutCollaboration: "https://placehold.co/1200x800/DBEAFE/1E293B?text=Collaboration",
  teamJamie: "https://placehold.co/320x320/2563EB/FFFFFF?text=Jamie",
  teamPriya: "https://placehold.co/320x320/1E3A8A/FFFFFF?text=Priya",
  teamNoah: "https://placehold.co/320x320/4338CA/FFFFFF?text=Noah",
  teamAvery: "https://placehold.co/320x320/3730A3/FFFFFF?text=Avery",
  avatarMorgan: "https://placehold.co/200x200/2563EB/FFFFFF?text=MP",
  avatarLuis: "https://placehold.co/200x200/1D4ED8/FFFFFF?text=LR",
  avatarTaylor: "https://placehold.co/200x200/312E81/FFFFFF?text=TJ",
  serviceBookkeeping: "https://placehold.co/1600x900/EEF2FF/1E293B?text=Bookkeeping",
} as const;

export const siteData = {
  _meta: { locale: "en" },
  site: { brand: "Compass Accounting", slug: "compass", locale: "en" },
  features: { blogEnabled: true },
  pages: {
    home: {
      sections: [
        {
          id: "header",
          type: "header",
          enabled: true,
          region: "main",
          order: 10,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass Accounting logo",
            brandName: "Compass Accounting",
            navigation: [
              { label: "Services", href: "/services" },
              { label: "About", href: "/about-us" },
              { label: "Process", href: "/#process" },
              { label: "Resources", href: "/blog" },
            ],
            ctaButtons: [
              { label: "Client login", href: "/login", style: "secondary" },
              { label: "Book a call", href: "/contact", style: "primary" },
            ],
          },
        },
        {
          id: "hero",
          type: "hero",
          enabled: true,
          region: "main",
          order: 20,
          data: {
            eyebrow: "Streamlined accounting",
            title: "Simplified bookkeeping and advisory for modern accounting firms",
            description:
              "Partner with Compass for proactive bookkeeping, tax strategy, and CFO guidance designed to keep your clients ahead.",
            primaryCtaLabel: "Schedule a consultation",
            primaryCtaHref: "/contact",
            secondaryCtaLabel: "View pricing",
            secondaryCtaHref: "/#pricing",
            stats: [
              { label: "Happy clients", value: "320+" },
              { label: "Average response", value: "< 4 hrs" },
              { label: "Assets managed", value: "$1.2B" },
            ],
            imageSrc: IMAGE_PLACEHOLDERS.heroTeam,
            imageAlt: "Accounting specialists collaborating",
            partnerLogos: [
              { src: "/images/logo-client-1.svg", alt: "Client 1" },
              { src: "/images/logo-client-2.svg", alt: "Client 2" },
              { src: "/images/logo-client-3.svg", alt: "Client 3" },
            ],
          },
        },
        {
          id: "features",
          type: "features",
          enabled: true,
          region: "main",
          order: 30,
          data: {
            eyebrow: "Why Compass",
            title: "Your trusted partner for adaptive accounting",
            description:
              "From day-one setup to enterprise-ready reporting, Compass delivers the tools and team you need to stay confident.",
            items: [
              {
                icon: "/images/icon-insights.svg",
                title: "Real-time insights",
                description: "Dashboards and forecasts that keep leadership aligned and confident.",
              },
              {
                icon: "/images/icon-compliance.svg",
                title: "Compliance assured",
                description: "Expert guidance to keep you ahead of tax deadlines and regulations.",
              },
              {
                icon: "/images/icon-automation.svg",
                title: "Automated workflows",
                description: "Integrated technology removes manual tasks and reduces error.",
              },
              {
                icon: "/images/icon-support.svg",
                title: "Dedicated support",
                description: "Partner with a responsive team that understands your business goals.",
              },
            ],
          },
        },
        {
          id: "services",
          type: "services",
          enabled: true,
          region: "main",
          order: 40,
          data: {
            title: "Streamlined servicing for firms of every size",
            description:
              "Tailored engagements that flex with seasonal demand and regulatory change.",
            ctaLabel: "Explore service",
            services: [
              {
                name: "Client bookkeeping",
                summary: "Full-cycle bookkeeping with reconciliations and monthly close support.",
                href: "/services/bookkeeping",
                features: [
                  { value: "Dedicated account lead" },
                  { value: "Cloud-based general ledger" },
                  { value: "KPI dashboards" },
                ],
              },
              {
                name: "Tax strategy",
                summary: "Proactive planning, filings, and audit readiness for complex entities.",
                href: "/services/tax-strategy",
                features: [
                  { value: "Quarterly planning sessions" },
                  { value: "Regulatory monitoring" },
                  { value: "Audit support" },
                ],
              },
              {
                name: "Fractional CFO",
                summary: "Strategic finance guidance to support transactions and fundraising.",
                href: "/services/fractional-cfo",
                features: [
                  { value: "Scenario modeling" },
                  { value: "Board-ready reporting" },
                  { value: "Capital strategy" },
                ],
              },
            ],
          },
        },
        {
          id: "process",
          type: "process",
          enabled: true,
          region: "main",
          order: 50,
          data: {
            title: "Steps in our process",
            description:
              "We combine structured onboarding with continuous check-ins to keep engagements on track.",
            steps: [
              {
                title: "Discover",
                description: "Align on goals, software, and reporting requirements for your firm.",
              },
              {
                title: "Design",
                description: "Customize workflows, close checklists, and client communication cadences.",
              },
              {
                title: "Deliver",
                description: "Operate the plan with proactive updates and quarterly optimization reviews.",
              },
            ],
            imageSrc: IMAGE_PLACEHOLDERS.processCollaboration,
            imageAlt: "Team reviewing documents",
          },
        },
        {
          id: "pricing",
          type: "pricing",
          enabled: true,
          region: "main",
          order: 60,
          data: {
            title: "Customized pricing tailored to your practice",
            description:
              "Choose a plan aligned with your client volume and the outcomes you need from Compass.",
            plans: [
              {
                name: "Core",
                price: "$1,200/mo",
                billingNote: "Perfect for growing firms",
                features: [
                  { value: "Dedicated bookkeeper" },
                  { value: "Monthly close" },
                  { value: "Quarterly tax reviews" },
                ],
                ctaLabel: "Start core",
                ctaHref: "/contact?plan=core",
                highlighted: false,
              },
              {
                name: "Scale",
                price: "$2,400/mo",
                billingNote: "Most popular",
                features: [
                  { value: "Controller oversight" },
                  { value: "Rolling forecasts" },
                  { value: "Unlimited support" },
                ],
                ctaLabel: "Start scale",
                ctaHref: "/contact?plan=scale",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                billingNote: "For complex portfolios",
                features: [
                  { value: "Dedicated CFO" },
                  { value: "Systems integration" },
                  { value: "On-site workshops" },
                ],
                ctaLabel: "Contact sales",
                ctaHref: "/contact?plan=enterprise",
                highlighted: false,
              },
            ],
          },
        },
        {
          id: "testimonials",
          type: "testimonials",
          enabled: true,
          region: "main",
          order: 70,
          data: {
            title: "Clients love us",
            description: "Accountants and finance leaders rely on Compass to stay ahead of every deadline.",
            testimonials: [
              {
                quote: "Compass transformed our month-end process and keeps our partners informed with live dashboards.",
                author: "Morgan Patel",
                role: "Managing Partner, Ledger & Co.",
                avatarSrc: IMAGE_PLACEHOLDERS.avatarMorgan,
                avatarAlt: "Portrait of Morgan Patel",
              },
              {
                quote: "The team integrates seamlessly with our tech stack and proactively surfaces savings opportunities.",
                author: "Luis Romero",
                role: "Director of Finance, Northwind",
                avatarSrc: IMAGE_PLACEHOLDERS.avatarLuis,
                avatarAlt: "Portrait of Luis Romero",
              },
              {
                quote: "We finally have forecasts the executive team trusts thanks to Compass’ fractional CFOs.",
                author: "Taylor James",
                role: "COO, Horizon Labs",
                avatarSrc: IMAGE_PLACEHOLDERS.avatarTaylor,
                avatarAlt: "Portrait of Taylor James",
              },
            ],
          },
        },
        {
          id: "blogTeaser",
          type: "blogTeaser",
          enabled: true,
          region: "main",
          order: 80,
          data: {
            title: "Insights from our experts",
            description: "Guides and analysis to help you build a forward-looking accounting practice.",
            viewAllLabel: "Browse all articles",
            viewAllHref: "/blog",
            posts: [
              {
                title: "Implementing rolling forecasts across your portfolio",
                excerpt: "Build a forecasting cadence that keeps partners informed and clients prepared.",
                href: "/blog/rolling-forecasts",
                author: "Harper Quinn",
                publishDate: "Mar 18, 2024",
                ctaLabel: "Read article",
                imageSrc: IMAGE_PLACEHOLDERS.blogRollingForecast,
                imageAlt: "Person analyzing financial charts",
              },
              {
                title: "Designing a scalable month-end close",
                excerpt: "A playbook for standardizing workpapers and reducing review cycles.",
                href: "/blog/month-end-close",
                author: "Jordan Ellis",
                publishDate: "Mar 04, 2024",
                ctaLabel: "Discover how",
                imageSrc: IMAGE_PLACEHOLDERS.blogMonthEnd,
                imageAlt: "Accountant working with laptop",
              },
              {
                title: "How to elevate client communication",
                excerpt: "Deliver strategic updates that build trust and highlight advisory value.",
                href: "/blog/client-communication",
                author: "Sasha Lin",
                publishDate: "Feb 26, 2024",
                ctaLabel: "See the framework",
                imageSrc: IMAGE_PLACEHOLDERS.blogCommunication,
                imageAlt: "Team collaborating in office",
              },
            ],
          },
        },
        {
          id: "contact",
          type: "contact",
          enabled: true,
          region: "main",
          order: 90,
          data: {
            title: "Let’s build your accounting roadmap",
            description:
              "Tell us about your current challenges and we’ll outline the Compass plan that fits.",
            contactMethods: [
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
              { label: "Email", value: "hello@compass.co", href: "mailto:hello@compass.co" },
              { label: "Office", value: "845 Market Street, Suite 120", href: "https://maps.example.com/compass" },
            ],
            cardTitle: "Ready to get started?",
            cardDescription: "Share your goals and we’ll deliver a tailored proposal in one business day.",
            formCtaLabel: "Schedule a call",
            formCtaHref: "/contact",
          },
        },
        {
          id: "footer",
          type: "footer",
          enabled: true,
          region: "main",
          order: 100,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            description: "Streamlined accounting solutions for modern firms.",
            navigationGroups: [
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about-us" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Bookkeeping", href: "/services/bookkeeping" },
                  { label: "Tax Strategy", href: "/services/tax-strategy" },
                  { label: "Fractional CFO", href: "/services/fractional-cfo" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "Guides", href: "/resources/guides" },
                  { label: "Events", href: "/resources/events" },
                ],
              },
            ],
            contactInfo: [
              { label: "Support", value: "support@compass.co", href: "mailto:support@compass.co" },
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
            ],
            copyright: "© 2024 Compass Accounting. All rights reserved.",
          },
        },
      ],
    },
    "about-us": {
      sections: [
        {
          id: "header",
          type: "header",
          enabled: true,
          region: "main",
          order: 10,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            brandName: "Compass Accounting",
            navigation: [
              { label: "Services", href: "/services" },
              { label: "About", href: "/about-us" },
              { label: "Process", href: "/#process" },
              { label: "Resources", href: "/blog" },
            ],
            ctaButtons: [
              { label: "Client login", href: "/login", style: "secondary" },
              { label: "Book a call", href: "/contact", style: "primary" },
            ],
          },
        },
        {
          id: "aboutUsHero",
          type: "aboutUsHero",
          enabled: true,
          region: "main",
          order: 20,
          data: {
            eyebrow: "About Compass",
            title: "We empower accounting teams to lead with confidence",
            description:
              "Our multidisciplinary team blends accounting expertise with technology and process design to help firms scale.",
            primaryCtaLabel: "Meet the team",
            primaryCtaHref: "/about-us#team",
            secondaryCtaLabel: "Our services",
            secondaryCtaHref: "/services",
            stats: [
              { label: "Years in business", value: "12" },
              { label: "Experts on staff", value: "85" },
              { label: "Client NPS", value: "78" },
            ],
            imageSrc: IMAGE_PLACEHOLDERS.aboutHero,
            imageAlt: "Compass team meeting",
            partnerLogos: [],
          },
        },
        {
          id: "about",
          type: "about",
          enabled: true,
          region: "main",
          order: 30,
          data: {
            title: "Built for modern accounting leaders",
            description:
              "Compass was founded to give firms a proactive partner who understands both compliance and strategic advisory.",
            highlights: [
              {
                title: "Technology-forward",
                description: "We integrate the latest tools into every engagement while protecting data privacy.",
              },
              {
                title: "Specialist team",
                description: "Our analysts, CPAs, and CFOs collaborate to support every client touchpoint.",
              },
              {
                title: "Nationwide reach",
                description: "Remote-first with local specialists available in 18 cities across North America.",
              },
            ],
            imageSrc: IMAGE_PLACEHOLDERS.aboutCollaboration,
            imageAlt: "Compass employees collaborating",
          },
        },
        {
          id: "team",
          type: "team",
          enabled: true,
          region: "main",
          order: 40,
          data: {
            title: "Leadership team",
            description: "Experienced advisors committed to your success.",
            members: [
              {
                name: "Jamie Carter",
                role: "Founder & CEO",
                bio: "CPA with 15 years scaling multi-location accounting practices.",
                imageSrc: IMAGE_PLACEHOLDERS.teamJamie,
                imageAlt: "Portrait of Jamie Carter",
                socialLinks: [
                  { label: "LinkedIn", href: "https://linkedin.com/in/jamiecarter" },
                ],
              },
              {
                name: "Priya Desai",
                role: "Head of Advisory",
                bio: "Designs financial strategies that unlock growth for complex portfolios.",
                imageSrc: IMAGE_PLACEHOLDERS.teamPriya,
                imageAlt: "Portrait of Priya Desai",
                socialLinks: [
                  { label: "LinkedIn", href: "https://linkedin.com/in/priyadesai" },
                ],
              },
              {
                name: "Noah Kim",
                role: "Director of Tax",
                bio: "Leads a team of specialists keeping clients compliant across jurisdictions.",
                imageSrc: IMAGE_PLACEHOLDERS.teamNoah,
                imageAlt: "Portrait of Noah Kim",
                socialLinks: [
                  { label: "LinkedIn", href: "https://linkedin.com/in/noahkim" },
                ],
              },
              {
                name: "Avery Ross",
                role: "VP of Client Success",
                bio: "Ensures every engagement receives responsive communication and support.",
                imageSrc: IMAGE_PLACEHOLDERS.teamAvery,
                imageAlt: "Portrait of Avery Ross",
                socialLinks: [
                  { label: "LinkedIn", href: "https://linkedin.com/in/averyross" },
                ],
              },
            ],
          },
        },
        {
          id: "contact",
          type: "contact",
          enabled: true,
          region: "main",
          order: 50,
          data: {
            title: "Connect with our leadership",
            description: "We’ll pair you with the right specialists for your firm’s goals.",
            contactMethods: [
              { label: "Partnerships", value: "partners@compass.co", href: "mailto:partners@compass.co" },
              { label: "Media", value: "press@compass.co", href: "mailto:press@compass.co" },
            ],
            cardTitle: "Join a discovery session",
            cardDescription: "Choose a time to explore how Compass elevates your accounting services.",
            formCtaLabel: "Book now",
            formCtaHref: "/contact",
          },
        },
        {
          id: "footer",
          type: "footer",
          enabled: true,
          region: "main",
          order: 60,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            description: "Streamlined accounting solutions for modern firms.",
            navigationGroups: [
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about-us" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Bookkeeping", href: "/services/bookkeeping" },
                  { label: "Tax Strategy", href: "/services/tax-strategy" },
                  { label: "Fractional CFO", href: "/services/fractional-cfo" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "Guides", href: "/resources/guides" },
                  { label: "Events", href: "/resources/events" },
                ],
              },
            ],
            contactInfo: [
              { label: "Support", value: "support@compass.co", href: "mailto:support@compass.co" },
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
            ],
            copyright: "© 2024 Compass Accounting. All rights reserved.",
          },
        },
      ],
    },
    "blog-index": {
      sections: [
        {
          id: "header",
          type: "header",
          enabled: true,
          region: "main",
          order: 10,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            brandName: "Compass Accounting",
            navigation: [
              { label: "Services", href: "/services" },
              { label: "About", href: "/about-us" },
              { label: "Process", href: "/#process" },
              { label: "Resources", href: "/blog" },
            ],
            ctaButtons: [
              { label: "Client login", href: "/login", style: "secondary" },
              { label: "Book a call", href: "/contact", style: "primary" },
            ],
          },
        },
        {
          id: "blogList",
          type: "blogList",
          enabled: true,
          region: "main",
          order: 20,
          data: {
            title: "Compass insights",
            description: "Deep dives and practical resources for accounting leaders.",
            posts: [
              {
                title: "Building a resilient accounting tech stack",
                excerpt: "How to assess, select, and rollout new software without disrupting your team.",
                href: "/blog/accounting-tech-stack",
                author: "Rowan Blake",
                publishDate: "Mar 11, 2024",
                readingTime: "8 min read",
              },
              {
                title: "When to introduce fractional CFO support",
                excerpt: "Signals that your clients are ready for strategic finance guidance.",
                href: "/blog/fractional-cfo-support",
                author: "Imani Wells",
                publishDate: "Feb 27, 2024",
                readingTime: "7 min read",
              },
              {
                title: "Standardizing workpapers across offices",
                excerpt: "A framework for consistent documentation that reduces review time.",
                href: "/blog/standardizing-workpapers",
                author: "Devin Hart",
                publishDate: "Feb 12, 2024",
                readingTime: "6 min read",
              },
            ],
          },
        },
        {
          id: "footer",
          type: "footer",
          enabled: true,
          region: "main",
          order: 30,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            description: "Streamlined accounting solutions for modern firms.",
            navigationGroups: [
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about-us" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Bookkeeping", href: "/services/bookkeeping" },
                  { label: "Tax Strategy", href: "/services/tax-strategy" },
                  { label: "Fractional CFO", href: "/services/fractional-cfo" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "Guides", href: "/resources/guides" },
                  { label: "Events", href: "/resources/events" },
                ],
              },
            ],
            contactInfo: [
              { label: "Support", value: "support@compass.co", href: "mailto:support@compass.co" },
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
            ],
            copyright: "© 2024 Compass Accounting. All rights reserved.",
          },
        },
      ],
    },
    "blog-post": {
      sections: [
        {
          id: "header",
          type: "header",
          enabled: true,
          region: "main",
          order: 10,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            brandName: "Compass Accounting",
            navigation: [
              { label: "Services", href: "/services" },
              { label: "About", href: "/about-us" },
              { label: "Process", href: "/#process" },
              { label: "Resources", href: "/blog" },
            ],
            ctaButtons: [
              { label: "Client login", href: "/login", style: "secondary" },
              { label: "Book a call", href: "/contact", style: "primary" },
            ],
          },
        },
        {
          id: "blogArticle",
          type: "blogArticle",
          enabled: true,
          region: "main",
          order: 20,
          data: {
            title: "Implementing rolling forecasts across your client portfolio",
            author: "Harper Quinn",
            publishDate: "Mar 18, 2024",
            readingTime: "6 min read",
            featuredImageSrc: IMAGE_PLACEHOLDERS.blogRollingForecast,
            featuredImageAlt: "Professional reviewing financial reports",
            content:
              "<p>Rolling forecasts provide the agility accounting leaders need to navigate uncertainty. Start by aligning stakeholders on cadence and data sources, then introduce scenario planning to evaluate risk and opportunity.</p><p>Compass equips teams with templates, integrations, and advisory support to operationalize forecasts across every engagement.</p>",
          },
        },
        {
          id: "blogTeaser",
          type: "blogTeaser",
          enabled: true,
          region: "main",
          order: 30,
          data: {
            title: "More resources for ambitious firms",
            description: "Keep exploring frameworks and best practices from Compass advisors.",
            viewAllLabel: "View the library",
            viewAllHref: "/blog",
            posts: [
              {
                title: "Designing a scalable month-end close",
                excerpt: "A playbook for standardizing workpapers and reducing review cycles.",
                href: "/blog/month-end-close",
                author: "Jordan Ellis",
                publishDate: "Mar 04, 2024",
                ctaLabel: "Read next",
                imageSrc: IMAGE_PLACEHOLDERS.blogMonthEnd,
                imageAlt: "Accounting team collaborating",
              },
              {
                title: "Building stronger client relationships",
                excerpt: "Communication strategies that highlight advisory value.",
                href: "/blog/client-relationships",
                author: "Sasha Lin",
                publishDate: "Feb 22, 2024",
                ctaLabel: "Explore tips",
                imageSrc: IMAGE_PLACEHOLDERS.blogCommunication,
                imageAlt: "Two people discussing financial plans",
              },
              {
                title: "Automating accounts payable workflows",
                excerpt: "Reduce manual effort with a modern AP technology stack.",
                href: "/blog/automating-ap",
                author: "Devin Hart",
                publishDate: "Feb 10, 2024",
                ctaLabel: "See how",
                imageSrc: IMAGE_PLACEHOLDERS.blogAutomation,
                imageAlt: "Accountant reviewing invoices",
              },
            ],
          },
        },
        {
          id: "contact",
          type: "contact",
          enabled: true,
          region: "main",
          order: 40,
          data: {
            title: "Talk through these insights with our team",
            description: "We’ll help you apply these ideas across your clients and services.",
            contactMethods: [
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
              { label: "Email", value: "hello@compass.co", href: "mailto:hello@compass.co" },
            ],
            cardTitle: "Ready to accelerate?",
            cardDescription: "Share your goals and we’ll pair you with the right advisor.",
            formCtaLabel: "Book a strategy call",
            formCtaHref: "/contact",
          },
        },
        {
          id: "footer",
          type: "footer",
          enabled: true,
          region: "main",
          order: 50,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            description: "Streamlined accounting solutions for modern firms.",
            navigationGroups: [
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about-us" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Bookkeeping", href: "/services/bookkeeping" },
                  { label: "Tax Strategy", href: "/services/tax-strategy" },
                  { label: "Fractional CFO", href: "/services/fractional-cfo" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "Guides", href: "/resources/guides" },
                  { label: "Events", href: "/resources/events" },
                ],
              },
            ],
            contactInfo: [
              { label: "Support", value: "support@compass.co", href: "mailto:support@compass.co" },
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
            ],
            copyright: "© 2024 Compass Accounting. All rights reserved.",
          },
        },
      ],
    },
    "service-detail": {
      sections: [
        {
          id: "header",
          type: "header",
          enabled: true,
          region: "main",
          order: 10,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            brandName: "Compass Accounting",
            navigation: [
              { label: "Services", href: "/services" },
              { label: "About", href: "/about-us" },
              { label: "Process", href: "/#process" },
              { label: "Resources", href: "/blog" },
            ],
            ctaButtons: [
              { label: "Client login", href: "/login", style: "secondary" },
              { label: "Book a call", href: "/contact", style: "primary" },
            ],
          },
        },
        {
          id: "serviceHero",
          type: "serviceHero",
          enabled: true,
          region: "main",
          order: 20,
          data: {
            eyebrow: "Service spotlight",
            title: "Client bookkeeping that scales with you",
            description:
              "From daily reconciliations to investor-ready reports, Compass handles the numbers so your firm can focus on clients.",
            imageSrc: IMAGE_PLACEHOLDERS.serviceBookkeeping,
            imageAlt: "Bookkeeping professional",
            ctaLabel: "Start the conversation",
            ctaHref: "/contact?service=bookkeeping",
          },
        },
        {
          id: "serviceDescription",
          type: "serviceDescription",
          enabled: true,
          region: "main",
          order: 30,
          data: {
            title: "What’s included in bookkeeping",
            overview:
              "We become an extension of your team, delivering accurate books, fast closes, and insight-rich reporting.",
            benefits: [
              {
                title: "Full-cycle bookkeeping",
                description: "Daily reconciliations, AP/AR processing, and month-end close.",
              },
              {
                title: "Quality control",
                description: "Review layers and variance analysis to ensure accuracy every cycle.",
              },
              {
                title: "Insightful reporting",
                description: "Dashboards, KPIs, and tailored reports for partners and clients.",
              },
              {
                title: "Technology integration",
                description: "Implementation and optimization of leading accounting platforms.",
              },
            ],
          },
        },
        {
          id: "servicePricing",
          type: "servicePricing",
          enabled: true,
          region: "main",
          order: 40,
          data: {
            title: "Bookkeeping pricing",
            description: "Pricing adjusts with your client count and transaction volume.",
            tiers: [
              {
                name: "Launch",
                price: "$900/mo",
                features: [
                  { value: "Up to 5 entities" },
                  { value: "Monthly reporting" },
                  { value: "Email support" },
                ],
                ctaLabel: "Choose launch",
                ctaHref: "/contact?plan=launch",
              },
              {
                name: "Growth",
                price: "$1,600/mo",
                features: [
                  { value: "Up to 12 entities" },
                  { value: "Bi-weekly reporting" },
                  { value: "Slack support" },
                ],
                ctaLabel: "Choose growth",
                ctaHref: "/contact?plan=growth",
              },
              {
                name: "Premier",
                price: "Custom",
                features: [
                  { value: "Unlimited entities" },
                  { value: "Weekly reporting" },
                  { value: "Dedicated controller" },
                ],
                ctaLabel: "Talk to sales",
                ctaHref: "/contact?plan=premier",
              },
            ],
          },
        },
        {
          id: "serviceContact",
          type: "serviceContact",
          enabled: true,
          region: "main",
          order: 50,
          data: {
            title: "Let’s craft your bookkeeping plan",
            description: "Share your goals and we’ll assemble the team to get you there.",
            ctaLabel: "Schedule a call",
            ctaHref: "/contact?service=bookkeeping",
            supportDetails: [
              { label: "Email", value: "hello@compass.co", href: "mailto:hello@compass.co" },
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
              { label: "Office", value: "845 Market Street, Suite 120", href: "https://maps.example.com/compass" },
            ],
          },
        },
        {
          id: "footer",
          type: "footer",
          enabled: true,
          region: "main",
          order: 60,
          data: {
            logoSrc: "/images/logo-mark.svg",
            logoAlt: "Compass icon",
            description: "Streamlined accounting solutions for modern firms.",
            navigationGroups: [
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about-us" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Bookkeeping", href: "/services/bookkeeping" },
                  { label: "Tax Strategy", href: "/services/tax-strategy" },
                  { label: "Fractional CFO", href: "/services/fractional-cfo" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "Guides", href: "/resources/guides" },
                  { label: "Events", href: "/resources/events" },
                ],
              },
            ],
            contactInfo: [
              { label: "Support", value: "support@compass.co", href: "mailto:support@compass.co" },
              { label: "Phone", value: "(555) 012-3456", href: "tel:5550123456" },
            ],
            copyright: "© 2024 Compass Accounting. All rights reserved.",
          },
        },
      ],
    },
  },
} as const;
