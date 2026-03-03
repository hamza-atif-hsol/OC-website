"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
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

const navigationItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Letter from the CEO", href: "#ceo-letter" },
  { label: "2024 Sustainability Report", href: "#report" },
  { label: "One Constellation's ESG Policy", href: "#esg-policy" },
  { label: "Social Posts", href: "#social" },
  { label: "Resources", href: "#resources" },
]

const environmentItems = [
  { label: "Environment", href: "#environment" },
  { label: "Social", href: "#social" },
  { label: "Governance", href: "#governance" },
]

const environmentInitiatives = [
  {
    title: "Energy Efficiency",
    description: "Reducing the physical space we use and improving energy efficiency across our real estate portfolio and technology.",
  },
  {
    title: "Recycling and Waste Reduction",
    description: "We are working on reducing, reusing, and recycling the waste produced from all eight office locations to reduce the amount of waste going to landfill.",
  },
  {
    title: "Re-using and Donating",
    description: "Unused or old IT hardware is donated to local charities and other socially important institutions to give it a second life.",
  },
  {
    title: "Employee Bike to Work Scheme",
    description: "Hundreds of One Constellation employees have signed up to this incentive since its launch to promote the health and environmental benefits of cycling to work.",
  },
  {
    title: "Public Transport",
    description: "With offices in 16 cities around the world, the vast majority of One Constellation employees travel to work on public transport, with a growing number opting to cycle or walk.",
  },
  {
    title: "Minimizing Carbon Footprint",
    description: "One Constellation deploys a range of cloud-based communications tools and technologies to minimize the amount of air travel that employees need to undertake.",
  },
  {
    title: "Work from Home",
    description: "One Constellation's flexible and hybrid work arrangements allow employees to work from home for a portion of the week, reducing the need to commute and travel.",
  },
  {
    title: "Ongoing Education",
    description: "Educating and working with employees, suppliers, and partners on more energy efficient ways of providing and recycling materials and services.",
  },
]

const socialInitiatives = [
  { name: "PRIDE Week", description: "Celebrating diversity and inclusion" },
  { name: "Disability International Week", description: "Supporting and empowering employees with disabilities" },
  { name: "Men's International Day", description: "Promoting positive male role models" },
  { name: "Women's International Day", description: "Celebrating women's achievements and empowerment" },
]

const talentInitiatives = [
  "Wellness programmes",
  "Learning and development",
  "Town hall meetings",
  "Flexible working",
  "Career Paths",
  "Mentorship & Education",
  "Sports & Social groups across regions",
  "The Women's Network",
]

const resources = [
  {
    id: 1,
    title: "One Constellation Commits to Science Based Target Initiative",
    description: "One Constellation has announced the adoption of the Science Based Targets initiative (SBTi) for more transparent and detailed carbon monitoring, controls, and disclosure.",
    link: "#",
  },
  {
    id: 2,
    title: "One Constellation Scoops Silver in EcoVadis Sustainability Ratings Awards",
    description: "Rated by EcoVadis (438), One Constellation scores better than most of its peers in all four themes.",
    link: "#",
  },
  {
    id: 3,
    title: "Gender Pay Gap Report",
    description: "Inclusion and diversity are fundamental to our culture – discover our 2023 gender pay gap report for Ireland.",
    link: "#",
    isDownload: true,
  },
]

export default function SustainabilityPage() {
  const [activeNav, setActiveNav] = React.useState("introduction")

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
            <span className="text-slate-600">Sustainability</span>
          </p>
        </div>
      </section>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-72 bg-white border-r border-slate-200 p-8 sticky top-24 h-fit">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <motion.h3
                variants={fadeInUp}
                className="text-lg font-semibold text-teal-500 mb-4"
              >
                Introduction
              </motion.h3>
              <motion.ul
                variants={staggerContainer}
                className="space-y-2"
              >
                {navigationItems.map((item) => (
                  <motion.li key={item.label} variants={fadeInUp}>
                    <Link
                      href={item.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <motion.h3
                variants={fadeInUp}
                className="text-base font-semibold text-slate-900 mb-4"
              >
                Content
              </motion.h3>
              <motion.ul
                variants={staggerContainer}
                className="space-y-2"
              >
                {environmentItems.map((item) => (
                  <motion.li key={item.label} variants={fadeInUp}>
                    <Link
                      href={item.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeInUp} className="text-teal-500 font-semibold text-sm tracking-wide">
                    INTRODUCTION
                  </motion.div>
                  <motion.h1
                    variants={fadeInUp}
                    className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
                  >
                    Transforming for a Sustainable World & Business
                  </motion.h1>

                  <motion.h2
                    variants={fadeInUp}
                    className="text-2xl font-bold text-slate-900 pt-4"
                  >
                    Letter from the CEO
                  </motion.h2>

                  <motion.div
                    variants={fadeInUp}
                    className="space-y-4 text-slate-700 leading-relaxed"
                  >
                    <p>
                      Transformation is an important concept for One Constellation. It involves a changed mindset and strategy of moving away from a status quo that is no longer beneficial and moving step-by-step towards a better state of being.
                    </p>
                    <p>
                      In our day-to-day work as a global software provider, we strive to transform how financial firms operate, manage clients, and prevent financial crime within their technology and partner ecosystem.
                    </p>
                    <p>
                      In the same way, as a global family of 650+ employees, we are on a mission to transform the world we live and work in to ensure a cleaner, safer, and more equitable place where we can all thrive.
                    </p>
                    <motion.button
                      variants={fadeInUp}
                      className="text-teal-500 hover:text-teal-600 font-semibold flex items-center gap-2 pt-2"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center items-center lg:h-96"
                >
                  <div className="text-6xl">🌿</div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-3xl font-bold text-slate-900 mb-10"
              >
                Resources
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {resources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={fadeInUp}
                    className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-base font-semibold text-slate-900 mb-3 line-clamp-3">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <Link
                      href={resource.link}
                      className="text-teal-500 hover:text-teal-600 font-semibold flex items-center gap-2 text-sm"
                    >
                      {resource.isDownload ? "Download Now" : "Read More"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Sustainability Report */}
          <section id="report" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-slate-900 mb-8"
                >
                  2024 Sustainability Report
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <motion.div
                    variants={fadeInUp}
                    className="space-y-6"
                  >
                    <p className="text-slate-700 leading-relaxed">
                      In this report, we will outline our commitment to environmental stewardship, social responsibility, and ethical governance. Our goal is to create long term value for our stakeholders while minimizing our impact on the planet.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Download the Report
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-slate-100 rounded-lg aspect-[3/4] flex items-center justify-center"
                  >
                    <div className="text-center text-slate-500">
                      <p className="font-semibold">One Constellation</p>
                      <p className="text-sm">Sustainability Report 2024</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ESG Policy Section */}
          <section id="esg-policy" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="text-center max-w-3xl mx-auto"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-slate-900 mb-6"
                >
                  One Constellation's ESG Policy
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-slate-700 mb-8 leading-relaxed"
                >
                  At One Constellation, we are committed to making a positive impact on the planet and its people. We have adopted the Environmental Social and Governance (ESG) Statement to articulate how we identify, address and live up to these responsibilities, and how we will work to mitigate risks related to ESG.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <Link
                    href="/esg-policy"
                    className="text-teal-500 hover:text-teal-600 font-semibold inline-flex items-center gap-1"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Environment Section */}
          <section id="environment" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-slate-900 mb-4"
                >
                  Environment
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-slate-700 mb-8 max-w-2xl"
                >
                  The Journey to Reduce One Constellation's Environmental Footprint
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="space-y-4 mb-8"
                >
                  <p className="text-slate-700 leading-relaxed">
                    There is no escaping the impact that climate change is having on our world. The increases in adverse and extreme weather events pose massive risks to lives and livelihoods. Global warming is a reality we can no longer ignore as temperatures increase year-on-year, melting ice caps and causing sea levels to rise.
                  </p>

                  <div className="bg-slate-100 rounded-lg p-8 text-center">
                    <p className="text-slate-600 mb-2">Temperature Anomaly Data 1880-2022</p>
                    <p className="text-sm text-slate-500">Source: World Temperature Data</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      One Constellation's Environmental Commitment
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      One Constellation is committed to working in harmony with the environment by seeking to minimize the environmental impact of our business operations.
                    </p>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      One Constellation's ESG strategy is focused on three major areas of environmental impact:
                    </p>
                    <ul className="list-decimal list-inside space-y-2 text-slate-700">
                      <li>Decarbonising our global business model and operations</li>
                      <li>Increasing our investments in sustainability</li>
                      <li>Partnering with a wider ecosystem to sign up to our sustainability targets</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Carbon Reduction Commitment and Actions
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      In 2022, One Constellation committed to achieving net-zero emissions by 2050, joining the global effort to mitigate the effects of climate change.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      We have adopted the SBTi with a view to further our sustainability efforts, setting an ambitious but achievable target for reducing emissions and becoming a more environmentally friendly company with sustainability at the heart of how we operate globally.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    Contributing to a Greener World
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {environmentInitiatives.map((initiative, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-slate-50 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                          {initiative.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {initiative.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Social Section */}
          <section id="social" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-slate-900 mb-4"
                >
                  Social
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-slate-700 mb-12 max-w-2xl"
                >
                  The Journey to a More Diverse, Equitable and Inclusive World
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="space-y-10"
                >
                  <motion.div variants={fadeInUp} className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Our Employees
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our employees are our greatest assets. That's why One Constellation is committed to achieving the highest standards in the workplace. One Constellation offers all our employees clear and fair terms of employment and provides resources to enable their continual development.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      We provide safeguards to ensure that all employees are treated with respect and can perform effectively in a working environment that promotes tolerance and is free of harassment or discrimination of any kind.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Diversity & Inclusion
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      As a global company, creating a workplace that focuses on representation, fairness, and equal opportunities for all is especially important to One Constellation.
                    </p>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      In our efforts to become a company where individuals can bring their authentic selves to work each day, One Constellation's DE&I strategy incorporates a set of initiatives that are designed to unleash the full potential of each individual employee in a safe and nurturing environment.
                    </p>
                    <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                      Nurturing & Developing Our Talent
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {talentInitiatives.map((initiative, index) => (
                        <li key={index} className="text-slate-700 text-sm">
                          • {initiative}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Our Clients
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      We believe that integrity is an indisputable prerequisite for a successful, sustainable business relationship. One Constellation is operationally and constitutionally focused on empowering our clients and meeting client objectives to drive their success.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      We provide our clients with the highest quality technology solutions, designed to address the most critical pain points in their compliance and client lifecycle management (CLM) operations.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Our Partners & Suppliers
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      At One Constellation, the development of long-term relationships with industry-leading partners, suppliers, and other collaborators that make up our business ecosystem allows all parties to achieve mutual growth based on mutual respect.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Our Communities
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      At One Constellation, the concept of community is important to us. As a result, there are many charitable causes and organizations that we focus on throughout the year.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {socialInitiatives.map((initiative, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 text-sm">
                          <p className="font-semibold text-slate-900">
                            {initiative.name}
                          </p>
                          <p className="text-xs text-slate-600">
                            {initiative.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Governance Section */}
          <section id="governance" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-slate-900 mb-8"
                >
                  Governance
                </motion.h2>

                <motion.div
                  variants={staggerContainer}
                  className="space-y-5 max-w-3xl"
                >
                  <motion.p
                    variants={fadeInUp}
                    className="text-slate-700 leading-relaxed"
                  >
                    Solid governance practices are the backbone of any successful organization. As a rapidly growing global company, One Constellation strives to conduct its business in a socially responsible manner in each of the markets in which we operate.
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    className="text-slate-700 leading-relaxed"
                  >
                    We believe in supporting the local communities in which our employees, clients, partners, investors and suppliers live and work.
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    className="text-slate-700 leading-relaxed"
                  >
                    In 2021, One Constellation was acquired by Astorg and Bridgepoint, two private equity firms with a strong track record in backing well-governed organizations.
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    className="text-slate-700 leading-relaxed"
                  >
                    As a result, One Constellation has invested in developing and test-driving its policies, procedures, and training around crucial areas such as:
                  </motion.p>

                  <motion.ul
                    variants={staggerContainer}
                    className="list-disc list-inside space-y-2 text-slate-700"
                  >
                    <motion.li variants={fadeInUp}>Data protection and cybersecurity</motion.li>
                    <motion.li variants={fadeInUp}>Modern slavery and human trafficking</motion.li>
                    <motion.li variants={fadeInUp}>Bribery, corruption, and whistleblowing</motion.li>
                    <motion.li variants={fadeInUp}>Risk management and business continuity</motion.li>
                    <motion.li variants={fadeInUp}>Environmental, Social, and Governance</motion.li>
                  </motion.ul>

                  <motion.p
                    variants={fadeInUp}
                    className="text-slate-700 pt-4 italic leading-relaxed"
                  >
                    We are invested in building a sustainable, resilient business that creates positive change and benefits the whole of society.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
