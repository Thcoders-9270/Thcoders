"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/data/blog"

export default function BlogPostPage() {
  const params = useParams()
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.04),transparent_50%)]" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 mb-4">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">{post.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
              <span>By {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 mb-12" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-lg leading-relaxed text-zinc-400">{post.excerpt}</p>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-400">
              <p>This is a sample blog post. In a production site, this would contain the full article content with rich formatting, code snippets, images, and more.</p>
              <h2 className="text-2xl font-semibold text-white mt-8">Section Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h2 className="text-2xl font-semibold text-white mt-8">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>First important point from the article</li>
                <li>Second important point with additional context</li>
                <li>Third point that summarizes the conclusion</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
