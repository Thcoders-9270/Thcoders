"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { categorizedServices } from "@/data/cgt-services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { cn } from "@/lib/utils";

export function ExpandedServicesTabSection() {
  const [activeTab, setActiveTab] = useState(categorizedServices[0].title);

  const activeCategory = categorizedServices.find((c) => c.title === activeTab);

  return (
    <section className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-200/80 relative overflow-hidden" id="services-expanded">
      {/* High-end subtle tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Ambient top glow matching the border */}
      <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      {/* Soft radial glow behind the title */}
      <div className="absolute left-1/2 -top-[200px] -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-4 backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            Specialized Capabilities
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight"
          >
            Explore Our <span className="text-gradient">Technology Verticals</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed"
          >
            From modern web frameworks to native mobile architectures, AI integrations, and cloud infrastructure.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categorizedServices.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative select-none",
                activeTab === cat.title
                  ? "text-white shadow-md shadow-zinc-900/10"
                  : "text-zinc-600 bg-white border border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900"
              )}
            >
              {activeTab === cat.title && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 bg-zinc-900 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Animated Solution Cards Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {activeCategory?.items.map((item, index) => (
                <Link key={item.id} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="group relative flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-3xl p-7 sm:p-8 shadow-xs hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div>
                      {/* Top icon and badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:scale-105 group-hover:border-orange-200 transition-all duration-300 p-2.5">
                          <ServiceIcon name={item.icon} className="h-full w-full object-contain" />
                        </div>

                        <div className="h-8 w-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors duration-200 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-600 leading-relaxed line-clamp-2 mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-orange-600">
                      <span>Explore Technical Scope</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
