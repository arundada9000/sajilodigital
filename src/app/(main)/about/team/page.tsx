import type { Metadata } from "next";
import TeamClient from "./TeamClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Our Team | Sajilo Digital",
  description:
    "Meet the visionary builders behind Sajilo Digital. Our team of expert developers and designers in Nepal is dedicated to crafting mission-critical digital experiences.",
  openGraph: {
    title: "Sajilo Digital Team - The Architects of Innovation",
    description:
      "Get to know the experts driving digital transformation at Sajilo Digital Pvt. Ltd.",
    url: "https://sajilodigital.com.np/about/team",
    images: [
      {
        url: "/images/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital Team",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/about/team",
  },
};

const leaders = [
  {
    name: "Bal Gobind Chaudhary",
    role: "CEO & Founder",
    image: "https://sajilodigital.com.np/team/bal.jpg",
    description: "Founder focusing on product strategy, partnerships, and company growth.",
  },
  {
    name: "Pramod Tharu",
    role: "Chairperson",
    image: "https://sajilodigital.com.np/team/pramod.jpg",
    description: "Chairperson and Full Stack Developer expert.",
  },
  {
    name: "Arun Neupane",
    role: "CTO",
    image: "https://sajilodigital.com.np/team/Arun.png",
    description: "Chief Technology Officer building scalable web experiences.",
  }
];

export default function TeamPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-[#0b0f19]" />}>
        <TeamClient />
      </Suspense>
      {/* Team Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Meet the Sajilo Digital Team",
            description: "Profiles of the leadership and development team at Sajilo Digital Pvt. Ltd.",
            url: "https://sajilodigital.com.np/about/team",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: leaders.map((leader, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Person",
                  name: leader.name,
                  jobTitle: leader.role,
                  image: leader.image,
                  description: leader.description,
                  worksFor: {
                    "@type": "Organization",
                    name: "Sajilo Digital Pvt. Ltd.",
                    url: "https://sajilodigital.com.np"
                  }
                }
              }))
            }
          }),
        }}
      />
    </>
  );
}
