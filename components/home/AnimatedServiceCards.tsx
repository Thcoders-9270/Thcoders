"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Sparkles, Code2, Smartphone, Brain, Box, Shield, Cloud, ArrowUpRight } from "lucide-react"
import { services } from "@/data/services"

const serviceCategories = [
  {
    id: "web",
    name: "Web Development",
    icon: Code2,
    badge: "Full-Stack & SSR",
    title: "Web Engineering & SaaS Platforms",
    description: "Lightning-fast, SEO-optimized web applications and scalable customer portals built with React, Next.js 15, and TypeScript.",
    href: "/services/nextjs-development",
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    highlights: ["React Server Components & SSR", "Sub-second First Contentful Paint", "Micro-frontend & Modular Architecture", "100% Type-Safe APIs"],
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    icon: Smartphone,
    badge: "iOS & Android",
    title: "Cross-Platform & Native Mobile",
    description: "Fluid 60fps native mobile apps for iOS and Android with offline-first synchronization and tactile gesture interactions.",
    href: "/services/react-native",
    technologies: ["React Native", "Expo EAS", "Swift", "Kotlin", "Flutter", "WatermelonDB"],
    highlights: ["Single Codebase for iOS & Android", "Native Hardware Integrations", "Offline-First Data Synchronization", "Automated App Store CI/CD"],
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: Brain,
    badge: "LLMs & RAG",
    title: "AI Agents & Intelligent Systems",
    description: "Custom enterprise AI pipelines, autonomous workflow agents, and vector search RAG systems powered by OpenAI & Claude.",
    href: "/services/openai-integration",
    technologies: ["OpenAI GPT-4o", "Claude 3.5", "LangChain", "Pinecone", "pgvector", "Python"],
    highlights: ["Custom RAG Knowledge Retrieval", "Autonomous Task-Execution Agents", "Token Cost Optimization (-70%)", "Zero-Data-Retention Security"],
  },
  {
    id: "3d",
    name: "3D & Creative",
    icon: Box,
    badge: "Real-Time 3D",
    title: "3D Worlds & Interactive Graphics",
    description: "Cinematic real-time 3D models, architectural visualizations, and immersive WebGL experiences engineered for high conversion.",
    href: "/services/3d-design",
    technologies: ["Three.js", "Blender", "Unreal Engine 5", "Spline", "WebGL", "GLSL Shaders"],
    highlights: ["Real-time WebGL & Three.js", "Photorealistic Product Renders", "Interactive 3D Showcases", "Optimized Asset Compression"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    badge: "Infrastructure",
    title: "Cloud Architecture & Scalability",
    description: "Resilient serverless and containerized cloud setups on AWS with automated CI/CD deployment pipelines and 99.99% uptime.",
    href: "/services/aws",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Redis", "GitHub Actions"],
    highlights: ["Auto-Scaling Serverless Clusters", "Zero-Downtime CI/CD Pipelines", "Edge Caching & CDN Optimization", "SOC-2 & Enterprise Compliance"],
  },
]

export function AnimatedServiceCards() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  const activeService = serviceCategories[activeTab]

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden" ref={ref}>
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,88,12,0.02),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-4 backdrop-blur-md">
              <Sparkles className="h-3 w-3" />
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Engineering solutions built for <span className="text-gradient">modern scale</span>
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              We provide full-lifecycle technical execution across web, mobile, AI systems, and cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-orange-600 transition-colors"
            >
              <span>Explore all services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-start gap-2.5 mb-10 pb-2">
          {serviceCategories.map((cat, index) => {
            const isActive = activeTab === index
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 select-none ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 scale-102"
                    : "bg-zinc-100/80 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-orange-400" : "text-zinc-500"}`} />
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Featured Service Interactive Hero Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden"
            >
              {/* Radial glow highlight */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* Left Column: Service Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200/80 px-3.5 py-1 text-xs font-semibold text-orange-600 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                    {activeService.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                    {activeService.title}
                  </h3>

                  <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
                    {activeService.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeService.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-700">
                        <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badge strip */}
                  <div className="pt-4 border-t border-zinc-200/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2.5">
                      Core Stack &amp; Frameworks
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeService.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white border border-zinc-200/80 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href={activeService.href}
                      className="clay-btn clay-btn-primary inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-semibold group shadow-md shadow-orange-500/10"
                    >
                      <span>Explore {activeService.name} Details</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Visual Feature Box */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="w-full rounded-2xl bg-white border border-zinc-200/80 p-8 shadow-xl relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-xs">
                        <activeService.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Enterprise SLA</span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                        <div className="text-xs font-bold text-zinc-900">Dedicated Engineering Pod</div>
                        <div className="text-xs text-zinc-500 mt-1">Direct access to technical lead and senior devs.</div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                        <div className="text-xs font-bold text-zinc-900">Sprint Cadence &amp; Live Demos</div>
                        <div className="text-xs text-zinc-500 mt-1">Bi-weekly milestones, review builds, and transparent roadmap.</div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                        <div className="text-xs font-bold text-zinc-900">100% Code &amp; IP Transfer</div>
                        <div className="text-xs text-zinc-500 mt-1">Complete repository ownership from day one.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3-Column Quick Overview Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories.slice(0, 3).map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-zinc-200/80 p-6 shadow-xs hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500 line-clamp-2">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-orange-600 font-semibold">
                <span>View Scope</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
