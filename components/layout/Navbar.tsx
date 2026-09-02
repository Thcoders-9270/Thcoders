"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { mainNavigation } from "@/data/navigation"
import { categorizedServices } from "@/data/cgt-services"
import { ServiceIcon } from "@/components/icons/ServiceIcon"
import { MegaMenu } from "./MegaMenu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-zinc-200/80 px-4 py-2 rounded-full shadow-xs hover:border-zinc-300 transition-all">
          <Image src="/logo.png" alt="THCoders" width={160} height={44} className="h-7 sm:h-8 w-auto object-contain" priority />
          <span className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">THCoders</span>
        </Link>

        {/* Floating Center Pill Navigation (Agency Standard) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-xl border border-zinc-200/80 px-3 py-1.5 rounded-full shadow-lg shadow-zinc-950/5">
          {mainNavigation.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all rounded-full select-none",
                  pathname === item.href
                    ? "text-zinc-900 bg-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                )}
              >
                {item.label}
                {(item.children || item.label === "Services") && (
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 text-zinc-400 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180 text-zinc-900"
                    )}
                  />
                )}
              </Link>
              
              {item.label === "Services" ? (
                <MegaMenu isOpen={activeDropdown === "Services"} />
              ) : item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-1.5 w-64 z-50 pointer-events-auto">
                  <div className="rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-xl p-2 shadow-2xl space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer select-none"
                      >
                        {child.icon && (
                          <ServiceIcon name={child.icon} className="h-4 w-4 shrink-0 text-orange-600" />
                        )}
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Book a Call Inside Pill */}
          <Link
            href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
            target="_blank"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-orange-600 transition-colors duration-300 select-none"
          >
            <span>Book a Call</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        {/* Right Action (Mobile toggle) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-100 lg:hidden shadow-xs"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-sm lg:hidden pointer-events-auto"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white border-l border-zinc-200 p-6 lg:hidden pointer-events-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="THCoders" width={160} height={44} className="h-10 w-auto" />
                    <span className="text-lg font-bold text-zinc-900 tracking-tight">THCoders</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1">
                  {mainNavigation.map((item, i) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
                          pathname === item.href
                            ? "bg-zinc-900 text-white"
                            : "text-zinc-700 hover:bg-zinc-100"
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.label === "Services" ? (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-zinc-100 ml-4">
                          {categorizedServices.map((cat) => (
                            <div key={cat.title} className="py-1">
                              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">{cat.title}</p>
                              {cat.items.slice(0, 3).map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-600 hover:text-orange-600"
                                >
                                  <ServiceIcon name={child.icon} className="h-3 w-3 shrink-0" />
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : item.children ? (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-zinc-100 ml-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-600 hover:text-orange-600"
                            >
                              {child.icon && (
                                <ServiceIcon name={child.icon} className="h-3 w-3 shrink-0 text-orange-600" />
                              )}
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-zinc-100 space-y-2">
                <Link
                  href="https://calendly.com/bhasintanya6/30min?preview_source=et_card&month=2025-04"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-full bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Book a Call
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white py-3 text-sm font-bold text-zinc-800 hover:bg-zinc-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
