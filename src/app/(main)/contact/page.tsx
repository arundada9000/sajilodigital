import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Sajilo Digital",
  description:
    "Get in touch with Sajilo Digital Pvt. Ltd. for expert web development, mobile apps, and digital transformation inquiries. Let's build your next digital milestone together.",
  openGraph: {
    title: "Contact Sajilo Digital - Start Your Digital Journey",
    description:
      "Ready to scale your digital presence? Reach out to our team in Butwal, Nepal for a free consultation.",
    url: "https://sajilodigital.com.np/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sajilo Digital",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactClient />
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Sajilo Digital",
            description:
              "Contact page for Sajilo Digital Pvt. Ltd., identifying how to reach the company for services.",
            url: "https://sajilodigital.com.np/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Sajilo Digital Pvt. Ltd.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Horizon Chowk",
                addressLocality: "Butwal-11",
                addressRegion: "Lumbini",
                postalCode: "32907",
                addressCountry: "NP",
              },
              telephone: "+977-9811420975",
              email: "arunneupane0000@gmail.com",
            },
          }),
        }}
      />
    </>
  );
}
