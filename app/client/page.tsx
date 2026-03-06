"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

/* ---------------------------------- */
/* Trusted Organizations Marquee */
/* ---------------------------------- */

type TrustedLogo = { name: string; src: string }

function TrustedOrganizationsMarquee() {
  const logos = [
    { name: "Standard Bank", src: "/icbc.webp" },
    { name: "Mizuho", src: "/miz.svg" },
    { name: "nab", src: "/nab.webp" },
    { name: "Macquarie", src: "/mac.svg" },
    { name: "Santander", src: "/stander.svg" },
    { name: "Barrenjoey", src: "/bar.webp" },
    { name: "StateStreet", src: "/state.svg" },
  ]

  const track = [...logos, ...logos]

  return (
    <div className="relative w-screen overflow-hidden">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* marquee viewport */}
      <div className="overflow-hidden">
        {/* track */}
        <div className="trusted-marquee flex items-center py-4">
          {[...track, ...track].map((l, idx) => (
            <div
              key={`${l.name}-${idx}`}
              className="mx-10 flex items-center justify-center shrink-0"
            >
              <img
                src={l.src}
                alt={l.name}
                className="h-9 w-auto object-contain "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
    .trusted-marquee {
      width: max-content; /* auto width */
      animation: trusted-marquee 20s linear infinite;
      will-change: transform;
    }

    .trusted-marquee:hover {
      animation-play-state: paused;
    }

    @keyframes trusted-marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .trusted-marquee {
        animation: none;
      }
    }
  `}</style>
    </div>
  )
}

export default function ClientPage() {
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
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Empowering Financial Institutions Globally
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Driving innovation, ensuring regulatory compliance, and maximizing operational efficiency for the world's leading financial institutions.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Supporting financial institutions across all regions and business verticals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Continuous innovation with proven, industry-validated solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Community-driven approach to future-proof against evolving regulations</span>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold transition-colors">
                  <ArrowRight size={20} />
                  Discover Solutions
                </button>
              </div>
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
          </motion.div>
        </div>
      </section>

      {/* Brands Section with Marquee */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <p className="text-center text-gray-600 mb-8 text-lg">Trusted by leading financial institutions worldwide</p>
          <TrustedOrganizationsMarquee />
        </motion.div>
      </section>

      {/* Client Case Studies */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover how leading financial institutions leverage One Constellation solutions to drive innovation and growth</p>

          {/* Case Study Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12"
          >
            <div className="text-white">
              <span className="text-blue-500 text-sm font-semibold">Proven Implementation Success</span>
              <h3 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">Transforming Global Finance Operations</h3>
              <p className="text-gray-300 mb-6">Leading financial institutions globally choose One Constellation to modernize their operations and accelerate digital transformation.</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our solutions enable financial institutions to streamline compliance processes, enhance operational efficiency, and deliver superior customer experiences. With proven implementations across multiple continents and industry sectors, One Constellation partners with you to achieve your strategic objectives while maintaining the highest standards of data security and regulatory compliance.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From onboarding to ongoing operations, our platform provides the tools and insights your organization needs to thrive in an increasingly complex regulatory environment.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-400 font-semibold underline">
                Explore our solutions →
              </a>
            </div>
            <div className="relative h-80 lg:h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-700">
              <img 
                src="/client-3.jpg"
                alt="Transforming Global Finance Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Client Community Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Client Advisory Community</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                One Constellation's client advisory community represents the collaborative spirit that drives our innovation. Our clients are at the heart of everything we do, providing valuable insights and strategic direction for our product development roadmap. Through ongoing dialogue, industry forums, and collaborative sessions, we ensure our solutions remain at the forefront of financial technology innovation.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/client-1.webp"
                alt="Client Advisory Community"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Client Council Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/client-4.webp"
                alt="Community Engagement"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Community Engagement</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                One Constellation is committed to building strong, lasting partnerships with our clients. We believe that by listening to our clients' needs and collaborating on innovative solutions, we create value that extends far beyond our software platform. Our community engagement initiatives bring together senior leaders and technical experts to share best practices, shape industry standards, and solve the most pressing challenges facing financial institutions today.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Client Forums Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Industry Collaboration</h2>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/client-3.jpg"
                alt="Innovation Through Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Innovation Through Collaboration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                One Constellation brings together industry experts, thought leaders, and financial institution representatives to collaborate on cutting-edge solutions. Our collaborative forums provide a platform where clients can validate product features, share best practices, and collectively shape the future of financial technology.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through these strategic partnerships and collaborative initiatives, we ensure our solutions address the real-world challenges and opportunities facing the financial services industry today and in the future.
              </p>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="flex items-start gap-6">
              <div>
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "One Constellation's commitment to understanding our business challenges and developing solutions that directly address our needs sets them apart. Their collaborative approach ensures we're not just implementing software—we're transforming our operations for the future."
                </p>
                <div>
                  <p className="font-bold text-slate-900">Global Financial Institution Executive</p>
                  <p className="text-gray-600 text-sm">Fortune 500 Financial Services Company</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - More Client Stories */}
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
              <h2 className="text-5xl font-bold text-slate-900 mb-6">More Client Stories</h2>
              <p className="text-lg text-slate-800 mb-8 leading-relaxed">
                For more on One Constellation Client Success Stories, please click on the link below.
              </p>
              <Link href="/case-studies">
                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all border-2 border-slate-900">
                  <ArrowRight size={20} className="text-blue-500" />
                  <span className="text-blue-500">Read More Client Stories</span>
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

