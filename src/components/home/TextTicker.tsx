"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextTickerProps {
    items: string[];
    speed?: number;
    direction?: "left" | "right";
}

export default function TextTicker({ items, speed = 40, direction = "left" }: TextTickerProps) {
    // Duplicate items to ensure seamless loop
    const content = [...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden bg-foreground/5 border-y border-foreground/10 py-8 backdrop-blur-sm">
            <motion.div
                className="flex whitespace-nowrap gap-16"
                animate={{
                    x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {content.map((item, index) => (
                    <span
                        key={index}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-muted-foreground/40 hover:text-cyan-500 transition-colors duration-500 cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
