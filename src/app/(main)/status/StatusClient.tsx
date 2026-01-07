"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, HardDrive, Wifi, Battery, Zap, Database, Server } from "lucide-react";

export default function StatusClient() {
    // Mock Metrics
    const [cpu, setCpu] = useState(45);
    const [ram, setRam] = useState(62);
    const [network, setNetwork] = useState(120);
    const [caffeine, setCaffeine] = useState(98);

    useEffect(() => {
        const interval = setInterval(() => {
            setCpu(prev => Math.min(100, Math.max(10, prev + (Math.random() - 0.5) * 15)));
            setRam(prev => Math.min(95, Math.max(30, prev + (Math.random() - 0.5) * 5)));
            setNetwork(prev => Math.max(0, prev + (Math.random() - 0.5) * 50));
            setCaffeine(prev => Math.max(0, prev - 0.05)); // Slowly depleting
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6 font-mono relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container-custom relative z-10 max-w-6xl">
                <header className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
                        >
                            System <span className="text-blue-500">Diagnostics</span>
                        </motion.h1>
                        <div className="flex items-center gap-3 mt-4 text-xs md:text-sm text-white/50 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Operational
                            <span className="opacity-30">|</span>
                            v3.1.0-RC
                        </div>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-xs text-white/40 mb-1">Last Updated</div>
                        <div className="font-mono text-blue-400">{new Date().toLocaleTimeString()}</div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Neural Core (CPU)", value: cpu.toFixed(1) + "%", icon: Cpu, color: "text-blue-400", bg: "bg-blue-400/10" },
                        { label: "Memory Buffer", value: ram.toFixed(1) + "%", icon: HardDrive, color: "text-purple-400", bg: "bg-purple-400/10" },
                        { label: "Network IO", value: network.toFixed(0) + "Mb/s", icon: Wifi, color: "text-green-400", bg: "bg-green-400/10" },
                        { label: "Caffeine Levels", value: caffeine.toFixed(1) + "%", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" }
                    ].map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ${metric.bg} border-l-4 border-l-${metric.color.split('-')[1]}-500/50`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <metric.icon className={`w-6 h-6 ${metric.color}`} />
                                <Activity className="w-4 h-4 text-white/20" />
                            </div>
                            <div className="text-2xl font-bold mb-1 font-mono tracking-tight">{metric.value}</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40">{metric.label}</div>
                            {/* Mini Progress Bar */}
                            <div className="w-full h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full ${metric.color.replace('text', 'bg')}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: metric.label.includes("Network") ? "60%" : metric.value }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Terminal Mockup */}
                    <motion.div
                        className="lg:col-span-2 bg-[#0a0a0a] rounded-xl border border-white/10 p-6 font-mono text-xs md:text-sm h-[300px] md:h-[400px] overflow-hidden flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                            <span className="text-white/40 uppercase tracking-widest">System Log</span>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-white/10" aria-live="polite">
                            <LogEntry time="00:01" type="INFO" msg="Initializing core subsystems..." />
                            <LogEntry time="00:02" type="SUCCESS" msg="Neural engine loaded safely." />
                            <LogEntry time="00:03" type="WARN" msg="Detecting high creativity usage." />
                            <LogEntry time="00:05" type="INFO" msg="Connecting to global nexus..." />
                            <LogEntry time="00:08" type="SUCCESS" msg="Connection established. 50Gbps uplink." />
                            <LogEntry time="00:12" type="INFO" msg="Optimizing rendering pipeline..." />
                            <LogEntry time="00:15" type="SUCCESS" msg="Next.js 16 hydated successfully." />
                            <LogEntry time="00:20" type="INFO" msg="Monitoring user interaction events..." />
                            {[...Array(5)].map((_, i) => (
                                <LogEntry
                                    key={i}
                                    time={`00:${25 + i}`}
                                    type="INFO"
                                    msg={`Heartbeat check: NODE_${Math.floor(Math.random() * 999)} - OK`}
                                    opacity={0.3 + (i * 0.1)}
                                />
                            ))}
                            <div className="animate-pulse text-blue-500 mt-2">_</div>
                        </div>
                    </motion.div>

                    {/* Service Status */}
                    <motion.div
                        className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/60 mb-6 flex items-center gap-2">
                            <Server className="w-4 h-4" /> Global Services
                        </h3>
                        <div className="space-y-4">
                            <ServiceRow name="Web Core" status="Operational" />
                            <ServiceRow name="Database Shards" status="Operational" />
                            <ServiceRow name="CDN Edge" status="Operational" />
                            <ServiceRow name="AI Inference" status="Degraded" color="text-yellow-400" />
                            <ServiceRow name="Email Relay" status="Operational" />
                            <ServiceRow name="Analytics" status="Maintenance" color="text-blue-400" />
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Storage Usage</div>
                            <div className="flex items-end gap-2 mb-1">
                                <span className="text-2xl font-bold">842</span>
                                <span className="text-sm text-white/50 mb-1">TB Used</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-white h-full w-[70%]"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function LogEntry({ time, type, msg, opacity = 1 }: { time: string, type: string, msg: string, opacity?: number }) {
    const color = type === "SUCCESS" ? "text-green-400" : type === "WARN" ? "text-yellow-400" : "text-blue-300";
    return (
        <div className="flex gap-4" style={{ opacity }}>
            <span className="text-white/30 shrink-0">[{time}]</span>
            <span className={`font-bold w-16 shrink-0 ${color}`}>{type}</span>
            <span className="text-white/70">{msg}</span>
        </div>
    )
}

function ServiceRow({ name, status, color = "text-green-400" }: { name: string, status: string, color?: string }) {
    return (
        <div className="flex justify-between items-center group cursor-default">
            <span className="text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
            <span className={`text-xs font-mono py-1 px-2 rounded bg-white/5 ${color} border border-white/5`}>{status}</span>
        </div>
    )
}
