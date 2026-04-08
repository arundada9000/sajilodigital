"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Maximize2, Grid as GridIcon, Home } from "lucide-react";
import { galleryData, GalleryItem } from "@/src/data/gallery";

const SLIDE_VARIANTS: any = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 1.1,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: { duration: 0.8, ease: "circOut" },
            opacity: { duration: 0.5 },
        },
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.9,
        transition: {
            x: { duration: 0.8, ease: "circOut" },
            opacity: { duration: 0.5 },
        },
    }),
};

interface GalleryV3Props {
    showAbout: boolean;
    setShowAbout: (val: boolean) => void;
}

export default function GalleryV3({ showAbout, setShowAbout }: GalleryV3Props) {
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<"grid" | "slider">("grid");
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [showDetails, setShowDetails] = useState(false);

    // Entrance animation logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            // Wait for grid to settle, then zoom central image
            setTimeout(() => {
                handleSelect(0);
            }, 3500);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleSelect = (index: number) => {
        setDirection(1);
        setActiveIndex(index);
        setView("slider");
    };

    const nextSlide = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % galleryData.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    }, []);

    // Keyboard support & Wheel zoom support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (view === "slider") {
                if (e.key === "ArrowRight") nextSlide();
                if (e.key === "ArrowLeft") prevSlide();
                if (e.key === "Escape") setView("grid");
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (view === "slider" && !showDetails && !showAbout) {
                if (e.deltaY < -100) setView("grid");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [view, nextSlide, prevSlide, showDetails, showAbout]);

    return (
        <div className="fixed inset-0 w-full h-screen bg-[#000] text-white overflow-hidden selection:bg-white selection:text-black z-[100]">
            {/* 1. Loading State */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
                    >
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%", maxWidth: "300px" }} className="h-[1px] bg-white/20 relative">
                            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0 bg-white origin-left" />
                        </motion.div>
                        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 text-[10px] tracking-[0.8em] font-light text-gray-400 uppercase">
                            Initializing Archive
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Background Grid View */}
            <div className={`relative w-full h-full transition-all duration-[1.5s] ease-[cubic-bezier(0.76,0,0.24,1)] ${view === "slider" ? "scale-[1.2] blur-3xl opacity-0" : "scale-100 blur-0 opacity-100"}`}>
                {/* Header overlay — not scrolled away */}
                <div className="absolute top-10 left-10 pointer-events-none z-10">
                    <span className="text-[10px] tracking-[0.5em] text-blue-500 font-bold block mb-2">CURATED ARCHIVE</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none italic">Sajilo.Digital</h1>
                </div>
                {/* Scrollable grid — full height, proper padding so header doesn't overlap */}
                <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-6 md:p-12 pt-36 md:pt-40">
                        {galleryData.map((project, idx) => (
                            <GridItem key={project.id} project={project} index={idx} onClick={() => handleSelect(idx)} />
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Fullscreen Slider View */}
            <AnimatePresence initial={false} custom={direction}>
                {view === "slider" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
                        <SliderContent
                            activeProject={galleryData[activeIndex]}
                            direction={direction}
                            onBack={() => setView("grid")}
                            onNext={nextSlide}
                            onPrev={prevSlide}
                            showDetails={showDetails}
                            toggleDetails={() => setShowDetails(!showDetails)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 4. Gallery About View */}
            <AnimatePresence>
                {showAbout && (
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-12">
                        <div className="max-w-4xl text-center">
                            <button onClick={() => setShowAbout(false)} className="absolute top-10 right-10 text-gray-500 hover:text-white flex items-center gap-2 text-[10px] tracking-[0.5em]">
                                <X size={16} /> CLOSE
                            </button>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-500 text-[10px] tracking-[1em] font-bold block mb-8 uppercase">Artistic Perspective</motion.span>
                            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-12 italic">Visual Storytelling At Its Peak.</h2>
                            <div className="grid md:grid-cols-2 gap-12 text-left">
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-400 text-lg leading-relaxed"
                                >
                                    This gallery is a digital manifestation of our creative philosophy. We believe that pixels should do more than just display; they should emote, react, and inspire.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-gray-500 text-lg leading-relaxed italic border-l border-white/10 pl-8"
                                >
                                    "Every project in this archive represents a hurdle cleared, a boundary pushed, and a new standard of digital excellence defined."
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Persistent UI Overlay */}
            <div className="fixed top-10 right-10 z-[110] flex items-center gap-6">
                <button onClick={() => setShowAbout(true)} className="text-[10px] tracking-[0.5em] text-white/40 hover:text-white transition-colors uppercase font-bold">About Gallery</button>
                <button onClick={() => setView(view === "grid" ? "slider" : "grid")} className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group">
                    {view === "grid" ? <Maximize2 size={16} /> : <GridIcon size={16} />}
                </button>
                <Link href="/" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group" title="Back to Home">
                    <Home size={16} />
                </Link>
            </div>
        </div>
    );
}

function GridItem({ project, index, onClick }: { project: GalleryItem; index: number; onClick: () => void }) {
    // Explicit sliding directions for entrance
    const getInitial = () => {
        switch (index % 4) {
            case 0: return { y: -500, x: 0, opacity: 0, scale: 0.8 }; // From Top
            case 1: return { y: 500, x: 0, opacity: 0, scale: 0.8 };  // From Bottom
            case 2: return { x: -500, y: 0, opacity: 0, scale: 0.8 }; // From Left
            case 3: return { x: 500, y: 0, opacity: 0, scale: 0.8 };  // From Right
            default: return { opacity: 0 };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
            onClick={onClick}
            className="relative aspect-[3/4] bg-white/5 overflow-hidden cursor-pointer group rounded-lg"
        >
            <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-[0.3em] font-bold text-blue-400 mb-2 uppercase">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-none italic">{project.title}</h3>
            </div>
        </motion.div>
    );
}

function SliderContent({ activeProject, direction, onBack, onNext, onPrev, showDetails, toggleDetails }: any) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={activeProject.id}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Transition Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6">
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-none mix-blend-difference text-white text-center uppercase italic"
                        >
                            {activeProject.title}
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.6 }} className="text-[10px] md:text-xs tracking-[1em] uppercase font-light mt-4">
                            {activeProject.subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation UI */}
            <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 pointer-events-none z-[60]">
                <button onClick={onPrev} className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group pointer-events-auto">
                    <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={onNext} className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group pointer-events-auto">
                    <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Open Details Layer */}
            <div onClick={toggleDetails} className="absolute inset-0 cursor-pointer z-40" />

            {/* Details Side Panel */}
            <AnimatePresence>
                {showDetails && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleDetails} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]" />
                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-black border-l border-white/10 z-[90] p-12 overflow-y-auto custom-scrollbar">
                            <button onClick={toggleDetails} className="mb-16 text-gray-500 hover:text-white flex items-center gap-2 text-[10px] tracking-[0.5em] font-bold">
                                <X size={16} /> CLOSE
                            </button>
                            <h3 className="text-6xl font-bold tracking-tighter leading-none mb-12 uppercase italic">{activeProject.title}</h3>
                            <div className="space-y-12">
                                <p className="text-gray-400 text-lg leading-relaxed">{activeProject.description}</p>
                                <div className="grid grid-cols-2 gap-12 py-12 border-y border-white/5">
                                    <div>
                                        <span className="text-[10px] text-gray-600 block mb-2 uppercase tracking-[0.3em] font-bold">Client</span>
                                        <span className="text-sm">{activeProject.details.client}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-gray-600 block mb-2 uppercase tracking-[0.3em] font-bold">Year</span>
                                        <span className="text-sm">{activeProject.year}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[10px] text-gray-600 block mb-6 uppercase tracking-[0.3em] font-bold">Expertise</span>
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.details.services.map((s: string) => (
                                            <span key={s} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] rounded-full uppercase font-bold tracking-wider">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="absolute bottom-10 right-10 z-[60] flex items-center gap-6">
                <button onClick={onBack} className="text-[10px] tracking-[0.5em] text-white/40 hover:text-white transition-colors uppercase font-bold">Back to Archive</button>
                <Link href="/" className="flex items-center gap-2 text-[10px] tracking-[0.5em] text-white/40 hover:text-white transition-colors uppercase font-bold">
                    <Home size={12} /> Home
                </Link>
            </div>
        </div>
    );
}
