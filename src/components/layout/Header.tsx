// components/header/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Mic, Settings, Menu, X } from "lucide-react";
import SearchInput from "../header/SearchInput";
import SettingsSheet from "../header/SettingsSheet";
import { usePreferences } from "../../lib/preferences/usePreferences";
import { searchEngine } from "../../lib/search/searchEngine";
import VoiceDialog from "../header/VoiceDialog";
import { voiceControl } from "../../lib/voice/voiceControl";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { prefs } = usePreferences(); // for theme-driven classes

  const [voiceOpen, setVoiceOpen] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onMicClick = async () => {
    setVoiceOpen(true);
    setTranscript(null);
    const result = await voiceControl.startOnce();
    setTranscript(result);
  };

  const onConfirm = () => {
    if (transcript) {
      router.push(transcript);
    }
    setVoiceOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        {/* Top row: brand + controls (desktop), compact (mobile) */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Sajilo Digital Home"
          >
            <div className="relative">
              <Image
                src={"/logos/circularlogo.svg"}
                alt="Logo"
                sizes="full"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-base md:text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } group-hover:text-(--accent-from)`}
              >
                Sajilo Digital
              </span>
              <span
                className={`text-[10px] md:text-xs transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Your Vision, Our Innovation
              </span>
            </div>
          </Link>

          {/* Right controls (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <SearchInput />
            <button
              onClick={onMicClick}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Voice assistant"
              title="Voice assistant"
            >
              <Mic className="w-5 h-5" />
            </button>

            <VoiceDialog open={voiceOpen} onClose={() => setVoiceOpen(false)} />

            <button
              onClick={() => setSettingsOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Open settings"
              title="Open settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSettingsOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Open settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={onMicClick}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Voice assistant"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle search"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search sheet */}
        {mobileOpen && (
          <div className="md:hidden pb-3">
            <SearchInput autoFocus />
          </div>
        )}
      </div>

      {/* Scroll progress */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
        <div
          className="h-full bg-linear-to-r from-(--accent-from) to-(--accent-to) transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Settings sheet/Modal */}
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
    </header>
  );
}
