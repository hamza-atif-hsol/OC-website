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

const whitepapers = [
  {
    id: 1,
    title: "Implementing Perpetual KYC for Enhanced Risk Management",
    excerpt: "In this whitepaper, Deloitte and One Constellation demonstrate how pKYC, through the use of modern...",
    image: "/brouncher-4.jpeg",
    type: "Read Whitepaper",
    link: "#",
  },
  {
    id: 2,
    title: "Target Operating Models That Work: From Vision to Value",
    excerpt: "In this whitepaper, One Constellation and PwC break down the strategic risks of an ineffective TOM, explain how...",
    image: "/brouncher-1.jpg",
    type: "Read Whitepaper",
    link: "#",
  },
  {
    id: 3,
    title: "AI Governance",
    excerpt: "This whitepaper examines the regulatory landscape surrounding AI. One Constellation's control framework for...",
    image: "/brouncher-2.jpg",
    type: "Read Whitepaper",
    link: "#",
  },
  {
    id: 4,
    title: "Agentic KYC: Clearing the Periodic Review Backlog and Maintaining",
    excerpt: "Explore how agentic KYC solutions can help financial institutions clear periodic review backlogs and maintain compliance...",
    image: "/brouncher-3.jpg",
    type: "Read Whitepaper",
    link: "#",
  },
  {
    id: 5,
    title: "Thinking of Building Your Financial Crime Ecosystem?",
    excerpt: "This whitepaper provides insights into building a comprehensive financial crime management ecosystem with modern technology...",
    image: "/brouncher-4.jpeg",
    type: "Read Whitepaper",
    link: "#",
  },
  {
    id: 6,
    title: "Modernising to Compete in a Changing Market",
    excerpt: "Learn how financial institutions can modernize their operations to stay competitive in today's rapidly evolving market...",
    image: "/brouncher-5.jpg",
    type: "Read Whitepaper",
    link: "#",
  },
]

export default function WhitepaperPage() {
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
            <span className="text-slate-600">Whitepapers</span>
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
              Whitepapers
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-2xl"
            >
              Explore in-depth research and insights from One Constellation and our partners on the latest trends in financial services technology and compliance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whitepapers.map((paper) => (
              <motion.div
                key={paper.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
              >
                {/* Paper Image */}
                <div className="relative overflow-hidden bg-slate-100 aspect-video flex items-center justify-center p-6">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>

                {/* Paper Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-3 group-hover:text-slate-700 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {paper.excerpt}
                  </p>
                  <Link
                    href={paper.link}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors"
                  >
                    {paper.type}
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
              Deepen Your Industry Knowledge
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600"
            >
              Our whitepapers provide comprehensive insights into KYC, compliance, financial crime prevention, and digital transformation. Download our latest research to stay ahead of industry trends.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors"
              >
                Request a Whitepaper
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
