"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 })
  const isHovering = useRef(false)
  const isVisible = useRef(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      isVisible.current = true
    }

    const handleHoverStart = () => { isHovering.current = true }
    const handleHoverEnd = () => { isHovering.current = false }

    window.addEventListener("mousemove", moveCursor)
    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500/50"
        animate={{
          scale: isHovering.current ? 1.5 : 1,
          borderColor: isHovering.current
            ? "rgba(99, 102, 241, 0.6)"
            : "rgba(113, 113, 122, 0.5)",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-400"
        animate={{ scale: isHovering.current ? 0 : 1 }}
      />
    </motion.div>
  )
}
