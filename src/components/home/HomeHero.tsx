"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SplitText from "../../../components/SplitText";
import Shuffle from "../../../components/Shuffle";
import Magnetic from "../ui/Magnetic";

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-32 md:pt-40 md:pb-40"
    >
      {/* 3D Perspective Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: `rotateX(60deg) translateZ(0) translateY(-100px) scale(2)`,
            transformOrigin: "center top",
            maskImage:
              "linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)",
          }}
        />
      </div>

      {/* Interactive Spotlight Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(6, 182, 212, 0.08) 0%, transparent 40%)`,
        }}
      />

      {/* Background Cinematic Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 container-custom px-6 text-center"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
        >
          <Sparkles className="w-3 h-3" />
          <span>Architecting Legacies</span>
        </motion.div>

        {/* Main Title */}
        <div className="relative mb-12">
          <SplitText
            text="Sajilo Digital"
            tag="h1"
            className="text-6xl md:text-[12rem] font-black italic tracking-tighter leading-[0.8] uppercase text-foreground"
            delay={50}
            duration={1.2}
            splitType="chars"
            from={{ opacity: 0, y: 100, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />

          <div className="mt-8 flex justify-center">
            <Shuffle
              text="Innovation at Scale"
              className="text-sm md:text-lg font-bold text-cyan-500 tracking-[0.6em] md:tracking-[0.8em] italic opacity-50"
              shuffleTimes={1}
              duration={0.5}
            />
          </div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-16 px-4"
        >
          We build high-performance digital ecosystems for visionaries who
          refuse to settle for the average.
        </motion.p>

        {/* Animated CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          <Magnetic strength={0.2}>
            <Link
              href="/contact"
              className="group flex flex-col items-center gap-4 transition-all"
            >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-foreground/20 flex items-center justify-center bg-foreground text-background group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500">
                <ArrowRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                Initiate Sync
              </span>
            </Link>
          </Magnetic>

          <Magnetic strength={0.1}>
            <Link
              href="/projects"
              className="group flex flex-col items-center gap-4 transition-all"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-all duration-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:animate-ping" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 group-hover:opacity-100 transition-opacity">
                View Archives
              </span>
            </Link>
          </Magnetic>
        </div>
      </motion.div>

      {/* Absolute Cinematic Lines */}
      <div className="absolute top-0 left-[20%] w-[1px] h-screen bg-linear-to-b from-transparent via-foreground/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[1px] h-screen bg-linear-to-b from-transparent via-foreground/5 to-transparent pointer-events-none" />
    </section>
  );
}
