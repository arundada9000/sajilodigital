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
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const modules = [
    {
        icon: Code2,
        title: "Web Ecosystems",
        tag: "Core Engine",
        description: "Architecting scalable full-stack applications with sub-second latency.",
        link: "/services/web-development"
    },
    {
        icon: Smartphone,
        title: "Mobile Interface",
        tag: "Edge Device",
        description: "Developing cross-platform experiences that feel native to the core.",
        link: "/services/mobile-app-development"
    },
    {
        icon: Palette,
        title: "Neural UX/UI",
        tag: "Perception",
        description: "Designing human-centric interfaces optimized for subconscious flow.",
        link: "/services/ui-ux-design"
    },
    {
        icon: Search,
        title: "Index Mastery",
        tag: "Visibility",
        description: "Dominating search rankings through algorithmic precision and optimization.",
        link: "/services/seo-optimization"
    },
    {
        icon: ShoppingCart,
        title: "Commerce Logic",
        tag: "Transaction",
        description: "Building frictionless global storefronts that maximize conversion throughput.",
        link: "/services/e-commerce-solutions"
    },
    {
        icon: BarChart,
        title: "Market Intelligence",
        tag: "Scale",
        description: "Data-driven marketing strategies to amplify brand signal globally.",
        link: "/services/digital-marketing"
    }
];

export default function SystemArchitecture() {
    return (
        <section className="relative py-40 bg-[#050505] overflow-hidden">
            {/* Background Grid Lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-custom px-6">
                <div className="mb-24">
                    <h2 className="text-[10px] items-center gap-2 font-black uppercase tracking-[0.8em] text-white/40 mb-8 flex">
                        <span className="w-12 h-px bg-white/20" />
                        System Capabilities
                    </h2>
                    <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
                        Architecture of <br />
                        <span className="text-blue-500">Excellence.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-[2rem]">
                    {modules.map((module, index) => (
                        <Link
                            key={index}
                            href={module.link}
                            className="group relative bg-[#0a0a0a] p-12 hover:bg-[#0f0f0f] transition-colors duration-500"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                                <div>
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            <module.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                                            {module.tag}
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                        {module.title}
                                    </h4>
                                    <p className="text-white/40 leading-relaxed text-sm max-w-[240px] group-hover:text-white/60 transition-colors duration-500">
                                        {module.description}
                                    </p>
                                </div>

                                <div className="mt-12 flex justify-between items-end">
                                    <span className="text-xs font-mono text-white/10">MOD-{index + 101}</span>
                                    <ArrowUpRight className="w-6 h-6 text-white/0 group-hover:text-blue-600 transition-all duration-500 group-hover:rotate-45" />
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%) opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
