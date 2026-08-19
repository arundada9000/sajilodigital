import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { Suspense } from "react";
import { faqCategories } from "../../../data/faq";

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
  // Flatten all FAQs from all categories for the schema
  const allFaqs = faqCategories.flatMap(category => category.faqs);

  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
        <FAQClient />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
