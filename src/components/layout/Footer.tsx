"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  Youtube,
  ArrowUp,
  Send,
  ArrowRight,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Welcome to the archive.");
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Large CTA Section */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 text-[10px] tracking-[0.5em] font-bold uppercase block mb-6"
            >
              Collaborations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] italic"
            >
              Ready to create something{" "}
              <span className="text-white/20">unforgettable?</span>
            </motion.h2>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-6 text-2xl md:text-4xl font-light hover:text-blue-500 transition-colors duration-500 shrink-0"
          >
            Start a project
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-[-45deg] transition-transform duration-500" />
            </div>
          </Link>
        </div>
      </div>

      {/* 2. Main Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-24">
        {/* Brand & Manifesto */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/logos/circularlogo.svg"
                alt="Sajilo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase">
              Sajilo.Digital
            </span>
          </div>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-sm italic">
            "A creative technology studio focused on building high-performance
            digital environments for visionary human-beings."
          </p>
          <div className="flex gap-6 pt-4">
            <a
              href="https://instagram.com/sajilo_digital"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579846778258"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://github.com/sajhilodigital"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://youtube.com/@sajilo_digital"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Directory */}
        <div>
          <h4 className="text-[10px] tracking-[0.4em] font-bold text-white/20 uppercase mb-10">
            Directory
          </h4>
          <ul className="space-y-4">
            {["Home", "Projects", "Services", "About", "Blog", "FAQ"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-widest font-medium block"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Studio Info */}
        <div>
          <h4 className="text-[10px] tracking-[0.4em] font-bold text-white/20 uppercase mb-10">
            Studio
          </h4>
          <div className="space-y-8 text-sm text-white/50 font-medium tracking-wide">
            <div>
              <span className="block text-white/20 text-[9px] uppercase tracking-widest mb-2">
                Primary HQ
              </span>
              <p>
                Horizon Chowk, Butwal-11
                <br />
                Rupandehi, Nepal
              </p>
            </div>
            <div>
              <span className="block text-white/20 text-[9px] uppercase tracking-widest mb-2">
                Connect
              </span>
              <a
                href="mailto:info@sajilodigital.com.np"
                className="hover:text-white transition-colors block mb-1"
              >
                info@sajilodigital.com.np
              </a>
              <a
                href="tel:+9779811420975"
                className="hover:text-white transition-colors block"
              >
                +977-9842977207
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter / Subscription */}
        <div>
          <h4 className="text-[10px] tracking-[0.4em] font-bold text-white/20 uppercase mb-10">
            Subscription
          </h4>
          <p className="text-xs text-white/40 mb-6 leading-relaxed">
            Join our inner circle for lunar updates on technology and design.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="relative group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/10"
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-blue-500 transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* 3. Bottom Utility Bar */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8 text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase">
          <span>© {currentYear} Sajilo Digital</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>

        {/* Minimal Scroll Top */}
        <button onClick={scrollToTop} className="flex items-center gap-4 group">
          <span className="text-[10px] tracking-[0.4em] font-bold text-white/20 uppercase group-hover:text-white transition-colors">
            Back to top
          </span>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>
    </footer>
  );
}
