"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Quote,
    ChevronRight,
} from "lucide-react";
import { Project } from "@/types/project";

interface ProjectDetailClientProps {
    project: Project;
    nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: ProjectDetailClientProps) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-blue-500/30 font-sans overflow-x-hidden">
            {/* Immersive Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 pointer-events-none">
                <div className="container-custom flex justify-between items-center pointer-events-auto">
                    <Link
                        href="/projects"
                        className="group flex items-center space-x-3 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-500"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs uppercase tracking-widest font-bold">Back</span>
                    </Link>
                </div>
            </header>

            {/* Cinematic Hero Section */}
            <section className="relative h-screen flex flex-col justify-end overflow-hidden">
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </motion.div>

                <div className="container-custom relative z-10 p-8 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-blue-500 font-mono tracking-widest text-sm mb-4 block uppercase leading-none">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-12 max-w-5xl">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-[0.2em]">{word}</span>
                            ))}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Project Meta & Intro */}
            <section className="pb-32 px-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
                        {/* Meta Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12 border-l border-white/10 pl-8"
                        >
                            <div>
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Client</span>
                                <p className="text-xl font-medium">{project.client}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Year</span>
                                    <p className="text-xl font-medium">{project.year}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Duration</span>
                                    <p className="text-xl font-medium">{project.duration}</p>
                                </div>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Technologies</span>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors duration-500 cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-8 flex gap-4">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                                {project.longDescription}
                            </p>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 pt-12">
                                {project.features.map((feature, i) => (
                                    <div key={i} className="flex items-start space-x-4 group">
                                        <div className="w-5 h-5 rounded-full border border-blue-500/50 flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-500 transition-colors duration-500">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-white" />
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Gallery */}
            {project.images && project.images.length > 0 && (
                <section className="py-20">
                    <div className="container-custom px-4">
                        <div className="space-y-32">
                            {project.images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative w-full aspect-video rounded-[2rem] overflow-hidden ${i % 2 === 0 ? "md:w-[90%] ml-auto" : "md:w-[90%] mr-auto"}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} preview ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Premium Testimonial */}
            {project.testimonial && (
                <section className="py-40">
                    <div className="container-custom max-w-5xl px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-12 md:p-24 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <Quote className="w-40 h-40" />
                            </div>
                            <p className="text-3xl md:text-5xl font-light leading-snug italic text-white/90 mb-12">
                                &ldquo;{project.testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-1 bg-blue-500" />
                                <div>
                                    <p className="text-xl font-bold">{project.testimonial.author}</p>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs">{project.testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Next Project Teaser */}
            <section className="py-40 bg-[#0a0a0a] group cursor-pointer overflow-hidden border-t border-white/10">
                <Link href={`/projects/${nextProject.slug}`} className="block">
                    <div className="container-custom text-center relative z-10">
                        <span className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8 block">Next Project</span>
                        <div className="overflow-hidden">
                            <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter group-hover:-translate-y-full transition-transform duration-1000 ease-[0.16,1,0.3,1]">
                                {nextProject.title}
                            </h2>
                            <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter absolute inset-0 top-[2.5em] group-hover:-translate-y-[2.5em] transition-transform duration-1000 ease-[0.16,1,0.3,1] text-blue-500 italic">
                                {nextProject.title}
                            </h2>
                        </div>

                        <div className="mt-20 flex justify-center">
                            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-125 transition-all duration-700">
                                <ChevronRight className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    );
}
