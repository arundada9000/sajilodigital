"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black overflow-hidden font-sans relative">

      {/* 1. Background Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] contrast-150 brightness-150" />
      </div>

      {/* 2. Top Branding Meta */}
      <div className="absolute top-10 left-10 hidden md:flex items-center gap-4 opacity-40">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
          <Image src="/logos/circularlogo.svg" alt="Sajilo" fill className="object-cover" />
        </div>
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase">Sajilo.Digital / 404</span>
      </div>

      <div className="absolute top-10 right-10 hidden md:flex flex-col items-end opacity-40">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase">System_State: Disconnected</span>
        <span className="text-[9px] tracking-widest font-mono mt-1 uppercase italic text-blue-400">Error_Code: 0x800404</span>
      </div>

      {/* 3. Main Content Content */}
      <div className="relative z-10 text-center max-w-2xl">

        {/* Animated 404 */}
        <div className="relative mb-8 select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[120px] md:text-[220px] font-black tracking-tighter leading-none italic"
          >
            404
          </motion.h1>

          {/* Glitch Overlay Layers */}
          <motion.h1
            animate={{
              x: [-2, 2, -1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 2
            }}
            className="absolute inset-0 text-[120px] md:text-[220px] font-black tracking-tighter leading-none italic text-blue-500/30 -z-10 blur-[2px]"
          >
            404
          </motion.h1>
          <motion.h1
            animate={{
              x: [2, -2, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 1.5
            }}
            className="absolute inset-0 text-[120px] md:text-[220px] font-black tracking-tighter leading-none italic text-red-500/20 -z-10 blur-[1px]"
          >
            404
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 uppercase italic">
            Lost in the <span className="text-white/20">Digital Archive.</span>
          </h2>
          <p className="text-sm md:text-base text-white/40 max-w-sm mx-auto leading-relaxed mb-12">
            The resource you are attempting to access does not exist or has been relocated to another dimension.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-24">
          <Link
            href="/"
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all duration-500 shadow-xl shadow-white/10"
          >
            <Home size={14} />
            Return to Origin
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-4 bg-transparent border border-white/10 text-white/40 px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white hover:border-white/30 transition-all duration-500"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Previous Session
          </button>
        </div>

        {/* Minimal Directory */}
        <div className="pt-12 border-t border-white/5 inline-block">
          <h3 className="text-[9px] tracking-[0.5em] font-bold text-white/20 uppercase mb-8">Reconnect</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {["Projects", "Services", "About", "Contact", "Gallery"].map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase() === "home" ? "" : page.toLowerCase()}`}
                className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/30 hover:text-blue-500 transition-colors"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Scroll Indicator (Decorative) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-10 bg-linear-to-b from-transparent via-white to-transparent" />
        <span className="text-[8px] tracking-[0.8em] font-bold uppercase">System_End</span>
      </div>

    </div>
  );
}
