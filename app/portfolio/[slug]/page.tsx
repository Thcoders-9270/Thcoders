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
  "my-little-home": {
    year: 2026,
    liveUrl: "https://test.mylittlehome.com.sa/",
    background: "My Little Home (بيتي الصغير) is a premium Saudi Arabian retail brand specializing in luxury bed linens, pillows, and home comfort essentials. They needed a sophisticated e-commerce platform that reflects the high quality of their 'pure materials, pure comfort' (مواد نقية، راحة خالصة) philosophy while providing a seamless bilingual shopping experience.",
    challenges: "Building a high-performance, RTL-optimized (Right-to-Left) e-commerce storefront that supports seamless Arabic and English localization. The platform required complex product variant management for bedding sizes and colors, integrated secure payment gateways, and a frictionless checkout process to maximize conversion rates.",
    outcome: "Launched a visually stunning and highly responsive digital storefront that elevated the brand's online presence. The new platform significantly improved page load speeds, reduced cart abandonment, and provided an intuitive mobile-first shopping experience that drove a substantial increase in online sales.",
    metrics: [
      { label: "Increase in Mobile Conversions", value: "+45%" },
      { label: "Page Load Speed", value: "< 1.5s" },
      { label: "Active Products", value: "500+" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    gallery: [
      "/images/portfolio/l1.png",
      "/images/portfolio/l2.png",
    ],
  },
  "smart-factory-3d": {
    year: 2026,
    background: "This automated smart factory visualization project was commissioned to showcase next-generation industrial manufacturing logistics. The client required a hyper-realistic spatial model demonstrating autonomous robotic forklift (AGV) navigational pathing, automated battery charging stations, and optimized warehouse throughput.",
    challenges: "Simulating physical lighting conditions across sprawling warehouse square-footage with thousands of metallic surface reflections and intricate mechanical geometry without compromising render clarity or depth fidelity.",
    outcome: "Delivered stunning photorealistic 3D architectural CGI renders with custom PBR shader textures, volumetric atmospheric dust, and physically accurate raytraced lighting that successfully closed multi-million dollar industrial automation contracts.",
    gallery: [
      "/images/interiors/360/factory-sortation-robotics-360-01.png",
      "/images/interiors/360/factory-chemical-processing-bay-360-02.png",
      "/images/interiors/PUB_INT-FACTORY-LS-2283-SC-C003_NAV_P02.png",
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
      "/images/interiors/360/lecture-hall-tiered-amphitheater-360-01.png",
      "/images/interiors/360/lecture-hall-curved-wood-arch-360-05.png",
      "/images/interiors/360/lecture-hall-forest-green-tiered-360-08.png",
      "/images/interiors/360/lecture-hall-blue-seating-campus-360-09.png",
      "/images/interiors/360/lecture-hall-wood-canopy-360-06.png",
      "/images/interiors/360/lecture-hall-podium-view-360-02.png",
      "/images/interiors/PUB_INT-LECTURE_HALL-LS-3346-SC-C003_NAV_P02.png",
      "/images/interiors/PUB_INT-LECTURE_HALL-LS-2595-SC-C005_LAPTOP_01_DET.png",
    ],
  },
  "mall-corridor-360": {
    year: 2026,
    background: "A flagship commercial retail center visualization featuring double-height glass atrium facades, luxury flagship storefronts, and multi-story open-air pedestrian promenades.",
    challenges: "Achieving seamless 360-degree panoramic realism with intricate glass refraction, marble tile reflections, and dynamic sunlight angle simulations across skylight ceilings.",
    outcome: "Enabled commercial leasing teams to pre-lease 92% of retail capacity ahead of physical groundbreaking with immersive 360 virtual walkthrough assets.",
    gallery: [
      "/images/interiors/360/mall-atrium-promenade-360-01.png",
      "/images/interiors/360/mall-storefronts-retail-360-02.png",
      "/images/interiors/360/mall-smartphone-boutique-360-03.png",
      "/images/interiors/PUB_INT-MALL_CORRIDOR-LS-2278-SC-C002_360.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2585-SC-C002_360.png",
    ],
  },
  "smart-classroom-3d": {
    year: 2025,
    background: "A modular, future-ready collaborative learning facility engineered for high-engagement STEM coursework, interactive whiteboard screens, and flexible breakout zones.",
    challenges: "Designing multi-configuration modular furniture layouts with photorealistic PBR material textures that retain physical tactile warmth.",
    outcome: "Delivered ultra-clean spatial renders highlighting ergonomic comfort, acoustic perimeter paneling, and optimized daylight distribution.",
    gallery: [
      "/images/interiors/360/smart-classroom-world-map-360-01.png",
      "/images/interiors/360/smart-classroom-parquet-campus-view-360-08.png",
      "/images/interiors/360/smart-classroom-collaborative-pod-360-03.png",
      "/images/interiors/360/smart-classroom-bay-windows-360-02.png",
      "/images/interiors/360/smart-classroom-stem-station-360-04.png",
      "/images/interiors/360/smart-classroom-interactive-whiteboard-360-12.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2581-SC-C001_PL_NAV_WP02.png",
      "/images/interiors/PUB_INT-HS_CLASSROOM-LS-2583-SC-C004_DESK_01_DET.png",
    ],
  },
  "command-center-3d": {
    year: 2026,
    background: "Designed for a metropolitan municipal security authority, this high-tech 360-degree command and control center serves as the nerve center for real-time traffic management, surveillance dispatch, and emergency response telemetry.",
    challenges: "Calibrating dynamic multi-screen illumination from 12-meter video walls with curved anti-glare consoles, realistic glass acoustic partitioning, and subtle reflections across raised technical flooring.",
    outcome: "Delivered photorealistic 360 panoramic visualization that validated operator ergonomics, line-of-sight angles to primary video walls, and executive suite visibility prior to physical fit-out.",
    metrics: [
      { label: "Console Ergonomics", value: "99.4%" },
      { label: "Sightline Obstruction", value: "0.0%" },
      { label: "Video Wall Feeds", value: "24+" },
      { label: "Lighting Simulation", value: "PBR Verified" },
    ],
    gallery: [
      "/images/interiors/360/command-center-mission-control-360-01.png",
      "/images/interiors/360/command-center-operations-hub-360-02.png",
      "/images/interiors/360/command-center-telemetry-suite-360-03.png",
      "/images/interiors/360/command-center-traffic-security-360-04.png",
    ],
  },
  "datacenter-cooling-3d": {
    year: 2026,
    background: "An industrial-grade visualization of a tier-4 hyperscale data center chiller facility and turbine cooling plant engineered to maintain continuous thermal stability for high-density AI server clusters.",
    challenges: "Accurately texturing complex mechanical assets including dual-stage turbine fans, high-voltage conduit runs, overhead cable trays, and insulated industrial chiller piping with realistic metal wear and safety signage.",
    outcome: "Provided the engineering consortium with an immersive architectural proof-of-concept that expedited mechanical approvals and demonstrated optimal maintenance clearance zones.",
    metrics: [
      { label: "Cooling Airflow Fidelity", value: "CFD Aligned" },
      { label: "Mechanical Assets", value: "1,200+" },
      { label: "Shader Accuracy", value: "100% PBR" },
      { label: "Stakeholder Approval", value: "1st Pass" },
    ],
    gallery: [
      "/images/interiors/360/datacenter-turbine-ventilation-360-01.png",
      "/images/interiors/360/datacenter-chiller-infrastructure-360-02.png",
    ],
  },
  "contemporary-gallery-3d": {
    year: 2026,
    background: "A bespoke architectural pavilion created for an international modern art foundation, combining undulating curved white partition walls with expansive daylight integration and museum-grade track illumination.",
    challenges: "Simulating diffuse daylight distribution alongside focused 3000K museum track spotlights without color bleed or blowout, while preserving tactile fidelity on polished Calacatta marble flooring.",
    outcome: "Created a tranquil, sophisticated virtual gallery space that served as the digital twin for international curated exhibitions and virtual vernissage walkthroughs.",
    metrics: [
      { label: "Color Rendering Index", value: "CRI 98+" },
      { label: "Luminance Balance", value: "Balanced" },
      { label: "Exhibition Capacity", value: "35 Artworks" },
      { label: "Virtual Engagement", value: "+210%" },
    ],
    gallery: [
      "/images/interiors/360/art-gallery-exhibition-hall-360-01.png",
    ],
  },
  "broadcast-studio-3d": {
    year: 2026,
    background: "An executive broadcast facility and talk-show studio designed for premier media networks, featuring panoramic curved bay windows overlooking a metropolitan skyline, fluted acoustic timber walls, and intimate stage seating.",
    challenges: "Balancing intense professional broadcast key lighting with high-contrast exterior skyline daylight, avoiding glare on digital broadcast backdrops and managing studio acoustics.",
    outcome: "Delivered a signature broadcast studio aesthetic that blends modern Scandinavian warmth with high-tech media capabilities, adopted as the network's flagship studio design.",
    metrics: [
      { label: "Audio Reverberation", value: "< 0.35s" },
      { label: "Skyline Panorama", value: "180° Curved" },
      { label: "Camera Coverage", value: "6 Angles" },
      { label: "Brand Impact", value: "Flagship" },
    ],
    gallery: [
      "/images/interiors/360/broadcast-studio-panoramic-stage-360-01.png",
      "/images/interiors/360/broadcast-studio-recording-suite-360-02.png",
    ],
  },
  "montessori-learning-3d": {
    year: 2025,
    background: "An early childhood educational environment designed under authentic Montessori principles, featuring organic cloud ceiling contours, kid-accessible wooden shelving, modular hexagonal activity tables, and abundant soft natural daylight.",
    challenges: "Designing child-ergonomic spatial proportions, soft tactile material textures, non-toxic wood shaders, and playful acoustic ceiling baffles that nurture creativity without visual overstimulation.",
    outcome: "Produced an inspiring, welcoming interior visualization that won unanimous praise from educational boards and served as the design standard for 15 upcoming preschool campuses.",
    metrics: [
      { label: "Child Ergonomics", value: "Montessori Std" },
      { label: "Daylight Ingress", value: "+60%" },
      { label: "Acoustic Dampening", value: "-18 dB" },
      { label: "Campuses Commissioned", value: "15" },
    ],
    gallery: [
      "/images/interiors/360/montessori-learning-studio-360-01.png",
      "/images/interiors/360/montessori-kindergarten-classroom-360-02.png",
      "/images/interiors/360/montessori-activity-hub-360-03.png",
      "/images/interiors/360/montessori-play-center-360-04.png",
      "/images/interiors/360/montessori-creative-workshop-360-05.png",
      "/images/interiors/360/montessori-collaborative-zone-360-06.png",
    ],
  },
  "keynote-auditorium-3d": {
    year: 2026,
    background: "A signature corporate auditorium and keynote theater featuring a striking undulating parametric acoustic timber ceiling, multi-level presenter stage with panoramic downtown skyline views, and ergonomic tiered seating.",
    challenges: "Modeling complex curved parametric acoustic baffles with precision light bounce simulations, balancing ambient auditorium illumination with high-lumen keynote presentation displays.",
    outcome: "Set a new global benchmark in institutional auditorium architecture, generating widespread industry coverage and securing flagship client keynote event reservations.",
    metrics: [
      { label: "Seating Capacity", value: "350 Guests" },
      { label: "Acoustic Clarity (STI)", value: "0.82" },
      { label: "Skyline Viewing Angle", value: "160°" },
      { label: "Energy Standard", value: "LEED Gold" },
    ],
    gallery: [
      "/images/interiors/360/auditorium-skyline-view-360-01.png",
      "/images/interiors/360/auditorium-stage-podium-360-02.png",
      "/images/interiors/360/auditorium-keynote-amphitheater-360-03.png",
      "/images/interiors/360/auditorium-executive-hall-360-04.png",
      "/images/interiors/360/auditorium-conference-suite-360-05.png",
    ],
  },
  "penthouse-boardroom-3d": {
    year: 2026,
    background: "A top-floor executive boardroom and international summit suite featuring a custom boat-shaped conference table, Italian leather executive chairs, curved architectural ceiling bulkheads, and sweeping riverfront skyline views.",
    challenges: "Achieving photorealistic daytime sunlight simulation through expansive floor-to-ceiling glass curtain walls with accurate reflections and glare suppression on interactive digital presentation screens.",
    outcome: "Delivered an ultra-prestigious spatial visualization that inspired corporate leadership and served as the definitive architectural blueprint for multinational corporate headquarters.",
    metrics: [
      { label: "Boardroom Capacity", value: "24 Executives" },
      { label: "Panoramic View", value: "270° Riverfront" },
      { label: "AV Integration", value: "Flush Stealth" },
      { label: "Executive Rating", value: "100%" },
    ],
    gallery: [
      "/images/interiors/360/penthouse-boardroom-riverview-360-01.png",
      "/images/interiors/360/penthouse-summit-dais-360-02.png",
      "/images/interiors/360/penthouse-modern-seminar-360-03.png",
      "/images/interiors/360/penthouse-executive-council-360-04.png",
      "/images/interiors/360/penthouse-briefing-room-360-05.png",
      "/images/interiors/360/penthouse-director-suite-360-06.png",
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
  "tuscan-stone-villa-exterior-3d": {
    year: 2026,
    background: "Commissioned for a premier European heritage estate developer, this architectural exterior visualization project captures a luxury rustic stone villa complex nestled in Mediterranean countryside. The client required photorealistic exterior environments showing artisanal stone masonry, weathered timber joinery, cobblestone courtyard paving, and lush landscape integration.",
    challenges: "Simulating weathered natural materials with high-fidelity displacement maps, complex organic foliage shaders for climbing vines and surrounding forest trees, and realistic physical daylighting across varying elevations.",
    outcome: "Delivered stunning photorealistic 3D architectural CGI exterior renders and immersive 360 panoramic walkthrough assets that accelerated private investor presales and architectural conservation permits.",
    metrics: [
      { label: "Material Realism", value: "PBR 8K Textures" },
      { label: "Environmental Coverage", value: "360° Panoramic" },
      { label: "Landscape Assets", value: "450+ Plants" },
      { label: "Investor Approval", value: "100%" },
    ],
    gallery: [
      "/images/exteriors/tuscan-villa-aerial-view.jpg",
      "/images/exteriors/tuscan-villa-courtyard-360.jpg",
      "/images/exteriors/tuscan-villa-panoramic-studio.png",
    ],
  },
  "tuscan-villa-courtyard-360": {
    year: 2026,
    background: "A ground-level 360-degree panoramic architectural visualization of the central courtyard of the Tuscan stone estate, emphasizing pedestrian sightlines, outdoor living spaces, and natural sunlight interaction with rustic stonework.",
    challenges: "Achieving seamless 360-degree spherical perspective without distortion of vertical cottage walls while capturing dynamic shadows from surrounding trees and outdoor furnishings.",
    outcome: "Enabled immersive VR client walkthroughs allowing potential buyers to virtually experience the rustic courtyard ambiance and architectural scale in real time.",
    metrics: [
      { label: "Field of View", value: "360° Spherical" },
      { label: "Lighting Model", value: "Physical Sun & Sky" },
      { label: "Interactive Fidelity", value: "Real-Time Ready" },
      { label: "Buyer Satisfaction", value: "98%" },
    ],
    gallery: [
      "/images/exteriors/tuscan-villa-courtyard-360.jpg",
      "/images/exteriors/tuscan-villa-aerial-view.jpg",
      "/images/exteriors/tuscan-villa-panoramic-studio.png",
    ],
  },
  "tuscan-villa-estate-panorama-3d": {
    year: 2026,
    background: "Environmental architectural study of the stone cottages and courtyard promenade with balanced overcast studio illumination, highlighting material texturing, roof tiling, and architectural volume.",
    challenges: "Preserving fine textural detail in terracotta roof tiles and irregular stonework under diffuse ambient illumination without losing depth perception.",
    outcome: "Provided the architectural design team with critical spatial verification for window shutter placements, porch overhangs, and courtyard circulation paths.",
    metrics: [
      { label: "Shader Calibration", value: "Diffuse Neutral" },
      { label: "Geometric Accuracy", value: "Sub-millimeter" },
      { label: "Design Iterations", value: "Optimized" },
      { label: "Client Delivery", value: "Sign-Off" },
    ],
    gallery: [
      "/images/exteriors/tuscan-villa-panoramic-studio.png",
      "/images/exteriors/tuscan-villa-aerial-view.jpg",
      "/images/exteriors/tuscan-villa-courtyard-360.jpg",
    ],
  },
}

export default function PortfolioDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const actualSlug = slug
  const baseItem = portfolioItems.find((p) => p.id === actualSlug)
  if (!baseItem) return notFound()

  // Resolve parent preset if slug has prefix
  const getParentKey = (s: string) => {
    if (s.startsWith("auditorium")) return "keynote-auditorium-3d"
    if (s.startsWith("command-center")) return "command-center-3d"
    if (s.startsWith("datacenter")) return "datacenter-cooling-3d"
    if (s.startsWith("factory")) return "smart-factory-3d"
    if (s.startsWith("mall")) return "mall-corridor-360"
    if (s.startsWith("montessori")) return "montessori-learning-3d"
    if (s.startsWith("penthouse")) return "penthouse-boardroom-3d"
    if (s.startsWith("lecture-hall")) return "lecture-hall-3d"
    if (s.startsWith("smart-classroom")) return "smart-classroom-3d"
    if (s.startsWith("broadcast-studio")) return "broadcast-studio-3d"
    if (s.startsWith("art-gallery")) return "contemporary-gallery-3d"
    if (s.startsWith("tuscan-villa")) return "tuscan-stone-villa-exterior-3d"
    return null
  }

  const parentKey = getParentKey(actualSlug)
  const parentDetail = parentKey ? detailedProjectsMap[parentKey] : null
  const customDetail = detailedProjectsMap[actualSlug] || parentDetail || {}

  // Build smart gallery: current image first, then sibling images from parent gallery
  const siblingGallery = parentDetail?.gallery || []
  const resolvedGallery = customDetail.gallery && customDetail.gallery.length > 1
    ? customDetail.gallery
    : Array.from(new Set([baseItem.image, ...siblingGallery]))

  const project: ProjectDetail = {
    slug: baseItem.id,
    title: customDetail.title || baseItem.title,
    tagline: customDetail.tagline || baseItem.description,
    category: baseItem.category,
    year: customDetail.year || 2026,
    tags: baseItem.tags,
    image: baseItem.image,
    liveUrl: customDetail.liveUrl || baseItem.liveUrl,
    metrics: customDetail.metrics || parentDetail?.metrics,
    gallery: resolvedGallery,
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
              className="object-cover object-center"
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
