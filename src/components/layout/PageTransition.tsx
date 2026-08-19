"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // We use a key to force re-render of the animation on route change
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
        // Determine total animation time.
        // 5 columns * 0.1 delay + 0.5 duration + 0.2 exit delay = ~1.2s total
        // We want to unlock scrolling slightly before it finishes
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsActive(false);
            document.body.style.overflow = "";
        }, 1200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, [pathname]);

    return (
        <>
            <div className={isActive ? "pointer-events-none" : ""}>
                {children}
            </div>

            <AnimatePresence mode="wait">
                {isActive && (
                    <div className="fixed inset-0 z-[100] flex pointer-events-none">
                        {/* We create 5 columns for a sophisticated "shutter" effect */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: "100%" }}
                                animate={{ height: "0%" }}
                                exit={{ height: "0%" }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "human" snap
                                    delay: 0.2 + (i * 0.05), // Staggered reveal
                                }}
                                className="relative flex-1 bg-background border-r border-border last:border-r-0 overflow-hidden"
                            >
                                {/* Inner decorative line to add depth/texture */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10" />

                                {/* Optional: Subtle brand color wash at the very bottom of the shutter */}
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-900/20 to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
