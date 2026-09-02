"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, ShieldCheck, Zap, Users, Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Container */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-16 lg:p-20 shadow-2xl overflow-hidden text-center text-white">
          
          {/* Ambient Lighting & Mesh Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-indigo-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-600/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-indigo-600/15 blur-[80px]" />
          
          {/* Subtle Grid Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8"
          >
            {/* Pill Badge */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-300 shadow-xs backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                Let's Build Something Exceptional
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Embark on a journey with <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">THCoders</span> today!
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you're building a greenfield AI platform, scaling a high-traffic web application, or crafting 3D experiences — our senior developers and designers are ready to ship.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                target="_blank"
                className="group relative inline-flex h-12 sm:h-13 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-sm sm:text-base font-bold text-zinc-900 shadow-xl transition-all hover:bg-zinc-100 hover:shadow-white/10 active:scale-95 w-full sm:w-auto"
              >
                <Calendar className="h-4 w-4 text-orange-600" />
                Book a 30-Min Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95 w-full sm:w-auto"
              >
                Explore Pricing Plans
              </Link>
            </div>

            {/* Trust Pillars Bar */}
            <div className="pt-8 sm:pt-10 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-400 text-left sm:text-center">
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <Zap className="h-4 w-4 text-orange-400 shrink-0" />
                <span>2-Week Sprint Velocity</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <Users className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Senior Dedicated Engineers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
