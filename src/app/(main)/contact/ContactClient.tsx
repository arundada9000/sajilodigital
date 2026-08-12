"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    User,
    Hash,
    Briefcase,
} from "lucide-react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
    FaGithub,
    FaYoutube,
} from "react-icons/fa6";
import ShinyText from "@/components/ShinyText";

/* ---------------- TYPES & CONSTANTS ---------------- */

interface FormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    budget: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

const socials = [
    {
        name: "Facebook",
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/profile.php?id=61579846778258",
        color: "hover:text-blue-500",
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        href: "https://youtube.com/@sajilo_digital",
        color: "hover:text-red-600",
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "https://instagram.com/sajilo_digital",
        color: "hover:text-pink-500",
    },
    {
        name: "TikTok",
        icon: <FaTiktok />,
        href: "https://tiktok.com/@sajilo_digital",
        color: "hover:text-white",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/sajhilodigital",
        color: "hover:text-gray-400",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp />,
        href: "https://wa.me/9779842977207",
        color: "hover:text-green-500",
    },
];

const mapEmbeds = {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1954935861136!2d83.4619595!3d27.6803521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968758f481d105%3A0xf2fb47796be9125!2sSajilo%20Digital%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1767600075720!5m2!1sen!2snp",
    street:
        "https://www.google.com/maps/embed?pb=!4v1767600988113!6m8!1m7!1swUxxI280I6TyGYXVy97lGQ!2m2!1d27.68048555701298!2d83.46187627229557!3f223.40842805891296!4f6.0096930069901475!5f0.782086597462746",
};

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

export default function ContactClient() {
    const [formData, setFormData] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        budget: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [mapMode, setMapMode] = useState<"map" | "street">("map");

    // Clear success message after 5 seconds
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => setIsSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    const validateForm = () => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (formData.phone && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        else if (formData.message.length < 10)
            newErrors.message = "Message too short";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "a70b99ba-e904-480f-9f8b-e420787fbc0d",
                    ...formData,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setIsSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    budget: "",
                });
            } else {
                console.error("Web3Forms Error:", result.message);
                alert("Something went wrong. Please try again later.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("Something went wrong. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error as user types
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

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
                            <MessageSquare className="w-4 h-4" />
                            <span>Let's Build Something Great</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                            <ShinyText text="Get In Touch" className="block" />
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                            Have a visionary project or a complex technical challenge? Partner
                            with Sajilo Digital to turn your ideas into digital reality.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Sidebar: Info & Socials (Col-lg-5) */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <h2 className="text-3xl font-bold mb-8 italic text-white flex items-center gap-3">
                                Contact Information
                                <div className="h-0.5 flex-1 bg-linear-to-r from-cyan-500 to-transparent opacity-30" />
                            </h2>

                            <div className="grid gap-6">
                                {/* Email Card */}
                                <motion.div
                                    variants={itemVariants}
                                    className="group p-6 rounded-2xl border border-white/10 bg-[#161b22]/40 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2">
                                                Email Addresses
                                            </h3>
                                            <p className="text-gray-400 group-hover:text-white transition-colors">
                                                info@sajilodigital.com.np
                                            </p>
                                            <p className="text-gray-400 group-hover:text-white transition-colors">
                                                sajhilodigital@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone Card */}
                                <motion.div
                                    variants={itemVariants}
                                    className="group p-6 rounded-2xl border border-white/10 bg-[#161b22]/40 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2">Phone Lines</h3>
                                            <p className="text-gray-400 group-hover:text-white transition-colors">
                                                +977-9842977207
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Office Card */}
                                <motion.div
                                    variants={itemVariants}
                                    className="group p-6 rounded-2xl border border-white/10 bg-[#161b22]/40 backdrop-blur-xl hover:border-green-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2">Our Studio</h3>
                                            <p className="text-gray-400 group-hover:text-white transition-colors">
                                                Horizon Chowk, Butwal
                                            </p>
                                            <p className="text-gray-400 group-hover:text-white transition-colors">
                                                Lumbini, Nepal
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Social Connect Card */}
                                <motion.div
                                    variants={itemVariants}
                                    className="p-8 rounded-3xl border border-white/5 bg-linear-to-br from-[#161b22] to-[#0b0f19]"
                                >
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        Connect With Us
                                        <div className="h-px flex-1 bg-white/10" />
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                        {socials.map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-400 transition-all duration-300 ${social.color} hover:border-cyan-500/50 hover:bg-cyan-500/5 shadow-lg shadow-black/20`}
                                                aria-label={social.name}
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Main Form Area (Col-lg-7) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-7"
                        >
                            <div className="relative p-1 rounded-3xl bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 shadow-2xl overflow-hidden group">
                                {/* Glow following mouse or pulse can go here */}
                                <div className="relative p-8 md:p-12 rounded-[22px] bg-[#0b0f19] border border-white/5">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="p-3 rounded-full bg-cyan-500 text-black">
                                            <Briefcase className="w-5 h-5 font-bold" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white tracking-tight">
                                            Project Inquiry
                                        </h2>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Name Input */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 px-1">
                                                    Full Name
                                                </label>
                                                <div className="relative group">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Arun Neupane"
                                                        className={`w-full bg-white/5 border ${errors.name
                                                            ? "border-red-500/50 bg-red-500/5"
                                                            : "border-white/10"
                                                            } rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300`}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {errors.name && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="text-xs text-red-500 flex items-center gap-1 px-1 mt-1"
                                                        >
                                                            <AlertCircle className="w-3 h-3" /> {errors.name}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 px-1">
                                                    Email Address
                                                </label>
                                                <div className="relative group">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="arun@sajilodigitalpvtltd.com"
                                                        className={`w-full bg-white/5 border ${errors.email
                                                            ? "border-red-500/50 bg-red-500/5"
                                                            : "border-white/10"
                                                            } rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300`}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {errors.email && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="text-xs text-red-500 flex items-center gap-1 px-1 mt-1"
                                                        >
                                                            <AlertCircle className="w-3 h-3" /> {errors.email}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Phone Input */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 px-1">
                                                    Phone Number (Optional)
                                                </label>
                                                <div className="relative group">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+977-9811420975"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300"
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {errors.phone && (
                                                        <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="text-xs text-red-500 mt-1"
                                                        >
                                                            {errors.phone}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Budget Select */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-400 px-1">
                                                    Estimate Budget
                                                </label>
                                                <div className="relative group">
                                                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                                    <select
                                                        name="budget"
                                                        value={formData.budget}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white appearance-none focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300"
                                                    >
                                                        <option value="" className="bg-[#0b0f19]">
                                                            Select budget range
                                                        </option>
                                                        <option value="<50k" className="bg-[#0b0f19]">
                                                            Less than NPR 50,000
                                                        </option>
                                                        <option value="50k-100k" className="bg-[#0b0f19]">
                                                            NPR 50,000 - 100,000
                                                        </option>
                                                        <option value="100k-200k" className="bg-[#0b0f19]">
                                                            NPR 100,000 - 200,000
                                                        </option>
                                                        <option value="200k+" className="bg-[#0b0f19]">
                                                            NPR 200,000+
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subject Input */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-400 px-1">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Web Design / Mobile App / Digital Marketing"
                                                className={`w-full bg-white/5 border ${errors.subject
                                                    ? "border-red-500/50"
                                                    : "border-white/10"
                                                    } rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300`}
                                            />
                                        </div>

                                        {/* Message Input */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-400 px-1">
                                                How can we help?
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Describe your vision and requirements..."
                                                className={`w-full bg-white/5 border ${errors.message
                                                    ? "border-red-500/50"
                                                    : "border-white/10"
                                                    } rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300 resize-none`}
                                            />
                                            <AnimatePresence>
                                                {errors.message && (
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="text-xs text-red-500 mt-1"
                                                    >
                                                        {errors.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="relative w-full group overflow-hidden rounded-2xl bg-cyan-500 text-black font-bold py-5 tracking-wide transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50"
                                            >
                                                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                <span className="relative flex items-center justify-center gap-2 group-hover:gap-4 transition-all duration-300">
                                                    {isSubmitting
                                                        ? "Initiating Transmission..."
                                                        : isSuccess
                                                            ? "Message Received!"
                                                            : "Launch Inquiry"}
                                                    {isSuccess ? (
                                                        <CheckCircle2 className="w-5 h-5" />
                                                    ) : (
                                                        <Send className="w-5 h-5" />
                                                    )}
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Map Header & Toggles */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Find Our Base
                            </h2>
                            <p className="text-gray-400">
                                Toggle between standard map and immersive street view
                            </p>
                        </div>

                        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
                            <button
                                onClick={() => setMapMode("map")}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${mapMode === "map"
                                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                Satellite Map
                            </button>
                            <button
                                onClick={() => setMapMode("street")}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${mapMode === "street"
                                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                Street View
                            </button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative rounded-[40px] overflow-hidden border border-white/10 shadow-3xl h-[500px] md:h-[600px]"
                    >
                        {/* Overlay for aesthetic */}
                        <div className="absolute inset-0 bg-linear-to-b from-[#0b0f19] via-transparent to-[#0b0f19] pointer-events-none z-10 opacity-30 pointer-events-none" />

                        <iframe
                            src={mapEmbeds[mapMode]}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter:
                                    mapMode === "map"
                                        ? "grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)"
                                        : "none",
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                            className="relative z-0"
                        ></iframe>

                        {/* Float Card */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-10 md:left-10 z-20 w-[calc(100%-3rem)] md:w-auto">
                            <div className="p-6 md:p-8 rounded-[32px] bg-[#161b22]/90 backdrop-blur-2xl border border-white/10 shadow-2xl max-w-sm">
                                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                                    Sajilo Digital HQ
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Experience our workspace in Butwal. We're located at Horizon
                                    Chowk, ready to craft your next masterpiece.
                                </p>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="https://maps.app.goo.gl/nRfHypd3u2VNnmve9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded-xl text-sm font-bold group/link transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                    >
                                        Get Directions
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
