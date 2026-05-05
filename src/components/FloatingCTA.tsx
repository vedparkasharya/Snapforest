"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Download, X, Smartphone, ChevronUp } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* App Download Mini Modal */}
      <AnimatePresence>
        {appOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 z-[9996] bg-zinc-900 border border-white/10 rounded-2xl p-4 w-64 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white text-sm font-semibold">Get the App</span>
              <button onClick={() => setAppOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-400 text-xs mb-3">Book faster & get exclusive mobile-only discounts!</p>
            <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
              <Smartphone className="w-4 h-4" />
              Download APK
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ type: "spring", damping: 18, stiffness: 260 }}
            className="fixed bottom-5 right-5 z-[9995] flex flex-col items-end gap-3"
          >
            {/* Secondary buttons */}
            <div className="flex flex-col gap-2 items-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setAppOpen(!appOpen)}
                className={`w-11 h-11 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white shadow-lg transition-all ${appOpen ? "bg-emerald-500/20 border-emerald-400/30" : ""}`}
              >
                <Download className="w-5 h-5" />
              </motion.button>

              <Link href="/booking">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-emerald-400 shadow-lg"
                >
                  <CalendarCheck className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>

            {/* Main FAB - Glow on touch */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onTouchStart={() => setPressing(true)}
              onTouchEnd={() => setTimeout(() => setPressing(false), 600)}
              onMouseDown={() => setPressing(true)}
              onMouseUp={() => setTimeout(() => setPressing(false), 600)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className={`relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-xl transition-all cursor-pointer select-none ${pressing ? "animate-touch-glow" : "animate-pulse-glow"}`}
            >
              {/* Ripple rings for glow effect */}
              <span className={`absolute inset-0 rounded-full border-2 border-emerald-400 transition-opacity ${pressing ? "animate-ring-pulse opacity-100" : "opacity-0"}`} />
              <ChevronUp className="w-6 h-6 relative z-10" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
