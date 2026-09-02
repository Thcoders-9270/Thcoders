"use client"

import { useEffect, useRef } from "react"

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animFrame: number
    let time = 0

    const colors = [
      [234, 88, 12],    // orange-600
      [168, 85, 247],   // purple-500
      [99, 102, 241],   // indigo-500
      [192, 132, 252],  // purple-400
    ]

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function draw() {
      if (!canvas || !ctx) return
      time += 0.002

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = canvas.width
      const h = canvas.height

      for (let i = 0; i < colors.length; i++) {
        const [r, g, b] = colors[i]
        const xOffset = Math.sin(time * 0.3 + i * 1.5) * w * 0.15
        const yOffset = Math.cos(time * 0.2 + i * 1.2) * h * 0.1
        const radiusX = w * (0.4 + Math.sin(time * 0.15 + i) * 0.1)
        const radiusY = h * (0.3 + Math.cos(time * 0.25 + i) * 0.1)

        const gradient = ctx.createRadialGradient(
          w / 2 + xOffset,
          h * 0.4 + yOffset,
          0,
          w / 2 + xOffset,
          h * 0.4 + yOffset,
          Math.max(radiusX, radiusY)
        )

        const alpha = 0.08 + Math.sin(time * 0.5 + i * 2) * 0.04
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      }

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  )
}
