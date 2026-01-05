import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Sajilo Digital",
    description:
        "Stay updated with the latest technological trends, AI insights, and professional development guides from our expert team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
