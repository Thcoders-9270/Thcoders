"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { caseStudies } from "@/data/case-studies"
import { PageHeader } from "@/components/shared/PageHeader"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader title="Case Studies" description="Detailed breakdowns of our most impactful projects and the results we delivered." />

      <section className="py-16 sm:py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block rounded-2xl border border-zinc-200 bg-zinc-50/50 overflow-hidden transition-all duration-500 hover:bg-zinc-100 hover:border-zinc-200 hover:-translate-y-1"
                >
                   <div className="aspect-[16/9] bg-gradient-to-br from-orange-100 to-indigo-100 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-zinc-500" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border-0">{study.tags[0]}</Badge>
                      <span className="text-sm text-zinc-500">Featured</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">{study.title}</h3>
                    <p className="mt-3 text-base text-zinc-600">{study.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600">
                      Read Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
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
