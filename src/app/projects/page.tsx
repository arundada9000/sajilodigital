"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { projects } from "../../data/projects";
import { ArrowUpRight } from "lucide-react";

// Minimal categories
const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Mouse Position for Follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the image follower
  const springConfig = { damping: 25, stiffness: 150 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredProjects = projects.filter((project) => {
    return activeCategory === "All" || project.category === activeCategory;
  });

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* Immersive Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-12">
              OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white italic">
                HIGHLIGHTS.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <p className="max-w-md text-gray-400 text-lg leading-relaxed">
                A selection of digital experiences we&apos;ve crafted for brands
                that dare to be different. Each project is a testament to our
                commitment to excellence.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-400"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="pb-40 relative px-6">
        <div className="container-custom">
          <div className="flex flex-col border-t border-white/10">
            {filteredProjects.map((project, index) => (
              <ProjectItem
                key={project.slug}
                project={project}
                index={index}
                onHover={() => setHoveredProject(project.slug)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Follower Overlay (Hidden on Mobile) */}
      <div
        className="hidden lg:block fixed pointer-events-none z-50 mix-blend-difference"
        style={{ left: 0, top: 0 }}
      >
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 10, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                x: imageX,
                y: imageY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <Image
                src={
                  projects.find((p) => p.slug === hoveredProject)?.image || ""
                }
                alt="Preview"
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <section className="py-40 bg-[#0a0a0a]">
        <div className="container-custom text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">
              Ready to build?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-4 text-3xl md:text-5xl font-light hover:text-blue-500 transition-colors duration-500 group"
            >
              <span>Let&apos;s talk about yours</span>
              <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectItem({ project, index, onHover, onLeave }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative border-b border-white/10"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block py-12 md:py-20 group"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xs text-blue-500 font-mono tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                {project.category}
              </span>
            </div>
            <h3 className="text-4xl md:text-7xl font-semibold tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-[0.16,1,0.3,1]">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-12 text-gray-500">
            <span className="hidden lg:block text-lg font-mono">
              {project.year}
            </span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Mobile Preview Image (visible only on mobile stack) */}
        <div className="lg:hidden mt-8 w-full aspect-[16/9] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
    </motion.div>
  );
}
