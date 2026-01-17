"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  RotateCw,
  ArrowUp,
  Share2,
  Terminal,
  Settings,
  Copy,
  QrCode,
  Instagram,
  Facebook,
  Github,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { playSound } from "@/lib/sound";
import QRModal from "./QRModal";

interface ContextMenuItemProps {
  icon: any;
  label: string;
  onClick?: () => void;
  hasSubmenu?: boolean;
  isActive?: boolean;
}

const ContextMenuItem = ({
  icon: Icon,
  label,
  onClick,
  hasSubmenu,
  isActive,
}: ContextMenuItemProps) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    className={`
      w-full flex items-center justify-between px-4 py-2.5 rounded-xl
      transition-all duration-300 group
      ${isActive ? "bg-blue-500/20 text-blue-400" : "hover:bg-white/5 text-white/60 hover:text-white"}
    `}
  >
    <div className="flex items-center gap-3">
      <Icon
        size={16}
        className={
          isActive
            ? "text-blue-400"
            : "text-current opacity-50 group-hover:opacity-100 transition-opacity"
        }
      />
      <span className="text-[10px] font-bold uppercase tracking-widest">
        {label}
      </span>
    </div>
    {hasSubmenu && (
      <ChevronRight
        size={14}
        className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-400"
      />
    )}
  </button>
);

export default function CustomContextMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showShareSub, setShowShareSub] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const menuWidth = 220;
    const menuHeight = 320;

    let x = e.clientX;
    let y = e.clientY;

    // Self-aligning logic
    if (x + menuWidth > window.innerWidth) x -= menuWidth;
    if (y + menuHeight > window.innerHeight) y -= menuHeight;

    // Precision adjustment: Ensure it doesn't open off-screen
    x = Math.max(10, Math.min(x, window.innerWidth - menuWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - menuHeight - 10));

    setPosition({ x, y });
    setIsVisible(true);
    setShowShareSub(false);
    playSound("/sounds/click.mp3");
  }, []);

  const closeMenu = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", closeMenu);
    window.addEventListener("scroll", closeMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [handleContextMenu, closeMenu]);

  const handleAction = (action: () => void) => {
    action();
    closeMenu();
  };

  const shareSocial = (platform: string) => {
    let shareUrl = "";

    switch (platform) {
      case "instagram":
        shareUrl = "https://instagram.com/sajilo_digital";
        break;
      case "facebook":
        shareUrl = "https://www.facebook.com/profile.php?id=61579846778258";
        break;
      case "github":
        shareUrl = "https://github.com/sajhilodigital";
        break;
      case "youtube":
        shareUrl = "https://youtube.com/@sajilo_digital";
        break;
    }

    if (shareUrl) window.open(shareUrl, "_blank");
    playSound("/sounds/click.mp3");
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ top: position.y, left: position.x }}
            className="fixed z-[99999] w-[220px] bg-[#050505]/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto overflow-visible"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Nav Group */}
            <div className="space-y-0.5 mb-2 pb-2 border-b border-white/5">
              <ContextMenuItem
                icon={ArrowLeft}
                label="Step Back"
                onClick={() => handleAction(() => window.history.back())}
              />
              <ContextMenuItem
                icon={RotateCw}
                label="Re-Sync Page"
                onClick={() => handleAction(() => window.location.reload())}
              />
              <ContextMenuItem
                icon={ArrowUp}
                label="Jump to Top"
                onClick={() =>
                  handleAction(() =>
                    window.scrollTo({ top: 0, behavior: "smooth" }),
                  )
                }
              />
            </div>

            {/* Utility Group */}
            <div className="space-y-0.5">
              <div
                className="relative"
                onMouseEnter={() => setShowShareSub(true)}
                onMouseLeave={() => setShowShareSub(false)}
              >
                <ContextMenuItem
                  icon={Share2}
                  label="Share"
                  hasSubmenu
                  isActive={showShareSub}
                />

                {/* Nested Share Submenu */}
                <AnimatePresence>
                  {showShareSub && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={`
                        absolute top-0 w-[180px] bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl
                        ${position.x + 220 + 180 > window.innerWidth ? "-left-[185px]" : "left-[225px]"}
                      `}
                    >
                      <ContextMenuItem
                        icon={Copy}
                        label="Copy Uplink"
                        onClick={() => {
                          handleAction(() => {
                            navigator.clipboard.writeText(window.location.href);
                            playSound("/sounds/click.mp3");
                          });
                        }}
                      />
                      <ContextMenuItem
                        icon={QrCode}
                        label="Generate QR"
                        onClick={() => {
                          handleAction(() => setQrOpen(true));
                        }}
                      />
                      <div className="h-[1px] bg-white/5 my-1" />
                      <ContextMenuItem
                        icon={Instagram}
                        label="Instagram"
                        onClick={() => shareSocial("instagram")}
                      />
                      <ContextMenuItem
                        icon={Facebook}
                        label="Facebook"
                        onClick={() => shareSocial("facebook")}
                      />
                      <ContextMenuItem
                        icon={Github}
                        label="Github"
                        onClick={() => shareSocial("github")}
                      />
                      <ContextMenuItem
                        icon={Youtube}
                        label="Youtube"
                        onClick={() => shareSocial("youtube")}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ContextMenuItem
                icon={Terminal}
                label="Sajilo Terminal"
                onClick={() => {
                  handleAction(() => {
                    window.dispatchEvent(
                      new KeyboardEvent("keydown", { key: "k", ctrlKey: true }),
                    );
                  });
                }}
              />

              <ContextMenuItem
                icon={Settings}
                label="Settings"
                onClick={() => {
                  handleAction(() => {
                    // Trigger settings via a custom event that layout components can listen to
                    window.dispatchEvent(new CustomEvent("toggle-settings"));
                  });
                }}
              />
            </div>

            {/* Branded Footer */}
            <div className="mt-2 pt-2 border-t border-white/5 px-4 pb-1">
              <p className="text-[7px] font-mono tracking-[0.4em] text-white/20 uppercase text-center">
                Sajilo Digital
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QRModal
        isOpen={qrOpen}
        onClose={() => setQrOpen(false)}
        url={typeof window !== "undefined" ? window.location.href : ""}
      />
    </>
  );
}
