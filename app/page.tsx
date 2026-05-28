import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { DomainExpertise } from "@/components/sections/expertise"
import { Achievements } from "@/components/sections/achievements"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { WhyHireMe } from "@/components/sections/why-hire-me"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DomainExpertise />
      <Achievements />
      <Experience />
      <Projects />
      <Certifications />
      <WhyHireMe />
      <Contact />
      
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-700 dark:text-slate-500 text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Aayush Rathod. All rights reserved.</p>
          <p className="mt-2">Senior Java Backend Developer & Production Support Specialist | Toronto, Canada</p>
        </div>
      </footer>
    </main>
  )
}
