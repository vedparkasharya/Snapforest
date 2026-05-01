import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Snapforest</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Page not found. Return to Snapforest homepage." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-black pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <AlertTriangle className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  )
}
