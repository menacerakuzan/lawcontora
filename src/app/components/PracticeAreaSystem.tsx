'use client';

import {
    Scale, ShieldAlert, Building2, Landmark,
    Anchor, UserCheck, Gavel, Briefcase,
    Home, Globe, ShieldCheck, FileText
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const practices = [
    { icon: ShieldAlert, category: "military", key: "service_military_law" },
    { icon: Building2, category: "business", key: "service_it" },
    { icon: Landmark, category: "business", key: "service_tax" },
    { icon: Gavel, category: "individuals", key: "service_family" },
    { icon: Anchor, category: "business", key: "service_bankruptcy" },
    { icon: UserCheck, category: "individuals", key: "service_inheritance" },
    { icon: Briefcase, category: "business", key: "service_it" },
    { icon: Home, category: "individuals", key: "service_property" },
    { icon: Globe, category: "business", key: "service_tax" },
    { icon: ShieldCheck, category: "individuals", key: "service_auto" },
    { icon: Scale, category: "individuals", key: "service_family" },
    { icon: FileText, category: "military", key: "service_tcc" },
];

export default function PracticeAreaSystem() {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-navy-950 border-t border-white/5 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-gold text-xs uppercase tracking-[0.4em] font-medium block mb-6">Expertise Overview</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-none tracking-tight">
                            Scale of <br />
                            <span className="text-editorial font-light text-gold/90">Strategic Mastery.</span>
                        </h2>
                    </div>
                    <Link href="/services" className="link-premium pb-2">
                        View All Practices
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 overflow-hidden border border-white/5">
                    {practices.map((practice, index) => (
                        <Link
                            key={index}
                            href={`/services?cat=${practice.category}`}
                            className="group relative bg-navy-950 p-10 h-80 flex flex-col justify-between hover:bg-navy-900 transition-colors duration-700"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500">
                                    <practice.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-slate-300 group-hover:text-white/20">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-500">
                                    {t(practice.key)}
                                </h3>
                                <p className="text-sm text-slate-500 group-hover:text-white/50 font-light leading-relaxed line-clamp-2">
                                    Comprehensive legal representation focusing on strategic results and absolute discretion.
                                </p>
                            </div>

                            <div className="w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
