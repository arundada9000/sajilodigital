import { LucideIcon } from "lucide-react";
import { services } from "./services";

export interface PricingTier {
    plan: string;
    price: string;
    duration: string;
    popular?: boolean;
    features: string[];
}

export interface ServicePricing {
    id: string;
    name: string;
    slug: string;
    icon: string;
    color: string;
    accentColor: string;
    category: "one-time" | "monthly" | "hybrid";
    shortDescription: string;
    pricing: PricingTier[];
    comparison: ComparisonRow[];
}

export interface ComparisonRow {
    feature: string;
    tier1: string;
    tier2: string;
    tier3: string;
}

export interface PackageBundle {
    id: string;
    name: string;
    description: string;
    services: string[];
    discount: number;
    popular?: boolean;
    originalPrice: string;
    bundlePrice: string;
    color: string;
}

// Extract service pricing from services data
export const servicePricing: ServicePricing[] = services.map((service) => ({
    id: service.slug,
    name: service.title,
    slug: service.slug,
    icon: service.slug,
    color: service.color,
    accentColor: service.accentColor,
    category: service.pricing[0].duration.toLowerCase().includes("month") ? "monthly" : "one-time",
    shortDescription: service.tagline,
    pricing: service.pricing,
    comparison: generateComparisonData(service.slug, service.pricing),
}));

// Generate comparison data for each service
function generateComparisonData(slug: string, pricing: PricingTier[]): ComparisonRow[] {
    const tier1 = pricing[0]?.plan || "Tier 1";
    const tier2 = pricing[1]?.plan || "Tier 2";
    const tier3 = pricing[2]?.plan || "Tier 3";

    const commonComparisons: Record<string, ComparisonRow[]> = {
        "web-development": [
            { feature: "Number of Pages", tier1: "5", tier2: "15", tier3: "Unlimited" },
            { feature: "Custom Design", tier1: "Template-based", tier2: "Custom", tier3: "Elite" },
            { feature: "SEO Optimization", tier1: "Basic", tier2: "Advanced", tier3: "Full Audit" },
            { feature: "CMS Integration", tier1: "Basic", tier2: "Advanced", tier3: "Custom" },
            { feature: "Support Duration", tier1: "1 month", tier2: "3 months", tier3: "6+ months" },
            { feature: "Revision Rounds", tier1: "2", tier2: "5", tier3: "Unlimited" },
            { feature: "Performance Optimization", tier1: "-", tier2: "Included", tier3: "Advanced" },
            { feature: "Analytics Setup", tier1: "-", tier2: "Included", tier3: "Advanced" },
        ],
        "app-development": [
            { feature: "Platform", tier1: "Cross-platform", tier2: "Cross-platform", tier3: "Native" },
            { feature: "Features", tier1: "Core", tier2: "Advanced", tier3: "Unlimited" },
            { feature: "Backend", tier1: "Basic", tier2: "Scalable", tier3: "Enterprise" },
            { feature: "Authentication", tier1: "Basic", tier2: "Social Auth", tier3: "Biometrics" },
            { feature: "Push Notifications", tier1: "-", tier2: "Included", tier3: "Advanced" },
            { feature: "Payment Gateway", tier1: "-", tier2: "-", tier3: "Included" },
            { feature: "Support Duration", tier1: "1 month", tier2: "3 months", tier3: "12+ months" },
            { feature: "App Store Publish", tier1: "Guidance", tier2: "Included", tier3: "Managed" },
        ],
        "ui-ux-design": [
            { feature: "Research Phase", tier1: "Basic", tier2: "Deep Dive", tier3: "Comprehensive" },
            { feature: "Wireframes", tier1: "Key Screens", tier2: "All Screens", tier3: "Full Journey" },
            { feature: "Design System", tier1: "-", tier2: "Included", tier3: "Complete" },
            { feature: "Prototyping", tier1: "Static", tier2: "Interactive", tier3: "Hi-Fi" },
            { feature: "Usability Testing", tier1: "-", tier2: "-", tier3: "Included" },
            { feature: "Revision Rounds", tier1: "2", tier2: "4", tier3: "Unlimited" },
            { feature: "Brand Guidelines", tier1: "-", tier2: "Basic", tier3: "Complete" },
            { feature: "Handoff Support", tier1: "Basic", tier2: "Developer Ready", tier3: "Full Support" },
        ],
        "graphic-designing": [
            { feature: "Logo Concepts", tier1: "3", tier2: "5", tier3: "Unlimited" },
            { feature: "Brand Colors", tier1: "Primary", tier2: "Full Palette", tier3: "Advanced" },
            { feature: "File Formats", tier1: "Standard", tier2: "All Formats", tier3: "Source Files" },
            { feature: "Social Media Kit", tier1: "Basic", tier2: "Complete", tier3: "Animated" },
            { feature: "Print Ready", tier1: "-", tier2: "Included", tier3: "Premium" },
            { feature: "Motion Graphics", tier1: "-", tier2: "Basic", tier3: "Advanced" },
            { feature: "Brand Guidelines", tier1: "-", tier2: "Basic", tier3: "Complete Book" },
            { feature: "Revision Rounds", tier1: "2", tier2: "4", tier3: "Unlimited" },
        ],
        "seo": [
            { feature: "Keyword Research", tier1: "10 Keywords", tier2: "30 Keywords", tier3: "Unlimited" },
            { feature: "On-Page SEO", tier1: "Basic", tier2: "Advanced", tier3: "Complete" },
            { feature: "Technical SEO", tier1: "-", tier2: "Included", tier3: "Advanced" },
            { feature: "Link Building", tier1: "-", tier2: "10/month", tier3: "30+/month" },
            { feature: "Content Strategy", tier1: "-", tier2: "Basic", tier3: "Full Engine" },
            { feature: "Competitor Analysis", tier1: "Basic", tier2: "Detailed", tier3: "Continuous" },
            { feature: "Monthly Reports", tier1: "Basic", tier2: "Detailed", tier3: "Custom" },
            { feature: "Support", tier1: "Email", tier2: "Priority", tier3: "Dedicated" },
        ],
        "digital-marketing": [
            { feature: "Platforms", tier1: "2 Platforms", tier2: "4 Platforms", tier3: "All Channels" },
            { feature: "Ad Spend Management", tier1: "Up to 50k", tier2: "Up to 200k", tier3: "Unlimited" },
            { feature: "Content Creation", tier1: "8/month", tier2: "20/month", tier3: "Custom" },
            { feature: "A/B Testing", tier1: "-", tier2: "Included", tier3: "Advanced" },
            { feature: "Email Marketing", tier1: "-", tier2: "Basic", tier3: "Automation" },
            { feature: "Influencer Collabs", tier1: "-", tier2: "-", tier3: "Included" },
            { feature: "Monthly Reports", tier1: "Basic", tier2: "Detailed", tier3: "Real-time" },
            { feature: "Strategy Calls", tier1: "Monthly", tier2: "Bi-weekly", tier3: "Weekly" },
        ],
        "video-editing": [
            { feature: "Video Duration", tier1: "Up to 2 min", tier2: "Up to 5 min", tier3: "Unlimited" },
            { feature: "Color Grading", tier1: "Basic", tier2: "Advanced", tier3: "Cinema-grade" },
            { feature: "Motion Graphics", tier1: "-", tier2: "Basic", tier3: "Advanced" },
            { feature: "Sound Design", tier1: "Basic", tier2: "Professional", tier3: "Studio-grade" },
            { feature: "3D Elements", tier1: "-", tier2: "-", tier3: "Included" },
            { feature: "VFX", tier1: "-", tier2: "Basic", tier3: "Advanced" },
            { feature: "Revision Rounds", tier1: "2", tier2: "3", tier3: "Unlimited" },
            { feature: "Delivery Time", tier1: "7 days", tier2: "5 days", tier3: "Custom" },
        ],
        "maintenance": [
            { feature: "Response Time", tier1: "48 hours", tier2: "24 hours", tier3: "Instant" },
            { feature: "Security Updates", tier1: "Monthly", tier2: "Weekly", tier3: "Real-time" },
            { feature: "Backups", tier1: "Weekly", tier2: "Daily", tier3: "Hourly" },
            { feature: "Uptime Monitoring", tier1: "Basic", tier2: "24/7", tier3: "Advanced" },
            { feature: "Performance Tuning", tier1: "-", tier2: "Quarterly", tier3: "Monthly" },
            { feature: "Support Channels", tier1: "Email", tier2: "Email + Chat", tier3: "All Channels" },
            { feature: "Priority", tier1: "Normal", tier2: "High", tier3: "Urgent" },
            { feature: "Dedicated Manager", tier1: "-", tier2: "-", tier3: "Included" },
        ],
        "deployment": [
            { feature: "Cloud Provider", tier1: "Shared", tier2: "Dedicated", tier3: "Multi-region" },
            { feature: "SSL Certificate", tier1: "Basic", tier2: "Wildcard", tier3: "EV SSL" },
            { feature: "CI/CD Pipeline", tier1: "Basic", tier2: "Advanced", tier3: "Custom" },
            { feature: "Load Balancing", tier1: "-", tier2: "Included", tier3: "Advanced" },
            { feature: "Auto Scaling", tier1: "-", tier2: "Included", tier3: "Intelligent" },
            { feature: "Monitoring", tier1: "Basic", tier2: "Advanced", tier3: "Full APM" },
            { feature: "Backup Strategy", tier1: "Daily", tier2: "Real-time", tier3: "Disaster Recovery" },
            { feature: "Support", tier1: "Email", tier2: "Priority", tier3: "24/7 DevOps" },
        ],
    };

    return commonComparisons[slug] || [
        { feature: "Basic Features", tier1: "Included", tier2: "Included", tier3: "Included" },
        { feature: "Advanced Features", tier1: "-", tier2: "Included", tier3: "Included" },
        { feature: "Premium Features", tier1: "-", tier2: "-", tier3: "Included" },
        { feature: "Support", tier1: "Email", tier2: "Priority", tier3: "Dedicated" },
    ];
}

// Package bundles
export const packageBundles: PackageBundle[] = [
    {
        id: "startup",
        name: "Startup Bundle",
        description: "Everything you need to launch your digital presence",
        services: ["web-development", "graphic-designing", "seo"],
        discount: 15,
        originalPrice: "NPR 72,000",
        bundlePrice: "NPR 61,200",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: "growth",
        name: "Growth Bundle",
        description: "Accelerate your business with comprehensive digital solutions",
        services: ["web-development", "seo", "digital-marketing"],
        discount: 20,
        popular: true,
        originalPrice: "NPR 155,000",
        bundlePrice: "NPR 124,000",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "enterprise",
        name: "Enterprise Bundle",
        description: "Complete digital ecosystem for scaling businesses",
        services: ["app-development", "ui-ux-design", "maintenance", "deployment"],
        discount: 25,
        originalPrice: "Custom",
        bundlePrice: "Contact Us",
        color: "from-orange-500 to-rose-500",
    },
    {
        id: "content-creator",
        name: "Content Creator Bundle",
        description: "Perfect for brands focused on visual storytelling",
        services: ["video-editing", "graphic-designing", "digital-marketing"],
        discount: 18,
        originalPrice: "NPR 58,000",
        bundlePrice: "NPR 47,560",
        color: "from-green-500 to-emerald-500",
    },
];

// Service icons mapping (using service slugs)
export const serviceIcons: Record<string, string> = {
    "web-development": "🌐",
    "app-development": "📱",
    "ui-ux-design": "🎨",
    "graphic-designing": "✨",
    "seo": "🔍",
    "digital-marketing": "📈",
    "video-editing": "🎬",
    "maintenance": "🛡️",
    "deployment": "🚀",
};

// Get pricing for a specific service
export function getServicePricing(serviceId: string): ServicePricing | undefined {
    return servicePricing.find((s) => s.id === serviceId);
}

// Get all services in a category
export function getServicesByCategory(category: "one-time" | "monthly" | "hybrid"): ServicePricing[] {
    return servicePricing.filter((s) => s.category === category);
}

// Calculate bundle savings
export function calculateBundleSavings(bundleId: string): { saved: string; percentage: number } {
    const bundle = packageBundles.find((b) => b.id === bundleId);
    if (!bundle || bundle.originalPrice === "Custom") {
        return { saved: "Custom", percentage: bundle?.discount || 0 };
    }

    const original = parseFloat(bundle.originalPrice.replace(/[^0-9]/g, ""));
    const bundled = parseFloat(bundle.bundlePrice.replace(/[^0-9]/g, ""));
    const saved = original - bundled;

    return {
        saved: `NPR ${saved.toLocaleString()}`,
        percentage: bundle.discount,
    };
}
