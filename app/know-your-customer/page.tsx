"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import { CheckCircle2, Zap, Shield, TrendingUp, Users, Layers, Eye, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function KYCPage() {
  const { t } = useLanguage()

  const benefits = [
    {
      number: "1",
      title: "Reduce Risk and Manage KYC Compliance",
      description: "Automatically enforce regulatory requirements across jurisdictions, maintain comprehensive audit trails, and ensure your KYC processes meet all compliance standards with real-time monitoring.",
    },
    {
      number: "2",
      title: "Improve Operational Efficiencies",
      description: "Streamline KYC workflows with intelligent automation, reduce manual verification tasks, and accelerate customer verification timelines while maintaining accuracy and consistency.",
    },
    {
      number: "3",
      title: "Reduce Total Cost of Ownership",
      description: "Minimize operational expenses through process automation, eliminate redundant checks, and reduce the need for specialized compliance personnel with intelligent verification systems.",
    },
    {
      number: "4",
      title: "Transform Client Experience",
      description: "Deliver seamless, frictionless KYC experiences that impress clients and accelerate onboarding journeys with intuitive interfaces and real-time feedback mechanisms.",
    },
    {
      number: "5",
      title: "Unlock Revenue Potential",
      description: "Accelerate time-to-revenue with faster customer onboarding, reduce compliance-related delays, and identify cross-selling opportunities throughout the customer lifecycle.",
    },
  ]

  const capabilities = [
    {
      title: "Comply with Local and Global KYC Requirements",
      description: "Pre-packaged KYC rules, document, and ownership control rules for all entity types and natural persons across 50+ jurisdictions. Our solution delivers comprehensive compliance rules across time on implementation, resulting in a quicker time to deployment.",
    },
    {
      title: "Ensure Continuous KYC Risk Monitoring",
      description: "One Constellation KYC provides continuous monitoring of the client profile by identifying changes from integrated data and accounting providers, assessing the impact of those changes and determining materiality to keep the KYC profile up to date in real-time and reduce manual overhead.",
    },
    {
      title: "Automate Client Risk Assessments (CRA)",
      description: "Our KYC's Risk Engine dynamically responds to inputs to a client's KYC profile and automatically calculates client risk assessment, driving appropriate levels of due diligence for higher risk clients.",
    },
    {
      title: "Identify & Visualise Complex Relationships",
      description: "One Constellation's Related Party Manager enables financial institutions to identify, manage and visualise complex entity relationships and structures, including ultimate beneficial owners and persons with significant control.",
    },
    {
      title: "Leverage Pre-built Integrations to Industry-Leading Providers",
      description: "One Constellation's KYC is integrated with market leading data providers to simplify the data collection process and enhance data provided by the client. Advanced screening integrations are available to industry-leading screening providers.",
    },
  ]

  const faqs = [
    {
      question: "Why is KYC important?",
      answer: "Know Your Customer (KYC) is essential for financial institutions to verify customer identity, assess risk, and prevent money laundering and fraud. One Constellation's solutions streamline this critical process.",
    },
    {
      question: "What is included in KYC Procedures?",
      answer: "KYC typically includes customer identification, beneficial ownership verification, risk assessment, and ongoing monitoring. One Constellation automates these processes with intelligent workflows.",
    },
    {
      question: "What are the Key Challenges of Conducting KYC?",
      answer: "Key challenges include managing regulatory complexity across jurisdictions, verifying data accuracy, reducing manual effort, and maintaining compliance costs. One Constellation addresses all these through intelligent automation.",
    },
    {
      question: "What is Proposed KYC?",
      answer: "Proposed KYC refers to regulatory requirements for customer due diligence before establishing relationships. One Constellation's platform ensures comprehensive compliance with all proposed and existing regulations.",
    },
    {
      question: "What are the Benefits of Proposed KYC?",
      answer: "Automated KYC reduces fraud risk, accelerates customer onboarding, improves compliance efficiency, and enhances customer experience while maintaining regulatory excellence.",
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-slate-800">
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
                <span>Comprehensive Compliance Platform</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-white">
                Know Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Customer
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed font-light">
                Strengthen compliance while accelerating customer onboarding. One Constellation's KYC platform delivers intelligent verification, real-time risk assessment, and regulatory excellence.
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
                          backgroundImage: "url('/kyc.png')",
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

      {/* Benefits Section */}
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
                Discover the Power of One Constellation Know Your Customer
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-xl"
              >
                One Constellation's Know Your Customer solution applies a risk-based approach to KYC compliance, enabling organizations to focus resources on higher-risk clients while maintaining continuous compliance across the client lifecycle with both local and global regulations.
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
                  <p className="text-lg text-muted-foreground">KYC Compliance Monitoring</p>
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
                <h2 className="text-4xl font-medium mb-6">Solve KYC Compliance with One Constellation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  One Constellation KYC is an API-first, SaaS-based solution designed to help financial institutions efficiently manage global KYC due diligence requirements across the entire client lifecycle. Its intelligent Policy Manager dynamically determines applicable KYC and AML obligations at every stage of the client journey. The platform incorporates continuous risk monitoring to ensure ongoing compliance with evolving KYC regulations and is complemented by advanced workflow management capabilities that seamlessly orchestrate processes from client onboarding and periodic KYC reviews through to offboarding.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The solution enhances operational efficiency by integrating seamlessly with One Constellation’s ecosystem of industry-leading data, identity verification (ID&V), and screening partners. This unified approach eliminates operational silos between compliance and business teams, minimizes redundant client outreach, and enables a more streamlined, compliant, and client-centric experience.
                </p>
                {/* <Link href="/book-demo" className="inline-block">
                  <Button className="rounded-full px-8 h-12 text-base bg-accent hover:bg-accent/90">
                    Learn More About KYC Solutions
                  </Button>
                </Link> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className=" mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium mb-12">
              With One Constellation Know Your Customer, You Can:
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:px-16"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {capabilities.map((capability, index) => {
                  const [isOpen, setIsOpen] = React.useState(false);
                  return (
                    <AccordionItem key={index} value={`capability-${index}`} className="border-0 rounded-2xl px-6 bg-slate-100 hover:bg-slate-200 transition-colors">
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
                  );
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

      {/* Trends Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-medium">
                Global Fintech Operations Trends in 2025
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                The fintech landscape is rapidly evolving with increased regulatory scrutiny, customer expectations for seamless experiences, and the rise of advanced compliance technologies. One Constellation helps you navigate these trends with cutting-edge solutions.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/book-demo">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-accent hover:bg-accent/90 text-white">
                    Explore Trends
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-3xl overflow-hidden border border-accent/20"
            >
              <div className="w-full h-full flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* More Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium mb-6">
              More Digital Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore One Constellation's comprehensive suite of solutions
            </motion.p>
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
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const [isOpen, setIsOpen] = React.useState(false);
                return (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-0 rounded-2xl px-8 bg-slate-100 hover:bg-slate-200 transition-colors">
                    <AccordionTrigger
                      className="hover:no-underline py-6 [&>svg]:hidden flex justify-start gap-4"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <motion.div
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-red-400/20"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isOpen ? (
                            <X className="w-6 h-6 text-red-500" />
                          ) : (
                            <Plus className="w-6 h-6 text-red-500" />
                          )}
                        </motion.div>
                      </div>
                      <span className="text-lg font-semibold text-slate-900 text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 pb-6 pt-0 text-base leading-relaxed text-left pl-16">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 fintech-gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium">
              Want to Know More About One Constellation KYC?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mx-auto">
           Contact us to connect with a KYC specialist who will show how One Constellation KYC streamlines compliance and strengthens risk management.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-accent hover:bg-accent/90 text-white">
                  {t("Contact Us")}
                </Button>
              </Link>
              {/* <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  Contact Us
                </Button>
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
