"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { playSound } from "@/lib/sound";

interface QRModalProps {
    isOpen: boolean;
    onClose: () => void;
    url: string;
}

export default function QRModal({ isOpen, onClose, url }: QRModalProps) {
    const downloadQR = () => {
        const svg = document.getElementById("sajilo-qr");
        if (!svg) return;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            if (ctx) {
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
                const pngFile = canvas.toDataURL("image/png");
                const downloadLink = document.createElement("a");
                downloadLink.download = `sajilo-qr-${Date.now()}.png`;
                downloadLink.href = pngFile;
                downloadLink.click();
                playSound("/sounds/click.mp3");
            }
        };
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-xl"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[310] w-[90vw] max-w-md bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white italic uppercase">Share via QR</h2>
                                <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-bold mt-1">Sajilo.Digital Core</p>
                            </div>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-white/20 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <div className="p-6 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group transition-transform hover:scale-105">
                                <QRCodeSVG
                                    id="sajilo-qr"
                                    value={url}
                                    size={240}
                                    level="H"
                                    includeMargin={true}
                                    imageSettings={{
                                        src: "/logos/circularlogo.svg",
                                        x: undefined,
                                        y: undefined,
                                        height: 50,
                                        width: 50,
                                        excavate: true,
                                    }}
                                />
                            </div>

                            <div className="w-full grid grid-cols-2 gap-4">
                                <button
                                    onClick={downloadQR}
                                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                                >
                                    <Download size={16} className="text-blue-400" />
                                    Download
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.share?.({ title: "Sajilo Digital", url });
                                        playSound("/sounds/click.mp3");
                                    }}
                                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-[0.3em] hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                                >
                                    <Share2 size={16} />
                                    System Share
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
