"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/shared/PageHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Mail, Shield, FileText, Scale, Lock, Globe, AlertCircle, RefreshCw } from "lucide-react"

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms", icon: Shield },
  { id: "services", title: "2. Services Offered", icon: FileText },
  { id: "intellectual-property", title: "3. Intellectual Property", icon: Globe },
  { id: "user-responsibilities", title: "4. User Responsibilities", icon: AlertCircle },
  { id: "confidentiality", title: "5. Confidentiality", icon: Lock },
  { id: "limitation-liability", title: "6. Limitation of Liability", icon: Scale },
  { id: "changes", title: "7. Changes to Terms", icon: RefreshCw },
  { id: "governing-law", title: "8. Governing Law", icon: Scale },
]

export default function TermsPage() {
  const lastUpdated = "August 17, 2026"
  const [activeSection, setActiveSection] = useState("acceptance")

  // Intersection observer logic to highlight active section in sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHeader
        title="Terms of Service"
        description={`Last updated: ${lastUpdated}`}
      />

      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4 shrink-0">
              <div className="sticky top-32">
                <AnimatedSection>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-6">
                    Contents
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {sections.map((section) => {
                      const Icon = section.icon
                      const isActive = activeSection === section.id
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                            isActive 
                              ? "bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 font-medium shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800" 
                              : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
                          }`}
                        >
                          <Icon className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"}`} />
                          {section.title}
                        </a>
                      )
                    })}
                  </nav>
                </AnimatedSection>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-sm">
                  
                  <div className="max-w-none">
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
                      Welcome to THCoders. By accessing or using our website, services, or products, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                    </p>

                    <div className="space-y-12">
                      <section id="acceptance" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">1</span>
                          Acceptance of Terms
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          By accessing this website, we assume you accept these terms and conditions. Do not continue to use THCoders if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                      </section>

                      <section id="services" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">2</span>
                          Services Offered
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          THCoders provides professional software development, design, and consulting services. The specific scope, deliverables, timeline, and pricing for any project will be agreed upon in a separate Statement of Work (SOW) or contract.
                        </p>
                      </section>

                      <section id="intellectual-property" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">3</span>
                          Intellectual Property Rights
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          Other than the content you own, under these terms, THCoders and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.
                        </p>
                      </section>

                      <section id="user-responsibilities" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">4</span>
                          User Responsibilities
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          You agree not to use the website or services in a way that may cause damage to the website or impairment of the availability or accessibility of the website. You must not use the website in any way which is unlawful, illegal, fraudulent, or harmful.
                        </p>
                      </section>

                      <section id="confidentiality" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">5</span>
                          Confidentiality
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          Both parties agree to maintain the confidentiality of any proprietary information shared during the course of a project. This includes business strategies, trade secrets, client data, and any other non-public information.
                        </p>
                      </section>

                      <section id="limitation-liability" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">6</span>
                          Limitation of Liability
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          In no event shall THCoders, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract. THCoders shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
                        </p>
                      </section>

                      <section id="changes" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">7</span>
                          Changes to Terms
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. You are advised to review this page periodically for any changes.
                        </p>
                      </section>

                      <section id="governing-law" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">8</span>
                          Governing Law
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          These terms will be governed by and interpreted in accordance with the laws of the applicable jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts for the resolution of any disputes.
                        </p>
                      </section>
                    </div>

                    <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Have questions?</h2>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            If you have any questions about these Terms of Service, please get in touch with our legal team.
                          </p>
                        </div>
                        <a
                          href="mailto:legal@thcoders.com"
                          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 shrink-0"
                        >
                          <Mail className="h-4 w-4" />
                          Contact Legal
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
