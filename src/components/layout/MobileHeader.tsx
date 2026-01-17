"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, Mic, Settings } from "lucide-react";
import MobileActionCenter from "./MobileActionCenter";
import VoiceDialog from "../header/VoiceDialog";

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [actionCenterOpen, setActionCenterOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);

  // Nepal Time Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const nepalTime = new Date(utc + 3600000 * 5.75);
      const hours = nepalTime.getHours();
      const minutes = nepalTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-[140] flex justify-center px-6 md:hidden pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`
            pointer-events-auto
            flex items-center justify-between
            w-full max-w-[400px] h-14 px-4
            rounded-full bg-black/40 backdrop-blur-2xl
            border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]
            transition-all duration-500
            ${isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"}
          `}
        >
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 active:scale-95 transition-transform"
          >
            <div className="relative w-8 h-8 overflow-hidden rounded-full border border-white/20 bg-white/5">
              <Image
                src="/logos/circularlogo.svg"
                alt="Sajilo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white leading-none uppercase">
                Sajilo
              </span>
              <span className="text-[7px] tracking-[0.3em] text-blue-400 font-bold uppercase mt-0.5 animate-pulse">
                Digital
              </span>
            </div>
          </Link>

          {/* Center: Meta Info */}
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
              {currentTime}
            </span>
          </div>

          {/* Right: Action Trigger */}
          <button
            onClick={() => setActionCenterOpen(true)}
            className="flex items-center gap-2 p-1.5 pl-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all active:scale-90"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
              Menu
            </span>
            <div className="p-1 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              <Menu size={14} className="text-white" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Action Center Overlay */}
      <MobileActionCenter
        isOpen={actionCenterOpen}
        onClose={() => setActionCenterOpen(false)}
        onVoiceClick={() => setVoiceOpen(true)}
        onSettingsClick={() => window.dispatchEvent(new CustomEvent('toggle-settings'))}
      />

      {/* Re-use existing dialogs */}
      <VoiceDialog open={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </>
  );
}
