"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { services } from "../../data/services";
import Navbar from "@/src/components/layout/Navbar";

// Dynamic imports (client-side only)
const HeroSection = dynamic(
    () => import("../../components/services/HeroSection"),
    { ssr: false }
);
const ServiceSection = dynamic(
    () => import("../../components/services/ServiceSection"),
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
const Header = dynamic(() => import("../../components/layout/Header"), {
    ssr: false,
});
const MobileHeader = dynamic(() => import("../../components/layout/MobileHeader"), {
    ssr: false,
});

const TOTAL_SECTIONS = services.length + 2; // Hero + Services + Catalog

export default function ServicesClient() {
    const [currentSection, setCurrentSection] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = down, -1 = up
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToSection = useCallback(
        (index: number, scrollDirection: number = 1) => {
            if (index < 0 || index >= TOTAL_SECTIONS || isScrolling) return;

            setIsScrolling(true);
            setDirection(scrollDirection);
            setCurrentSection(index);

            // Reset scrolling state after animation
            setTimeout(() => {
                setIsScrolling(false);
            }, 1200);
        },
        [isScrolling]
    );

    const handleNext = useCallback(() => {
        scrollToSection(currentSection + 1, 1);
    }, [currentSection, scrollToSection]);

    const handlePrevious = useCallback(() => {
        scrollToSection(currentSection - 1, -1);
    }, [currentSection, scrollToSection]);

    // Handle wheel scroll with debouncing and section awareness
    useEffect(() => {
        let lastScroll = 0;
        const handleWheel = (e: WheelEvent) => {
            const now = Date.now();
            const isLastSection = currentSection === TOTAL_SECTIONS - 1;

            // If in last section, check if we should still hijack scroll
            if (isLastSection) {
                const scrollContainer = document.querySelector(".custom-scrollbar");
                if (scrollContainer) {
                    const isAtTop = scrollContainer.scrollTop === 0;
                    if (e.deltaY < -40 && isAtTop) {
                        // Scroll up to previous section
                        if (now - lastScroll < 1200) return;
                        e.preventDefault();
                        handlePrevious();
                        lastScroll = now;
                    }
                    // Otherwise let it scroll normally inside the catalog
                    return;
                }
            }

            e.preventDefault();
            if (now - lastScroll < 1200) return; // Debounce for other sections

            if (Math.abs(e.deltaY) > 40) {
                if (e.deltaY > 0) {
                    handleNext();
                } else {
                    handlePrevious();
                }
                lastScroll = now;
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [handleNext, handlePrevious, currentSection]);

    // Handle keyboard
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                handleNext();
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                handlePrevious();
            } else if (e.key === "Home") {
                scrollToSection(0, -1);
            } else if (e.key === "End") {
                scrollToSection(TOTAL_SECTIONS - 1, 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleNext, handlePrevious, scrollToSection]);

    const renderSection = (index: number) => {
        if (index === 0) {
            return <HeroSection key="hero" onStart={handleNext} />;
        }

        if (index === TOTAL_SECTIONS - 1) {
            return (
                <div
                    key="cta"
                    className="h-full flex flex-col bg-background overflow-y-auto custom-scrollbar"
                >
                    {/* Conditional Headers - Only in last section */}
                    <Header />
                    <MobileHeader />
                    <Navbar />
                    <CtaSection />
                    <Footer />
                </div>
            );
        }

        const serviceIndex = index - 1;
        const serviceData = services[serviceIndex];

        return (
            <ServiceSection
                key={serviceData.slug}
                {...serviceData}
                isReversed={serviceIndex % 2 === 1}
                isActive={currentSection === index}
            />
        );
    };

    const variants = {
        enter: (direction: number) => ({
            y: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 1.05,
        }),
        center: {
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: 1,
        },
        exit: (direction: number) => ({
            y: direction > 0 ? "-20%" : "20%",
            opacity: 0,
            scale: 0.95,
            zIndex: 0,
        }),
    };

    return (
        <div
            ref={containerRef}
            className="bg-background h-screen w-full overflow-hidden relative"
        >
            {/* Background Cinematic Grain (CSS-only) */}
            <div
                className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <ProgressIndicator
                currentSection={currentSection}
                totalSections={TOTAL_SECTIONS}
            />

            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                    key={currentSection}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {renderSection(currentSection)}
                </motion.div>
            </AnimatePresence>

            <NavigationButtons
                currentSection={currentSection}
                totalSections={TOTAL_SECTIONS}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />

            {/* Experimental: Quick Access Toggle */}
            <div className="fixed bottom-10 left-10 z-[100] hidden md:block">
                <button
                    onClick={() => scrollToSection(TOTAL_SECTIONS - 1, 1)}
                    className="flex items-center gap-4 group"
                >
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                        <span className="text-[10px] font-black">↓</span>
                    </div>
                    <span className="text-[9px] tracking-[0.4em] font-black uppercase opacity-20 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Jump to Catalog
                    </span>
                </button>
            </div>
        </div>
    );
}
