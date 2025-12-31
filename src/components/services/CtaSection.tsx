"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "🎯", text: "Help me create a monthly budget plan for 2026" },
  { icon: "✈️", text: "Build a travel planning checklist" },
  { icon: "💰", text: "Help me save more money in 2026" },
  { icon: "📝", text: "Create a fun quiz about 2025 highlights" },
  { icon: "⚡", text: "List ten everyday tasks I can automate" },
  { icon: "🎯", text: "Help me set goals for 2026" },
];

const CtaSection = () => {
  return (
    <section className="flex-1 flex items-center py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Your AI-Powered </span>
            <span className="text-gradient">Companion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step into 2026 with AI, your companion built right into your
            experience.
          </p>
        </motion.div>

        {/* service cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-xl p-4 cursor-pointer transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{service.icon}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-linear-to-r from-primary via-secondary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary hover:opacity-90 transition-all duration-300"
          >
            Try AI Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
