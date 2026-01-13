import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Sajilo Digital",
    description:
        "Get in touch with Sajilo Digital for web development, app development, and digital marketing inquiries. Located in Butwal, Nepal.",
    keywords: [
        "contact sajilo digital",
        "web development Nepal",
        "Butwal digital agency",
        "get quote",
        "it support",
    ],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
