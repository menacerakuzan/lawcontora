'use client';

import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section id="philosophy" className="relative py-40 md:py-48 bg-[#F8F9FA] overflow-hidden">
            {/* Subtle Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#F0F2F5]/20 pointer-events-none" />
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("/noise.png")' }}></div>

            <div className="absolute top-20 left-12 text-[12rem] font-serif text-slate-100 select-none z-0">
                03
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Quote - Large and Editorial */}
                    <div className="col-span-12 lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-slate-900 tracking-tighter">
                                &quot;Адвокати, які <br />
                                <span className="text-gold italic font-light">приведуть до результату</span>&quot;
                            </h2>
                        </motion.div>
                    </div>

                    {/* Founder Info */}
                    <div className="col-span-12 lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="border-l-2 border-gold/30 pl-10 space-y-8"
                        >
                            <p className="text-xl font-light text-slate-500 leading-relaxed">
                                Наше завдання — не просто надати юридичні послуги, а реально допомогти людині в складній життєвій ситуації. Ми будуємо захист на принципах бездоганної логіки та глибокої поваги до букви закону.
                            </p>

                            {/* Founder Details */}
                            <div className="space-y-4">
                                <div>
                                    <p className="font-serif text-2xl text-slate-900 font-semibold">Максим Граненко</p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Засновник</p>
                                </div>
                                {/* Elegant Signature Animation */}
                                <div className="pt-4">
                                    <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.path
                                            d="M10 50 C 30 20, 50 70, 80 40 C 100 20, 120 60, 150 30 C 160 20, 170 40, 190 35"
                                            stroke="#D4AF37"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 2.5,
                                                ease: "easeInOut",
                                                delay: 0.5
                                            }}
                                        />
                                        <motion.path
                                            d="M20 60 C 50 65, 120 55, 180 60"
                                            stroke="#D4AF37"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeOut",
                                                delay: 2
                                            }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
