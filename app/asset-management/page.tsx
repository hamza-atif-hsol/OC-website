"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Timer,
  Workflow,
  Layers,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

/* ---------------------------------- */
/* Animations */
/* ---------------------------------- */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
}

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

type HelpItem = {
  icon: LucideIcon
  title: string
  desc: string
}

type ExploreItem = {
  id: string
  label: string
  title: string
  description: string
  href: string
  cards: { img: string; label: string }[]
}

type Partner = { name: string; logo?: string }

type DemoFormState = {
  firstName: string
  lastName: string
  jobTitle: string
  company: string
  workEmail: string
}

/* ---------------------------------- */
/* Trusted Organizations (static, centered, no repeat, no animation) */
/* ---------------------------------- */

type TrustedLogo = { name: string; src: string }

function TrustedOrganizationsRow() {
  const logos: TrustedLogo[] = [
    { name: "Citco", src: "/citco-Logo.svg" },
    { name: "Northern Trust", src: "/northen-trust.svg" },
    { name: "Real Estate", src: "/real-estate.svg" },
    { name: "Vistra", src: "/vistra.webp" },
    { name: "Allianz", src: "/allianz.svg" },
  ]

  return (
    <div className="w-full py-10">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-center gap-x-16 gap-y-8 flex-wrap">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              <img src={l.src} alt={l.name} className="h-9 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------- */
/* Page */
/* ---------------------------------- */

export default function AssetManagementPage() {
  const { t } = useLanguage()

  const tr = (key: string, fallback: string) => {
    try {
      const v = typeof t === "function" ? (t(key) as unknown) : null
      return typeof v === "string" && v.trim().length > 0 ? v : fallback
    } catch {
      return fallback
    }
  }

  /* ---------------------------------- */
  /* Asset Management content (rephrased from your reference) */
  /* ---------------------------------- */

  const breadcrumbText = "Homepage / Segments / Asset Management"
  const heroTitleLines = ["Asset", "Management"]

  const heroDescription =
    "One Constellation helps asset managers reduce regulatory risk and operational cost by digitizing the end-to-end investor and client lifecycle across retail and institutional investors, distributors, and counterparties."

  const heroBullets: string[] = [
    "Digital client & investor journeys across onboarding and servicing.",
    "Optimized onboarding processes that reduce friction and turnaround time.",
    "Reduced risk with a single, consistent client view across teams and regions.",
  ]

  const helpsHeading = "How One Constellation Helps Asset Managers"

  const helps: HelpItem[] = [
    {
      icon: ShieldCheck,
      title: "Fast, frictionless digital onboarding journeys",
      desc:
        "Standardize onboarding across investor types and products with guided digital workflows reducing manual effort and improving time-to-onboard.",
    },
    {
      icon: Timer,
      title: "Deliver an exceptional client experience",
      desc:
        "Provide a consistent, transparent onboarding and servicing experience with fewer handoffs, clearer requirements, and faster approvals.",
    },
    {
      icon: Workflow,
      title: "Pre-built KYC/KYB and regulatory policy controls",
      desc:
        "Apply policy-driven compliance checks and audit-ready workflows that support different jurisdictions and evolving regulatory requirements.",
    },
  ]

  const exploreItems: ExploreItem[] = [
    {
      id: "fincrime",
      label: "FinCrime Operating System",
      title: "FinCrime Operating System",
      description:
        "Unify risk, compliance, screening, monitoring, and case workflows into one operating model reducing fragmentation and improving decision speed.",
      href: "/fincrime-operating-system",
      cards: [
        { img: "/solution-fincrime-1.png", label: "Operating Model" },
        { img: "/solution-fincrime-2.png", label: "Detection & Cases" },
        { img: "/solution-fincrime-3.png", label: "Controls & Audit" },
      ],
    },
    {
      id: "agentic",
      label: "Agentic AI",
      title: "Agentic AI – Meet the Agents",
      description:
        "Deploy intelligent agents to automate repeatable compliance tasks, accelerate reviews, and help teams focus on high-risk decisions.",
      href: "/agentic-ai",
      cards: [
        { img: "/solution-agentic-1.png", label: "Automation" },
        { img: "/solution-agentic-2.png", label: "Assistance" },
        { img: "/solution-agentic-3.png", label: "Governance" },
      ],
    },
    {
      id: "clm",
      label: "Client Lifecycle Management",
      title: "Client Lifecycle Management",
      description:
        "Digitally manage clients through every stage of the lifecycle from onboarding and KYC to periodic reviews and offboarding.",
      href: "/clm",
      cards: [
        { img: "/solution-clm-1.png", label: "CLM Journeys" },
        { img: "/solution-clm-2.png", label: "In-Scope Policies" },
        { img: "/solution-clm-3.png", label: "Details" },
      ],
    },
    {
      id: "kyc",
      label: "Know Your Customer",
      title: "Know Your Customer",
      description:
        "Digitize end-to-end KYC across the client lifecycle simplifying due diligence with rules, workflows, and continuous risk monitoring.",
      href: "/know-your-customer",
      cards: [
        { img: "/solution-kyc-1.png", label: "KYC Overview" },
        { img: "/solution-kyc-2.png", label: "In-Scope Policies" },
        { img: "/solution-kyc-3.png", label: "KYC Journeys" },
      ],
    },
    {
      id: "onboarding",
      label: "Client Onboarding",
      title: "Client Onboarding",
      description:
        "Accelerate onboarding with guided journeys, structured data capture, and automated document & approval workflows end-to-end.",
      href: "/client-onboarding",
      cards: [
        { img: "/solution-onboarding-1.png", label: "Journeys" },
        { img: "/solution-onboarding-2.png", label: "Documents" },
        { img: "/solution-onboarding-3.png", label: "Approvals" },
      ],
    },
    {
      id: "compliance",
      label: "Regulatory Compliance",
      title: "Regulatory Compliance",
      description:
        "Maintain consistent controls across jurisdictions with policy-driven rules, audit trails, and configurable workflows that scale.",
      href: "/compliance",
      cards: [
        { img: "/solution-compliance-1.png", label: "Policies" },
        { img: "/solution-compliance-2.png", label: "Controls" },
        { img: "/solution-compliance-3.png", label: "Auditability" },
      ],
    },
    {
      id: "salesforce",
      label: "CLM for Salesforce",
      title: "CLM for Salesforce",
      description:
        "Bring lifecycle workflows into Salesforce orchestrating requirements, documents, and approvals end-to-end with real-time visibility.",
      href: "/salesforce-clm",
      cards: [
        { img: "/solution-clm-salesforce-1.png", label: "Account Opening" },
        { img: "/solution-clm-salesforce-2.png", label: "Journeys" },
        { img: "/solution-clm-salesforce-3.png", label: "Client Onboarding" },
      ],
    },
  ]

  const [activeExploreId, setActiveExploreId] = React.useState(exploreItems[0].id)
  const activeExplore = React.useMemo(
    () => exploreItems.find((x) => x.id === activeExploreId) ?? exploreItems[0],
    [activeExploreId, exploreItems]
  )

  const partners: Partner[] = [
    { name: "blackrock", logo: "/blackrock-logo-nav.svg" },
    { name: "Standard Charted", logo: "/Standard_Chartered_.svg" },
    { name: "First sentier", logo: "/first-sentier-logo-green-white-svg.svg" },
    { name: "MezFi", logo: "MezFI.png" },
  ]

  const insights = React.useMemo(
    () => [
      {
        title: "Investor onboarding: reduce friction without weakening controls",
        desc: "Practical ways to improve onboarding speed, lower rework, and maintain strong compliance for asset managers.",
        href: "/resources/insights/investor-onboarding",
      },
      {
        title: "Single client view: improve governance and data quality",
        desc: "How a unified profile across teams supports better decisions, cleaner records, and stronger audit outcomes.",
        href: "/resources/insights/single-client-view",
      },
      {
        title: "Policy-driven compliance for multi-jurisdiction operations",
        desc: "Keep controls consistent while supporting regional requirements with configurable workflows and audit trails.",
        href: "/resources/insights/policy-driven-compliance",
      },
    ],
    []
  )

  const [insightIndex, setInsightIndex] = React.useState(0)
  const prevInsight = () => setInsightIndex((i) => (i - 1 + insights.length) % insights.length)
  const nextInsight = () => setInsightIndex((i) => (i + 1) % insights.length)
  const currentInsight = insights[insightIndex]

  const [demoForm, setDemoForm] = React.useState<DemoFormState>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    workEmail: "",
  })

  const [demoError, setDemoError] = React.useState<string | null>(null)
  const [demoSuccess, setDemoSuccess] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const onChangeDemo = (key: keyof DemoFormState, value: string) => {
    setDemoForm((p) => ({ ...p, [key]: value }))
    setDemoError(null)
    setDemoSuccess(null)
  }

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const submitDemo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDemoError(null)
    setDemoSuccess(null)

    if (!demoForm.firstName.trim()) return setDemoError("Please enter your first name.")
    if (!demoForm.lastName.trim()) return setDemoError("Please enter your last name.")
    if (!demoForm.company.trim()) return setDemoError("Please enter your company.")
    if (!demoForm.workEmail.trim()) return setDemoError("Please enter your work email.")
    if (!isValidEmail(demoForm.workEmail.trim())) return setDemoError("Please enter a valid email address.")

    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 600))
      setDemoSuccess("Thanks! We’ll contact you shortly.")
      setDemoForm({ firstName: "", lastName: "", jobTitle: "", company: "", workEmail: "" })
    } catch {
      setDemoError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const demoPoints: string[] = [
    "Dramatically improve operational efficiency",
    "Strengthen financial crime and regulatory compliance controls",
    "Transform the onboarding and lifecycle experience",
    "Unlock revenue potential across the full client lifecycle",
  ]

  const testimonialQuote =
    "“We selected One Constellation to support a transformation across investor onboarding and lifecycle operations reducing friction, improving governance, and strengthening compliance outcomes.”"
  const testimonialAttribution = "  Operations Leader, Global Asset Manager"

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="text-sm text-slate-500">
                {breadcrumbText}
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
                {heroTitleLines[0]}
                <br />
                {heroTitleLines[1]}
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                {heroDescription}
              </motion.p>

              <motion.ul variants={fadeInUp} className="space-y-3 pt-2">
                {heroBullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 items-start">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp} className="pt-2 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-6 h-11">
                  <Link href="/resources/brochure">{tr("download Brochure", "Download the brochure")}</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <img src="/segment-asset-management.png" alt="Asset Management" className="w-full h-auto object-contain" />
              </div>

              <div className="hidden md:block absolute -left-6 bottom-10 rounded-2xl bg-white shadow-lg border border-slate-200 p-4 w-[260px]">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Layers className="w-4 h-4 text-accent" />
                  Orchestrated journeys
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  Standardize investor onboarding, data capture, and approvals into one controlled workflow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED LOGOS (full width, centered) */}
      <motion.div variants={fadeInUp} className="py-6">
        <div className="relative left-1/2 -ml-[50vw] w-[100vw]">
          <TrustedOrganizationsRow />
        </div>
      </motion.div>

      {/* HOW IT HELPS */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-slate-900">
              {helpsHeading}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
              <div className="space-y-8">
                {helps.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <img src="/asset-demo-screen.png" alt="Asset management interface preview" className="w-full h-auto object-contain" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPLORE SOLUTIONS */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto">
            <motion.div variants={fadeInUp} className="w-full flex justify-left">
              <div className="w-full max-w-5xl bg-rose-100/70 rounded-full py-6 px-14 flex items-center justify-left">
                <span className="text-slate-800 font-semibold text-4xl md:text-4xl tracking-tight">
                  Explore One Constellation’s Solutions
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
              <motion.aside variants={fadeInUp} className="lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6">
                <div className="text-sm font-semibold text-slate-900 mb-4">Solutions</div>
                <div className="space-y-1">
                  {exploreItems.map((item) => {
                    const isActive = item.id === activeExploreId
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveExploreId(item.id)}
                        className={[
                          "w-full text-left rounded-2xl px-4 py-3 text-sm border transition",
                          isActive
                            ? "bg-slate-50 border-slate-300 text-slate-900 font-semibold"
                            : "bg-white border-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-200",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </motion.aside>

              <motion.div variants={fadeInUp} className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExplore.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-slate-900">{activeExplore.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{activeExplore.description}</p>

                        <Link href={activeExplore.href} className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="hidden md:flex items-center gap-2 text-slate-500">
                        <Building2 className="w-5 h-5" />
                        <span className="text-sm">Enterprise-ready</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      {activeExplore.cards.map((x) => (
                        <div key={x.label} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                          <img src={x.img} alt={x.label} className="w-full h-auto object-contain" />
                          <div className="px-4 py-3 text-sm font-semibold text-slate-900">{x.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* INSIGHTS */}
            <motion.div variants={fadeInUp} className="mt-10 rounded-3xl bg-accent/10 border border-accent/15 px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center mt-0.5">
                  <Users className="w-4 h-4 text-slate-700" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900">{currentInsight.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{currentInsight.desc}</div>
                  <div className="mt-3">
                    <Link href={currentInsight.href} className="text-accent font-semibold inline-flex items-center gap-2 text-sm">
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 md:self-auto self-end">
                <button
                  type="button"
                  onClick={prevInsight}
                  aria-label="Previous insight"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextInsight}
                  aria-label="Next insight"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-slate-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-white">
              Advisory, Data & Product Partners
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/70 mt-4 max-w-3xl">
              We partner with market-leading providers to help you implement faster, enrich data quality, and connect verification,
              screening, and workflow into one lifecycle experience.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              {partners.map((p) => (
                <div key={p.name} className="h-12 px-5 rounded-2xl bg-white/95 flex items-center justify-center border border-white/20">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="h-6 w-auto object-contain" />
                  ) : (
                    <span className="text-sm font-semibold text-slate-800">{p.name}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-slate-900">
              Our Clients Love What We Do
            </motion.h2>

            <motion.div variants={fadeInUp} className="mt-10 rounded-3xl bg-slate-50 border border-slate-200 p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Star className="w-5 h-5 text-accent" />
                    Customer story highlight
                  </div>
                  <p className="text-slate-700 leading-relaxed">{testimonialQuote}</p>
                  <div className="text-sm text-slate-600">{testimonialAttribution}</div>
                </div>

                <div className="hidden md:block text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">Read the case study</span>
                  <div className="mt-2">
                    <Link href="/resources/case-studies" className="text-accent font-semibold inline-flex items-center gap-2">
                      View resources <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* REQUEST DEMO */}
      <section className="relative overflow-hidden py-20 md:py-24 fintech-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <Link
                href="/book-demo"
                className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 h-12 text-lg font-semibold hover:bg-slate-800 transition"
              >
                Book a Demo
              </Link>

              <ul className="mt-6 space-y-3 text-slate-900">
                {demoPoints.map((x, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-white/70 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-slate-900" />
                    </span>
                    <span className="text-sm md:text-base">{x}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <form onSubmit={submitDemo} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900 mb-4">Get started</div>

                <div className="grid grid-cols-1 gap-3">
                  <input
                    className="h-11 rounded-xl border border-slate-200 px-4 outline-none"
                    placeholder="First name"
                    value={demoForm.firstName}
                    onChange={(e) => onChangeDemo("firstName", e.target.value)}
                  />
                  <input
                    className="h-11 rounded-xl border border-slate-200 px-4 outline-none"
                    placeholder="Last name"
                    value={demoForm.lastName}
                    onChange={(e) => onChangeDemo("lastName", e.target.value)}
                  />
                  <input
                    className="h-11 rounded-xl border border-slate-200 px-4 outline-none"
                    placeholder="Job title"
                    value={demoForm.jobTitle}
                    onChange={(e) => onChangeDemo("jobTitle", e.target.value)}
                  />
                  <input
                    className="h-11 rounded-xl border border-slate-200 px-4 outline-none"
                    placeholder="Company"
                    value={demoForm.company}
                    onChange={(e) => onChangeDemo("company", e.target.value)}
                  />
                  <input
                    className="h-11 rounded-xl border border-slate-200 px-4 outline-none"
                    placeholder="Work email"
                    value={demoForm.workEmail}
                    onChange={(e) => onChangeDemo("workEmail", e.target.value)}
                  />
                </div>

                {demoError && <p className="mt-3 text-sm text-red-600">{demoError}</p>}
                {demoSuccess && <p className="mt-3 text-sm text-emerald-600">{demoSuccess}</p>}

                <div className="mt-5">
                  <Button type="submit" disabled={isSubmitting} className="rounded-full px-6 h-11 w-full flex items-center justify-center gap-2">
                    {isSubmitting ? "Submitting..." : "Next"} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <p className="mt-3 text-xs text-slate-500">By submitting, you agree to be contacted about One Constellation products and services.</p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}