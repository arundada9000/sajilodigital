"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function NexusCTA() {
    return (
        <section className="relative py-40 md:py-60 px-6 text-center overflow-hidden bg-black">
            {/* Background Cinematic Lines - Persistent across the scroll */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -rotate-12" />
            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 rotate-6" />

            <div className="relative z-10 container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl md:text-[140px] font-black italic uppercase leading-none mb-12 tracking-tighter text-white">
                        Ready to <br />
                        <span className="text-white/20">Scale the Abyss?</span>
                    </h2>

                    <div className="flex justify-center mt-20">
                        <Magnetic strength={0.2}>
                            <Link href="/contact" className="group">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-black px-12 md:px-20 py-8 md:py-10 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.5em] shadow-2xl shadow-blue-500/20 transition-all flex items-center gap-4 group-hover:bg-blue-600 group-hover:text-white"
                                >
                                    Initiate Sync <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </motion.button>
                            </Link>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Gradient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none" />
        </section>
    );
}
