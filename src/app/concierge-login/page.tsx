'use client';

import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import SuccessModal from "../components/SuccessModal";
import { useRouter } from "next/navigation";

export default function ConciergeLoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate secure handshake
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        router.push('/'); // Redirect to dashboard in real app
    };

    return (
        <>
            <Navigation />
            <SuccessModal
                isOpen={showModal}
                onClose={handleModalClose}
                title="Identity Verified"
                message="Secure handshake established. Accessing Private Client Portal..."
            />
            <main className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 bg-white p-12 w-full max-w-md shadow-2xl rounded-sm"
                >
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lock className="w-6 h-6 text-gold" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-3xl font-serif text-slate-900 mb-2">Concierge Access</h1>
                        <p className="text-slate-500 text-sm font-light">Secure Client Portal</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                                Client ID
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-gold transition-colors font-serif text-lg bg-transparent"
                                placeholder="ENTER ID"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-gold transition-colors font-serif text-lg bg-transparent"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                disabled={isLoading}
                                className="w-full bg-slate-900 text-white py-4 uppercase text-xs tracking-widest font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-wait"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Verifying Credentials...
                                    </>
                                ) : (
                                    <>
                                        Secure Login
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="text-center pt-4">
                            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Forgot Credentials?</a>
                        </div>
                    </form>
                </motion.div>
            </main>
        </>
    );
}
