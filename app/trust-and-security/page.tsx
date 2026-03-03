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

export default function TrustAndSecurityPage() {
  const [expandedItem, setExpandedItem] = React.useState<string | null>("status")

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
      <section className="py-16 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Trust & Security
              </h1>
              <h2 className="text-2xl font-semibold text-slate-900 mb-8">
                Building trust through transparency
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  One Constellation is committed to maintaining the trust of our clients, partners, employees, and stakeholders. This involves keeping you all updated on how we deliver to our operational excellence strategy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our operational excellence strategy is delivering quality services balancing cost and risk.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  It also involves keeping you informed of the latest status updates, security announcements and best practices, as well as maintaining a transparent culture around Trust and Security, with 'Security First' being our default action.
                </p>
              </div>

              <Link href="/privacy-updates">
                <button className="flex items-center gap-3 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold transition-all">
                  <ArrowRight size={20} />
                  Read Our Statement on the Drift Data Breach
                </button>
              </Link>
            </motion.div>

            {/* Right - Pill Gallery */}
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
                          backgroundImage: "url('/trust-1.jpg')",
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
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-transparent to-teal-400/20 blur-[140px]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SaaS Guarantee Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">The One Constellation SaaS Guarantee</h2>
          <p className="text-xl text-gray-700 mb-12">One Constellation Promises Each Client:</p>

          <div className="space-y-4">
            {[
              {
                id: "status",
                title: "Status & Reliability",
                description:
                  "One Constellation is proud to have maintained 99.9% uptime. Get further details from your client relationship manager for your specific product and service range portfolio.",
              },
              {
                id: "security",
                title: "Security Announcements",
                description: "Regular updates and notifications about security measures and improvements to protect your data.",
              },
              {
                id: "compliance",
                title: "Compliance",
                description: "Comprehensive compliance measures and certifications to meet all regulatory requirements.",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        {item.id === "status" ? (
                          <span className="text-blue-600 font-bold">+</span>
                        ) : (
                          <span className="text-blue-600 font-bold">+</span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 text-left">{item.title}</h3>
                  </div>
                </button>

                {expandedItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6 text-gray-700 text-lg"
                  >
                    {item.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Industry Best Practice Section */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">Industry Best Practice</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One Constellation is dedicated to developing and maturing our Security Center of Excellence to continue to not only meet but exceed the stringent global security standards. This is evidenced through our industry best practice certifications and client trust assurance program.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Working through One Constellation client relationship managers, One Constellation clients are provided with trust assurance on reliability, availability, security, confidentiality, and privacy commitments made.
              </p>
            </div>

            {/* Right - Certifications */}
            <div className="flex flex-col gap-12 items-center justify-start">
              {/* ISO 27001 */}
              <div className="w-48 h-48 border-4 border-blue-600 rounded-3xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Λ</div>
                  <div className="text-sm font-bold text-blue-600 mb-1">ISO 27001</div>
                  <div className="text-xs text-blue-600 font-medium">Information Security</div>
                  <div className="text-xs text-blue-600 font-medium">Management</div>
                </div>
              </div>

              {/* AICPA SOC */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-1">AICPA</div>
                  <div className="text-xl font-semibold">SOC</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Building Trust Through Transparency Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">Building Trust Through Transparency</h2>

            {/* Right - Numbered Items */}
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "ISO/IEC 27001:2022",
                  description: "The highest level of global information security assurance available today. Link to cert here.",
                },
                {
                  number: "2",
                  title: "SSAE 18 (SOC2)",
                  description: "One Constellation's SOC 2 Type II report is available on request and is provided upon execution of a standard non-disclosure agreement (NDA).",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white font-bold text-lg">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* More Information CTA Section */}
      <section className="relative bg-teal-500 py-24 overflow-hidden">
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
              <h2 className="text-5xl font-bold text-slate-900 mb-6">More Information</h2>
              <p className="text-lg text-slate-800 mb-8 leading-relaxed">
                If you would like more information on our Security & Trust values, please contact us.
              </p>
              <Link href="/contact">
                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all border-2 border-slate-900">
                  <ArrowRight size={20} className="text-teal-400" />
                  <span className="text-teal-400">Contact us</span>
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
