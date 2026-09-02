"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, ExternalLink, Globe, ShieldCheck, CheckCircle2 } from "lucide-react"
import { portfolioItems } from "@/data/portfolio"

interface ProjectDetail {
  slug: string
  title: string
  tagline: string
  category: string
  year: number | string
  tags: string[]
  image: string
  liveUrl?: string
  gallery: string[]
  background: string
  challenges: string
  outcome: string
  metrics?: { label: string; value: string }[]
}

const detailedProjectsMap: Record<string, Partial<ProjectDetail>> = {
  "teemsetu": {
    year: 2026,
    liveUrl: "https://teemsetu.in",
    background: "TeemSetu is an all-in-one workforce management SaaS platform engineered to eliminate organizational fragmentation. It centralizes employee directory management, automated attendance with geofencing, multi-tier payroll processing, leave policies, and sprint task tracking into one unified, ultra-fast interface.",
    challenges: "Developing a highly secure, multi-tenant RBAC (Role-Based Access Control) architecture for Super Admins, HR managers, and employees. The system required automated tax compliance, instant salary slip generation, and real-time attendance telemetry with 99.9% uptime guarantees.",
    outcome: "Delivered a world-class enterprise suite currently trusted by 500+ companies managing 10,000+ employees worldwide. TeemSetu reduced administrative overhead by over 45% and streamlined month-end payroll processing from days into minutes.",
    metrics: [
      { label: "Employees Managed", value: "10,000+" },
      { label: "Companies Active", value: "500+" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Data Security", value: "100%" },
    ],
    gallery: [
      "/images/portfolio/crm1.png",
      "/images/portfolio/crm2.png",
    ],
  },
  "smart-factory-3d": {
    year: 2026,
    background: "This automated smart factory visualization project was commissioned to showcase next-generation industrial manufacturing logistics. The client required a hyper-realistic spatial model demonstrating autonomous robotic forklift (AGV) navigational pathing, automated battery charging stations, and optimized warehouse throughput.",
    challenges: "Simulating physical lighting conditions across sprawling warehouse square-footage with thousands of metallic surface reflections and intricate mechanical geometry without compromising render clarity or depth fidelity.",
    outcome: "Delivered stunning photorealistic 3D architectural CGI renders with custom PBR shader textures, volumetric atmospheric dust, and physically accurate raytraced lighting that successfully closed multi-million dollar industrial automation contracts.",
    gallery: [
      "/images/interiors/PUB_INT-FACTORY-LS-2283-SC-C003_NAV_P02.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2284-SC-C003_NAV_P01.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2284-SC-C007_ROBOT_FORKLIFT_01_DET.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2283-SC-C004_BATTERY_MERAMIN_01_DET.png",
    ],
  },
  "lecture-hall-3d": {
    year: 2025,
    background: "Designed for a world-class university engineering department, this architectural interior visualization demonstrates acoustic-optimized multi-tier lecture theaters equipped with integrated presenter telemetry and smart AV systems.",
    challenges: "Balancing complex amphitheater line-of-sight acoustics with modern ergonomic seating, complex stepped lighting tracks, and warm wooden acoustic panel finishes.",
    outcome: "Produced cinematic architectural renders capturing both daytime natural illumination and focused night presentation stage moods, setting a new benchmark for institutional spatial design.",
    gallery: [
      "/images/interiors/PUB_INT-LECTURE_HALL-LS-3346-SC-C003_NAV_P02.png",
      "/images/interiors/PUB_INT-LECTURE_HALL-LS-2595-SC-C005_LAPTOP_01_DET.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2581-SC-C001_PL_NAV_WP02.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2959-SC-C003_NAV_P02.png",
    ],
  },
  "mall-corridor-360": {
    year: 2026,
    background: "A flagship commercial retail center visualization featuring double-height glass atrium facades, luxury flagship storefronts, and multi-story open-air pedestrian promenades.",
    challenges: "Achieving seamless 360-degree panoramic realism with intricate glass refraction, marble tile reflections, and dynamic sunlight angle simulations across skylight ceilings.",
    outcome: "Enabled commercial leasing teams to pre-lease 92% of retail capacity ahead of physical groundbreaking with immersive 360 virtual walkthrough assets.",
    gallery: [
      "/images/interiors/PUB_INT-MALL_CORRIDOR-LS-2278-SC-C002_360.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2585-SC-C002_360.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2283-SC-C003_NAV_P02.png",
    ],
  },
  "smart-classroom-3d": {
    year: 2025,
    background: "A modular, future-ready collaborative learning facility engineered for high-engagement STEM coursework, interactive whiteboard screens, and flexible breakout zones.",
    challenges: "Designing multi-configuration modular furniture layouts with photorealistic PBR material textures that retain physical tactile warmth.",
    outcome: "Delivered ultra-clean spatial renders highlighting ergonomic comfort, acoustic perimeter paneling, and optimized daylight distribution.",
    gallery: [
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2581-SC-C001_PL_NAV_WP02.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2583-SC-C004_DESK_01_DET.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2583-SC-C009_CHAIR_01_DET.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2959-SC-C005_DESK_01_DET.png",
    ],
  },
  "robotics-warehouse-3d": {
    year: 2026,
    background: "High-precision mechanical rendering of automated robotic material handling systems within advanced fulfillment logistics centers.",
    challenges: "Precision CAD model optimization, physically accurate metallic finishes, safety hazard laser indicators, and hydraulic mechanical components.",
    outcome: "Created high-fidelity detail renders celebrating engineering precision and autonomous robotic innovation for technical pitch decks.",
    gallery: [
      "/images/interiors/PUB_INT-FACTORY-LS-2284-SC-C007_ROBOT_FORKLIFT_01_DET.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2283-SC-C004_BATTERY_MERAMIN_01_DET.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2283-SC-C003_NAV_P02.png",
    ],
  },
  "grateful-marketing": {
    year: 2025,
    liveUrl: "https://gratefulmarketing.com",
    background: "Grateful Marketing™ is a North American digital consultancy bridging genuine human connection and cutting-edge autonomous AI technology.",
    challenges: "Translating the concept of 'Human-First AI' into a visual, conversion-optimized web experience with custom dark-mode glassmorphism and sub-second load times.",
    outcome: "Delivered a bespoke web platform that increased qualified enterprise lead generation and strategy session bookings by over 180%.",
    gallery: [
      "/images/portfolio/g1.png",
      "/images/portfolio/g2.png",
    ],
  },
  "blinkbond": {
    year: 2025,
    liveUrl: "https://play.google.com/store/apps",
    background: "BlinkBond is a location-based mobile dating app that eliminates endless swipe fatigue with an innovative 24-hour match expiration countdown.",
    challenges: "Building tactile 60fps gesture physics, instant WebSockets match notifications, and location geofencing while preserving high battery efficiency.",
    outcome: "Achieved viral user retention with real-life meetup conversions significantly outpacing traditional dating applications.",
    gallery: [
      "/images/portfolio/b1.png",
    ],
  },
  "zenith-exterior-3d": {
    year: 2026,
    background: "A landmark commercial tower exterior visualization highlighting parametric glass facade curtain walls, sky garden terraces, and dynamic urban skyline lighting.",
    challenges: "Simulating intricate atmospheric depth, reflective glass distortion, and sunset golden hour illumination across 60 floors of architectural geometry.",
    outcome: "Enabled international real-estate developers to generate immense investor anticipation and municipal architectural approval.",
    gallery: [
      "/images/portfolio/native3d.jpg",
      "/images/portfolio/native3d-2.jpg",
    ],
  },
}

export default function PortfolioDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  // Look up portfolio item from base data (supporting legacy 'nexus-crm' as alias to 'teemsetu')
  const actualSlug = slug === "nexus-crm" ? "teemsetu" : slug
  const baseItem = portfolioItems.find((p) => p.id === actualSlug)
  if (!baseItem) return notFound()

  // Merge with rich custom details
  const customDetail = detailedProjectsMap[actualSlug] || {}
  
  const project: ProjectDetail = {
    slug: baseItem.id,
    title: customDetail.title || baseItem.title,
    tagline: customDetail.tagline || baseItem.description,
    category: baseItem.category,
    year: customDetail.year || 2025,
    tags: baseItem.tags,
    image: baseItem.image,
    liveUrl: customDetail.liveUrl || baseItem.liveUrl,
    metrics: customDetail.metrics,
    gallery: customDetail.gallery || [baseItem.image],
    background: customDetail.background || `${baseItem.title} was engineered by THCoders to solve complex digital challenges through superior design, cutting-edge technology, and rigorous execution.`,
    challenges: customDetail.challenges || `Designing a solution that delivers exceptional visual aesthetics while meeting strict performance, responsiveness, and architectural scalability requirements.`,
    outcome: customDetail.outcome || `Delivered a world-class production product that exceeded stakeholder expectations and established new industry benchmarks in user experience and engineering quality.`,
  }

  const currentIndex = portfolioItems.findIndex((p) => p.id === actualSlug)
  const prevItem = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null
  const nextItem = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-zinc-950 text-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,88,12,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to All Portfolios
              </Link>
            </motion.div>

            {project.liveUrl && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-5 py-2.5 rounded-full shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 active:scale-95"
                >
                  <Globe className="h-4 w-4" />
                  <span>View Live Site</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 px-3.5 py-1 text-xs font-bold text-orange-400">
                <Sparkles className="h-3 w-3" />
                {project.category}
              </span>
              <span className="text-zinc-500 text-xs">&middot;</span>
              <span className="text-zinc-400 text-xs font-semibold">{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Main Showcase Hero Media */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black aspect-[16/10] relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Metrics Banner (If Available) */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="bg-white border-b border-zinc-200/80 py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900">{m.value}</div>
                  <div className="text-xs text-zinc-500 font-semibold mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Deep Dive */}
      <section className="py-16 sm:py-24 bg-zinc-50/60 border-t border-zinc-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Background Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">Project Background &amp; Vision</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              {project.background}
            </p>
          </motion.div>

          {/* Challenges Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-indigo-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">Technical Challenges &amp; Innovation</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              {project.challenges}
            </p>
          </motion.div>

          {/* Outcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">Key Outcomes &amp; Delivery</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              {project.outcome}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery Showcase */}
      {project.gallery.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-t border-zinc-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block mb-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                Visual Assets
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
                Project Gallery &amp; Interface Details
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={src + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-950 aspect-[16/10] shadow-sm hover:shadow-xl transition-all"
                >
                  <Image
                    src={src}
                    alt={`${project.title} render ${i + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next / Previous Navigation */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {prevItem ? (
            <Link
              href={`/portfolio/${prevItem.id}`}
              className="group inline-flex items-center gap-3 text-sm text-zinc-700 hover:text-orange-600 transition-colors"
            >
              <div className="h-9 w-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-xs group-hover:border-orange-200">
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] text-zinc-400 font-semibold uppercase">Previous</span>
                <span className="font-bold">{prevItem.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextItem ? (
            <Link
              href={`/portfolio/${nextItem.id}`}
              className="group inline-flex items-center gap-3 text-sm text-zinc-700 hover:text-orange-600 transition-colors text-right"
            >
              <div>
                <span className="block text-[11px] text-zinc-400 font-semibold uppercase">Next Project</span>
                <span className="font-bold">{nextItem.title}</span>
              </div>
              <div className="h-9 w-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-xs group-hover:border-orange-200">
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  )
}
