"use client"

import React from "react"
import { motion } from "framer-motion"
import { Zap, Rocket, BarChart3, Settings, LifeBuoy, CheckCircle2 } from "lucide-react"

const achievements = [
  {
    icon: Zap,
    title: "40% ETL Optimization",
    description: "Reduced ETL job runtime by 40% through advanced PL/SQL tuning and query optimization.",
    color: "bg-amber-600",
  },
  {
    icon: Rocket,
    title: "7+ International Go-Lives",
    description: "Successfully led multi-country banking implementations and post-production stabilization.",
    color: "bg-blue-600",
  },
  {
    icon: BarChart3,
    title: "90% Fraud Accuracy",
    description: "Designed fraud analytics identifying over 90% suspicious transactions for regional banks.",
    color: "bg-emerald-600",
  },
  {
    icon: Settings,
    title: "CI/CD Automation",
    description: "Automated manual deployment processes using Jenkins and GitHub Actions pipelines.",
    color: "bg-indigo-600",
  },
  {
    icon: LifeBuoy,
    title: "24x7 L3 Support",
    description: "Provided round-the-clock technical support for mission-critical core banking systems.",
    color: "bg-purple-600",
  },
  {
    icon: CheckCircle2,
    title: "IFRS 9 Delivery",
    description: "Delivered automated data reporting for IFRS 9 compliance across multiple entities.",
    color: "bg-cyan-600",
  },
]

export function Achievements() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-950 dark:text-white leading-tight uppercase tracking-tighter">Key <span className="text-electric">Achievements</span></h2>
            <p className="text-slate-900 dark:text-slate-300 font-black text-lg leading-relaxed">
              Quantifiable impact delivered across various banking projects and technical challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 bg-slate-100 dark:bg-slate-800 rounded-full transition-transform group-hover:scale-150 duration-500" />
              <div className={`relative w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-8 shadow-2xl shadow-${item.color.split('-')[1]}/30`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="relative text-2xl font-black mb-4 text-slate-950 dark:text-white uppercase tracking-tight">{item.title}</h3>
              <p className="relative text-slate-900 dark:text-slate-300 text-lg leading-relaxed font-bold">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
