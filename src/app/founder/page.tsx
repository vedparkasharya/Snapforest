"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, MessageCircle, ExternalLink, Award, Users, Rocket, DollarSign, ArrowRight, Heart } from "lucide-react";

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
        >
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all">
              <Image
                src="/images/founder-ved-prakash-arya.jpg"
                alt="Ved Prakash Arya - Founder of Snapforest"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full mb-4">
              FOUNDER & CEO
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ved Prakash <span className="text-emerald-400">Arya</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Ved Prakash Arya is the visionary founder behind Snapforest, India's premier creator space platform. 
              Born and raised in Gaya, Bihar, he identified a critical gap in the creator economy – the lack of 
              affordable, professional studios for content creators in smaller cities.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With a background in technology and a passion for empowering creators, Ved built Snapforest to democratize 
              access to professional content creation infrastructure. His mission is to ensure that creators from Gaya 
              and similar towns can produce world-class content without needing to invest lakhs in equipment or travel 
              to metro cities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all active:scale-90 touch-glow">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all active:scale-90 touch-glow">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all active:scale-90 touch-glow">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Award, title: "Mission", desc: "Make professional creator spaces accessible to every creator in India, regardless of their city or budget." },
            { icon: Users, title: "Vision", desc: "Build 100+ creator spaces across Tier 2 and Tier 3 cities in India by 2030." },
            { icon: Rocket, title: "Impact", desc: "Already served 500+ creators in Gaya, helping them produce professional content and grow their channels." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-900/30 to-zinc-900 border border-emerald-400/10 rounded-3xl p-8 text-center mb-16"
        >
          <p className="text-xl text-gray-300 italic max-w-2xl mx-auto">
            "Every creator deserves a professional space to bring their ideas to life. Geography should never be a barrier to creativity."
          </p>
          <p className="text-emerald-400 font-medium mt-4">– Ved Prakash Arya</p>
        </motion.div>

        {/* Monetization / Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-zinc-900 via-emerald-900/20 to-zinc-900 border border-emerald-400/20 rounded-3xl p-8 md:p-10 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <DollarSign className="w-7 h-7 text-emerald-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Support the Mission
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-6">
            Partner with Ved Prakash Arya and Snapforest to empower creators across India. Sponsorships, brand collaborations, and creator monetization opportunities available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all active:scale-95 touch-glow"
            >
              <DollarSign className="w-5 h-5" />
              Sponsor / Collaborate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all active:scale-95 touch-glow"
            >
              <Heart className="w-5 h-5" />
              Become a Partner
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
