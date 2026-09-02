"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"
import { TextReveal } from "@/components/shared/TextReveal"
import { stats } from "@/data/stats"

function StatCounter({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const counterRef = useRef<HTMLSpanElement>(null)
  const numValue = parseInt(value.replace(/[^0-9]/g, ""))
  const suffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!inView || !counterRef.current || !numValue) return
    gsap.fromTo(
      counterRef.current,
      { textContent: 0 },
      {
        textContent: numValue,
        duration: 2.5,
        ease: "power4.out",
        snap: { textContent: 1 },
      }
    )
  }, [inView, numValue])

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0">
        <span ref={counterRef} className="text-5xl sm:text-6xl font-bold text-zinc-900">0</span>
        <span className="text-5xl sm:text-6xl font-bold text-gradient">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 tracking-wide">{label}</p>
    </div>
  )
}

export function AnimatedStats() {
  return (
    <section className="relative py-20 sm:py-24 bg-zinc-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900"
          >
            THCoders by the numbers
          </TextReveal>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="clay-card p-6">
              <StatCounter value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
