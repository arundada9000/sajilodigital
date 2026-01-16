export type Entry = {
  title: string;
  href: string;
  type: "page" | "section" | "faq" | "blog" | "team";
  keywords?: string[];
};

export const searchRegistry: Entry[] = [
  // Pages
  {
    title: "Home",
    href: "/",
    type: "page",
    keywords: ["homepage", "main", "landing"],
  },
  {
    title: "Projects",
    href: "/projects",
    type: "page",
    keywords: ["portfolio", "work", "case studies"],
  },
  {
    title: "Services",
    href: "/services",
    type: "page",
    keywords: ["offerings", "what we do", "solutions"],
  },
  {
    title: "Contact",
    href: "/contact",
    type: "page",
    keywords: ["email", "reach out", "get in touch"],
  },
  {
    title: "Pricing",
    href: "/pricing",
    type: "page",
    keywords: ["cost", "plans", "packages", "rates"],
  },

  {
    title: "Client Testimonials",
    href: "/testimonials",
    type: "section",
    keywords: ["feedback", "reviews", "client feedback", "testimonials"],
  },
  {
    title: "About Us",
    href: "/about",
    type: "page",
    keywords: ["team", "company", "our story", "who we are"],
  },
  {
    title: "Team",
    href: "/about/team",
    type: "team",
    keywords: ["staff", "members", "employees", "our team"],
  },
  {
    title: "company",
    href: "/about",
    type: "page",
    keywords: ["team", "about us", "who we are"],
  },

  {
    title: "Blog",
    href: "/blog",
    type: "page",
    keywords: ["articles", "posts", "news", "updates"],
  },
  {
    title: "FAQ",
    href: "/faq",
    type: "page",
    keywords: [
      "questions",
      "help",
      "support & maintenance",
      "common questions",
      "Process & Timeline",
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
    type: "page",
    keywords: ["photos", "images", "showcase", "videos"],
  },
  {
    title: "Status",
    href: "/status",
    type: "page",
    keywords: ["status", "device"],
  },
  {
    title: "terms",
    href: "/terms",
    type: "page",
    keywords: ["terms", "conditions", "terms & conditions"],
  },
  {
    title: "privacy",
    href: "/privacy",
    type: "page",
    keywords: ["privacy", "policy"],
  },

  // Sections
  {
    title: "Web Development",
    href: "/services/web-development",
    type: "section",
    keywords: ["frontend", "backend", "full stack", "web apps"],
  },
  {
    title: "Graphic Designing",
    href: "/services/graphic-designing",
    type: "section",
    keywords: ["branding", "visuals", "design", "logos"],
  },
  {
    title: "Domain Registration",
    href: "/services/domain-registration",
    type: "section",
    keywords: [
      "domains",
      "website names",
      "url registration",
      "Eligibility-based registration",
    ],
  },
  {
    title: "App Development",
    href: "/services/app-development",
    type: "section",
    keywords: [
      "mobile apps",
      "custom UI/UX",
      "Authentication",
      "cross-platform",
    ],
  },
  {
    title: "SEO",
    href: "/services/seo",
    type: "section",
    keywords: [
      "search engine optimization",
      "rankings",
      "traffic",
      "keywords",
      "technical seo",
      "content optimization",
    ],
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    type: "section",
    keywords: [
      "user interface",
      "user experience",
      "prototyping",
      "interaction design",
    ],
  },
  {
    title: "Maintenance & Support",
    href: "/services/maintenance",
    type: "section",
    keywords: [
      "updates",
      "bug fixes",
      "technical support",
      "performance monitoring",
      "security",
    ],
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    type: "section",
    keywords: [
      "online marketing",
      "social media",
      "email campaigns",
      "content marketing",
      "analytics",
      "paid ads",
      "seo & content marketing",
      "analytics reporting",
    ],
  },
  {
    title: "Web Hosting",
    href: "/services/deployment",
    type: "section",
    keywords: [
      "server space",
      "website hosting",
      "cloud hosting",
      "shared hosting",
      "dedicated hosting",
      "VPS hosting",
      "Daily backups",
    ],
  },
  {
    title: "Content Writing",
    href: "/services#content-writing",
    type: "section",
    keywords: [
      "copywriting",
      "blog posts",
      "website content",
      "SEO writing",
      "technical writing",
      "plagiarism-free",
      "4 blog posts",
    ],
  },
  {
    title: "Video Editing",
    href: "/services/video-editing",
    type: "section",
    keywords: ["video editing"],
  },

  {
    title: "Our Process",
    href: "/our-process",
    type: "section",
    keywords: ["workflow", "steps", "how we work"],
  },
  {
    title: "Featured Projects",
    href: "/projects",
    type: "section",
    keywords: ["showcase", "case studies"],
  },

  // Team
  {
    title: "Arun Neupane",
    href: "/about/team?memberId=3",
    type: "team",
    keywords: [
      "arun",
      "pooja",
      "arun neupane",
      "frontend developer",
      "cto",
      "sama",
      "backend developer",
      "team",
      "member",
    ],
  },
  {
    title: "Sunil Paudyal",
    href: "/about/team?memberId=5",
    type: "team",
    keywords: [
      "sunil paudyal",
      "qa",
      "frontend developer",
      "virat kohli",
      "18",
      "tester",
      "team",
      "member",
    ],
  },
  {
    title: "Pramod Tharu",
    href: "/about/team?memberId=1",
    type: "team",
    keywords: ["pramod tharu", "chairperson", "team", "member"],
  },

  {
    title: "Bal Gobind Chaudhary",
    href: "/about/team?memberId=2",
    type: "team",
    keywords: [
      "bal gobind chaudhary",
      "frontend developer",
      "backend developer",
      "ceo",
      "team",
      "member",
      "founder",
    ],
  },
  {
    title: "Bijay kumar Chaudhary",
    href: "/about/team?memberId=4",
    type: "team",
    keywords: [
      "bijay kumar chaudhary",
      "sexy",
      "ui/ux designer",
      "frontend developer",
      "team",
      "member",
    ],
  },
  {
    title: "Ashish G.M",
    href: "/about/team?memberId=6",
    type: "team",
    keywords: [
      "ashish G.M",
      "frontend developer",
      "video editor",
      "team",
      "member",
      "dantey",
    ],
  },
  {
    title: "Puspanjali Gurung",
    href: "/about/team?memberId=7",
    type: "team",
    keywords: [
      "puspanjali gurung",
      "ui/ux designer",
      "graphic designer",
      "figma designer",
      "team",
      "member",
    ],
  },

  // FAQ
  {
    title: "What tech do you use?",
    href: "/faq#stack",
    type: "faq",
    keywords: ["tech stack", "tools", "frameworks"],
  },
  {
    title: "What services do you offer?",
    href: "/services",
    type: "faq",
    keywords: ["services", "offerings", "solutions"],
  },
  {
    title: "How can I contact you?",
    href: "/contact",
    type: "faq",
    keywords: ["contact", "reach out", "get in touch"],
  },
  {
    title: "Do you offer support after delivery?",
    href: "/services/maintenance",
    type: "faq",
    keywords: ["maintenance", "support", "after delivery"],
  },
  {
    title: "How long does a project take?",
    href: "/#our-process",
    type: "faq",
    keywords: ["timeline", "project duration", "delivery time"],
  },
  {
    title: "Do you offer custom designs?",
    href: "/services/graphic-designing",
    type: "faq",
    keywords: ["custom design", "ui ux", "branding"],
  },

  {
    title: "Do you provide SEO services?",
    href: "/services/seo",
    type: "faq",
    keywords: ["seo", "search optimization", "google ranking"],
  },
  {
    title: "Do you provide hosting and domain setup?",
    href: "/services/deployment",
    type: "faq",
    keywords: ["hosting", "domain", "deployment"],
  },
  {
    title: "What is your pricing model?",
    href: "/pricing",
    type: "faq",
    keywords: ["pricing", "cost", "payment"],
  },
  {
    title: "Do you offer maintenance services?",
    href: "/services/maintenance",
    type: "faq",
    keywords: ["maintenance", "support", "updates"],
  },
  {
    title: "Do you provide full-stack web development?",
    href: "/services/web-development",
    type: "faq",
    keywords: ["web development", "frontend", "backend", "full stack"],
  },
  {
    title: "Can you help with content writing?",
    href: "/services#content-writing",
    type: "faq",
    keywords: ["content writing", "copywriting", "blog posts"],
  },
  {
    title: "What is your development process?",
    href: "/#our-process",
    type: "faq",
    keywords: ["development process", "workflow", "steps"],
  },
  {
    title: "Do you offer digital marketing services?",
    href: "/services/digital-marketing",
    type: "faq",
    keywords: ["digital marketing", "online marketing", "seo", "social media"],
  },
  {
    title: "Can you develop mobile applications?",
    href: "/services/app-development",
    type: "faq",
    keywords: ["mobile apps", "app development", "ios", "android"],
  },
  {
    title: "How much do your services cost?",
    href: "/pricing",
    type: "faq",
    keywords: ["pricing", "cost", "rates", "packages"],
  },
  {
    title: "Do you offer custom pricing?",
    href: "/pricing",
    type: "faq",
    keywords: ["custom pricing", "tailored packages", "flexible rates"],
  },
  {
    title: "Can you handle urgent projects?",
    href: "/contact",
    type: "faq",
    keywords: ["urgent projects", "fast turnaround", "quick delivery"],
  },
  {
    title: "How quickly do you respond to support requests?",
    href: "/services/maintenance",
    type: "faq",
    keywords: ["support response time", "customer support", "help-desk"],
  },
  {
    title: "Do you offer discounts for long-term projects?",
    href: "/pricing",
    type: "faq",
    keywords: ["discounts", "long-term projects", "loyalty programs"],
  },
  {
    title: "Do you offer maintenance packages?",
    href: "/services#maintenance-support",
    type: "faq",
    keywords: ["maintenance packages", "ongoing support", "service plans"],
  },
  {
    title: "What happens if I find a bug after delivery?",
    href: "/faq#stack",
    type: "faq",
    keywords: ["bug fixes", "post-delivery support", "issue resolution"],
  },
  {
    title: "Is my data secure?",
    href: "/services#maintenance-support",
    type: "faq",
    keywords: ["data security", "privacy", "confidentiality"],
  },

  // Blog Posts
  {
    title: "About Sajilo Digital",
    href: "/blog/about-our-company",
    type: "blog",
    keywords: ["AboutUs", "SajiloDigital", "Brand", "Team"],
  },
  {
    title: "How We Work",
    href: "/how-we-work",
    type: "page",
    keywords: ["Process", "Team", "SajiloDigital", "how we work"],
  },
  {
    title: "How we ensure quality of products: The Sajilo Digital QA Approach",
    href: "/blog/ensuring-quality-of-products",
    type: "blog",
    keywords: ["Testing", "Product Quality", "sajilodigital"],
  },
  {
    title: "Tech Stack We Use: Building Scalable Startups with Sajilo Digital",
    href: "/blog/tech-stack-we-use",
    type: "blog",
    keywords: ["Tech Stack", "Startups", "Scaling", "SajiloDigital"],
  },
  {
    title: "Video Editing Services",
    href: "/blog/video-editing",
    type: "blog",
    keywords: ["VideoEditing", "Creative", "Branding", "SajiloDigital"],
  },

  // Projects
  {
    title: "Mount Glacier Alpine Adventure Trek & Tours",
    href: "/projects/mount-glacier-trek",
    type: "page",
    keywords: ["ecommerce", "himalayan", "trek", "tour"],
  },
  {
    title: "Sushila Fancy Fashion Store",
    href: "/projects/sushila-fancy-store",
    type: "page",
    keywords: ["store", "shop", "ecommerce"],
  },
  {
    title: "Sajilo Sahayata Disaster Management",
    href: "/projects/sajilo-sahayata",
    type: "page",
    keywords: ["webapp", "sahayata"],
  },
  {
    title: "Career Khoj",
    href: "/projects/career-khoj",
    type: "page",
    keywords: ["education", "jobtool", "learning"],
  },
  {
    title: "Sorting Algorithms Visualizer",
    href: "/projects/easy-Sorting-Algorithms",
    type: "page",
    keywords: ["learning", "webtool", "sorting"],
  },
  {
    title: "Chroma",
    href: "/projects/easy-color-picker",
    type: "page",
    keywords: ["learning", "webtool"],
  },
  {
    title: "Plantify",
    href: "/projects/Plantiify-Pomodoro",
    type: "page",
    keywords: ["webapp"],
  },
  {
    title: "Code Olympiad",
    href: "/projects/Code-Olympiad-2081",
    type: "page",
    keywords: ["education"],
  },
  {
    title: "Easy Vanilla",
    href: "/projects/easy-vanilla",
    type: "page",
    keywords: ["education", "webtool"],
  },
];
