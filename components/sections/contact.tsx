"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! Aayush will get back to you soon.")
      setIsSubmitting(false)
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  const handleDownload = () => {
    toast.info("Starting Resume Download...")
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aayush_Rathod_Resume_Toronto_2026.pdf';
    link.click();
  }

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-950 dark:text-white">Let's <span className="text-electric">Connect</span></h2>
            <p className="text-slate-900 dark:text-slate-300 text-xl mb-12 font-bold leading-relaxed">
              Currently seeking Senior Java Developer or Production Support roles in Canada. 
              Let's discuss how I can help your team build more resilient systems.
            </p>

            <div className="space-y-10">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-electric transition-all shadow-md">
                  <Mail className="h-7 w-7 text-slate-950 dark:text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-500 font-black uppercase tracking-widest mb-1">Email Me</div>
                  <a href="mailto:aayushrathod521@gmail.com" className="text-xl font-black text-slate-950 dark:text-white hover:text-electric transition-colors">
                    aayushrathod521@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-electric transition-all shadow-md">
                  <Phone className="h-7 w-7 text-slate-950 dark:text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-500 font-black uppercase tracking-widest mb-1">Call Me</div>
                  <a href="tel:+14167312864" className="text-xl font-black text-slate-950 dark:text-white hover:text-electric transition-colors">
                    +1 416-731-2864
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-electric transition-all shadow-md">
                  <MapPin className="h-7 w-7 text-slate-950 dark:text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-500 font-black uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-black text-slate-950 dark:text-white">Toronto, Ontario, Canada</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 mt-12">
              <a href="https://www.linkedin.com/in/aayush-rathod11" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border-2 border-slate-900 dark:border-slate-800 text-slate-950 dark:text-slate-300 hover:bg-electric hover:text-white hover:border-electric transition-all shadow-lg transform hover:scale-110">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="https://github.com/aayush521" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border-2 border-slate-900 dark:border-slate-800 text-slate-950 dark:text-slate-300 hover:bg-electric hover:text-white hover:border-electric transition-all shadow-lg transform hover:scale-110">
                <Github className="h-8 w-8" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-950 dark:text-slate-300 uppercase tracking-widest">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all text-slate-950 dark:text-white placeholder:text-slate-400 font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-950 dark:text-slate-300 uppercase tracking-widest">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all text-slate-950 dark:text-white placeholder:text-slate-400 font-bold"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-950 dark:text-slate-300 uppercase tracking-widest">Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Opportunity Discussion"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all text-slate-950 dark:text-white placeholder:text-slate-400 font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-950 dark:text-slate-300 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all resize-none text-slate-950 dark:text-white placeholder:text-slate-400 font-bold"
                />
              </div>
              <div className="space-y-4">
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-xl bg-electric text-white font-black text-lg flex items-center justify-center space-x-2 hover:bg-electric/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-electric/30"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="h-6 w-6" />
                </button>
                <button 
                  type="button"
                  onClick={handleDownload}
                  className="w-full py-5 rounded-xl border-2 border-slate-900 dark:border-slate-800 font-black text-lg flex items-center justify-center space-x-2 hover:bg-slate-950 hover:text-white dark:hover:bg-slate-800 transition-all text-slate-950 dark:text-white shadow-lg"
                >
                  <span>Download Resume</span>
                  <Download className="h-6 w-6" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
