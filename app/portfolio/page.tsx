"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Maximize2, 
  X, 
  Box, 
  Eye, 
  Layers, 
  ExternalLink,
  Globe
} from "lucide-react"
import { portfolioItems, categories } from "@/data/portfolio"
import type { PortfolioItem } from "@/types"
import { PageHeader } from "@/components/shared/PageHeader"
import { cn } from "@/lib/utils"

function PortfolioContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"
  
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [previewItem, setPreviewItem] = useState<PortfolioItem | null>(null)

  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat)
    }
  }, [searchParams])

  const filtered = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Our Portfolios" 
        description="Explore our curated showcase of photorealistic 3D interior & exterior visualizations, enterprise web platforms, and mobile apps." 
      />

      <section className="py-16 sm:py-24 bg-zinc-50/60 border-t border-zinc-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Navigation Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2.5 mb-12 sm:mb-14">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              const count = cat === "All" 
                ? portfolioItems.length 
                : portfolioItems.filter((i) => i.category === cat).length

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 select-none shadow-xs cursor-pointer",
                    isActive 
                      ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10 scale-102" 
                      : "bg-white text-zinc-600 border border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900"
                  )}
                >
                  {cat.includes("3D") && <Box className="h-3.5 w-3.5 text-orange-500" />}
                  <span>{cat}</span>
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"
                  )}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => {
                const is3D = item.category.includes("3D")

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-200/80 hover:-translate-y-2 transition-all duration-500">
                      
                      {/* Media Preview Box */}
                      <Link 
                        href={item.link || `/portfolio/${item.id}`}
                        className="relative aspect-[16/10.5] w-full overflow-hidden bg-zinc-950 block"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Subtle scrim overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm border border-white/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            {item.category}
                          </span>
                        </div>

                        {/* Top-Right Action: Quick Fullscreen Modal */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setPreviewItem(item)
                          }}
                          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-zinc-800 shadow-sm border border-white/60 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110"
                          title="Preview in Modal"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>

                        {/* Hover bottom action banner */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-orange-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                            <Eye className="h-3.5 w-3.5" />
                            <span>View Case Study</span>
                          </span>

                          {item.liveUrl && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md">
                              <Globe className="h-3 w-3 text-emerald-600" />
                              <span>Live</span>
                            </span>
                          )}
                        </div>
                      </Link>

                      {/* Card Content Details */}
                      <div className="flex flex-col flex-grow p-6 sm:p-7 bg-white">
                        <Link 
                          href={item.link || `/portfolio/${item.id}`}
                          className="flex items-start justify-between gap-3 mb-2 group/title"
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight group-hover/title:text-orange-600 transition-colors duration-200">
                            {item.title}
                          </h3>
                          <div className="shrink-0 text-zinc-400 group-hover/title:text-orange-600 transition-colors pt-1">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </Link>

                        <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 line-clamp-2 flex-grow">
                          {item.description}
                        </p>
                        
                        {/* Tag pills */}
                        <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag} 
                                className="rounded-lg bg-zinc-50 border border-zinc-200/60 px-2.5 py-1 text-[11px] font-medium text-zinc-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Dedicated View Site Option */}
                          {item.liveUrl && (
                            <a
                              href={item.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/70 px-3 py-1 rounded-full transition-colors cursor-pointer"
                            >
                              <span>View Site</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Bottom CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 text-center rounded-3xl bg-zinc-900 text-white p-10 sm:p-14 relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-orange-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Ambitious 3D &amp; Software Production
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need custom 3D CGI or full-stack development?</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                We craft photorealistic architectural renders, interactive WebGL 3D scenes, and enterprise web &amp; mobile software.
              </p>
              <div className="pt-2 flex justify-center">
                <Link
                  href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                  target="_blank"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-100 shadow-xl active:scale-95"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Fullscreen HD Lightbox Modal */}
      <AnimatePresence>
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewItem(null)}
              className="fixed inset-0 bg-zinc-950/90 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    {previewItem.category}
                  </span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                    {previewItem.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewItem(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Image Box */}
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                <Image
                  src={previewItem.image}
                  alt={previewItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-6 bg-zinc-900/95 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <h4 className="text-base font-bold text-white">{previewItem.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {previewItem.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {previewItem.tags.map((t) => (
                      <span key={t} className="rounded-md bg-zinc-800 text-zinc-300 px-2 py-0.5 text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {previewItem.liveUrl && (
                    <a
                      href={previewItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white transition-colors shadow-lg shadow-emerald-900/20"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>View Live Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}

                  <Link
                    href={`/portfolio/${previewItem.id}`}
                    onClick={() => setPreviewItem(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 text-xs font-bold text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PortfolioContent />
    </Suspense>
  )
}
