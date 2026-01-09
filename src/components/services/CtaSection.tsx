"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import { services } from "../../data/services";

const CtaSection = () => {
  return (
    <section className="relative py-24 md:py-48 px-6 bg-black">
      {/* Background Decorative Grid (CSS-only) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-500/10 blur-[100px] md:blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cinematic Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20 md:mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <Sparkles size={16} className="text-blue-500" />
              <span className="text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-black uppercase text-white/60 italic">
                Universal Catalog
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-5xl md:text-8xl xl:text-9xl font-black tracking-tighter italic uppercase text-white leading-[0.9] md:leading-[0.85]"
            >
              Master <br />
              <span className="text-white/10">Directory.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-xl text-white/50 italic font-medium leading-relaxed lg:self-end max-w-md lg:mb-4 lg:pb-2 md:ml-15"
          >
            "Explore our complete ecosystem of digital excellence. From
            strategic architecture to creative execution, we provide the tools
            to dominate your industry."
          </motion.p>
        </div>

        {/* Mega Grid of Cards with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32 md:mb-48">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: idx * 0.08,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-[40px] md:rounded-[60px] p-8 md:p-12 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div
                className="absolute -top-1/2 -right-1/2 w-full h-full opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none blur-[80px] md:blur-[100px]"
                style={{ backgroundColor: service.accentColor || "#3b82f6" }}
              />

              {/* Header */}
              <div className="relative z-10 mb-8 md:mb-12 flex justify-between items-start">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                  style={{ color: service.accentColor || "#fff" }}
                >
                  <Cpu size={22} />
                </div>
                <span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                  PKG_0{idx + 1}
                </span>
              </div>

              <div className="relative z-10 flex-1 mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-black italic text-white mb-3 md:mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 italic font-medium leading-relaxed mb-8 md:mb-10 group-hover:text-white/80 transition-colors">
                  "{service.tagline}"
                </p>

                {/* Pricing Capsule */}
                <div className="inline-flex flex-col mb-8 md:mb-10 bg-white/5 border border-white/10 px-5 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl">
                  <span className="text-[8px] tracking-[0.2em] md:tracking-[0.3em] font-black uppercase text-white/50 mb-1">
                    Standard Initiation
                  </span>
                  <span className="text-xl md:text-2xl font-black italic text-white">
                    {service.pricing[0].price}
                  </span>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.pricing[1]?.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-[7px] md:text-[8px] tracking-widest font-black uppercase px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <Link
                href={`/services/${service.slug}`}
                className="relative z-10 block"
              >
                <button className="w-full py-5 md:py-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] relative overflow-hidden transition-all group/btn hover:bg-white hover:text-black hover:scale-[1.02]">
                  Explore Matrix
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* High-Concept Project Invitation - Improved Spacing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[40px] md:rounded-[80px] overflow-hidden p-12 md:p-24 text-center border border-white/10 bg-linear-to-b from-white/[0.02] to-transparent shadow-2xl"
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] md:opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 flex items-center justify-center gap-3 md:gap-4 mb-10 md:mb-14"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-black uppercase text-white/60">
              Open for Collaboration
            </span>
          </motion.div>

          <h3 className="relative z-20 text-4xl md:text-8xl font-black tracking-tighter text-white mb-10 md:mb-14 uppercase italic leading-[1] md:leading-[0.85]">
            Ready to <span className="text-white/20">Initiate?</span>
          </h3>

          <p className="relative z-20 text-white/60 text-base md:text-xl max-w-2xl mx-auto mb-14 md:mb-16 italic font-medium leading-relaxed">
            "Your vision deserves an architecture of excellence. Let's build a
            digital ecosystem that defines your industry legacy."
          </p>

          <div className="relative z-20 flex flex-col sm:flex-row justify-center gap-6 md:gap-8 mb-16 md:mb-20">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-6 md:gap-8 bg-white text-black px-10 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[12px] hover:scale-105 transition-all duration-500 shadow-2xl shadow-white/10"
            >
              Start Session
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="relative z-20 pt-10 md:pt-14 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-30">
            {[
              { l: "Service_Core", v: "v2.0.4" },
              { l: "Protocol", v: "Secure_AES" },
              { l: "Uptime", v: "99.99%" },
              { l: "Architect", v: "Sajilo" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-white">
                  {s.l}
                </span>
                <span className="text-[9px] md:text-[10px] font-mono text-white">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
