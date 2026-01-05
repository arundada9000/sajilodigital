"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const PAGES = [
    "home", "about", "blog", "contact", "faq", "gallery",
    "pricing", "projects", "services", "testimonials"
];

const COMMANDS: Record<string, string | (() => string)> = {
    help: "Known commands: ls, cd, status, hack, about, whoami, social, matrix, date, echo, ceo, cto, team, tech, location, coffee, clear",
    about: "Sajilo Digital: A premium digital architecture firm based in Nepal. We specialize in high-performance Web Ecosystems, Neural UX/UI, and Algorithmic SEO.",
    ceo: "CEO/Founder: Arun Neupane. Vision: To architect digital legacies for global visionaries.",
    cto: "CTO: Sajilo AI Core. Status: Syncing with the future...",
    team: "The Sajilo Collective consists of 15+ specialists in Full-Stack Engineering, Digital Strategy, and Avant-Garde Design.",
    tech: "Primary Stack: Next.js 16, React, TypeScript, GSAP, Framer Motion, PostgreSQL, AWS, Vercel.",
    location: "Nexus Hub: Horizon Chowk, Butwal, Nepal. Lat: 27.7006, Long: 83.4484.",
    pricing: "Modular Architecture: Starting from 500$ (Standard) to 2000$+ (Enterprise). Type 'goto pricing' for details.",
    status: () => `SYSTEM_CORE: v3.1.0 [OPTIMIZED]
> Neural_Link: STABLE
> Uptime: ${Math.floor(Math.random() * 99) + 1}d ${Math.floor(Math.random() * 23)}h
> Creativity: 100% (Surge Detected)
> Coffee: [CRITICAL] Recharge immediately.`,
    whoami: "Subject: Honored Guest. Identity: Visionary. Access: Level 1 (Read/Interact).",
    social: "Connectivity:\n> LinkedIn: linkedin.com/company/sajilodigital\n> Facebook: fb.com/sajilodigital\n> Github: github.com/sajilodigital",
    date: () => `Terminal Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })} (NST)`,
    coffee: "Error 418: I'm a teapot. No, wait, I'm a server. Please insert Caffeine-Injection-System.",
    pizza: "Searching for local pizza outlets... Found 4 options. Ordering disabled for security reasons.",
    sajilo: `
   _____         _ _ _      
  |   __|___ ___|_| | |_ _  
  |__   | .'| . | | | | . | 
  |_____|__,|___|_|_|_|___| 
                            
  SAJILODIGITAL CORE v3.1.0 (PROTOTYPE)
`,
    hack: "Vulnerability Scan: 0 found.\nFirewall: UNBREAKABLE.\nMainframe: ACCESS DENIED.\nHint: Try 'matrix' instead.",
    ls: `Indexed Directories: \n${PAGES.map(p => `  /${p}`).join("\n")}`,
    sudo: "User not in the sudoers file. This incident will be reported to the CEO.",
    matrix: "Green-Rain sub-routine: [INITIALIZED]",
    ping: () => `64 bytes from digital_nexus: icmp_seq=1 ttl=64 time=${(Math.random() * 10 + 5).toFixed(2)}ms`,
    exit: "Process terminated. Refresh page to restart kernel.",
};

export default function NexusTerminal() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["SajiloDigital Core [Version 3.1.0]", "Type 'help' to see active protocols."]);
    const [isGlitching, setIsGlitching] = useState(false);
    const [isWarping, setIsWarping] = useState(false);
    const [isMatrix, setIsMatrix] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Fix: Prevent auto-focus on load to avoid jump
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const parts = input.trim().split(" ");
        const cmd = parts[0].toLowerCase();
        const arg = parts[1]?.toLowerCase();

        if (cmd === "clear") {
            setHistory([]);
        } else if (cmd === "hack") {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 1000);
            setHistory([...history, `> ${input}`, COMMANDS.hack as string]);
        } else if (cmd === "echo") {
            const text = parts.slice(1).join(" ");
            setHistory([...history, `> ${input}`, text || " "]);
        } else if (cmd === "matrix") {
            setIsMatrix(!isMatrix);
            setHistory([...history, `> ${input}`, !isMatrix ? COMMANDS.matrix as string : "[TERMINATED] Matrix protocol manual override."]);
        } else if (cmd === "cd" || cmd === "goto" || cmd === "move") {
            const page = arg;
            if (PAGES.includes(page)) {
                setHistory([...history, `> ${input}`, `Jump sequence to /${page} confirmed...`]);
                setIsWarping(true);
                setTimeout(() => {
                    router.push(`/${page === "home" ? "" : page}`);
                }, 1500);
            } else {
                setHistory([...history, `> ${input}`, `Invalid coordinate: ${page}. Use 'ls' for valid nodes.`]);
            }
        } else if (cmd in COMMANDS) {
            const output = typeof COMMANDS[cmd] === "function" ? (COMMANDS[cmd] as Function)() : COMMANDS[cmd];
            setHistory([...history, `> ${input}`, output]);
        } else if (cmd !== "") {
            setHistory([...history, `> ${input}`, `Command rejected: ${cmd}. Unrecognized by Sajilo_Core.`]);
        }

        setInput("");
    };

    return (
        <section className="relative py-20 bg-[#050505] px-6">
            <AnimatePresence>
                {isWarping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
                    >
                        {[...Array(80)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    scale: [0, 10],
                                    x: (Math.random() - 0.5) * 2000,
                                    y: (Math.random() - 0.5) * 2000,
                                    opacity: [1, 0]
                                }}
                                transition={{ duration: 1, ease: "easeIn" }}
                                className="absolute w-1 h-40 bg-cyan-500 rounded-full blur-[4px]"
                            />
                        ))}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-white font-black text-6xl tracking-[0.6em] uppercase italic bg-black/60 backdrop-blur-3xl px-16 py-8 border border-white/20 shadow-2xl shadow-cyan-500/20"
                        >
                            Syncing
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container-custom">
                <div className="mb-12">
                    <h2 className="text-[10px] items-center gap-2 font-black uppercase tracking-[0.8em] text-white/40 mb-4 flex">
                        <span className="w-12 h-px bg-white/20" />
                        Core Diagnostics
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                        Nexus Terminal <span className="text-blue-500">v3.1.</span>
                    </h3>
                </div>

                <motion.div
                    animate={{
                        // Fix: Isolate glitch transition from spring
                        ...(isGlitching ? {
                            x: [0, -4, 4, -4, 0],
                            skewX: [0, 8, -8, 4, 0],
                            filter: ["hue-rotate(0deg)", "hue-rotate(180deg)", "hue-rotate(0deg)"]
                        } : {}),
                        ...(isFullscreen ? {
                            width: "100%",
                            maxWidth: "100%",
                            height: "85vh"
                        } : {
                            width: "100%",
                            maxWidth: "1024px",
                            height: isMinimized ? "44px" : "500px"
                        })
                    }}
                    transition={isGlitching ? {
                        duration: 0.5,
                        ease: "linear",
                        repeat: 0
                    } : {
                        type: "spring",
                        stiffness: 150,
                        damping: 20
                    }}
                    className="relative mx-auto bg-black rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs md:text-sm group"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 backdrop-blur-md cursor-default">
                        <div className="flex gap-2.5">
                            <button onClick={() => setHistory([])} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-all active:scale-90" title="Purge History" />
                            <button onClick={() => setIsMinimized(!isMinimized)} className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-all active:scale-90" title="Suspend Module" />
                            <button onClick={() => setIsFullscreen(!isFullscreen)} className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-all active:scale-90" title="Maximize Throughput" />
                        </div>
                        <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">
                            sajilodigital_kernel.bin@localhost
                        </span>
                        <div className="w-12 text-right">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse ml-auto" />
                        </div>
                    </div>

                    <AnimatePresence>
                        {!isMinimized && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="p-6 h-[calc(100%-44px)] flex flex-col relative"
                            >
                                {/* Matrix Rain */}
                                {isMatrix && (
                                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmZGRmJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxVfF795PZC/giphy.gif')] bg-repeat opacity-40 mix-blend-screen" />
                                    </div>
                                )}

                                <div
                                    ref={scrollRef}
                                    className="relative z-10 flex-1 overflow-y-auto space-y-2 mb-6 scrollbar-hide text-cyan-500/80 font-medium selection:bg-cyan-500/30 selection:text-white"
                                >
                                    {history.map((line, i) => (
                                        <pre key={i} className="whitespace-pre-wrap leading-relaxed break-all drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                                            {line}
                                        </pre>
                                    ))}
                                </div>

                                <form onSubmit={handleCommand} className="relative z-10 flex items-center gap-3 border-t border-white/5 pt-5">
                                    <span className="text-green-500 font-black tracking-tighter">root@sajilo:~$</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 placeholder:text-white/10"
                                        placeholder="execute protocol..."
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* CRT FX */}
                    <div className="absolute inset-0 pointer-events-none z-50">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/[0.04] to-transparent bg-[length:100%_4px] animate-scanline" />
                        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
