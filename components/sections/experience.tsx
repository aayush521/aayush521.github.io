"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Senior Backend Engineer (Freelance)",
    company: "PrecastXchange",
    period: "Nov 2024 – Present",
    location: "Toronto, Canada",
    highlights: [
      "Java 21, Spring Boot, Spring WebFlux",
      "OAuth2 Google login & Stripe integration",
      "MongoDB Atlas & Cloudflare R2/Stream",
      "GitHub Actions CI/CD implementation",
    ],
  },
  {
    role: "Java Backend Developer | Associate Consultant",
    company: "Infrasoft Technologies",
    period: "Nov 2021 – Oct 2024",
    location: "Mumbai, India",
    highlights: [
      "AML, Anti-Fraud, and IFRS 9 systems development",
      "Kafka & Pentaho/Informatica ETL processing",
      "L3 production support for multi-country go-lives",
      "Oracle PL/SQL & MongoDB integration",
    ],
  },
  {
    role: "Software Developer | L3 Support Engineer",
    company: "Onward e-Services",
    period: "Feb 2020 – Oct 2021",
    location: "Pune, India",
    highlights: [
      "Core Banking, Remittances, and Payments (SWIFT, NEFT)",
      "EOD/SOD batch monitoring and RCA",
      "Technical support for high-volume ATM transactions",
    ],
  },
  {
    role: "Assistant Systems Analyst",
    company: "C-Edge Technologies",
    period: "Mar 2018 – Feb 2020",
    location: "Mumbai, India",
    highlights: [
      "General Ledger & Deposits management",
      "Shell scripting for task automation",
      "Autosys batch scheduling and monitoring",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Professional <span className="text-electric">Journey</span></h2>
          <p className="text-slate-800 dark:text-slate-400 font-bold">
            A timeline of my professional growth and technical contributions.
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-white dark:bg-slate-800 text-electric shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform z-10">
                <Briefcase className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{exp.role}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-700">
                    <Calendar className="h-3 w-3 mr-1" /> {exp.period}
                  </span>
                </div>
                <div className="text-electric font-bold mb-1">{exp.company}</div>
                <div className="flex items-center text-sm font-bold text-slate-700 dark:text-slate-400 mb-4">
                  <MapPin className="h-3 w-3 mr-1" /> {exp.location}
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-slate-900 dark:text-slate-300 flex items-start leading-relaxed font-medium">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
