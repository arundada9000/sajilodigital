"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons = ({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
}: NavigationButtonsProps) => {
  const isFirst = currentSection === 0;
  const isLast = currentSection === totalSections - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      <Button
        variant="outline"
        size="lg"
        onClick={onPrevious}
        disabled={isFirst}
        className="glass border-border/50 hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed group"
      >
        <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back
      </Button>

      <div className="flex items-center gap-2 px-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="lg"
        onClick={onNext}
        disabled={isLast}
        className="glass border-border/50 hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed group"
      >
        Next
        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

export default NavigationButtons;
