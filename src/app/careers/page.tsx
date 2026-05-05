"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight, Send } from "lucide-react";

const positions = [
  {
    title: "C++ Development Intern",
    type: "Internship",
    location: "Gaya, Bihar",
    stipend: "₹8,000 – ₹15,000/month",
    description: "Work on high-performance backend services, real-time booking engines, and media processing pipelines using modern C++.",
    requirements: ["BTech/BCA/MCA in CS", "Strong C++ fundamentals", "DSA knowledge", "Passion for system design"],
  },
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Gaya, Bihar",
    stipend: "₹25,000 – ₹45,000/month",
    description: "Build and maintain our React + TypeScript frontend and Node.js backend. Work on creator dashboards, booking systems, and community features.",
    requirements: ["React & TypeScript", "Node.js & Express", "Database design", "2+ years experience"],
  },
  {
    title: "Studio Manager",
    type: "Full-time",
    location: "Gaya, Bihar",
    stipend: "₹18,000 – ₹30,000/month",
    description: "Manage day-to-day studio operations, assist creators with equipment, handle bookings, and ensure smooth studio experience.",
    requirements: ["Excellent communication", "Tech-savvy", "Customer service skills", "Content creation knowledge"],
  },
  {
    title: "AI/ML Engineering Intern",
    type: "Internship",
    location: "Remote / Gaya",
    stipend: "₹10,000 – ₹18,000/month",
    description: "Build recommendation engines, content analytics dashboards, and AI-powered creator tools using TensorFlow and PyTorch.",
    requirements: ["Python proficiency", "ML fundamentals", "TensorFlow/PyTorch", "Statistics & linear algebra"],
  },
];

export default function CareersPage() {
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the <span className="text-emerald-400">Team</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Help us build India's best creator ecosystem. We're hiring passionate people who want to make an impact.
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-emerald-400/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {job.stipend}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full">
                  <Clock className="w-3 h-3" />
                  Active
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4">{job.description}</p>

              <div className="mb-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Requirements</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req) => (
                    <span key={req} className="flex items-center gap-1 text-xs text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {applied === job.title ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Application submitted! Check your email.
                </div>
              ) : (
                <button
                  onClick={() => setApplied(job.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-colors text-sm active:scale-95 touch-glow"
                >
                  <Send className="w-4 h-4" />
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center bg-zinc-900/50 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-2">Don't see your role?</h3>
          <p className="text-gray-400 text-sm mb-4">
            We're always looking for talented people. Send your resume to{" "}
            <a href="mailto:careers@snapforest.in" className="text-emerald-400 hover:text-emerald-300">
              careers@snapforest.in
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
