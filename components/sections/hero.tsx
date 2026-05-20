"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, Linkedin, Github, Mail, ShieldCheck } from "lucide-react"
import { toast } from "sonner"

const metrics = [
  { label: "Experience", value: "7+ Years" },
  { label: "Companies", value: "4" },
  { label: "Banking Projects", value: "7+" },
  { label: "Performance Improv.", value: "40%" },
]

export function Hero() {
  const handleDownload = () => {
    toast.info("Starting Resume Download...")
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aayush_Rathod_Resume.pdf';
    link.click();
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden bg-white dark:bg-transparent">
      {/* Background Gradients - Adjusted for visibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] rounded-full bg-electric/10 blur-[120px] dark:bg-electric/20" />
        <div className="absolute bottom-[5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-cyan/10 blur-[120px] dark:bg-cyan/20" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-electric/10 text-electric border border-electric/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-electric mr-2 animate-pulse" />
              Open to Work
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 border border-slate-700 shadow-sm">
              Available in Canada
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 border border-slate-700 shadow-sm">
              Contract & Full-Time
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black tracking-tight mb-4 text-slate-950 dark:text-white leading-[0.9]">
            Aayush <br />
            <span className="text-gradient">Rathod</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
            Senior Java Backend Developer & <br />
            <span className="text-electric">Production Support Specialist</span>
          </h2>
          <p className="text-lg text-slate-900 dark:text-slate-300 mb-8 max-w-xl leading-relaxed font-bold">
            7+ Years Building and Supporting Mission-Critical Banking & Financial Systems. 
            Delivering enterprise-grade backend systems and 24x7 production support for AML, 
            Anti-Fraud, Core Banking, and IFRS 9 platforms.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-electric text-white font-black text-lg flex items-center hover:bg-electric/90 transition-all group shadow-xl shadow-electric/30"
            >
              Contact Me <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleDownload}
              className="px-8 py-4 rounded-full border-2 border-slate-900 dark:border-slate-700 font-black text-lg flex items-center hover:bg-slate-950 hover:text-white dark:hover:bg-slate-800 transition-all text-slate-950 dark:text-white shadow-lg"
            >
              Download Resume <Download className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center space-x-8">
            <a href="https://www.linkedin.com/in/aayush-rathod11" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-400 hover:text-electric transition-all transform hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/aayush521" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-400 hover:text-electric transition-all transform hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
            <a href="mailto:aayushrathod521@gmail.com" className="text-slate-900 dark:text-slate-400 hover:text-electric transition-all transform hover:scale-110">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl border-slate-200"
              >
                <span className="text-4xl font-black text-electric mb-2">{metric.value}</span>
                <span className="text-sm font-black text-slate-950 dark:text-slate-300 uppercase tracking-widest">{metric.label}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="col-span-2 glass p-8 rounded-3xl flex items-center justify-center space-x-6 shadow-xl border-slate-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-10 w-10 text-cyan" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-black text-slate-950 dark:text-white leading-tight">90% Fraud Detection</span>
                <span className="text-sm font-black text-slate-900 dark:text-slate-300 uppercase tracking-widest">Accuracy in Analytics Systems</span>
              </div>
            </motion.div>
          </div>
          
          {/* Animated decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-electric/10 rounded-full blur-3xl animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  )
}
