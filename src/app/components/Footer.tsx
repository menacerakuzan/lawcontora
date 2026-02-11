'use client';
import Link from "next/link";
import { Instagram, Youtube, Facebook, Trash2 } from "lucide-react"; // Note: Lucide doesn't have TikTok, using Trash2 as placeholder or just text
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer id="footer" className="bg-slate-900 pt-24 pb-12 text-slate-400 font-sans">
            <div className="container-custom">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="col-span-12 md:col-span-4">
                        <Link href="/" className="mb-8 block">
                            <span className="text-3xl font-serif text-white tracking-tight">
                                Granenko & Dovzhenko
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm font-light leading-relaxed mb-8">
                            Defending excellence and legacy through unwavering advocacy and strategic mastery. A premier legal practice based in Odesa.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <Link href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                                <Youtube className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all text-[10px] font-bold">
                                TT
                            </Link>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                            Est. 1998 • Odesa, Ukraine
                        </p>
                    </div>

                    {/* Address & Hours */}
                    <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-8">
                        <div className="col-span-2">
                            <h4 className="text-white uppercase tracking-[0.2em] text-xs mb-6 font-medium">
                                {t('address_odesa').split(',')[0]} & {t('address_lviv').split(',')[0]}
                            </h4>
                            <address className="not-italic font-light text-sm space-y-4 text-slate-400">
                                <div>
                                    <p className="text-white text-xs uppercase tracking-wider mb-1">Odesa</p>
                                    <p>{t('address_odesa')}</p>
                                </div>
                                <div>
                                    <p className="text-white text-xs uppercase tracking-wider mb-1">Kherson</p>
                                    <p>{t('address_kherson')}</p>
                                </div>
                                <div>
                                    <p className="text-white text-xs uppercase tracking-wider mb-1">Lviv</p>
                                    <p>{t('address_lviv')}</p>
                                </div>
                            </address>
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div className="col-span-12 md:col-span-3">
                        <h4 className="text-white uppercase tracking-[0.2em] text-xs mb-8 font-medium">
                            Sitemap
                        </h4>
                        <ul className="space-y-4 font-light text-sm">
                            <li><Link href="/team" className="hover:text-gold transition-colors">{t('partners')}</Link></li>
                            <li><Link href="/services" className="hover:text-gold transition-colors">{t('services')}</Link></li>
                            <li><Link href="/about" className="hover:text-gold transition-colors">{t('legacy')}</Link></li>
                            <li><Link href="/concierge-login" className="hover:text-gold transition-colors">{t('portal')}</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-slate-600">
                    <p>© {new Date().getFullYear()} Granenko & Dovzhenko. {t('footer_notice')}</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
