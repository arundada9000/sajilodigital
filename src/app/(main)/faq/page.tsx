import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Sajilo Digital",
  description:
    "Find answers to common questions about Sajilo Digital's web development services, project process, pricing, and technical expertise. Your guide to building a digital legacy.",
  openGraph: {
    title: "Sajilo Digital FAQ - Knowledge Hub",
    description:
      "Everything you need to know about partnering with Sajilo Digital for your next digital project.",
    url: "https://sajilodigital.com.np/faq",
    images: [
      {
        url: "/images/faq-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital FAQ",
      },
    ],
  },
  alternates: {
    canonical: "https://sajilodigital.com.np/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQClient />
      {/* FAQ Schema is handled in the layouts or can be added here if needed specifically for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes Sajilo Digital different from other agencies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We transcend beyond mere development. We are architects of digital legacy. Our approach combines high-end aesthetic design with mission-critical technical architecture, ensuring your digital presence is not just beautiful, but built to scale and dominate your market.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer custom software development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Abolutely. We specialize in bespoke software solutions tailored to complex business requirements. From high-performance web applications and mobile ecosystems to enterprise-grade automation tools, we build it all from the ground up.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical project take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Excellence takes time, but efficiency is our hallmark. A flagship web platform typically spans 6-12 weeks, while more complex enterprise systems may require 3-6 months. We operate in high-velocity sprints to ensure continuous delivery.",
                },
              },
              {
                "@type": "Question",
                name: "What are your pricing models?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer three primary engagement models: Strategic Packages (fixed-scope), Dedicated Teams (monthly retainer), and Bespoke Ecosystems (custom quotes). Each is designed to provide maximum value based on your project's lifecycle stage.",
                },
              },
              {
                "@type": "Question",
                name: "What technologies do you specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are masters of the modern web stack. Our core expertise lies in Next.js, React, TypeScript, Node.js, and Cloud Architecture (AWS/GCP). We prioritize technologies that offer the best performance, security, and developer experience.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
