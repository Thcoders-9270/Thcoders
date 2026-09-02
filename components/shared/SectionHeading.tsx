"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {label && (
        <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  )
}
