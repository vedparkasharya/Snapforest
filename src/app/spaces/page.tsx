"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Star, CheckCircle2 } from "lucide-react";
import { spaces } from "@/data/spaces";

export default function SpacesPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? spaces : spaces.filter((s) => s.id === filter);

  const categories = [
    { id: "all", label: "All Spaces" },
    { id: "podcast-room", label: "Podcast" },
    { id: "youtube-studio", label: "YouTube" },
    { id: "gaming-room", label: "Gaming" },
    { id: "photography-studio", label: "Photo" },
    { id: "selfie-studio", label: "Selfie" },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-emerald-400">Creator Spaces</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Professional studios designed for every type of content creator
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all active:scale-95 touch-glow ${
                filter === cat.id
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((space, i) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-xs text-emerald-400 font-medium">
                  {space.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{space.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{space.description}</p>
                <div className="space-y-2 mb-4">
                  {space.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              <Link
                href="/booking"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-colors active:scale-95 touch-glow"
              >
                  <CalendarCheck className="w-4 h-4" />
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
