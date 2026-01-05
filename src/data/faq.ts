import {
    Globe,
    CreditCard,
    Settings,
    Zap,
    ShieldCheck,
    RefreshCw,
    Box,
    Cpu
} from "lucide-react";

export interface FAQItem {
    question: string;
    answer: string;
    id?: string;
}

export interface FAQCategory {
    name: string;
    icon: any;
    faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
    {
        name: "General",
        icon: Globe,
        faqs: [
            {
                question: "What services does Sajilo Digital offer?",
                answer:
                    "Sajilo Digital offers a comprehensive range of digital services including custom web development (Next.js, React), mobile app development (iOS/Android), high-fidelity UI/UX design, e-commerce ecosystems, and specialized SEO/Performance optimization.",
                id: "offer-services",
            },
            {
                question: "Where is your headquarters located?",
                answer:
                    "We are headquartered in Butwal, Nepal (Horizon Chowk), but our team operates on a global scale. We utilize advanced remote collaboration tools to serve clients across the USA, UK, Australia, and beyond.",
            },
            {
                question: "What industries do you specialize in?",
                answer:
                    "Our expertise spans multiple high-growth industries including Fintech, EdTech, Real Estate platforms, Healthcare, and large-scale Enterprise E-commerce solutions.",
            },
            {
                question: "Do you offer consultation for startups?",
                answer:
                    "Yes, we provide strategic digital consulting for startups to help them define their MVP (Minimum Viable Product), choose the right tech stack, and build a scalable roadmap for growth.",
            },
        ],
    },
    {
        name: "Projects & Pricing",
        icon: CreditCard,
        faqs: [
            {
                question: "How do you calculate project costs?",
                answer:
                    "Our pricing is based on the specific requirements, technical complexity, and estimated timeline of each project. We prioritize value-based pricing to ensure you receive a robust, scalable product that generates ROI.",
            },
            {
                question: "How long does a typical development cycle take?",
                answer:
                    "A business-standard website typically takes 2-4 weeks. Complex web applications and custom software solutions usually range from 2-6 months depending on the feature roadmap.",
            },
            {
                question: "Do you offer flexible payment structures?",
                answer:
                    "Absolutely. We standardly operate on a milestone-based payment structure (e.g., 40% Kickoff, 30% Development Beta, 30% Final Deployment) to maintain transparency and momentum.",
            },
            {
                question: "Is there a maintenance fee after launch?",
                answer:
                    "We offer various maintenance plans ranging from basic security updates to comprehensive managed growth packages that include feature iterations and performance monitoring.",
            },
        ],
    },
    {
        name: "Our Process",
        icon: Settings,
        faqs: [
            {
                question: "What is your standard development workflow?",
                answer:
                    "Our 6-stage lifecycle includes: 1) Strategic Discovery, 2) UX/UI Prototyping, 3) Agile Development, 4) Stringent QA Testing, 5) Deployment & Launch, and 6) Continuous Evolution & Support.",
            },
            {
                question: "Can I monitor the progress in real-time?",
                answer:
                    "Yes. We provide access to live staging environments and dedicated Slack channels/management boards so you can see every commit and design iteration as they happen.",
            },
            {
                question: "What happens after the product is launched?",
                answer:
                    "Every launch includes a dedicated support period (1-3 months) for stability monitoring. We also offer Managed Growth packages for long-term maintenance and iterative feature updates.",
            },
            {
                question: "How do you handle revisions during design?",
                answer:
                    "We include a set number of revision cycles in our prototyping phase to ensure the final UI aligns perfectly with your vision before we write a single line of production code.",
            },
        ],
    },
    {
        name: "Technical",
        icon: Zap,
        faqs: [
            {
                question: "What technologies do you use for development?",
                answer:
                    "We specialize in the modern web stack: Next.js, React, TypeScript, Node.js, and Tailwind CSS. For mobile, we leverage React Native and native ecosystems to ensure high performance and fluid UX.",
            },
            {
                question: "Are your websites optimized for performance and SEO?",
                answer:
                    "Performance is non-negotiable at Sajilo Digital. We follow 'Core Web Vitals' standards, ensuring lightning-fast load times, semantic HTML for SEO, and complete mobile responsiveness on all breakpoints.",
            },
            {
                question: "Can you help with hosting and DevOps?",
                answer:
                    "We manage full deployment pipelines using Vercel, AWS, and DigitalOcean. Our team handles everything from domain configuration to SSL setup and database scaling.",
            },
            {
                question: "Do you provide API integration services?",
                answer:
                    "Yes, we have extensive experience integrating third-party APIs (Stripe, Twilio, Google Cloud, AI models) and building custom REST/GraphQL APIs for complex data synchronization.",
            },
        ],
    },
    {
        name: "Security",
        icon: ShieldCheck,
        faqs: [
            {
                question: "How do you handle data security?",
                answer:
                    "We implement industry-standard security protocols, including encrypted data transmission (SSL), secure API architectures, and regular security audits to protect your business and user data.",
            },
            {
                question: "Who owns the code after the project ends?",
                answer:
                    "Upon final payment, you own 100% of the intellectual property (IP) and source code. We provide a full offshore handover or can continue to manage it for you.",
            },
            {
                question: "How do you ensure data privacy compliance?",
                answer:
                    "We build applications with GDPR and CCPA best practices in mind, ensuring data minimization, secure storage, and user consent mechanisms are properly implemented.",
            },
        ],
    },
];
