"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
    const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const text = "Architecting the future legacy of digital identity at scale.";
    const words = text.split(" ");

    return (
        <section
            ref={containerRef}
            className="relative min-h-[120vh] flex items-center justify-center bg-[#050505] overflow-hidden py-40"
        >
            {/* Background Decorative Element with Parallax */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/5" />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 container-custom px-6 text-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] md:text-xs font-black uppercase tracking-[0.8em] text-blue-500 mb-12 block"
                >
                    Our Philosophy
                </motion.h2>

                <div className="text-4xl md:text-8xl font-black italic tracking-tighter leading-tight text-white uppercase max-w-6xl mx-auto flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: -45 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.05,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                            className={i >= 2 && i <= 3 ? "text-white/20" : i >= 7 ? "text-blue-500 italic" : "text-white"}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                        <span className="text-blue-500 text-sm">↓</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
