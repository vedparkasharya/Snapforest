"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Sparkles, X, Clock, Zap, ArrowRight } from "lucide-react";

const names = [
  "Arvind", "Rohit", "Priya", "Amit", "Sneha", "Vikram",
  "Neha", "Rajesh", "Anjali", "Karan", "Divya", "Manish",
  "Pooja", "Rahul", "Sonia", "Aakash", "Meera", "Vivek",
  "Ishaan", "Riya", "Aditya", "Kriti", "Nikhil", "Shreya",
];

const rooms = [
  "Podcast Room",
  "YouTube Studio",
  "Gaming Room",
  "Photography Studio",
  "Editing Suite",
  "Interview Room",
  "Reel Setup",
  "Selfie Studio",
];

const offers = [
  "10% OFF for next 5 min!",
  "Flash Deal: ₹100 OFF!",
  "Free hour with booking!",
  "Exclusive member price!",
];

export default function SurpriseBooking() {
  const [modal, setModal] = useState<{
    name: string;
    room: string;
    offer: string;
    timeAgo: string;
  } | null>(null);

  const showSurprise = useCallback(() => {
    const name = names[Math.floor(Math.random() * names.length)];
    const room = rooms[Math.floor(Math.random() * rooms.length)];
    const offer = offers[Math.floor(Math.random() * offers.length)];
    const timeAgo = `${Math.floor(Math.random() * 3 + 1)} min ago`;
    setModal({ name, room, offer, timeAgo });
  }, []);

  useEffect(() => {
    const firstTimeout = setTimeout(showSurprise, 12000);
    const interval = setInterval(showSurprise, 20000);
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [showSurprise]);

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9997] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setModal(null)}
        >
          <motion.div
            initial={{ scale: 0.5, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-zinc-900 border border-emerald-400/30 rounded-3xl p-6 sm:p-8 max-w-sm w-full overflow-hidden shadow-2xl shadow-emerald-500/20"
          >
            {/* Animated background rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 rounded-full border border-emerald-400/10 animate-ring-pulse" />
              <div className="absolute w-32 h-32 rounded-full border border-emerald-400/20 animate-ring-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

            {/* Close */}
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10 text-center">
              {/* Surprise badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-400/10 border border-emerald-400/30 rounded-full mb-4"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 animate-bounce-soft" />
                <span className="text-emerald-400 text-xs font-bold tracking-wide">SURPRISE FLASH DEAL</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Zap className="w-7 h-7 text-emerald-400" />
                </div>

                <p className="text-white font-semibold text-lg mb-1">
                  {modal.name} just booked
                </p>
                <p className="text-emerald-400 font-bold text-xl mb-1">{modal.room}</p>

                <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-4">
                  <Clock className="w-3 h-3" />
                  {modal.timeAgo}
                </div>

                <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-3 mb-5">
                  <p className="text-emerald-300 text-sm font-medium animate-pulse">
                    {modal.offer}
                  </p>
                </div>

                <Link
                  href="/booking"
                  onClick={() => setModal(null)}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all active:scale-95 touch-glow"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
