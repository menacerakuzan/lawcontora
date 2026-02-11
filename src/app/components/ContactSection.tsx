'use client';

import { useState } from 'react';
import { ArrowRight, Phone, Loader2 } from 'lucide-react';
import SuccessModal from './SuccessModal';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowModal(true);
        setFormData({ name: '', phone: '', service: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            <SuccessModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title={t('success_title')}
                message={t('success_message')}
            />
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium block mb-4">{t('contact_us')}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                            {t('service_military_law')}.<br />{t('consultation')}.
                        </h2>
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-1">
                                    <Phone className="w-4 h-4 text-slate-900" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{t('urgent')}</p>
                                    <p className="text-lg font-serif text-slate-900">+38 (048) 777-12-34</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Odesa</p>
                                    <p className="text-sm text-slate-600 font-light">{t('address_odesa')}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Lviv</p>
                                    <p className="text-sm text-slate-600 font-light">{t('address_lviv')}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Kherson</p>
                                    <p className="text-sm text-slate-600 font-light">{t('address_kherson')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 shadow-2xl shadow-slate-200/50 rounded-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{t('form_name')} *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-gold transition-colors font-serif text-lg bg-transparent"
                                    placeholder={t('form_placeholder_name')}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{t('form_phone')} *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-gold transition-colors font-serif text-lg bg-transparent"
                                    placeholder={t('form_placeholder_phone')}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{t('form_service')}</label>
                                <select
                                    name="service"
                                    className="w-full border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-gold transition-colors font-serif text-lg bg-transparent appearance-none"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">{t('form_service')}...</option>
                                    <option value="military">{t('service_military_law')}</option>
                                    <option value="auto">{t('service_auto')}</option>
                                    <option value="family">{t('service_family')}</option>
                                    <option value="business">{t('service_it')}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{t('form_message')}</label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    className="w-full border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-gold transition-colors font-sans text-sm bg-transparent resize-none"
                                    placeholder={t('form_placeholder_message')}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full bg-gold hover:bg-gold-dark text-white py-4 uppercase text-xs tracking-widest font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 rounded-sm shadow-lg shadow-gold/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        ...
                                    </>
                                ) : (
                                    <>
                                        {t('form_submit')}
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
