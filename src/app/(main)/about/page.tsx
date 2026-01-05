import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Sajilo Digital",
  description:
    "Learn about Sajilo Digital, a team of visionaries, designers, and engineers dedicated to redefining the digital landscape through innovation and craftsmanship. Founded in 2019, we serve clients globally from Butwal, Nepal.",
  openGraph: {
    title: "About Sajilo Digital - Pioneers of Digital Excellence",
    description:
      "Our story, mission, and core values. Discover how Sajilo Digital empowers global businesses with disruptive technology solutions.",
    url: "https://sajilodigital.com.np/about",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Sajilo Digital",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutClient />
      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Sajilo Digital",
            description: "Learn about Sajilo Digital's story, mission, vision, and core values.",
            publisher: {
              "@type": "Organization",
              name: "Sajilo Digital Pvt. Ltd.",
              url: "https://sajilodigital.com.np"
            }
          }),
        }}
      />
    </>
  );
}
