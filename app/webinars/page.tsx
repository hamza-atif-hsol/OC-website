"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
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

const webinars = [
  {
    id: 1,
    title: "How to Scale Without Risk: The Responsible AI Playbook",
    duration: "30:38",
    image: "/webinar-1.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "US FinCrime Benchmark: Uncovering the Trends Defining North American FinCrime Operations",
    duration: "44:36",
    image: "/webinar-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Where Regulators Will Strike Next: Lessons From 2025 AML Enforcement Actions",
    duration: "45:56",
    image: "/webinar-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Regulatory Horizon Scanning 2026",
    duration: "46:17",
    image: "/webinar-3.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "The 2025 FinCrime Operations Benchmark",
    duration: "53:39",
    image: "/webinar-1.jpeg",
    link: "#",
  },
  {
    id: 6,
    title: "The State of Agentic AI in Asia-Pacific Financial Services – Are you Ready?",
    duration: "1:00:09",
    image: "/webinar-2.jpg",
    link: "#",
  },
]

export default function WebinarsPage() {
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
            <span className="text-slate-600">Webinars</span>
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
              Webinars
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-2xl"
            >
              Join our expert-led webinars exploring the latest trends in KYC, compliance, financial crime prevention, and AI innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {webinars.map((webinar) => (
              <motion.div
                key={webinar.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
              >
                {/* Webinar Image with Play Button */}
                <div className="relative overflow-hidden bg-slate-100 aspect-video flex items-center justify-center">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
                      <Play className="w-7 h-7 text-slate-900 fill-slate-900 ml-1" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-3 py-1 rounded text-xs font-semibold">
                    {webinar.duration}
                  </div>
                </div>

                {/* Webinar Content */}
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-3 group-hover:text-slate-700 transition-colors flex-1">
                    {webinar.title}
                  </h3>
                  <Link
                    href={webinar.link}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors"
                  >
                    Watch now
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
              Stay Updated with Live & On-Demand Webinars
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600"
            >
              Our webinars feature industry experts discussing the latest compliance challenges, regulatory trends, and innovative solutions in financial services technology.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors"
              >
                Register for Upcoming Webinar
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
