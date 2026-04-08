"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import ProfileModal from "@/components/ProfileModal";
import useUpsideDownScrollTop from "@/src/hooks/upSideDownScrollTop";
import { useSearchParams } from "next/navigation";

/* ---------------- TYPES ---------------- */

import { useRef, useEffect } from "react";
import { Plus, Trash2, X, Upload, Camera } from "lucide-react";

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
  tiktok?: string;
  portfolio?: string;
  email?: string;
  isCustom?: boolean;
};

/* ---------------- RECRUITMENT MODAL ---------------- */

function RecruitmentModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (member: Omit<TeamMember, "id">) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    techStack: "",
    image: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[#0b0f19] border border-white/10 p-8 rounded-3xl w-full max-w-lg relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2">
          Initiate <span className="text-blue-500">Recruitment</span>
        </h2>
        <p className="text-white/40 text-sm mb-8 font-mono">
          // Enter your credentials to join the core.
        </p>

        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center cursor-pointer group overflow-hidden bg-white/5 hover:border-blue-500 transition-colors">
              {formData.image ? (
                <>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFormData({ ...formData, image: "" });
                    }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={20} className="text-red-500" />
                  </button>
                </>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Camera className="text-white/20 group-hover:text-blue-500 transition-colors" />
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">
                Identity
              </label>
              <input
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">
                Protocol
              </label>
              <input
                placeholder="Role (e.g. Architect)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">
              Neural Stack (Comma-separated)
            </label>
            <input
              placeholder="React, Next.js, AI"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
              value={formData.techStack}
              onChange={(e) =>
                setFormData({ ...formData, techStack: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">
              Signature Bio
            </label>
            <textarea
              placeholder="Briefly describe your digital essence..."
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm resize-none"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
          </div>

          <button
            onClick={() => {
              if (formData.name && formData.role) {
                onSubmit({
                  ...formData,
                  techStack: formData.techStack
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                  image: formData.image || "/placeholder.svg",
                });
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            Sync Identity
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
    portfolio: "https://balgobind.sajilodigital.com.np/",
    email: "gobind9800@gmail.com",
    facebook: "https://www.facebook.com/balgobindchaudhary.np",
    instagram: "https://www.instagram.com/balgobindchaudhary/",
    whatsapp: "+9779816494422",
    github: "https://github.com/balgobindchaudhary",
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
    portfolio: "https://arun.sajilodigital.com.np/",
    linkedin: "https://www.linkedin.com/in/arundada9000/",
    tiktok: "https://tiktok.com/@arundada9000",
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
    email: "sunilpaudyal555@gmail.com",
    github: "https://github.com/sunilpaudyal18",
    facebook: "https://facebook.com/18.sunilpaudyal",
    instagram: "https://instagram.com/18.sunilpaudyal",
    whatsapp: "+9779867420439",
    portfolio: "https://sunilpaudyal.vercel.app",
    linkedin: "https://www.linkedin.com/in/sunilpaudyal18/",
  },

  {
    id: 6,
    name: "Ashish G.M",
    role: "Frontend Developer & Video Editor",
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
    email: "gmashish202@gmail.com",
    facebook: "https://www.facebook.com/ashish.gm.376/",
    instagram: "https://www.instagram.com/mr_ashish_magar/",
    whatsapp: "+9779748813503",
    github: "https://github.com/gmashish",
    linkedin: "https://www.linkedin.com/in/ashish-gm-1a170a29a/",
    portfolio: "https://gmashish.vercel.app/",
    tiktok: "https://tiktok.com/@ashish_ae",
  },
  {
    id: 7,
    name: "Puspanjali Gurung",
    role: "Figma Designer",
    image: "/team/puspanjali2.jpg",
    bio: "Designing clean, user-focused interfaces with modern design tools.",
    techStack: [
      "figma",
      "canva",
      "framer",
      "photoshop",
      "aftereffects",
      "premierepro",
    ],
    email: "puspagrg2004@gmail.com",
    instagram: "https://www.instagram.com/puspagurung80/",
    whatsapp: "+9779704643464",
  },
];

export default function TeamClient() {
  useUpsideDownScrollTop();
  const searchParams = useSearchParams();
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const [extraMembers, setExtraMembers] = useState<TeamMember[]>([]);
  const [isRecruiting, setIsRecruiting] = useState(false);

  const allMembers = [...team, ...extraMembers];

  // Effect to handle deep linking via ?memberId=ID
  useEffect(() => {
    const memberId = searchParams.get("memberId");
    if (memberId) {
      const id = parseInt(memberId, 10);
      const member = allMembers.find((m) => m.id === id);
      if (member) {
        setActiveMember(member);
      }
    }
  }, [searchParams]); // Dependent on searchParams

  const addMember = (member: Omit<TeamMember, "id">) => {
    const newMember = {
      ...member,
      id: Date.now(),
      isCustom: true,
    };
    setExtraMembers((prev) => [...prev, newMember]);
    setIsRecruiting(false);
  };

  const removeMember = (id: number) => {
    setExtraMembers((prev) => prev.filter((m) => m.id !== id));
    if (activeMember?.id === id) setActiveMember(null);
  };

  return (
    <>
      <section className="min-h-screen bg-[#0b0f19] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
              Meet Our <span className="text-blue-500">Team</span>
            </h1>
            <p className="mt-6 text-white/40 max-w-xl mx-auto font-mono text-sm">
              // Passionate builders crafting modern digital experiences at the
              edge of possibility.
            </p>
          </motion.div>

          <motion.div
            className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {allMembers.map((member) => {
              return (
                <div key={member.id} className="relative group">
                  <ProfileCard
                    {...member}
                    onClick={() => setActiveMember(member)}
                  />
                  {member.isCustom && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeMember(member.id);
                      }}
                      className="absolute top-4 right-4 z-20 p-2 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                      title="Erase Identity"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              );
            })}

            {/* Join Placeholder */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsRecruiting(true)}
              className="relative rounded-2xl border-2 border-dashed border-white/10 p-12 flex flex-col items-center justify-center text-center group hover:border-blue-500/50 hover:bg-blue-500/5 transition-all min-h-[400px]"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Plus className="text-white group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">
                Join the Team
              </h3>
              <p className="mt-2 text-white/40 text-sm font-mono max-w-[180px]">
                // Insert your digital profile into the collective.
              </p>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeMember && (
          <ProfileModal
            profile={activeMember}
            onClose={() => setActiveMember(null)}
          />
        )}
        {isRecruiting && (
          <RecruitmentModal
            onClose={() => setIsRecruiting(false)}
            onSubmit={addMember}
          />
        )}
      </AnimatePresence>
    </>
  );
}
