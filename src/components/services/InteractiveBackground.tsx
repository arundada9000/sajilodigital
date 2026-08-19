"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 50, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate random shards
  const shards = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 150 + 50,
    depth: Math.random() * 5 + 1,
    rotation: Math.random() * 360,
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-background select-none pointer-events-none">

      {/* 1. Base Grain Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('/noise.svg')]" />

      {/* 2. Dynamic Light Streaks (Awwwards Style) */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          x: useTransform(smoothX, [0, 1], [40, -40]),
          y: useTransform(smoothY, [0, 1], [40, -40]),
        }}
      >
        <div className="absolute top-[20%] -left-[10%] w-[120%] h-[1px] bg-linear-to-r from-transparent via-blue-500/20 to-transparent rotate-[25deg] blur-[2px]" />
        <div className="absolute top-[50%] -left-[10%] w-[120%] h-[1px] bg-linear-to-r from-transparent via-purple-500/10 to-transparent rotate-[-15deg] blur-[1px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[120%] h-[1px] bg-linear-to-r from-transparent via-emerald-500/10 to-transparent rotate-[5deg]" />
      </motion.div>

      {/* 3. Floating Glass Shards */}
      {shards.map((shard) => {
        const pX = (shard.depth) * 25;
        const pY = (shard.depth) * 25;

        return (
          <motion.div
            key={shard.id}
            className="absolute z-20"
            style={{
              left: `${shard.x}%`,
              top: `${shard.y}%`,
              width: shard.size,
              height: shard.size,
              rotate: shard.rotation,
              x: useTransform(smoothX, [0, 1], [pX, -pX]),
              y: useTransform(smoothY, [0, 1], [pY, -pY]),
            }}
          >
            <div
              className="w-full h-full border border-foreground/[0.05] rounded-[30%] bg-foreground/[0.02] backdrop-blur-[4px] mix-blend-overlay"
              style={{
                clipPath: "polygon(50% 0%, 100% 38%, 81% 91%, 19% 91%, 0% 38%)",
              }}
            />
          </motion.div>
        );
      })}

      {/* 4. Global Atmospheric Glow */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-20 z-0"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          left: useTransform(smoothX, [0, 1], ["10%", "90%"]),
          top: useTransform(smoothY, [0, 1], ["10%", "90%"]),
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 5. Vignette */}
      <div className="absolute inset-0 z-30 bg-linear-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default InteractiveBackground;
