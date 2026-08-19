"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];
  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
            <Image
              src="/logos/circularlogo.svg"
              alt="Sajilo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-[10px] tracking-[0.5em] font-black uppercase text-muted-foreground">
            Sajilo.Digital
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.3em] font-bold uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-[9px] tracking-[0.2em] font-bold text-muted-foreground uppercase italic">
          © 2026 Sajilo Digital. Architecture of Innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
