"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  ArrowRight,
  Rocket,
  ShieldCheck,
  Zap
} from "lucide-react";
import ShinyText from "@/components/ShinyText";

/* ---------------- DATA ---------------- */

const stats = [
  { icon: Briefcase, value: "150+", label: "Projects Completed", color: "text-cyan-400" },
  { icon: Users, value: "100+", label: "Happy Clients", color: "text-purple-400" },
  { icon: Award, value: "15+", label: "Awards Won", color: "text-pink-400" },
  { icon: Globe, value: "10+", label: "Countries Served", color: "text-green-400" },
];

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    borderColor: "group-hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400"
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting relationships by understanding your needs and delivering solutions that exceed expectations.",
    borderColor: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400"
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We never compromise on quality. Every project undergoes rigorous testing and quality assurance to ensure flawless performance.",
    borderColor: "group-hover:border-pink-500/50",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400"
  },
  {
    icon: Zap,
    title: "Growth Mindset",
    description:
      "We believe in continuous learning and improvement, both for ourselves and for helping our clients achieve sustainable growth.",
    borderColor: "group-hover:border-green-500/50",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400"
  },
];

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Delivered our first enterprise-level e-commerce platform",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew to a team of 20+ talented developers and designers",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: 'Received "Best IT Company" award from Nepal Tech Awards',
  },
  {
    year: "2023",
    title: "International Clients",
    description: "Expanded services to clients across 10+ countries",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched R&D division focusing on AI and emerging technologies",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any // Using cubic-bezier for smoother feel and to avoid type error
    }
  })
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* ---------------- COMPONENT ---------------- */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Pioneering Digital Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight">
              <ShinyText text="About Us" className="block" />
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed">
              We are a team of visionaries, designers, and engineers dedicated to
              redefining the digital landscape through innovation and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeIn}
                  className="group relative p-8 rounded-3xl border border-white/10 bg-[#161b22]/40 backdrop-blur-xl hover:bg-[#161b22]/60 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">{stat.value}</div>
                  <div className="text-gray-500 font-medium uppercase text-xs tracking-widest">{stat.label}</div>

                  {/* Decorative glow */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 italic flex items-center gap-4 text-white">
                Our Story
                <div className="h-0.5 flex-1 bg-linear-to-r from-cyan-500 to-transparent opacity-30" />
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Founded in <span className="text-cyan-400 font-bold">2019</span>, Sajilo Digital emerged from a collective drive to bridge the gap
                  between complex technology and human-centric business goals. What began as a
                  close-knit core of passionate developers has evolved into a powerhouse digital agency.
                </p>
                <p>
                  We believe that <span className="text-white italic">extraordinary software</span> is built on a foundation of
                  radical transparency, relentless innovation, and deep collaboration. To us, every project isn't just a
                  deliverable—it's a mission to exceed expectations and set new industry benchmarks.
                </p>
                <p>
                  Today, we're proud of our footprint across 10+ countries, but our hunger for
                  excellence only grows. We're not just builders; we're your dedicated
                  partner in the digital frontier.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="relative h-[500px] rounded-[40px] overflow-hidden border border-white/10 shadow-3xl bg-[#161b22]">
                <Image
                  src="/gallery/slide-1.jpg"
                  alt="Team synergy"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 p-8 rounded-3xl bg-[#161b22]/90 backdrop-blur-2xl border border-white/10 shadow-2xl animate-bounce-slow">
                <div className="text-cyan-400 text-3xl font-bold mb-1">5+</div>
                <div className="text-gray-500 text-xs font-bold tracking-widest uppercase">Years of Impact</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[40px] bg-linear-to-br from-[#161b22] to-[#0b0f19] border border-white/5 hover:border-cyan-500/20 transition-all duration-500 shadow-2xl"
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower global businesses with disruptive technology solutions
                that drive exponential growth and efficiency. We are committed
                to transparency and long-term partnership in every line of code we write.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-12 rounded-[40px] bg-linear-to-br from-[#161b22] to-[#0b0f19] border border-white/5 hover:border-purple-500/20 transition-all duration-500 shadow-2xl"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20 group-hover:-rotate-12 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the ultimate tech-evolution partner, setting the standard
                for digital innovation in Nepal and the world. We envision a future
                where technology is an accessible catalyst for every visionary entrepreneur.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-[#0b0f19]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our Core Ethos</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our principles aren't just words on a wall; they are the fundamental
              frequencies that guide our every decision.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  custom={idx}
                  className={`group relative p-10 rounded-3xl bg-[#161b22]/40 backdrop-blur-xl border border-white/10 transition-all duration-500 ${val.borderColor}`}
                >
                  <div className={`w-14 h-14 ${val.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${val.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{val.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{val.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Our Journey</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Key Evolution Milestones</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 opacity-20 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="group p-8 rounded-[32px] bg-[#161b22]/40 backdrop-blur-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
                      <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-4 tracking-widest">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Indicator Dot */}
                  <div className="relative w-8 h-8 rounded-full bg-[#0b0f19] border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative p-12 md:p-20 rounded-[50px] overflow-hidden text-center"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-600 to-purple-700 opacity-90 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/grid.svg')]" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Meet Our Human Core</h2>
              <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
                Behind every elegant interface and powerful backend is a team of specialists
                who care deeply about the success of your mission.
              </p>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View the Force
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
