'use client';

import { motion } from "framer-motion";
import { Lock, Fingerprint, ScanEye, Activity } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Concierge() {
    return (
        <section id="concierge" className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Security Terminal Interface */}
                    <div className="relative group">
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative bg-black/80 backdrop-blur-xl border border-gold/20 rounded-lg overflow-hidden perspective-1000"
                        >
                            {/* Top Bar - Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gold/10 bg-gold/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                                <span className="text-[10px] font-mono text-gold/60 tracking-widest">SECURE_CONNECTION_ESTABLISHED</span>
                                <Activity className="w-4 h-4 text-gold/60" />
                            </div>

                            {/* Main Terminal Content */}
                            <div className="p-8 font-mono relative">
                                {/* Scanning Line Animation */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.8)] animate-[scan_3s_linear_infinite]" />

                                <div className="flex justify-between items-start mb-8">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Fingerprint className="w-8 h-8 text-gold" strokeWidth={1} />
                                            <span className="text-xs text-gold/40">BIOMETRIC_AUTH_REQUIRED</span>
                                        </div>
                                        <h3 className="text-xl text-white font-bold tracking-tighter">CLIENT PORTAL <span className="text-gold">V.2.0</span></h3>
                                    </div>
                                    <div className="border border-gold/20 p-2 rounded bg-gold/5">
                                        <Lock className="w-6 h-6 text-gold" />
                                    </div>
                                </div>

                                {/* Data Visualization / Metrics */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/5 p-4 rounded border border-white/5">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-[10px] text-gray-400">ENCRYPTION LEVEL</span>
                                            <span className="text-gold text-xs">AES-256</span>
                                        </div>
                                        <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                                            <div className="h-full bg-gold w-full animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded border border-white/5">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-[10px] text-gray-400">STATUS</span>
                                            <span className="text-green-400 text-xs">ACTIVE</span>
                                        </div>
                                        <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                                            <div className="h-full bg-green-400 w-[98%]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Code/Log Stream */}
                                <div className="space-y-1 text-[10px] text-gold/40 border-t border-gold/10 pt-4">
                                    <p>&gt; System initialized...</p>
                                    <p>&gt; Handshake complete. Token verified.</p>
                                    <p className="text-gold">&gt; Retrieving secure documents...</p>
                                    <p className="animate-pulse">&gt; _</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Description Text */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-gold" />
                                <span className="text-gold text-xs tracking-[0.3em] uppercase">Digital Concierge 2.0</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-[1]">
                                Total Access.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Zero Compromise.</span>
                            </h2>

                            <p className="text-white/60 font-light leading-relaxed mb-8">
                                Welcome to the future of legal service. Our proprietary interface serves as your 24/7 command center. Track cases in real-time, access military-grade encrypted documents, and communicate securely—all from a dashboard designed for the elite.
                            </p>

                            <Magnetic>
                                <button className="px-8 py-4 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold/10 transition-colors bg-transparent rounded-sm flex items-center gap-3">
                                    <ScanEye className="w-4 h-4" />
                                    Access Terminal
                                </button>
                            </Magnetic>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
