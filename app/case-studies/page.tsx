"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

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

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "TMF Group: Simplifying Global KYC Across 87 Jurisdictions",
      description: "Achieving global consistency without sacrificing local regulatory precision.",
      image: "/case-1.png",
      tag: "Read Case Study",
      isVideo: false,
      duration: null,
      link: "#",
    },
    {
      id: 2,
      title: "LBBW Moves Compliance to the Cloud for Faster Client Reviews",
      description: "When Germany's largest state-owned bank needed faster, smarter client reviews and better compliance...",
      image: "/case-2.jpg",
      tag: "Watch now",
      isVideo: true,
      duration: "3:24",
      link: "#",
    },
    {
      id: 3,
      title: "Client Council Highlights 2025",
      description: "Hear from some of the customers that attended our annual Client Council at the Powerscourt Hotel...",
      image: "/case-3.jpg",
      tag: "Watch now",
      isVideo: true,
      duration: "1:52",
      link: "#",
    },
    {
      id: 4,
      title: "Driving Operational Efficiencies and Positive User Experiences",
      description: "Learn how Vistra, a leading global fund and corporate services provider, is redefining client...",
      image: "/case-3.jpg",
      tag: "Watch now",
      isVideo: true,
      duration: "2:52",
      link: "#",
    },
    {
      id: 5,
      title: "StoneX Re-imagines Client Onboarding and Lifecycle Management",
      description: "StoneX implements One Constellation to deliver improved customer experience with unified data and...",
      image: "/case-1.png",
      tag: "Watch now",
      isVideo: true,
      duration: "2:47",
      link: "#",
    },
    {
      id: 6,
      title: "Scaling Enterprise Growth Through Cloud-Based Client Lifecycle Management",
      description: "Discover how one of the largest full-service banks in Canada, operating across asset...",
      image: "/case-2.jpg",
      tag: "Read Case Study",
      isVideo: false,
      duration: null,
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Explore how leading financial institutions are transforming their operations with One Constellation solutions.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={fadeInUp}
                className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Video Play Button or Duration Badge */}
                  {study.isVideo ? (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg">
                          <Play size={24} className="text-slate-900 fill-slate-900" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white px-3 py-1 rounded text-sm font-medium">
                        {study.duration}
                      </div>
                    </>
                  ) : null}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Action Link */}
                  <Link href={study.link}>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      {study.tag}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-5xl font-bold text-slate-900 mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-lg text-slate-800 mb-8 leading-relaxed">
                Join leading financial institutions that trust One Constellation to drive innovation and growth.
              </p>
              <Link href="/book-demo">
                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all border-2 border-slate-900">
                  <span className="text-blue-500">Get Started Today</span>
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
