"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Import images
import featureAi from "@/components/sheeps.jpg";
import featureTranslation from "@/components/sheeps.jpg";
import featureVideo from "@/components/sheeps.jpg";
import featureAnniversary from "@/components/sheeps.jpg";
import featureGaming from "@/components/sheeps.jpg";
import featureTabs from "@/components/sheeps.jpg";
import featureSecurity from "@/components/sheeps.jpg";
import featureMemory from "@/components/sheeps.jpg";
import featureImage from "@/components/sheeps.jpg";
import featureShopping from "@/components/sheeps.jpg";
import featurePinning from "@/components/sheeps.jpg";

const images = [
  { src: featureAi, x: 5, y: 10 },
  { src: featureTranslation, x: 80, y: 5 },
  { src: featureVideo, x: 15, y: 75 },
  { src: featureAnniversary, x: 85, y: 70 },
  { src: featureGaming, x: 50, y: 5 },
  { src: featureTabs, x: 3, y: 45 },
  { src: featureSecurity, x: 92, y: 40 },
  { src: featureMemory, x: 70, y: 85 },
  { src: featureImage, x: 25, y: 90 },
  { src: featureShopping, x: 40, y: 80 },
  { src: featurePinning, x: 60, y: 15 },
];

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/70 to-background z-10" />

      {/* Spotlight effect following cursor */}
      <motion.div
        className="absolute w-150 h-150 rounded-full pointer-events-none z-20"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          x: useTransform(smoothX, [0, 1], [-300, window.innerWidth - 300]),
          y: useTransform(smoothY, [0, 1], [-300, window.innerHeight - 300]),
        }}
      />

      {/* Floating images that react to cursor */}
      {images.map((img, index) => {
        const depth = (index % 3) + 1;
        const parallaxFactor = depth * 15;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${img.x}%`,
              top: `${img.y}%`,
              x: useTransform(
                smoothX,
                [0, 1],
                [parallaxFactor, -parallaxFactor]
              ),
              y: useTransform(
                smoothY,
                [0, 1],
                [parallaxFactor, -parallaxFactor]
              ),
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative"
            >
              <Image
                src={img.src}
                sizes="100%"
                width={0}
                height={0}
                priority
                alt=""
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-xl opacity-60 hover:opacity-90 transition-opacity duration-300"
                style={{
                  filter: `blur(${depth * 0.5}px)`,
                }}
              />
              <div className="absolute inset-0 rounded-xl bg-linear-to-t from-background/60 to-transparent" />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/15 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default InteractiveBackground;
