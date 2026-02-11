'use client';

import { motion } from "framer-motion";
import { Scale, Briefcase, Shield, ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
    {
        id: "01",
        title: "Criminal Defense",
        desc: "High-stakes advocacy. We dismantle allegations with forensic precision.",
        details: "From white-collar investigations to complex litigation, our defense strategy is proactive, aggressive, and discreet.",
        icon: Scale,
        colSpan: "md:col-span-8",
        bgImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Corporate Law",
        desc: "Mergers, acquisitions, and ironclad contracts.",
        details: "Navigating the labyrinth of international business law to secure your enterprise's future.",
        icon: Briefcase,
        colSpan: "md:col-span-4",
        bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Asset Protection",
        desc: "Legacy preservation for the ultra-wealthy.",
        details: "Trusts, offshore structures, and estate planning designed to withstand any scrutiny.",
        icon: Shield,
        colSpan: "md:col-span-5", // Example of asymmetry
        bgImage: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "04", // Added a 4th for bento balance
        title: "Intellectual Property",
        desc: "Guarding your ideas as fiercely as your assets.",
        details: "Patent filing, copyright litigation, and brand protection strategies.",
        icon: FileText,
        colSpan: "md:col-span-7",
        bgImage: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-gold text-xs uppercase tracking-[0.4em] mb-4"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif text-white"
                        >
                            Legal Mastery
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md text-white/60 font-light"
                    >
                        <p>We do not just practice law; we define it. Select a specialized field to explore our strategic approach.</p>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            layoutId={`service-${index}`}
                            className={`relative group overflow-hidden rounded-sm glass-panel ${service.colSpan} min-h-[300px] md:min-h-[400px]`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
                                <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                                        <service.icon className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                                    </div>
                                    <span className="text-4xl font-serif text-white/10 group-hover:text-gold/20 transition-colors duration-500">
                                        {service.id}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <div className="relative overflow-hidden h-[3em]">
                                        <p className="text-white/60 text-sm font-light leading-relaxed absolute top-0 left-0 transition-transform duration-500 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                                            {service.desc}
                                        </p>
                                        <p className="text-white/80 text-sm font-light leading-relaxed absolute top-0 left-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pb-1">
                                            {service.details}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <span>View Case Studies</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>

                            {/* Border Interaction */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
