import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Testimonials | Sajilo Digital",
    description:
        "Read what our clients say about working with Sajilo Digital. Real stories from businesses we've helped transform through technology.",
    keywords: ["client reviews", "testimonials", "Sajilo Digital feedback", "Nepal web development reviews"],
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
