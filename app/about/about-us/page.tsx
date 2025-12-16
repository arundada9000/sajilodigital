"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import ProfileModal from "@/components/ProfileModal";
import useUpsideDownScrollTop from "../../../hooks/upSideDownScrollTop";

/* ---------------- TYPES ---------------- */

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  techStack: string[];
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  portfolio?: string;
  email?: string;
};

/* ---------------- DATA ---------------- */

const team: TeamMember[] = [
  {
    id: 1,
    name: "Pramod Tharu",
    role: "Chairperson",
    image: "/team/pramod.jpg",
    bio: "A passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications from frontend to backend.",
    techStack: [
      "html",
      "css",
      "js",
      "reactjs",
      "nextjs",
      "tailwindcss",
      "nodejs",
      "expressjs",
      "mongodb",
      "git",
    ],
    youtube: "https://www.youtube.com/@mr.tharu9",
    facebook: "https://www.facebook.com/parmod.tharu.507",
    instagram: "https://www.instagram.com/pra.mod._.tharu/",
    whatsapp: "+9779815442325",
    github: "https://github.com/pramodtharu12454",
    linkedin: "https://www.linkedin.com/in/pramod-tharu-6877a4273/",
  },

  {
    id: 2,
    name: "Bal Gobind Chaudhary",
    role: "CEO / Founder",
    image: "/team/bal.jpg",
    bio: "Founder focusing on product strategy, partnerships, and company growth.",
    techStack: [
      "html",
      "css",
      "js",
      "reactjs",
      "nextjs",
      "nodejs",
      "nestjs",
      "mongodb",
      "expressjs",
      "tailwindcss",
      "c",
      "cpp",
      "java",
      "php",
      "csharp",
      "git",
      "github",
      "vscode",
    ],
    facebook: "https://www.facebook.com/balgobindchaudhary.np",
    instagram: "https://www.instagram.com/balgobindchaudhary/",
    whatsapp: "+9779816494422",
    github: "https://github.com/GobindTharu",
    linkedin: "https://www.linkedin.com/in/balgobindchaudhary/",
  },

  {
    id: 3,
    name: "Arun Neupane",
    role: "Chief Technology Officer",
    image: "/team/Arun.png",
    bio: "Building scalable web experiences with Next.js & Node.",
    techStack: [
      "html",
      "css",
      "js",
      "reactjs",
      "nextjs",
      "tailwindcss",
      "c",
      "cpp",
      "java",
      "python",
      "php",
      "csharp",
      "nodejs",
      "mongodb",
      "sql",
      "postgresql",
      "expressjs",
      "vercel",
      "netlify",
      "vscode",
      "git",
      "github",
    ],
    email: "arunneupane0000@gmail.com",
    youtube: "https://youtube.com/@arundada9000",
    facebook: "https://facebook.com/arundada9000",
    instagram: "https://instagram.com/arundada9000",
    whatsapp: "+9779811420975",
    github: "https://github.com/arundada9000",
    portfolio: "https://arunneupane.netlify.app",
  },

  {
    id: 4,
    name: "Bijay Kumar Chaudhary",
    role: "Frontend Developer",
    image: "/team/bijay.jpg",
    bio: "Blending design and code to create engaging digital experiences.",
    techStack: ["html", "css", "js", "reactjs", "tailwindcss", "python", "php"],
    facebook: "https://www.facebook.com/bijaychaudhary49/",
    whatsapp: "+9779821057199",
    github: "https://github.com/bijaychaudhary49",
  },

  {
    id: 5,
    name: "Sunil Paudyal",
    role: "QA Tester & Frontend Developer",
    image: "/team/sunilpaudyal.jpg",
    bio: "QA Tester and Frontend Developer skilled in testing web applications and building responsive, user-friendly interfaces.",
    techStack: [
      "html",
      "css",
      "js",
      "reactjs",
      "tailwindcss",
      "git",
      "github",
      "c",
      "cpp",
    ],
    github: "https://github.com/sunilpaudyal18",
    facebook: "https://facebook.com/sunil.paudyal.12",
    instagram: "https://instagram.com/sunil_18_paudyal",
    whatsapp: "+9779867420439",
    twitter: "https://x.com/sunilpaudyal555",
  },

  {
    id: 6,
    name: "Ashish G.M",
    role: "Frontend Developer",
    image: "/team/ashish.jpg",
    bio: "Turning ideas into interactive websites and engaging videos.",
    techStack: [
      "html",
      "css",
      "js",
      "reactjs",
      "davinciresolve",
      "git",
      "github",
      "cpp",
      "c",
    ],
    facebook: "https://www.facebook.com/ashish.gm.376/",
    instagram: "https://www.instagram.com/mr_ashish_magar/",
    whatsapp: "+9779748813503",
    github: "https://github.com/gmashish",
    linkedin: "https://www.linkedin.com/in/ashish-gm-1a170a29a/",
  },
];

/* ---------------- PAGE ---------------- */

export default function AboutPage() {
  useUpsideDownScrollTop();

  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="min-h-screen bg-[#0b0f19] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold text-white">
            Meet Our Team
          </h1>
          <p className="mt-4 text-center text-gray-400">
            Passionate builders crafting modern digital experiences
          </p>

          <motion.div
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.01 } },
            }}
          >
            {team.map((member) => (
              <ProfileCard
                key={member.name}
                {...member}
                onClick={() => setActiveMember(member)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {activeMember && (
          <ProfileModal
            profile={activeMember}
            onClose={() => setActiveMember(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
