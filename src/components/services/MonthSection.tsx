"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";

interface MonthSectionProps {
  month: string;
  title: string;
  description: string;
  highlightText: string;
  image: StaticImageData;
  isReversed?: boolean;
  accentColor?: "primary" | "secondary" | "accent";
  isActive?: boolean;
}

const MonthSection = ({
  month,
  title,
  description,
  highlightText,
  image,
  isReversed = false,
  accentColor = "primary",
  isActive = true,
}: MonthSectionProps) => {
  const glowClasses = {
    primary: "glow-primary",
    secondary: "glow-secondary",
    accent: "glow-accent",
  };

  const borderClasses = {
    primary: "border-primary/30",
    secondary: "border-secondary/30",
    accent: "border-accent/30",
  };

  const textClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  const bgClasses = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/10",
    accent: "bg-accent/10",
  };

  return (
    <section className="h-screen w-full flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className={`absolute inset-0 opacity-30 ${bgClasses[accentColor]}`}
      />
      <motion.div
        className={`absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 ${
          accentColor === "primary"
            ? "bg-primary"
            : accentColor === "secondary"
            ? "bg-secondary"
            : "bg-accent"
        }`}
        style={{
          left: isReversed ? "60%" : "-10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      <div
        className={`max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10`}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
          animate={
            isActive
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isReversed ? 60 : -60 }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={isReversed ? "md:order-2" : ""}
        >
          <motion.span
            className={`inline-block text-sm font-semibold tracking-widest uppercase ${textClasses[accentColor]} mb-4 px-4 py-2 rounded-full ${bgClasses[accentColor]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {month}
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {description.split(highlightText).map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="font-semibold text-foreground">
                    {highlightText}
                  </span>
                )}
              </span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              className={`glass ${borderClasses[accentColor]} hover:bg-muted/50 transition-all duration-300`}
            >
              Try now
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -60 : 60, scale: 0.85 }}
          animate={
            isActive
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: isReversed ? -60 : 60, scale: 0.85 }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`relative ${isReversed ? "md:order-1" : ""}`}
        >
          <div
            className={`relative rounded-3xl overflow-hidden ${glowClasses[accentColor]}`}
          >
            <motion.img
              // src={image}
              src="/services/the-shop.gif"
              alt={title}
              className="w-full aspect-4/3 object-cover"
              initial={{ scale: 1.1 }}
              animate={isActive ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Decorative frame */}
          <div
            className={`absolute -inset-2 rounded-3xl border ${borderClasses[accentColor]} opacity-30`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MonthSection;
