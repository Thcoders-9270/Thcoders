"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, Zap, MessageSquare, Users, Shield, ChevronDown, ArrowRight } from "lucide-react"
import { teamMembers } from "@/data/team"
import { FeaturedLeaderCard } from "@/components/shared/FeaturedLeaderCard"

const benefits = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Rapid project kickoffs and milestone deliveries with efficient development processes.",
  },
  {
    icon: MessageSquare,
    title: "Efficient Communication",
    description: "Direct access to our team through dedicated channels with quick responses.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled developers and designers across multiple technologies.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality standards for reliable solutions.",
  },
]

const noItems = [
  "Rigid contracts",
  "Communication gaps",
  "Expensive in-house hiring",
  "Lengthy procurement cycles",
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAllTeam, setShowAllTeam] = useState(false)

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" ref={ref}>
      {/* Background with pointer-events-none */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,88,12,0.02),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            We transform complex challenges into <span className="text-gradient">streamlined solutions</span>
          </h2>
          <p className="mt-3.5 text-base text-zinc-600 max-w-2xl mx-auto">
            Through systematic development and design approaches, we deliver exceptional results that drive your business forward.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="clay-card p-6 text-center hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-purple-100 to-indigo-100 text-orange-600 shadow-sm">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-zinc-900">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What We Don't Do */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 clay-card p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-bold text-zinc-900 mb-4 text-center">What We Don't Do</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {noItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                <X className="h-3.5 w-3.5 text-red-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12 sm:mb-14">
            <span className="inline-block mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              Our Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900">
              Meet Our Team
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-lg mx-auto">
              The designers, engineers, and strategists behind your products.
            </p>
          </div>

          {/* First 2 Featured Profiles */}
          <div className="space-y-8 sm:space-y-10 max-w-5xl mx-auto mb-12">
            {teamMembers.slice(0, 2).map((member, index) => (
              <FeaturedLeaderCard
                key={member.id}
                member={member}
                index={index}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>

          {/* Expandable Core Specialists */}
          <AnimatePresence>
            {showAllTeam && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="pt-8 border-t border-zinc-200/80 mb-10 max-w-5xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block mb-1 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
                      Core Specialists
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-zinc-900">
                      Engineering &amp; Design Team
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.slice(2).map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group flex flex-col items-center text-center rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
                      >
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
                        <h4 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                          {member.bio}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View More Action Button Controls */}
          <div className="relative z-20 mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {teamMembers.length > 2 && (
              <button
                type="button"
                onClick={() => setShowAllTeam((prev) => !prev)}
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 active:scale-95 transition-all duration-300 select-none"
              >
                <span>{showAllTeam ? "Show Less" : `View More Team Members (${teamMembers.length - 2} more)`}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAllTeam ? "rotate-180" : ""}`} />
              </button>
            )}

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200/80 px-6 py-3 text-xs sm:text-sm font-bold text-zinc-800 hover:bg-zinc-200 active:scale-95 transition-all"
            >
              <span>Explore All on About Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
