"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react"
import { caseStudies } from "@/data/case-studies"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

export default function CaseStudyDetailPage() {
  const params = useParams()
  const study = caseStudies.find((s) => s.slug === params.slug)
  if (!study) return notFound()

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.04),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag) => (
                <Badge key={tag} className="bg-zinc-100 text-zinc-700 border-0">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">{study.title}</h1>
            <p className="mt-3 text-lg text-zinc-600">Client: <span className="font-medium text-zinc-700">{study.client}</span></p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-orange-100 via-purple-100 to-indigo-100 flex items-center justify-center mb-12">
            <ExternalLink className="h-12 w-12 text-zinc-500" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">The Challenge</h2>
              <p className="text-base leading-relaxed text-zinc-600">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Our Solution</h2>
              <p className="text-base leading-relaxed text-zinc-600">{study.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Results</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50/50 p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-base font-medium text-zinc-900">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
