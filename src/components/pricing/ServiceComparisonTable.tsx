"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Check, X } from "lucide-react";
import { ComparisonRow } from "@/src/data/pricingData";

interface ServiceComparisonTableProps {
    comparisonData: ComparisonRow[];
    tierNames: string[];
    popularTierIndex: number;
}

export default function ServiceComparisonTable({
    comparisonData,
    tierNames,
    popularTierIndex,
}: ServiceComparisonTableProps) {
    const renderCellContent = (value: string) => {
        if (value === "-") {
            return <Minus className="w-4 h-4 mx-auto opacity-20" />;
        }
        if (value.toLowerCase() === "included" || value.toLowerCase() === "yes") {
            return <Check className="w-5 h-5 mx-auto text-green-500" />;
        }
        if (value.toLowerCase() === "no") {
            return <X className="w-5 h-5 mx-auto text-red-500" />;
        }
        return value;
    };

    return (
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] backdrop-blur-sm">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-foreground/10 scrollbar-track-transparent">
                <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="p-4 md:p-6 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider sticky left-0 bg-surface-deep z-10">
                                Features
                            </th>
                            {tierNames.map((name, index) => (
                                <th
                                    key={name}
                                    className={`p-4 md:p-6 text-xs md:text-sm font-medium uppercase tracking-wider text-center transition-all duration-300 ${index === popularTierIndex
                                            ? "text-purple-400 bg-purple-500/5"
                                            : "text-muted-foreground"
                                        }`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {name}
                                    </motion.div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-foreground/5">
                        <AnimatePresence mode="wait">
                            {comparisonData.map((row, rowIndex) => (
                                <motion.tr
                                    key={`${row.feature}-${rowIndex}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: rowIndex * 0.03,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="hover:bg-foreground/[0.02] transition-colors group"
                                >
                                    <td className="p-4 md:p-6 text-sm md:text-base text-foreground/70 font-medium sticky left-0 bg-surface-deep group-hover:bg-foreground/[0.02] z-10">
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {row.feature}
                                        </motion.div>
                                    </td>
                                    <td
                                        className={`p-4 md:p-6 text-center text-sm md:text-base transition-all duration-300 ${popularTierIndex === 0 ? "bg-purple-500/5" : ""
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: rowIndex * 0.03 + 0.1 }}
                                            className="text-muted-foreground"
                                        >
                                            {renderCellContent(row.tier1)}
                                        </motion.div>
                                    </td>
                                    <td
                                        className={`p-4 md:p-6 text-center text-sm md:text-base transition-all duration-300 ${popularTierIndex === 1
                                                ? "bg-purple-500/5 text-foreground font-medium"
                                                : ""
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: rowIndex * 0.03 + 0.15 }}
                                            className={popularTierIndex === 1 ? "text-foreground" : "text-muted-foreground"}
                                        >
                                            {renderCellContent(row.tier2)}
                                        </motion.div>
                                    </td>
                                    <td
                                        className={`p-4 md:p-6 text-center text-sm md:text-base transition-all duration-300 ${popularTierIndex === 2 ? "bg-purple-500/5" : ""
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: rowIndex * 0.03 + 0.2 }}
                                            className="text-muted-foreground"
                                        >
                                            {renderCellContent(row.tier3)}
                                        </motion.div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Mobile Scroll Hint */}
            <div className="md:hidden p-4 text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                    <motion.span
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        ←
                    </motion.span>
                    Scroll horizontally to see all tiers
                    <motion.span
                        animate={{ x: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        →
                    </motion.span>
                </p>
            </div>
        </div>
    );
}
