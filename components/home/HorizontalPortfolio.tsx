"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, ArrowRight, Sparkles, Pause, Play } from "lucide-react"
import { portfolioItems } from "@/data/portfolio"

export function HorizontalPortfolio() {
  const [isPaused, setIsPaused] = useState(false)
  const duplicatedItems = [...portfolioItems, ...portfolioItems]

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,88,12,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.03),transparent_50%)] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-4 backdrop-blur-md">
              <Sparkles className="h-3 w-3" />
              Featured Portfolios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Crafted with <span className="text-gradient">precision &amp; purpose</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
              Explore our continuous showcase of production SaaS platforms, mobile applications, and 3D architectural visualizations.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200/80 px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-200 transition-colors select-none"
              aria-label={isPaused ? "Play slider" : "Pause slider"}
            >
              {isPaused ? <Play className="h-3.5 w-3.5 text-orange-600 fill-orange-600" /> : <Pause className="h-3.5 w-3.5 text-orange-600 fill-orange-600" />}
              <span>{isPaused ? "Resume Slide" : "Pause on Hover"}</span>
            </button>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-orange-600 transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Slider Motion Track */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 sm:gap-8 w-max px-4"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.link || `/portfolio/${item.id}`}
              className="group relative w-[320px] sm:w-[400px] lg:w-[440px] shrink-0 flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-200/80 hover:-translate-y-2 transition-all duration-500 select-none"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                
                {/* Subtle dark scrim on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating category badge (top left) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm border border-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {item.category}
                  </span>
                </div>

                {/* Floating Arrow icon button (top right) */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="h-9 w-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-zinc-800 shadow-sm border border-white/60 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-7 bg-white">
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-orange-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 line-clamp-2 flex-grow">
                  {item.description}
                </p>

                {/* Tag Pills */}
                <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-lg bg-zinc-50 border border-zinc-200/60 px-2.5 py-1 text-[11px] font-medium text-zinc-600 group-hover:border-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
