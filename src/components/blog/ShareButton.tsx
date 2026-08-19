"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { playSound } from "@/lib/sound";
import { motion, AnimatePresence } from "framer-motion";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            playSound("/sounds/click.mp3");

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-foreground/5 border border-border hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 relative group"
            title="Share Article"
        >
            <AnimatePresence mode="wait">
                {copied ? (
                    <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Check className="w-5 h-5 text-green-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="share"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Share2 className="w-5 h-5" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tooltip */}
            <AnimatePresence>
                {copied && (
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-md pointer-events-none"
                    >
                        Copied!
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
