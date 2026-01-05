import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | Sajilo Digital",
    description:
        "Transparent pricing for web development, app development, and digital services. Choose the perfect plan for your business needs.",
    keywords: ["web development pricing", "app development cost", "Nepal digital agency pricing", "website cost"],
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
