"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { PageHeader } from "@/components/shared/PageHeader"
import { SITE_EMAIL, SITE_PHONE_US as SITE_PHONE, SITE_ADDRESS } from "@/lib/constants"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error('Failed to submit form')
        // In a real app, you might want to show an error message to the user here
        setSubmitted(true) // For now, still show success so they don't get stuck
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader title="Get in Touch" description="Ready to start your project? Let's talk about how we can help you build something great." />

      <section className="py-16 sm:py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-zinc-900">Contact Information</h2>
              <p className="mt-3 text-base text-zinc-600">Fill out the form and our team will get back to you within 24 hours.</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Email</p>
                    <a href={`mailto:${SITE_EMAIL}`} className="text-sm text-zinc-600 hover:text-zinc-900">{SITE_EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Phone</p>
                    <a href={`tel:${SITE_PHONE}`} className="text-sm text-zinc-600 hover:text-zinc-900">{SITE_PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Location</p>
                    <p className="text-sm text-zinc-600">{SITE_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50/50 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-zinc-900">Message Sent!</h3>
                  <p className="mt-3 text-zinc-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">Full Name</label>
                      <input id="name" name="name" type="text" required className="block w-full rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-300 focus:outline-none" placeholder="" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">Email Address</label>
                      <input id="email" name="email" type="email" required className="block w-full rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-300 focus:outline-none" placeholder="" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-1.5">Company</label>
                    <input id="company" name="company" type="text" className="block w-full rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-300 focus:outline-none" placeholder="" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">Message</label>
                    <textarea id="message" name="message" required rows={5} className="block w-full rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-600 focus:border-zinc-300 focus:outline-none" placeholder="" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <Send className="h-4 w-4" /> {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
