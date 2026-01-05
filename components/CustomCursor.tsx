"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(isTouchDevice);
        if (isTouchDevice) return;

        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Dynamic hover detection for links and buttons
        const targets = document.querySelectorAll("a, button, [role='button']");
        targets.forEach((target) => {
            target.addEventListener("mouseenter", handleHoverStart);
            target.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            targets.forEach((target) => {
                target.removeEventListener("mouseenter", handleHoverStart);
                target.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    if (isTouch) return null;

    return (
        <motion.div
            style={{
                translateX: smoothX,
                translateY: smoothY,
                left: -16,
                top: -16,
                opacity: isVisible ? 1 : 0,
            }}
            animate={{
                scale: isHovered ? 2 : 1,
                backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)",
            }}
            className="fixed w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        >
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-1 h-1 bg-black rounded-full"
                />
            )}
        </motion.div>
    );
}
