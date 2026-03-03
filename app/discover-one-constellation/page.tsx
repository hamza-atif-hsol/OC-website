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
      title: "No. 1 for KYC & CLM Technologies",
      description: "One Constellation is consistently recognized by leading industry analysts, including Chartis Research and Aite Novarica Group, as a top provider of Client Lifecycle Management (CLM) and Know Your Customer (KYC) solutions.",
    },
    {
      title: "Award-Winning Technology & Client Success",
      description: "Our platform has earned global recognition from industry analysts and experts for solving complex challenges across the financial services sector. Explore our awards to learn more about our industry leadership.",
    },
    {
      title: "Driving Digital Transformation in Financial Services",
      description: "One Constellation partners with many of the world’s leading financial institutions to deliver Client Lifecycle Management (CLM) solutions that simplify regulatory compliance, enhance customer journeys, and provide data-driven insights that drive operational transformation.",
    },
   {
  title: "Global Client Community",
  description:
    "Our client engagement model creates a collaborative environment where financial institutions can share operational challenges, exchange insights, and help shape future-ready solutions. By enabling clients to test and validate innovations before market release, we ensure our technology addresses real-world regulatory and operational needs."
},
{
  title: "850+ Experts Dedicated to Financial Services",
  description:
    "Our global team of over 850 specialists combines deep regulatory knowledge, financial services expertise, and SaaS technology capabilities. Operating across major financial and engineering hubs worldwide, we are focused on delivering best-in-class solutions tailored to the evolving needs of financial institutions."
},
{
  title: "Accelerating Strategic Growth",
  description:
    "Entering our next phase of growth, we continue to expand our global footprint, strengthen product innovation, and scale our SaaS capabilities. Our strategic partnerships and investments position us to deliver long-term value and transformative outcomes for financial institutions worldwide."
}
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
      <section className="relative overflow-hidden py-24 md:py-40 bg-muted/30">
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
             

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-black">
                Discover{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  One Constellation
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl  max-w-xl leading-relaxed font-light text-black">
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
                          backgroundImage: "url('/discover.jpg')",
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

      {/* Why Leading Financial Institutions Choose Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-4 space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-medium leading-tight text-slate-900">
                Why Leading Financial Institutions Choose One Constellation
              </motion.h2>
            </motion.div>

            {/* Right Side - Stats Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  value: "$16",
                  unit: "million",
                  label: "in regulatory cost savings over four years",
                  color: "from-blue-400/10 to-blue-500/10",
                  borderColor: "border-blue-200",
                },
                {
                  value: "80",
                  unit: "%",
                  label: "Reduction in onboarding",
                  color: "from-red-400/10 to-red-500/10",
                  borderColor: "border-red-200",
                },
                {
                  value: "34",
                  unit: "%",
                  label: "Saving in audit cost, averaging $8.5m over five years",
                  color: "from-amber-400/10 to-amber-500/10",
                  borderColor: "border-amber-200",
                },
                {
                  value: "$1",
                  unit: "million",
                  label: "Total cost of ownership savings per year",
                  color: "from-purple-400/10 to-purple-500/10",
                  borderColor: "border-purple-200",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`rounded-2xl border ${stat.borderColor} bg-gradient-to-br ${stat.color} p-8 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                >
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-6xl font-bold text-slate-900">{stat.value}</span>
                      <span className="text-2xl md:text-3xl font-semibold text-slate-600">{stat.unit}</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
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
            One Constellation Fast Facts
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-medium text-white">
             Meet our Leaders
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mx-auto text-white">
           Leveraging substantial industry experience, our executive team is focused on scaling our global footprint and strengthening our position as a market leader in Client Lifecycle Management.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-white hover:bg-slate-100 text-slate-900">
                  {t("Meet our Leadership Team")}
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
