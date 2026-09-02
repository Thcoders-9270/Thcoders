"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { teamMembers } from "@/data/team"
import { clients } from "@/data/clients"
import { PageHeader } from "@/components/shared/PageHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { LogoMarquee } from "@/components/shared/LogoMarquee"
import { CTA } from "@/components/home/CTA"
import { stats } from "@/data/stats"
import { FeaturedLeaderCard } from "@/components/shared/FeaturedLeaderCard"
const industries = ["Fintech", "AI", "Cybersecurity", "Healthcare", "Ecommerce", "Blockchain"]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About THCoders"
        description="We partner with forward-thinking brands to create compelling stories that resonate deeply."
      />

      <section className="py-16 sm:py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
                We partner with forward-thinking brands to create <span className="text-gradient">compelling stories</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-600">
                Founded in 2025, THCoders is a premium design and development agency specializing in crafting digital products that resonate deeply with users. We streamline the design workflow by breaking down complex projects into manageable, bite-sized tasks.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Our team brings together skilled developers, designers, and strategists across multiple technologies to deliver comprehensive solutions that drive real business impact.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</div>
                    <div className="mt-1 text-sm text-zinc-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600">Industries</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Our expertise lies in guiding clients to achieve their <span className="text-gradient">next stage of growth</span>
            </h2>
          </AnimatedSection>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border border-zinc-200 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="py-16 sm:py-24 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="inline-block mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
                Our Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900">
                Meet the <span className="text-gradient">Team</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                We work with a network of creatives and technologists from different disciplines to deliver outstanding software and design solutions.
              </p>
            </div>
          </AnimatedSection>

          {/* First 2 Featured Leadership Profiles (Matching Reference Style) */}
          <div className="space-y-8 sm:space-y-10 max-w-5xl mx-auto mb-16 sm:mb-20">
            {teamMembers.slice(0, 2).map((member, index) => (
              <FeaturedLeaderCard
                key={member.id}
                member={member}
                index={index}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>

          {/* Supporting Core Team Section */}
          {teamMembers.length > 2 && (
            <div className="max-w-5xl mx-auto pt-6 border-t border-zinc-200">
              <div className="text-center mb-10">
                <span className="inline-block mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
                  Engineering &amp; Design
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                  Core Specialists
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.slice(2).map((member, i) => (
                  <AnimatedSection key={member.id} delay={i * 0.06}>
                    <div className="group flex flex-col items-center text-center rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300">
                      {/* Square Avatar Container */}
                      <div className="relative mb-4">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border-2 border-zinc-200 group-hover:border-orange-500/50 p-1 bg-gradient-to-tr from-orange-500/10 via-zinc-100 to-indigo-500/10 transition-all duration-300 shadow-sm">
                          <div className="relative h-full w-full rounded-xl overflow-hidden bg-zinc-100">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              fill
                              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                              sizes="(max-width: 768px) 96px, 112px"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Role Pill Badge */}
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold text-orange-600 border border-orange-200/60 mb-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        {member.role}
                      </span>

                      {/* Card Content */}
                      <h4 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors duration-200">
                        {member.name}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
