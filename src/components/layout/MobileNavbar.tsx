"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { GoHome, GoPerson, GoBriefcase, GoMail } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { IoMdClose, IoMdInformationCircleOutline } from "react-icons/io";
import { GrStatusUnknown } from "react-icons/gr";
import { GoWorkflow } from "react-icons/go";
import {
  FaProjectDiagram,
  FaImages,
  FaComments,
  FaDollarSign,
  FaQuestionCircle,
  FaBlog,
} from "react-icons/fa";
import { playSound } from "@/lib/sound";

const TABS = [
  { id: "home", label: "Home", icon: <GoHome size={22} />, href: "/" },
  {
    id: "projects",
    label: "Projects",
    icon: <FaProjectDiagram size={20} />,
    href: "/projects",
  },
  {
    id: "services",
    label: "Services",
    icon: <GoBriefcase size={22} />,
    href: "/services",
  },
  {
    id: "contact",
    label: "Contact",
    icon: <GoMail size={22} />,
    href: "/contact",
  },
  { id: "menu", label: "Menu", icon: <BiCategory size={22} />, href: "#" },
];

const MENU_ITEMS = [
  {
    label: "About Company",
    href: "/about",
    icon: <IoMdInformationCircleOutline size={20} />,
  },
  { label: "Our Team", href: "/about/team", icon: <GoPerson size={20} /> },
  {
    label: "How We Work",
    href: "/how-we-work",
    icon: <GoWorkflow size={20} />,
  },
  { label: "Blog", href: "/blog", icon: <FaBlog size={18} /> },
  { label: "Gallery", href: "/gallery", icon: <FaImages size={18} /> },
  {
    label: "Testimonials",
    href: "/testimonials",
    icon: <FaComments size={18} />,
  },
  { label: "Pricing", href: "/pricing", icon: <FaDollarSign size={18} /> },
  { label: "FAQs", href: "/faq", icon: <FaQuestionCircle size={18} /> },
  // { label: "Status", href: "/status", icon: <GrStatusUnknown size={18} /> },
];

export default function MobileNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleTabClick = (href: string, id: string) => {
    playSound("/sounds/click.mp3");
    if (id === "menu") {
      setMenuOpen(true);
    } else {
      router.push(href);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-[400px] z-[50] flex items-center justify-between px-2 py-2 rounded-3xl bg-background/80 backdrop-blur-xl border border-border shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {/* Active Indicator Background */}
        {/* We could use layoutId here for a moving background, but fixed positions are safer for now. 
             Let's use simple icon highlighting for cleaner look on small screens. */}

        {TABS.map((tab) => {
          const isActive = tab.id === "menu" ? menuOpen : pathname === tab.href;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.href, tab.id)}
              className="relative flex flex-col items-center justify-center w-full h-full py-2 z-10 gap-1 group"
            >
              <span
                className={`
                   text-2xl transition-all duration-300
                   ${
                     isActive
                       ? "text-primary scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                       : "text-muted-foreground group-hover:text-foreground"
                   }
                 `}
              >
                {tab.icon}
              </span>
              <span
                className={`text-[10px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground opacity-60"
                }`}
              >
                {tab.label}
              </span>

              {/* Active Dot */}
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-dot"
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary shadow-[0_0_5px_rgba(6,182,212,0.8)]"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* ----------------- FULL SCREEN MENU SHEET ----------------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 dark:bg-black/60 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 w-full bg-background rounded-t-[32px] border-t border-border overflow-hidden shadow-2xl pb-32 pt-8 px-6"
            >
              {/* Handle Bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-muted rounded-full" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  More
                </h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-accent transition"
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              {/* Grid Links */}
              <div className="grid grid-cols-2 gap-4">
                {MENU_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      playSound("/sounds/click.mp3");
                      router.push(item.href);
                      setMenuOpen(false);
                    }}
                    className="flex flex-col items-start p-4 rounded-2xl bg-accent/5 border border-border hover:bg-accent hover:border-primary/20 transition active:scale-95 text-left gap-3"
                  >
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
