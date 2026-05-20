"use client"

import React from "react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Java", "Spring Boot", "Spring WebFlux", "REST APIs", "Microservices", "Kafka", "Multithreading", "Spring Security"],
    color: "bg-electric",
  },
  {
    title: "Databases & Data",
    skills: ["Oracle 19c", "PL/SQL", "MongoDB", "ETL (Pentaho, Informatica)", "Python", "Power BI", "SQL Server"],
    color: "bg-cyan",
  },
  {
    title: "Production Support",
    skills: ["L2/L3 Support", "Incident Management", "Root Cause Analysis", "ServiceNow", "JIRA", "Dynatrace", "Autosys"],
    color: "bg-indigo-600",
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS (Certified)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "Unix/Linux Shell Scripting"],
    color: "bg-emerald-600",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-950 dark:text-white leading-tight uppercase tracking-tighter">Core Technical <span className="text-electric">Arsenal</span></h2>
          <p className="text-slate-950 dark:text-slate-300 max-w-2xl mx-auto font-black text-lg leading-relaxed">
            A comprehensive suite of technologies and methodologies honed over years of enterprise-scale development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-1 rounded-3xl bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-800 dark:to-transparent shadow-xl"
            >
              <div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-1px)] p-8 h-full">
                <h3 className="font-black text-xl mb-8 flex items-center text-slate-950 dark:text-white uppercase tracking-tight">
                  <span className={`w-3 h-3 rounded-full ${category.color} mr-4 shadow-sm`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-xs font-black rounded-full bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 border-2 border-slate-800 dark:border-slate-700 hover:border-electric hover:bg-electric transition-all cursor-default shadow-sm uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
