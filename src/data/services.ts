import { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Building fast, secure, and scalable websites",
    description:
      "We develop responsive websites and web applications tailored to your business needs using modern technologies.",
    priceNote:
      "Prices are starting estimates for the Nepal market. Final cost depends on design complexity, features, integrations, and project scope.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 40,000",
        duration: "One-time",
        bestFor: "Small businesses & portfolios",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Basic SEO",
          "Contact form",
          "1 month support",
        ],
      },
      {
        plan: "Standard",
        price: "NPR 80,000",
        duration: "One-time",
        popular: true,
        bestFor: "Growing businesses",
        features: [
          "Up to 10 pages",
          "Custom UI/UX",
          "CMS integration",
          "SEO optimized",
          "3 months support",
        ],
      },
      {
        plan: "Premium",
        price: "Custom",
        duration: "Project-based",
        bestFor: "Enterprises & web applications",
        features: [
          "Unlimited pages",
          "Advanced security",
          "Third-party integrations",
          "High performance",
          "6+ months support",
        ],
      },
    ],
  },

  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    tagline: "Creative visuals that define your brand",
    description:
      "We design eye-catching graphics that help your brand stand out across digital and print platforms.",
    priceNote:
      "Pricing may vary depending on design complexity, branding requirements, and number of revisions.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 3,000",
        duration: "One-time",
        bestFor: "Social media posts",
        features: ["5 designs", "Basic branding", "1 revision"],
      },
      {
        plan: "Standard",
        price: "NPR 10,000",
        duration: "One-time",
        popular: true,
        bestFor: "Marketing & promotions",
        features: [
          "Logo or banners",
          "10 designs",
          "Brand consistency",
          "3 revisions",
        ],
      },
      {
        plan: "Premium",
        price: "NPR 25,000+",
        duration: "Project-based",
        bestFor: "Complete branding",
        features: [
          "Brand identity",
          "Unlimited designs",
          "Print & digital assets",
          "Unlimited revisions",
        ],
      },
    ],
  },

  {
    slug: "domain-registration",
    title: "Domain Registration",
    tagline: "Secure your online identity",
    description:
      "We provide domain registration and management services with full DNS and security support.",
    priceNote:
      "Domain prices are subject to registry policies and renewal rates.",
    pricing: [
      {
        plan: ".com / .net / .org",
        price: "NPR 1,500 / year",
        duration: "Yearly",
        features: ["DNS management", "Domain locking", "Renewal reminders"],
      },
      {
        plan: ".np Domain",
        price: "Free",
        duration: "Lifetime",
        features: ["Eligibility-based registration", "Technical support"],
      },
    ],
  },

  {
    slug: "app-development",
    title: "App Development",
    tagline: "Smart mobile apps for modern users",
    description:
      "We build high-performance mobile applications for Android and iOS platforms.",
    priceNote:
      "App development costs depend on features, platform, UI complexity, and backend requirements.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 150,000",
        duration: "One-time",
        bestFor: "Startup MVPs",
        features: [
          "Single platform",
          "Basic UI",
          "Core features",
          "1 month support",
        ],
      },
      {
        plan: "Standard",
        price: "NPR 300,000",
        duration: "One-time",
        popular: true,
        bestFor: "Business apps",
        features: [
          "Cross-platform",
          "Custom UI/UX",
          "Authentication",
          "Push notifications",
        ],
      },
      {
        plan: "Premium",
        price: "Custom",
        duration: "Project-based",
        bestFor: "Enterprise apps",
        features: [
          "Payment integration",
          "Admin dashboard",
          "Advanced security",
          "Ongoing support",
        ],
      },
    ],
  },

  {
    slug: "seo",
    title: "SEO",
    tagline: "Increase visibility and organic traffic",
    description:
      "We optimize your website to rank higher on search engines and attract quality traffic.",
    priceNote:
      "SEO is a long-term strategy. Results typically start showing after 2–3 months.",
    pricing: [
      {
        plan: "Starter",
        price: "NPR 10,000 / month",
        duration: "Monthly",
        features: ["Keyword research", "On-page SEO", "Basic reporting"],
      },
      {
        plan: "Growth",
        price: "NPR 25,000 / month",
        duration: "Monthly",
        popular: true,
        features: [
          "Technical SEO",
          "Backlink building",
          "Content optimization",
          "Monthly reports",
        ],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        duration: "Monthly",
        features: [
          "Complete SEO strategy",
          "Competitor analysis",
          "Conversion optimization",
        ],
      },
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    tagline: "Designing experiences users love",
    description:
      "We create intuitive and engaging designs that improve usability and conversions.",
    priceNote:
      "Pricing depends on number of screens, research depth, and testing requirements.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 20,000",
        duration: "One-time",
        features: ["Wireframes", "2–3 screens"],
      },
      {
        plan: "Standard",
        price: "NPR 50,000",
        duration: "One-time",
        popular: true,
        features: ["Up to 10 screens", "Interactive prototype", "User flows"],
      },
      {
        plan: "Premium",
        price: "NPR 100,000+",
        duration: "Project-based",
        features: [
          "Complete product design",
          "Design system",
          "Usability testing",
        ],
      },
    ],
  },

  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    tagline: "Keeping your digital products healthy",
    description:
      "We ensure your website and applications remain secure, updated, and bug-free.",
    priceNote:
      "Support plans can be customized based on website size and update frequency.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 4,000 / month",
        duration: "Monthly",
        features: ["Minor updates", "Backup & monitoring"],
      },
      {
        plan: "Standard",
        price: "NPR 12,000 / month",
        duration: "Monthly",
        popular: true,
        features: ["Bug fixes", "Performance monitoring", "Security checks"],
      },
      {
        plan: "Premium",
        price: "NPR 25,000 / month",
        duration: "Monthly",
        features: ["24/7 monitoring", "Priority support", "Advanced security"],
      },
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Grow your brand, reach the right audience",
    description:
      "We help businesses grow online through strategic marketing campaigns.",
    priceNote:
      "Ad spend is not included in package pricing and will be billed separately.",
    pricing: [
      {
        plan: "Starter",
        price: "NPR 12,000 / month",
        duration: "Monthly",
        features: ["Social media management", "Basic content posting"],
      },
      {
        plan: "Growth",
        price: "NPR 35,000 / month",
        duration: "Monthly",
        popular: true,
        features: ["Paid ads", "SEO & content marketing", "Analytics reports"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        duration: "Monthly",
        features: [
          "Full digital strategy",
          "Dedicated manager",
          "Multi-channel campaigns",
        ],
      },
    ],
  },

  {
    slug: "web-hosting",
    title: "Web Hosting",
    tagline: "Fast, secure, and reliable hosting solutions",
    description:
      "We provide reliable hosting with high uptime, security, and support.",
    priceNote:
      "Hosting prices may vary based on storage, traffic, and server configuration.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 2,500 / year",
        duration: "Yearly",
        features: ["Shared hosting", "Free SSL", "Email support"],
      },
      {
        plan: "Standard",
        price: "NPR 8,000 / year",
        duration: "Yearly",
        popular: true,
        features: ["VPS hosting", "Daily backups", "Better performance"],
      },
      {
        plan: "Premium",
        price: "NPR 20,000 / year",
        duration: "Yearly",
        features: ["Dedicated server", "High security", "Priority support"],
      },
    ],
  },

  {
    slug: "content-writing",
    title: "Content Writing",
    tagline: "Content that informs, engages, and converts",
    description:
      "We write high-quality, SEO-friendly content to strengthen your online presence.",
    priceNote:
      "Pricing depends on content length, research level, and industry niche.",
    pricing: [
      {
        plan: "Basic",
        price: "NPR 1,200 / article",
        duration: "Per article",
        features: ["500 words", "SEO-friendly", "1 revision"],
      },
      {
        plan: "Standard",
        price: "NPR 5,000",
        duration: "Package",
        popular: true,
        features: ["4 blog posts", "Keyword optimized", "Plagiarism-free"],
      },
      {
        plan: "Premium",
        price: "NPR 12,000+",
        duration: "Project-based",
        features: ["Website content", "Marketing copy", "Unlimited revisions"],
      },
    ],
  },
];
