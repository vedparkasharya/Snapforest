import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Check } from 'lucide-react'
import { spaces } from '../data/spaces'

export default function Spaces() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Helmet>
        <title>Best Creator Spaces in Gaya | Podcast, YouTube, Gaming Room Near Me | Snapforest</title>
        <meta name="description" content="Book the best creator spaces in Gaya. Podcast room, YouTube studio, gaming room, editing suite & photography studio near me. Affordable rates at Snapforest." />
        <meta name="keywords" content="creator spaces Gaya, podcast room near me, YouTube studio Gaya, gaming room near me, editing suite Gaya, photography studio near me, studio room in Gaya, best creator space near me" />
        <link rel="canonical" href="https://www.snapforest.in/spaces" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Creator Spaces in <span className="text-emerald-400">Gaya</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl">
              Discover the <strong>best creator spaces in Gaya</strong>. From podcast rooms to gaming setups, we have everything you need to create professional content. All studios are equipped with top-tier equipment at affordable rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space, i) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all group"
              >
              <div className="aspect-video bg-black overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">{space.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">{space.description}</p>
                  <ul className="space-y-2 mb-4">
                    {space.features.slice(0, 4).map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.equipment.map((eq, j) => (
                      <span key={j} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                        {eq}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold">{space.price}</span>
                    <Link
                      to="/booking"
                      className="flex items-center gap-1 text-sm text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      Book This Space
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Find the Perfect Studio Room Near Me in Gaya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Podcast Room in Gaya',
              'Interview Room Near Me',
              'YouTube Studio Gaya',
              'Gaming Room Near Me',
              'Editing Suite Gaya',
              'Photography Studio Near Me',
              'Reel Setup Room Gaya',
              'Best Studio Room Gaya',
            ].map((keyword, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <span className="text-emerald-400 text-sm font-medium">{keyword}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-6">
              Looking for <strong>affordable creator spaces near me</strong>? Snapforest offers the best studios in Gaya at unbeatable prices.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all"
            >
              Book Your Space Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
