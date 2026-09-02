"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Star, 
  Sparkles, 
  Zap, 
  Smartphone, 
  Code2, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Cpu
} from "lucide-react"
import Lottie from "lottie-react"
import landingAnimation from "@/data/landing.json"

const Avatar = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`relative inline-block h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-zinc-100 shadow-sm ${className}`}>
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] lg:min-h-[100svh] flex items-center overflow-hidden bg-white pt-24 lg:pt-0">
      
      {/* Premium Multi-Layered Atmosphere Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Tech Abstract Graphic */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2128&auto=format&fit=crop"
            alt="Hero Background Atmosphere"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Precision Coordinate Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb80_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb80_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)]" />

        {/* Dynamic Fluid Light Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [-20, 20, -20],
            y: [-15, 15, -15],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-orange-500/20 via-amber-400/15 to-transparent blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 0.95, 1.1],
            x: [25, -25, 25],
            y: [20, -20, 20],
            opacity: [0.25, 0.45, 0.25] 
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/6 h-[580px] w-[580px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-bl from-indigo-600/15 via-purple-600/10 to-pink-500/10 blur-[160px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/5 via-indigo-500/5 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 lg:col-span-7 max-w-xl lg:max-w-none"
          >
            {/* Live Availability Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-orange-600 shadow-xs backdrop-blur-md transition-all hover:bg-orange-50/80 hover:border-orange-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-600"></span>
                </span>
                <span>Now accepting select new projects for Q3/Q4</span>
                <span className="text-zinc-300">|</span>
                <span className="font-bold text-zinc-800">2 Slots Open</span>
              </span>
            </motion.div>

            {/* Headline with vibrant typography */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.65rem] font-extrabold tracking-tight text-zinc-900 leading-[1.12]">
                Crafted by <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">Designers.</span><br />
                Built by <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">Engineers.</span><br />
                Scaled by <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Marketers.</span>
              </h1>
              
              {/* Tech capability tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-semibold text-zinc-500 mr-1">Specialized in:</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 px-3 py-1 text-xs font-bold text-zinc-800 shadow-2xs hover:bg-white hover:border-zinc-300 transition-all">
                  <Code2 className="h-3 w-3 text-orange-600" /> Next.js &amp; Web Apps
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 px-3 py-1 text-xs font-bold text-zinc-800 shadow-2xs hover:bg-white hover:border-zinc-300 transition-all">
                  <Smartphone className="h-3 w-3 text-indigo-600" /> Native Mobile
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 px-3 py-1 text-xs font-bold text-zinc-800 shadow-2xs hover:bg-white hover:border-zinc-300 transition-all">
                  <Cpu className="h-3 w-3 text-purple-600" /> AI Agents &amp; RAG
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 px-3 py-1 text-xs font-bold text-zinc-800 shadow-2xs hover:bg-white hover:border-zinc-300 transition-all">
                  <Layers className="h-3 w-3 text-pink-600" /> 3D CGI &amp; Spatial
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base leading-relaxed text-zinc-600 max-w-xl">
              From photorealistic 3D web experiences to autonomous AI agent systems and high-throughput mobile apps, THCoders delivers end-to-end technical superiority and high-conversion design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#pricing"
                className="clay-btn clay-btn-primary flex h-12 items-center justify-center gap-2 group px-8 text-sm font-bold shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Pricing &amp; Plans</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
              
              <Link
                href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                target="_blank"
                className="flex h-12 items-center justify-center gap-2 group px-8 text-sm font-bold text-zinc-900 bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-full shadow-xs hover:bg-zinc-50 hover:border-zinc-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            {/* Social Proof & Metrics */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-3 border-t border-zinc-100/90">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client" />
                  <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Client" />
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-zinc-800 mt-0.5">5.0 Star Rating (50+ Founders)</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 border-l border-zinc-200 pl-6 text-xs text-zinc-600">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Enterprise SLA &amp; IP Protection</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Column: Seamless Pro 3D Canvas with Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative"
          >
            <div className="relative w-full max-w-[490px] xl:max-w-[530px] aspect-square flex items-center justify-center">
              
              {/* Backing Ambient Radial Glow Effect */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.14),rgba(234,88,12,0.12),transparent_70%)] rounded-full blur-2xl" />

              {/* Floating Top-Right Glass Card: Performance & Uptime */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 -right-4 z-20 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 px-4 py-3 shadow-xl shadow-zinc-950/5 select-none hover:scale-105 transition-transform"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 shadow-xs">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-extrabold text-zinc-900">Sub-Second Speed</span>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-500 mt-0.5">Next.js 15 &amp; React 19</span>
                </div>
              </motion.div>

              {/* Floating Bottom-Left Glass Card: AI Agents & Pipeline */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute bottom-4 -left-6 z-20 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 px-4 py-3 shadow-xl shadow-zinc-950/5 select-none hover:scale-105 transition-transform"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-xs">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-xs font-extrabold text-zinc-900">AI Agents &amp; RAG</span>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-500 mt-0.5">GPT-4o &amp; Claude 3.5 Engine</span>
                </div>
              </motion.div>

              {/* Floating Bottom-Right Metric Pill */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-2 right-6 z-20 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-xl border border-zinc-200/90 px-4 py-2 shadow-lg shadow-zinc-950/5 select-none"
              >
                <Smartphone className="h-3.5 w-3.5 text-orange-600" />
                <span className="text-[11px] font-bold text-zinc-800">60 FPS Native Mobile</span>
              </motion.div>

              {/* Floating 3D Isometric Lottie Model */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer"
              >
                <Lottie
                  animationData={landingAnimation}
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.12))" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
