"use client";

import Link from "next/link";
import { Sparkles, Globe, MessageCircle, Video, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-bold text-white">
                Snap<span className="text-emerald-400">forest</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              India's premier creator space. Professional studios for podcasters, YouTubers, gamers & creators in Gaya.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all">
                <Video className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/spaces" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">All Spaces</Link></li>
              <li><Link href="/booking" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">Book a Room</Link></li>
              <li><Link href="/articles" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">Creator Blog</Link></li>
              <li><Link href="/founder" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">About Founder</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Spaces</h4>
            <ul className="space-y-2">
              <li><Link href="/spaces" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">Podcast Room</Link></li>
              <li><Link href="/spaces" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">YouTube Studio</Link></li>
              <li><Link href="/spaces" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">Gaming Room</Link></li>
              <li><Link href="/spaces" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">Photography Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Gaya, Bihar, India</li>
              <li><a href="mailto:hello@snapforest.in" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">hello@snapforest.in</a></li>
              <li><a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">+91 98765 43210</a></li>
              <li><Link href="/careers" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">We're Hiring →</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Snapforest. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
