"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Mic, Settings, Volume2, VolumeX } from "lucide-react";
import SearchInput from "../header/SearchInput";
import { useState, useEffect } from "react";
import { isMuted, toggleMute, playSound } from "@/lib/sound";

interface MobileActionCenterProps {
  isOpen: boolean;
  onClose: () => void;
  onVoiceClick: () => void;
  onSettingsClick: () => void;
}

export default function MobileActionCenter({
  isOpen,
  onClose,
  onVoiceClick,
  onSettingsClick,
}: MobileActionCenterProps) {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isMuted());
  }, []);

  const handleMuteToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
    if (!newState) {
      playSound("/sounds/click.mp3");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[150] bg-background/40 backdrop-blur-2xl"
          />

          {/* Action Center Sheet */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-[160] bg-surface-deep/80 backdrop-blur-3xl border-b border-border rounded-b-[40px] px-6 pt-20 pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Decorative Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-md mx-auto space-y-8">
              {/* Header inside Action Center */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground tracking-tight uppercase italic">
                    Menu
                  </h2>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase font-bold mt-1">
                    Sajilo.Digital
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 rounded-full bg-foreground/5 border border-border text-foreground/60 hover:text-foreground transition-all active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Section */}
              <div className="space-y-4">
                <label className="block text-[10px] tracking-[0.4em] font-bold text-muted-foreground uppercase">
                  Omni Search
                </label>
                <div className="relative group">
                  <SearchInput autoFocus />
                </div>
              </div>

              {/* Quick Utilities Grid */}
              <div className="space-y-4">
                <label className="block text-[10px] tracking-[0.4em] font-bold text-muted-foreground uppercase">
                  Quick Actions
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={handleMuteToggle}
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-all active:scale-95 gap-3"
                  >
                    <div
                      className={`p-3 rounded-2xl ${muted ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"}`}
                    >
                      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                      {muted ? "Unmute" : "Mute"}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onVoiceClick();
                    }}
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-all active:scale-95 gap-3"
                  >
                    <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400">
                      <Mic size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                      Voice
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onSettingsClick();
                    }}
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-all active:scale-95 gap-3"
                  >
                    <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400">
                      <Settings size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                      Config
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative Footer Info */}
              <div className="pt-4 flex items-center justify-center gap-4 opacity-20">
                <div className="h-[1px] flex-1 bg-linear-to-r from-transparent to-foreground" />
                <span className="text-[8px] font-mono tracking-[0.5em] uppercase text-foreground">
                  Sajilo Digital
                </span>
                <div className="h-[1px] flex-1 bg-linear-to-l from-transparent to-foreground" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
