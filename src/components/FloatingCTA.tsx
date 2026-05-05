"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Download, X, Smartphone, ChevronUp } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  /**
   * Detect PWA install availability via beforeinstallprompt.
   * The event is fired when the app meets installability criteria.
   */
  useEffect(() => {
    // If already running as standalone PWA, hide everything
    const mq = window.matchMedia("(display-mode: standalone)");
    if (mq.matches) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Store the event so we can trigger it later
      setDeferredPrompt(e);
      // Show the floating install button
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsInstalled(true);
      setIsVisible(false);
      setAppOpen(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  /**
   * Trigger the browser's native install prompt.
   * Handles both accepted and dismissed user choices.
   */
  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) return;

    // Cast to any because beforeinstallprompt isn't fully typed in standard TS
    const promptEvent = deferredPrompt as any;

    // Show the browser install prompt
    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await promptEvent.userChoice;

    if (outcome === "accepted") {
      console.log("[PWA] User accepted the install prompt");
    } else {
      console.log("[PWA] User dismissed the install prompt");
    }

    // Clear the deferred prompt – it can only be used once
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  /**
   * Dismiss the install mini-modal but keep the button visible.
   */
  const dismissModal = useCallback(() => {
    setAppOpen(false);
  }, []);

  // If app is already installed, don't render anything
  if (isInstalled) return null;

  return (
    <>
      {/* ─────────── Install App Mini Modal ─────────── */}
      <AnimatePresence>
        {appOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="fixed bottom-24 right-4 z-[9996] bg-zinc-900 border border-white/10 rounded-2xl p-4 w-64 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white text-sm font-semibold">Install Snapforest</span>
              <button
                onClick={dismissModal}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close install modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-400 text-xs mb-3 leading-relaxed">
              Install as app for faster booking & offline access!
            </p>
            <button
              onClick={handleInstallClick}
              className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <Smartphone className="w-4 h-4" />
              Install App
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────── Floating Action Buttons ─────────── */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.8 }}
            transition={{ type: "spring", damping: 18, stiffness: 260 }}
            className="fixed bottom-5 right-5 z-[9995] flex flex-col items-end gap-3"
          >
            {/* Secondary action: quick booking */}
            <div className="flex flex-col gap-2 items-end">
              <Link href="/booking">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-emerald-400 shadow-lg cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>

            {/* ─── Primary Install Button ─── 
                 Clean, minimal, rounded, modern shadow.
                 Appears only when PWA install is available.
            */}
            <motion.button
              onClick={() => setAppOpen(!appOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-xl shadow-emerald-500/30 cursor-pointer select-none transition-all"
              aria-label="Install App"
            >
              <Download className="w-6 h-6 relative z-10" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
