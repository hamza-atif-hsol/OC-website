'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Benefit = {
  id: number
  title: string
  description: string
}

type Feature = {
  id: number
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Achieve Business Transformation',
    description: 'Through no-code configuration and continuous delivery of product updates.',
  },
  {
    id: 2,
    title: 'Reduce Risk',
    description: 'One Constellation CLM offers multi-region support that delivers protection for data privacy, data residency and high availability.',
  },
  {
    id: 3,
    title: 'Realize Operational Efficiencies',
    description: 'Achieve lower total cost of ownership and rapid deployment.',
  },
  {
    id: 4,
    title: 'Create a Superior Client Experience',
    description: 'Through availability of continuous innovation and features.',
  },
]

const features: Feature[] = [
  {
    id: 1,
    title: 'Secure, Fast, Flexible Deployment',
    description: 'With solutions that are developed using best practice approaches that ensure utmost scalability to meet user and data volumes. Implementation efficiency and security requirements.',
  },
  {
    id: 2,
    title: 'Event-Driven, API-First Architecture',
    description: 'Modern architecture supporting real-time data processing and seamless integrations.',
  },
  {
    id: 3,
    title: 'Omni-Channel Capabilities',
    description: 'Deliver consistent experiences across all customer touchpoints.',
  },
  {
    id: 4,
    title: 'No-Code Configuration',
    description: 'Customize without extensive coding, reducing time-to-market.',
  },
  {
    id: 5,
    title: 'Modular Feature-Based Architecture',
    description: 'Scale functionality based on your specific business needs.',
  },
  {
    id: 6,
    title: 'Continuous Delivery',
    description: 'Regular updates and enhancements without disrupting operations.',
  },
]

export default function PlatformOverviewPage() {
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([1])

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

  const toggleFeature = (id: number) => {
    setExpandedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-slate-900 dark:text-slate-100">One Constellation Platform</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: One Constellation Platform Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              One Constellation
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              One Constellation is <span className="font-semibold text-cyan-600 dark:text-cyan-400">the next generation of One Constellation</span>. Born from 25+ years of proven expertise in Client Lifecycle Management, One Constellation is architected for flexibility and power, delivering transformational solutions that future-proof your business.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              With cutting-edge cloud-native architecture, advanced AI capabilities, and industry-leading compliance features, One Constellation empowers financial institutions to achieve business transformation, reduce risk, and create superior customer experiences while maintaining regulatory excellence.
            </p>

            <div className="pt-2">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2 rounded-full px-8">
                Explore More
              </Button>
            </div>
          </div>

          {/* Images - Pill Gallery */}
          <div className="relative flex justify-center items-center h-[520px]">
            <div className="relative flex gap-6">
              {Array.from({ length: pills }).map((_, i) => {
                const pillH = i % 2 === 0 ? 520 : 420
                const xOffset = i * (metrics.pillW + metrics.gap)

                return (
                  <div
                    key={i}
                    data-pill
                    className="relative w-28 md:w-36 rounded-[80px] overflow-hidden shadow-2xl bg-slate-800"
                    style={{ height: `${pillH}px` }}
                  >
                    {/* Auto-masked image */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "url('/platform-3.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: `${metrics.totalW}px ${baseH}px`,
                        backgroundPosition: `-${xOffset}px 0px`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                  </div>
                )
              })}
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-transparent to-teal-400/20 blur-[140px]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: One Constellation Platform */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Images - Pill Gallery */}
            <div className="relative flex justify-center items-center h-[520px]">
              <div ref={containerRef} className="relative flex gap-6">
                {Array.from({ length: pills }).map((_, i) => {
                  const pillH = i % 2 === 0 ? 520 : 420
                  const xOffset = i * (metrics.pillW + metrics.gap)

                  return (
                    <div
                      key={i}
                      data-pill
                      className="relative w-28 md:w-36 rounded-[80px] overflow-hidden shadow-2xl bg-slate-800"
                      style={{ height: `${pillH}px` }}
                    >
                      {/* Auto-masked image */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: "url('/platform-1.jpg')",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: `${metrics.totalW}px ${baseH}px`,
                          backgroundPosition: `-${xOffset}px 0px`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )
                })}
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-transparent to-teal-400/20 blur-[140px]" />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Unified Platform
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                One Constellation brings together comprehensive Client Lifecycle Management capabilities in a single, integrated platform. Designed for the modern financial institution, it combines digital onboarding, compliance management, and client relationship tools into one seamless experience.
              </p>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                With cloud-native architecture and AI-powered intelligence, One Constellation enables financial institutions to streamline operations, ensure compliance, and deliver exceptional client experiences across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: One Constellation for Greater Return on Investment */}
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                One Constellation for Greater Return on Investment
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                One Constellation delivers transformational value to financial institutions with cloud-native SaaS capabilities, AI-powered intelligence, and the proven expertise of 25+ years of One Constellation heritage.
              </p>
            </div>

            {/* Right Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  {/* Number Circle */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 bg-blue-50/30 dark:bg-blue-900/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {benefit.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Features Section - Expandable */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
            One Constellation Delivers
          </h2>

          <div className="space-y-3 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-slate-950/50 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {/* Header */}
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 text-left">
                    {/* Number */}
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 bg-blue-50/40 dark:bg-blue-900/30 flex items-center justify-center">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {feature.id}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 transition-transform ${
                      expandedFeatures.includes(feature.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Description - Expandable */}
                {expandedFeatures.includes(feature.id) && (
                  <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 py-16 md:py-24 overflow-hidden">
        {/* Decorative wave */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform<br />Your Institution?
            </h2>
            <p className="text-lg text-blue-100">
              Discover how One Constellation can help you achieve business transformation, reduce risk, and deliver superior client experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-[#0a5583] text-white hover:bg-white/10 dark:border-slate-300 dark:text-slate-100"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
