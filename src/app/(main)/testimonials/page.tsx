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
    name: "Mitralal Sapkota (Mr. LAL)",
    role: "Lead Trekking Guide",
    company: "Mount Glacier Alpine Adventure Tour And Treks",
    image: "/testimonials/mitralal-sapkota.jpg",
    rating: 5,
    text: "I recently had my website built by Sajilo Digital, and I’m extremely satisfied with the results. The team was professional, quick, and very easy to work with. They offered me the best deal and delivered exactly what I needed clean design, smooth functionality, and great support throughout the process. Highly recommended for anyone looking for quality digital services!",
    project: "Tour And Treks",
  },

  {
    name: "Daba Sherpa",
    role: "Lead Trekking",
    company: "Mount Glacier Alpine",
    image: "/testimonials/daba-sherpa.jpg",
    rating: 5,
    text: "The travel booking platform developed by the team has exceeded all expectations. The itinerary planning, we are extremely satisfied with the outcome and highly recommend their services to anyone seeking reliable and innovative travel technology solutions. Couldn't be happier!",
    project: "Travel Booking Platform",
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
            description:
              "Feedback and ratings from our valued clients in Nepal.",
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
