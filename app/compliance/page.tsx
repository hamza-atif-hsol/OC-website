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

export default function RegulatoryCompliancePage() {
  const { t } = useLanguage()
  const benefits = [
    {
      number: "1",
      title: "Manage Compliance & Reduce Risk",
      description: "Reduce your compliance workload with comprehensive monitoring that assures regulatory effectiveness and reporting requirements. One Constellation's intelligent detection continuously monitors institutional and illicit activity across all transaction types.",
    },
    {
      number: "2",
      title: "Improve Operational Efficiencies",
      description: "Reduce false positives with streamlined detection models and refined detection scenarios. Our intelligent selection of detection scenarios empowers your teams to manage investigations efficiently, following best practices.",
    },
    {
      number: "3",
      title: "Reduce Total Cost of Ownership",
      description: "Configurable scenarios and flexible deployment options minimize operational overhead. One Constellation's integrated approach reduces the number of tools required, lowering infrastructure costs and simplifying compliance management.",
    },

  ]

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
                <span>Compliance & Risk Management</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-white">
                Regulatory{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Compliance
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed font-light">
                A single, integrated real solution that helps financial institutions ensure perfect regulatory compliance across all jurisdictions. One Constellation detects a wide range of compliance risks in real-time, reduces false positives, streamlines investigations, and enhances the effectiveness of regulatory management at scale.
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
                          backgroundImage: "url('/regulatory-compliance.png')",
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
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Achieve Regulatory Excellence with One Constellation Compliance
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-xl"
              >
                One Constellation's compliance core offers effective, intelligent, and flexible regulatory management that detects high-risk patterns, efficiently manages alerts, and investigates across your institution.
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
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white font-bold text-2xl border-4 border-white">
                      {benefit.number}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">
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
                <h2 className="text-4xl font-bold mb-6">Solve Regulatory Compliance with One Constellation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  One Constellation's Regulatory Compliance platform combines powerful automation, real-time verification, and comprehensive analytics to streamline your compliance operations and ensure regulatory excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From initial compliance verification through ongoing monitoring, our intelligent platform adapts to your evolving regulatory requirements while maintaining operational efficiency and exceptional outcomes.
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
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12">
              With One Constellation Compliance, You Can:
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:px-16"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    title: "Best-in-class Pre-packaged Content",
                    description: "One Constellation's regulatory compliance solution delivers pre-packaged, ready-to-deploy intuitive workflows, rules and risk models pertaining to global and local regulatory frameworks and standards, including Tax, ESG, Global Derivative Reform, Investor Protection and more. This includes data and document requirements, entity auto-classification frameworks (e.g. MiFID II client categorization), related parties (e.g. Tax Controlling Persons), as well as ESG Risk and Ratings calculations and classifications.",
                  },
                  {
                    title: "Easy, Expedited Regulatory Change Management through No-Code Configuration",
                    description: "Our dedicated, intuitive configuration user interface gives your business and compliance users the power to make changes easily and instantly to regulatory data sets, workflows, risk and ratings models and more, without requiring any IT support. This empowers your organization to react quickly to change, consistently remain ahead of regulatory trends as requirements evolve.",
                  },
                  {
                    title: "A Single Client Compliance Profile",
                    description: "Our regulatory compliance solutions seamlessly integrate with One Constellation's Client Lifecycle Management solution suite, as well as your existing technology landscape, to orchestrate and centralize client, KYC, AML and regulatory classification data, documents and related parties and present a single, verified entity profile. This allows for effective, efficient re-use of data, connecting stakeholders, reducing unnecessary client touchpoints, and facilitating quick and easy compliance reporting.",
                  },
                  {
                    title: "Detect Suspicious Activity in Real-Time Through Continuous Monitoring",
                    description: "One Constellation's intelligent detection engine monitors transactions continuously across all channels and patterns. Real-time analysis identifies suspicious activity, behavioral anomalies, and compliance risks as they occur.",
                  },
                  {
                    title: "Investigate Alerts Through Intuitive, Efficient Case Management",
                    description: "Streamline your investigation workflows with One Constellation's intelligent case management system. Review all relevant transaction details, customer profiles, and risk factors in one unified interface.",
                  },
                  {
                    title: "Access All Transaction Activity in One Place",
                    description: "One Constellation provides complete visibility into all transaction activity across your institution. A single, unified dashboard gives compliance teams instant access to comprehensive transaction histories and patterns.",
                  },
                ].map((capability, index) => {
                  const [isOpen, setIsOpen] = React.useState(false)
                  return (
                    <AccordionItem
                      key={index}
                      value={`capability-${index}`}
                      className="border-0 rounded-2xl px-6 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <AccordionTrigger
                        className="hover:no-underline py-6 [&>svg]:hidden flex justify-start gap-4"
                        onClick={() => setIsOpen(!isOpen)}
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
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
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
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What are the key regulatory compliance requirements?",
                  answer: "There are multiple key regulations and directives that govern compliance for financial institutions. These include Anti-Money Laundering (AML), Know Your Customer (KYC), Sanctions Screening, and the Financial Action Task Force (FATF) recommendations. Each jurisdiction also has specific local regulations that must be followed, varying by country and region. Staying compliant with the latest regulations is essential to avoid penalties, reputational damage, and operational disruptions.",
                },
                {
                  question: "What are best practices in regulatory compliance for financial institutions?",
                  answer: "The process for compliance is heavily intertwined with existing client lifecycle management processes, through careful data governance, timely reviews, and centralization of compliance information. One Constellation integrates multiple components of the compliance process as proactive compliance monitoring and management across the entire institution. Future-proofed regulatory management means staying ahead of regulatory changes without disrupting day-to-day operations.",
                },
                {
                  question: "How should compliance monitoring and transaction tracking be brought into the operating model?",
                  answer: "Intelligent FDER solutions will capture comprehensive monitoring and transaction tracking data as part of the customer due diligence process. Typically multiple office teams are empowered to do much of the data gathering, with specialized teams and systems dedicated to deeper analysis. This distributed approach ensures compliance coverage across the entire organization while maintaining operational efficiency.",
                },
                {
                  question: "Using regulatory change management frameworks",
                  answer: "There are a huge number of regulatory bodies and frameworks in the market, with various methodologies of identifying and responding to regulatory change. This ranges from guidance documents to mandatory reporting requirements that need to capture news reports and new regulatory filings. At the way to planning scaled media mixtures to determine user sentiment. For every regulatory change, an institution's system needs to be flexible and agile enough to adopt the new requirements without disrupting existing operations or requiring significant IT involvement.",
                },
                {
                  question: "What is the role of technology in regulatory compliance?",
                  answer: "Technology plays a critical role in automating compliance processes, reducing manual effort, and ensuring consistent application of compliance rules across the organization. One Constellation's intelligent platform automates detection, investigation, and reporting while maintaining full audit trails and compliance documentation. Real-time monitoring capabilities enable institutions to identify and respond to compliance risks immediately.",
                },
                {
                  question: "How do you measure compliance effectiveness?",
                  answer: "Compliance effectiveness is measured through multiple KPIs including detection accuracy, false positive rates, investigation resolution times, and regulatory examination findings. One Constellation provides comprehensive analytics and reporting on all aspects of your compliance operations, enabling continuous improvement and demonstrating compliance effectiveness to regulators.",
                },
              ].map((faq, index) => {
                const [isOpen, setIsOpen] = React.useState(false)
                return (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-0 rounded-2xl px-8 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <AccordionTrigger
                      className="hover:no-underline py-6 [&>svg]:hidden flex justify-start gap-4"
                      onClick={() => setIsOpen(!isOpen)}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
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
                title: "Know Your Customer (KYC)",
                href: "/know-your-customer",
                image: "/k-y-c.png",
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
                title: "Account Opening",
                href: "/account-opening",
                image: "/a-o.png",
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
              className="text-4xl md:text-5xl font-bold text-white"
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
