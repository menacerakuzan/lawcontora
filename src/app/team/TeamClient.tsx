'use client';

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function TeamClient() {
    const { t } = useLanguage();
    const partners = [
        {
            name: "Максим Граненко",
            title: "Керуючий партнер",
            bio: "Засновник фірми з 25-річним досвідом у сфері складних корпоративних спорів та захисту активів.",
            image: "/maksimka.png"
        },
        {
            name: "Максим Довженко",
            title: "Старший партнер",
            bio: "Експерт у кримінальному праві та захисті бізнесу. Відомий своєю стратегічною майстерністю.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Олена Коваленко",
            title: "Партнер",
            bio: "Спеціалізується на сімейному та цивільному праві, забезпечуючи конфіденційність при вирішенні спорів.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <>
            <Navigation />
            <main className="pt-32 pb-24 bg-white min-h-screen">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">{t('partners')}</h1>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            {t('urgent')}? Ми тут, щоб захистити ваші інтереси на найвищому рівні.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif text-slate-900 mb-1">{partner.name}</h3>
                                <p className="text-xs uppercase tracking-widest text-gold mb-4">{partner.title}</p>
                                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                                    {partner.bio}
                                </p>
                                <button className="text-xs uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 hover:border-gold hover:text-gold transition-colors">
                                    {t('portal')}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
