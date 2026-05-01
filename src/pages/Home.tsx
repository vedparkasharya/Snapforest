import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Mic,
  Video,
  Gamepad2,
  Scissors,
  Camera,
  Smartphone,
  Clapperboard,
  ArrowRight,
  Play,
  Users,
  Clock,
  Wrench,
  CalendarCheck,
  ChevronDown
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const }
  })
}

const spaces = [
  { icon: Mic, title: 'Podcast Room', desc: 'Professional recording studio in Gaya', path: '/spaces' },
  { icon: Clapperboard, title: 'Interview Room', desc: 'Formal interview setup', path: '/spaces' },
  { icon: Video, title: 'YouTube Studio', desc: 'Complete video recording setup', path: '/spaces' },
  { icon: Gamepad2, title: 'Gaming Room', desc: 'High-end gaming & streaming', path: '/spaces' },
  { icon: Scissors, title: 'Editing Suite', desc: 'Professional editing workstations', path: '/spaces' },
  { icon: Camera, title: 'Photography Studio', desc: 'Photo shoots & product photography', path: '/spaces' },
  { icon: Smartphone, title: 'Reel Setup', desc: 'Instagram & short-form content', path: '/spaces' },
]

const stats = [
  { icon: Users, value: '6+', label: 'Creator Spaces' },
  { icon: Wrench, value: '50+', label: 'Equipment Items' },
  { icon: Clock, value: '24/7', label: 'Available' },
]

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    let animationId: number

    const particles: { x: number; y: number; vx: number; vy: number }[] = []
    const particleCount = 40
    const connectionDistance = 150

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / connectionDistance)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Snapforest – Best Creator Space in Gaya | Podcast, YouTube & Video Studio Near Me</title>
        <meta name="description" content="Snapforest is India's premier creator space platform in Gaya. Book podcast rooms, YouTube studios, gaming rooms & more. Professional studios near me at affordable rates." />
        <meta name="keywords" content="creator space Gaya, podcast room near me, YouTube studio Gaya, video studio near me, content creation Gaya, Snapforest" />
        <link rel="canonical" href="https://www.snapforest.in/" />
        <meta property="og:title" content="Snapforest – Best Creator Space in Gaya" />
        <meta property="og:description" content="Book professional podcast rooms, YouTube studios, gaming rooms & more in Gaya." />
        <meta property="og:url" content="https://www.snapforest.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
          {/* Animated particle network */}
          <ParticleNetwork />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-6">
              <Play className="w-4 h-4 fill-emerald-400" />
              Creator Spaces & Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Create Without
              <br />
              Limits at <span className="text-emerald-400">Snapforest</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              All types of creator spaces and services in one place. Podcast rooms, interview setups, content studios, selfie points, gaming rooms, and editing suites with high-end professional equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/spaces"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all flex items-center gap-2"
              >
                Explore Spaces
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/booking"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-20 lg:py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Creator Spaces
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional studios for every type of creator. From podcasters to gamers, we have the perfect space for you in Gaya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {spaces.map((space, i) => (
              <motion.div
                key={space.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link
                  to={space.path}
                  className="block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/30 rounded-2xl p-6 transition-all group"
                >
                  <space.icon className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{space.title}</h3>
                  <p className="text-gray-400 text-sm">{space.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/spaces"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              View All Spaces
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Founder Section */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Built for Creators,
                <span className="block text-emerald-400">by a Creator</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Snapforest was founded by <Link to="/founder" className="text-emerald-400 hover:text-emerald-300 font-medium">Ved Prakash Arya</Link>, a passionate creator who understood the challenges of finding professional studio space in smaller cities like Gaya.
                </p>
                <p>
                  Our mission is simple – provide world-class creator facilities at affordable prices, right here in Gaya. No more traveling to Delhi or Mumbai for professional shoots.
                </p>
                <p>
                  Whether you need a <strong>podcast room in Gaya</strong>, a <strong>YouTube studio near me</strong>, or a <strong>gaming room setup</strong> – Snapforest has you covered.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/founder"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all"
                >
                  Meet the Founder
                </Link>
                <Link
                  to="/articles"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
                >
                  Read Our Blog
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-emerald-800/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-16 h-16 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ved Prakash Arya</h3>
                  <p className="text-emerald-400 font-medium">Founder, Snapforest</p>
                  <p className="text-gray-400 text-sm mt-4">
                    "Every creator deserves access to professional tools. That's why I built Snapforest in Gaya."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Book your studio today and join 500+ creators who trust Snapforest for their content creation needs in Gaya.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all text-lg"
            >
              Book Your Studio Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
