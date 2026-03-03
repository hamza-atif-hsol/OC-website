"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import React from "react"

const partnerLogos = [
  { name: "Standard Bank", src: "/icbc.webp" },
  { name: "Mizuho", src: "/miz.svg" },
  { name: "NAB", src: "/nab.webp" },
  { name: "Macquarie", src: "/mac.svg" },
  { name: "Santander", src: "/stander.svg" },
  { name: "Barrenjoey", src: "/bar.webp" },
  { name: "State Street", src: "/state.svg" },
]

const partnerDirectory = [
  {
    id: 1,
    name: "Standard Bank",
    logo: "/icbc.webp",
    description: "Standard Bank is a leading financial institution trusted by One Constellation for innovative compliance solutions across their global operations.",
  },
  {
    id: 2,
    name: "Mizuho",
    logo: "/miz.svg",
    description: "Mizuho Financial Group is a major global financial institution leveraging One Constellation's solutions for enhanced regulatory compliance.",
  },
  {
    id: 3,
    name: "NAB",
    logo: "/nab.webp",
    description: "National Australia Bank (NAB) is one of Australia's leading financial institutions utilizing One Constellation's platforms for client management.",
  },
  {
    id: 4,
    name: "Macquarie",
    logo: "/mac.svg",
    description: "Macquarie Group is a leading Australian financial services company partnering with One Constellation for advanced compliance solutions.",
  },
  {
    id: 5,
    name: "Santander",
    logo: "/stander.svg",
    description: "Santander is a global banking leader trusted by One Constellation for delivering innovative client lifecycle management across its operations.",
  },
  {
    id: 6,
    name: "Barrenjoey",
    logo: "/bar.webp",
    description: "Barrenjoey is a boutique investment bank leveraging One Constellation's solutions for streamlined compliance and client onboarding processes.",
  },
  {
    id: 7,
    name: "State Street",
    logo: "/state.svg",
    description: "State Street is a leading global financial services provider partnering with One Constellation for enterprise-grade compliance technology.",
  },
]

const partnerBenefits = [
  {
    number: "1",
    title: "A market leader with unrivalled experience",
    description: "With 80+ financial services clients live on our solutions, One Constellation is an unrivalled market leader in Client Lifecycle Management technologies. We have been designing, developing and delivering digital Client Lifecycle Management solutions and experiences since 2009. With 850+ regulatory and technology employees across 15 global offices, you will have access to experts with deep specialism and domain expertise.",
  },
  {
    number: "2",
    title: "Joint marketing supports",
    description: "The One Constellation Partner Program comes with a range of co-marketing supports designed to tell the story behind our partner and client successes, raise awareness of our partnership and deliver warm, qualified leads with financial services firms that are ready to take their next steps with One Constellation. These supports include press releases, case studies, webinars, videos and roundtable events.",
  },
  {
    number: "3",
    title: "A dedicated partner manager",
    description: "Every partner has a dedicated Partner Manager, who is responsible for ensuring the partner relationship is set up for success, achieves momentum and delivers desired key achievements for all parties.",
  },
  {
    number: "4",
    title: "Training & enablement",
    description: "One Constellation provides our partner firms with access to One Constellation University to optimize their understanding, experience and competencies in using and deploying One Constellation's award-winning CLM software solutions. Partners also have access to a full range of training, documentation and materials to educate and engage key personnel working with One Constellation.",
  },
]

const partnerTypes = [
  {
    id: 1,
    title: "Advisory Partners",
    subtitle: "Collaborating for Go-To-Market Success",
    description: "Consulting and advisory partners who understand the One Constellation value proposition and provide consultancy services around the One Constellation solution.",
    image: "/partner-2.avif",
  },
  {
    id: 2,
    title: "Product Integration Partners",
    subtitle: "Best-in-class product and data integrations",
    description: "Product and proprietary data vendors that have integrated fully with One Constellation's products to compliment or augment our offerings.",
    image: "/partner-3.jfif",
  },
  {
    id: 3,
    title: "Implementation Partners",
    subtitle: "Delivering for Success",
    description: "One Constellation's eco-system of global and regional delivery and systems integration partners who deliver and provide support for One Constellation clients.",
    image: "/partner-4.jfif",
  },
  {
    id: 4,
    title: "Technology Alliances",
    subtitle: "Innovating together for the best in CLM and TM",
    description: "Large-scale technology and platform players who benefit from One Constellation business via infrastructure or product, or who provide significant potential scale through marketplaces or reseller motions.",
    image: "/partner-5.png",
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
      staggerChildren: 0.1,
    },
  },
}

/* ---------------------------------- */
/* Partners Marquee Slider */
/* ---------------------------------- */

type PartnerLogo = { name: string; src: string }

function PartnersMarquee() {
  const logos: PartnerLogo[] = [
      { name: "Standard Bank", src: "/icbc.webp" },
  { name: "Mizuho", src: "/miz.svg" },
  { name: "NAB", src: "/nab.webp" },
  { name: "Macquarie", src: "/mac.svg" },
  { name: "Santander", src: "/stander.svg" },
  { name: "Barrenjoey", src: "/bar.webp" },
  { name: "State Street", src: "/state.svg" },
  ]

  const track = [...logos, ...logos]

  return (
    <div className="relative w-screen overflow-hidden">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* marquee viewport */}
      <div className="overflow-hidden">
        {/* track */}
        <div className="partners-marquee flex items-center py-4">
          {[...track, ...track].map((l, idx) => (
            <div
              key={`${l.name}-${idx}`}
              className="mx-10 flex items-center justify-center shrink-0"
            >
              <img
                src={l.src}
                alt={l.name}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-marquee {
          width: max-content;
          animation: partners-marquee 30s linear infinite;
          will-change: transform;
        }

        .partners-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-white pt-6 pb-4 border-b">
        <div className="container mx-auto px-4">
          <p className="text-sm text-slate-600">
            <Link href="/" className="text-blue-500 hover:text-blue-600">Homepage</Link>
            {" > "}
            <span className="text-slate-600">One Constellation Partners</span>
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-slate-900"
              >
                One Constellation Partners
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-600"
              >
                Powering Transformation Through Partnership
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="text-slate-700 space-y-4"
              >
                <p>
                  One Constellation collaborates with a global ecosystem of industry-leading partners to power digital transformation across financial services. By combining deep regulatory expertise with best-in-class technology and implementation excellence, we deliver AI-powered Client Lifecycle Management solutions that simplify complexity, accelerate innovation and drive lasting impact.
                </p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                  Work with a Partner
                </button>
                <button className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                  Join our Partner Program
                </button>
              </motion.div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden bg-slate-900 aspect-video flex items-center justify-center relative group">
                <img 
                  src="/partner-1.png" 
                  alt="One Constellation Partner Ecosystem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="text-white mb-4">
                      <p className="font-semibold">One Constellation Partner</p>
                      <p className="text-sm opacity-75">Ecosystem Video</p>
                    </div>
                    <button className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold px-8 py-3 rounded-full">
                      ► Play Video
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos Marquee Slider */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8"
        >
          <p className="text-center text-gray-600 text-lg">Partners driving transformation</p>
          <PartnersMarquee />
        </motion.div>
      </section>

      {/* Partner Directory */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-slate-900 mb-2"
            >
              Partner Directory
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4 mt-6"
            >
              <select className="px-4 py-2 border rounded-lg text-slate-600">
                <option>All types</option>
              </select>
              <select className="px-4 py-2 border rounded-lg text-slate-600">
                <option>All regions</option>
              </select>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {partnerDirectory.map((partner) => (
              <motion.article
                key={partner.id}
                variants={fadeInUp}
                className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {partner.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl font-bold text-slate-900"
              >
                Why partner with One Constellation?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-600"
              >
                When you partner with One Constellation, you get access to a range of supports to grow our collaboration.
              </motion.p>
              <motion.blockquote 
                variants={fadeInUp}
                className="border-l-4 border-teal-400 pl-6 py-4 italic text-slate-700"
              >
                "Transforming organisations by using AI is something we're committed to in Deloitte. Our collaboration with One Constellation and the launch of our Centre of Excellence illustrates our focus on providing innovative technology solutions to our clients that drive competitiveness and efficiency."
                <p className="mt-4 font-semibold text-slate-900 not-italic">Graham Healy</p>
                <p className="text-sm text-slate-600 not-italic">Consulting Partner, Deloitte</p>
              </motion.blockquote>
              <motion.button 
                variants={fadeInUp}
                className="bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors w-fit"
              >
                <ArrowRight className="w-5 h-5" />
                Join the One Constellation Partner Program
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {partnerBenefits.map((benefit) => (
                <motion.div
                  key={benefit.number}
                  variants={fadeInUp}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-400 text-slate-900 font-bold text-lg">
                      {benefit.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-16 text-center"
          >
            Types of partners
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {partnerTypes.map((type) => (
              <motion.article
                key={type.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video mb-6 bg-gradient-to-br from-purple-300 to-slate-500">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-teal-400 font-semibold mb-3">
                  {type.subtitle}
                </p>
                <p className="text-slate-600">
                  {type.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-8 text-white"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold"
            >
              Join the One Constellation Partner Program
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl max-w-2xl mx-auto"
            >
              One Constellation partners with best-in-class organizations that specialize and deliver innovation and real value to our clients' experiences with One Constellation.
            </motion.p>
            <motion.button 
              variants={fadeInUp}
              className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
