"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import { CheckCircle2, Zap, Shield, TrendingUp, Lock, Layers, Plus, X } from "lucide-react"
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

export default function DigitalClientOnboardingPage() {
  const { t } = useLanguage()

  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Powerful Automation",
      description: "Streamline your onboarding workflows with intelligent automation that reduces manual tasks and accelerates processing times.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-accent" />,
      title: "Real-time Verification",
      description: "Instantly verify client information with integrated data sources and real-time validation to ensure accuracy and compliance.",
    },
    {
      icon: <Layers className="w-6 h-6 text-accent" />,
      title: "Flexible Workflows",
      description: "Design custom onboarding journeys that adapt to your business needs with configurable workflows and multi-channel support.",
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Enhanced Security",
      description: "Protect sensitive client data with enterprise-grade encryption, audit trails, and comprehensive compliance controls.",
    },
  ]

  const benefits = [
    {
      number: "1",
      title: "Increase Operational Efficiency",
      description: "Automate repetitive tasks and reduce manual intervention, allowing your teams to focus on high-value activities and deliver faster service.",
    },
    {
      number: "2",
      title: "Transform Client Experience",
      description: "Deliver seamless, guided digital experiences that impress clients and reduce friction at every step of the onboarding journey.",
    },
    {
      number: "3",
      title: "Reduce Risk and Manage Compliance",
      description: "Automatically enforce regulatory requirements and maintain complete audit trails to ensure your processes meet all compliance standards.",
    },
    {
      number: "4",
      title: "Unlock Revenue Potential",
      description: "Accelerate client onboarding to market faster, reduce drop-off rates, and identify opportunities for cross-selling and upselling.",
    },
  ]

  const faqs = [
    {
      question: "What is Digital Client Onboarding by One Constellation?",
      answer: "Digital Client Onboarding is a comprehensive platform designed to automate and streamline the process of bringing new clients into your organization. It combines intelligent workflows, real-time verification, and compliance controls to deliver exceptional experiences.",
    },
    {
      question: "How can I optimize my client onboarding process?",
      answer: "One Constellation provides expert guidance on best practices, process mapping, and continuous optimization. Our platform includes analytics and reporting tools to identify bottlenecks and improvement opportunities.",
    },
    {
      question: "Why choose One Constellation for Digital Client Onboarding?",
      answer: "One Constellation brings 15+ years of experience in client lifecycle management with a proven track record across 300+ financial institutions worldwide. We combine advanced automation, regulatory expertise, and world-class customer support.",
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
                <Zap className="w-4 h-4" />
                <span>Intelligent Onboarding Platform</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-medium leading-tight text-white">
                Digital Client{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Onboarding
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-cyan-100 max-w-xl leading-relaxed font-light">
                Streamline client onboarding with intelligent automation. One Constellation's platform delivers seamless digital experiences that accelerate growth while maintaining regulatory excellence.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/book-demo">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-slate-900 font-semibold shadow-lg shadow-cyan-400/50 transition-all">
                    {t("requestDemo")}
                  </Button>
                </Link>
                {/* <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 h-14 text-lg border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-colors"
                >
                  Learn More
                </Button> */}
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
                                     backgroundImage: "url('/h.jpg')",
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
                Discover the Power of Digital Client Onboarding
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-xl"
              >
                One Constellation's platform delivers measurable benefits that transform
                your client onboarding operations and drive business growth.
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


      {/* Optimization Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-video rounded-3xl overflow-hidden bg-muted"
            >
              <img
                src="/oc-1.jpg"
                alt="Optimization Metrics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-medium mb-6">Optimize Client Onboarding With One Constellation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  One Constellation's Digital Client Onboarding platform is built on years of industry expertise and best practices from leading financial institutions worldwide. Our intelligent solution combines automation, compliance, and exceptional user experience to deliver results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From initial client engagement through ongoing relationship management, our platform streamlines every phase of the onboarding lifecycle. We help you reduce time-to-onboard, improve client satisfaction, and maintain regulatory compliance.
                </p>
                {/* <Link href="/book-demo" className="inline-block">
                  <Button className="rounded-full px-8 h-12 text-base bg-accent hover:bg-accent/90">
                    Learn More About Optimization
                  </Button>
                </Link> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className=" mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium mb-6">
              Key Features
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className=" mx-auto lg:px-16 "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {keyFeatures.map((feature, index) => {
                  const [isOpen, setIsOpen] = React.useState(false);
                  return (
                    <AccordionItem key={index} value={`feature-${index}`} className="border-0 rounded-2xl px-6 bg-slate-100 hover:bg-slate-200 transition-colors">
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
                        <span className="text-lg font-semibold text-slate-900 text-left">{feature.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-700 pb-6 pt-0 text-base leading-relaxed text-left pl-12">
                        {feature.description}
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
                  Explore All Features
                </Button>
              </Link>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* More Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className=" mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-medium mb-6">
              More Digital Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground  mx-auto">
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
                title: "Know Your Customer (KYC)",
                href: "/know-your-customer",
                image: "/k-y-c.png",
              },
              {
                title: "Regulatory Compliance",
                href: "/compliance",
                image: "/r-c.png",
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
              Request a Demo
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mx-auto">
             Learn how One Constellation Client Onboarding helps financial institutions transform end-to-end client onboarding through digitalization and automation.
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
    </div>
  )
}
