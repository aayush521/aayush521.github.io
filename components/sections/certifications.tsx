"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description:
      "Foundational AWS knowledge across cloud architecture, security, and core services (EC2, S3, Lambda, RDS, IAM, CloudWatch).",
  },
  // Add additional certs here as they are earned (e.g., AWS Solutions Architect Associate).
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <span className="text-electric">Certifications</span>
          </h2>
          <p className="text-slate-800 dark:text-slate-400 font-bold">
            Verifiable credentials backing the technical claims above.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all flex items-start space-x-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 shadow-inner">
                <Award className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-black text-slate-950 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <div className="text-sm font-bold text-electric mb-3">{cert.issuer}</div>
                <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
