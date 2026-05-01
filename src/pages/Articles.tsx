import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { articles } from '../data/articles'

export default function Articles() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Helmet>
        <title>Articles | Best Creator Tips & Studio Guides | Snapforest Gaya</title>
        <meta name="description" content="Read the best articles about content creation, podcast rooms, YouTube studios & creator tips. Snapforest's official blog for creators in Gaya." />
        <meta name="keywords" content="content creation tips, podcast room guide, YouTube studio tips, creator blog, Snapforest articles" />
        <link rel="canonical" href="https://www.snapforest.in/articles" />
      </Helmet>

      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Creator <span className="text-emerald-400">Articles</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl">
              Learn about podcast rooms, YouTube studios, content creation tips & more. Your guide to becoming a better creator in Gaya.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-emerald-800/10 flex items-center justify-center">
                  <span className="text-5xl opacity-30">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* SEO Section */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Best Creator Resources in Gaya
            </h2>
            <p className="text-gray-400 mb-4">
              Snapforest publishes the best articles for content creators in Gaya. From finding the <strong>best podcast room in Gaya</strong> to setting up your <strong>YouTube studio</strong>, we cover everything you need to know.
            </p>
            <p className="text-gray-400">
              Founded by <Link to="/founder" className="text-emerald-400 hover:text-emerald-300">Ved Prakash Arya</Link>, Snapforest is committed to building the creator ecosystem in Gaya. <Link to="/" className="text-emerald-400 hover:text-emerald-300">Visit our homepage</Link> to learn more.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
