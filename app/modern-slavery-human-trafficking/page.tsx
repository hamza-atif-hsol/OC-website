"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"
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
      staggerChildren: 0.2,
    },
  },
}

export default function ModernSlaveryPage() {
  const [expandedItem, setExpandedItem] = React.useState<string | null>("organization")

  const pills = 3
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const [metrics, setMetrics] = React.useState({
    pillW: 112,
    gap: 24,
    totalW: 112 * 3 + 24 * 2,
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Modern Slavery & Human Trafficking
              </h1>

              <p className="text-lg text-gray-700 font-semibold mb-6">
                Financial Year End: March 31st, 2025
              </p>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This statement is made by One Constellation Limited pursuant to Section 54 of the Modern Slavery Act ('MSA'). One Constellation is wholly committed to corporate social responsibility, and to understanding and safeguarding its business and supply chain from modern slavery and human trafficking.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We recognize that no economy or industry is immune to the issues of modern slavery and human trafficking. Therefore, we strive to ensure that these issues do not exist in any part of our business or supply chain.
                </p>
              </div>
            </motion.div>

            {/* Right - Pill Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center items-center h-96 lg:h-[520px]"
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
                          backgroundImage: "url('/modern-salver-1.jpg')",
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
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Overview</h2>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                id: "organization",
                title: "Our organization",
                description:
                  "One Constellation is a global company dedicated to providing innovative solutions. We employ thousands of people worldwide and maintain strict policies on labor practices and human rights.",
              },
              {
                id: "supply-chain",
                title: "Our supply chain",
                description:
                  "We work with carefully selected suppliers and partners who share our commitment to ethical business practices and human rights. All suppliers are required to comply with our code of conduct.",
              },
              {
                id: "approach",
                title: "Our approach and policies",
                description:
                  "We have established comprehensive policies to prevent modern slavery in our operations and supply chain. These are reviewed regularly to ensure they remain effective and relevant.",
              },
              {
                id: "risk",
                title: "Risk assessment",
                description:
                  "We conduct regular risk assessments to identify areas of potential vulnerability to modern slavery and human trafficking within our business and supply chain.",
              },
              {
                id: "training",
                title: "Training & awareness",
                description:
                  "All employees receive training on modern slavery and human trafficking issues. We maintain a culture of awareness and encourage reporting of any suspicious activities.",
              },
              {
                id: "monitoring",
                title: "Monitoring & review",
                description:
                  "On an annual basis, the One Constellation board will review this statement to ensure it remains relevant, accurate and appropriate for our business needs.",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="w-full px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="text-blue-600 font-bold text-xl">
                        {expandedItem === item.id ? "−" : "+"}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 text-left">{item.title}</h3>
                  </div>
                </button>

                {expandedItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-5 text-gray-700"
                  >
                    {item.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-gray-700 mt-8 max-w-4xl">
            On an annual basis, the One Constellation board will review this statement to ensure it remains relevant, accurate and appropriate for our business needs.
          </p>
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative bg-blue-600 py-24 overflow-hidden">
        {/* Left decorative circle */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-white/30 -ml-48" />

        {/* Right decorative circle */}
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border-4 border-white/30 -mr-48" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left content */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-slate-900 mb-6">Contact us</h2>
              <p className="text-lg text-slate-800 mb-8 leading-relaxed">
                Contact us if you would like more information on our Modern Slavery and Human Trafficking Policy and Statement.
              </p>
              <Link href="/contact">
                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all border-2 border-slate-900">
                  <ArrowRight size={20} className="text-blue-500" />
                  <span className="text-blue-500">Contact us</span>
                </button>
              </Link>
            </div>

            {/* Right decorative space */}
            <div className="hidden lg:block flex-1" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
