"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NexusTerminal from "../home/NexusTerminal";

export default function GlobalTerminal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Toggle on CTRL+K or CMD+K
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            // Close on Escape
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -10 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 0.8
                        }}
                        className="w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <NexusTerminal isOverlay={true} />
                        <div className="text-center mt-4 text-white/30 text-xs font-mono uppercase tracking-widest">
                            [ESC] to Hibernate • [CTRL+K] to Toggle
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
