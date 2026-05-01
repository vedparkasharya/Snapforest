import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Gamepad2, Mic, Camera, Music, ArrowRight, Sparkles } from 'lucide-react'

const games = [
  { icon: Gamepad2, title: 'Gaming Tournaments', desc: 'Compete in weekly gaming tournaments at Snapforest. Prizes, glory, and bragging rights await!' },
  { icon: Mic, title: 'Open Mic Nights', desc: 'Showcase your talent at our open mic events. Comedy, poetry, music – all welcome.' },
  { icon: Camera, title: 'Creator Challenges', desc: 'Participate in content creation challenges and win exciting prizes every month.' },
  { icon: Music, title: 'Jam Sessions', desc: 'Weekly jam sessions for musicians. Bring your instrument and jam with fellow artists.' },
]

const events = [
  { title: 'Weekend Gaming Championship', date: 'Every Saturday', type: 'Gaming' },
  { title: 'Creator Meetup Gaya', date: 'First Sunday of Month', type: 'Networking' },
  { title: 'Podcast Workshop', date: 'Every Wednesday', type: 'Learning' },
  { title: 'Reel Making Contest', date: 'Monthly', type: 'Contest' },
]

export default function Play() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Helmet>
        <title>Play | Gaming & Creator Events in Gaya | Snapforest</title>
        <meta name="description" content="Join gaming tournaments, open mic nights, creator challenges & more at Snapforest Gaya. The best place to play and connect with fellow creators." />
        <link rel="canonical" href="https://www.snapforest.in/play" />
      </Helmet>

      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-6">
              Events & Activities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Play at <span className="text-emerald-400">Snapforest</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Gaming tournaments, open mic nights, creator challenges & more. The most fun you'll have at a creator space in Gaya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {games.map((game, i) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-400/30 transition-all"
              >
                <game.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Schedule */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.date}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Fun!
          </h2>
          <p className="text-gray-400 mb-8">
            Book your spot at our next event. Spaces fill up fast!
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all"
          >
            Book an Event
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
