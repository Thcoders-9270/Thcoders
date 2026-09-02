"use client"

import { useEffect, useRef } from "react"

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9998] hidden lg:block"
      style={{
        width: "600px",
        height: "600px",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)",
        transition: "left 0.2s ease-out, top 0.2s ease-out",
      }}
    />
  )
}
