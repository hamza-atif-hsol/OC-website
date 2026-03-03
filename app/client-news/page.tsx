"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const clientNews = [
  {
    id: 1,
    slug: "tmf-global-kyc",
    title: "TMF Group: Simplifying Global KYC Across 87 Jurisdictions",
    date: "November 2024",
    excerpt: "Achieving global consistency without sacrificing local regulatory precision across multiple jurisdictions.",
    image: "/case-studies/tmf-group-kyc.avif",
    link: "/client-news/tmf-global-kyc",
  },
  {
    id: 2,
    slug: "scaling-enterprise-growth-cloud",
    title: "Scaling Enterprise Growth Through Cloud-Based Client Lifecycle Management",
    date: "November 2024",
    excerpt: "Discover how one of the largest full-service banks in Canada optimized their client lifecycle management.",
    image: "/case-studies/scaling-enterprise-growth.avif",
    link: "/client-news/scaling-enterprise-growth-cloud",
  },
  {
    id: 3,
    slug: "real-time-significance-classification",
    title: "Real-Time Significance Classification at Scale with AI-Driven Automation",
    date: "November 2024",
    excerpt: "How a major North American bank leveraged AI to achieve policy-aligned significance classification in real-time.",
    image: "/case-studies/real-time-significance.avif",
    link: "/client-news/real-time-significance-classification",
  },
  {
    id: 4,
    slug: "transforming-screening-efficiency",
    title: "Transforming Screening Efficiency with AI-Driven Deduplication",
    date: "November 2024",
    excerpt: "Reduce false positives and operational costs while improving compliance accuracy with intelligent screening.",
    image: "/case-studies/transforming-screening.avif",
    link: "/client-news/transforming-screening-efficiency",
  },
  {
    id: 5,
    slug: "accelerating-onboarding-reviews",
    title: "Accelerating Onboarding and Reviews with Intelligent Document Processing",
    date: "November 2024",
    excerpt: "Streamline client onboarding processes with intelligent document processing and automated compliance verification.",
    image: "/case-studies/accelerating-onboarding.avif",
    link: "/client-news/accelerating-onboarding-reviews",
  },
  {
    id: 6,
    slug: "modernizing-investor-document",
    title: "Modernizing Investor Document Processing with One Constellation",
    date: "November 2024",
    excerpt: "Transform document workflows with intelligent processing capabilities for enterprise-scale compliance operations.",
    image: "/case-studies/modernizing-investor.avif",
    link: "/client-news/modernizing-investor-document",
  },
]

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

export default function ClientNewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-6xl font-medium text-slate-900"
            >
              Client News
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Keep up to date on the latest news from One Constellation Clients
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clientNews.map((item) => (
              <Link key={item.id} href={item.link}>
                <motion.article
                  variants={fadeInUp}
                  className="group cursor-pointer h-full"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <button className="text-blue-400 hover:text-blue-500 transition-colors text-sm font-medium inline-flex items-center gap-1">
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
