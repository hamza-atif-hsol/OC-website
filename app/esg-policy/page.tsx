"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import React from "react"

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
      staggerChildren: 0.15,
    },
  },
}

export default function ESGPolicyPage() {
  const [expandedSection, setExpandedSection] = React.useState(0)

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
      const gap = Math.max(0, r1.left - r0.right)
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

  const baseH = 520

  const overviewSections = [
    {
      id: 0,
      title: "Introduction to the policy",
      content: (
        <div className="space-y-6 text-slate-700">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Ambition</h4>
            <p>
              All aspects of One Constellation's business are focused on fostering environmental sustainability, promoting social responsibility, and ensuring effective corporate governance. Our mission is to seek to identify areas of risk and opportunity to ensure that our business decisions and policies address opportunities for creating a sustainable future as well as meeting in-scope regulatory enforcements. In One Constellation we take our sustainability goals very seriously, and we will strive to enhance our efforts in sustainability initiatives, continuing to be transparent and honest as we look ahead with hope for our planet.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Scope of the policy</h4>
            <p>
              This Policy applies to all One Constellation employees (including C-Suite members and Directors) and locations worldwide, as well all business partners and suppliers (where relevant). It will act as the umbrella policy that will sit above any specific environmental, social and/or governance policies. This Policy sets out the environmental, social and governance (ESG) topics which are most material for One Constellation and our operations and how we manage these.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Contact</h4>
            <p>
              All questions regarding this Policy should be addressed to the Risk & Compliance Team.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Our employees",
      content: (
        <div className="space-y-4 text-slate-700">
          <p>
            One Constellation is committed to creating a diverse, inclusive, and supportive workplace where all employees can thrive and contribute to our mission. We believe that our people are our greatest asset, and we are dedicated to fostering an environment that promotes employee well-being, professional development, and equal opportunities.
          </p>
          <p>
            We maintain rigorous health and safety standards across all our operations and continuously invest in employee training and development programs to enhance skills and career progression.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Our clients & partners",
      content: (
        <div className="space-y-4 text-slate-700">
          <p>
            One Constellation is committed to maintaining the highest ethical standards in all our client and partner relationships. We work with organizations that share our values and commitment to responsible business practices.
          </p>
          <p>
            Through our partnerships and client relationships, we strive to create positive impact and deliver sustainable value creation for all stakeholders.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-white pt-6 pb-4 border-b">
        <div className="container mx-auto px-4">
          <p className="text-sm text-slate-500">
            <Link href="/" className="text-slate-500 hover:text-slate-700">
              Homepage
            </Link>
            {" > "}
            <span className="text-slate-600">Environmental, Social & Governance (ESG) Policy</span>
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
              >
                Environmental, Social & Governance (ESG) Policy
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-600 leading-relaxed"
              >
                At One Constellation, we are committed to making a positive impact on the planet and its people. We have adopted the Environmental Social and Governance Statement to articulate how we identify, address and live up to these responsibilities, and how we will work to mitigate risks related to ESG.
              </motion.p>

              <motion.button
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                Download One Constellation's ESG Policy
              </motion.button>
            </motion.div>

            {/* Right - Images Grid */}
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
                      {/* Auto-masked image like privacy policy */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: "url('/client2.jpg')",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: `${metrics.totalW}px ${baseH}px`,
                          backgroundPosition: `-${xOffset}px 0px`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  )
                })}
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-400/20 via-transparent to-blue-500/20 blur-[140px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12"
          >
            Overview
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {overviewSections.map((section) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? -1 : section.id
                    )
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-semibold text-sm">
                      {expandedSection === section.id ? "−" : "+"}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 transition-transform ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-slate-200"
                  >
                    {section.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold"
            >
              Download Our ESG Policy
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg opacity-90 max-w-2xl mx-auto"
            >
              Access our comprehensive Environmental, Social & Governance Policy to learn more about our commitment to sustainable and responsible business practices.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              Download Policy Document
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
