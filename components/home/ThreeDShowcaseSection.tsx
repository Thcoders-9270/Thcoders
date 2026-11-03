"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Box, 
  Boxes,
  Layers, 
  Eye, 
  Compass, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Maximize2,
  Camera,
  Globe
} from "lucide-react"

const capabilities = [
  {
    icon: Boxes,
    title: "3D Models & Moveable Toys",
    badge: "Articulated & Rigged",
    description:
      "Custom 3D modeling for moveable toys, articulated action figures with functional joints, character modeling, and 3D-print-ready manufacturing assets.",
  },
  {
    icon: Compass,
    title: "360° Equirectangular Virtual Tours",
    badge: "VR & Web Ready",
    description:
      "Fully immersive spherical 360° panoramas compatible with VR headsets, Matterport, and interactive WebGL tour players for seamless spatial exploration.",
  },
  {
    icon: Box,
    title: "Photorealistic Interior CGI",
    badge: "8K UHD Render",
    description:
      "Physically based rendering (PBR), true-to-life architectural illumination, accurate material refractions, and custom luxury furnishing layouts.",
  },
  {
    icon: Layers,
    title: "Architectural Exterior Renders",
    badge: "Day & Dusk Elevations",
    description:
      "High-impact masterplan elevations, villa landscaping, facade texturing, and realistic environmental atmospheric lighting for property developments.",
  },
  {
    icon: Globe,
    title: "Real-Time Unreal Engine 5 & WebGL",
    badge: "Interactive Twins",
    description:
      "Real-time architectural walk-throughs, Lumen global illumination, Nanite geometry, and high-performance interactive 3D spatial web scenes.",
  },
]

const showcaseItems = [
  {
    title: "Panoramic Tuscan Courtyard & Villa",
    category: "3D Exterior & 360° Landscape",
    image: "/images/exteriors/tuscan-villa-courtyard-360.jpg",
    tag: "360° Panorama",
    specs: "8K Equirectangular • Stone & Foliage CGI",
    link: "/portfolio?category=3D+Exterior+Visualization",
  },
  {
    title: "Tuscan Estate Elevated Aerial Perspective",
    category: "Architectural Masterplan",
    image: "/images/exteriors/tuscan-villa-aerial-view.jpg",
    tag: "Exterior CGI",
    specs: "PBR Textures • Global Lighting Simulation",
    link: "/portfolio?category=3D+Exterior+Visualization",
  },
  {
    title: "Keynote Amphitheater & Executive Hall",
    category: "Commercial Interior",
    image: "/images/interiors/360/auditorium-executive-hall-360-04.png",
    tag: "Interior CGI",
    specs: "Acoustic Baffles • Tiered Seating Architecture",
    link: "/portfolio?category=3D+Interior+Visualization",
  },
  {
    title: "Command Center Mission Control Hub",
    category: "Enterprise Interior",
    image: "/images/interiors/360/command-center-mission-control-360-01.png",
    tag: "Enterprise Spatial",
    specs: "Multi-Screen Array • Ergonomic Console Layout",
    link: "/portfolio?category=3D+Interior+Visualization",
  },
]

export function ThreeDShowcaseSection() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-amber-50/20 to-white overflow-hidden">
      {/* Background Ambience Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-orange-400/10 via-amber-300/10 to-transparent blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-400/5 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16 border-b border-zinc-200/80">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50/80 px-3.5 py-1 text-xs font-bold text-orange-600 mb-4 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>3D Models, Moveable Toys &amp; Spatial CGI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
              Photorealistic 3D Modeling, <br className="hidden sm:inline" />
              <span className="text-gradient">Moveable Toys &amp; Architectural CGI</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              From custom moveable toys, articulated action figures, and high-precision 3D models to photorealistic architectural interior/exterior CGI and 360° VR-compatible virtual walk-throughs. Engineered by senior 3D artists with 7+ years of modeling, rigging, and raytracing precision.
            </p>
          </motion.div>

          {/* Quick CTA to Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 shrink-0"
          >
            <Link
              href="/portfolio?category=3D+Interior+Visualization"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white shadow-md hover:bg-zinc-800 transition-all hover:scale-[1.02]"
            >
              <span>Explore 3D Portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-all"
            >
              Request 3D CGI Quote
            </Link>
          </motion.div>
        </div>

        {/* 5 Core Capabilities Grid */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="clay-card p-6 flex flex-col justify-between group hover:border-orange-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200/60 rounded-full px-2.5 py-0.5">
                    {cap.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-semibold text-zinc-500">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Production-grade deliverable</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Showcase Gallery Preview */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Featured Renders</span>
              <h3 className="text-2xl font-bold text-zinc-900 mt-1">Spatial CGI Highlights</h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-zinc-500">
              <Eye className="h-4 w-4 text-orange-600" />
              <span>Click any project to view full architectural details</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-zinc-900 shadow-xs">
                      <Camera className="h-3 w-3 text-orange-600" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Top Right Quick Icon */}
                  <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-medium text-orange-300 uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h4 className="text-sm font-bold line-clamp-1 text-white group-hover:text-orange-200 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Card Lower Specs & Link */}
                <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                  <p className="text-xs text-zinc-500 font-medium">
                    {item.specs}
                  </p>
                  
                  <Link
                    href={item.link}
                    className="mt-3 inline-flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700 pt-2 border-t border-zinc-100"
                  >
                    <span>View in 3D Gallery</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Capabilities Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-orange-200/70 bg-gradient-to-r from-orange-50/80 via-white to-amber-50/80 p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-orange-200/50">
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1">Moveable Joints &amp; Rigging</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">76+</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1">360° Interior Renders</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">8K UHD</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1">Equirectangular &amp; CGI</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">7+ Years</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1">Photorealistic CGI &amp; Toys</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

