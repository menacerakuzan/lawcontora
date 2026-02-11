'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Globe } from "lucide-react";
import { clsx } from "clsx";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const pathname = usePathname();
    const isHome = pathname === "/";
    const isLightText = isHome && !scrolled && !isOpen && !megaMenuOpen;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mega Menu Data
    const servicesMenu = {
        individuals: {
            title: t('individuals'),
            items: [
                { name: t('service_family'), href: "/services?cat=family" },
                { name: t('service_property'), href: "/services?cat=civil" },
                { name: t('service_inheritance'), href: "/services?cat=civil" },
                { name: t('service_auto'), href: "/services?cat=civil" },
            ]
        },
        military: {
            title: t('military'),
            items: [
                { name: t('service_tcc'), href: "/services?cat=military" },
                { name: t('service_vvk'), href: "/services?cat=military" },
                { name: t('service_deferment'), href: "/services?cat=military" },
            ]
        },
        business: {
            title: t('business'),
            items: [
                { name: t('service_it'), href: "/services?cat=business" },
                { name: t('service_tax'), href: "/services?cat=business" },
                { name: t('service_bankruptcy'), href: "/services?cat=business" },
            ]
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    (scrolled || megaMenuOpen || isOpen) ? "py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "py-6 bg-transparent"
                )}
                onMouseLeave={() => setMegaMenuOpen(false)}
            >
                <div className="container-custom flex items-center justify-between">
                    <Link href="/" className="z-50 relative group">
                        <div className="flex flex-col">
                            <span className={clsx(
                                "font-serif text-2xl tracking-tight transition-colors duration-300",
                                (isLightText && !megaMenuOpen) ? "text-white" : "text-slate-900"
                            )}>
                                Granenko & Dovzhenko
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {/* Services Mega Menu Trigger */}
                        <div
                            className="relative py-2"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                        >
                            <Link
                                href="/services"
                                className={clsx(
                                    "text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium flex items-center gap-1",
                                    (isLightText && !megaMenuOpen) ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900"
                                )}
                            >
                                {t('services')} <ChevronDown className="w-3 h-3" />
                            </Link>
                        </div>

                        <Link
                            href="/team"
                            className={clsx(
                                "text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium",
                                (isLightText && !megaMenuOpen) ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900"
                            )}
                        >
                            {t('partners')}
                        </Link>
                        <Link
                            href="/about"
                            className={clsx(
                                "text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium",
                                (isLightText && !megaMenuOpen) ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900"
                            )}
                        >
                            {t('legacy')}
                        </Link>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 border-l border-current pl-4 opacity-70 hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => setLang('UA')}
                                className={clsx(
                                    "text-[10px] font-medium transition-colors hover:text-gold",
                                    lang === 'UA' ? ((isLightText && !megaMenuOpen) ? "text-white" : "text-slate-900") : "text-slate-400"
                                )}
                            >
                                UA
                            </button>
                            <span className="text-[10px] opacity-50">|</span>
                            <button
                                onClick={() => setLang('EN')}
                                className={clsx(
                                    "text-[10px] font-medium transition-colors hover:text-gold",
                                    lang === 'EN' ? ((isLightText && !megaMenuOpen) ? "text-white" : "text-slate-900") : "text-slate-400"
                                )}
                            >
                                EN
                            </button>
                        </div>

                        <Link
                            href="/concierge-login"
                            className={clsx(
                                "text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium ml-4",
                                (isLightText && !megaMenuOpen) ? "text-white/80 hover:text-white" : "text-slate-900 hover:text-gold"
                            )}
                        >
                            {t('portal')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 relative"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X size={24} className="text-slate-900" />
                        ) : (
                            <Menu size={24} className={(isLightText && !megaMenuOpen) ? "text-white" : "text-slate-900"} />
                        )}
                    </button>
                </div>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {megaMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl hidden md:block"
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <div className="container-custom py-12">
                                <div className="grid grid-cols-3 gap-12">
                                    {Object.values(servicesMenu).map((group, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <h4 className="font-serif text-lg text-slate-900 border-b border-slate-100 pb-2">
                                                {group.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {group.items.map((item, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            href={item.href}
                                                            className="block text-sm text-slate-500 hover:text-gold hover:translate-x-1 transition-all duration-300"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-8 space-y-8 md:hidden overflow-y-auto"
                    >
                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="flex items-center justify-between w-full text-2xl font-serif text-slate-900"
                            >
                                {t('services')}
                                <ChevronDown className={clsx("w-5 h-5 transition-transform", mobileServicesOpen ? "rotate-180" : "")} />
                            </button>
                            <AnimatePresence>
                                {mobileServicesOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden pl-4"
                                    >
                                        <div className="pt-4 space-y-6">
                                            {Object.values(servicesMenu).map((group, idx) => (
                                                <div key={idx}>
                                                    <h5 className="text-xs uppercase tracking-widest text-gold mb-3">{group.title}</h5>
                                                    <ul className="space-y-3 border-l border-slate-100 pl-4">
                                                        {group.items.map((item, i) => (
                                                            <li key={i}>
                                                                <Link
                                                                    href={item.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="text-sm text-slate-600 block py-1"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/team"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif text-slate-900 border-b border-slate-100 pb-4"
                        >
                            {t('partners')}
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif text-slate-900 border-b border-slate-100 pb-4"
                        >
                            {t('legacy')}
                        </Link>
                        <Link
                            href="/concierge-login"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif text-slate-900 border-b border-slate-100 pb-4"
                        >
                            {t('portal')}
                        </Link>

                        <div className="pt-8">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setLang('UA')}
                                    className={clsx("text-sm font-bold transition-colors", lang === 'UA' ? "text-slate-900" : "text-slate-400")}
                                >
                                    UA
                                </button>
                                <button
                                    onClick={() => setLang('EN')}
                                    className={clsx("text-sm font-bold transition-colors", lang === 'EN' ? "text-slate-900" : "text-slate-400")}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
