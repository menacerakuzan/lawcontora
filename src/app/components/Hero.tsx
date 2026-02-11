'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image - High Res Architectural/Corporate */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    alt="Corporate Architecture"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay - Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <div className="container-custom relative z-10 w-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gold" />
                        <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Est. 1998 • Odesa</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8 tracking-tight">
                        Excellence is <br />
                        <span className="italic">Not an Act</span>,<br />
                        But a Habit.
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-10">
                        Granenko & Dovzhenko provides premier legal counsel for complex corporate, criminal, and asset protection matters. We protect your legacy with unwavering discretion.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link
                            href="#contact"
                            className="bg-gold hover:bg-white text-slate-900 px-8 py-4 uppercase text-xs tracking-widest font-medium transition-colors duration-300 flex items-center gap-2"
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="border border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 uppercase text-xs tracking-widest font-medium transition-all duration-300"
                        >
                            Explore Expertise
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
