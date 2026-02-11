"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Clock, Database } from "lucide-react";

export default function ModernTech() {
    return (
        <section id="tech" className="relative py-40 md:py-48 bg-slate-950 overflow-hidden">
            {/* Section Number */}
            <div className="absolute top-20 right-12 text-[12rem] font-serif text-slate-900 select-none">
                04
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* High-End Banking App Interface */}
                    <div className="order-2 lg:order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-square rounded-sm border border-accent/30 bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-xl p-10"
                        >
                            {/* Glassmorphism Card */}
                            <div className="relative h-full border border-accent/20 bg-black/30 backdrop-blur-md p-8 flex flex-col justify-between">

                                {/* Header with Pulse Animation */}
                                <div className="flex justify-between items-start">
                                    <div className="relative">
                                        <Lock className="w-8 h-8 text-accent" strokeWidth={1.5} />
                                        {/* Scanning Pulse Animation */}
                                        <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping" />
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full">
                                            <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-amber-200/60 text-[10px] uppercase tracking-[0.3em]">Secure</p>
                                        <p className="text-amber-200 text-sm font-medium">Active</p>
                                    </div>
                                </div>

                                {/* Gold Dividers */}
                                <div className="space-y-6">
                                    <div className="h-[0.5px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                                    {/* Feature List */}
                                    <div className="space-y-4">
                                        {[
                                            { icon: Shield, label: "Military-Grade Encryption" },
                                            { icon: Clock, label: "Real-Time Updates" },
                                            { icon: Database, label: "Secure Document Vault" }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.2 + 0.5 }}
                                                className="flex items-center gap-4"
                                            >
                                                <item.icon className="w-5 h-5 text-accent/60" strokeWidth={1.5} />
                                                <div className="flex-1 h-[0.5px] bg-gradient-to-r from-accent/20 to-transparent" />
                                                <span className="text-amber-200/70 text-xs font-light">{item.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="h-[0.5px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                                </div>

                                {/* Footer Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-3xl font-serif text-amber-200">24/7</p>
                                        <p className="text-amber-200/50 text-[10px] uppercase tracking-[0.2em]">Access</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-serif text-amber-200">100%</p>
                                        <p className="text-amber-200/50 text-[10px] uppercase tracking-[0.2em]">Secure</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 border border-accent/20 rounded-full" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-accent/10 rounded-full" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-200/80 text-[10px] uppercase tracking-[0.4em] mb-6 block font-medium">
                                Exclusive Access
                            </span>
                            <h2 className="text-6xl md:text-7xl font-serif text-white mb-8 leading-[0.9] tracking-tighter">
                                The Digital<br />Concierge
                            </h2>
                            <p className="text-xl font-light leading-relaxed text-amber-200/70">
                                Experience legal counsel with unprecedented transparency and security. Our proprietary client portal provides 24/7 access to your case files, secure communication, and real-time updates—encased in military-grade encryption.
                            </p>

                            {/* Feature Highlights */}
                            <div className="space-y-4 pt-8">
                                {["Encrypted end-to-end communication", "Real-time case status tracking", "Secure document management system"].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5" />
                                        <p className="text-amber-200/60 font-light leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
