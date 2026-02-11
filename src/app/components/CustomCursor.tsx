"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Spotlight Effect - Dynamic Lighting */}
            <div
                className="fixed inset-0 pointer-events-none z-[1]"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`
                }}
            />

            {/* Main cursor dot */}
            <motion.div
                className="fixed pointer-events-none z-[10000] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                }}
                animate={{
                    scale: isHovering ? 3 : 1,
                    opacity: isHovering ? 0.6 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
            >
                <div className="w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>

            {/* Outer ring on hover */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className="fixed pointer-events-none z-[9999] border border-white/30 rounded-full mix-blend-difference"
                        style={{
                            left: position.x,
                            top: position.y,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <div className="w-12 h-12 -translate-x-1/2 -translate-y-1/2" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

import { AnimatePresence } from "framer-motion";
