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

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center glow-primary">
              <span className="text-xl font-bold text-primary-foreground">
                ✦
              </span>
            </div>
            <span className="text-lg font-medium text-foreground/80">
              Sajilo Digital
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">2025</span>
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Year in Review
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Let&apos;s celebrate what made 2025 special
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={onStart}
            className="glass px-8 py-4 rounded-full text-lg font-semibold text-foreground border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start the journey
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground text-sm flex flex-col items-center gap-2"
          >
            <span>or scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
