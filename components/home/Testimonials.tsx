"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-white" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.03),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Trusted by growing number of startups & teams. Hear what our clients have to say.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group clay-card p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-orange-600 text-orange-600" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-orange-600/30 mb-3" />
              <p className="text-sm leading-relaxed text-zinc-600">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-zinc-200">
                <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shrink-0 overflow-hidden">
                  <span className="relative z-10">{t.name.split(" ").map((n) => n[0]).join("")}</span>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-600">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
