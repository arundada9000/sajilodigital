"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5" />

            <div className="container-custom relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Ready to see your project <br />
                    <span className="text-blue-400">come to life?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Stop guessing. Start building with a team that values transparency as much as code quality.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700"
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-foreground transition-all duration-200 bg-transparent border border-border/20 rounded-full hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border/20"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
