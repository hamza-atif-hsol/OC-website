"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function PrivacyUpdatesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <motion.div
        className="px-8 sm:px-12 lg:px-16 max-w-6xl mx-auto pb-20 pt-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
          One Constellation Security Incident - Data Protection Update
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">
          No Impact on Customer Data or Platform Integrity
        </h2>

        {/* Main Body Text */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            One Constellation has become aware of a security incident affecting a third-party service integration. While our systems and infrastructure were impacted, we want to assure our customers and partners that we responded swiftly and comprehensively to contain the incident.
          </p>

          <p>
            To be clear, this incident <span className="font-semibold text-slate-900">did not affect any customer data or compromise platform integrity</span>. It had no impact on our operations or our work for customers - we can confirm that no data in any of our customer-facing platforms was accessed, altered or exfiltrated. All customer environments remained fully secure throughout and continue to be fully secure.
          </p>

          <p>
            At One Constellation, we understand that our customers depend on us to maintain the highest standards of data security and privacy. While the impact was contained, we believe in transparency and want to explain what happened and the steps we took to respond to the incident.
          </p>

          <p>
            Upon discovery of suspicious activity linked to a third-party integration, One Constellation's security team was immediately notified. We were informed that the activity may have affected access to certain systems. In response to this alert, we took immediate action to terminate the affected integration and disable all related access points within our environment as a precautionary measure.
          </p>

          <p>
            Our subsequent comprehensive security audit detected attempts to access our systems through the compromised integration. We immediately activated our incident response procedures and our dedicated security team commenced a full investigation.
          </p>

          <p>
            Our investigation determined that while the threat actor attempted to exploit the integration, no customer data was accessed or compromised. Our investigation further confirmed that the incident was fully contained and isolated to internal systems only. All One Constellation systems and customer platforms remain secure.
          </p>

          <p>
            Should you have any questions about this incident or our data protection measures, please reach out to us at <a href="mailto:info@one-constellation.com" className="text-blue-600 hover:text-blue-700 underline">info@one-constellation.com</a>.
          </p>

          {/* Media Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-semibold text-slate-900 mb-4">For media queries, please contact:</p>
            <div className="space-y-3 text-gray-700">
              <p>
                <a href="tel:+6569784780" className="text-blue-600 hover:text-blue-700 underline">+65 6978 4780</a>
              </p>
              <p>
                <a href="mailto:info@one-constellation.com" className="text-blue-600 hover:text-blue-700 underline">info@one-constellation.com</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
