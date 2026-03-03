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
  const [activeTab, setActiveTab] = React.useState("c-suite")

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
                Leadership{" "}

              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl  max-w-xl leading-relaxed font-light text-black">
                Our leadership team is composed of seasoned professionals who provide strategic direction and share a strong commitment to delivering best-in-class technology solutions that address the evolving needs of financial institutions.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl  max-w-xl leading-relaxed font-light text-black">
                With decades of senior executive experience, the team is guiding the organization through its next phase of growth—driving innovation, expanding global reach, and strengthening its position as a leader in Client Lifecycle Management.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl  max-w-xl leading-relaxed font-light text-black">
                Learn more about our Leadership and Board of Directors below.
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
                          backgroundImage: "url('/leadership.jpg')",
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















      {/* Board of Directors Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Tabs */}
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => setActiveTab("c-suite")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === "c-suite"
                      ? "border-2 border-cyan-400 text-cyan-400"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  C-Suite
                </button>
                <button
                  onClick={() => setActiveTab("board")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === "board"
                      ? "border-2 border-cyan-400 text-cyan-400"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Board of Directors
                </button>
              </div>
            </div>

            {/* C-Suite Tab */}
            {activeTab === "c-suite" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {[
                    {
                      name: "Marc Murphy",
                      title: "Founder & CEO",
                      bgColor: "from-yellow-100 to-amber-100",
                      image: "/path-to-marc-murphy.jpg",
                    },
                    {
                      name: "Conor Clinch",
                      title: "Chief Financial Officer",
                      bgColor: "from-purple-100 to-violet-100",
                      image: "/path-to-conor-clinch.jpg",
                    },
                    {
                      name: "Hisham Caramani",
                      title: "President and Chief Operating Officer",
                      bgColor: "from-blue-100 to-cyan-100",
                      image: "/path-to-hisham-caramani.jpg",
                    },
                    {
                      name: "Stephanie White",
                      title: "Chief People Officer",
                      bgColor: "from-blue-200 to-blue-300",
                      image: "/path-to-stephanie-white.jpg",
                    },
                  ].map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex flex-col items-center text-center space-y-4"
                    >
                      <div
                        className={`w-40 h-56 md:w-48 md:h-64 rounded-[100px] bg-gradient-to-br ${member.bgColor} flex items-center justify-center shadow-2xl overflow-hidden flex-shrink-0`}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                        <p className="text-sm text-slate-600">{member.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Board of Directors Tab */}
            {activeTab === "board" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {[
                    {
                      name: "Board Member 1",
                      title: "Role Title",
                      bgColor: "from-teal-100 to-cyan-100",
                      image: "/path-to-board-member-1.jpg",
                    },
                    {
                      name: "Board Member 2",
                      title: "Role Title",
                      bgColor: "from-red-100 to-pink-100",
                      image: "/path-to-board-member-2.jpg",
                    },
                    {
                      name: "Board Member 3",
                      title: "Role Title",
                      bgColor: "from-lime-100 to-green-100",
                      image: "/path-to-board-member-3.jpg",
                    },
                    {
                      name: "Board Member 4",
                      title: "Role Title",
                      bgColor: "from-pink-100 to-rose-100",
                      image: "/path-to-board-member-4.jpg",
                    },
                  ].map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex flex-col items-center text-center space-y-4"
                    >
                      <div
                        className={`w-40 h-56 md:w-48 md:h-64 rounded-[100px] bg-gradient-to-br ${member.bgColor} flex items-center justify-center shadow-2xl overflow-hidden flex-shrink-0`}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                        <p className="text-sm text-slate-600">{member.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>


    </div>
  )
}
