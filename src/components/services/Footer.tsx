"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

        <div className="flex flex-col items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
            <Image src="/logos/circularlogo.svg" alt="Sajilo" fill className="object-cover" />
          </div>
          <span className="text-[10px] tracking-[0.5em] font-black uppercase text-white/40">Sajilo.Digital</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {["Privacy", "Terms", "Support", "Contact", "Archive"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/20 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-[9px] tracking-[0.2em] font-bold text-white/10 uppercase italic">
          © 2026 Sajilo Digital. Architecture of Innovation.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
