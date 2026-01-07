"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { playSound } from "../lib/sound";

type SubMenuItem = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type DockSubMenuProps = {
  trigger: ReactNode;
  items: SubMenuItem[];
};

export default function DockSubMenu({ trigger, items }: DockSubMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // const portalRef = useRef<HTMLDivElement>(null); // No longer needed with overlay approach
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- Outside click (Desktop only - Mobile uses overlay) ---------------- */
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      if (!isMobile) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [isMobile]);

  /* ---------------- Keyboard navigation ---------------- */
  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") setActiveIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowUp")
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
      if (e.key === "Enter") {
        router.push(items[activeIndex].href);
        playSound("/sounds/click.mp3");
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, activeIndex, items, router]);

  /* ---------------- Sync active item with route ---------------- */
  useEffect(() => {
    const index = items.findIndex((i) => pathname.startsWith(i.href));
    if (index !== -1) setActiveIndex(index);
  }, [pathname, items]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isMobile && !open) {
      playSound("/sounds/hover.mp3");
      setOpen(true);
    }
  };

  const handleLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 150); // Grace period
    }
  };

  return (
    <div
      ref={ref}
      className="relative"
      onClick={(e) => {
        e.stopPropagation();
        playSound("/sounds/click.mp3");
        // On mobile, this main toggle matters. On desktop, hover handles it.
        // But we keep it toggle-able for consistency or click users.
        setOpen((v) => !v);
      }}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      {/* -------- Trigger with ACTIVE GLOW -------- */}
      <motion.div
        animate={{
          boxShadow: items.some((i) => pathname.startsWith(i.href))
            ? "0 0 12px rgba(255,255,255,0.6)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="rounded-full"
      >
        {trigger}
      </motion.div>

      {/* ---------------- Submenu ---------------- */}
      <AnimatePresence>
        {open && (
          isMobile ? createPortal(
            <div
              // Full screen invisible overlay to catch outside clicks
              className="fixed inset-0 z-[9999] flex items-end justify-center pb-24"
              onClick={(e) => {
                e.stopPropagation(); // Stop bubbling to document
                setOpen(false);
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()} // Clicking menu shouldn't close it
                className="w-[90vw] max-w-xs rounded-xl border border-neutral-700 bg-[#060010] shadow-xl overflow-hidden"
              >
                <SubMenuList items={items} pathname={pathname} router={router} setOpen={setOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isTouch={isMobile} />
              </motion.div>
            </div>,
            document.body
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: -12, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onPointerEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onPointerLeave={handleLeave}
              className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-52 z-[9999] rounded-xl border border-neutral-700 bg-[#060010] shadow-xl overflow-hidden"
            >
              <SubMenuList items={items} pathname={pathname} router={router} setOpen={setOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isTouch={isMobile} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

function SubMenuList({ items, pathname, router, setOpen, activeIndex, setActiveIndex, isTouch }: any) {
  return (
    <ul className="py-2">
      {items.map((item: any, i: number) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <li
            key={item.href}
            onPointerEnter={() => {
              if (!isTouch) {
                playSound("/sounds/hover.mp3");
                setActiveIndex(i);
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              playSound("/sounds/click.mp3");
              router.push(item.href);
              setOpen(false);
            }}
            className={`
              flex items-center gap-3 px-4 py-2 text-sm cursor-pointer transition
              ${isActive || activeIndex === i
                ? "bg-neutral-800 text-white"
                : "text-neutral-300 hover:bg-neutral-800"
              }
            `}
          >
            {item.icon}
            {item.label}
          </li>
        );
      })}
    </ul>
  )
}
