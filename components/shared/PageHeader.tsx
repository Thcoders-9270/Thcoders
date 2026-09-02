"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className = "" }: PageHeaderProps) {
  return (
    <section className={`relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden ${className}`}>
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Page background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to ensure text readability and add blur effect */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-zinc-200 max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
