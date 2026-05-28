"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ShieldCheck, Activity, Database } from "lucide-react"

const projects = [
  {
    title: "Spring Boot AML Transaction Monitor",
    description:
      "Event-driven Anti-Money-Laundering rules engine. Streams banking transactions through Kafka, evaluates them against 4 sample AML rules (high-velocity, structuring, geographic anomaly, sanctions), persists alerts to MongoDB, and exposes analytics over REST.",
    tech: ["Java 21", "Spring Boot", "Apache Kafka", "MongoDB", "Docker", "AML"],
    href: "https://github.com/aayush521/spring-boot-aml-transaction-monitor",
    icon: ShieldCheck,
    color: "text-red-500",
  },
  {
    title: "Reactive REST API Template",
    description:
      "Production-ready starter for non-blocking REST APIs on the JVM. Java 21, Spring Boot 3, Spring WebFlux, JWT-based stateless auth, reactive MongoDB driver, RFC-7807 error handling, validated requests, and CI out of the box.",
    tech: ["Java 21", "Spring WebFlux", "Spring Security", "JWT", "Reactive MongoDB", "Docker"],
    href: "https://github.com/aayush521/reactive-rest-api-template",
    icon: Activity,
    color: "text-blue-500",
  },
  {
    title: "Oracle PL/SQL Performance Patterns",
    description:
      "Battle-tested PL/SQL patterns for Oracle 11g/12c/19c — bulk collect & FORALL, partitioning, indexing, bind variables, pipelined functions, materialized views. Real techniques from banking ETL workloads with runnable demos.",
    tech: ["Oracle PL/SQL", "Performance Tuning", "ETL", "Banking", "SQL"],
    href: "https://github.com/aayush521/oracle-plsql-performance-patterns",
    icon: Database,
    color: "text-amber-500",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-950 dark:text-white leading-tight uppercase tracking-tighter">
            Open Source <span className="text-electric">Projects</span>
          </h2>
          <p className="text-slate-900 dark:text-slate-300 max-w-3xl mx-auto font-bold text-lg leading-relaxed">
            Sanitized, runnable companions to the kind of systems I build at work — banking-domain
            microservices, reactive backends, and production-grade Oracle PL/SQL patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-electric transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform shadow-inner">
                  <project.icon className={`h-7 w-7 ${project.color}`} />
                </div>
                <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-400 group-hover:text-electric transition-colors">
                  <Github className="h-5 w-5" />
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              <h3 className="text-xl font-black mb-3 text-slate-950 dark:text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-800 dark:text-slate-400 leading-relaxed font-medium mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-bold rounded-full bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 border border-slate-700 uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/aayush521"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-slate-900 dark:border-slate-700 font-bold text-slate-950 dark:text-white hover:bg-slate-950 hover:text-white dark:hover:bg-slate-800 transition-all shadow-md"
          >
            <Github className="mr-2 h-5 w-5" /> View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
