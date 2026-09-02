"use client"

import { motion } from "framer-motion"
import { Cpu, Clock, RefreshCw, Shield, Users, TrendingUp } from "lucide-react"

const devOpsBenefits = [
  {
    icon: Cpu,
    title: "Resource Optimization",
    description: "Maximize efficiency with intelligent resource allocation and cloud infrastructure management.",
  },
  {
    icon: Clock,
    title: "Rapid Software Delivery",
    description: "Accelerate your time-to-market with CI/CD pipelines and automated deployment workflows.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Iterate faster with feedback loops and data-driven optimization strategies.",
  },
  {
    icon: Shield,
    title: "Proactive Security",
    description: "Embed security at every stage with DevSecOps practices and automated compliance checks.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Break down silos between development, operations, and business teams for seamless coordination.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency Through Automation",
    description: "Eliminate manual bottlenecks with intelligent automation and infrastructure-as-code.",
  },
]

export function DevOpsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600">
            DevOps Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
            Business-IT Alignment with <span className="text-gradient">DevOps-Driven Systems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Steer through changes seamlessly, fostering cohesive teamwork and innovation by breaking down traditional barriers between development and operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {devOpsBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clay-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
