"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Grain from "../ui/Grain";
import ServiceSelector from "./ServiceSelector";
import DynamicPricingCard from "./DynamicPricingCard";
import ServiceComparisonTable from "./ServiceComparisonTable";
import PackageBundles from "./PackageBundles";
import { Button } from "@/src/components/common/Button";
import { servicePricing, getServicePricing, ServicePricing } from "@/src/data/pricingData";

export default function PricingClient() {
    const [selectedService, setSelectedService] = useState<string>("all");
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentServiceData, setCurrentServiceData] = useState<ServicePricing | null>(null);

    // Handle URL query parameters for deep linking
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const serviceParam = params.get("service");
        if (serviceParam && servicePricing.find((s) => s.id === serviceParam)) {
            setSelectedService(serviceParam);
        }
    }, []);

    // Update current service data when selection changes
    useEffect(() => {
        if (selectedService === "all") {
            setCurrentServiceData(null);
        } else {
            const serviceData = getServicePricing(selectedService);
            if (serviceData) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentServiceData(serviceData);
                    setIsTransitioning(false);
                }, 150);
            }
        }
    }, [selectedService]);

    const handleServiceChange = (serviceId: string) => {
        setSelectedService(serviceId);
        // Update URL without reload
        const url = new URL(window.location.href);
        if (serviceId === "all") {
            url.searchParams.delete("service");
        } else {
            url.searchParams.set("service", serviceId);
        }
        window.history.pushState({}, "", url);
    };

    // Get display data based on selection
    const displayData = currentServiceData || servicePricing[0]; // Default to first service
    const showAllServices = selectedService === "all";

    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-purple-500/30 relative">
            <Grain opacity={0.03} />

            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-pink-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
                            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-gray-400">Transparent Pricing</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                            Pricing tailored for{" "}
                            <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                every digital goal
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Choose from our comprehensive services or bundles. Transparent pricing, no hidden fees, just pure innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Selector */}
            <section className="relative pb-8">
                <div className="container-custom">
                    <ServiceSelector
                        selectedService={selectedService}
                        onServiceChange={handleServiceChange}
                    />
                </div>
            </section>

            {/* All Services Overview */}
            {showAllServices && (
                <section className="pb-20 md:pb-32">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12 md:mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                All Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Explore our complete range of digital services. Click on any service to see detailed pricing.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {servicePricing.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => handleServiceChange(service.id)}
                                    className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 cursor-pointer transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className="p-3 rounded-2xl text-2xl"
                                            style={{
                                                background: `linear-gradient(135deg, ${service.accentColor}20, ${service.color}20)`,
                                            }}
                                        >
                                            {service.icon === "web-development" && "🌐"}
                                            {service.icon === "app-development" && "📱"}
                                            {service.icon === "ui-ux-design" && "🎨"}
                                            {service.icon === "graphic-designing" && "✨"}
                                            {service.icon === "seo" && "🔍"}
                                            {service.icon === "digital-marketing" && "📈"}
                                            {service.icon === "video-editing" && "🎬"}
                                            {service.icon === "maintenance" && "🛡️"}
                                            {service.icon === "deployment" && "🚀"}
                                        </div>
                                        <span
                                            className="text-xs font-medium px-3 py-1 rounded-full"
                                            style={{
                                                background: `${service.accentColor}20`,
                                                color: service.accentColor,
                                            }}
                                        >
                                            {service.category === "monthly" ? "Monthly" : "One-time"}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                        {service.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-6">{service.shortDescription}</p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm text-gray-500">Starting at</span>
                                            <div className="text-2xl font-bold" style={{ color: service.accentColor }}>
                                                {service.pricing[0].price}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>

                                    {/* Ambient glow */}
                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                                        style={{
                                            background: `linear-gradient(135deg, ${service.accentColor}10, transparent)`,
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Service-Specific Pricing */}
            {!showAllServices && currentServiceData && (
                <>
                    {/* Service Header */}
                    <section className="pb-12 md:pb-16">
                        <div className="container-custom">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center max-w-3xl mx-auto"
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                    {currentServiceData.name}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                        Pricing
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg">{currentServiceData.shortDescription}</p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Pricing Cards */}
                    <section className="pb-20 md:pb-32">
                        <div className="container-custom">
                            <AnimatePresence mode="wait">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {currentServiceData.pricing.map((tier, index) => (
                                        <DynamicPricingCard
                                            key={`${currentServiceData.id}-${tier.plan}`}
                                            tier={tier}
                                            accentColor={currentServiceData.accentColor}
                                            gradientColor={`linear-gradient(135deg, ${currentServiceData.accentColor}, ${currentServiceData.color})`}
                                            index={index}
                                            isTransitioning={isTransitioning}
                                        />
                                    ))}
                                </div>
                            </AnimatePresence>
                        </div>
                    </section>

                    {/* Comparison Section */}
                    <section className="py-20 md:py-32 relative">
                        <div className="container-custom">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">Detailed Comparison</h2>
                                <p className="text-gray-400">Find the perfect tier for your specific needs</p>
                            </div>

                            <AnimatePresence mode="wait">
                                <ServiceComparisonTable
                                    key={currentServiceData.id}
                                    comparisonData={currentServiceData.comparison}
                                    tierNames={currentServiceData.pricing.map((p) => p.plan)}
                                    popularTierIndex={currentServiceData.pricing.findIndex((p) => p.popular)}
                                />
                            </AnimatePresence>
                        </div>
                    </section>
                </>
            )}

            {/* Package Bundles */}
            <PackageBundles />

            {/* Final CTA */}
            <section className="py-20 md:py-32">
                <div className="container-custom">
                    <div className="relative overflow-hidden rounded-[40px] p-12 md:p-20 text-center">
                        {/* CTA Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-[80px]" />
                        <div className="absolute inset-0 border border-white/10 rounded-[40px]" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                Not sure which {!showAllServices ? "tier" : "service"}
                                <br className="hidden md:block" /> is right for you?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 mb-10">
                                Contact our experts for a free strategy session. We'll help you map out your digital journey.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    href="/contact"
                                    size="lg"
                                    className="group space-x-2"
                                >
                                    <span>Book a Consultation</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                                <Button
                                    href="/faq"
                                    variant="outline"
                                    size="lg"
                                >
                                    View FAQ
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
