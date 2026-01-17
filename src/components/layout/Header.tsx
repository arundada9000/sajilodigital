"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mic, Settings, Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/navigation";

// External components/libs (Restored paths)
import SearchInput from "../header/SearchInput";
import SettingsSheet from "../header/SettingsSheet";
import VoiceDialog from "../header/VoiceDialog";
import { voiceControl } from "../../lib/voice/voiceControl";
import { isMuted, toggleMute, playSound } from "@/lib/sound"; // Use absolute path safely

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // States for tools
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);

  // Initialize mute state
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

  // Nepal Time Logic (GMT+5:45)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const nepalTime = new Date(utc + (3600000 * 5.75));
      const hours = nepalTime.getHours();
      const minutes = nepalTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
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

  const onMicClick = async () => {
    setVoiceOpen(true);
    setTranscript(null);
    const result = await voiceControl.startOnce();
    setTranscript(result.transcript);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 hidden md:block ${isScrolled
          ? "py-3 bg-black/60 backdrop-blur-3xl border-b border-white/5"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-[1900px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center">

            {/* 1. Left: Branding */}
            <Link href="/" className="group flex items-center gap-4 justify-self-start">
              <div className="relative w-9 h-9 overflow-hidden rounded-full border border-white/10 group-hover:border-white/30 transition-colors bg-white/5">
                <Image
                  src="/logos/circularlogo.svg"
                  alt="Sajilo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-white leading-none">Sajilo.Digital</span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 mt-1 transition-all group-hover:text-blue-500">Creative Tech</span>
              </div>
            </Link>

            {/* 2. Center: Sleek Search (Desktop Only) */}
            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-sm relative group">
                <div className="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <SearchInput />
              </div>
            </div>

            {/* 3. Right: Meta + Tools */}
            <div className="flex items-center gap-6 md:gap-10 justify-self-end">

              {/* Tools Capsule */}
              <div className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                <button
                  onClick={handleMuteToggle}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                  title={muted ? "Unmute Sound" : "Mute Sound"}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <button
                  onClick={onMicClick}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                  title="Voice Search"
                >
                  <Mic size={16} />
                </button>
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                  title="Preferences"
                >
                  <Settings size={16} />
                </button>
              </div>

              {/* Desktop Meta */}
              <div className="hidden lg:flex items-center gap-8 pl-6 border-l border-white/10">
                <div className="flex flex-col items-end">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-bold">BTN / NP</span>
                  <span className="text-[10px] tracking-widest text-white/70 font-mono mt-1">{currentTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-bold">STATUS</span>
                    <span className="text-[9px] tracking-widest text-blue-400 font-bold mt-1 uppercase">Live</span>
                  </div>
                  <div className="relative w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40" />
                  </div>
                </div>
              </div>

              {/* Mobile simplified meta */}
              <div className="lg:hidden flex items-center gap-2">
                <span className="text-[9px] tracking-[0.2em] text-white/40 font-mono">{currentTime}</span>
              </div>

            </div>
          </div>
        </div>
      </motion.header>

      {/* External Dialogs - Moved outside motion container */}
      <VoiceDialog open={voiceOpen} onClose={() => setVoiceOpen(false)} />
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
}
