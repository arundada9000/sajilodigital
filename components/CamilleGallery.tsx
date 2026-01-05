"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMediaQuery } from "../src/hooks/useMediaQuery";

const projects = [
    {
        id: 1,
        title: "HIMALAYAN",
        subtitle: "GOODS",
        category: "E-COMMERCE",
        image: "/projects/image1.png",
        link: "/projects/ecommerce-platform-himalayan-goods",
    },
    {
        id: 2,
        title: "FITLIFE",
        subtitle: "TRACKING",
        category: "MOBILE APP",
        image: "/projects/image3.png",
        link: "/projects/fitlife-fitness-tracking-app",
    },
    {
        id: 3,
        title: "HERITAGE",
        subtitle: "HOTELS",
        category: "WEB APP",
        image: "/projects/image2.png",
        link: "/projects/heritage-hotel-booking-system",
    },
    {
        id: 4,
        title: "EDUTECH",
        subtitle: "LEARNING",
        category: "WEB APP",
        image: "/projects/image1.png",
        link: "/projects/edutech-learning-management-system",
    },
    {
        id: 5,
        title: "TECHVISION",
        subtitle: "CORPORATE",
        category: "CORPORATE",
        image: "/projects/image2.png",
        link: "/projects/techvision-corporate-website",
    },
    {
        id: 6,
        title: "ORGANIC",
        subtitle: "HARVEST",
        category: "E-COMMERCE",
        image: "/projects/image1.png",
        link: "/projects/organic-harvest-marketplace",
    },
];

const CamilleGallery = () => {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Horizontal movement for desktop: From 0 to -80% (depending on projects)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
    const smoothX = useSpring(x, { damping: 20, stiffness: 100, mass: 0.5 });

    if (isMobile) {
        return (
            <div className="bg-[#050505] text-white min-h-screen pt-24 px-6 overflow-x-hidden">
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-[10px] tracking-[0.5em] text-blue-500 mb-4">GALLERY / 24</p>
                        <h1 className="text-6xl font-bold tracking-tighter leading-none">
                            CURATED <br />
                            <span className="italic font-light opacity-50">WORKS.</span>
                        </h1>
                    </motion.div>
                </header>

                <div className="flex flex-col gap-32 pb-40">
                    {projects.map((project, index) => (
                        <MobileGalleryItem key={project.id} project={project} index={index} />
                    ))}
                </div>

                <footer className="h-screen flex items-center justify-center border-t border-white/5">
                    <Link href="/contact" className="text-center group">
                        <span className="text-[10px] tracking-[0.6em] text-gray-500 block mb-6">NEXT STEP</span>
                        <h2 className="text-5xl font-bold tracking-tighter group-hover:italic transition-all">LET'S TALK</h2>
                    </Link>
                </footer>
            </div>
        );
    }

    return (
        <section ref={targetRef} className="relative h-[800vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                {/* Massive Animated Background Background Text */}
                <motion.div
                    style={{ x: useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]) }}
                    className="absolute inset-0 flex items-center whitespace-nowrap opacity-[0.02] pointer-events-none select-none z-0"
                >
                    <span className="text-[40vw] font-bold tracking-tighter uppercase mr-20">SAJILO DIGITAL</span>
                    <span className="text-[40vw] font-bold tracking-tighter uppercase mr-20">OUR GALLERY</span>
                </motion.div>

                <motion.div style={{ x: smoothX }} className="flex gap-[15vw] pl-[10vw]">
                    {/* Intro Slide */}
                    <div className="w-[80vw] shrink-0 flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs tracking-[0.6em] text-gray-500 mb-10"
                        >
                            SCROLL TO EXPLORE — SELECTED PROJECTS 23/24
                        </motion.p>
                        <h1 className="text-[15vw] font-bold tracking-tighter leading-[0.8]">
                            PORTFOLIO <br />
                            <span className="italic font-light opacity-40">HIGHLIGHTS.</span>
                        </h1>
                    </div>

                    {projects.map((project, index) => (
                        <DesktopGalleryItem key={project.id} project={project} index={index} progress={scrollYProgress} />
                    ))}

                    {/* Final Slide */}
                    <div className="w-[100vw] shrink-0 flex items-center justify-center">
                        <Link href="/contact" className="group">
                            <h2 className="text-[12vw] font-bold tracking-tighter group-hover:italic transition-all duration-700">LET'S WORK</h2>
                            <div className="flex items-center gap-10 mt-10 overflow-hidden">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="h-px w-full bg-white/20"
                                />
                                <span className="text-[10px] tracking-[0.6em] whitespace-nowrap">START A PROJECT</span>
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="h-px w-full bg-white/20"
                                />
                            </div>
                        </Link>
                    </div>
                </motion.div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-20 left-20 flex items-center gap-6">
                    <div className="h-px w-20 bg-white/20 relative overflow-hidden">
                        <motion.div
                            style={{ scaleX: scrollYProgress }}
                            className="absolute inset-0 bg-blue-500 origin-left"
                        />
                    </div>
                    <span className="text-[10px] tracking-widest text-gray-500 font-mono">
                        {Math.floor(useTransform(scrollYProgress, [0, 1], [1, 100]).get())}%
                    </span>
                </div>
            </div>
        </section>
    );
};

const DesktopGalleryItem = ({ project, index, progress }: { project: any; index: number, progress: any }) => {
    // Parallax for text within the slide
    const textX = useTransform(progress, [0, 1], [0, index * -150]);

    return (
        <div className="w-[90vw] shrink-0 relative flex items-center justify-center group">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[50vw] aspect-[1.4/1] overflow-hidden"
            >
                <Link href={project.link}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                </Link>
            </motion.div>

            {/* Overlapping Text */}
            <motion.div
                style={{ x: textX }}
                className="absolute left-0 z-10 pointer-events-none"
            >
                <h2 className="text-[12vw] font-bold tracking-tighter leading-none mix-blend-difference text-white uppercase transform -translate-y-1/2">
                    {project.title} <br />
                    <span className="italic font-light ml-[15vw]">{project.subtitle}</span>
                </h2>
                <div className="flex items-center gap-6 mt-10">
                    <span className="text-[10px] font-mono text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px w-10 bg-white/20" />
                    <span className="text-[10px] tracking-[0.4em] text-gray-400">{project.category}</span>
                </div>
            </motion.div>
        </div>
    );
};

const MobileGalleryItem = ({ project, index }: { project: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col"
        >
            <div className="relative w-full aspect-[4/5] mb-10 overflow-hidden">
                <Link href={project.link}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale brightness-75"
                    />
                </Link>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-blue-500">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">{project.category}</span>
                </div>
                <h2 className="text-5xl font-bold tracking-tighter leading-none">
                    {project.title} <br />
                    <span className="italic font-light opacity-60 text-4xl">{project.subtitle}</span>
                </h2>
                <Link href={project.link} className="inline-block pt-6 border-b border-white/20 text-[10px] tracking-[0.2em] font-medium hover:border-white transition-all">
                    VIEW PROJECT
                </Link>
            </div>
        </motion.div>
    );
};

export default CamilleGallery;
