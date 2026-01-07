"use client";

import React, { useEffect } from "react";
import { useMotionValue, motion, useSpring } from "motion/react";

interface GrainProps {
    opacity?: number;
    zIndex?: number;
}

const Grain: React.FC<GrainProps> = ({ opacity = 0.03, zIndex = 50 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(-e.clientX * 0.05); // Subtle shift
            y.set(-e.clientY * 0.05);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex,
                opacity,
                x: smoothX,
                y: smoothY,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                width: "110vw", // Extra width to prevent edges from showing
                height: "110vh",
                left: "-5vw",
                top: "-5vh",
            }}
        />
    );
};

export default Grain;
