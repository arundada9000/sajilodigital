"use client";

import Image from "next/image";
import { motion, useDragControls } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaXTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaDownload,
  FaGlobe,
  FaEnvelope,
  FaXmark,
  FaCamera,
} from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { exportToPng } from "@/lib/export-util";
import { useRef } from "react";

/* ---------------- TYPES ---------------- */

type Profile = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  techStack: string[];
  github?: string;
  linkedin?: string;
  instagram?: string;
  whatsapp?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  twitter?: string;
  x?: string;
  portfolio?: string;
  cv?: string;
  email?: string;
};

type Props = {
  profile: Profile | null;
  onClose: () => void;
};

const socialsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4, // Wait for modal to open
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 10,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 25,
    },
  },
};

/* ---------------- TERMINAL TYPING ---------------- */

function TypingText({ text }: { text: string }) {
  return (
    <motion.p
      key={text}
      className="whitespace-pre-line text-gray-300"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.015,
          },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

/* ---------------- MODAL ---------------- */

import { useMediaQuery } from "../src/hooks/useMediaQuery";

export default function ProfileModal({ profile, onClose }: Props) {
  const iconSize = 30;
  const dragControls = useDragControls();
  const [fullscreen, setFullscreen] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const captureRef = useRef<HTMLDivElement>(null);

  /* ESC KEY CLOSE */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!profile) return null;

  const handleCapture = async () => {
    if (captureRef.current) {
      setIsCapturing(true);
      await exportToPng(captureRef.current, profile.name);
      setIsCapturing(false);
    }
  };

  return (
    <>
      <motion.div
        className={`fixed inset-0 z-40 bg-black/70 ${isMobile ? "" : "backdrop-blur-md"
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        key={profile.id}
      />

      {/* MODAL */}
      <motion.div
        className="fixed inset-0 z-999 flex items-end md:items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          layoutId={`card-${profile.id}`}
          drag="y"
          dragControls={dragControls}
          dragConstraints={{ top: 0 }}
          dragElastic={0.2}
          whileDrag={{ scale: 0.75, opacity: 0.95 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 120) onClose();
          }}
          onClick={(e) => e.stopPropagation()}
          className={`
            relative w-full md:max-w-4xl 
            ${fullscreen ? "h-full md:h-full" : "h-[95vh] md:h-auto"}
            bg-[#0b0f19]
            rounded-t-3xl md:rounded-2xl
            border border-white/10
            shadow-2xl
            overflow-hidden
          `}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 cursor-grab">
            <div className="flex gap-2 cursor-default p-1">
              <span
                onClick={onClose}
                title="Close"
                className="h-3 w-3 rounded-full bg-red-500 cursor-pointer hover:scale-125"
              />
              <span
                onClick={() => setFullscreen(false)}
                className="h-3 w-3 rounded-full bg-yellow-400 cursor-pointer hover:scale-125"
              />
              <span
                onClick={() => setFullscreen(true)}
                className="h-3 w-3 rounded-full bg-green-500 cursor-pointer hover:scale-125"
              />
            </div>
            <div>
              <p className="text-green-500 font-bold">SajiloDigital Pvt.Ltd</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleCapture}
                className={`text-gray-400 hover:text-white transition-colors ${isCapturing ? "animate-pulse" : ""
                  }`}
                title="Save as PNG"
              >
                <FaCamera />
              </button>
              {profile.cv && (
                <a
                  href={profile.cv}
                  download
                  className="text-gray-400 hover:text-white"
                  title="Download CV"
                >
                  <FaDownload />
                </a>
              )}
              {profile.portfolio && (
                <a
                  href={profile.portfolio}
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                  title="Portfolio"
                >
                  <FaGlobe />
                </a>
              )}
              {profile.email && (
                <button
                  onClick={() => navigator.clipboard.writeText(profile.email!)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                  title="Copy Email"
                >
                  <FaEnvelope />
                </button>
              )}
              <button onClick={onClose} title="Close">
                <FaXmark className="text-gray-400 hover:text-white hover:scale-120 transition duration-150 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div
            ref={captureRef}
            key={`capture-${profile.id}`}
            className={`grid md:grid-cols-2 gap-6 p-6 overflow-y-auto ${fullscreen ? "h-full" : "h-[85vh] md:h-auto"
              } bg-[#0b0f19]`}
          >
            {/* IMAGE */}
            <motion.div
              layoutId={`image-${profile.id}`}
              className="relative h-72 md:h-full rounded-xl overflow-hidden"
            >
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>

            {/* INFO */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {profile.name}
                </h2>
                <motion.p
                  className="text-cyan-400 text-lg font-semibold "
                  whileHover={{
                    scale: 1.05,
                    textShadow:
                      "0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.6)",
                    color: "#00FFFF", // Cyan glowing color
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {profile.role}
                </motion.p>
              </div>

              {/* TERMINAL BIO */}
              <div className="rounded-lg border border-white/10 bg-white/10 p-4 font-mono text-sm text-green-400 backdrop-blur-md shadow-xl">
                <p>$ whoami</p>
                <p className="ml-4 text-white">{profile.name}</p>

                <p className="mt-3 ">$ bio</p>
                <div className="ml-4 ">
                  {isMobile ? (
                    <p className="whitespace-pre-line text-gray-300">
                      {profile.bio}
                    </p>
                  ) : (
                    <TypingText text={profile.bio} />
                  )}
                </div>
              </div>

              {/* TECH STACK */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {profile.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.15, boxShadow: "0 0 10px #0ff" }}
                    className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-cyan-300 cursor-pointer 
             hover:bg-cyan-700 hover:text-white hover:scale-110 hover:shadow-[0_0_10px_cyan] transition-all duration-150"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* SOCIALS */}
              <motion.div
                className="mt-4 flex gap-4 flex-wrap justify-center bg-gray-400/80 rounded-md "
                onClick={(e) => e.stopPropagation()}
                variants={socialsContainer}
                initial="hidden"
                animate="show"
              >
                {profile.github && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Github"
                      href={profile.github}
                      icon={<FaGithub size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.facebook && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Facebook"
                      href={profile.facebook}
                      icon={<FaFacebook size={iconSize} />}
                    />
                  </motion.div>
                )}
                {profile.tiktok && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Tiktok"
                      href={profile.tiktok}
                      icon={<FaTiktok size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.youtube && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Youtube"
                      href={profile.youtube}
                      icon={<FaYoutube size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.instagram && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Instagram"
                      href={profile.instagram}
                      icon={<FaInstagram size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.whatsapp && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Whatsapp"
                      href={`tel:${profile.whatsapp}`}
                      icon={<FaWhatsapp size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.linkedin && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Linkedin"
                      href={profile.linkedin}
                      icon={<FaLinkedin size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.twitter && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="Twitter"
                      href={profile.twitter}
                      icon={<FaXTwitter size={iconSize} />}
                    />
                  </motion.div>
                )}

                {profile.x && (
                  <motion.div variants={socialItem}>
                    <Social
                      title="X"
                      href={profile.x}
                      icon={<FaXTwitter size={iconSize} />}
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* </AnimatePresence> */}
    </>
  );
}

function Social({
  href,
  icon,
  title,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" className="group rounded-full relative">
      <motion.div
        className="p-2"
        whileHover={{ scale: 1.25, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.div>
      <span className="absolute bottom-3/4 -left-2 p-1 hidden group-hover:block bg-gray-900 text-white text-xs rounded-md">
        {title}
      </span>
    </a>
  );
}
