'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-navy-900">
            {/* Background Image - Cinematic Odesa Opera House */}
            <div className="absolute inset-0 z-0 scale-105">
                <Image
                    src="/images/odesa-opera.png"
                    alt="Odesa Opera House"
                    fill
                    className="object-cover opacity-70 grayscale-[0.2]"
                    priority
                    quality={100}
                />
                {/* Refined Overlays - Deepened for maximum readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent" />
                <div className="absolute inset-0 bg-navy-950/30" />
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            <div className="container-custom relative z-10 w-full pt-20">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <ShieldCheck className="text-gold w-5 h-5" strokeWidth={1.5} />
                        <span className="text-gold text-xs uppercase tracking-[0.4em] font-medium font-sans">
                            {t('urgent')} • Odesa Hub
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-8xl lg:text-9xl font-serif text-white !text-white leading-[0.9] mb-12 tracking-tight"
                    >
                        Excellence <br />
                        <span className="text-editorial text-gold/90 font-light">Defined by</span><br />
                        Legacy.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed mb-12 font-sans"
                    >
                        Granenko & Dovzhenko is a premier legal institution protecting the interests of elite businesses and individuals with strategic mastery and unwavering discretion.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-wrap gap-8 items-center"
                    >
                        <Link
                            href="#contact"
                            className="btn-luxury"
                        >
                            {t('consultation')}
                            <ArrowRight className="ml-3 w-4 h-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="link-premium text-white"
                        >
                            {t('services')}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-90 mb-8">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-t from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
