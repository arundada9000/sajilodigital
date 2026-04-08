import type { Metadata } from "next";
import BlogClient from "./BlogClient";

import StructuredData from "../../../components/seo/StructuredData";
import { generateBreadcrumbSchema } from "../../../lib/seo/metadata";

export const metadata: Metadata = {
  title: "Blog | Sajilo Digital",
  description:
    "Explore the intersection of technology, design, and innovation. Read our latest articles on web development, UI/UX design, and digital strategies from the Sajilo Digital team in Nepal.",
  openGraph: {
    title: "Sajilo Digital Blog - Insights on Tech and Innovation",
    description:
      "Fresh perspectives on modern web development, e-commerce, and digital transformation.",
    url: "https://sajilodigital.com.np/blog",
    images: [
      {
        url: "/images/blog-op.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/blog",
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <BlogClient />
      {/* Blog Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Sajilo Digital Blog",
            description:
              "Latest insights on technology, design, and innovation from Sajilo Digital.",
            publisher: {
              "@type": "Organization",
              name: "Sajilo Digital Pvt. Ltd.",
              url: "https://sajilodigital.com.np",
            },
          }),
        }}
      />
    </>
  );
}
