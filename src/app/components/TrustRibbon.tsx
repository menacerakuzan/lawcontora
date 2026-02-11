'use client';

import { motion } from "framer-motion";

const achievements = [
    "Top 100 Legal Firms in Ukraine",
    "Regional Leadership Award 2024",
    "25+ Years of Legal Excellence",
    "International Arbitration Specialists",
    "Tier 1 Criminal Defense Practice",
];

export default function TrustRibbon() {
    return (
        <div className="w-full bg-navy-900 overflow-hidden border-y border-white/5 py-4">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-20 items-center px-10"
                >
                    {[...achievements, ...achievements].map((text, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-sans font-medium">
                                {text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
