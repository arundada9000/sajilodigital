"use client";

import ProfileCard from "@/components/ProfileCard";
import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Johnson",
    role: "Full Stack Engineer",
    image: "/team/Arun.png",
    bio: "deploying.nextApp();",
    techStack: ["React", "Next.js", "Node.js", "TypeScript"],
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Sara Khan",
    role: "UI/UX Designer",
    image: "/team/Arun.png",
    bio: "designing.interfaces();",
    techStack: ["Figma", "TailwindCSS", "Framer Motion"],
    twitter: "https://twitter.com/",
  },
  {
    name: "Michael Lee",
    role: "DevOps Engineer",
    image: "/team/Arun.png",
    bio: "infra.automate();",
    techStack: ["AWS", "Docker", "Kubernetes"],
    github: "https://github.com/",
  },
];

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-[#0b0f19] px-6 py-20 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 -z-10 bg-[url('/tech-bg.svg')] bg-cover bg-center opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-6xl text-center"
      >
        <h1 className="text-5xl font-extrabold text-white">Our Dev Squad</h1>
        <p className="mt-4 text-gray-400 text-lg">
          Passionate developers building the future of the web
        </p>
      </motion.div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProfileCard {...member} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
