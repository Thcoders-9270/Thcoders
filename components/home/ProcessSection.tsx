"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, RefreshCw, Sliders, PauseCircle, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Scope",
    heading: "Start your project with a clear roadmap",
    description: "Share your project requirements and get a detailed scope and timeline. We break down complex projects into clear milestones for better tracking and delivery.",
    features: ["Detailed project scoping", "Clear milestone tracking", "Regular progress updates", "Expert team across all technologies"],
    mockup: "progress",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Revise",
    heading: "Revise until you're totally satisfied",
    description: "Our amendment approach is straightforward — we polish and adjust until you're wholly pleased with the final outcome. No concealed charges, no bounds on adjustments, no inquiries made.",
    features: [],
    mockup: "cards",
  },
  {
    number: "03",
    icon: Sliders,
    title: "Flexibility",
    heading: "Flexible engagement models",
    description: "Select from per-hour charges or set-cost tasks depending on your requirements. Receive precise cost forecasts from the get-go and adjust your team count in line with your project's necessities.",
    features: [],
    mockup: null,
  },
  {
    number: "04",
    icon: PauseCircle,
    title: "Pause or cancel",
    heading: "Pause or cancel anytime",
    description: "The flexibility of our service sets THCoders apart as an exceptional design partner. Choose to maintain your subscription to meet ongoing design needs, or simply cancel when your design requirements are fulfilled.",
    features: [],
    mockup: null,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 sm:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600">
            How we work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Our agile development process breaks down{" "}
            <span className="text-gradient">complex projects</span> into manageable milestones for efficient delivery.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={stepVariants} className="group">
              <div className="clay-card p-6 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-purple-100 text-orange-600 mb-4">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold tracking-wider text-orange-600/60">{step.number}</span>
                  <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                </div>
                <h4 className="text-sm font-medium text-zinc-700 mb-2">{step.heading}</h4>
                <p className="text-sm leading-relaxed text-zinc-600">{step.description}</p>
                {step.features.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {step.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-zinc-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
