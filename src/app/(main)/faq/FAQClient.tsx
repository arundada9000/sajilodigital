"use client";

import React, { useState } from "react";
import {
    ChevronDown,
    Search,
    HelpCircle,
    MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import { faqCategories } from "@/src/data/faq";

/* ---------------- ANIMATION CONSTANTS ---------------- */

const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export default function FAQClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

    const toggleQuestion = (index: number) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    const filteredFaqs =
        faqCategories
            .find((cat) => cat.name === activeCategory)
            ?.faqs.filter(
                (faq) =>
                    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ) || [];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500/30 overflow-x-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                            <HelpCircle className="w-4 h-4" />
                            <span>Support Intelligence</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight">
                            <ShinyText text="Knowledge Hub" className="block" />
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed">
                            Explore our comprehensive database of questions and answers to
                            streamline your partnership with Sajilo Digital.
                        </p>
                    </motion.div>

                    {/* Search Interface */}
                    <div className="max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center bg-[#161b22]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden focus-within:border-cyan-500/50 transition-all duration-300">
                                <Search className="w-6 h-6 ml-8 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Ask anything about our process, pricing, or tech..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-6 bg-transparent text-white placeholder:text-gray-600 outline-none text-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-12">

                        {/* Sidebar Navigation */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className="space-y-3 sticky top-32">
                                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6 px-4">Categories</h3>
                                {faqCategories.map((cat) => {
                                    const Icon = cat.icon;
                                    const isActive = activeCategory === cat.name;
                                    return (
                                        <motion.button
                                            key={cat.name}
                                            variants={itemVariants}
                                            onClick={() => {
                                                setActiveCategory(cat.name);
                                                setOpenQuestionIndex(0); // Reset accordion on category change
                                            }}
                                            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${isActive
                                                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                                                : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
                                                }`}
                                        >
                                            <Icon className={`w-5 h-5 ${isActive ? "text-black" : "text-gray-500 group-hover:text-cyan-400"} transition-colors`} />
                                            <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                                            {isActive && (
                                                <motion.div layoutId="activeDot" className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Accordion List */}
                        <div className="lg:col-span-3">
                            <div className="space-y-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory + searchQuery}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        {filteredFaqs.length === 0 ? (
                                            <div className="p-20 rounded-[40px] border border-white/5 bg-[#161b22]/20 backdrop-blur-sm text-center">
                                                <MessageSquare className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                                                <p className="text-gray-500 text-lg">No results found for your search.</p>
                                            </div>
                                        ) : (
                                            filteredFaqs.map((faq, idx) => {
                                                const isOpen = openQuestionIndex === idx;
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        className={`group rounded-[32px] border transition-all duration-500 overflow-hidden ${isOpen
                                                            ? "bg-[#161b22]/60 border-cyan-500/30 shadow-2xl"
                                                            : "bg-[#161b22]/20 border-white/5 hover:border-white/10"
                                                            }`}
                                                    >
                                                        <button
                                                            onClick={() => toggleQuestion(idx)}
                                                            className="w-full text-left px-8 py-8 flex items-center justify-between gap-6"
                                                        >
                                                            <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-cyan-400" : "text-white group-hover:text-gray-200"}`}>
                                                                {faq.question}
                                                            </span>
                                                            <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? "bg-cyan-500 text-black rotate-180" : "bg-white/5 text-gray-500 group-hover:text-white"}`}>
                                                                <ChevronDown className="w-6 h-6" />
                                                            </div>
                                                        </button>

                                                        <AnimatePresence>
                                                            {isOpen && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                                >
                                                                    <div className="px-8 pb-10">
                                                                        <div className="h-px bg-white/10 mb-8" />
                                                                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl italic">
                                                                            &quot;{faq.answer}&quot;
                                                                        </p>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                );
                                            })
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="pb-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative p-12 md:p-20 rounded-[50px] overflow-hidden text-center"
                    >
                        {/* Background elements */}
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-600 to-purple-700 opacity-90 group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/grid.svg')]" />

                        <div className="relative z-10 text-white">
                            <div className="w-20 h-20 mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500">
                                <MessageSquare className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Need More Precision?</h2>
                            <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
                                If our Hub didn&apos;t contain the data you need, our strategists
                                are standing by to discuss your specific mission requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    Contact HQ
                                </a>
                                <a
                                    href="/about/team"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black/30 transition-all"
                                >
                                    Meet the Experts
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
