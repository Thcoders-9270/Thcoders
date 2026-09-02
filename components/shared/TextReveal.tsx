"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
  children: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
  delay?: number
}

function splitText(text: string) {
  return text.split(" ").map((word, i) => ({
    word,
    key: `${word}-${i}`,
  }))
}

export function TextReveal({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = splitText(children)

  return (
    <div ref={ref} className={className}>
      <Tag className="inline">
        {words.map(({ word, key }, i) => (
          <span key={key} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  )
}
