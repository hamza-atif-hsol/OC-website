"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const events = [
  {
    id: 1,
    slug: "transaction-monitoring-webinar",
    title: "From Blind Spots to Clarity: How Transaction Monitoring Protects Asset Managers and Servicers",
    date: "March 10, 2026",
    dateRange: { from: "March 10, 2026", to: "March 10, 2026" },
    category: "Webinar",
    excerpt: "Join us for an in-depth discussion on how advanced transaction monitoring solutions protect asset managers and servicers.",
    image: "/event-1.jpg",
    link: "/events/transaction-monitoring-webinar",
  },
  {
    id: 2,
    slug: "moneylive-london-2026",
    title: "MoneyLIVE London 2026",
    date: "March 9-10, 2026",
    dateRange: { from: "March 9, 2026", to: "March 10, 2026" },
    category: "Conference",
    excerpt: "Meet One Constellation at MoneyLIVE London 2026. Discover the latest in financial crime compliance and digital transformation.",
    image: "/event-2.jpg",
    link: "/events/moneylive-london-2026",
  },
  {
    id: 3,
    slug: "investops-usa-2026",
    title: "Meet us at InvestOps USA",
    date: "March 10-11, 2026",
    dateRange: { from: "March 10, 2026", to: "March 11, 2026" },
    category: "Conference",
    excerpt: "Connect with our team at InvestOps USA 2026. Explore compliance solutions for investment operations.",
    image: "/event-3.jpg",
    link: "/events/investops-usa-2026",
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

export default function EventsPage() {
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
              Upcoming Events & Webinars
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Connect with us at industry events and join our webinars to learn more about compliance solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event) => (
              <Link key={event.id} href={event.link}>
                <motion.article
                  variants={fadeInUp}
                  className="group cursor-pointer h-full bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Event Image */}
                  <div className="relative overflow-hidden bg-slate-100 h-40">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-event.jpg"
                      }}
                    />
                  </div>

                  {/* Event Content */}
                  <div className="p-6 space-y-4">
                    {/* Category Badge */}
                    <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      {event.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-3">
                      {event.title}
                    </h3>

                    {/* Date Range Banner */}
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-4 text-white space-y-2">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div className="text-sm space-y-1">
                          <div className="text-xs opacity-90">From</div>
                          <div className="font-semibold">{event.dateRange.from}</div>
                          <div className="text-xs opacity-90 mt-2">To</div>
                          <div className="font-semibold">{event.dateRange.to}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full text-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium py-2">
                      View this event
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
