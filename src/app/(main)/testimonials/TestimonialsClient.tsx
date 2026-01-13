"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Star,
  Quote,
  Building2,
  TrendingUp,
  Users,
  Play,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import ShinyText from "@/components/ShinyText";

/* ---------------- DATA ---------------- */

const testimonials = [
  {
    name: "Mitralal Sapkota (Mr. LAL)",
    role: "Lead Trekking Guide",
    company: "Mount Glacier Alpine Adventure Tour And Treks",
    image: "/testimonials/mitralal-sapkota.jpg",
    rating: 5,
    text: "I recently had my website built by Sajilo Digital, and I’m extremely satisfied with the results. The team was professional, quick, and very easy to work with. They offered me the best deal and delivered exactly what I needed clean design, smooth functionality, and great support throughout the process. Highly recommended for anyone looking for quality digital services!",
    project: "Tour And Treks",
  },

  {
    name: "Daba Sherpa",
    role: "Lead Trekking",
    company: "Mount Glacier Alpine",
    image: "/testimonials/daba-sherpa.jpg",
    rating: 5,
    text: "The travel booking platform developed by the team has exceeded all expectations. The itinerary planning, we are extremely satisfied with the outcome and highly recommend their services to anyone seeking reliable and innovative travel technology solutions. Couldn't be happier!",
    project: "Travel Booking Platform",
  },
];

const stats = [
  { icon: Users, value: "10+", label: "Happy Clients", color: "text-cyan-400" },
  {
    icon: Building2,
    value: "10+",
    label: "Projects Completed",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfaction",
    color: "text-green-400",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    color: "text-pink-400",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TestimonialsClient() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30 animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Real Stories, Real Impact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              <ShinyText text="Clients Feedback" className="block" />
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
              Discover how Sajilo Digital empowers businesses through disruptive
              technology and human-centric design, as told by our partners.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-[32px] md:rounded-full px-12"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center relative group"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`mb-3 p-2 rounded-xl bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[40px] bg-[#161b22]/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Quote className="w-8 h-8 fill-current opacity-50" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400 capitalize">
                    {/* Simplified project tag for consistent styling */}
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                    {testimonial.project}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm font-medium">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 px-6 bg-[#0b0f19]/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Voice of Partnerships
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto uppercase tracking-widest font-bold text-sm">
              Cinematic Case Study Interviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Video Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-[50px] overflow-hidden border border-white/10 shadow-3xl cursor-pointer"
            >
              <Image
                src="/gallery/slide-1.jpg"
                alt="Video cover"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-all duration-500 border-4 border-white/20">
                  <Play className="w-8 h-8 text-black fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8">
                <div className="text-white font-bold text-xl mb-1">
                  Rajesh Sharma
                </div>
                <div className="text-cyan-400 text-sm font-bold tracking-widest uppercase">
                  CEO, TechVision Nepal
                </div>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-[350px] rounded-[50px] overflow-hidden border border-white/10 shadow-3xl cursor-pointer"
            >
              <Image
                src="/gallery/slide-2.jpg"
                alt="Video cover"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-all duration-500 border-4 border-white/20">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8">
                <div className="text-white font-bold text-xl mb-1">
                  Priya Thapa
                </div>
                <div className="text-purple-400 text-sm font-bold tracking-widest uppercase">
                  Marketing Dir, Himalayan Ventures
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-[0.3em] text-center mb-8">
              Pioneers Who Trust Us
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-24 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center justify-center group cursor-pointer hover:bg-white/[0.05] transition-all"
              >
                <div className="text-gray-600 font-black text-xl group-hover:text-cyan-400/80 transition-colors uppercase tracking-tighter">
                  Partner {i}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group p-12 md:p-20 rounded-[50px] overflow-hidden text-center"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-600/20 via-blue-900 to-purple-800 opacity-90 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                Your Vision. Our Code.
                <br />
                <span className="text-cyan-400">Pure Innovation.</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                Ready to become our next success story? Partner with the team
                that turns complex challenges into elegant digital realities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cyan-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
                >
                  Start Transmission
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all group/link"
                >
                  View Our Portfolio
                  <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
