"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Share2, Clock } from "lucide-react"
import Link from "next/link"
import React from "react"

const eventArticles: Record<string, any> = {
  "transaction-monitoring-webinar": {
    id: 1,
    title: "From Blind Spots to Clarity: How Transaction Monitoring Protects Asset Managers and Servicers",
    date: "March 10, 2026",
    dateRange: { from: "March 10, 2026", to: "March 10, 2026" },
    time: "2:00 PM - 3:00 PM EST",
    category: "Webinar",
    author: "Compliance Team",
    location: "Virtual",
    image: "/event-1.jpg",
    content: `
      <h2>Event Overview</h2>
      <p>Join us for an exclusive webinar on how advanced transaction monitoring solutions protect asset managers and servicers from financial crime risks. This session will explore practical strategies and real-world case studies demonstrating the impact of effective transaction monitoring.</p>
      
      <h2>What You'll Learn</h2>
      <ul>
        <li>Key transaction monitoring challenges for asset managers and servicers</li>
        <li>How AI-powered monitoring can detect suspicious patterns in real-time</li>
        <li>Best practices for implementing transaction monitoring systems</li>
        <li>Regulatory requirements and compliance strategies</li>
        <li>Case studies from leading financial institutions</li>
      </ul>
      
      <h2>Who Should Attend</h2>
      <p>This webinar is ideal for:</p>
      <ul>
        <li>Compliance officers and risk managers</li>
        <li>Operations teams at asset management firms</li>
        <li>Servicer and custodian professionals</li>
        <li>FinTech and fintech service providers</li>
        <li>Anyone responsible for transaction monitoring</li>
      </ul>
      
      <h2>Speaker</h2>
      <p>Our expert panel includes senior compliance leaders with 20+ years of experience in implementing transaction monitoring solutions across major financial institutions.</p>
      
      <h2>Registration</h2>
      <p>Spaces are limited. Register now to secure your spot and receive the webinar link and materials.</p>
    `,
  },
  "moneylive-london-2026": {
    id: 2,
    title: "MoneyLIVE London 2026",
    date: "March 9-10, 2026",
    dateRange: { from: "March 9, 2026", to: "March 10, 2026" },
    time: "Full Day Conference",
    category: "Conference",
    author: "Events Team",
    location: "London, UK",
    image: "/event-2.jpg",
    content: `
      <h2>About MoneyLIVE London 2026</h2>
      <p>MoneyLIVE London is Europe's premier financial technology and innovation conference, bringing together leaders from banking, compliance, and financial services. This year's event will focus on digital transformation, regulatory innovation, and emerging technologies in financial services.</p>
      
      <h2>Conference Highlights</h2>
      <ul>
        <li>200+ expert speakers and thought leaders</li>
        <li>50+ breakout sessions and panel discussions</li>
        <li>Exhibition floor showcasing latest fintech solutions</li>
        <li>Networking opportunities with industry peers</li>
        <li>Hands-on workshops and training sessions</li>
      </ul>
      
      <h2>One Constellation Presence</h2>
      <p>Visit One Constellation at booth #12 to discuss:</p>
      <ul>
        <li>AI-powered compliance solutions</li>
        <li>Digital client onboarding innovations</li>
        <li>Transaction monitoring best practices</li>
        <li>Regulatory compliance frameworks</li>
      </ul>
      
      <h2>Key Topics</h2>
      <p>This year's conference will cover:</p>
      <ul>
        <li>AI and Machine Learning in Finance</li>
        <li>Financial Crime Prevention</li>
        <li>Digital Banking Transformation</li>
        <li>Regulatory Technology (RegTech)</li>
        <li>Cybersecurity and Data Privacy</li>
      </ul>
      
      <h2>Networking Events</h2>
      <p>Special evening receptions and networking events are scheduled for all attendees. Connect with decision makers and innovators in the financial services industry.</p>
    `,
  },
  "investops-usa-2026": {
    id: 3,
    title: "Meet us at InvestOps USA",
    date: "March 10-11, 2026",
    dateRange: { from: "March 10, 2026", to: "March 11, 2026" },
    time: "Full Day Conference",
    category: "Conference",
    author: "Events Team",
    location: "New York, USA",
    image: "/event-3.jpg",
    content: `
      <h2>About InvestOps USA 2026</h2>
      <p>InvestOps USA is the leading conference for investment operations professionals, bringing together operations leaders, compliance officers, and technology innovators from the investment management industry. The conference features cutting-edge insights on operational excellence and compliance.</p>
      
      <h2>Conference Program</h2>
      <ul>
        <li>20+ keynote presentations</li>
        <li>40+ breakout sessions</li>
        <li>Vendor exhibition showcase</li>
        <li>Networking lunch and receptions</li>
        <li>Awards ceremony for industry excellence</li>
      </ul>
      
      <h2>Why Attend?</h2>
      <p>Connect with the investment operations community and explore:</p>
      <ul>
        <li>Digital onboarding and client lifecycle management</li>
        <li>Compliance automation and risk management</li>
        <li>Operational efficiency improvements</li>
        <li>Emerging technology trends in operations</li>
        <li>Industry best practices and case studies</li>
      </ul>
      
      <h2>One Constellation at InvestOps USA</h2>
      <p>Meet our team at booth #45 to discuss how One Constellation helps investment operations teams streamline compliance and enhance client experiences. We'll showcase live demos of our latest solutions.</p>
      
      <h2>Special Events</h2>
      <p>Don't miss our sponsored evening reception on March 10th. Network with peers and learn about the latest innovations in investment operations.</p>
      
      <h2>Attendee Demographics</h2>
      <p>Expected attendees include:</p>
      <ul>
        <li>Asset managers and investment advisors</li>
        <li>Operations and compliance officers</li>
        <li>Technology and innovation leaders</li>
        <li>Custodians and service providers</li>
        <li>Regulatory and legal professionals</li>
      </ul>
    `,
  },
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventArticles[params.slug]

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Event Not Found</h1>
          <Link href="/events" className="text-teal-600 hover:text-teal-700">
            Back to Events
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Event Content */}
      <article className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Meta Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded-full uppercase">
                  {event.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {event.title}
              </h1>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase">From</p>
                      <p className="text-sm font-medium text-slate-900">{event.dateRange.from}</p>
                      <p className="text-xs font-semibold text-slate-500 uppercase mt-2">To</p>
                      <p className="text-sm font-medium text-slate-900">{event.dateRange.to}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase">Location</p>
                      <p className="text-sm font-medium text-slate-900">{event.location}</p>
                      <p className="text-xs font-semibold text-slate-500 uppercase mt-2">Time</p>
                      <p className="text-sm font-medium text-slate-900">{event.time}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-900">{event.author}</p>
                  <p className="text-xs text-slate-500">Event ID: {event.id}</p>
                </div>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Event Body */}
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <div
                dangerouslySetInnerHTML={{ __html: event.content }}
                className="space-y-6"
              />
            </div>

            {/* Registration CTA */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="bg-gradient-to-r from-teal-400/10 to-cyan-400/10 border border-teal-200/30 rounded-lg p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Register Now</h3>
                <p className="text-slate-600">
                  Secure your spot at this exclusive event and join industry leaders for insights and networking opportunities.
                </p>
                <button className="px-6 py-2 rounded-full border-2 border-teal-400 text-teal-600 hover:bg-teal-400/10 transition-colors font-medium">
                  Register for Event
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* More Events */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">More Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {Object.entries(eventArticles)
              .slice(0, 3)
              .map(([slug, item]) => (
                <Link
                  key={slug}
                  href={`/events/${slug}`}
                  className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-slate-100 h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-event.jpg"
                      }}
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-xs font-semibold text-teal-700 bg-teal-100 px-2 py-1 rounded-full inline-block uppercase">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
