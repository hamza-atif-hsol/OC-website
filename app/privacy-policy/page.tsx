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
      <section className="relative overflow-hidden py-24 md:py-40 bg-white">
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
                Privacy Policy

              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-black max-w-xl leading-relaxed font-light"
              >
                One Constellation recognizes and respects your right to data transparency and
                your ability to control how your personal information is used and managed.
                We believe that clearly explaining how we collect, use, and share your personal
                data including any sensitive information forms the foundation of a trusted and
                long-term relationship with you.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-black max-w-xl leading-relaxed font-light">
                Protecting your privacy has always been a core principle in how One Constellation
                engages with its community. We are committed to safeguarding your privacy rights
                in relation to any information that identifies you or can be used to identify
                you (“personal data”). All personal data is collected, processed, and shared
                strictly in accordance with applicable data protection laws and regulatory
                requirements.
              </motion.p>

              {/* <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/book-demo">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-slate-900 font-semibold shadow-lg shadow-cyan-400/50 transition-all">
                    {t("requestDemo")}
                  </Button>
                </Link>
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center items-center h-[520px] px-4 sm:px-6 lg:px-0 w-full overflow-hidden"
            >
              <div ref={containerRef} className="relative flex gap-3 sm:gap-4 md:gap-6">
                {Array.from({ length: pills }).map((_, i) => {
                  const pillH = i % 2 === 0 ? 520 : 420
                  const xOffset = i * (metrics.pillW + metrics.gap)

                  return (
                    <motion.div
                      key={i}
                      data-pill
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-20 sm:w-24 md:w-28 lg:w-36 rounded-[80px] overflow-hidden shadow-2xl  "
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

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4  space-y-14">

          <p className="text-sm text-slate-500">
            Version Date: May 19, 2025
          </p>

          {/* 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Purpose & Scope
            </h2>
            <p className="text-slate-700 leading-relaxed">
              This Privacy Policy explains how One Constellation collects, uses,
              stores, and protects personal information when you interact with our
              websites, products, services, portals, or communications, including
              where Artificial Intelligence (AI) technologies support our operations.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Personal information refers to any data that identifies or can be used
              to identify you. All such data is handled in accordance with applicable
              data protection laws and regulations.
            </p>
          </div>

          {/* 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Personal Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Identity details such as name, nationality, and date of birth (where applicable).</li>
              <li>Contact information including email address, phone number, and address.</li>
              <li>Business and relationship information such as company name, role, and work contact details.</li>
              <li>Commercial information including billing and transactional data (if relevant).</li>
              <li>Communications such as emails, support requests, chats, and feedback.</li>
              <li>Technical identifiers such as IP address, device ID, cookies, and log data.</li>
              <li>Website usage data including page views, navigation history, and interaction metrics.</li>
              <li>Approximate location data derived from IP address or voluntarily provided details.</li>
              <li>Marketing preferences and engagement information.</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Sources of Personal Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Information you provide directly through forms, emails, events, or support interactions.</li>
              <li>Information collected automatically through cookies, logs, and analytics tools.</li>
              <li>Information obtained from publicly available sources.</li>
              <li>Information received from trusted third-party partners where permitted by law.</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Purpose and Lawful Basis for Processing
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We process personal information only for legitimate purposes and where
              a valid legal basis applies. These purposes include delivering our
              services, responding to inquiries, improving products, ensuring
              security, complying with legal obligations, and communicating with you.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Where AI or automated systems are used, appropriate safeguards are
              applied to ensure transparency, fairness, and accountability.
            </p>
          </div>

          {/* 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Disclosure of Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may share personal information with service providers, partners,
              affiliates, and authorities where required, always subject to
              contractual and legal safeguards. Personal data is never sold.
            </p>
          </div>

          {/* 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Security of Processing
            </h2>
            <p className="text-slate-700 leading-relaxed">
              One Constellation applies technical and organizational measures to
              protect personal information against unauthorized access, loss,
              alteration, or misuse.
            </p>
          </div>

          {/* 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Retention of Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Personal information is retained only for as long as necessary to
              fulfill the purposes outlined in this policy or to meet legal and
              contractual requirements.
            </p>
          </div>

          {/* 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We use cookies and similar technologies to operate our website, analyze
              usage, personalize content, and enhance user experience. You can manage
              cookie preferences through your browser settings.
            </p>
          </div>

          {/* 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Access and review your personal information.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion where legally permissible.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
          </div>

          {/* 10 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              10. International Data Transfers
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Where personal information is transferred internationally, we apply
              appropriate safeguards to ensure it remains protected in accordance
              with applicable data protection laws.
            </p>
          </div>

          {/* 11 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              11. Managing Communications Preferences
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You may unsubscribe from marketing communications at any time using the
              link provided in our emails. Essential service communications may still
              be sent when required.
            </p>
          </div>

          {/* 12 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              12. How to Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your
              rights, please contact us at:
            </p>
            <p className="text-slate-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@one-constellation.com"
                className="text-slate-900 hover:underline"
              >
                info@one-constellation.com
              </a>
            </p>
          </div>

          {/* 13 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              13. Changes to This Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page and will apply from the updated effective date.
            </p>
          </div>

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
              For More Information
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mx-auto">
              If you would like more information on One Constellation's privacy notice, please contact us.
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
