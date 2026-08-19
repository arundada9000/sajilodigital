"use client";
import { motion } from "framer-motion";
import InteractiveBackground from "./InteractiveBackground";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <InteractiveBackground />

      {/* CSS-based Grid Overlay (Replacing static SVG) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 md:gap-4 mb-6 md:mb-4"
            >
              <div className="w-8 md:w-12 h-[1px] bg-blue-500/50" />
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] font-extrabold uppercase text-blue-400">Services Portfolio</span>
              <div className="w-8 md:w-12 h-[1px] bg-blue-500/50" />
            </motion.div>

            <h1 className="text-5xl md:text-[140px] lg:text-[180px] font-black tracking-tighter leading-[1] md:leading-[0.85] italic text-foreground uppercase select-none">
              Innovation<br />
              <span className="text-foreground/10">Defined.</span>
            </h1>
          </div>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16 font-medium italic">
            "We transform complex challenges into elegant digital solutions. Explore our suite of creative technology services."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.button
            onClick={onStart}
            className="group relative px-10 md:px-12 py-5 bg-foreground text-background rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Start the Tour</span>
            <motion.div
              className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </motion.button>

          <div className="flex items-center gap-6 md:gap-10 opacity-20">
            {[
              { label: "Scale", val: "1.0X" },
              { label: "Mode", val: "STORY_v2" },
              { label: "Access", val: "GRANTED" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-start gap-1">
                <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">{stat.label}</span>
                <span className="text-[9px] md:text-[10px] font-mono">{stat.val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 opacity-30"
        >
          <div className="w-[1px] h-8 md:h-12 bg-linear-to-b from-transparent via-foreground to-transparent" />
          <span className="text-[7px] md:text-[8px] tracking-[0.6em] md:tracking-[0.8em] font-bold uppercase">Begin Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
