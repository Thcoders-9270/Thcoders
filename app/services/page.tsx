"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { services } from "@/data/services"
import { PageHeader } from "@/components/shared/PageHeader"
import { ServiceIcon } from "@/components/icons/ServiceIcon"

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="We deliver comprehensive tech solutions across web, mobile, game development, design, AI, and marketing — combining cutting-edge technologies with industry expertise."
      />

      <section className="relative py-20 sm:py-28 bg-zinc-50/60 overflow-hidden border-b border-zinc-200/80">
        <div className="absolute inset-0">
          <Image
            src="/images/services/service-hero-1.png"
            alt=""
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
              Building products that make a{" "}
              <span className="text-gradient">difference</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              From strategy to execution, we deliver end-to-end solutions across the entire product lifecycle. Click on any capability below to explore in-depth architectural details.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                        <ServiceIcon name={service.icon} className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center text-xs font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore &rarr;
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-500 line-clamp-3">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-zinc-100 pt-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-zinc-600">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-orange-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                    <span className="font-medium text-zinc-400">Production Ready</span>
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
