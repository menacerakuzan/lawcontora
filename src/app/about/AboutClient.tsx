'use client';

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutClient() {
    const { t } = useLanguage();
    return (
        <>
            <Navigation />
            <main className="pt-32 pb-0 bg-white min-h-screen">
                <div className="container-custom mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium block mb-4">{t('legacy')}</span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight">
                                {t('service_military_law')}.<br />{t('partners')}.<br />{t('legacy')}.
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg text-slate-500 font-light leading-relaxed space-y-6"
                        >
                            <p>
                                {t('address_odesa')}, {t('address_kherson')}, {t('address_lviv')}.
                            </p>
                            <p>
                                Granenko & Dovzhenko — це символ стабільності та професіоналізму на юридичній карті України.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Heritage Background Section */}
                <div className="relative w-full h-[600px] mb-32 overflow-hidden flex items-center justify-center">
                    <Image
                        src="/images/odesa-opera.png"
                        alt="Odesa Opera House"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-950/70" />
                    <div className="relative z-10 container-custom text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-white font-serif text-4xl md:text-6xl mb-6">Одеська Опера</h2>
                            <p className="text-white/60 text-xs uppercase tracking-[0.4em]">Heritage of Excellence Since 1998</p>
                        </motion.div>
                    </div>
                </div>

                <div className="container-custom pb-24">
                    <div className="border-t border-slate-100 pt-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <h3 className="text-6xl font-serif text-slate-900 mb-2">25+</h3>
                                <p className="text-xs uppercase tracking-widest text-slate-500">{t('legacy')}</p>
                            </div>
                            <div>
                                <h3 className="text-6xl font-serif text-slate-900 mb-2">$5B+</h3>
                                <p className="text-xs uppercase tracking-widest text-slate-500">Transaction Value</p>
                            </div>
                            <div>
                                <h3 className="text-6xl font-serif text-slate-900 mb-2">100%</h3>
                                <p className="text-xs uppercase tracking-widest text-slate-500">Client Confidentiality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
