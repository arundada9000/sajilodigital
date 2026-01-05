"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import BlogCard from "../../../components/blog/BlogCard";
import ShinyText from "../../../../components/ShinyText";

import { blogPosts } from "../../../data/blog";

export default function BlogClient() {
    const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
    const regularPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

    return (
        <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500/30 overflow-x-hidden">
            {/* Dynamic Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                            <TrendingUp className="w-4 h-4" />
                            <span>Latest Insights & Updates</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            <ShinyText text="Our Blog" className="block" />
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                            Explore the intersection of technology, design, and innovation.
                            Fresh perspectives from the Sajilo Digital team.
                        </p>
                    </motion.div>

                    {/* Featured Post Card */}
                    {featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative group mb-24"
                        >
                            <Link href={`/blog/${featuredPost.slug}`}>
                                <div className="relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10 bg-[#161b22]/40 backdrop-blur-2xl hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                                    {/* Image Side */}
                                    <div className="relative h-72 lg:h-[450px] overflow-hidden">
                                        <Image
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-r from-[#0b0f19] to-transparent opacity-60 lg:block hidden" />
                                        <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] to-transparent opacity-60 lg:hidden" />
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                                Featured
                                            </span>
                                            <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> {featuredPost.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                                            {featuredPost.title}
                                        </h2>

                                        <p className="text-gray-400 text-lg mb-8 line-clamp-3 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/20 shadow-lg">
                                                    <Image
                                                        src={featuredPost.author.avatar}
                                                        alt={featuredPost.author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white text-lg leading-tight">{featuredPost.author.name}</p>
                                                    <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">{featuredPost.author.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all duration-300">
                                                Read Story <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-20 bg-[#080b12]/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Latest Articles</h2>
                            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Technology', 'Design', 'Development', 'Business'].map((cat) => (
                                <button
                                    key={cat}
                                    className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {regularPosts.map((post, index) => (
                            <BlogCard key={post.slug} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative p-12 lg:p-20 rounded-[40px] overflow-hidden border border-white/10 bg-linear-to-br from-[#161b22] to-[#0b0f19] text-center"
                    >
                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                                Never miss an <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">update.</span>
                            </h2>
                            <p className="max-w-xl mx-auto text-gray-400 text-lg mb-12">
                                Join our community of 2,000+ developers and designers getting the best tutorials and insights every week.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    className="flex-1 bg-transparent px-6 py-4 text-white focus:outline-none placeholder:text-gray-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                >
                                    Join Now
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
