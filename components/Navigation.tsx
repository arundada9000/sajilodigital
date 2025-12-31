"use client";
import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("work");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-6 md:py-8">
      <div className="flex items-center gap-8 md:gap-12">
        <a
          href="#work"
          onClick={() => setActiveLink("work")}
          className={`text-sm tracking-wide transition-all duration-300 nav-link ${
            activeLink === "work"
              ? "text-foreground"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          Work
        </a>
        <a
          href="#about"
          onClick={() => setActiveLink("about")}
          className={`text-sm tracking-wide transition-all duration-300 nav-link ${
            activeLink === "about"
              ? "text-foreground"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
