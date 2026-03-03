"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import { CheckCircle2, Zap, Shield, TrendingUp, AlertCircle, Eye, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function CLMPage() {
  const { t } = useLanguage()
  const benefits = [
    {
      number: "1",
      title: "Transform Client Experience",
      description: "Digitally transform the client experience with faster onboarding and fewer touchpoints. Reduced system handoffs enable teams to stay focused on delivering high-value outcomes.",
    },
    {
      number: "2",
      title: "Unlock Revenue Potential",
      description: "A centralized CRM and CLM solution enables you to uncover cross-sell and upsell opportunities while strengthening your ability to attract new business and compete more effectively.",
    },
    {
      number: "3",
      title: "Achieve Greater Operational Efficiencies",
      description: "Transform operations by eliminating offline, fragmented, and duplicate outreach while consolidating client data into a centralized repository.",
    },
    {
      number: "4",
      title: "Reduce Costs",
      description: "One Constellation's SaaS model lowers the cost of managing and maintaining technology infrastructure, while reducing the overall cost of change by minimizing application, support, and configuration expenses.",
    },

  ]
  const [openFeature, setOpenFeature] = React.useState<string | undefined>(undefined)
  const [openFaq, setOpenFaq] = React.useState<string | undefined>(undefined)



  const pills = 4
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const [metrics, setMetrics] = React.useState({
    pillW: 112,
    gap: 24,
    totalW: 112 * 4 + 24 * 3,
  })

  React.useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const calc = () => {
      const pillEls = el.querySelectorAll<HTMLElement>("[data-pill]")
      if (pillEls.length < 2) return

      const r0 = pillEls[0].getBoundingClientRect()
      const r1 = pillEls[1].getBoundingClientRect()

      const pillW = r0.width
      const gap = Math.max(0, r1.left - r0.right) // real gap
      const totalW = pills * pillW + (pills - 1) * gap

      setMetrics({ pillW, gap, totalW })
    }

    calc()

    const ro = new ResizeObserver(() => calc())
    ro.observe(el)

    window.addEventListener("resize", calc)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", calc)
    }
  }, [])
  const baseH = 520 // reference height for background (matches tallest pill)
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-slate-800
">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/15 text-cyan-300 text-sm font-semibold border border-cyan-400/30 backdrop-blur-sm">
                <Eye className="w-4 h-4" />
                <span>Client Lifecycle Management</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-white">
                Salesforce® {" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  CLM Software
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed font-light">
                By combining the strengths of the world’s leading Client Relationship Management (CRM) solution with advanced capabilities,
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/book-demo">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-slate-900 font-semibold shadow-lg shadow-cyan-400/50 transition-all">
                    {t("requestDemo")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center items-center h-[520px]"
            >
              <div ref={containerRef} className="relative flex gap-6">
                {Array.from({ length: pills }).map((_, i) => {
                  const pillH = i % 2 === 0 ? 520 : 420
                  const xOffset = i * (metrics.pillW + metrics.gap)

                  return (
                    <motion.div
                      key={i}
                      data-pill
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-28 md:w-36 rounded-[80px] overflow-hidden shadow-2xl bg-slate-800"
                      style={{ height: `${pillH}px` }}
                    >
                      {/* ✅ Perfect continuous panorama */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: "url('/clm.png')",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: `${metrics.totalW}px ${baseH}px`,
                          backgroundPosition: `-${xOffset}px 0px`,
                        }}
                      />

                      {/* Optional: subtle glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  )
                })}
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-transparent to-teal-400/20 blur-[140px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits/Transform Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >

            {/* LEFT CONTAINER */}
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-medium mb-6"
              >
                Unlock the Power of One Constellation CLM for Salesforce
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-xl"
              >
                One Constellation CLM for Salesforce transforms client engagement by enabling a seamless, end-to-end client journey from prospecting through onboarding.
              </motion.p>
            </div>

            {/* RIGHT CONTAINER */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative space-y-10"
            >
              {/* Vertical line */}
              <div className="absolute left-6 md:left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-accent/30" />

              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-32 md:pl-40"
                >
                  <div className="absolute left-0 top-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white font-medium text-2xl border-4 border-white">
                      {benefit.number}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium mb-3 text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* CTA */}
          {/* <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex justify-center mt-16"
                      >
                        <Link href="/contact">
                          <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 h-14 text-lg border-2"
                          >
                            Learn More About Benefits
                          </Button>
                        </Link>
                      </motion.div> */}

        </div>
      </section>

      {/* Compliance Solution Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-video bg-gradient-to-br from-cyan-400/30 to-teal-500/30 rounded-3xl overflow-hidden border border-cyan-400/20"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Shield className="w-20 h-20 text-cyan-300 mx-auto" />
                  <p className="text-lg text-muted-foreground">Regulatory Compliance Monitoring</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-medium mb-6">Centralize Prospecting and Onboarding with One Constellation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  One Constellation CLM for Salesforce modernizes client onboarding and end-to-end client lifecycle management. By combining the power of the world’s leading Customer Relationship Management (CRM) platform with the advanced capabilities of a best-in-class Client Lifecycle Management solution, it fully digitalizes the client lifecycle serving as the digital backbone that seamlessly connects every stage of the client journey.
                </p>
                {/* <Link href="/book-demo" className="inline-block">
                  <Button className="rounded-full px-8 h-12 text-base bg-accent hover:bg-accent/90">
                    Learn More About Compliance Solutions
                  </Button>
                </Link> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className=" mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium mb-12">
              Key Features
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:px-16"
            >
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
                value={openFeature}
                onValueChange={(v) => setOpenFeature(v || undefined)}
              >
                {[
                  {
                    title: "Digital end-to-end orchestration",
                    description:
                      "One Constellation CLM for Salesforce supports a fully digital client journey from prospecting through onboarding and lifecycle activities. Relationship Managers can search for existing entities, initiate new client and product onboarding, and monitor progress directly from Salesforce.",
                  },
                  {
                    title: "Real-time visibility",
                    description:
                      "One Constellation CLM for Salesforce links sales, onboarding, and KYC stakeholders so status is visible end-to-end. As work progresses, Relationship Managers can track updates in Salesforce and receive automatic notifications as key milestones are completed.",
                  },
                  {
                    title: "Centralized entity data & document management",
                    description:
                      "Digitally capture, store, and share client data and documentation across Salesforce, One Constellation, and your wider ecosystem (where data rules allow). Integrations with external providers and internal repositories help create a single client view, reduce silos, and support better decisions.",
                  },
                  {
                    title: "Seamless client outreach",
                    description:
                      "Enable smoother outreach and document uploads throughout onboarding. Support a best-in-class digital experience with identity verification and e-signature capabilities, and include beneficial owners and authorized signers in the outreach flow to speed up verification.",
                  },
                ].map((capability, index) => {
                  const itemValue = `feature-${index}`
                  const isOpen = openFeature === itemValue
                  return (
                    <AccordionItem
                      key={index}
                      value={itemValue}
                      className="border-0 rounded-2xl px-6 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <AccordionTrigger
                        className="hover:no-underline py-6 [&>svg]:hidden flex justify-start gap-4"
                      >
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <motion.div
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {isOpen ? (
                              <X className="w-5 h-5 text-blue-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-blue-600" />
                            )}
                          </motion.div>
                        </div>
                        <span className="text-lg font-semibold text-slate-900 text-left">{capability.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-700 pb-6 pt-0 text-base leading-relaxed text-left pl-12">
                        {capability.description}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </motion.div>

            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex justify-center mt-12"
            >
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  Learn More About Capabilities
                </Button>
              </Link>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Logo Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-20 opacity-5 pointer-events-none">
          <img src="/logoicon.png" alt="" className="w-96 h-96 object-contain" />
        </div>
        <div className="container mx-auto px-4  relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium mb-6">
              FAQs
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:px-16"
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              value={openFaq}
              onValueChange={(v) => setOpenFaq(v || undefined)}
            >
              {[
                {
                  question: "What are the benefits of integrating KYC and onboarding with Salesforce?",
                  answer:
                    "Integrating KYC and onboarding with Salesforce helps keep client data accurate and consistent across platforms. It streamlines workflows, reduces manual entry and errors, and gives sales and operations teams a clearer view of the end-to-end journey. Combined reporting and analytics also improve insight and decision-making.",
                },
                {
                  question: "How does the integration between CLM and Salesforce impact data security and compliance?",
                  answer:
                    "One Constellation CLM for Salesforce is built with security and compliance as core requirements, using standard safeguards like encryption and secure protocols to protect data. It supports obligations under regulations such as GDPR and CCPA, and relies on ongoing maintenance practices to help stay aligned as data protection rules evolve.",
                },
                {
                  question: "Can existing client data be migrated seamlessly into Salesforce through this integration?",
                  answer:
                    "Yes. Data can be migrated in a way that preserves integrity and keeps relationships between records intact. Field mapping aligns One Constellation and Salesforce data models so organizations can transition smoothly with minimal disruption to operations.",
                },
                {
                  question: "How does this integration improve client onboarding and ongoing relationship management?",
                  answer:
                    "One Constellation CLM for Salesforce accelerates onboarding by automating and coordinating steps across teams. A unified view of client data in Salesforce helps track interactions and history, enabling more personalized service and more proactive relationship management by highlighting opportunities and risks across the full client lifecycle.",
                },
              ].map((faq, index) => {
                const itemValue = `faq-${index}`
                const isOpen = openFaq === itemValue
                return (
                  <AccordionItem
                    key={index}
                    value={itemValue}
                    className="border-0 rounded-2xl px-8 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <AccordionTrigger
                      className="hover:no-underline py-6 [&>svg]:hidden flex justify-start gap-4"
                    >
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <motion.div
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isOpen ? (
                            <X className="w-6 h-6 text-red-400" />
                          ) : (
                            <Plus className="w-6 h-6 text-red-400" />
                          )}
                        </motion.div>
                      </div>
                      <span className="text-lg font-semibold text-slate-900 text-left">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 pb-6 pt-0 text-base leading-relaxed text-left pl-16">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4 text-slate-900">
              Explore More Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Enhance your compliance and risk management with our integrated suite
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 "
          >
            {[
             
              {
                title: "Regulatory Compliance",
                href: "/compliance",
                image: "/r-c.png",
              },
              {
                title: "Digital Client Onboarding",
                href: "/digital-client-onboarding",
                image: "/c-o.png",
              },
              {
                title: "Transaction Monitoring",
                href: "/transaction-monitoring",
                image: "/t-m.png",
              },
               {
                title: "Know Your Customer (KYC)",
                href: "/know-your-customer",
                image: "/k-y-c.png",
              },
            ].map((solution, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={solution.href} className="block group">

                  {/* IMAGE CONTAINER */}
                  <div className="relative rounded-2xl overflow-hidden">

                    {/* Responsive Image - NO CUTTING */}
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-auto object-contain transition-opacity duration-300"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="
            absolute inset-0
            bg-black/40
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            flex items-center justify-center
          ">
                      <button className="
              px-6 py-2
              rounded-full
              border border-black
              bg-teal-400 text-slate-950
              
              text-sm font-medium
            ">
                        See More
                      </button>
                    </div>
                  </div>

                  {/* TITLE BELOW IMAGE */}
                  <div className="mt-2">
                    <p className="text-xl text-slate-900">
                      {solution.title}
                    </p>
                  </div>

                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-medium text-white"
            >
              Request a Demo
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white mx-auto"
            >
              Discover how One Constellation's Regulatory Compliance solution can modernize your compliance operations, reduce risk, and ensure perfect regulatory alignment across your institution.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-demo">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 text-lg bg-white hover:bg-slate-100 text-slate-900 font-semibold"
                >
                  {t("requestDemo") || "Request Demo"}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Play icon component
function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
