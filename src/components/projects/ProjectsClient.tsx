"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    motion,
    useSpring,
    useMotionValue,
    AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Grain from "../ui/Grain";

interface Project {
    slug: string;
    title: string;
    category: string;
    year: string;
    image: string;
}

interface ProjectsClientProps {
    initialProjects: Project[];
    categories: string[];
}

export default function ProjectsClient({
    initialProjects,
    categories,
}: ProjectsClientProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    // Mouse Position for Follower
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the image follower
    const springConfig = { damping: 25, stiffness: 150 };
    const imageX = useSpring(mouseX, springConfig);
    const imageY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const filteredProjects = initialProjects.filter((project) => {
        return activeCategory === "All" || project.category === activeCategory;
    });

    return (
        <div className="bg-surface-deep text-foreground min-h-screen selection:bg-blue-500/30 font-sans overflow-x-hidden">
            <Grain opacity={0.03} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-12">
                            OUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white italic">
                                HIGHLIGHTS.
                            </span>
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                            <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
                                A selection of digital experiences we&apos;ve crafted for brands
                                that dare to be different. Each project is a testament to our
                                commitment to excellence.
                            </p>

                        </div>
                        {/* Digital Matrix Filter */}
                        <div className="mt-12 border-y border-border py-6">
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`relative px-6 py-2 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 border border-transparent overflow-hidden group ${activeCategory === cat
                                            ? "text-background bg-foreground shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                                            : "text-muted-foreground hover:text-foreground hover:border-border hover:bg-surface-elevated"
                                            }`}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {activeCategory === cat && (
                                                <span className="w-1.5 h-1.5 bg-blue-500 animate-pulse" />
                                            )}
                                            {cat}
                                        </span>
                                        {activeCategory === cat && (
                                            <div className="absolute inset-0 bg-foreground" />
                                        )}
                                        <div className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="pb-40 relative px-6">
                <div className="container-custom">
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col border-t border-border"
                            >
                                {filteredProjects.map((project, index) => (
                                    <ProjectItem
                                        key={project.slug}
                                        project={project}
                                        index={index}
                                        onHover={() => setHoveredProject(project.slug)}
                                        onLeave={() => setHoveredProject(null)}
                                    />
                                ))}
                                {filteredProjects.length === 0 && (
                                    <div className="py-20 text-center text-muted-foreground font-mono text-sm uppercase tracking-widest">
                                        [NO_DATA_FOUND_IN_SECTOR]
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Image Follower Overlay (Hidden on Mobile) */}
            <div
                className="hidden lg:block fixed pointer-events-none z-50 mix-blend-difference"
                style={{ left: 0, top: 0 }}
            >
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div
                            initial={{ scale: 0, rotate: -10, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0, rotate: 10, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                x: imageX,
                                y: imageY,
                                translateX: "-50%",
                                translateY: "-50%",
                            }}
                            className="w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl"
                        >
                            <Image
                                src={
                                    initialProjects.find((p) => p.slug === hoveredProject)?.image || ""
                                }
                                alt="Preview"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA Section */}
            <section className="py-40 bg-surface-alt">
                <div className="container-custom text-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
                            Ready to build?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center space-x-4 text-3xl md:text-5xl font-light hover:text-blue-500 transition-colors duration-500 group"
                        >
                            <span>Let&apos;s talk about yours</span>
                            <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

function ProjectItem({ project, index, onHover, onLeave }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative border-b border-border"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <Link
                href={`/projects/${project.slug}`}
                className="block py-12 md:py-20 group"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-xs text-blue-500 font-mono tracking-widest uppercase">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                                {project.category}
                            </span>
                        </div>
                        <h3 className="text-4xl md:text-7xl font-semibold tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-12 text-muted-foreground">
                        <span className="hidden lg:block text-lg font-mono">
                            {project.year}
                        </span>
                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Mobile Preview Image (visible only on mobile stack) */}
                <div className="lg:hidden mt-8 w-full aspect-[16/9] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>
        </motion.div>
    );
}
