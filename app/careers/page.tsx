"use client"

import Link from "next/link"
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/shared/PageHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"

const positions = [
  { title: "Senior React Engineer", type: "Full-time", location: "Remote / SF", dept: "Engineering" },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote / SF", dept: "Design" },
  { title: "Game Developer (Unity)", type: "Full-time", location: "Remote", dept: "Game Dev" },
  { title: "AI / ML Engineer", type: "Full-time", location: "Remote / NY", dept: "AI & ML" },
  { title: "Technical Project Manager", type: "Full-time", location: "Remote", dept: "Operations" },
  { title: "Junior React Developer", type: "Full-time", location: "SF Office", dept: "Engineering" },
]

const perks = [
  { title: "Competitive Compensation", description: "Top-tier salary, equity packages, and performance bonuses." },
  { title: "Remote-First Culture", description: "Work from anywhere. We trust our team to deliver." },
  { title: "Learning Budget", description: "$5,000 annual budget for courses, conferences, and books." },
  { title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage." },
  { title: "Flexible PTO", description: "Take the time you need. No fixed vacation days." },
  { title: "Home Office Setup", description: "Get the equipment you need to do your best work." },
]

export default function CareersPage() {
  return (
    <>
      <PageHeader title="Join Our Team" description="Help us build the future of digital products. We're looking for talented people who love what they do." />

      <section className="py-16 sm:py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-8">Open Positions</h2></AnimatedSection>
          <div className="space-y-4">
            {positions.map((position, i) => (
              <AnimatedSection key={position.title} delay={i * 0.05}>
                <Link href="#" className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 sm:p-6 transition-all hover:bg-zinc-100 hover:border-zinc-200">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">{position.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {position.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {position.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {position.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-500 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-12 text-center">Why Work at <span className="text-gradient">THCoders</span></h2>
          </AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6">
                  <h3 className="text-lg font-semibold text-zinc-900">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{perk.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
