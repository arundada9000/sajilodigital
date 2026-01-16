"use client";
import { services } from "../../../data/services";
import { Service, PricingPlan } from "../../../types/service";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, MoveRight } from "lucide-react";
import Breadcrumbs from "@/src/components/common/Breadcrumbs";

interface ServiceDetailClientProps {
    service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <div ref={containerRef} className="bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference">
                <Link href="/services" className="group flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-black uppercase opacity-40 group-hover:opacity-100 transition-opacity">Back to Origin</span>
                </Link>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 z-50">
                    <Breadcrumbs className="mb-0 text-white/50" />
                </div>
                <div className="hidden md:flex gap-12">
                    {["Strategy", "Performance", "Creative", "Scale"].map((item) => (
                        <span key={item} className="text-[9px] tracking-[0.5em] font-black uppercase text-white/20">{item}</span>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black to-black z-10" />
                    {service.image ? (
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover opacity-40 lg:opacity-60"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-blue-900/10" />
                    )}
                </motion.div>

                <div className="relative z-20 text-center max-w-6xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10"
                    >
                        <div className="w-10 md:w-16 h-[1px]" style={{ backgroundColor: service.accentColor || '#3b82f6' }} />
                        <span className="text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.8em] font-black uppercase" style={{ color: service.accentColor || '#3b82f6' }}>
                            {service.slug.replace('-', '_')}
                        </span>
                        <div className="w-10 md:w-16 h-[1px]" style={{ backgroundColor: service.accentColor || '#3b82f6' }} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-[140px] lg:text-[180px] font-black tracking-tighter leading-[1] md:leading-none italic uppercase mb-8 md:mb-12"
                    >
                        {service.title.split(' ')[0]}<br />
                        <span className="text-white/20">{service.title.split(' ').slice(1).join(' ')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-base md:text-2xl text-white/40 max-w-3xl mx-auto font-medium italic leading-relaxed px-4"
                    >
                        "{service.description}"
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4"
                >
                    <div className="w-[1px] h-12 md:h-20 bg-linear-to-b from-transparent via-white/20 to-transparent" />
                    <span className="text-[8px] md:text-[10px] tracking-[0.5em] font-black uppercase text-white/20">Data Stream</span>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 md:py-40 px-6 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.6em] font-black uppercase text-blue-500 mb-6 md:mb-8">Design. Philosophy.</h3>
                        <h2 className="text-4xl md:text-7xl font-black italic uppercase leading-[1.1] md:leading-none mb-8 md:mb-12">
                            Architecting<br />
                            The Future <span className="text-white/20">Legacy.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/40 leading-relaxed italic mb-8 md:mb-12">
                            "Every pixel is a conscious decision. Every line of code is an architecture of intent. We don't just complete projects; we create benchmarks for excellence in the digital age."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {[
                                { label: "Precision", val: "Pixel_Perfect" },
                                { label: "Scale", val: "Global_Ready" },
                                { label: "Architecture", val: "Secure_Core" },
                                { label: "Experience", val: "Human_Centric" }
                            ].map((m) => (
                                <div key={m.label} className="border-l border-white/10 pl-5 md:pl-6 py-2">
                                    <span className="text-[8px] tracking-widest uppercase font-bold text-white/20 block mb-1">{m.label}</span>
                                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase">{m.val}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square relative rounded-[30px] md:rounded-[60px] overflow-hidden border border-white/10"
                    >
                        <Image src={service.image || '/services/the-shop.gif'} alt="Modern Design" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                    </motion.div>
                </div>
            </section>

            {/* Pricing Models */}
            <section className="py-24 md:py-40 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.6em] font-black uppercase text-white/20 block mb-6">Investment Models</span>
                        <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter">Strategic <span className="text-white/20">Packages.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {service.pricing.map((plan: PricingPlan, i: number) => (
                            <motion.div
                                key={plan.plan}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-10 md:p-12 rounded-[30px] md:rounded-[50px] border ${plan.popular ? 'border-blue-500/50 bg-blue-500/[0.03]' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'} transition-all group`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-black px-4 md:px-6 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                        Optimal Choice
                                    </div>
                                )}
                                <h4 className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] font-black uppercase text-white/40 mb-8 md:mb-10">{plan.plan}</h4>
                                <div className="mb-8 md:mb-10">
                                    <span className="text-4xl md:text-5xl font-black italic">{plan.price.split(' ')[0]}</span>
                                    <span className="text-xl md:text-2xl font-bold opacity-30 italic leading-none">{plan.price.split(' ').slice(1).join(' ')}</span>
                                    <span className="block text-[9px] md:text-[10px] uppercase font-bold text-white/20 mt-2 tracking-widest">{plan.duration}</span>
                                </div>

                                <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                                    {plan.features.map((feat: string) => (
                                        <div key={feat} className="flex items-center gap-3 md:gap-4">
                                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-500" />
                                            <span className="text-sm font-medium text-white/60 italic">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact" className="block">
                                    <button className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all flex items-center justify-center gap-3 md:gap-4 ${plan.popular ? 'bg-white text-black hover:scale-105 shadow-2xl shadow-blue-500/20' : 'bg-white/5 text-white hover:bg-white hover:text-black'}`}>
                                        Select Path <MoveRight size={14} />
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center mt-16 md:mt-20 text-white/20 text-[10px] italic font-medium max-w-xl mx-auto px-4">
                        * {service.priceNote} All models are adaptable to bespoke ecosystem requirements.
                    </p>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-40 md:py-60 px-6 text-center overflow-hidden relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative z-10"
                >
                    <Sparkles className="mx-auto text-blue-500 mb-8 md:mb-12" size={32} />
                    <h2 className="text-5xl md:text-[120px] font-black italic uppercase leading-none mb-8 md:mb-12 tracking-tighter">
                        Ready to <span className="text-white/20">Scale?</span>
                    </h2>
                    <Link href="/contact" className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-12 md:px-16 py-6 md:py-8 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] shadow-2xl shadow-blue-500/20"
                        >
                            Initiate Connection
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Cinematic Background Lines */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -rotate-12" />
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 rotate-6" />
            </section>

            {/* Minimal Footer */}
            <footer className="p-8 md:p-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <span className="text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[1em] font-black text-white/10 uppercase">Sajilo.Digital 2026</span>
                <div className="flex gap-6 md:gap-10">
                    {["Instagram", "Facebook", "Github"].map(s => (
                        <a key={s} href="#" className="text-[9px] md:text-[10px] tracking-widest font-bold text-white/30 hover:text-white transition-colors uppercase">{s}</a>
                    ))}
                </div>
            </footer>

            {/* Structured Data for Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://sajilodigital.com.np"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Services",
                                        "item": "https://sajilodigital.com.np/services"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": service.title,
                                        "item": `https://sajilodigital.com.np/services/${service.slug}`
                                    }
                                ]
                            },
                            {
                                "@type": "Service",
                                "name": service.title,
                                "description": service.description,
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Sajilo Digital"
                                },
                                "areaServed": ["NP", "Global"],
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": `${service.title} Packages`,
                                    "itemListElement": service.pricing.map((plan) => ({
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": `${service.title} - ${plan.plan}`
                                        },
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "price": plan.price.replace(/[^0-9.]/g, '') || "0",
                                            "priceCurrency": "NPR",
                                            "description": plan.features.join(", ")
                                        }
                                    }))
                                }
                            }
                        ]
                    })
                }}
            />


        </div>
    );
}
