"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Search,
  ShoppingCart,
  BarChart,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    icon: Code2,
    title: "Web Ecosystems",
    tag: "Core Engine",
    description:
      "Architecting scalable full-stack applications with sub-second latency.",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Interface",
    tag: "Edge Device",
    description:
      "Developing cross-platform experiences that feel native to the core.",
    link: "/services/app-development",
  },
  {
    icon: Palette,
    title: "Neural UX/UI",
    tag: "Perception",
    description:
      "Designing human-centric interfaces optimized for subconscious flow.",
    link: "/services/ui-ux-design",
  },
  {
    icon: Search,
    title: "Index Mastery",
    tag: "Visibility",
    description:
      "Dominating search rankings through algorithmic precision and optimization.",
    link: "/services/seo",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Logic",
    tag: "Transaction",
    description:
      "Building frictionless global storefronts that maximize conversion throughput.",
    link: "/services/web-development",
  },
  {
    icon: BarChart,
    title: "Market Intelligence",
    tag: "Scale",
    description:
      "Data-driven marketing strategies to amplify brand signal globally.",
    link: "/services/digital-marketing",
  },
];

export default function SystemArchitecture() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-40 bg-background overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />

      {/* Neural Connections Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="neural-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10 20 Q 50 10 90 20 T 90 80 Q 50 90 10 80 T 10 20"
            fill="none"
            stroke="url(#neural-gradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 20 10 Q 10 50 20 90 T 80 90 Q 90 50 80 10 T 20 10"
            fill="none"
            stroke="url(#neural-gradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
        </svg>
      </div>

      <div className="container-custom px-6 relative z-10">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] items-center gap-2 font-black uppercase tracking-[0.8em] text-muted-foreground mb-8 flex"
          >
            <span className="w-12 h-px bg-foreground/20" />
            System Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-foreground"
          >
            Architecture of <br />
            <span className="text-blue-500">Excellence.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 overflow-hidden rounded-[2rem]">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <Link
                href={module.link}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-surface-alt p-12 hover:bg-accent h-full transition-all duration-500 overflow-hidden block"
              >
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-12 h-12 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-foreground group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                        <module.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground/40 transition-colors">
                        {module.tag}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black italic uppercase tracking-tighter text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {module.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm max-w-[240px] group-hover:text-foreground/60 transition-colors duration-500">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-12 flex justify-between items-end">
                    <span className="text-xs font-mono text-muted-foreground/30">
                      MOD-{index + 101}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-transparent group-hover:text-blue-600 transition-all duration-500 group-hover:rotate-45" />
                  </div>
                </div>

                {/* Data Flow Animation on Hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500 to-transparent animate-shimmer" />
                    <div
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500 to-transparent animate-shimmer"
                      style={{ animationDirection: "reverse" }}
                    />
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-linear-to-b from-transparent via-blue-500 to-transparent animate-shimmer-v" />
                    <div
                      className="absolute right-0 top-0 w-[1px] h-full bg-linear-to-b from-transparent via-blue-500 to-transparent animate-shimmer-v"
                      style={{ animationDirection: "reverse" }}
                    />
                  </motion.div>
                )}

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%) opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
