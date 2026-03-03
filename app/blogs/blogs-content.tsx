"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const news = [
  {
    id: 1,
    slug: "ai-powered-compliance",
    title: "One Constellation Launches AI-Powered Compliance Engine",
    date: "January 10, 2025",
    category: "Product Launch",
    excerpt: "Revolutionary AI technology to automate complex compliance workflows with 95% accuracy.",
    image: "/blog1.jpg",
    link: "/blogs/ai-powered-compliance",
  },
  {
    id: 2,
    slug: "gartner-magic-quadrant",
    title: "One Constellation Named Leader in Gartner Magic Quadrant",
    date: "January 5, 2025",
    category: "Awards",
    excerpt: "Recognized as a leader in Know Your Customer and AML solutions for the 3rd consecutive year.",
    image: "/blog2.jpg",
    link: "/blogs/gartner-magic-quadrant",
  },
  {
    id: 3,
    slug: "singapore-expansion",
    title: "Expansion: New Regional Hub in Singapore",
    date: "December 28, 2024",
    category: "Company News",
    excerpt: "Strengthening our presence in Asia-Pacific with a new office to serve regional clients.",
    image: "/blog3.jpg",
    link: "/blogs/singapore-expansion",
  },
]

const categories = {
  "Product Launch": "bg-blue-400",
  Awards: "bg-yellow-300",
  "Company News": "bg-purple-400",
  Partnerships: "bg-green-400",
  Compliance: "bg-accent",
}

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

export default function NewsroomPage() {
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
              Blogs
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Digital Efficiency, Frictionless Compliance, Exceptional Client Journeys.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
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
              <Link key={item.id} href={item.link}>
                <motion.article
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.excerpt}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-500 transition-colors text-sm font-medium">
                      Read Blog
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
