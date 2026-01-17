"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap,
    Search,
    PenTool,
    Code,
    ShieldCheck,
    Rocket,
    Activity,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { activeProjects, WorkingProject } from "../../data/workingProjects";

const statusIcons = {
    research: Search,
    design: PenTool,
    development: Code,
    qa: ShieldCheck,
    maintenance: Zap,
};

const statusColors = {
    research: "text-blue-400",
    design: "text-purple-400",
    development: "text-green-400",
    qa: "text-yellow-400",
    maintenance: "text-red-400",
};

export default function LiveWorkingTimeline() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
                <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4"
                    >
                        <Activity className="w-3 h-3 animate-pulse" />
                        LIVE_NEURAL_TELEMETRY
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic uppercase tracking-tighter">
                        Active <span className="text-blue-500">Workspace</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                        Real-time feed of current architecture builds.
                    </p>
                </div>

                <div className="grid gap-12 max-w-5xl mx-auto">
                    {activeProjects.map((project, index) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            index={index}
                            isHovered={hoveredProject === project.id}
                            onHover={() => setHoveredProject(project.id)}
                            onLeave={() => setHoveredProject(null)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectRow({
    project,
    index,
    isHovered,
    onHover,
    onLeave
}: {
    project: WorkingProject;
    index: number;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const Icon = statusIcons[project.status];
    const colorClass = statusColors[project.status];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="relative group "
        >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Status Indicator (Left) */}
                <div className="relative">
                    <div className="w-20 h-20 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative z-20 overflow-hidden group-hover:border-blue-500/50 transition-colors">
                        <Icon className={`w-8 h-8 ${colorClass} group-hover:scale-110 transition-transform`} />
                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    {/* Connecting line to the next one could go here */}
                </div>

                {/* Content Card (Right) */}
                <div className="flex-1 w-full">
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group-hover:bg-white/[0.04] transition-all duration-500">
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.05)_50%,transparent)] bg-[length:100%_4px] opacity-10 animate-scanline pointer-events-none" />

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-[10px] font-mono font-black uppercase tracking-widest px-2 py-0.5 rounded ${colorClass} bg-white/5 border border-white/5`}>
                                        {project.status}
                                    </span>
                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                                        {project.id}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-white/40 text-sm font-mono mt-1">CLIENT: {project.client.toUpperCase()}</p>
                            </div>

                            <div className="text-right flex flex-col items-end">
                                <div className="text-3xl font-black italic tracking-tighter text-white mb-1">
                                    {project.progress}%
                                </div>
                                <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">
                                    Total_Throughput
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden mb-8">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${project.progress}%` }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className={`absolute inset-0 h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full`}
                            >
                                <div className="absolute inset-0 w-full h-full bg-white/20 animate-shimmer" />
                            </motion.div>
                        </div>

                        {/* Recent Activity Mini-Feed */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.activities.slice(0, 2).map((activity, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-blue-500 animate-pulse" : "bg-white/20"}`} />
                                    <div>
                                        <p className="text-xs text-white/80 leading-relaxed">{activity.message}</p>
                                        <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mt-1.5">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                            <Link
                                href="/status"
                                className="flex items-center justify-center gap-2 p-3 rounded-lg border border-dashed border-white/10 text-white/40 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group/link"
                            >
                                <span className="text-[10px] font-mono uppercase tracking-widest">Full_Diagnostics</span>
                                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connection lines between rows could go here visually if stacked vertically */}
        </motion.div>
    );
}
