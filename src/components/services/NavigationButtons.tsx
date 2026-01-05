"use client";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

interface NavigationButtonsProps {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons = ({
  currentSection,
  onPrevious,
  onNext,
  totalSections
}: NavigationButtonsProps) => {
  const isFirst = currentSection === 0;
  const isLast = currentSection === totalSections - 1;

  return (
    <div className="fixed bottom-10 right-24 md:right-32 z-[150] flex flex-col gap-4">
      <motion.button
        onClick={onPrevious}
        disabled={isFirst}
        whileHover={!isFirst ? { y: -5 } : {}}
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-xl text-white/40 hover:text-white hover:border-white/30 disabled:opacity-0 transition-all cursor-pointer"
      >
        <ChevronUp size={20} />
      </motion.button>

      <motion.button
        onClick={onNext}
        disabled={isLast}
        whileHover={!isLast ? { y: 5 } : {}}
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-xl text-white/40 hover:text-white hover:border-white/30 disabled:opacity-0 transition-all cursor-pointer"
      >
        <ChevronDown size={20} />
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
