"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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

const reports = [
  {
    id: 1,
    title: "QKS AI Maturity Matrix™: One Constellation Recognized as the Most Valuable Pioneer in KYC & CLM",
    excerpt: "Discover why QKS Group names One Constellation the Most Valuable Pioneer in Its AI Maturity Matrix for KYC &...",
    image: "/report-1.avif",
    type: "Read Report",
    link: "#",
  },
  {
    id: 2,
    title: "One Constellation Named Category Leader in Chartis KYC Data and Solutions, 2025 Quadrant Update",
    excerpt: "The 2025 KYC Update highlights the shift to integrated, data-driven KYC, where One Constellation leads with...",
    image: "/report-2.webp",
    type: "Read Report",
    link: "#",
  },
  {
    id: 3,
    title: "One Constellation Retains Top Awards & Climbs to #29 in Chartis RiskTech100®",
    excerpt: "One Constellation Retains Top Awards & Moves up to #29 in Chartis RiskTech100®",
    image: "/report-3.webp",
    type: "Read Article",
    link: "#",
  },
  {
    id: 4,
    title: "One Constellation Named Leader in Forrester Wave KYC & Customer Data Solutions",
    excerpt: "Forrester recognizes One Constellation as a leader in the KYC and customer data solutions market...",
    image: "/report-3.webp",
    type: "Read Report",
    link: "#",
  },
  {
    id: 5,
    title: "Gartner Magic Quadrant for Know Your Customer (KYC) Solutions",
    excerpt: "One Constellation positions as a leader in the Gartner Magic Quadrant for KYC Solutions...",
    image: "/report-1.avif",
    type: "Read Report",
    link: "#",
  },
  {
    id: 6,
    title: "Deloitte Global AI Outlook: Financial Services Innovation Report",
    excerpt: "One Constellation featured in Deloitte's global outlook on AI adoption in financial services...",
    image: "/report-2.webp",
    type: "Read Report",
    link: "#",
  },
]

export default function AnalystReportsPage() {
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
            <span className="text-slate-600">Analyst Reports</span>
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Analyst Reports
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-2xl"
            >
              Discover what leading analyst firms say about One Constellation's leadership in Client Lifecycle Management and KYC solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reports.map((report) => (
              <motion.div
                key={report.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
              >
                {/* Report Image */}
                <div className="relative overflow-hidden bg-slate-100 aspect-video flex items-center justify-center p-6">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Report Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-3 group-hover:text-slate-700 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {report.excerpt}
                  </p>
                  <Link
                    href={report.link}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors"
                  >
                    {report.type}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-slate-900"
            >
              Stay Updated on Industry Recognition
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600"
            >
              One Constellation is consistently recognized by leading analyst firms as a category leader in Client Lifecycle Management and KYC solutions. Explore our latest analyst reports to learn more about our innovations and market position.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors"
              >
                Request a Report
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full font-semibold transition-colors"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
