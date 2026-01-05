"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "../../types/blog";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative"
        >
            <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-[#161b22]/40 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300">

                    {/* Image Container */}
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] to-transparent opacity-60" />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-cyan-500" />
                                {post.publishedAt}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-cyan-500" />
                                {post.readTime}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-white">{post.author.name}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{post.author.role}</p>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 text-white group-hover:translate-x-1">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
