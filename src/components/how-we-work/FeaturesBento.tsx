"use client";

import { motion } from "framer-motion";
import { MessageSquare, Github, Lock, Zap, Clock, Users } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function FeaturesBento() {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1a1a1a,transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Clients Love This Process</h2>
                    <p className="text-gray-400">We've eliminated the "black box" of agency work. You're part of the team, not just a spectator.</p>
                </div>

                <div
                    onMouseMove={handleMouseMove}
                    className="group/bento grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px] relative"
                >
                    {/* Spotlight overlay shared across grid */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/bento:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`
                        }}
                    />

                    {/* Large Card: Transparency */}
                    <BentoCard
                        className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-900/10 to-purple-900/10"
                        icon={Users}
                        title="You Are Part of the Team"
                        description="Forget weekly email updates. Join our Slack channel, attend standups if you want, and see the work happen live. We treat you like a partner, not a ticket."
                    >
                        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid-pattern.svg')] bg-center mask-image-gradient" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
                    </BentoCard>

                    {/* Medium Card: Ownership */}
                    <BentoCard
                        className="bg-white/5"
                        icon={Github}
                        title="100% Code Ownership"
                        description="You own the repository. No vendor lock-in. If you want to leave (you won't), you take your code with you."
                    />

                    {/* Medium Card: Communication */}
                    <BentoCard
                        className="bg-white/5"
                        icon={MessageSquare}
                        title="Direct Dev Access"
                        description="Don't talk to a project manager who talks to a dev. Talk directly to the person building your product."
                    />
                </div>
            </div>
        </section>
    );
}

function BentoCard({ className, icon: Icon, title, description, children }: any) {
    return (
        <motion.div
            whileHover={{ scale: 0.98 }}
            className={cn(
                "relative p-8 rounded-2xl border border-white/10 overflow-hidden group flex flex-col justify-end bg-black/40 backdrop-blur-sm z-10",
                className
            )}
        >
            {/* Inner spotlight for individual cards */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {children}
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
            </div>
        </motion.div>
    )
}
