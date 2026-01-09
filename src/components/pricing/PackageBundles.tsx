"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { packageBundles, serviceIcons, calculateBundleSavings } from "@/src/data/pricingData";

export default function PackageBundles() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-gray-400">Save More with Bundles</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                            Power-Packed
                        </span>{" "}
                        Bundles
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Pre-configured service combinations designed to accelerate your digital growth
                    </p>
                </motion.div>

                {/* Bundles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {packageBundles.map((bundle, index) => {
                        const savings = calculateBundleSavings(bundle.id);
                        return (
                            <motion.div
                                key={bundle.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -8 }}
                                className={`group relative p-6 md:p-8 rounded-3xl border transition-all duration-500 ${bundle.popular
                                        ? "bg-white/[0.04] border-purple-500/50 shadow-[0_0_40px_-15px_rgba(168,85,247,0.3)] lg:scale-105"
                                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                                    }`}
                            >
                                {/* Popular Badge */}
                                {bundle.popular && (
                                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        Best Value
                                    </div>
                                )}

                                {/* Discount Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${bundle.color} text-white`}>
                                        Save {bundle.discount}%
                                    </div>
                                    {bundle.popular && (
                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                    )}
                                </div>

                                {/* Bundle Name */}
                                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                    {bundle.name}
                                </h3>
                                <p className="text-sm text-gray-400 mb-6">{bundle.description}</p>

                                {/* Service Icons */}
                                <div className="flex items-center gap-2 mb-6 flex-wrap">
                                    {bundle.services.map((serviceId) => (
                                        <motion.div
                                            key={serviceId}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:bg-white/10 transition-colors duration-300"
                                            title={serviceId}
                                        >
                                            {serviceIcons[serviceId]}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                                {/* Pricing */}
                                <div className="mb-6">
                                    {bundle.originalPrice !== "Custom" && (
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-sm text-gray-500 line-through">
                                                {bundle.originalPrice}
                                            </span>
                                            <span className="text-xs text-green-400 font-medium">
                                                {savings.saved} off
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                        {bundle.bundlePrice}
                                    </div>
                                </div>

                                {/* Included Services List */}
                                <ul className="space-y-2 mb-6">
                                    {bundle.services.slice(0, 3).map((serviceId, i) => (
                                        <motion.li
                                            key={serviceId}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-center gap-2 text-sm text-gray-300"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                                            <span className="capitalize">{serviceId.replace(/-/g, " ")}</span>
                                        </motion.li>
                                    ))}
                                    {bundle.services.length > 3 && (
                                        <li className="text-xs text-gray-500 pl-6">
                                            +{bundle.services.length - 3} more services
                                        </li>
                                    )}
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    href={`/contact?bundle=${bundle.id}`}
                                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${bundle.popular
                                            ? "bg-white text-black hover:bg-gray-200"
                                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                                        }`}
                                >
                                    <span>Get Bundle</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>

                                {/* Glow Effect */}
                                {bundle.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-gray-400 mb-4">
                        Need a custom bundle? We'll create the perfect package for you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        Build Custom Bundle
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
