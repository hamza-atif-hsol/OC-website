"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormState = {
  fullName: string
  businessEmail: string
  phoneNumber: string
  message: string
  marketingConsent: boolean
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [form, setForm] = React.useState<FormState>({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    message: "",
    marketingConsent: false,
  })

  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const setField = (name: keyof FormState, value: any) => {
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name as string]) setErrors((p) => ({ ...p, [name as string]: "" }))
    if (submitError) setSubmitError(null)
  }

  const validate = () => {
    const e: Record<string, string> = {}

    if (!form.fullName.trim()) e.fullName = "Full name is required"

    if (!form.businessEmail.trim()) e.businessEmail = "Business email is required"
    else if (!emailRegex.test(form.businessEmail.trim())) e.businessEmail = "Please enter a valid email"

    if (!form.phoneNumber.trim()) e.phoneNumber = "Phone number is required"
    else if (form.phoneNumber.replace(/\D/g, "").length < 7) e.phoneNumber = "Please enter a valid phone number"

    if (!form.message.trim()) e.message = "Message is required"

    // ✅ required checkbox (same as book-demo)
    if (!form.marketingConsent) e.marketingConsent = "Please confirm consent to continue"

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError(null)

    // ✅ Email metadata required by you
    const payload = {
      fromEmail: "email@one-constellation.com",
      fromName: form.fullName, // user info (full name)
      replyTo: form.businessEmail,
      phoneNumber: form.phoneNumber,
      message: form.message,
      marketingConsent: form.marketingConsent,
      source: "contact-page",
    }

    try {
      // ✅ Send to API endpoint - will show in network tabs
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(json?.error || "Failed to send message")
      }

      console.log("✅ Contact form submitted successfully:", json)

      setSubmitted(true)
      setForm({
        fullName: "",
        businessEmail: "",
        phoneNumber: "",
        message: "",
        marketingConsent: false,
      })
      setErrors({})
    } catch (err: any) {
      console.error("❌ Contact form error:", err)
      setSubmitError(err?.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <section className="py-20 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div className="space-y-8">
              <h1 className="text-5xl font-medium text-slate-900">Get in Touch</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Have a question about our solutions? Our team is here to help.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "info@one-constellation.com",
                    isLink: true,
                    href: "mailto:info@one-constellation.com",
                  },
                  { icon: Phone, title: "Call Us", info: "+65 6978 4780", isLink: true, href: "tel:+6569784780" },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    info: "8 Temasek Boulevard, #34-03 Suntec Tower Three, Singapore 038988",
                    isLink: false,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-900 shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{item.title}</h4>
                      {item.isLink ? (
                        <a className="text-slate-600 hover:underline" href={item.href}>
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-lg">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-medium text-slate-900">Message Sent</h2>
                  <p className="text-slate-600 mt-2">Thanks! Our team will contact you as soon as possible.</p>
                  <Button className="mt-6 rounded-full px-8" onClick={() => setSubmitted(false)}>
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-medium text-slate-900">Your Information</h3>

                  {submitError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="fullName"
                      value={form.fullName}
                      onChange={(e) => setField("fullName", e.target.value)}
                      placeholder="John Doe"
                      className={errors.fullName ? "border-red-500 focus-visible:ring-red-500/30" : ""}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="businessEmail"
                      value={form.businessEmail}
                      onChange={(e) => setField("businessEmail", e.target.value)}
                      placeholder="name@company.com"
                      className={errors.businessEmail ? "border-red-500 focus-visible:ring-red-500/30" : ""}
                    />
                    {errors.businessEmail && <p className="text-red-500 text-sm">{errors.businessEmail}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={(e) => setField("phoneNumber", e.target.value)}
                      placeholder="+1 555 123 4567"
                      className={errors.phoneNumber ? "border-red-500 focus-visible:ring-red-500/30" : ""}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      placeholder="How can we help you?"
                      className={`min-h-[140px] ${errors.message ? "border-red-500 focus-visible:ring-red-500/30" : ""}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  {/* ✅ Checkbox like book-demo */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={form.marketingConsent}
                        onChange={(e) => setField("marketingConsent", e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">
                        I confirm that I would like to receive emails from One Constellation.{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>

                    {errors.marketingConsent && <p className="text-red-500 text-sm mt-1">{errors.marketingConsent}</p>}

                    {/* ✅ Privacy policy link */}
                    <p className="mt-2 text-xs text-slate-500">
                      Click here to view a copy of our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-slate-900 hover:underline"
                        target="_blank"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>

                  <Button type="submit" className="w-full mt-8 h-12 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition bg-accent hover:bg-accent/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}