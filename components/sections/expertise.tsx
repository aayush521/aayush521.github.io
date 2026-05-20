"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldAlert, Fingerprint, Landmark, Scale, CreditCard, ClipboardCheck } from "lucide-react"

const domains = [
  {
    title: "Anti-Money Laundering (AML)",
    description: "Implementing sophisticated transaction monitoring and pattern recognition systems to detect and prevent financial crimes.",
    icon: ShieldAlert,
    color: "text-red-500",
  },
  {
    title: "Anti-Fraud System (AFS)",
    description: "Developing real-time fraud detection analytics with 90%+ accuracy, protecting banking assets from unauthorized activities.",
    icon: Fingerprint,
    color: "text-blue-500",
  },
  {
    title: "Core Banking Solution (CBS)",
    description: "Supporting and enhancing centralized banking platforms, managing deposits, ledgers, and critical EOD/SOD batch processes.",
    icon: Landmark,
    color: "text-emerald-500",
  },
  {
    title: "IFRS 9",
    description: "Building automated data pipelines for financial reporting standards, ensuring accurate impairment modeling and compliance.",
    icon: Scale,
    color: "text-amber-500",
  },
  {
    title: "Payments & Remittances",
    description: "Processing high-volume SWIFT, NEFT, and RTGS transactions with focus on speed, security, and reconciliation.",
    icon: CreditCard,
    color: "text-purple-500",
  },
  {
    title: "Regulatory Compliance",
    description: "Delivering automated reporting systems that satisfy stringent central bank requirements across multiple jurisdictions.",
    icon: ClipboardCheck,
    color: "text-cyan-500",
  },
]

export function DomainExpertise() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Banking Domain <span className="text-electric">Expertise</span></h2>
          <p className="text-slate-800 dark:text-slate-400 max-w-2xl mx-auto font-bold leading-relaxed">
            Deep vertical knowledge in financial systems, ensuring technical solutions align with complex business logic and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform shadow-inner`}>
                <domain.icon className={`h-8 w-8 ${domain.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{domain.title}</h3>
              <p className="text-slate-800 dark:text-slate-400 leading-relaxed font-bold">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
