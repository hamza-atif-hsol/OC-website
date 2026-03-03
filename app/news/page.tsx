"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const news = [
  {
    id: 1,
    slug: "aml-vs-kyc",
    title: "AML vs KYC: Understanding the Differences, Ensuring Compliance, and Adopting Best Practices",
    date: "May 2, 2025",
    category: "AML, KYC",
    excerpt: "The concept of a multi-brand system has gained traction, allowing businesses to manage various brands.",
    image: "/aml.webp",
    link: "/news/aml-vs-kyc",
  },
  {
    id: 2,
    slug: "understanding-fcrm",
    title: "Understanding Financial Crime Risk Management (FCRM)",
    date: "May 2, 2025",
    category: "FCRM",
    excerpt: "The concept of a multi-brand system has gained traction, allowing businesses to manage various brands.",
    image: "/fcrm.webp",
    link: "/news/understanding-fcrm",
  },
  {
    id: 3,
    slug: "digital-transformation",
    title: "Digital Transformation in Compliance",
    date: "April 28, 2025",
    category: "Compliance",
    excerpt: "Exploring how digital tools are revolutionizing compliance processes across financial institutions.",
    image: "/news-3.jpg",
    link: "/news/digital-transformation",
  },
  {
    id: 4,
    slug: "regulatory-updates",
    title: "Regulatory Updates Q2 2025",
    date: "April 15, 2025",
    category: "Regulatory",
    excerpt: "Stay updated with the latest regulatory changes affecting financial institutions globally.",
    image: "/news-4.jpg",
    link: "/news/regulatory-updates",
  },
  {
    id: 5,
    slug: "client-onboarding-best-practices",
    title: "Client Onboarding Best Practices",
    date: "April 10, 2025",
    category: "Onboarding",
    excerpt: "Learn the best practices for streamlined and secure client onboarding processes.",
    image: "/news-5.jpg",
    link: "/news/client-onboarding-best-practices",
  },
  {
    id: 6,
    slug: "technology-stack-banking",
    title: "Technology Stack for Modern Banking",
    date: "April 5, 2025",
    category: "Technology",
    excerpt: "Essential technology components for building a modern and secure banking infrastructure.",
    image: "/news-6.jpg",
    link: "/news/technology-stack-banking",
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
      staggerChildren: 0.2,
    },
  },
}

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-4"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-medium text-slate-900">
              News
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Latest industry news, regulatory updates, and market insights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {news.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <Link href={item.link} className="block">
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-cyan-400 uppercase">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.excerpt}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-500 transition-colors text-sm font-medium">
                      Read News
                    </button>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
