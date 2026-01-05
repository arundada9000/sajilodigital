import type { Metadata } from "next";
import HomeHero from "../../components/home/HomeHero";
import TextTicker from "../../components/home/TextTicker";
import MissionSection from "../../components/home/MissionSection";
import SystemArchitecture from "../../components/home/SystemArchitecture";
import NexusCTA from "../../components/home/NexusCTA";
import NexusTerminal from "../../components/home/NexusTerminal";
import Grain from "../../components/ui/Grain";

// SEO Metadata for home page
export const metadata: Metadata = {
  title: "Sajilo Digital | Your Vision, Our Innovation",
  description:
    "Transform your digital presence with expert web development services in Nepal. We build cutting-edge web applications using Next.js, React, and modern technologies. Get your free consultation today.",
  openGraph: {
    title: "Sajilo Digital - Transform Your Digital Presence",
    description:
      "Expert web development services for modern businesses. Custom web applications, e-commerce solutions, and digital transformation in Nepal.",
    url: "https://sajilodigital.com.np",
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital Home",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np",
  },
};

const techStack = [
  "Next.js", "React", "TypeScript", "GSAP", "Framer Motion",
  "Tailwind CSS", "Node.js", "PostgreSQL", "AWS", "Vercel"
];

const vibes = [
  "Innovation", "Scale", "Legacy", "Future",
  "Architecture", "Performance", "Quality", "Elegance"
];

export default function HomePage() {
  return (
    <div className="relative bg-[#050505]">
      {/* Cinematic Grain Overlay */}
      <Grain />

      <HomeHero />

      <TextTicker items={techStack} speed={30} direction="left" />

      <MissionSection />

      <SystemArchitecture />

      <TextTicker items={vibes} speed={50} direction="right" />

      <NexusTerminal />

      <NexusCTA />

      {/* Additional structured data specific to home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Sajilo Digital",
            url: "https://sajilodigital.com.np",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://sajilodigital.com.np/search?q={search_term_string}",
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
            name: "Sajilo Digital Web Development",
            image: "https://sajilodigital.com.np/images/logo.png",
            "@id": "https://sajilodigital.com.np",
            url: "https://sajilodigital.com.np",
            telephone: "+977-9811420975",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Horizon Chowk",
              addressLocality: "Butwal",
              addressRegion: "Lumbini",
              postalCode: "32907",
              addressCountry: "NP",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 27.7006,
              longitude: 83.4484,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.linkedin.com/company/sajilodigital",
              "https://facebook.com/sajilodigital",
              "https://github.com/sajilodigital",
              "https://instagram.com/sajilodigital",
            ],
          }),
        }}
      />
    </div>
  );
}
