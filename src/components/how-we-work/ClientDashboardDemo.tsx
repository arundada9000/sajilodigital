"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Terminal,
    Code2,
    ImageIcon,
    FileText,
    CheckCircle2,
    Clock,
    Activity,
    FolderOpen,
    ChevronRight,
    ChevronDown,
    Layout,
    Cpu
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// Mock Data
const STAGES = [
    { id: "discovery", name: "Discovery & Strategy", progress: 100, status: "completed" },
    { id: "design", name: "UI/UX Design", progress: 85, status: "active" },
    { id: "development", name: "Development", progress: 30, status: "pending" },
    { id: "testing", name: "QA & Testing", progress: 0, status: "pending" },
    { id: "deployment", name: "Deployment", progress: 0, status: "pending" },
];

const RECENT_LOGS = [
    { time: "10:42 AM", msg: "Updated Homepage hero section animation", type: "code" },
    { time: "10:15 AM", msg: "Uploaded new assets to /public/images", type: "asset" },
    { time: "09:30 AM", msg: "Client meeting notes added to documentation", type: "doc" },
    { time: "Yesterday", msg: "Design system color palette finalized", type: "design" },
];

const FILE_STRUCTURE = [
    {
        name: "src",
        type: "folder",
        children: [
            { name: "app", type: "folder", children: [{ name: "page.tsx", type: "file" }, { name: "layout.tsx", type: "file" }] },
            { name: "components", type: "folder", children: [{ name: "Header.tsx", type: "file" }, { name: "Footer.tsx", type: "file" }] },
            { name: "styles", type: "folder", children: [{ name: "globals.css", type: "file" }] },
        ]
    },
    { name: "public", type: "folder", children: [{ name: "logo.svg", type: "file" }] },
    { name: "package.json", type: "file" },
];

export default function ClientDashboardDemo() {
    const [activeTab, setActiveTab] = useState("overview");

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]); // Reversed for natural feel
    const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Smooth out the movement
    const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 100 });
    const smoothRotateY = useSpring(rotateY, { damping: 20, stiffness: 100 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ perspective: 1000 }}
            className="w-full max-w-6xl mx-auto p-4"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: smoothRotateX,
                    rotateY: smoothRotateY,
                    transformStyle: "preserve-3d"
                }}
                className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl relative group transition-shadow duration-500 hover:shadow-cyan-500/20"
            >
                {/* Glare Effect */}
                <motion.div
                    style={{
                        opacity: useTransform(activeTab === "overview" ? x : x, [-0.5, 0.5], [0, 0.3]), // Hack to force usage
                        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)"
                    }}
                    className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay"
                />

                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-sm relative z-40">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="h-4 w-px bg-white/10 mx-2" />
                        <span className="text-xs font-mono text-gray-400">client-portal.exe</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-green-400">
                        <div className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 animate-pulse">
                            v2.4.0-stable
                        </div>
                        <span className="relative flex h-2 w-2 ml-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        LIVE
                    </div>
                </div>

                <div className="flex min-h-[600px] relative z-30 bg-[#0A0A0A]">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-white/10 bg-black/20 p-4 hidden md:block">
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Project</h3>
                            <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="font-bold text-white mb-1">E-Commerce Redesign</div>
                                <div className="text-xs text-gray-400">TechCorp Industries</div>
                            </div>
                        </div>

                        <div role="tablist" aria-label="Project Sections" className="space-y-1">
                            <SidebarItem icon={Layout} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
                            <SidebarItem icon={Code2} label="Code Repository" active={activeTab === "code"} onClick={() => setActiveTab("code")} />
                            <SidebarItem icon={ImageIcon} label="Design Assets" active={activeTab === "design"} onClick={() => setActiveTab("design")} />
                            <SidebarItem icon={FileText} label="Documentation" active={activeTab === "docs"} onClick={() => setActiveTab("docs")} />
                        </div>

                        <div className="mt-8 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                            <div className="text-xs font-bold text-purple-400 mb-1">Total Progress</div>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-2xl font-bold text-white">42%</span>
                                <span className="text-xs text-gray-400 mb-1">completed</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 rounded-full w-[42%] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 md:p-8 bg-[#0C0C0C] relative overflow-hidden flex flex-col h-[600px]">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Cpu size={200} />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                {activeTab === "overview" && <OverviewTab />}
                                {activeTab === "code" && <CodeTab />}
                                {activeTab === "design" && <DesignTab />}
                                {activeTab === "docs" && <DocsTab />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function OverviewTab() {
    return (
        <div className="h-full flex flex-col">
            {/* Stages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {STAGES.map((stage) => (
                    <div key={stage.id} className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <div className="flex justify-between items-start mb-3">
                            <span className={cn(
                                "text-xs font-mono px-2 py-1 rounded",
                                stage.status === "completed" ? "bg-green-500/20 text-green-400" :
                                    stage.status === "active" ? "bg-blue-500/20 text-blue-400" :
                                        "bg-white/5 text-gray-500"
                            )}>{stage.status}</span>
                            {stage.status === "completed" && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        </div>
                        <div className="font-medium text-white mb-2">{stage.name}</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                                className={cn("h-full rounded-full transition-all duration-1000",
                                    stage.status === "completed" ? "bg-green-500" :
                                        stage.status === "active" ? "bg-blue-500" : "bg-gray-700"
                                )}
                                style={{ width: `${stage.progress}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
                {/* Live Activity Log */}
                <div className="lg:col-span-2 flex flex-col h-full">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                        <Terminal className="w-4 h-4" /> Live Activity Log
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-black/50 p-4 font-mono text-sm flex-1 overflow-y-auto custom-scrollbar">
                        {RECENT_LOGS.map((log, i) => (
                            <div key={i} className="flex gap-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors">
                                <span className="text-gray-500 w-20 shrink-0">{log.time}</span>
                                <span className={cn(
                                    "flex-1",
                                    log.type === "code" ? "text-blue-300" :
                                        log.type === "asset" ? "text-purple-300" :
                                            log.type === "design" ? "text-pink-300" : "text-gray-300"
                                )}>
                                    {log.type === "code" && "> git commit -m \""}{log.msg}{log.type === "code" && "\""}
                                </span>
                            </div>
                        ))}
                        <div className="text-green-500 mt-2 animate-pulse">
                            _ cursor blinking...
                        </div>
                    </div>
                </div>

                {/* File Tree */}
                <div className="flex flex-col h-full">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                        <FolderOpen className="w-4 h-4" /> Structure
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-black/50 p-4 font-mono text-sm flex-1 overflow-y-auto custom-scrollbar">
                        <FileTree items={FILE_STRUCTURE} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CodeTab() {
    return (
        <div className="h-full flex flex-col">
            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <Code2 className="w-4 h-4" /> Latest Commit
            </h3>
            <div className="flex-1 rounded-lg border border-white/10 bg-[#1e1e1e] p-4 font-mono text-sm overflow-hidden relative">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="ml-2 text-gray-500 text-xs">src/components/Hero.tsx</span>
                </div>
                <div className="text-blue-400">import</div> <span className="text-white">React</span> <div className="text-blue-400 inline">from</div> <span className="text-orange-300">"react"</span>;
                <br />
                <div className="text-blue-400 inline">export default function</div> <span className="text-yellow-300">Hero</span>() {"{"}
                <br />
                &nbsp;&nbsp;<div className="text-blue-400 inline">return</div> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span>&lt;</span><span className="text-green-400">section</span> <span className="text-purple-400">className</span>=<span className="text-orange-300">"h-screen flex items-center"</span><span>&gt;</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&lt;</span><span className="text-green-400">h1</span><span>&gt;</span>Building the Future<span>&lt;/</span><span className="text-green-400">h1</span><span>&gt;</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span>&lt;/</span><span className="text-green-400">section</span><span>&gt;</span>
                <br />
                &nbsp;&nbsp;);
                <br />
                {"}"}
            </div>
        </div>
    )
}

function DesignTab() {
    return (
        <div className="h-full flex flex-col">
            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <ImageIcon className="w-4 h-4" /> Design Assets
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative group overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <ImageIcon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                        <span className="absolute bottom-2 left-2 text-xs text-gray-500 group-hover:text-white">Asset_0{i}.png</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function DocsTab() {
    return (
        <div className="h-full flex flex-col">
            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <FileText className="w-4 h-4" /> Documentation
            </h3>
            <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-8 max-w-3xl mx-auto w-full">
                <h1 className="text-2xl font-bold mb-4 border-b border-white/10 pb-4">Project Requirements</h1>
                <ul className="space-y-3 text-gray-300 list-disc pl-5">
                    <li>Responsive Mobile-First Design</li>
                    <li>Dark Mode Support</li>
                    <li>Real-time chat integration</li>
                    <li>Admin Dashboard with Analytics</li>
                </ul>
                <div className="mt-8 p-4 bg-yellow-500/10 border-l-2 border-yellow-500 text-yellow-200 text-sm">
                    Note: API Implementation scheduled for next sprint.
                </div>
            </div>
        </div>
    )
}

function SidebarItem({ icon: Icon, label, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            role="tab"
            aria-selected={active}
            aria-label={`View ${label}`}
            className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/10",
                active ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
        >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {label}
        </button>
    )
}

function FileTree({ items, level = 0 }: { items: any[], level?: number }) {
    return (
        <div style={{ marginLeft: level * 12 }}>
            {items.map((item, i) => (
                <div key={i} className="mb-1">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-default">
                        {item.type === "folder" ? (
                            <>
                                <ChevronDown className="w-3 h-3" />
                                <span className="text-blue-400/80">{item.name}</span>
                            </>
                        ) : (
                            <>
                                <span className="w-3 h-3" /> {/* Spacer */}
                                <span className="text-gray-200">{item.name}</span>
                            </>
                        )}
                    </div>
                    {item.children && <FileTree items={item.children} level={level + 1} />}
                </div>
            ))}
        </div>
    )
}
