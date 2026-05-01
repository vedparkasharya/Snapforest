import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Helmet>
        <title>Contact Snapforest | Best Creator Space in Gaya | Get in Touch</title>
        <meta name="description" content="Contact Snapforest – the best creator space in Gaya. Book studios, ask questions, or collaborate with us. We're here to help!" />
        <meta name="keywords" content="contact Snapforest, creator space Gaya contact, book studio Gaya, Snapforest phone number" />
        <link rel="canonical" href="https://www.snapforest.in/contact" />
      </Helmet>

      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in <span className="text-emerald-400">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions? Want to book a studio? Or just want to say hi? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-400 text-sm">Snapforest Creator Space, Gaya, Bihar, India – 823001</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <Phone className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <Mail className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400 text-sm">hello@snapforest.in</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <Clock className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Working Hours</h3>
                <p className="text-gray-400 text-sm">Mon – Sat: 9:00 AM – 9:00 PM<br/>Sunday: 10:00 AM – 6:00 PM</p>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <h2 className="text-xl font-semibold text-white mb-4">Send us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none resize-none"
                />

                {submitted ? (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-4 rounded-xl">
                    <Check className="w-5 h-5" />
                    Message sent successfully! We'll get back to you soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all flex items-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
