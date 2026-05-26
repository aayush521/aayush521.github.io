"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, Globe, Database, Terminal } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-950 dark:text-white leading-tight">
              Engineering <span className="text-electric">Resilient</span> <br /> Banking Systems
            </h2>
            <div className="space-y-6 text-xl text-slate-900 dark:text-slate-300 font-bold leading-relaxed">
              <p>
                With over 8 years of specialized experience in the banking and financial services sector, 
                I have dedicated my career to building, optimizing, and supporting mission-critical backend systems. 
              </p>
              <p>
                I have a proven track record of delivering multi-country implementations across the Middle East and Asia, 
                including regions like Oman, Saudi Arabia, Dubai, and the Philippines. 
              </p>
              <p>
                Currently based in Toronto with an open work permit, I am looking to leverage my deep domain 
                expertise in IFRS 9, Regulatory Compliance, and High-Performance ETL to drive value for 
                leading Canadian financial institutions.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border-l-8 border-l-electric shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-electric/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-electric" />
              </div>
              <h3 className="font-black text-xl mb-3 text-slate-950 dark:text-white uppercase tracking-tight">Global Impact</h3>
              <p className="text-sm font-black text-slate-800 dark:text-slate-400 leading-relaxed">
                Delivered projects in 7+ countries, adapting to diverse regulatory environments.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border-l-8 border-l-cyan shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-cyan" />
              </div>
              <h3 className="font-black text-xl mb-3 text-slate-950 dark:text-white uppercase tracking-tight">Data Specialist</h3>
              <p className="text-sm font-black text-slate-800 dark:text-slate-400 leading-relaxed">
                Expert in Oracle PL/SQL and ETL optimizations, reducing job runtimes by 40%.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border-l-8 border-l-indigo-600 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center mb-6">
                <Terminal className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-black text-xl mb-3 text-slate-950 dark:text-white uppercase tracking-tight">L2/L3 Leadership</h3>
              <p className="text-sm font-black text-slate-800 dark:text-slate-400 leading-relaxed">
                Providing 24x7 support and RCA for critical banking infrastructure.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border-l-8 border-l-emerald-600 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-black text-xl mb-3 text-slate-950 dark:text-white uppercase tracking-tight">Domain Expert</h3>
              <p className="text-sm font-black text-slate-800 dark:text-slate-400 leading-relaxed">
                Specialized in AML, Anti-Fraud, and Regulatory Compliance platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
