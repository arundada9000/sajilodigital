"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function NexusCTA() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [-12, -24]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [6, 12]);

    const title = "Ready to Scale the Abyss?";
    const letters = title.split("");

    return (
        <section ref={containerRef} className="relative py-40 md:py-60 px-6 text-center overflow-hidden bg-background">
            {/* Background Cinematic Lines - Parallax across the scroll */}
            <motion.div
                style={{ x: x1, rotate: rotate1 }}
                className="absolute top-1/2 left-0 w-[200%] h-[1px] bg-blue-500/20 origin-center"
            />
            <motion.div
                style={{ x: x2, rotate: rotate2 }}
                className="absolute top-1/3 left-0 w-[200%] h-[1px] bg-blue-500/20 origin-center"
            />

            <div className="relative z-10 container-custom">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-[140px] font-black italic uppercase leading-none mb-12 tracking-tighter text-foreground flex flex-wrap justify-center overflow-hidden">
                        {letters.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.02,
                                    ease: [0.33, 1, 0.68, 1]
                                }}
                                className={char === " " ? "mr-4" : i >= 15 ? "text-muted-foreground/40" : ""}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center mt-20"
                    >
                        <Magnetic strength={0.2}>
                            <Link href="/contact" className="group">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-foreground text-background px-12 md:px-20 py-8 md:py-10 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.5em] shadow-2xl shadow-blue-500/20 transition-all flex items-center gap-4 group-hover:bg-blue-600 group-hover:text-white"
                                >
                                    Initiate Sync <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </motion.button>
                            </Link>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Gradient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none" />
        </section>
    );
}
