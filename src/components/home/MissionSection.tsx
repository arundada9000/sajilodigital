"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden py-40"
        >
            {/* Background Decorative Element */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/5" />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 container-custom px-6 text-center"
            >
                <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.8em] text-blue-500 mb-12 block">
                    Our Philosophy
                </h2>

                <p className="text-4xl md:text-8xl font-black italic tracking-tighter leading-tight text-white uppercase max-w-6xl mx-auto">
                    Architecting the
                    <span className="text-white/20 block">future legacy</span>
                    of digital identity
                    <span className="text-blue-500 italic block">at scale.</span>
                </p>

                <div className="mt-20 flex justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                        <span className="text-blue-500 text-sm">↓</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
