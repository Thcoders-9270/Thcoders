"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Transparent costs.{" "}
            <span className="text-gradient">Clear timelines.</span> No complications.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="mx-auto max-w-md">
            <div className="clay-card p-8 text-center">
              <div className="text-5xl font-bold text-zinc-900">$4,984</div>
              <div className="text-zinc-600 mt-2">/ monthly</div>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Pause or cancel anytime
              </div>
              <div className="mt-8 space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                  </div>
                  <span className="text-sm text-zinc-600">Start your project with a clear roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                  </div>
                  <span className="text-sm text-zinc-600">Revise until you're totally satisfied</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                  </div>
                  <span className="text-sm text-zinc-600">Flexible engagement models</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-orange-600" />
                  </div>
                  <span className="text-sm text-zinc-600">Pause or cancel anytime</span>
                </div>
              </div>
              <Link
                href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                target="_blank"
                className="mt-8 w-full clay-btn clay-btn-primary flex h-12 items-center justify-center gap-2 group"
              >
                Subscribe now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-zinc-900">Have a project in mind?</h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Looking for experienced developers and designers for your next project? Let&apos;s discuss your requirements and provide you with a detailed scope and timeline. Schedule a call with us to explore the possibilities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                target="_blank"
                className="clay-btn clay-btn-primary flex h-12 items-center gap-2 group"
              >
                Book a Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
