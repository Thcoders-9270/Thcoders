"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { blogPosts, blogCategories } from "@/data/blog"
import { PageHeader } from "@/components/shared/PageHeader"
import { cn } from "@/lib/utils"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <>
      <PageHeader title="Our Blog" description="Insights on engineering, design, AI, and building digital products from the THCoders team." />

      <section className="py-16 sm:py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === cat ? "bg-white text-zinc-900" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block rounded-2xl border border-zinc-200 bg-zinc-50/50 overflow-hidden transition-all duration-500 hover:bg-zinc-100 hover:border-zinc-200 hover:-translate-y-1">
                     <div className="aspect-[16/9] bg-gradient-to-br from-orange-100 to-indigo-100" />
                    <div className="p-5">
                      <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">{post.category}</span>
                      <h3 className="mt-3 text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                      <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
