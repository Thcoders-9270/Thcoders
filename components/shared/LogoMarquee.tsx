"use client"

import { motion } from "framer-motion"

const originalThcodersLogos = [
  {
    id: "inter",
    component: (
      <div className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">Inter</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className="h-4 sm:h-5 w-4 sm:w-5 ml-0.5">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    ),
  },
  {
    id: "neio",
    component: (
      <div className="flex items-center text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <span className="text-2xl sm:text-3xl font-black tracking-wider">NeIO</span>
      </div>
    ),
  },
  {
    id: "hexAIGon",
    component: (
      <div className="flex items-center gap-1 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">hexAIgon</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 sm:h-4 w-3.5 sm:w-4 -mt-2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        </svg>
      </div>
    ),
  },
  {
    id: "magify",
    component: (
      <div className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 sm:h-7 w-6 sm:w-7">
          <circle cx="12" cy="4.5" r="2.5" />
          <circle cx="17.5" cy="6.8" r="2.5" />
          <circle cx="19.5" cy="12" r="2.5" />
          <circle cx="17.5" cy="17.2" r="2.5" />
          <circle cx="12" cy="19.5" r="2.5" />
          <circle cx="6.5" cy="17.2" r="2.5" />
          <circle cx="4.5" cy="12" r="2.5" />
          <circle cx="6.5" cy="6.8" r="2.5" />
          <circle cx="12" cy="12" r="2.2" />
        </svg>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight lowercase">magify</span>
      </div>
    ),
  },
  {
    id: "buildr",
    component: (
      <div className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 sm:h-7 w-6 sm:w-7">
          <rect x="3" y="3" width="18" height="18" rx="4.5" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <circle cx="12" cy="12" r="2.8" fill="currentColor" />
        </svg>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">Buildr</span>
      </div>
    ),
  },
  {
    id: "ace",
    component: (
      <div className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">ACe</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-5 sm:h-6 w-5 sm:w-6">
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
          <line x1="5.6" y1="18.4" x2="18.4" y2="5.6" />
        </svg>
      </div>
    ),
  },
  {
    id: "tabo",
    component: (
      <div className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 sm:h-7 w-6 sm:w-7">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="8.5" cy="8.5" r="1.6" fill="currentColor" />
          <circle cx="15.5" cy="8.5" r="1.6" fill="currentColor" />
          <circle cx="8.5" cy="15.5" r="1.6" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r="1.6" fill="currentColor" />
        </svg>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">Tabo</span>
      </div>
    ),
  },
  {
    id: "genlab",
    component: (
      <div className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-700 select-none cursor-pointer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 sm:h-7 w-6 sm:w-7">
          <path d="M10 2v7.5L5.5 18A2 2 0 0 0 7.2 21h9.6a2 2 0 0 0 1.7-3L14 9.5V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
          <line x1="7" y1="15" x2="17" y2="15" />
        </svg>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">GenLab</span>
      </div>
    ),
  },
]

export function LogoMarquee() {
  const duplicated = [...originalThcodersLogos, ...originalThcodersLogos, ...originalThcodersLogos]

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm font-normal text-zinc-400">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-16 sm:gap-24 items-center w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              {item.component}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
