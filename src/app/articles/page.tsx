"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Creator <span className="text-emerald-400">Blog</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tips, guides, and resources to help you create better content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all"
            >
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
