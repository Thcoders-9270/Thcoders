"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Target, Rocket } from "lucide-react"
import Link from "next/link"

const aiServices = [
  {
    icon: Brain,
    title: "AI Model Training",
    description: "Custom machine learning models trained on your data to deliver actionable insights and automation.",
  },
  {
    icon: Zap,
    title: "LLM Integration",
    description: "Seamlessly integrate GPT-4, Claude, and open-source models into your enterprise systems.",
  },
  {
    icon: Target,
    title: "RAG Solutions",
    description: "Retrieval-Augmented Generation for accurate, context-aware AI responses from your knowledge base.",
  },
  {
    icon: Rocket,
    title: "AI Automation",
    description: "Intelligent automation workflows that learn and adapt to optimize business processes.",
  },
]

export function AIDevelopmentSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-orange-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
            AI Development
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
            AI-Driven Software Development for <span className="text-gradient">Enterprises & Startups</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Harness the power of artificial intelligence to transform your business. From custom model training to seamless LLM integration, we build intelligent solutions that drive real results.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-indigo-600 px-8 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-orange-500/25"
          >
            More About Us
          </Link>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clay-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-indigo-100 text-orange-600">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
