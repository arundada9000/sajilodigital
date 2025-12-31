"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamic imports (client-side only)
const HeroSection = dynamic(
  () => import("../../components/services/HeroSection"),
  { ssr: false }
);

const MonthSection = dynamic(
  () => import("../../components/services/MonthSection"),
  { ssr: false }
);

const ProgressIndicator = dynamic(
  () => import("../../components/services/ProgressIndicator"),
  { ssr: false }
);

const CtaSection = dynamic(
  () => import("../../components/services/CtaSection"),
  { ssr: false }
);

const Footer = dynamic(() => import("../../components/services/Footer"), {
  ssr: false,
});

const NavigationButtons = dynamic(
  () => import("../../components/services/NavigationButtons"),
  { ssr: false }
);

// Import images
import featureAi from "@/components/sheeps.jpg";
import featureTranslation from "@/components/sheeps.jpg";
import featureVideo from "@/components/sheeps.jpg";
import featureAnniversary from "@/components/sheeps.jpg";
import featureGaming from "@/components/sheeps.jpg";
import featureTabs from "@/components/sheeps.jpg";
import featureSecurity from "@/components/sheeps.jpg";
import featureMemory from "@/components/sheeps.jpg";
import featureImage from "@/components/sheeps.jpg";
import featureShopping from "@/components/sheeps.jpg";
import featurePinning from "@/components/sheeps.jpg";

const monthsData = [
  {
    month: "January",
    title: "AI Assistant",
    description:
      "Our AI assistant helped millions of people create quizzes, podcasts, images, and more via chat and voice.",
    highlightText: "helped millions of people",
    image: featureAi,
    accentColor: "primary" as const,
  },
  {
    month: "February",
    title: "Translation",
    description:
      "We helped people consume content across the world in their preferred language— translating nearly 70 trillion characters this year!",
    highlightText: "translating nearly 70 trillion characters",
    image: featureTranslation,
    accentColor: "secondary" as const,
  },
  {
    month: "March",
    title: "Video Summary",
    description:
      "In March, we launched video summaries to make content easier to digest and save valuable time.",
    highlightText: "we launched video summaries",
    image: featureVideo,
    accentColor: "accent" as const,
  },
  {
    month: "April",
    title: "50th Anniversary",
    description:
      "In April, we celebrated 50 years of innovation and 10 years of our platform with new custom themes and celebratory experiences.",
    highlightText: "we celebrated 50 years",
    image: featureAnniversary,
    accentColor: "primary" as const,
  },
  {
    month: "May",
    title: "Game Assist",
    description:
      "Our Game Assist, the first in-game browser built for PC gaming, launched in May so players can browse, access guides and chat with friends without leaving their game.",
    highlightText: "the first in-game browser built for PC gaming",
    image: featureGaming,
    accentColor: "secondary" as const,
  },
  {
    month: "June",
    title: "Streaming",
    description:
      "We made it easier to stream nearly 2 billion hours of content each month with built‑in features like Media control center, Picture‑in‑picture, and more.",
    highlightText: "nearly 2 billion hours of content each month",
    image: featureVideo,
    accentColor: "accent" as const,
  },
  {
    month: "July",
    title: "Tab Management",
    description:
      "In July, we helped keep people effortlessly organized with tab management features— grouping over 1.6 billion tabs in 2025.",
    highlightText: "grouping over 1.6 billion tabs",
    image: featureTabs,
    accentColor: "primary" as const,
  },
  {
    month: "August",
    title: "Scareware Blocker",
    description:
      "We launched Scareware blocker to help keep users safe from online threats and malicious content.",
    highlightText: "help keep users safe from online threats",
    image: featureSecurity,
    accentColor: "secondary" as const,
  },
  {
    month: "September",
    title: "Memory Savings",
    description:
      "Memory-saving features boosted performance— saving over 7 trillion megabytes via Sleeping Tabs for millions worldwide.",
    highlightText: "saving over 7 trillion megabytes",
    image: featureMemory,
    accentColor: "accent" as const,
  },
  {
    month: "October",
    title: "Image Generation",
    description:
      "In October, we launched a new AI Image Creator empowering millions to create even more stunning, photorealistic images.",
    highlightText: "empowering millions to create",
    image: featureImage,
    accentColor: "primary" as const,
  },
  {
    month: "November",
    title: "Shopping",
    description:
      "We helped shoppers save with 3,500+ cashback offers from retailers and smart shopping tools like price comparison and history.",
    highlightText: "3,500+ cashback offers",
    image: featureShopping,
    accentColor: "secondary" as const,
  },
  {
    month: "December",
    title: "Pinning",
    description:
      "In December, we made it easier to save time with pinned sites. On average, users save 5.3 million minutes or over 10 years of time every month compared to typing.",
    highlightText: "5.3 million minutes or over 10 years",
    image: featurePinning,
    accentColor: "accent" as const,
  },
];

// Total sections: Hero (0) + 12 months (1-12) + CTA (13)
const TOTAL_SECTIONS = 14;

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= TOTAL_SECTIONS || isScrolling) return;

      setIsScrolling(true);
      setCurrentSection(index);

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    },
    [isScrolling]
  );

  const handleNext = useCallback(() => {
    scrollToSection(currentSection + 1);
  }, [currentSection, scrollToSection]);

  const handlePrevious = useCallback(() => {
    scrollToSection(currentSection - 1);
  }, [currentSection, scrollToSection]);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY > 0) {
          handleNext();
        } else if (e.deltaY < 0) {
          handlePrevious();
        }
      }, 50);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleNext, handlePrevious, isScrolling]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious]);

  // Handle touch swipe
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrevious();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleNext, handlePrevious, isScrolling]);

  const renderSection = () => {
    if (currentSection === 0) {
      return <HeroSection key="hero" onStart={handleNext} />;
    }

    if (currentSection === TOTAL_SECTIONS - 1) {
      return (
        <motion.div
          key="cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-screen flex flex-col"
        >
          <CtaSection />
          <Footer />
        </motion.div>
      );
    }

    const monthIndex = currentSection - 1;
    const monthData = monthsData[monthIndex];

    return (
      <MonthSection
        key={monthData.month}
        {...monthData}
        isReversed={monthIndex % 2 === 1}
        isActive={true}
      />
    );
  };

  return (
    <div ref={containerRef} className="bg-background h-screen overflow-hidden">
      <ProgressIndicator
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      <NavigationButtons
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Index;
