import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Founder() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Helmet>
        <title>Ved Prakash Arya – Founder of Snapforest | Creator Space Gaya</title>
        <meta name="description" content="Meet Ved Prakash Arya, founder of Snapforest – India's premier creator space platform. Learn about his mission to empower creators in Gaya and beyond." />
        <meta name="keywords" content="Ved Prakash Arya, Snapforest founder, creator space Gaya, Ved Prakash Arya Snapforest, founder of Snapforest" />
        <link rel="canonical" href="https://www.snapforest.in/founder" />
        <meta property="og:title" content="Ved Prakash Arya – Founder of Snapforest" />
        <meta property="og:description" content="Meet the founder of Snapforest, India's premier creator space platform in Gaya." />
        <meta property="og:url" content="https://www.snapforest.in/founder" />
      </Helmet>

      {/* Hero with photo */}
      <section className="pt-24 pb-0 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/founder-ved-prakash-arya.jpg"
              alt="Ved Prakash Arya"
              className="w-full h-64 sm:h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">Ved Prakash Arya</h1>
              <p className="text-emerald-400 text-lg">Founder & CEO of Snapforest</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder badge + content */}
      <section className="py-12 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              Founder
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-left">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-400 mb-8 text-left leading-relaxed">
              <strong className="text-white">Ved Prakash Arya</strong> is the founder of <strong className="text-white">Snapforest</strong>, India's next-generation content creation platform. BTech CSE (AI) student, CCNA certified, and a passionate builder of the creator economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                View Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-400/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-white font-semibold">6202692971</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-400/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white font-semibold">hello@snapforest.in</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-400/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white font-semibold">India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
