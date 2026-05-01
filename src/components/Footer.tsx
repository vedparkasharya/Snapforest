import { Link } from 'react-router-dom'
import { TreePine, MapPin, Phone, Mail, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <TreePine className="w-7 h-7 text-emerald-400" />
              <span className="text-lg font-bold text-white">
                Snap<span className="text-emerald-400">forest</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier creator space platform. Book professional studios, equipment & creator services in Gaya.
            </p>
            <p className="text-gray-500 text-xs">
              Founded by <Link to="/founder" className="text-emerald-400 hover:text-emerald-300">Ved Prakash Arya</Link>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/spaces', label: 'Spaces' },
                { to: '/articles', label: 'Articles' },
                { to: '/booking', label: 'Book Now' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spaces */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Spaces</h3>
            <ul className="space-y-2">
              {[
                'Podcast Room',
                'Interview Room',
                'YouTube Studio',
                'Gaming Room',
                'Editing Suite',
                'Photography Studio',
              ].map((space) => (
                <li key={space}>
                  <Link to="/spaces" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    {space}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                Gaya, Bihar, India
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                hello@snapforest.in
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Snapforest. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-emerald-400 transition-colors">Terms</Link>
            <Link to="/" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
