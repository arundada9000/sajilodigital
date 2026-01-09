"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { servicePricing, serviceIcons } from "@/src/data/pricingData";

interface ServiceSelectorProps {
    selectedService: string;
    onServiceChange: (serviceId: string) => void;
}

export default function ServiceSelector({
    selectedService,
    onServiceChange,
}: ServiceSelectorProps) {
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const allServices = [
        { id: "all", name: "All Services", icon: "🎯" },
        ...servicePricing.map((service) => ({
            id: service.id,
            name: service.name,
            icon: serviceIcons[service.id] || "📦",
        })),
    ];

    // Update indicator position
    useEffect(() => {
        if (tabsRef.current) {
            const activeTab = tabsRef.current.querySelector(
                `[data-service-id="${selectedService}"]`
            ) as HTMLElement;
            if (activeTab) {
                const tabsRect = tabsRef.current.getBoundingClientRect();
                const activeRect = activeTab.getBoundingClientRect();
                setIndicatorStyle({
                    left: activeRect.left - tabsRect.left,
                    width: activeRect.width,
                });

                // Scroll active tab into view on mobile
                if (containerRef.current) {
                    const container = containerRef.current;
                    const scrollLeft = activeRect.left - tabsRect.left - container.clientWidth / 2 + activeRect.width / 2;
                    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
                }
            }
        }
    }, [selectedService]);

    return (
        <div className="relative w-full mb-12 md:mb-16">
            <div
                ref={containerRef}
                className="overflow-x-auto scrollbar-hide relative"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                <div
                    ref={tabsRef}
                    className="inline-flex gap-2 md:gap-3 px-4 md:px-0 relative min-w-full md:justify-center"
                >
                    {/* Animated Indicator */}
                    <motion.div
                        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={false}
                        animate={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    />

                    {allServices.map((service) => {
                        const isActive = selectedService === service.id;
                        return (
                            <button
                                key={service.id}
                                data-service-id={service.id}
                                onClick={() => onServiceChange(service.id)}
                                className={`relative px-4 md:px-6 py-3 md:py-3.5 rounded-xl font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 group ${isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-gray-200"
                                    }`}
                            >
                                {/* Glassmorphism background for active tab */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeServiceBg"
                                        className="absolute inset-0 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-xl"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 35,
                                        }}
                                    />
                                )}

                                {/* Hover effect for inactive tabs */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-white/[0.03] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                )}

                                <span className="relative flex items-center gap-2">
                                    <span className="text-lg md:text-xl">{service.icon}</span>
                                    <span className="hidden sm:inline">{service.name}</span>
                                    <span className="sm:hidden">
                                        {service.id === "all" ? "All" : service.name.split(" ")[0]}
                                    </span>
                                </span>

                                {/* Subtle glow for active tab */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-50" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Scroll Hint for Mobile */}
            <div className="md:hidden flex justify-center mt-3 gap-1">
                {allServices.map((service, index) => (
                    <div
                        key={service.id}
                        className={`h-1 rounded-full transition-all duration-300 ${selectedService === service.id
                                ? "w-6 bg-purple-500"
                                : "w-1 bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
