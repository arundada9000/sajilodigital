"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";
import { PricingTier } from "@/src/data/pricingData";

interface DynamicPricingCardProps {
    tier: PricingTier;
    accentColor: string;
    gradientColor: string;
    index: number;
    isTransitioning: boolean;
}

export default function DynamicPricingCard({
    tier,
    accentColor,
    gradientColor,
    index,
    isTransitioning,
}: DynamicPricingCardProps) {
    const isPopular = tier.popular;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={`${tier.plan}-${tier.price}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative p-6 md:p-8 rounded-3xl border transition-all duration-500 ${isPopular
                        ? "bg-white/[0.04] border-purple-500/50 shadow-[0_0_40px_-15px_rgba(168,85,247,0.3)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                }}
            >
                {/* Popular Badge */}
                {isPopular && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-white/20 shadow-lg flex items-center gap-1.5"
                    >
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                    </motion.div>
                )}

                {/* Glow Effect */}
                {isPopular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradientColor} bg-opacity-20 backdrop-blur-sm`}>
                            {isPopular ? (
                                <Star className="w-6 h-6 text-white fill-white" />
                            ) : (
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            )}
                        </div>
                        {tier.duration && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                            >
                                {tier.duration}
                            </motion.div>
                        )}
                    </div>

                    {/* Plan Name */}
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300"
                    >
                        {tier.plan}
                    </motion.h3>

                    {/* Price */}
                    <div className="mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tier.price}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-baseline space-x-1"
                            >
                                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                    {tier.price}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    {/* Features */}
                    <ul className="space-y-4 mb-10 min-h-[240px]">
                        <AnimatePresence mode="wait">
                            {tier.features.map((feature, i) => (
                                <motion.li
                                    key={`${tier.plan}-${feature}-${i}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i * 0.05,
                                    }}
                                    className="flex items-start space-x-3 text-sm text-gray-300"
                                >
                                    <CheckCircle2
                                        className="w-4 h-4 shrink-0 mt-0.5"
                                        style={{ color: accentColor }}
                                    />
                                    <span className="group-hover:text-white transition-colors duration-300">
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className={`group/cta flex items-center justify-center space-x-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${isPopular
                                ? "bg-white text-black hover:bg-gray-200"
                                : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                            }`}
                    >
                        {/* Button background animation */}
                        <motion.div
                            className={`absolute inset-0 ${isPopular
                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/cta:opacity-20"
                                    : "bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover/cta:opacity-100"
                                } transition-opacity duration-300`}
                        />

                        <span className="relative z-10">Get Started</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Ambient Border Glow */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 100%)`,
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
