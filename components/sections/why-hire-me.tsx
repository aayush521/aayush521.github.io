"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, Users, Zap, Search, Globe, FileCheck } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Deep Banking Expertise",
    description: "Years of experience in AML, Anti-Fraud, and Core Banking solutions.",
  },
  {
    icon: Users,
    title: "Full SDLC Ownership",
    description: "From requirements gathering to production support and stabilization.",
  },
  {
    icon: Zap,
    title: "Performance Specialist",
    description: "Proven ability to optimize complex data workflows and ETL jobs.",
  },
  {
    icon: Search,
    title: "Root Cause Analyst",
    description: "Expert at diagnosing and fixing high-priority production issues.",
  },
  {
    icon: Globe,
    title: "Multi-Country Delivery",
    description: "Experienced in managing go-lives across diverse international markets.",
  },
  {
    icon: FileCheck,
    title: "Ready to Work",
    description: "Valid Open Work Permit in Canada until August 2027.",
  },
]

export function WhyHireMe() {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/15 blur-[100px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/15 blur-[100px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic">Why Hire <span className="text-electric">Me?</span></h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg font-medium">
            A combination of deep technical skills and domain-specific knowledge that drives business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700 backdrop-blur-sm hover:border-electric transition-colors shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-electric/20 flex items-center justify-center mb-6">
                <reason.icon className="h-6 w-6 text-electric" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
