"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Icons Import
import {
  FaWhatsapp,
  FaXTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiCanva,
  SiFigma,
  SiAdobephotoshop,
  SiDavinciresolve,
  SiPhp,
  SiTailwindcss,
  SiVercel,
  SiAdobeillustrator,
  SiNetlify,
  SiExpress,
  SiAdobepremierepro,
  SiFramer,
  SiAdobeaftereffects,
} from "react-icons/si";

import { TbSql } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import { IconType } from "react-icons";

/* ---------------- TYPES ---------------- */

type ProfileCardProps = {
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
  onClick?: () => void;
};

type TechIcon = {
  icon?: IconType;
  img?: string;
};

/* ---------------- TECH ICON MAP ---------------- */
// ⛔ keep your existing map here (shortened for clarity)
const techIcons: Record<string, TechIcon> = {
  github: { icon: FaGithub },
  html: { icon: FaHtml5 },
  css: { icon: FaCss3Alt },
  reactjs: { icon: FaReact },
  js: { icon: FaJs },
  nextjs: { icon: RiNextjsLine },
  nestjs: { icon: SiNestjs },
  sql: { icon: TbSql },
  git: { icon: FaGitAlt },
  vscode: { icon: VscVscode },
  netlify: { icon: SiNetlify },
  vercel: { icon: SiVercel },
  illustrator: { icon: SiAdobeillustrator },
  tailwindcss: { icon: SiTailwindcss },
  php: { icon: SiPhp },
  tailwind: { icon: SiTailwindcss },
  davinciresolve: { icon: SiDavinciresolve },
  photoshop: { icon: SiAdobephotoshop },
  figma: { icon: SiFigma },
  canva: { icon: SiCanva },
  postgresql: { icon: SiPostgresql },
  mongodb: { icon: SiMongodb },
  python: { icon: FaPython },
  java: { icon: FaJava },
  nodejs: { icon: FaNodeJs },
  expressjs: { icon: SiExpress },
  express: { icon: SiExpress },
  premierepro: { icon: SiAdobepremierepro },
  framer: { icon: SiFramer },
  aftereffects: { icon: SiAdobeaftereffects },

  c: { img: "/icons/c3.png" },
  cpp: { img: "/icons/cpp.png" },
  csharp: { img: "/icons/csharp.png" },
};

/* ---------------- CARD CONTENT ---------------- */

type CardContentProps = {
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
  containerRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  isOverflowed: boolean;
};

function CardContent({
  id,
  name,
  role,
  image,
  bio,
  techStack,
  github,
  linkedin,
  twitter,
  youtube,
  whatsapp,
  instagram,
  facebook,
  containerRef,
  contentRef,
  isOverflowed,
}: CardContentProps) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      {/* Avatar */}
      <motion.div
        layoutId={`image-${id}`}
        className="relative h-28 w-28 rounded-full overflow-hidden border border-white/20"
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </motion.div>

      <h3 className="mt-4 text-xl font-bold text-white">{name}</h3>
      <p className="text-sm text-blue-400">{role}</p>

      <p className="mt-3 text-sm font-mono text-green-400 line-clamp-2">
        $ {bio}
      </p>

      {/* Tech Stack */}
      <div
        ref={containerRef}
        className="mt-4 w-full overflow-hidden flex items-center"
      >
        <motion.div
          ref={contentRef}
          className="flex gap-4"
          animate={isOverflowed ? { x: ["0%", "-50%"] } : { x: "0%" }}
          transition={
            isOverflowed
              ? { repeat: Infinity, duration: 40, ease: "linear" }
              : undefined
          }
        >
          {[...techStack, ...(isOverflowed ? techStack : [])].map(
            (tech, idx) => {
              const techItem = techIcons[tech.toLowerCase()];
              return (
                <div
                  key={`${tech}-${idx}`}
                  className="w-8 h-8 flex items-center justify-center"
                  data-tooltip-id="tech-tooltip"
                  data-tooltip-content={tech}
                >
                  {techItem?.img ? (
                    // Render image if img exists
                    <Image
                      src={techItem.img}
                      alt={tech}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  ) : techItem?.icon ? (
                    // Render icon if icon exists
                    <techItem.icon size={24} className="text-cyan-400" />
                  ) : (
                    // Fallback to text if neither icon nor img exist
                    <span className="text-[10px] text-blue-400">{tech}</span>
                  )}
                </div>
              );
            },
          )}
        </motion.div>
      </div>

      <Tooltip id="tech-tooltip" place="top" />

      {/* Socials */}
      <div
        className="mt-4 flex gap-4 flex-wrap justify-center bg-[#2C333D] p-2 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {github && <Social href={github} icon={<FaGithub />} />}
        {facebook && <Social href={facebook} icon={<FaFacebook />} />}
        {youtube && <Social href={youtube} icon={<FaYoutube />} />}
        {instagram && <Social href={instagram} icon={<FaInstagram />} />}
        {whatsapp && <Social href={`tel:${whatsapp}`} icon={<FaWhatsapp />} />}
        {linkedin && <Social href={linkedin} icon={<FaLinkedin />} />}
        {twitter && <Social href={twitter} icon={<FaXTwitter />} />}
      </div>
    </div>
  );
}

import { useMediaQuery } from "../src/hooks/useMediaQuery";

/* ---------------- PROFILE CARD ---------------- */

const ProfileCard = React.memo(function ProfileCard({
  id,
  name,
  role,
  image,
  bio,
  techStack,
  github,
  linkedin,
  twitter,
  youtube,
  whatsapp,
  instagram,
  facebook,
  onClick,
}: ProfileCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  const [enableTilt, setEnableTilt] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setEnableTilt(true));
  }, []);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setIsOverflowed(
        contentRef.current.scrollWidth > containerRef.current.offsetWidth,
      );
    }
  }, [techStack]);

  const cardStyles = `relative rounded-2xl border border-white/10 
    bg-linear-to-br from-white/5 to-white/10 
    ${isMobile ? "backdrop-blur-md shadow-md" : "backdrop-blur-xl shadow-lg"}
    p-6`;

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: prefersReducedMotion ? 0 : 0.3,
                ease: "easeOut",
              },
            }
          : undefined
      }
      whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
      className="w-full max-w-80 mx-auto cursor-pointer"
    >
      {enableTilt ? (
        <Tilt
          glareEnable={!isMobile} // Disable glare on mobile for perf
          glareMaxOpacity={0.2}
          glareColor="#0ff"
          scale={isMobile ? 1 : 1.05} // No scale on mobile
          tiltMaxAngleX={isMobile ? 5 : 20} // Reduce tilt angle on mobile
          tiltMaxAngleY={isMobile ? 5 : 20}
          className={cardStyles}
        >
          <CardContent
            id={id}
            name={name}
            role={role}
            image={image}
            bio={bio}
            techStack={techStack}
            github={github}
            linkedin={linkedin}
            twitter={twitter}
            youtube={youtube}
            whatsapp={whatsapp}
            instagram={instagram}
            facebook={facebook}
            containerRef={containerRef}
            contentRef={contentRef}
            isOverflowed={isOverflowed}
          />
        </Tilt>
      ) : (
        <div className={cardStyles}>
          <CardContent
            id={id}
            name={name}
            role={role}
            image={image}
            bio={bio}
            techStack={techStack}
            github={github}
            linkedin={linkedin}
            twitter={twitter}
            youtube={youtube}
            whatsapp={whatsapp}
            instagram={instagram}
            facebook={facebook}
            containerRef={containerRef}
            contentRef={contentRef}
            isOverflowed={isOverflowed}
          />
        </div>
      )}
    </motion.div>
  );
});

export default ProfileCard;

/* ---------------- SOCIAL ---------------- */

function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="hover:text-cyan-400 transition">
      {icon}
    </a>
  );
}
