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

const faqs = [
  {
    question: "What is Account Opening?",
    answer:
      "Account Opening is the process of creating and activating new client accounts. It includes collecting client information, validating documentation, performing regulatory checks and ensuring all requirements are met before an account is opened.",
  },
  {
    question: "What is involved in the Account Opening process?",
    answer:
      "The process typically includes client data capture, document verification, regulatory checks such as KYC and AML, approval workflows and final account activation. One Constellation automates and orchestrates these steps end-to-end.",
  },
  {
    question: "Who uses Account Opening software?",
    answer:
      "Account Opening solutions are used by financial institutions such as banks, investment firms, asset managers and insurers to efficiently onboard and activate client accounts while maintaining regulatory compliance.",
  },
  {
    question: "Does Account Opening require KYC?",
    answer:
      "Yes. KYC is a core component of the account opening process. Financial institutions must verify client identities and assess risk before accounts can be activated, ensuring compliance with regulatory obligations.",
  },
]
const accountOpeningDelivers = [
  {
    title: "Digitized Product Lifecycle Processes",
    description:
      "A dynamic, automated solution that enables financial institutions to capture, track and manage product lifecycles within a single, centralized framework.",
  },
  {
    title: "Optimized Client Journeys",
    description:
      "Orchestrate end-to-end account opening workflows across teams, systems and channels, reducing manual handovers and improving process transparency.",
  },
  {
    title: "A Single Client View",
    description:
      "Maintain a complete, enterprise-wide view of client and account data, ensuring consistency, accuracy and real-time access across onboarding and servicing teams.",
  },
  {
    title: "Connected & Digital Ecosystem",
    description:
      "Integrate seamlessly with internal systems and external data providers using APIs to create a fully connected, digital account opening ecosystem.",
  },
]


const benefits = [
  {
    number: "1",
    title: "Achieve Greater Operational Efficiency",
    description:
      "Remove manual, duplicated processes by automating account opening workflows. Standardized data capture and straight-through processing enable faster turnaround times and improved productivity.",
  },
  {
    number: "2",
    title: "Transform the Client Experience",
    description:
      "Deliver a seamless, digital-first onboarding journey with fewer touchpoints and reduced back-and-forth. Clients benefit from faster account activation and a more intuitive experience.",
  },
  {
    number: "3",
    title: "Reduce Total Cost of Ownership",
    description:
      "Lower operational and technology costs by consolidating account opening processes into a single, scalable platform that adapts to evolving regulatory and business needs.",
  },
  {
    number: "4",
    title: "Unlock Revenue Potential",
    description:
      "Accelerate account activation and reduce abandonment rates, enabling faster access to products and services and supporting long-term client growth.",
  },
]




export default function TransactionMonitoringPage() {
  const { t } = useLanguage()
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
                <span>Digital Account Opening"</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black leading-tight text-white">
                Account Opening

              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed font-light">
                Digitally streamline the account opening experience from start to finish.
                One Constellation Account Opening enables financial institutions to deliver fast,
                compliant and seamless account setup while reducing operational friction
                and accelerating time to revenue.
                `
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
                          backgroundImage: "url('/transaction-montoring.png')",
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
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
  {/* Background Image */}
  <img
    src="/account-opening.jpg"   // 👈 your image path
    alt="KYC Background"
    className="absolute inset-0 w-full h-full object-contain md:object-cover"
  />

  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Existing content (unchanged) */}
  
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
                <h2 className="text-4xl font-bold mb-6">Optimize Account Opening with One Constellation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Highly flexible and fully configurable, One Constellation’s Account Opening solution
                  digitally transforms how financial institutions onboard and activate accounts.
                  By automating document collection, data validation and approval workflows,
                  firms can reduce manual effort, improve accuracy and deliver a consistent,
                  frictionless client experience across all channels.
                  `
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
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Unlock the Value of One Constellation Know Your Customer
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-xl"
              >
                One Constellation Know Your Customer delivers a risk-based approach to KYC compliance, enabling financial institutions to prioritize higher-risk clients while maintaining continuous compliance with both local and global regulatory requirements.
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

      {/* More Solutions Section */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Know Your Customer",
                description: "Advanced KYC compliance and verification",
                gradient: "from-orange-400 to-orange-600",
                lightGradient: "from-orange-50 to-orange-100",
              },
              {
                title: "Digital Client Onboarding",
                description: "Streamline your customer onboarding process",
                gradient: "from-teal-400 to-emerald-600",
                lightGradient: "from-teal-50 to-emerald-100",
              },
            
              {
                title: "Transaction Monitoring",
                description: "Continuous regulatory compliance oversight",
                gradient: "from-cyan-400 to-teal-500",
                lightGradient: "from-cyan-50 to-teal-100",
              },
              {
                title: "Account Opening",
                description: "Automated document extraction and verification",
                gradient: "from-purple-400 to-violet-600",
                lightGradient: "from-purple-50 to-violet-100",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${solution.lightGradient} border border-white/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} opacity-20 mb-4 group-hover:opacity-30 transition-opacity`}
                  />
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
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
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12">
              One Constellation Account Opening delivers
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:px-16"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {accountOpeningDelivers.map((capability, index) => {
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
      {/* FAQs Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Logo Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-20 opacity-5 pointer-events-none">
          <img src="/logoicon.png" alt="" className="w-96 h-96 object-contain" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
              {faqs.map((faq, index) => {
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
              Want to Know More About Account Opening?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mx-auto">
              Discover how One Constellation Account Opening can help you streamline onboarding,
              reduce operational complexity and deliver a faster, more compliant
              account activation experience.
              `
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap">
              <Link href="/book-demo">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-accent hover:bg-accent/90 text-white">
                  {t("Get Started")}
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
    </main>
  )
}
