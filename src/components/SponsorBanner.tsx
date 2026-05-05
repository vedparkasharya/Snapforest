"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Megaphone, ArrowRight, Crown, Star, BadgeCheck } from "lucide-react";
import Link from "next/link";

const sponsorTiers = [
  {
    icon: Star,
    label: "Silver Partner",
    benefit: "₹2,000/month",
    desc: "Logo on website + social shoutout",
  },
  {
    icon: Crown,
    label: "Gold Partner",
    benefit: "₹5,000/month",
    desc: "Featured banner + priority placement",
  },
  {
    icon: BadgeCheck,
    label: "Platinum Partner",
    benefit: "₹10,000/month",
    desc: "Full-page feature + event sponsorship",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Monthly Visitors" },
  { icon: TrendingUp, value: "12K+", label: "Social Reach" },
  { icon: DollarSign, value: "₹299", label: "Starting Price" },
];

export default function SponsorBanner() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-black via-emerald-950/20 to-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-4">
            <Megaphone className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-wide">SPONSOR & MONETIZE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner With <span className="text-emerald-400">Snapforest</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Reach thousands of creators and earn by partnering with India&apos;s fastest-growing creator space platform
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-emerald-400/20 transition-all"
            >
              <stat.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {sponsorTiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
                  <tier.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{tier.label}</h3>
                <p className="text-emerald-400 font-bold text-lg mb-1">{tier.benefit}</p>
                <p className="text-gray-400 text-sm">{tier.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all active:scale-95 touch-glow"
          >
            <DollarSign className="w-5 h-5" />
            Become a Sponsor / Earn Money
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-500 text-xs mt-3">
            Creators can also monetize their profile by hosting workshops & brand collabs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
