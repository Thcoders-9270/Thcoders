"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, ArrowUpRight, MessageCircle } from "lucide-react"
import type { TeamMember } from "@/types"

interface FeaturedLeaderCardProps {
  member: TeamMember
  index: number
  reversed?: boolean
}

export function LinkedInBadgeIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.09v8.37z" />
    </svg>
  )
}

export function WhatsAppBadgeIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.57 20.17 9.15 19.78 7.9 19.04L7.6 18.86L4.47 19.68L5.31 16.63L5.11 16.32C4.31 15.03 3.8 13.5 3.8 11.91C3.8 7.37 7.51 3.67 12.05 3.67M9.11 7.27C8.94 7.27 8.67 7.33 8.44 7.58C8.21 7.83 7.56 8.44 7.56 9.68C7.56 10.92 8.46 12.11 8.59 12.28C8.72 12.45 10.34 14.96 12.82 16.03C14.88 16.92 15.3 16.74 15.75 16.7C16.2 16.66 17.2 16.11 17.41 15.53C17.62 14.95 17.62 14.45 17.56 14.35C17.5 14.25 17.34 14.19 17.09 14.07C16.84 13.95 15.62 13.35 15.39 13.27C15.16 13.19 15 13.15 14.83 13.4C14.66 13.65 14.19 14.19 14.04 14.35C13.89 14.52 13.75 14.54 13.5 14.42C13.25 14.3 12.44 14.03 11.49 13.18C10.75 12.52 10.25 11.7 10.12 11.45C10 11.2 10.11 11.07 10.23 10.95C10.34 10.84 10.48 10.66 10.6 10.51C10.73 10.36 10.77 10.26 10.85 10.1C10.93 9.93 10.89 9.79 10.83 9.67C10.77 9.54 10.27 8.32 10.07 7.82C9.87 7.34 9.66 7.4 9.5 7.4L9.11 7.27Z" />
    </svg>
  )
}

export function FeaturedLeaderCard({ member, index, reversed = false }: FeaturedLeaderCardProps) {
  const firstName = member.name.split(" ")[0]
  const description = member.aboutText || member.bio

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="group relative rounded-[32px] bg-gradient-to-br from-white via-zinc-50/40 to-orange-50/20 border border-zinc-200/80 p-6 sm:p-9 lg:p-11 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.09)] hover:border-orange-300/80 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative Ambient Radial Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/8 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/8 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
      
      {/* Top Edge Inset Highlight */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Photo Container Column with Gradient Ring */}
        <div className={`lg:col-span-5 flex justify-center ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-none p-1.5 rounded-[26px] bg-gradient-to-tr from-orange-500/20 via-zinc-200/80 to-indigo-500/25 shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="relative aspect-[4/4.8] w-full rounded-[22px] overflow-hidden bg-zinc-900 shadow-inner">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                priority={index === 0}
              />

              {/* Bottom Scrim for Guaranteed Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Floating High-Contrast Identity Badge (Exactly like reference image) */}
              <div className="absolute bottom-3 inset-x-3 rounded-2xl bg-gradient-to-r from-[#18181b]/95 via-[#2e1065]/95 to-[#18181b]/95 backdrop-blur-xl border border-white/20 p-4 shadow-2xl text-center transition-all duration-300 group-hover:border-orange-400/40">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-snug drop-shadow-md">
                    {member.name}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                </div>
                <div className="text-orange-200/95 font-medium text-xs sm:text-sm mt-0.5 tracking-wide drop-shadow-sm">
                  {member.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className={`lg:col-span-7 flex flex-col justify-between h-full py-1 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          <div>
            {/* Leadership Eyebrow Pill */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-orange-600 border border-orange-500/20 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                Executive Leadership
              </span>
            </div>

            {/* Title with Gradient Emphasis */}
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-orange-600 to-purple-600 pb-2">
              {member.name}
            </h3>

            {/* High-Impact Highlights Chips */}
            {member.highlights && member.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {member.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100/90 border border-zinc-200/80 px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-orange-500" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Rich Bio Text */}
            <p className="mt-5 text-zinc-600 text-sm sm:text-base lg:text-base leading-relaxed font-normal">
              {description}
            </p>
          </div>


        </div>
      </div>
    </motion.div>
  )
}
