import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Sajilo Digital",
  description:
    "Discover our range of digital services including high-performance web development, mobile apps, UI/UX design, and strategic digital consulting. We build legacy-grade digital solutions in Nepal.",
  openGraph: {
    title: "Sajilo Digital Services - Architecting the Future",
    description:
      "From custom web applications to digital transformation strategies, explore how Sajilo Digital can scale your business.",
    url: "https://sajilodigital.com.np/services",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital Services",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />
      {/* Services Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Transformation & Web Development",
            provider: {
              "@type": "Organization",
              name: "Sajilo Digital Pvt. Ltd.",
              url: "https://sajilodigital.com.np"
            },
            areaServed: {
              "@type": "Country",
              name: "Nepal"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Design"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development"
                  }
                }
              ]
            }
          }),
        }}
      />
    </>
  );
}
