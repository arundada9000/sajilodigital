"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, PenTool, Code, ShieldCheck, Rocket } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your vision, goals, and target audience. We research your competitors and define a roadmap for success.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    shadow: "shadow-blue-500/20",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "We create wireframes and high-fidelity mockups. You get to see exactly what your product will look like before we write a single line of code.",
    icon: PenTool,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    shadow: "shadow-purple-500/20",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Our engineers build your product using modern, scalable technologies. You have full transparency into the codebase via our client portal.",
    icon: Code,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    shadow: "shadow-green-500/20",
  },
  {
    id: 4,
    title: "Quality Assurance",
    description:
      "Rigorous testing ensures your product is bug-free, secure, and performs perfectly across all devices and browsers.",
    icon: ShieldCheck,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    shadow: "shadow-yellow-500/20",
  },
  {
    id: 5,
    title: "Launch & Scale",
    description:
      "We handle the deployment and infrastructure. After launch, we monitor performance and help you scale as your user base grows.",
    icon: Rocket,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    shadow: "shadow-red-500/20",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Circuit lines background (optional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.svg')] bg-repeat" />

      <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

      {/* Animated Beam */}
      <motion.div
        style={{
          height: useTransform(scaleY, [0, 1], ["0%", "100%"]),
          background:
            "linear-gradient(180deg, #3b82f6 0%, #a855f7 50%, #ef4444 100%)",
          boxShadow: "0 0 20px 2px rgba(168, 85, 247, 0.4)",
        }}
        className="absolute left-[39px] md:left-1/2 top-0 w-[2px] -translate-x-1/2 z-10 origin-top rounded-full"
      >
        {/* Data Packet */}
        <motion.div
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-white blur-sm hidden" // Hidden for now, beam is enough
        />
      </motion.div>

      <div className="container-custom relative z-10 space-y-32">
        {STEPS.map((step, index) => (
          <TimelineStep key={step.id} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}

function TimelineStep({ step, index }: { step: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}
    >
      {/* Icon (Center) */}
      <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 z-20">
        <div
          className={`w-20 h-20 rounded-full bg-[#0A0A0A] border-2 border-white/10 flex items-center justify-center relative group`}
        >
          {/* Pulsing ring */}
          <div
            className={`absolute inset-0 rounded-full ${step.bg} opacity-0 group-hover:opacity-20 animate-ping duration-[2s]`}
          />
          <div
            className={`absolute inset-0 rounded-full border ${step.border} opacity-50`}
          />

          <step.icon
            className={`w-8 h-8 ${step.color} relative z-10 transition-transform group-hover:scale-110`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`pl-24 md:pl-0 w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
      >
        <div
          className={`relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group hover:bg-white/[0.04] hover:${step.shadow} hover:shadow-2xl`}
        >
          {/* Corner accents */}
          <div
            className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-8 h-8 border-t border-${isEven ? "r" : "l"} ${step.border} opacity-50`}
          />
          <div
            className={`absolute bottom-0 ${isEven ? "left-0" : "right-0"} w-8 h-8 border-b border-${isEven ? "l" : "r"} ${step.border} opacity-50`}
          />

          <span
            className={`inline-block px-3 py-1.5 rounded text-xs font-mono mb-4 ${step.bg} ${step.color} border ${step.border}`}
          >
            0{step.id} // {step.title.toUpperCase()}
          </span>
          <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            {step.description}
          </p>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}
