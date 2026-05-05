"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight, Send, Award, FileText, Home, Globe } from "lucide-react";

const positions = [
  {
    title: "C++ Development Intern",
    type: "Internship",
    location: "Gaya, Bihar",
    stipend: "₹8,000 – ₹15,000/month",
    duration: "3-6 Months",
    description: "Work on high-performance backend services, real-time booking engines, and media processing pipelines using modern C++.",
    requirements: ["BTech/BCA/MCA in CS", "Strong C++ fundamentals", "DSA knowledge", "Passion for system design"],
    perks: ["Internship Certificate", "Offer Letter", "Performance-based Pre-Placement Offer (PPO)", "Letter of Recommendation"],
  },
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Gaya, Bihar",
    stipend: "₹25,000 – ₹45,000/month",
    duration: "Permanent",
    description: "Build and maintain our React + TypeScript frontend and Node.js backend. Work on creator dashboards, booking systems, and community features.",
    requirements: ["React & TypeScript", "Node.js & Express", "Database design", "2+ years experience"],
    perks: ["Joining Letter", "Experience Certificate", "ESOP Opportunities", "Flexible Work Hours"],
  },
  {
    title: "Studio Manager",
    type: "Full-time",
    location: "Gaya, Bihar",
    stipend: "₹18,000 – ₹30,000/month",
    duration: "Permanent",
    description: "Manage day-to-day studio operations, assist creators with equipment, handle bookings, and ensure smooth studio experience.",
    requirements: ["Excellent communication", "Tech-savvy", "Customer service skills", "Content creation knowledge"],
    perks: ["Joining Letter", "Experience Certificate", "Performance Bonus", "Free Studio Access"],
  },
  {
    title: "AI/ML Engineering Intern",
    type: "Internship",
    location: "Remote / Gaya",
    stipend: "₹10,000 – ₹18,000/month",
    duration: "3-6 Months",
    description: "Build recommendation engines, content analytics dashboards, and AI-powered creator tools using TensorFlow and PyTorch.",
    requirements: ["Python proficiency", "ML fundamentals", "TensorFlow/PyTorch", "Statistics & linear algebra"],
    perks: ["Internship Certificate", "Offer Letter", "Remote Friendly", "Letter of Recommendation"],
  },
  {
    title: "Digital Marketing Intern (Online)",
    type: "Internship",
    location: "Remote / Online",
    stipend: "Unpaid + Certificate",
    duration: "1-3 Months",
    description: "Learn and execute digital marketing strategies for Snapforest. Handle social media, SEO, content marketing, and growth campaigns. Perfect for beginners looking to start their career in digital marketing.",
    requirements: ["Basic social media knowledge", "Good communication skills", "Creative mindset", "Willingness to learn"],
    perks: ["Internship Certificate", "Offer Letter on Joining", "Letter of Recommendation (LOR)", "Flexible Timing", "Skill-based Stipend after 1 month"],
  },
  {
    title: "Content Creation Intern (Online)",
    type: "Internship",
    location: "Remote / Online",
    stipend: "Unpaid + Certificate",
    duration: "1-3 Months",
    description: "Create engaging content for Snapforest's social media, blog, and marketing campaigns. Learn video editing, graphic design, and content strategy from industry experts.",
    requirements: ["Basic video editing skills", "Creative writing ability", "Familiarity with Canva/CapCut", "Active on social media"],
    perks: ["Internship Certificate", "Offer Letter on Joining", "Letter of Recommendation (LOR)", "Portfolio Building", "Free Access to Snapforest Studios"],
  },
  {
    title: "Business Development Intern (Online)",
    type: "Internship",
    location: "Remote / Online",
    stipend: "Unpaid + Incentives",
    duration: "2-3 Months",
    description: "Assist in growing Snapforest's partner network, handle outreach to creators and businesses, and work on market expansion strategies. Great opportunity to learn sales and business development.",
    requirements: ["Good communication & negotiation", "Self-motivated", "Basic MS Office/Google Suite", "Interest in startup ecosystem"],
    perks: ["Internship Certificate", "Offer Letter on Joining", "Letter of Recommendation (LOR)", "Performance-based Incentives", "Networking Opportunities"],
  },
  {
    title: "UI/UX Design Intern (Online)",
    type: "Internship",
    location: "Remote / Online",
    stipend: "Unpaid + Certificate",
    duration: "2-3 Months",
    description: "Design user interfaces and experiences for the Snapforest platform. Work on real projects including mobile app screens, web dashboards, and design systems under mentorship.",
    requirements: ["Figma proficiency", "Basic design principles", "Portfolio (even academic)", "Attention to detail"],
    perks: ["Internship Certificate", "Offer Letter on Joining", "Letter of Recommendation (LOR)", "Real Project Experience", "Mentorship from Senior Designers"],
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
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Help us build India's best creator ecosystem. We're hiring passionate people who want to make an impact.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full">
              <Award className="w-3.5 h-3.5" />
              Internship Certificate
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full">
              <FileText className="w-3.5 h-3.5" />
              Offer Letter
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full">
              <Home className="w-3.5 h-3.5" />
              Remote Options
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full">
              <Globe className="w-3.5 h-3.5" />
              Online Internships Available
            </span>
          </div>
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
                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
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
                      <Clock className="w-3 h-3" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {job.stipend}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full shrink-0">
                  <Clock className="w-3 h-3" />
                  Active
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4">{job.description}</p>

              <div className="mb-4">
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

              {job.perks && (
                <div className="mb-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Perks & Benefits</p>
                  <div className="flex flex-wrap gap-2">
                    {job.perks.map((perk) => (
                      <span key={perk} className="flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-lg">
                        <Award className="w-3 h-3 text-emerald-400" />
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

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

        {/* Online Internship Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-emerald-900/30 via-zinc-900 to-emerald-900/30 border border-emerald-400/20 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Online Internship Program</h3>
              <p className="text-gray-400 text-sm mb-3">
                We offer online internships for students and freshers across India. Get hands-on experience, 
                a verified internship certificate, official offer letter, and letter of recommendation upon completion.
                Work remotely with flexible hours!
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">Certificate Provided</span>
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">Offer Letter</span>
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">LOR Available</span>
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">Remote & Flexible</span>
              </div>
            </div>
            <a
              href="mailto:careers@snapforest.in?subject=Online%20Internship%20Application"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-colors text-sm"
            >
              <Send className="w-4 h-4" />
              Apply for Online Internship
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center bg-zinc-900/50 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-2">Don't see your role?</h3>
          <p className="text-gray-400 text-sm mb-4">
            We're always looking for talented people. Whether you want to work full-time or do an online internship, 
            send your resume to{" "}
            <a href="mailto:careers@snapforest.in" className="text-emerald-400 hover:text-emerald-300">
              careers@snapforest.in
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
