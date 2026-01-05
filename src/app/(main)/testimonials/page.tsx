import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";


export const metadata: Metadata = {
  title: "Testimonials | Sajilo Digital",
  description:
    "Read real success stories from our partners. Discover how Sajilo Digital transforms businesses in Nepal through expert web development, mobile apps, and digital innovation.",
  openGraph: {
    title: "Sajilo Digital Client Testimonials - Success Stories",
    description:
      "Hear from the CEOs and founders who have scaled their businesses with Sajilo Digital's technical excellence.",
    url: "https://sajilodigital.com.np/testimonials",
    images: [
      {
        url: "/images/testimonials-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital Testimonials",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/testimonials",
  },
};

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO",
    company: "TechVision Nepal",
    rating: 5,
    text: "Outstanding work! The team delivered our e-commerce platform on time and exceeded our expectations. The website is fast, beautiful, and our sales have increased by 45% since launch.",
  },
  {
    name: "Priya Thapa",
    role: "Marketing Director",
    company: "Himalayan Ventures",
    rating: 5,
    text: "Professional, creative, and highly skilled. They transformed our outdated website into a modern, responsive platform. The SEO improvements have been remarkable – we now rank on the first page.",
  },
  {
    name: "Amit Gurung",
    role: "Founder",
    company: "FitLife App",
    rating: 5,
    text: "The mobile app they built for us is simply amazing. User feedback has been overwhelmingly positive. Their attention to detail and commitment to quality is unmatched.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsClient />
      {/* Testimonials Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sajilo Digital Testimonials",
            description: "Feedback and ratings from our valued clients in Nepal.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://sajilodigital.com.np",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Testimonials",
                  item: "https://sajilodigital.com.np/testimonials",
                },
              ],
            },
            mainEntity: testimonials.map((t) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: t.name,
                jobTitle: t.role,
                worksFor: {
                  "@type": "Organization",
                  name: t.company,
                },
              },
              reviewBody: t.text,
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: 5,
              },
            })),
          }),
        }}
      />
    </>
  );
}
