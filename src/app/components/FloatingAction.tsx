'use client';

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingAction() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Desktop FAB */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:block fixed bottom-8 right-8 z-40"
                    >
                        <Link
                            href="#contact"
                            className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-gold transition-colors duration-300"
                        >
                            <MessageSquareText className="w-5 h-5" />
                            <span className="text-xs uppercase tracking-widest font-medium">
                                {t('consultation')}
                            </span>
                        </Link>
                    </motion.div>

                    {/* Mobile Sticky Call Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="md:hidden fixed bottom-6 right-6 z-50"
                    >
                        <a
                            href="tel:+380487771234"
                            className="flex items-center gap-2 bg-gold text-white px-5 py-3 rounded-full shadow-xl shadow-gold/30 hover:scale-105 transition-transform"
                        >
                            <Phone className="w-5 h-5 fill-current" />
                            <span className="text-xs uppercase font-bold tracking-wider">{t('consultation')}</span>
                        </a>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
