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
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30">
      <motion.div
        className="h-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, hsl(199 89% 48%), hsl(280 65% 55%), hsl(170 80% 45%))",
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
};

export default ProgressIndicator;
