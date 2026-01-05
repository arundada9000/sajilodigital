"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Service } from "../../types/service";
import Link from "next/link";
import { MoveRight, Zap } from "lucide-react";

interface ServiceSectionProps extends Service {
    isReversed?: boolean;
    isActive?: boolean;
}

const ServiceSection = ({
    title,
    tagline,
    description,
    image,
    video,
    color,
    accentColor,
    isReversed = false,
    isActive = true,
    slug
}: ServiceSectionProps) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (isActive && videoRef.current) {
            videoRef.current.play().catch(() => { });
        } else if (!isActive && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isActive]);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen w-full flex items-center justify-center px-6 py-20 lg:py-0 relative overflow-hidden"
            style={{ backgroundColor: color || "#000" }}
        >
            {/* Dynamic Background Text (Awwwards Style) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] lg:opacity-[0.03]"
                initial={{ scale: 1.2, rotate: -5 }}
                animate={isActive ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <span className="text-[40vw] lg:text-[30vw] font-black uppercase whitespace-nowrap leading-none italic">
                    {title.split(' ')[0]}
                </span>
            </motion.div>

            {/* Decorative Light Leak */}
            <div
                className="absolute -top-1/4 -right-1/4 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] blur-[100px] lg:blur-[140px] opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${accentColor || '#3b82f6'} 0%, transparent 70%)` }}
            />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">

                {/* Media Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`order-1 lg:col-span-7 relative aspect-[16/10] lg:aspect-square xl:aspect-[16/10] rounded-[30px] lg:rounded-[60px] overflow-hidden border border-white/5 shadow-2xl group ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                    <AnimatePresence>
                        {!isVideoLoaded && (
                            <motion.div
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-10"
                            >
                                {image ? (
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/5 flex items-center justify-center" />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {video && (
                        <video
                            ref={videoRef}
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedData={() => setIsVideoLoaded(true)}
                            className={`w-full h-full object-cover transition-opacity duration-1500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                    )}

                    {/* Media Overlay Info */}
                    <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20">
                        <div className="flex items-center gap-2 lg:gap-3 bg-black/40 backdrop-blur-md px-4 lg:px-5 py-2 rounded-full border border-white/10">
                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] overflow-hidden whitespace-nowrap">
                                Active System
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`order-2 lg:col-span-5 flex flex-col items-start ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isActive ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8"
                    >
                        <Zap size={12} className="text-white/40" />
                        <span className="text-[9px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.6em] font-black uppercase text-white/40 italic">
                            {tagline}
                        </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-[900] text-white mb-6 lg:mb-10 tracking-tighter italic leading-[0.9] lg:leading-[0.85] uppercase">
                        {title.split(' ')[0]}<br />
                        <span className="text-white/20">{title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <p className="text-base lg:text-lg text-white/40 leading-relaxed max-w-md mb-10 lg:mb-14 font-medium italic">
                        "{description}"
                    </p>

                    <Link href={`/services/${slug}`} className="group inline-block w-full sm:w-auto">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-between lg:justify-start gap-6 lg:gap-8 bg-white/5 border border-white/10 px-8 lg:px-10 py-5 lg:py-6 rounded-full hover:bg-white hover:text-black transition-all"
                        >
                            <span className="text-[10px] lg:text-[11px] tracking-[0.3em] lg:tracking-[0.4em] font-black uppercase">Data Exploration</span>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-current flex items-center justify-center">
                                <MoveRight size={20} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>

            </div>

            {/* Section Indicator Footer */}
            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 hidden sm:flex gap-8 lg:gap-12 opacity-10 font-mono text-[8px] lg:text-[9px] uppercase tracking-widest">
                <span>Lat: 27.7172</span>
                <span>Lon: 85.3240</span>
                <span>{slug.toUpperCase()}</span>
            </div>
        </section>
    );
};

export default ServiceSection;
