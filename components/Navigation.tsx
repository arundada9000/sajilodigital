"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  onAboutClick?: () => void;
}

const Navigation = ({ onAboutClick }: NavigationProps) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("work");

  useEffect(() => {
    if (pathname.includes("about")) setActiveLink("about");
    else if (pathname.includes("gallery")) setActiveLink("gallery");
    else if (pathname === "/") setActiveLink("work");
  }, [pathname]);

  const handleAboutClick = (e: React.MouseEvent) => {
    if (pathname.includes("gallery") && onAboutClick) {
      e.preventDefault();
      onAboutClick();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[110] flex justify-center items-center py-6 md:py-8 pointer-events-none">
      <div className="flex items-center gap-8 md:gap-12 pointer-events-auto text-white">
        <Link
          href="/"
          className={`text-[10px] tracking-[0.5em] uppercase transition-all duration-300 ${
            activeLink === "work"
              ? "opacity-100"
              : "opacity-40 hover:opacity-100"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/projects"
          className={`text-[10px] tracking-[0.5em] uppercase transition-all duration-300 ${
            activeLink === "gallery"
              ? "opacity-100"
              : "opacity-40 hover:opacity-100"
          }`}
        >
          Gallery
        </Link>
        <Link
          href="/about"
          onClick={handleAboutClick}
          className={`text-[10px] tracking-[0.5em] uppercase transition-all duration-300 ${
            activeLink === "about"
              ? "opacity-100"
              : "opacity-40 hover:opacity-100"
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
