"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0f0f0f] overflow-hidden"
        >
          {/* Background Scanline Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-size-[100%_2px,3px_100%]" />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Animated Diamond Logo */}
            <motion.div
              initial={{ rotate: 45, scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: 1,
                rotate: [45, 225, 405],
              }}
              transition={{ duration: 1.5, ease: "anticipate" }}
              className="h-24 w-24 border-2 border-white/20 flex items-center justify-center bg-zinc-900 shadow-[0_0_50px_rgba(255,255,255,0.1)] relative"
            >
              <div className="h-2 w-2 bg-orange-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(234,88,12,0.8)]" />

              {/* Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-white/5 rounded-full border-t-white/20"
              />
            </motion.div>

            {/* Text Loading - Directional Entrance */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 overflow-hidden px-4">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-3xl font-black tracking-tighter text-white uppercase italic"
                >
                  RAKIBUL
                </motion.span>

                <motion.span
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="text-3xl font-black tracking-tighter text-orange-600 uppercase italic"
                >
                  ISLAM
                </motion.span>

                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  className="text-3xl font-black tracking-tighter text-white uppercase italic"
                >
                  EMON
                </motion.span>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-px w-full bg-linear-to-r from-transparent via-orange-600 to-transparent shadow-[0_0_15px_rgba(234,88,12,0.5)]"
              />

              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-mono animate-pulse">
                System Convergence in Progress
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
