import type { Metadata } from "next";

import PricingClient from "../../../components/pricing/PricingClient";
import StructuredData from "@/src/components/seo/StructuredData";
import { generateBreadcrumbSchema } from "@/src/lib/seo/metadata";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, competitive pricing tailored for the Nepal market. No hidden fees, just pure innovation.",
};

const pricingPlans = [
  {
    name: "Starter",
    price: "NPR 40,000",
    description: "Perfect for small businesses and startups",
    icon: "rocket",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
      "Social media integration",
      "1 month support",
      "Free SSL certificate",
      "Mobile optimization",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "NPR 100,000",
    description: "Ideal for growing businesses",
    icon: "zap",
    color: "from-purple-500 to-indigo-500",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO",
      "CMS integration",
      "Blog functionality",
      "3 months support",
      "Performance optimization",
      "Analytics integration",
      "Email integration",
      "Payment gateway setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    icon: "shield",
    color: "from-rose-500 to-pink-500",
    features: [
      "Unlimited pages",
      "Custom features",
      "Advanced security",
      "Third-party integrations",
      "Dedicated project manager",
      "6+ months support",
      "Priority support",
      "Scalable infrastructure",
      "API development",
      "White-label solution",
      "Training & documentation",
    ],
    popular: false,
  },
];

const addons = [
  { name: "E-commerce Integration", price: "From NPR 50,000" },
  { name: "Custom CRM System", price: "From NPR 80,000" },
  { name: "Mobile App Development", price: "From NPR 150,000" },
  { name: "Advanced Analytics Dashboard", price: "From NPR 40,000" },
  { name: "Multi-language Support", price: "From NPR 25,000" },
  { name: "Third-party API Integration", price: "From NPR 15,000" },
];

const comparisonData = [
  { feature: "Number of Pages", starter: "5", pro: "15", enterprise: "Unlimited" },
  { feature: "Custom Design", starter: "Basic", pro: "Advanced", enterprise: "Elite" },
  { feature: "SEO Optimization", starter: "Basic", pro: "Advanced", enterprise: "Full Audit" },
  { feature: "CMS Integration", starter: "-", pro: "Included", enterprise: "Custom" },
  { feature: "Support Duration", starter: "1 month", pro: "3 months", enterprise: "6+ months" },
  { feature: "API Development", starter: "-", pro: "-", enterprise: "Included" },
  { feature: "Revision Rounds", starter: "2", pro: "5", enterprise: "Unlimited" },
];

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PricingClient
        pricingPlans={pricingPlans}
        addons={addons}
        comparisonData={comparisonData}
      />
    </>
  );
}
