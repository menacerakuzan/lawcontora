'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function StatsImpact() {
    const { t } = useLanguage();

    const stats = [
        { label: t('stat_cases'), value: "2,400+" },
        { label: t('stat_court'), value: "98%" },
        { label: t('stat_clients'), value: "450+" },
        { label: t('stat_assets'), value: "$4.2B" },
    ];

    return (
        <section className="py-32 bg-navy-950 border-y border-white/5 relative overflow-hidden">
            {/* Subtle light leak for depth */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center lg:text-left flex flex-col items-center lg:items-start"
                        >
                            <span className="text-6xl md:text-7xl font-serif text-white mb-4 tracking-tighter">
                                {stat.value}
                            </span>
                            <div className="w-8 h-1 bg-gold mb-6" />
                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-sans font-semibold leading-relaxed max-w-[180px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
