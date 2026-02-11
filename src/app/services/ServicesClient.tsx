'use client';

import { useState } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

type ServiceCategory = 'military' | 'auto' | 'civil' | 'business';

export default function ServicesClient() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<ServiceCategory>('military');
    const [mobileExpanded, setMobileExpanded] = useState<ServiceCategory | null>(null);

    const localizedServices = {
        military: {
            title: t('military'),
            description: "Спеціалізована правова допомога військовослужбовцям, зобов’язаним та їх родинам.",
            items: [
                { title: t('service_military_law'), desc: "Кваліфікований юридичний супровід з усіх питань військового права." },
                { title: t('service_tcc'), desc: "Професійний супровід при взаємодії з ТЦК та СП." },
                { title: t('service_vvk'), desc: "Оскарження неправомірних рішень військово-лікарських комісій." },
                { title: t('service_deferment'), desc: "Правова допомога в отриманні відстрочки від мобілізації." }
            ]
        },
        auto: {
            title: t('service_auto'),
            description: "Повний правовий захист водіїв та власників транспортних засобів.",
            items: [
                { title: t('service_auto'), desc: "Захист інтересів при ДТП, супровід страхових виплат." },
                { title: "Оскарження штрафів", desc: "Правова допомога при неправомірних діях патрульної поліції." },
                { title: "Повернення прав", desc: "Захист у справах про позбавлення права керування." }
            ]
        },
        civil: {
            title: t('individuals'),
            description: "Вирішення особистих та майнових спорів будь-якої складності.",
            items: [
                { title: t('service_family'), desc: "Розірвання шлюбу, поділ майна, аліменти." },
                { title: t('service_property'), desc: "Захист права власності та спадкові справи." },
                { title: t('service_inheritance'), desc: "Оформлення спадщини та вирішення супутніх спорів." },
                { title: t('service_bankruptcy'), desc: "Процедура банкрутства фізичних осіб." }
            ]
        },
        business: {
            title: t('business'),
            description: "Юридичний супровід бізнесу та IT-проектів.",
            items: [
                { title: t('service_it'), desc: "Структурування IT-бізнесу та захист інтелектуальної власності." },
                { title: t('service_tax'), desc: "Податкове планування та вирішення спорів з ДПС." },
                { title: "Захист активів", desc: "Комплексні заходи щодо збереження активів підприємства." }
            ]
        }
    };

    return (
        <>
            <Navigation />
            <main className="bg-white min-h-screen">
                {/* Hero Section with Odesa Opera Background */}
                <div className="relative w-full h-[60vh] flex items-center overflow-hidden">
                    <Image
                        src="/images/odesa-opera.png"
                        alt="Odesa Opera House Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />

                    <div className="container-custom relative z-10 pt-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="max-w-3xl"
                        >
                            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium block mb-4">{t('services')}</span>
                            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Expertise & Heritage</h1>
                            <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                                Ми поєднуємо глибоку експертизу з цінностями Одеської юридичної школи.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="container-custom py-24">
                    {/* Desktop Layout: Tabs + Content */}
                    <div className="hidden lg:grid grid-cols-12 gap-12">
                        {/* Sidebar Tabs */}
                        <div className="col-span-3 space-y-2">
                            {(Object.entries(localizedServices) as [ServiceCategory, any][]).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={clsx(
                                        "w-full text-left py-4 px-6 text-sm uppercase tracking-widest font-medium transition-all duration-300 border-l-2",
                                        activeTab === key
                                            ? "border-gold text-slate-900 bg-slate-50"
                                            : "border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50/50"
                                    )}
                                >
                                    {data.title}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="col-span-9 min-h-[500px]">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-3xl font-serif text-slate-900 mb-2">{localizedServices[activeTab].title}</h2>
                                    <p className="text-slate-500 mb-10 font-light">{localizedServices[activeTab].description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {localizedServices[activeTab].items.map((item: any, index: number) => (
                                            <div key={index} className="group p-6 border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 rounded-sm bg-white">
                                                <h3 className="text-lg font-serif text-slate-900 mb-3 group-hover:text-gold transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                                                    {item.desc}
                                                </p>
                                                <button className="text-[10px] uppercase tracking-widest text-slate-900 font-medium flex items-center gap-2 group/btn">
                                                    {t('consultation')}
                                                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Layout: Accordions */}
                    <div className="lg:hidden space-y-4">
                        {(Object.entries(localizedServices) as [ServiceCategory, any][]).map(([key, data]) => (
                            <div key={key} className="border border-slate-100 rounded-sm overflow-hidden">
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                                    className={clsx(
                                        "w-full flex items-center justify-between p-6 bg-white transition-colors",
                                        mobileExpanded === key ? "bg-slate-50" : ""
                                    )}
                                >
                                    <span className="font-serif text-lg text-slate-900">{data.title}</span>
                                    <ChevronDown className={clsx("w-5 h-5 text-slate-400 transition-transform duration-300", mobileExpanded === key ? "rotate-180" : "")} />
                                </button>
                                <AnimatePresence>
                                    {mobileExpanded === key && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100/50">
                                                <p className="text-sm text-slate-500 mb-6 font-light">{data.description}</p>
                                                <div className="space-y-4">
                                                    {data.items.map((item: any, idx: number) => (
                                                        <div key={idx} className="bg-white p-4 rounded-sm border border-slate-100">
                                                            <h4 className="font-serif text-slate-900 mb-2">{item.title}</h4>
                                                            <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
