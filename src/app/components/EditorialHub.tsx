'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function EditorialHub() {
    const { t, lang } = useLanguage();

    const publications = [
        {
            tag: t('editorial_tag'),
            date: "Feb 10, 2026",
            title: lang === 'UA' ? "Морські санкції: Навігация в нових реаліях комплаєнсу в портах Одеси" : "Maritime Sanctions: Navigating New Compliance Realities in Odesa Ports",
            image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=90&w=2000&auto=format&fit=crop"
        },
        {
            tag: lang === 'UA' ? "Новини фірми" : "Firm News",
            date: "Jan 28, 2026",
            title: lang === 'UA' ? "Granenko & Dovzhenko отримали визнання Tier 1 у рейтингу Legal Excellence 2024" : "Granenko & Dovzhenko Awarded Tier 1 Recognition by Legal Excellence 2024",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=90&w=2000&auto=format&fit=crop"
        },
        {
            tag: lang === 'UA' ? "Експертна думка" : "Expert Opinion",
            date: "Jan 15, 2026",
            title: lang === 'UA' ? "Еволюція механізмів компенсації шкоди, завданої війною в Україні" : "The Evolution of War Damage Compensation Frameworks in Ukraine",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=90&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-32 bg-[#F1F4F8]">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-gold text-xs uppercase tracking-[0.4em] font-medium block mb-6">{lang === 'UA' ? "Контент та Медіа" : "Content & Media"}</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-navy-900 leading-none tracking-tight">
                            {t('editorial_title').split(' ')[0]} <br />
                            <span className="text-editorial font-light text-gold/90">{t('editorial_title').split(' ').slice(1).join(' ')}.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {publications.map((pub, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-slate-200">
                                <Image
                                    src={pub.image}
                                    alt={pub.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1">
                                    <span className="text-[10px] uppercase tracking-widest text-navy-900 font-bold">
                                        {pub.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 block font-medium">
                                    {pub.date}
                                </span>
                                <h3 className="text-2xl font-serif text-navy-900 group-hover:text-gold transition-colors duration-500 leading-tight">
                                    {pub.title}
                                </h3>
                                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-[10px] uppercase tracking-widest text-navy-900 font-bold">
                                        {lang === 'UA' ? "Читати статтю" : "Read Full Insight"}
                                    </span>
                                    <ArrowUpRight className="w-3 h-3 text-gold" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-20 pt-16 border-t border-slate-200 flex flex-wrap gap-12 text-slate-400 items-center justify-center opacity-70">
                    <span className="text-[10px] uppercase tracking-widest">As Featured In:</span>
                    <span className="font-serif text-2xl italic tracking-tighter text-slate-900/40">The Legal 500</span>
                    <span className="font-serif text-2xl italic tracking-tighter text-slate-900/40">Chambers & Partners</span>
                    <span className="font-serif text-2xl italic tracking-tighter text-slate-900/40">Forbes Ukraine</span>
                    <span className="font-serif text-2xl italic tracking-tighter text-slate-900/40">Liga Law</span>
                </div>
            </div>
        </section>
    );
}
