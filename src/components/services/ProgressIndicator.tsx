"use client";
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentSection: number;
  totalSections: number;
}

const ProgressIndicator = ({
  currentSection,
  totalSections,
}: ProgressIndicatorProps) => {
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <div className="fixed -right-7 md:right-10 top-1/2 -translate-y-1/2 z-[150] flex flex-col items-center gap-6">
      <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] rotate-90 mb-10 translate-y-10">
        Section {currentSection + 1}
      </span>

      <div className="w-[2px] h-48 bg-white/5 relative rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-blue-500 origin-top"
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full transition-all duration-500 ${
              i === currentSection ? "bg-blue-500 scale-150" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
