"use client"

import { type ReactNode } from "react"
import { CustomCursor } from "@/components/shared/CustomCursor"
import { MouseGlow } from "@/components/shared/MouseGlow"
import { PageTransition } from "@/components/shared/PageTransition"

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <MouseGlow />
      <PageTransition>{children}</PageTransition>
    </>
  )
}
