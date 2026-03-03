"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight, Phone, Volume2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const FintechPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
  })

  const helpItems = [
    {
    //   icon: "⚡",
      title: "Instant Identity Verification",
      description:
        "Transform your customer onboarding process with our intelligent, AI-powered KYC solution. Achieve swift and accurate identity verification with instant results.",
    },
    {
    //   icon: "📊",
      title: "Regulatory Compliance & AML",
      description:
        "Our comprehensive AML solutions include customer due diligence, transaction monitoring, sanctions screening, and management, ensuring regulatory compliance and operational efficiency.",
    },
    {
    //   icon: "👥",
      title: "Streamlined Onboarding",
      description:
        "Our tailor-made e-KYC solutions provide businesses with streamlined and automated processes that allow for effortless workflow and reduced operational friction.",
    },
  ]

  const partners = [
    { name: "Ebury", logo: "/fintech-ebury.svg" },
    { name: "iBanFirst", logo: "/fintech-ibanfirst.svg" },
    { name: "ShieldPay", logo: "/fintech-shieldpay.svg" },
    { name: "TerraPay", logo: "/fintech-terrapay.svg" },
  ]

  const benefits = [
    "Swift and accurate identity verification",
    "Comprehensive AML/CFT compliance solutions",
    "Effortless and streamlined onboarding workflows",
    "Secure, enterprise-grade data protection",
  ]

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
            <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Fintechs
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 1: Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Harnessing the Power of E-KYC for Regulatory Compliance
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              One Constellation is a Software as a Service (SaaS) solution that provides a comprehensive e-KYC and AML/CFT Compliance Portal, facilitating digital identity verification, document submission, and compliance management for efficient customer onboarding.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-teal-400 text-lg">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Digital Identity Verification</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-400 text-lg">✓</span>
                <span className="text-slate-700 dark:text-slate-300">AML/CFT Compliance Management</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-400 text-lg">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Secure Data Privacy & Protection</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <Link href="/book-demo">
                <Button className="bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold rounded-full px-8 py-3 h-auto flex items-center gap-2 group">
                  <span className="relative w-6 h-6 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors" />
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  Request a demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - UI Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fintech-hero.jpg"
                alt="KYC Fintech Solution Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Featured Partners */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Partnering with best-in-class organizations to deliver innovation across the client lifecycle.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Over the past decade, we have built and nurtured a trusted network of industry-leading partners. Together, this global ecosystem of expert organizations enables end-to-end Client Lifecycle Management.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6"
            >
              {[
                { name: "BlackRock", logo: "/blackrock-logo-nav.svg" },
                { name: "Standard Chartered", logo: "/Standard_Chartered_.svg" },
                { name: "First Sentier", logo: "/first-sentier-logo-green-white-svg.svg" },
                { name: "MezFi", logo: "/MezFI.png" },
              ].map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={fadeInUp}
                  className="h-20 flex items-center justify-center px-8 py-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-auto object-contain max-w-[180px]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: How Fenergo Can Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center">
            How One Constellation Can Help Your Fintech
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Features List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {helpItems.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                  <div className="flex-shrink-0 text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900"
            >
              <img
                src="/fintech-video.jpg"
                alt="KYC for Fintechs Video"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center hover:bg-teal-500 transition-colors group">
                  <Play className="w-6 h-6 text-slate-950 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: Partners Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Diagonal stripes background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 100">
            <defs>
              <pattern id="diagonal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="20" y2="20" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1440" height="100" fill="url(#diagonal)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology & Partner Ecosystem</h2>
              <p className="text-lg text-teal-100 leading-relaxed max-w-2xl">
                One Constellation is hosted on Google Cloud Services and integrates with market-leading partners to create a comprehensive ecosystem for seamless compliance and identity verification for fintech businesses.
              </p>
              <Link href="/partners" className="text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium mt-4 inline-flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                "Salesforce",
                "AWS",
                "Deloitte",
                "PwC",
                "Luxoft",
                "LSEG",
                "Jumio",
                "Moody's",
                "LexisNexis",
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-white rounded-lg px-6 py-3 flex items-center justify-center min-w-[160px] hover:shadow-lg transition-shadow"
                >
                  <span className="text-slate-900 font-semibold text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Request Demo Form */}
      <section className="relative bg-gradient-to-br from-teal-400 via-cyan-300 to-teal-300 py-16 md:py-24 overflow-hidden">
        {/* Curved top separator */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 100"
            fill="none"
          >
            <path
              d="M0,20 Q360,80 720,80 T1440,20 L1440,100 L0,100 Z"
              fill="currentColor"
              className="text-teal-400"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950">Request a Demo</h2>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-teal-600 text-lg flex-shrink-0 mt-1">✓</span>
                    <span className="text-slate-900 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log(formData)
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-slate-300 rounded-full focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-slate-300 rounded-full focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-slate-300 rounded-full focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Company *
                  </label>
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-slate-300 rounded-full focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold rounded-full py-3 h-auto flex items-center justify-center gap-2 group"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FintechPage
