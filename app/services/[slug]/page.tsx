"use client"

import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Clock, 
  Code2, 
  Cpu, 
  Workflow, 
  Flame,
  Star
} from "lucide-react"
import { getServiceDetails } from "@/lib/service-details"
import { categorizedServices } from "@/data/cgt-services"
import { services } from "@/data/services"

export default function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = getServiceDetails(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-zinc-50/70 border-b border-zinc-200/80">
        {/* Background Grid & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Category & Tech Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50/80 px-3.5 py-1.5 text-xs font-semibold text-orange-600 shadow-xs mb-6 backdrop-blur-md"
            >
              {service.icon && (
                <div className="relative h-4 w-4 shrink-0">
                  <Image src={service.icon} alt="" fill className="object-contain" />
                </div>
              )}
              <span>{service.category}</span>
              <span className="text-orange-300">&middot;</span>
              <span className="text-zinc-700">{service.title}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]"
            >
              {service.headline}
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl"
            >
              {service.longDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                target="_blank"
                className="clay-btn clay-btn-primary inline-flex h-12 items-center justify-center gap-2 px-8 text-sm font-semibold shadow-lg shadow-orange-500/15 group"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#pricing"
                className="clay-btn inline-flex h-12 items-center justify-center gap-2 px-8 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
              >
                View Pricing Tiers
              </Link>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {service.stats.map((stat, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200/80 bg-white/80 backdrop-blur-md p-6 shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient">{stat.value}</div>
                <div className="mt-1.5 text-xs sm:text-sm font-medium text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES SECTION */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 mb-3">
              Capabilities &amp; Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              End-to-End {service.title} Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600">
              We cover every phase of your project lifecycle with precision architecture, clean code standards, and cutting-edge tooling.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-block rounded-full bg-zinc-200/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-700">
                      {cap.tag}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors duration-200">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center gap-2 text-xs font-semibold text-orange-600">
                  <span>Production Ready</span>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING PROCESS / WORKFLOW */}
      <section className="py-24 sm:py-32 bg-zinc-50/70 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 mb-3">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Our Proven Engineering Lifecycle
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600">
              A transparent, agile workflow designed to deliver battle-tested code with predictable speed and zero surprises.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step, i) => (
              <div 
                key={i} 
                className="relative flex flex-col justify-between rounded-2xl bg-white border border-zinc-200/80 p-6 shadow-xs hover:border-orange-300 transition-colors"
              >
                <div>
                  <div className="text-2xl font-black text-orange-500/80 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Deliverable</span>
                  <span className="text-xs font-semibold text-zinc-800">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK ECOSYSTEM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-orange-600">Ecosystem</span>
                <h3 className="text-2xl font-bold text-zinc-900 mt-2">Compatible Technologies &amp; Tools</h3>
                <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                  We integrate seamlessly with modern stacks, cloud providers, and development tools to ensure continuous synergy.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-wrap gap-2.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-xs hover:border-orange-300 hover:text-orange-600 transition-colors"
                  >
                    <Code2 className="h-4 w-4 text-orange-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY THCODERS FOR THIS SERVICE */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 mb-3">
                The THCoders Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Why Industry Leaders Choose Us for <span className="text-gradient">{service.title}</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                We combine deep technical mastery with product intuition. You gain a dedicated team of builders focused on high performance, clean maintainable code, and tangible ROI.
              </p>

              <div className="mt-10 space-y-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-zinc-900">{benefit.title}</h4>
                      <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card Callout */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-12 text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Flame className="h-48 w-48 text-orange-500" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Premium Delivery Guarantee
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Ready to scale your next digital product?</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Connect directly with our technical leads. We'll audit your current architecture or scope your greenfield build with complete transparency.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                    target="_blank"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-zinc-900 hover:bg-zinc-100 transition-all shadow-lg active:scale-95"
                  >
                    Book a Discovery Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-zinc-50/70 border-t border-zinc-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Everything you need to know about our {service.title} engagement model and process.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200/80 bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-bold text-zinc-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 via-purple-600 to-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build with THCoders?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            Let's turn your ideas into high-performing reality. Get in touch with our team today.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
              target="_blank"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-zinc-900 hover:bg-zinc-100 transition-all shadow-xl active:scale-95"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
