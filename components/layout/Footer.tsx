"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react"
import { 
  SITE_NAME, 
  SITE_DESCRIPTION, 
  SITE_EMAIL, 
  SITE_PHONE_US, 
  SITE_PHONE_IN, 
  SITE_ADDRESS, 
  SITE_WHATSAPP_US, 
  SITE_WHATSAPP_IN 
} from "@/lib/constants"
import { services } from "@/data/services"

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Featured Work", href: "/portfolio" },
  { label: "Services Directory", href: "/services" },
  { label: "Pricing & Plans", href: "/#pricing" },
  { label: "Client Reviews", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact" },
]

const serviceLinks = [
  { label: "React & Next.js Development", href: "/services/nextjs-development" },
  { label: "Mobile App (iOS & Android)", href: "/services/react-native" },
  { label: "AI & LLM Integrations", href: "/services/openai-integration" },
  { label: "Node.js & Backend Architecture", href: "/services/nodejs-development" },
  { label: "Cloud & AWS DevOps", href: "/services/aws" },
  { label: "UI/UX & Design Systems", href: "/services/ui-ux-design" },
]



export function Footer() {
  return (
    <footer className="relative border-t border-zinc-200/80 bg-white overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.03),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="THCoders" width={160} height={44} className="h-11 w-auto" />
              <span className="text-xl font-extrabold text-zinc-900 tracking-tight">THCoders</span>
            </Link>
            
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              {SITE_DESCRIPTION || "A premium digital agency engineering high-performance web applications, AI platforms, and immersive mobile products for global brands."}
            </p>

            {/* Operational Status Pill */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
                Systems Operational &middot; Q3 Capacity Active
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-orange-600"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-orange-600"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Global Presence */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">
              Get in Touch
            </h4>
            
            <ul className="space-y-3.5 text-sm">
              <li>
                <a 
                  href={`mailto:${SITE_EMAIL}`} 
                  className="group flex items-center gap-2.5 text-zinc-600 hover:text-orange-600 transition-colors"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">{SITE_EMAIL}</span>
                </a>
              </li>

              <li>
                <a 
                  href="https://www.linkedin.com/company/th-coders/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2.5 text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <span className="font-medium text-xs sm:text-sm">LinkedIn</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-zinc-500 pt-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs leading-relaxed">{SITE_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>



        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <p>&copy; {new Date().getFullYear()} {SITE_NAME || "THCoders"}. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <Link href="/terms-of-service" className="hover:text-zinc-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-zinc-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-zinc-900 transition-colors">
              Contact
            </Link>
            <span className="text-zinc-300">&middot;</span>
            <span className="text-zinc-400">Crafted with Next.js &amp; TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
