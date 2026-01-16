import { Metadata } from "next";
import ClientDashboardDemo from "@/src/components/how-we-work/ClientDashboardDemo";
import LiveProjectBuilder from "@/src/components/how-we-work/LiveProjectBuilder";
import ProcessTimeline from "@/src/components/how-we-work/ProcessTimeline";
import FeaturesBento from "@/src/components/how-we-work/FeaturesBento";
import CTA from "@/src/components/how-we-work/CTA";
import Grain from "@/src/components/ui/Grain";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Sajilo Digital",
  description:
    "Experience our transparent, real-time development process. We stream project progress directly to you, from discovery to global launch.",
  keywords: [
    "software development process",
    "transparent development",
    "live project tracking",
    "agile workflow",
    "Sajilo Digital process",
    "real-time coding",
    "tech transparency",
  ],
  openGraph: {
    title: "How We Work | Sajilo Digital",
    description:
      "Watch your software being built in real-time. Our transparent process ensures quality and zero surprises.",
    url: "https://sajilo.digital.co.np/how-we-work",
    siteName: "Sajilo Digital",
    images: [
      {
        url: "/images/how-we-work-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sajilo Digital Development Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | Sajilo Digital",
    description:
      "Experience radical transparency in software development. Watch our live workspace.",
    images: ["/images/how-we-work-og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sajilo Digital Development Process",
  description:
    "A radically transparent software development process featuring real-time workspace access for clients.",
  provider: {
    "@type": "Organization",
    name: "Sajilo Digital",
    url: "https://sajilo.digital.com.np",
  },
  serviceType: "Software Development",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Stages",
    itemListElement: [
      {
        "@type": "HowToSection",
        name: "Discovery & Strategy",
        position: 1,
        itemListElement: [
          {
            "@type": "HowToStep",
            text: "Analyzing requirements and defining project goals.",
          },
        ],
      },
      {
        "@type": "HowToSection",
        name: "Design & Prototyping",
        position: 2,
        itemListElement: [
          {
            "@type": "HowToStep",
            text: "Crafting high-fidelity UI/UX with real-time feedback.",
          },
        ],
      },
      {
        "@type": "HowToSection",
        name: "Development",
        position: 3,
        itemListElement: [
          {
            "@type": "HowToStep",
            text: "Full-stack implementation with live workspace access.",
          },
        ],
      },
      {
        "@type": "HowToSection",
        name: "QA & Launch",
        position: 4,
        itemListElement: [
          {
            "@type": "HowToStep",
            text: "Rigorous testing and global edge propagation.",
          },
        ],
      },
    ],
  },
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-0 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Grain opacity={0.03} />

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 animate-fade-in hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Radical Transparency
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight animate-slide-up leading-tight">
            Your Project, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Streaming Live
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-400 leading-relaxed animate-slide-up max-w-2xl mx-auto"
            style={{ animationDelay: "0.1s" }}
          >
            We don't just send weekly reports. We give you a window into our
            workspace. Watch your idea come to life in real-time.
          </p>
        </div>

        {/* VISUAL DEMO */}
        <div
          className="animate-slide-up mb-32"
          style={{ animationDelay: "0.2s" }}
        >
          <ClientDashboardDemo />
        </div>
      </div>

      {/* INTERACTIVE BUILDER (NEW) */}
      <div className="relative z-20 bg-[#080808] border-y border-white/5">
        <LiveProjectBuilder />
      </div>

      {/* FEATURES BENTO GRID */}
      <div className="relative z-10 bg-[#080808]/50 border-y border-white/5 backdrop-blur-sm">
        <div className="container-custom">
          <FeaturesBento />
        </div>
      </div>

      {/* PROCESS TIMELINE */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mt-32 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Concept to Launch
          </h2>
          <p className="text-gray-400">
            Our proven workflow ensures speed, quality, and no surprises.
          </p>
        </div>
        <ProcessTimeline />
      </div>

      {/* CTA */}
      <CTA />
    </main>
  );
}
