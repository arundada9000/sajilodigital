import type { Metadata } from "next";
import HeroSection from "../../components/home/HeroSection";
import CreativeSection from "../../components/home/CreativeSection";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import CTASection from "../../components/home/CTASection";

// SEO Metadata for home page
export const metadata: Metadata = {
  title: "Home",
  description:
    "Transform your digital presence with expert web development services. We build cutting-edge web applications using Next.js, React, and modern technologies. Get your free consultation today.",
  openGraph: {
    title: "sajilodigital - Transform Your Digital Presence",
    description:
      "Expert web development services for modern businesses. Custom web applications, e-commerce solutions, and digital transformation.",
    url: "https://sajilodigital.com",
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "sajilodigital Home",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Creative/Services Showcase Section */}
      <CreativeSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Call to Action */}
      <CTASection />

      {/* Additional structured data specific to home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "sajilodigital",
            url: "https://sajilodigital.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://sajilodigital.com/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "sajilodigital Web Development",
            image: "https://sajilodigital.com/images/logo.png",
            "@id": "https://sajilodigital.com",
            url: "https://sajilodigital.com",
            telephone: "+1-234-567-8900",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Tech Street",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "12345",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.7128,
              longitude: -74.006,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.linkedin.com/company/sajilodigital",
              "https://twitter.com/sajilodigital",
              "https://github.com/sajilodigital",
            ],
          }),
        }}
      />
    </>
  );
}
