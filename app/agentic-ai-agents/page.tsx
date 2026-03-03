"use client"

import Link from "next/link"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Lock,
  Layers,
  FileText,
  Search,
  Sparkles,
  BadgeCheck,
  Bot,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

type AgentKey = "document" | "data-sourcing" | "screening" | "significance" | "autocompletion" | "kyra"

const agentTabs: {
  key: AgentKey
  label: string
  icon: React.ReactNode
  title: string
  subtitle: string
  intro: string
  highlights: string[]
  closing: string
  ctaLabel: string
  mediaAlt: string
  // Use your own images (same style as your /oc-1.jpg)
  mediaSrc: string
}[] = [
  {
    key: "document",
    label: "Document Agent",
    icon: <FileText className="w-5 h-5 text-accent" />,
    title: "Document Agent",
    subtitle: "The paperwork eliminator",
    intro:
      "One Constellation’s Document Agent leverages generative AI and large language models to classify, extract, and validate client documents powering faster, smarter onboarding, KYC reviews, and AML due diligence.",
    highlights: [
      "Automatically classify and interpret client documents at scale",
      "Extract critical entity and regulatory data with high consistency",
      "Reduce manual effort, cut cycle times, and improve accuracy",
    ],
    closing: "Less paperwork. More progress.",
    ctaLabel: "Download Datasheet",
    mediaAlt: "Document upload interface",
    mediaSrc: "/agents/document-agent.png",
  },
  {
    key: "data-sourcing",
    label: "Data Sourcing Agent",
    icon: <Search className="w-5 h-5 text-accent" />,
    title: "Data Sourcing Agent",
    subtitle: "The profile optimizer",
    intro:
      "One Constellation’s AI Data Sourcing Agent intelligently gathers, compares, and prioritizes KYC data from multiple sources to accelerate onboarding and ongoing reviews.",
    highlights: [
      "Rules-driven automation across entity resolution, validation, and enrichment",
      "Improved data quality with reduced manual effort",
      "Faster, more confident decision-making across the client lifecycle",
    ],
    closing: "Smarter sourcing. Stronger client profiles..",
    ctaLabel: "Download Datasheet",
    mediaAlt: "Data sourcing dashboard",
    mediaSrc: "/agents/data-sourcing-agent.png",
  },
  {
    key: "screening",
    label: "Screening Agent",
    icon: <Shield className="w-5 h-5 text-accent" />,
    title: "Screening Agent",
    subtitle: "Precision-driven screening at scale",
    intro:
      "One Constellation’s AI Screening Agent automates match resolution and delivers real-time, explainable decisions while preserving human oversight where it matters.",
    highlights: [
      "Eliminate manual reviews and accelerate screening outcomes with results that are fully transparent, defensible, and audit-ready.",
    ],
    closing: "Consistent. Scalable. Compliance-ready from day one.",
    ctaLabel: "Download Datasheet",
    mediaAlt: "Screening agent dashboard",
    mediaSrc: "/agents/screening-agent.png",
  },
  {
    key: "significance",
    label: "Significance Agent",
    icon: <BadgeCheck className="w-5 h-5 text-accent" />,
    title: "Significance Agent",
    subtitle: "ntelligent focus. Meaningful action.",
    intro:
      "One Constellation’s AI Significance Agent applies advanced change classification to instantly identify high-impact client data updates ensuring teams focus only on what truly matters.",
    highlights: [
      "Eliminate time spent reviewing low-risk changes and prioritize meaningful risk signals with precision.",
    ],
    closing: "Smarter reviews. Faster decisions. Leaner operations.",
    ctaLabel: "Download Datasheet",
    mediaAlt: "Significance agent interface",
    mediaSrc: "/agents/significance-agent.png",
  },
  {
    key: "autocompletion",
    label: "Autocompletion Agent",
    icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
    title: "Autocompletion Agent",
    subtitle: "Straight-through processing, intelligently applied",
    intro:
      "One Constellation’s Autocompletion Agent uses policy-driven automation to enable true straight-through processing, escalating to human review only when exceptions arise.",
    highlights: [
      "Reduce manual effort, accelerate lifecycle progression, and free teams to focus on higher-value work.",
    ],
    closing: "Effortless execution. Maximum efficiency.",
    ctaLabel: "Download Datasheet",
    mediaAlt: "Autocompletion agent view",
    mediaSrc: "/agents/autocompletion-agent.png",
  },
  {
    key: "kyra",
    label: "Kyra",
    icon: <Bot className="w-5 h-5 text-accent" />,
    title: "Kyra",
    subtitle: "The digital assistant",
    intro:
      "Kyra is a digital AI assistant that leverages natural language processing, large language models, and generative AI to return data and insights to users.",
    highlights: [
      "Access insights from anywhere to support better decisions",
      "Enable natural language querying to make analytics more accessible",
      "Reduce friction by surfacing the right information at the right time",
    ],
    closing: "Ask. Explore. Decide.",
    ctaLabel: "Download Datasheet",
    mediaAlt: "Kyra assistant dashboard",
    mediaSrc: "/agents/kyra.png",
  },
]

const resources = [
  {
    title: "AI Governance Whitepaper",
    description: "A practical guide to responsible AI adoption across regulated workflows.",
    href: "/resources/ai-governance-whitepaper",
    icon: <Layers className="w-5 h-5 text-accent" />,
    thumbnail: "/resources/resource-1.jpg",
  },
  {
    title: "Agentic KYC: Clearing the Review Backlog",
    description: "How AI Agents reduce effort and improve cycle times for periodic reviews.",
    href: "/resources/agentic-kyc-review-backlog",
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    thumbnail: "/resources/resource-2.jpg",
  },
  {
    title: "Delivering Value with Agentic AI",
    description: "Where Agentic AI drives measurable impact across onboarding and KYC.",
    href: "/resources/delivering-value-agentic-ai",
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
    thumbnail: "/resources/resource-3.jpg",
  },
]



export default function AgenticAIAgentsPage() {
  const { t } = useLanguage()
  const [active, setActive] = React.useState<AgentKey>("document")

  const activeAgent = React.useMemo(
    () => agentTabs.find((a) => a.key === active) ?? agentTabs[0],
    [active]
  )

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/15 text-cyan-300 text-sm font-semibold border border-cyan-400/30 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4" />
                <span>Agentic AI for KYC & FinCrime</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-white">
                One Constellation{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  AI Agents
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed font-light">
                Purpose-built, intelligent agents that automate complex document, data, and decision workflows reducing effort,
                improving consistency, and strengthening control across onboarding, KYC, and AML operations.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/book-demo">
                  <Button
                    size="lg"
                    className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-slate-900 font-semibold shadow-lg shadow-cyan-400/50 transition-all"
                  >
                    {t("requestDemo")}
                  </Button>
                </Link>

                {/* <Link href="#meet-the-agents">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 h-14 text-lg border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-colors"
                  >
                    Meet the Agents
                  </Button>
                </Link> */}
              </motion.div>

              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-cyan-200/80 text-sm">
                <Lock className="w-4 h-4" />
                Built for regulated environments with governance and auditability.
              </motion.div>
            </motion.div>

            {/* HERO MEDIA (use your own assets) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden bg-slate-900/30 border border-white/10 shadow-2xl">
                {/* If you have a video, replace with <video ... /> */}
                <img
                  src="/ai.png"
                  alt="Meet the Agents"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-transparent to-teal-400/20 blur-[140px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEET THE AGENTS */}
      <section id="meet-the-agents" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium mb-4">
              Meet the Agents
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl">
              Modular agents designed to automate the highest-effort parts of onboarding, KYC, and AML while keeping people in control.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <div className="w-full">
            <div className="bg-white/70 backdrop-blur rounded-full p-2 shadow-sm border border-slate-200 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {agentTabs.map((tab) => {
                  const isActive = tab.key === active
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActive(tab.key)}
                      className={[
                        "rounded-full px-4 py-3 text-sm font-semibold transition-all",
                        "flex items-center justify-center gap-2",
                        isActive
                          ? "bg-slate-900 text-white shadow-md"
                          : "bg-transparent text-slate-600 hover:bg-white hover:text-slate-900",
                      ].join(" ")}
                      type="button"
                    >
                      <span className={isActive ? "text-white" : "text-slate-500"}>{tab.icon}</span>
                      <span className="truncate">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab Panel */}
            <div className="mt-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAgent.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                        {activeAgent.icon}
                      </div>
                      <div>
                        <h3 className="text-4xl font-medium leading-tight">{activeAgent.title}</h3>
                        <p className="text-xl text-muted-foreground font-semibold">{activeAgent.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">{activeAgent.intro}</p>

                    <ul className="space-y-3">
                      {activeAgent.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-lg font-semibold text-slate-900">{activeAgent.closing}</p>

                    <div className="flex gap-4 flex-wrap pt-2">
                      <Link href="/resources">
                        <Button className="rounded-full px-8 h-12 text-base bg-accent hover:bg-accent/90 text-white">
                          {activeAgent.ctaLabel}
                        </Button>
                      </Link>

                      {/* <Link href="/book-demo" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold">
                        Request a Demo <ArrowRight className="w-4 h-4" />
                      </Link> */}
                    </div>
                  </div>

                  <div className="aspect-video rounded-3xl overflow-hidden bg-muted border border-slate-200 shadow-sm">
                    <img
                      src={activeAgent.mediaSrc}
                      alt={activeAgent.mediaAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // fallback if you haven't added images yet
                        ;(e.currentTarget as HTMLImageElement).src = "/oc-1.jpg"
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-14">
              <Link href="#periodic-reviews" className="text-slate-700 hover:text-slate-900 font-semibold">
                How AI Agents automate KYC & AML <span aria-hidden>↓</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PERIODIC REVIEWS */}
      <section id="periodic-reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
              <motion.h2 variants={fadeInUp} className="text-4xl font-medium">
                Rethinking Periodic Reviews with Agentic AI
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                Periodic reviews are high-volume, time-consuming, and often repetitive. One Constellation AI Agents automate data
                capture, screening, and policy-driven decisioning so teams can focus on exceptions, not manual rework.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                Move faster with consistent outcomes, stronger auditability, and measurable reduction in operational effort without
                compromising control.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap pt-2">
                {/* <Link href="/book-demo">
                  <Button className="rounded-full px-8 h-12 text-base bg-accent hover:bg-accent/90 text-white">
                    Request a Demo
                  </Button>
                </Link> */}
                <Link href="/resources">
                  <Button variant="outline" className="rounded-full px-8 h-12 text-base border-2">
                    Download Whitepaper
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl overflow-hidden bg-muted border border-slate-200"
            >
              <img
                src="/agents/periodic-reviews-diagram.png"
                alt="Periodic reviews diagram"
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = "/oc-1.jpg"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-medium">
              Recognized as a Leader in KYC & CLM AI Maturity
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Independent industry recognition reflecting advanced AI capability, regulatory depth, and enterprise-scale delivery.
            </motion.p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src="/aimaturity.png"
                alt="AI maturity matrix"
                className="w-full h-full object-contain"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = "/oc-1.jpg"
                }}
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/resources">
              <Button className="rounded-full px-8 h-12 text-base bg-accent hover:bg-accent/90 text-white">
                Read the Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12">
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium">
              Recommended Resources
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {resources.map((r) => (
              <motion.div key={r.title} variants={fadeInUp} className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img
                    src={r.thumbnail}
                    alt={r.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).src = "/oc-1.jpg"
                    }}
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-700">
                    {r.icon}
                    <span className="font-semibold">{r.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                  <Link href={r.href} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-90">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 fintech-gradient">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium">
                See One Constellation AI in action
              </motion.h2>

              <motion.ul variants={fadeInUp} className="space-y-3 text-slate-800">
                {[
                  "Dramatically improve operational efficiency",
                  "Strengthen financial crime and regulatory compliance",
                  "Transform onboarding and lifecycle experiences",
                  "Unlock value across the client lifecycle",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </motion.ul>

              {/* <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap pt-2">
                <Link href="/book-demo">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-accent hover:bg-accent/90 text-white">
                    {t("requestDemo")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                    Contact Us
                  </Button>
                </Link>
              </motion.div> */}
            </motion.div>

            {/* Simple form-like card placeholder (keep your existing form if you have it) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 md:p-8"
            >
              {/* <h3 className="text-xl font-medium mb-4">Request a demo</h3> */}
              <div className="space-y-3">
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/30" placeholder="First name" />
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/30" placeholder="Last name" />
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/30" placeholder="Email" />
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/30" placeholder="Job title" />
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-accent/30" placeholder="Company" />
              </div>
              <div className="mt-5">
                <Button className="rounded-full px-8 h-12 bg-accent hover:bg-accent/90 text-white w-full">
                  Next
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      
    </div>
  )
}
