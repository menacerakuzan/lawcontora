'use client';

import { motion } from 'framer-motion';
import { Shield, Scale, Clock } from 'lucide-react';

export default function CoreValues() {
    const values = [
        {
            icon: Scale,
            title: "Unwavering Advocacy",
            desc: "We do not merely represent; we champion your cause with relentless dedication and strategic foresight."
        },
        {
            icon: Shield,
            title: "Absolute Discretion",
            desc: "Your privacy is paramount. We operate with the highest level of confidentiality to protect your reputation and legacy."
        },
        {
            icon: Clock,
            title: "Timeless Excellence",
            desc: "Rooted in tradition yet sharp in modern application. Our counsel stands the test of time and scrutiny."
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="text-center md:text-left group"
                        >
                            <div className="flex items-center justify-center md:justify-start mb-6">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                                    <value.icon className="w-5 h-5 text-slate-900 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                            </div>
                            <h3 className="text-xl font-serif text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-500 font-light leading-relaxed text-sm">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
