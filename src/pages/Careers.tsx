import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MapPin, Briefcase, DollarSign, ArrowRight, Check, Users, Zap, Heart } from 'lucide-react'

const jobs = [
  {
    title: 'Studio Manager',
    location: 'Gaya, Bihar',
    type: 'Full-time',
    salary: '₹25,000 – ₹35,000/month',
    description: 'Manage day-to-day studio operations, coordinate bookings, and ensure customer satisfaction at Snapforest.',
  },
  {
    title: 'Video Editor',
    location: 'Gaya, Bihar',
    type: 'Full-time',
    salary: '₹20,000 – ₹30,000/month',
    description: 'Edit videos for creators and Snapforest marketing. Proficiency in Premiere Pro & DaVinci Resolve required.',
  },
  {
    title: 'Content Creator (Intern)',
    location: 'Gaya, Bihar',
    type: 'Internship',
    salary: '₹8,000 – ₹12,000/month',
    description: 'Create content for Snapforest social media, blog, and marketing campaigns. Great for aspiring creators.',
  },
  {
    title: 'Technical Support',
    location: 'Gaya, Bihar',
    type: 'Full-time',
    salary: '₹15,000 – ₹22,000/month',
    description: 'Maintain studio equipment, troubleshoot technical issues, and assist creators with setup.',
  },
  {
    title: 'Community Manager',
    location: 'Gaya, Bihar',
    type: 'Full-time',
    salary: '₹18,000 – ₹25,000/month',
    description: 'Build and manage the Snapforest creator community. Organize events and engage with creators online.',
  },
]

const benefits = [
  { icon: Zap, title: 'Fast Growth', desc: 'Be part of a fast-growing startup' },
  { icon: Users, title: 'Creator Network', desc: 'Work with top creators in Gaya' },
  { icon: Heart, title: 'Free Studio Access', desc: 'Use all studios for personal projects' },
  { icon: DollarSign, title: 'Performance Bonus', desc: 'Monthly bonuses based on performance' },
]

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [appliedJob, setAppliedJob] = useState<string | null>(null)

  return (
    <>
      <Helmet>
        <title>Careers | Join Snapforest Team in Gaya | Creator Space Jobs</title>
        <meta name="description" content="Join the Snapforest team in Gaya. We're hiring studio managers, video editors, content creators & more. Apply now!" />
        <link rel="canonical" href="https://www.snapforest.in/careers" />
      </Helmet>

      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join <span className="text-emerald-400">Snapforest</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Be part of India's most exciting creator space platform. We're building the future of content creation in Gaya.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <b.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold text-sm">{b.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Job Listings */}
          <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-gray-500">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Briefcase className="w-3 h-3" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <DollarSign className="w-3 h-3" /> {job.salary}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setAppliedJob(appliedJob === job.title ? null : job.title)}
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all flex items-center gap-2 shrink-0"
                  >
                    {appliedJob === job.title ? (
                      <>
                        <Check className="w-4 h-4" /> Applied
                      </>
                    ) : (
                      <>
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact for jobs */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Don't see a role that fits? Send your resume to{' '}
              <a href="mailto:careers@snapforest.in" className="text-emerald-400 hover:text-emerald-300">
                careers@snapforest.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
