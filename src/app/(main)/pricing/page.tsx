import type { Metadata } from "next";

import PricingClient from "../../../components/pricing/PricingClient";
import StructuredData from "@/src/components/seo/StructuredData";
import { generateBreadcrumbSchema } from "@/src/lib/seo/metadata";

export const metadata: Metadata = {
  title: "Pricing - All Services",
  description:
    "Explore transparent, competitive pricing for all our digital services including web development, app development, UI/UX design, SEO, digital marketing, and more. Tailored for the Nepal market with no hidden fees.",
  keywords: [
    "pricing",
    "web development cost",
    "app development pricing",
    "SEO packages Nepal",
    "digital marketing rates",
    "UI/UX design pricing",
    "Nepal IT services cost",
  ],
};

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PricingClient />
    </>
  );
}
