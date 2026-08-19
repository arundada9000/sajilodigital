"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import confetti from "canvas-confetti";
import {
    Settings,
    Play,
    Terminal as TerminalIcon,
    Cpu,
    Zap,
    Shield,
    Layers,
    CheckCircle2,
    Loader2,
    GitBranch,
    Database,
    Globe,
    Server,
    LayoutTemplate,
    FileCode,
    Search,
    Menu,
    MoreHorizontal,
    MousePointer2,
    Move,
    MessageSquare,
    User,
    Lock,
    RotateCcw,
    History,
    Smartphone,
    Tablet as TabletIcon,
    Monitor,
    Radio,
    BarChart3
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// Types
type BuildState = "idle" | "planning" | "designing" | "approval_design" | "reworking_design" | "coding" | "testing" | "approval_deploy" | "deploying" | "complete";

// --- SUB-COMPONENTS FOR REALISM ---

// Ghost Cursor Component
function GhostCursor({ label, color, path }: { label: string, color: string, path: { x: number[], y: number[], times: number[] } }) {
    return (
        <motion.div
            animate={{
                x: path.x.map(p => `${p}%`),
                y: path.y.map(p => `${p}%`),
            }}
            transition={{
                duration: Math.max(...path.times),
                ease: "linear",
                times: path.times,
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className="absolute z-50 pointer-events-none top-0 left-0"
        >
            <MousePointer2 className={cn("w-4 h-4 fill-current", color)} />
            <div className={cn("absolute left-4 top-2 text-[10px] px-1.5 py-0.5 rounded text-white whitespace-nowrap font-medium", color.replace("text-", "bg-"))}>
                {label}
            </div>
        </motion.div>
    );
}

// 1. PLANNING: Node Graph (Miro style)
function PlanningView({ projectName }: { projectName: string }) {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="group relative w-full h-full bg-[#f4f4f4] text-black overflow-hidden font-sans cursor-grab active:cursor-grabbing shadow-2xl rounded-lg"
        >
            {/* Dotted Background */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#ccc 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            {/* Ghost Cursor: Arun */}
            <GhostCursor
                label="Arun (Architect)"
                color="text-purple-500"
                path={{ x: [20, 50, 80, 50], y: [20, 50, 20, 80], times: [0, 0.4, 0.7, 1] }}
            />

            {/* Tool Bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg px-4 py-2 flex gap-4 border border-gray-200 z-10 pointer-events-none">
                <div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><LayoutTemplate size={14} /></div>
                <div className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center text-muted-foreground"><Search size={14} /></div>
                <div className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center text-muted-foreground"><Menu size={14} /></div>
            </div>

            {/* Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Database Node */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}
                    className="absolute bottom-12 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-3 shadow-lg w-32 text-center"
                >
                    <Database className="w-8 h-8 text-yellow-600 mx-auto mb-1" />
                    <span className="text-xs font-bold text-yellow-800">PostgreSQL</span>
                </motion.div>

                {/* API Node */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }}
                    className="absolute bg-green-50 border-2 border-green-400 rounded-lg p-3 shadow-lg w-32 text-center z-10"
                >
                    <Server className="w-8 h-8 text-green-600 mx-auto mb-1" />
                    <span className="text-xs font-bold text-green-800">{projectName}_Core</span>
                </motion.div>

                {/* Client Node */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5 }}
                    className="absolute top-12 bg-blue-50 border-2 border-blue-400 rounded-lg p-3 shadow-lg w-32 text-center"
                >
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                    <span className="text-xs font-bold text-blue-800">{projectName}_Edge</span>
                </motion.div>

                {/* Connector Lines (Animated SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 600" preserveAspectRatio="none">
                    <motion.path
                        d="M 200 300 L 200 480"
                        stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
                    />
                    <motion.path
                        d="M 200 300 L 200 120"
                        stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.7, duration: 0.5 }}
                    />
                </svg>
            </div>

            {/* Drag Handle Hint */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 p-1 rounded">
                <Move size={12} className="text-muted-foreground" />
            </div>
        </motion.div>
    )
}

// 2. DESIGN: Figma Simulator
function DesignView({ pixelPerfect, projectName, isReworking }: { pixelPerfect: boolean, projectName: string, isReworking?: boolean }) {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="relative w-full h-full bg-[#1e1e1e] flex flex-col overflow-hidden shadow-2xl rounded-lg cursor-grab active:cursor-grabbing border border-[#333]"
        >
            {/* Ghost Cursor: Gobind */}
            <GhostCursor
                label="Gobind (Design)"
                color="text-pink-500"
                path={isReworking
                    ? { x: [20, 25, 20, 30], y: [40, 45, 40, 35], times: [0, 0.3, 0.6, 1] }
                    : { x: [80, 50, 60, 20], y: [80, 50, 20, 40], times: [0, 0.3, 0.6, 1] }
                }
            />

            {/* Figma Header */}
            <div className="h-10 bg-[#2c2c2c] flex items-center px-4 border-b border-black">
                <div className="flex gap-4 text-white/50 text-xs">
                    <Menu size={14} />
                    <span className="text-white truncate max-w-[150px]">{projectName}_Layout.fig</span>
                </div>
                <div className="ml-auto flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-[10px] flex items-center justify-center text-white font-bold shadow-sm ring-1 ring-black/20">A</div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 text-[10px] flex items-center justify-center text-white font-bold shadow-sm ring-1 ring-black/20">S</div>
                    <div className="w-16 h-6 bg-blue-600 rounded text-white text-[10px] flex items-center justify-center font-bold hover:bg-blue-500 transition-colors">Share</div>
                </div>
            </div>

            <div className="flex-1 flex relative">
                {/* Sidebar */}
                <div className="w-48 bg-[#2c2c2c] border-r border-black p-2 hidden md:block pointer-events-none">
                    <div className="text-[10px] text-muted-foreground font-bold mb-2">LAYERS</div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-white text-xs bg-blue-500/20 p-1 rounded"><LayoutTemplate size={10} /> Landing Page</div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs p-1 pl-4"><LayoutTemplate size={10} /> Hero Section</div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs p-1 pl-4"><LayoutTemplate size={10} /> Navbar</div>
                        {isReworking && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-yellow-400 text-xs p-1 pl-4 italic"><History size={10} /> Reworking UI...</motion.div>
                        )}
                    </div>
                </div>

                {/* Canvas */}
                <div className="flex-1 bg-[#1e1e1e] relative overflow-hidden flex items-center justify-center">
                    {/* Blue Wireframe Box */}
                    <motion.div
                        initial={{ width: 100, height: 100, opacity: 0 }}
                        animate={isReworking ? { scale: [1, 1.05, 1], filter: ["none", "brightness(1.5)", "none"] } : { width: 400, height: 250, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="border-2 border-blue-500 relative bg-blue-500/5 backdrop-blur-sm"
                    >
                        {/* Selection Handles */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500" />

                        {/* Measurement Label */}
                        {pixelPerfect && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="absolute -bottom-6 flex gap-2"
                            >
                                <span className="bg-red-500 text-white text-[9px] px-1 rounded shadow-sm">400px</span>
                                <span className="bg-red-500 text-white text-[9px] px-1 rounded shadow-sm">250px</span>
                            </motion.div>
                        )}

                        {/* Content Skeleton */}
                        <div className="p-8 space-y-4 opacity-50">
                            <div className="w-1/2 h-8 bg-gray-600 rounded" />
                            <div className="w-full h-32 bg-gray-700/50 rounded" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

// 3. CODING: VS Code Clone
function CodingView({ stage, projectName }: { stage: "frontend" | "backend", projectName: string }) {
    const isFrontend = stage === "frontend";
    const filename = isFrontend ? "page.tsx" : "route.ts";
    const iconColor = isFrontend ? "text-blue-400" : "text-yellow-400";

    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="w-full h-full bg-[#1e1e1e] flex flex-col font-mono text-[13px] shadow-2xl rounded-lg cursor-grab active:cursor-grabbing border border-[#333]"
        >
            {/* Ghost Cursor: Sunil */}
            <GhostCursor
                label="Sunil (Lead Developer)"
                color="text-blue-400"
                path={{ x: [10, 30, 60, 40], y: [80, 60, 40, 70], times: [0, 0.4, 0.8, 1] }}
            />

            {/* Title Bar */}
            <div className="h-8 bg-[#252526] flex items-center px-4 text-muted-foreground text-xs gap-4 select-none">
                <Menu size={14} />
                <span className="truncate">{filename} - {projectName} - Visual Studio Code</span>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Activity Bar */}
                <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 text-muted-foreground pointer-events-none">
                    <FileCode size={24} className="text-foreground" />
                    <Search size={24} />
                    <GitBranch size={24} />
                </div>

                {/* Sidebar */}
                <div className="w-48 bg-[#252526] text-foreground/70 p-2 hidden md:block pointer-events-none">
                    <div className="text-[10px] font-bold mb-2 pl-2">EXPLORER</div>
                    <div className="pl-2 flex items-center gap-1 text-blue-400 bg-[#37373d] py-1">
                        <FileCode size={14} className={iconColor} /> {filename}
                    </div>
                    <div className="pl-6 text-[11px] text-muted-foreground mt-2 space-y-1">
                        <div className="hover:text-foreground/70">layout.tsx</div>
                        <div className="hover:text-foreground/70">globals.css</div>
                        <div className="hover:text-foreground/70">next.config.js</div>
                    </div>
                </div>

                {/* Editor */}
                <div className="flex-1 bg-[#1e1e1e] p-4 text-foreground/70 overflow-hidden cursor-text">
                    <div className="flex gap-2 mb-4">
                        <div className="bg-[#2c2c2c] px-3 py-1 rounded-t border-t border-r border-[#333] text-blue-400 flex items-center gap-1">
                            <FileCode size={12} /> {filename}
                        </div>
                    </div>
                    <Typewriter
                        text={isFrontend
                            ? `export default function Home() {\n  return (\n    <main className="flex min-h-screen">\n      <HeroSection title="${projectName}" />\n      <Features />\n    </main>\n  )\n}`
                            : `export async function GET() {\n  const data = await db.${projectName}.findMany();\n  return Response.json({ data });\n}`}
                        speed={30}
                    />
                </div>
            </div>

            {/* Status Bar */}
            <div className="h-6 bg-[#007acc] text-white flex items-center px-2 text-[10px] justify-between pointer-events-none">
                <div className="flex gap-4">
                    <div className="flex items-center gap-1"><GitBranch size={10} /> main*</div>
                    <div>0 errors, 0 warnings</div>
                </div>
                <div className="flex gap-4">
                    <div>Ln 12, Col 45</div>
                    <div>UTF-8</div>
                    <div>TypeScript React</div>
                </div>
            </div>
        </motion.div>
    )
}

// 4. TESTING: CI/CD Runner + Responsive Morphing
function TestingView({ security }: { security: boolean }) {
    const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

    useEffect(() => {
        const interval = setInterval(() => {
            setDevice(prev => {
                if (prev === "desktop") return "tablet";
                if (prev === "tablet") return "mobile";
                return "desktop";
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const deviceWidths = {
        mobile: "w-[120px] md:w-[180px]",
        tablet: "w-[200px] md:w-[280px]",
        desktop: "w-full"
    };

    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="w-full h-full bg-[#0d1117] p-4 font-mono text-sm text-foreground/70 overflow-hidden shadow-2xl rounded-lg cursor-grab active:cursor-grabbing border border-gray-800 flex flex-col md:flex-row gap-4"
        >
            {/* Ghost Cursor: Ashish */}
            <GhostCursor
                label="Ashish (QA & Security)"
                color="text-green-500"
                path={{ x: [5, 10, 5, 20], y: [10, 30, 50, 20], times: [0, 0.4, 0.7, 1] }}
            />

            <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground border-b border-gray-800 pb-2">
                    <TerminalIcon size={16} />
                    <span className="text-[10px]">Runner #142 (Node.js 20.x)</span>
                </div>

                <div className="space-y-1.5 pointer-events-none scale-90 origin-top-left">
                    <div className="flex items-center gap-2 group">
                        <span className="text-green-500 font-bold">✔</span>
                        <span className="text-[11px]">Building...</span>
                        <span className="text-muted-foreground text-[9px] ml-auto">1.2s</span>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2">
                        <span className="text-green-500 font-bold">✔</span>
                        <span className="text-[11px]">Unit Tests...</span>
                        <span className="text-muted-foreground text-[9px] ml-auto">0.8s</span>
                    </motion.div>

                    {security && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✔</span>
                            <span className="text-[11px]">Vulnerability Audit...</span>
                            <span className="text-muted-foreground text-[9px] ml-auto">2.1s</span>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                        className="mt-4 p-2 bg-green-900/10 border border-green-500/20 rounded text-green-400 text-[10px]"
                    >
                        <div className="font-bold flex items-center gap-1"><CheckCircle2 size={12} /> ✨ PASSED</div>
                    </motion.div>
                </div>
            </div>

            {/* Responsive Morphing Preview */}
            <div className="flex-1 bg-black/40 rounded-lg border border-border p-4 flex flex-col items-center justify-center gap-2">
                <div className="flex gap-2 mb-2">
                    <Smartphone size={12} className={cn("transition-colors", device === "mobile" ? "text-blue-400" : "text-muted-foreground")} />
                    <TabletIcon size={12} className={cn("transition-colors", device === "tablet" ? "text-blue-400" : "text-muted-foreground")} />
                    <Monitor size={12} className={cn("transition-colors", device === "desktop" ? "text-blue-400" : "text-muted-foreground")} />
                </div>
                <motion.div
                    layout
                    className={cn(deviceWidths[device], "h-32 bg-gray-800 rounded border border-border overflow-hidden relative shadow-lg")}
                >
                    <div className="absolute inset-x-0 top-0 h-2 bg-gray-700" />
                    <div className="p-2 space-y-2">
                        <div className="w-full h-1 bg-blue-500/20 rounded-full" />
                        <div className="w-3/4 h-1 bg-gray-600 rounded-full" />
                        <div className="w-full h-12 bg-gray-700/50 rounded" />
                    </div>
                </motion.div>
                <span className="text-[9px] text-muted-foreground font-mono uppercase transition-all">Testing: {device}</span>
            </div>
        </motion.div>
    )
}

// 5. DEPLOYMENT: Edge Map
function DeploymentView() {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="relative w-full h-full bg-surface-deep overflow-hidden flex items-center justify-center shadow-2xl rounded-lg cursor-grab active:cursor-grabbing border border-gray-800"
        >
            {/* Abstract Map Dots */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 p-8 opacity-20 pointer-events-none">
                {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 pointer-events-none">
                <Globe className="w-32 h-32 text-blue-900 absolute opacity-50 blur-xl animate-pulse" />
                <Globe className="w-32 h-32 text-blue-500 relative z-10" />

                <div className="w-64 bg-gray-800 h-1 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    />
                </div>
                <div className="font-mono text-blue-400 text-sm tracking-widest animate-pulse">PROPAGATING TO EDGE...</div>
            </div>

            {/* Pings with Tooltips */}
            {Array.from({ length: 12 }).map((_, i) => {
                const x = 10 + Math.random() * 80;
                const y = 10 + Math.random() * 80;
                return (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 group cursor-help z-20 flex items-center justify-center"
                        style={{ left: `${x}%`, top: `${y}%` }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_15px_#4ade80]"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                        />
                        <div className="absolute bottom-full mb-2 bg-black/95 text-green-400 text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-green-500/40 z-[60] backdrop-blur-sm shadow-xl">
                            PoP: Node_{i + 1} | Latency: {Math.floor(Math.random() * 35) + 5}ms
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

// PERFORMANCE HUD (Post-Launch)
function PerformanceHUD() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute inset-0 z-[120] flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none"
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-background/80 backdrop-blur-xl border border-border/10 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,1)] pointer-events-auto">
                {[
                    { label: "Performance", score: 99, color: "text-green-400" },
                    { label: "Accessibility", score: 100, color: "text-green-400" },
                    { label: "Best Practices", score: 100, color: "text-green-400" },
                    { label: "SEO", score: 100, color: "text-green-400" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 p-4 bg-foreground/5 rounded-2xl border border-border/5">
                        <div className={cn("flex items-center justify-center w-16 h-16 rounded-full border-4 border-current bg-background", stat.color)}>
                            <span className="text-lg font-bold text-foreground">{stat.score}</span>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider h-4 text-center">{stat.label}</span>
                    </div>
                ))}
                <div className="col-span-full pt-4 mt-2 border-t border-border/5 flex justify-between items-center text-[10px] text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                        <Zap size={10} className="text-yellow-400" />
                        LCP: 0.8s
                    </div>
                    <div className="flex items-center gap-2">
                        <BarChart3 size={10} className="text-blue-400" />
                        TBT: 12ms
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// LIVE HUDDLE INDICATOR
function LiveHuddle() {
    return (
        <div className="flex items-center gap-3 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full animate-pulse-slow">
            <Radio size={14} className="text-green-400" />
            <div className="flex -space-x-1.5">
                {[
                    { n: "Arun", c: "bg-purple-500" },
                    { n: "Sunil", c: "bg-blue-500" },
                    { n: "Gobind", c: "bg-pink-500" },
                    { n: "Ashish", c: "bg-green-500" }
                ].map((u, i) => (
                    <div key={i} className={cn("w-5 h-5 rounded-full border border-background flex items-center justify-center text-[8px] font-bold text-white shadow-sm ring-1 ring-foreground/10 group relative", u.c)}>
                        {u.n[0]}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-background text-foreground px-1.5 py-0.5 rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">{u.n}</span>
                    </div>
                ))}
            </div>
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest hidden sm:inline">Live Huddle</span>
        </div>
    );
}

// INTERACTIVE TERMINAL LOG ENTRIES
function LogEntry({ log }: { log: string }) {
    const [expanded, setExpanded] = useState(false);
    const isSuccess = log.includes("success") || log.includes("LIVE") || log.includes("✔") || log.includes("PASSED");
    const isInfo = !isSuccess && (log.includes("info") || log.includes("Initializing") || log.includes("Analyzing") || log.includes("Drafting"));

    // Abstract details based on content
    const getDetails = (txt: string) => {
        if (txt.includes("Analyzing")) return ["Config found: next.config.mjs", "Loading tailwind.config.ts", "Parsing 42 routes..."];
        if (txt.includes("build")) return ["Chunk size: 342kb", "Gzip compression: 0.8s", "Edge optimization: Enable"];
        if (txt.includes("LIVE")) return ["URL: https://sajilodigital.com.np", "Status: 200 OK", "Region: N. Virginia (us-east-1)"];
        return ["Process ID: " + Math.floor(Math.random() * 9000 + 1000), "Memory: 124MB", "Runtime: Node v20.10.0"];
    };

    return (
        <div
            className={cn(
                "animate-fade-in break-words cursor-pointer hover:bg-foreground/5 p-1 rounded transition-colors group",
                isSuccess ? "text-green-400" : isInfo ? "text-blue-400/70" : "text-green-400/70"
            )}
            onClick={() => setExpanded(!expanded)}
        >
            <div className="flex items-center gap-2">
                <span className="opacity-40">{isSuccess ? "✔" : "➜"}</span>
                {log}
                <span className="ml-auto text-[8px] opacity-0 group-hover:opacity-40 uppercase">Details</span>
            </div>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-5 mt-1 border-l border-border/10 space-y-0.5 ml-1"
                    >
                        {getDetails(log).map((d, i) => (
                            <div key={i} className="text-[9px] text-muted-foreground font-mono">• {d}</div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// APPROVAL GATE COMPONENT
function ApprovalGate({ type, onApprove, onReject }: { type: string, onApprove: () => void, onReject?: () => void }) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="absolute inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-md"
        >
            <div className="bg-background border border-border/10 p-8 rounded-2xl max-w-sm w-full shadow-[0_0_50px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-border/10 group-hover:scale-110 transition-transform">
                    {type === "design" ? <LayoutTemplate className="w-8 h-8 text-pink-400" /> : <Shield className="w-8 h-8 text-green-400" />}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                    {type === "design" ? "Design Review Required" : "Ready for Deployment?"}
                </h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {type === "design"
                        ? "The team has finalized the wireframes and design system. Please review our work before we begin the coding phase."
                        : "CI pipeline passed. Security scan (Level 4) clean. Final authorization needed to propagate to production network."}
                </p>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={onApprove}
                        className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/80 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-foreground/5"
                    >
                        {type === "design" ? "APPROVE & PROCEED" : "AUTHORIZE GLOBAL LAUNCH"}
                    </button>
                    {onReject && (
                        <button
                            onClick={onReject}
                            className="w-full py-4 bg-foreground/5 text-muted-foreground font-bold rounded-xl hover:bg-foreground/10 hover:text-foreground transition-all border border-border/5 flex items-center justify-center gap-2"
                        >
                            <RotateCcw size={16} /> REQUEST REWORK
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

// TEAM CHAT OVERLAY
function TeamChat() {
    const messages = [
        { user: "Arun", text: "Pushing latest architecture specs...", delay: 2 },
        { user: "Gobind", text: "UI assets optimized for high performance.", delay: 5 },
        { user: "Arun", text: "System ready for initial build.", delay: 10 },
        { user: "Sunil", text: "Integrating frontend with the core API.", delay: 15 },
        { user: "Ashish", text: "Security benchmarks at 100%.", delay: 22 },
    ];
    const [visibleMsgs, setVisibleMsgs] = useState<any[]>([]);

    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];
        messages.forEach(msg => {
            const t = setTimeout(() => {
                setVisibleMsgs(prev => [...prev.slice(-2), msg]);
            }, msg.delay * 1000);
            timeouts.push(t);
        });
        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="absolute bottom-6 left-6 z-[80] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {visibleMsgs.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-background/90 backdrop-blur-xl border border-border/10 px-4 py-2.5 rounded-2xl text-xs flex items-center gap-3 max-w-[240px] shadow-2xl"
                    >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-border/5 flex items-center justify-center shrink-0 shadow-inner">
                            <span className="text-[10px] font-bold text-foreground/70">{msg.user[0]}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-foreground text-[10px]">{msg.user}</span>
                            <span className="text-muted-foreground leading-tight">{msg.text}</span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

// GIT PULSE SIDELINE
function GitPulse({ projectName }: { projectName: string }) {
    const commits = [
        { hash: "8f2a1", msg: "feat: initial commit", time: "2m ago" },
        { hash: "3c9b4", msg: "docs: update design tokens", time: "1m ago" },
        { hash: "e5d6f", msg: "fix: navbar alignment", time: "just now" }
    ];

    return (
        <div className="absolute top-24 right-6 z-[80] hidden xl:flex flex-col gap-4 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-b border-border/5 pb-2">
                <History size={12} /> Git History ({projectName})
            </div>
            {commits.map((c, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.5 }}
                    className="flex flex-col gap-0.5"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-blue-500 font-mono text-[9px]">{c.hash}</span>
                        <span className="text-foreground/70 text-[10px] font-medium">{c.msg}</span>
                    </div>
                    <span className="text-[9px] text-muted-foreground">{c.time}</span>
                </motion.div>
            ))}
        </div>
    )
}

// PARALLAX BACKGROUND
function ParallaxEnv() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Large faint circuit lines */}
            <svg className="w-full h-full opacity-[0.03]">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 L100 50 M50 0 L50 100" stroke="white" strokeWidth="1" />
                    <circle cx="50" cy="50" r="2" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
        </div>
    )
}

// --- MAIN HELPERS ---

function Typewriter({ text, speed = 30 }: { text: string; speed?: number }) {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
        setDisplayedText("");
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    // Simulate rich hover on keywords
    const renderWithHovers = (txt: string) => {
        const parts = txt.split(/(\bfunction\b|\breturn\b|\bconst\b|\bexport\b|\bdefault\b)/g);
        return parts.map((part, i) => {
            if (['function', 'return', 'const', 'export', 'default'].includes(part)) {
                return <span key={i} className="text-purple-400 cursor-help group relative">
                    {part}
                    <span className="absolute bottom-full left-0 mb-2 bg-foreground text-background text-[9px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none z-[110] font-sans font-bold shadow-xl">
                        keyword inspection
                    </span>
                </span>;
            }
            return <span key={i}>{part}</span>;
        });
    };

    return <span className="whitespace-pre-wrap">{renderWithHovers(displayedText)}</span>;
}

// --- DEBUG OVERLAY ---
function DebugOverlay() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [fps, setFps] = useState(60);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);

        const fpsInterval = setInterval(() => {
            setFps(Math.floor(Math.random() * 5) + 57);
        }, 1000);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            clearInterval(fpsInterval);
        };
    }, []);

    return (
        <div className="absolute bottom-6 right-6 bg-background/90 border border-green-500/20 p-2.5 rounded-xl text-[9px] font-mono text-green-500/80 pointer-events-none z-[90] flex flex-col gap-1 tabular-nums backdrop-blur-xl shadow-2xl ring-1 ring-border/5">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span>FPS_STABLE: {fps}</span>
            </div>
            <div>X_AXIS: {mouse.x}</div>
            <div>Y_AXIS: {mouse.y}</div>
            <div className="text-muted-foreground border-t border-border/5 mt-1 pt-1 italic">BUILD_HASH: {Math.random().toString(16).substr(2, 6)}</div>
        </div>
    )
}

// --- MAIN COMPONENT ---

export default function LiveProjectBuilder() {
    const [config, setConfig] = useState({
        projectName: "SajiloApp",
        turboMode: false,
        pixelPerfect: true,
        security: true
    });
    const [buildState, setBuildState] = useState<BuildState>("idle");
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    // Spring-based smooth tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 150 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    // reset build when config changes
    useEffect(() => {
        if (buildState === "complete") {
            setBuildState("idle");
            setLogs([]);
            setProgress(0);
        }
    }, [config]);

    const addLog = (msg: string, type: "info" | "success" | "warn" | "error" = "info") => {
        const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
        setLogs(prev => {
            const newLogs = [...prev, `[${timestamp}] ${msg}`];
            if (newLogs.length > 20) newLogs.shift();
            return newLogs;
        });
    };

    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const startBuild = () => {
        if (buildState !== "idle" && buildState !== "complete") return;

        setBuildState("planning");
        setLogs([]);
        addLog("Initializing Project Sequence...", "info");
        setProgress(5);

        const baseTime = config.turboMode ? 1000 : 2500;
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const runSimulation = async () => {
            // 1. PLANNING
            addLog(`Analyzing ${config.projectName} requirements...`, "info");
            await delay(baseTime);
            setProgress(20);

            // 2. DESIGNING
            setBuildState("designing");
            addLog("Drafting design system...", "info");
            await delay(baseTime);

            // APPROVAL 1: DESIGN
            setBuildState("approval_design");
            return; // Pause execution
        };
        runSimulation();
    };

    const handleRework = async () => {
        setBuildState("reworking_design");
        addLog("Client requested UI refinements.", "warn");
        addLog("Adjusting design tokens...", "info");
        await new Promise(r => setTimeout(r, 2000));
        addLog("Design refined.", "success");
        setBuildState("approval_design");
    };

    const continueAfterDesign = async () => {
        setBuildState("coding");
        addLog("Design Signed Off.", "success");
        const baseTime = config.turboMode ? 1000 : 2500;
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        await delay(500);
        setProgress(40);

        // 3. CODING 
        addLog(`Spinning up ${config.projectName} instance...`, "info");
        await delay(baseTime * 1.5);
        setProgress(60);

        // 4. TESTING
        setBuildState("testing");
        addLog("Initiating security and unit test suite...", "info");
        await delay(baseTime);
        setProgress(80);

        // APPROVAL 2: DEPLOY
        setBuildState("approval_deploy");
    }

    const continueAfterDeploy = async () => {
        setBuildState("deploying");
        addLog("Global Deployment AUTHORIZED.", "success");
        const baseTime = config.turboMode ? 1000 : 2500;
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        await delay(500);

        // 5. DEPLOYING
        addLog(`Pushing ${config.projectName} to edge nodes...`, "info");
        await delay(baseTime);
        setProgress(90);

        // 6. COMPLETE
        setBuildState("complete");
        setProgress(100);
        addLog("SYSTEM IS LIVE", "success");
        triggerConfetti();
    }

    return (
        <section className="py-32 relative overflow-hidden bg-background">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest"
                    >
                        <Zap size={14} className="fill-current" /> Interactive Simulation
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Live Workspace</span></h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">Experience our workflow in real-time. Configure a project, review the work, and authorize the launch. No videos, just pure performance.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:h-[650px]">
                    {/* CONTROL PANEL */}
                    <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-2xl relative overflow-hidden group ring-1 ring-border/5">
                            <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <h3 className="flex items-center gap-3 font-bold text-foreground/80 mb-8 uppercase tracking-[0.2em] text-xs">
                                <Settings className="w-4 h-4 text-blue-500" /> Configuration
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <label className="text-[10px] text-muted-foreground font-mono mb-3 block tracking-widest">PROJECT_NAME</label>
                                    <input
                                        type="text"
                                        value={config.projectName}
                                        onChange={(e) => setConfig({ ...config, projectName: e.target.value })}
                                        className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-foreground font-mono focus:outline-none focus:border-blue-500 transition-all focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                                <div className="space-y-5">
                                    <Toggle label="Turbo Mode" icon={Zap} active={config.turboMode} color="yellow" onClick={() => setConfig({ ...config, turboMode: !config.turboMode })} />
                                    <Toggle label="Pixel Perfect" icon={Layers} active={config.pixelPerfect} color="purple" onClick={() => setConfig({ ...config, pixelPerfect: !config.pixelPerfect })} />
                                    <Toggle label="High Security" icon={Shield} active={config.security} color="red" onClick={() => setConfig({ ...config, security: !config.security })} />
                                </div>
                            </div>

                            <button
                                onClick={startBuild}
                                disabled={buildState !== "idle" && buildState !== "complete"}
                                aria-label={buildState === "idle" || buildState === "complete" ? "Start live simulation" : "Simulation in progress"}
                                className={cn(
                                    "mt-10 w-full py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all relative overflow-hidden font-mono text-sm tracking-wider",
                                    buildState === "idle" || buildState === "complete"
                                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95"
                                        : "bg-gray-800/50 text-muted-foreground border border-border/5 cursor-not-allowed"
                                )}
                            >
                                {buildState === "idle" || buildState === "complete" ? (
                                    <><Play className="w-5 h-5 fill-current" aria-hidden="true" /> INITIALIZE_ENGINE</>
                                ) : (
                                    <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> EXECUTING...</>
                                )}
                            </button>
                        </div>

                        {/* TERMINAL */}
                        <div className="flex-1 rounded-2xl border border-border bg-background/80 p-6 font-mono text-[11px] overflow-hidden flex flex-col relative min-h-[200px] shadow-2xl backdrop-blur-xl ring-1 ring-border/5">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><TerminalIcon className="w-8 h-8 text-green-500" /></div>
                            <div className="space-y-0.5 overflow-y-auto flex-1 custom-scrollbar">
                                <div className="text-muted-foreground mb-2 font-mono text-[9px]">// System handshake established...</div>
                                {logs.map((log, i) => (
                                    <LogEntry key={i} log={log} />
                                ))}
                                {(buildState !== "idle" && buildState !== "complete") && <div className="inline-block w-1.5 h-3 bg-green-500/50 ml-1 animate-pulse align-middle" />}
                            </div>
                        </div>
                    </div>

                    {/* PREVIEW WINDOW */}
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="lg:col-span-8 rounded-2xl border border-border bg-background relative flex flex-col justify-center items-center perspective-1000 shadow-[0_20px_100px_rgba(0,0,0,0.8)] h-[500px] lg:h-auto overflow-hidden ring-1 ring-border/10"
                    >
                        {/* Environment Layers */}
                        <ParallaxEnv />
                        <GitPulse projectName={config.projectName} />
                        {buildState !== "idle" && buildState !== "complete" && <TeamChat />}
                        <DebugOverlay />

                        {/* Approval Gates */}
                        <AnimatePresence>
                            {buildState === "approval_design" && (
                                <ApprovalGate type="design" onApprove={continueAfterDesign} onReject={handleRework} />
                            )}
                            {buildState === "approval_deploy" && (
                                <ApprovalGate type="deploy" onApprove={continueAfterDeploy} />
                            )}
                        </AnimatePresence>

                        <div className="absolute inset-x-0 top-0 h-8 bg-foreground/5 border-b border-border/5 flex items-center px-6 gap-3 z-20 backdrop-blur-md">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-sm" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-sm" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-sm" />
                            </div>
                            <div className="ml-auto flex items-center gap-4">
                                <LiveHuddle />
                                <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">
                                    {buildState.replace("_", " ")} SESSION
                                </div>
                            </div>
                        </div>

                        <div className={cn(
                            "relative w-full h-full pt-8 p-6 transition-all duration-500 ease-in-out",
                            (buildState === "approval_design" || buildState === "approval_deploy" || buildState === "reworking_design") && "blur-xl grayscale-[0.5] scale-[1.02]"
                        )}>
                            <AnimatePresence mode="wait">
                                {buildState === "idle" && (
                                    <motion.div key="idle" {...fadeIn} className="h-full flex flex-col items-center justify-center p-8 text-center">
                                        <div className="w-24 h-24 bg-blue-500/5 rounded-3xl flex items-center justify-center mb-8 border border-blue-500/10 shadow-inner group">
                                            <Cpu className="w-12 h-12 text-blue-500/50 group-hover:text-blue-500 transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground/80 mb-3 tracking-tight">System Hibernation</h3>
                                        <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">The Live Workspace is ready. Configure the project and initialize the build engine to begin.</p>
                                    </motion.div>
                                )}

                                {buildState === "planning" && (
                                    <motion.div key="planning" {...fadeIn} className="h-full w-full">
                                        <PlanningView projectName={config.projectName} />
                                    </motion.div>
                                )}

                                {(buildState === "designing" || buildState === "approval_design" || buildState === "reworking_design") && (
                                    <motion.div key="designing" {...fadeIn} className="h-full w-full">
                                        <DesignView
                                            pixelPerfect={config.pixelPerfect}
                                            projectName={config.projectName}
                                            isReworking={buildState === "reworking_design"}
                                        />
                                    </motion.div>
                                )}

                                {buildState === "coding" && (
                                    <motion.div key="coding" {...fadeIn} className="h-full w-full">
                                        <CodingView stage="frontend" projectName={config.projectName} />
                                    </motion.div>
                                )}

                                {buildState === "testing" && (
                                    <motion.div key="testing" {...fadeIn} className="h-full w-full">
                                        <TestingView security={config.security} />
                                    </motion.div>
                                )}

                                {(buildState === "deploying" || buildState === "approval_deploy") && (
                                    <motion.div key="deploying" {...fadeIn} className="h-full w-full">
                                        <DeploymentView />
                                    </motion.div>
                                )}

                                {buildState === "complete" && (
                                    <motion.div key="complete" {...fadeIn} className="h-full flex flex-col items-center justify-center text-center bg-background rounded-xl border border-border/5 relative">
                                        <PerformanceHUD />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", bounce: 0.5 }}
                                            className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-500/40 mb-10 relative z-10"
                                        >
                                            <CheckCircle2 className="w-12 h-12 text-white" />
                                        </motion.div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight tracking-widest">{config.projectName.toUpperCase()} IS LIVE</h2>
                                        <p className="text-muted-foreground text-lg max-w-sm mx-auto">Production environment stable. Global propagation complete.</p>
                                        <div className="mt-12 flex gap-4 relative z-50 pointer-events-auto">
                                            <button onClick={() => setBuildState("idle")} className="px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-bold hover:bg-foreground/80 transition-all shadow-xl shadow-foreground/10">RESTART BUILD</button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Progress Bar (Bottom) */}
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-foreground/5 z-30">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const fadeIn = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.02, filter: "blur(10px)" },
    transition: { duration: 0.4 }
};

function Toggle({ label, icon: Icon, active, onClick, color = "blue" }: any) {
    const colorClasses: Record<string, string> = {
        blue: active ? "bg-blue-500/10 border-blue-500/30 text-blue-400" : "",
        green: active ? "bg-green-500/10 border-green-500/30 text-green-400" : "",
        red: active ? "bg-red-500/10 border-red-500/30 text-red-400" : "",
        yellow: active ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" : "",
        purple: active ? "bg-purple-500/10 border-purple-500/30 text-purple-400" : "",
    };

    const bgColors: Record<string, string> = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
        purple: "bg-purple-500",
    }

    return (
        <button
            onClick={onClick}
            role="switch"
            aria-checked={active}
            aria-label={`Toggle ${label}`}
            className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300",
                active
                    ? colorClasses[color]
                    : "bg-foreground/5 border-border/5 text-muted-foreground hover:bg-foreground/10 hover:border-border/10"
            )}
        >
            <div className="flex items-center gap-4">
                <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                    active ? colorClasses[color].replace("text-", "bg-").replace("/10", "/20") : "bg-foreground/5"
                )}>
                    <Icon className={cn("w-4 h-4", active ? `text-${color}-400` : "text-muted-foreground")} />
                </div>
                <span className="font-bold text-xs tracking-wider uppercase">{label}</span>
            </div>
            <div className={cn(
                "w-11 h-6 rounded-full relative transition-colors shadow-inner border border-border/5",
                active ? bgColors[color] : "bg-gray-800"
            )}>
                <motion.div
                    animate={{ x: active ? 22 : 4 }}
                    className="absolute top-1 w-3.5 h-3.5 rounded-full bg-foreground transition-all shadow-md"
                />
            </div>
        </button>
    )
}
