"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function OdesaStatusBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="fixed bottom-8 right-8 z-40 backdrop-blur-xl bg-slate-900/80 border border-white/10 px-6 py-3 flex items-center gap-4"
        >
            <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-accent" strokeWidth={2} />
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 font-light">
                ODS // 46.4857° N, 30.7233° E // SECURE
            </p>
        </motion.div>
    );
}
