"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import { Shield, Users, BarChart3, CheckCircle2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"
import { useLanguage } from "@/lib/language-context"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false)
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section - One Constellation */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
              >
                <Zap className="w-4 h-4" />
                <span>{t("Intelligent Financial Compliance Platform")}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-medium leading-tight"
              >
                {t("Prevent financial crime while")}{" "}
                <span className="bg-gradient-to-r from-accent via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  {t("elevating customer experiences")}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-xl leading-relaxed  font-light"
              >
                {t(
                  "Automate client onboarding, strengthen KYC compliance, catch suspicious transactions instantly, and drive operational excellence all powered by intelligent automation.",
                )}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/book-demo"
                    className="flex md:justify-between md:items-center"
                  >


                    <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-accent hover:bg-accent/90 text-white">
                      {t("requestDemo")}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 h-14 text-lg border-2 bg-transparent hover:bg-accent/5 hover:text-accent transition-colors cursor-pointer"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    {t("Explore Solutions")}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className=" flex items-center justify-center">
              {/* <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl aspect-square flex items-center justify-center"></div> */}

                <img src="/heroimage.png" className="w-100 h-80 text-accent/60 mx-auto mb-4" />

              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full hidden lg:block opacity-20 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(162, 72%, 45%)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* <circle cx="200" cy="200" r="150" fill="url(#grad-green)" />
            <path d="M 50 200 Q 200 50 350 200" stroke="hsl(162, 72%, 45%)" strokeWidth="2" fill="none" /> */}
          </svg>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-fintech-gradient border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-widest">
            {t("Trusted by leading organizations")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              "/Ascent.jpg",
              "/Docu-sign.png",
              "/new-SFA-logo.jpg",
              "/uppsala-security-logo.png",
              "/aicpa-soc-logo-freelogovectors.net_-400x400-1.png",
              "/world.png",
              //  "/ISO-27001-Certified-logo.png",

            ].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  // className="h-10 md:h-16 object-contain grayscale hover:grayscale-0 transition"
                  className="h-10 md:h-16 object-contain "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* AI-Powered Platform Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium"
            >
              {t("Introducing Our AI-Powered")} <span className="text-accent">{t("FinCrime Operating System")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              {t(
                "A single platform that unifies onboarding, KYC, screening, ID verification and transaction monitoring, powered by Agentic AI.",
              )}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: t("Client Onboarding"),
                description: t(
                  "Streamline and automate end-to-end onboarding journeys, including KYC & risk, client outreach, and PEP & sanctions screening.",
                ),
              },
              {
                icon: Shield,
                title: t("Know Your Customer"),
                description: t(
                  "Simplify and automate due diligence with pre-packaged KYC rules and workflows, ensuring effective customer due diligence.",
                ),
              },
              {
                icon: BarChart3,
                title: t("Transaction Monitoring"),
                description: t(
                  "Detect suspicious activity with our real-time detection engine. Transform monitoring effectiveness and reduce false positives.",
                ),
              },
              {
                icon: CheckCircle2,
                title: t("Regulatory Compliance"),
                description: t(
                  "Simplify compliance with global regulations including ESG, Tax, and Investor Protection with automatic client classifications.",
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group cursor-pointer">
                  <div className="bg-slate-800/50 border border-accent/20 hover:border-accent/50 p-8 rounded-xl transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                    >
                      <item.icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Lifecycle Management */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-teal-400 via-cyan-300 to-teal-500">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.img
              src="/Manage-your-clients-seamlessly.png"
              alt="Manage your Client lifecycle"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mx-auto mb-12  sm:w-96 md:w-[32rem] lg:w-[40rem]"
            />


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium mb-12 text-slate-900"
            >
              {t("Manage your clients seamlessly through every lifecycle stage")}

            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-700"
            >
              {t(
                "From onboarding to off boarding, our comprehensive platform guides you through every client interaction with intelligent automation and compliance built-in.",
              )}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👤",
                title: t("Client Onboarding"),
                description: t(
                  "Accelerate onboarding with intelligent automation, including KYC verification, risk assessment, and regulatory screening.",
                ),
                link: "/digital-client-onboarding",
              },
              {
                icon: "🔍",
                title: t("Know Your Customer"),
                description: t(
                  "Simplify customer due diligence with pre-configured rules and workflows that ensure thorough KYC compliance.",
                ),
                link: "/know-your-customer",
              },
              {
                icon: "📱",
                title: t("Transaction Monitoring"),
                description: t(
                  "Detect suspicious patterns instantly with advanced analytics. Reduce false alerts while maintaining robust risk oversight.",
                ),
                link: "/transaction-monitoring",
              },
              {
                icon: "✅",
                title: t("Regulatory Compliance"),
                description: t(
                  "Stay ahead of regulations across all jurisdictions. Automate compliance reporting and keep audit trails always current.",
                ),
                link: "/compliance",
              },
              {
                icon: "⚙️",
                title: t("CRM for Salesforce"),
                description: t(
                  "Empower teams with integrated client visibility. Streamline workflows directly within Salesforce with real-time updates.",
                ),
                link: "/salesforce-clm-software",
              },
              {
                icon: "🧠",
                title: t("Intelligent Document Processing"),
                description: t(
                  "Let AI handle document extraction and verification. Cut manual work by 80% while improving accuracy and speed.",
                ),
                link: "/intelligent-document-processing",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>
                <motion.div whileHover={{ x: 4 }} className="inline-block">
                  <Link
                    href={item.link}
                    className="text-slate-800 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {t("Learn more")}
                    <span>→</span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              <span className="text-accent">{t("ROI")}</span> {t("our clients are getting with One Constellation")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "30%", label: t("faster client onboarding journeys compared to industry average") },
              { value: "80%", label: t("increased automation in data/document processing") },
              { value: "12", label: t("weeks faster time-to-go-live, with projects delivered in under") },
              { value: "60%", label: t("reduction in client outreaches") },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-3 p-6 bg-slate-800/50 rounded-xl border border-accent/20"
              >
                <div className="text-4xl md:text-5xl font-medium text-accent">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Choose Us */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden ">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="/images/a-20-281-29-20copy.png" alt="" className="w-96 h-96 absolute -top-20 -right-20" />
          <img src="/images/a-20-281-29-20copy.png" alt="" className="w-96 h-96 absolute -bottom-40 -left-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              <span className="text-accent">{t("Why organizations")}</span> {t("choose us")}
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("Successful partnerships with industry-leading institutions")}
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "BNP Paribas",
                logo: "/bnp-logo.svg",

                title: t("One KYC Initiative"),
                description: t(
                  "Groundbreaking approach to collecting, storing and maintaining KYC information and documents has transformed how the Bank serves its corporate and business clients globally."
                ),
                stat: t("Model Bank Award Winner"),
                link: "#bnp-paribas",
              },
              {
                company: "LLBW Markets",
                logo: "/lb-logo.svg",

                title: t("Large-Scale Transformation"),
                description: t(
                  "A successful partnership that reveals the mindset behind large-scale transformation - how a respected institution embraced change to deliver faster onboarding and reviews."
                ),
                stat: t("Stronger Governance"),
                link: "#llbw-markets",
              },
              {
                company: "StoneX",
                logo: "/stonex-logo.svg",
                title: t("Enhanced Client Experience"),
                description: t(
                  "As one of the largest financial services firms in the US, digitalized client onboarding and KYC processes which resulted in increased operational efficiencies."
                ),
                stat: t("Unlocked Revenue Potential"),
                link: "#stonex",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.link} className="block h-full no-underline">
                  <div className="p-8 bg-slate-50 rounded-xl border border-gray-100 hover:border-accent/20 transition-all cursor-pointer h-full hover:shadow-lg">

                    {/* Logo */}
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-8 object-contain mb-12 "
                    />

                    {/* Company */}
                    <p className="text-accent font-medium text-sm mb-2 uppercase">
                      {item.company}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl font-medium mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Stat */}
                    <p className="text-accent font-semibold text-sm">
                      {item.stat}
                    </p>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Leader Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              {t("Market Leader for")} <span className="text-accent">{t("KYC & Client Lifecycle Management")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🏆",
                title: t("Category Leader in RiskTech Quadrant®"),
                description: t("One Constellation recognised as Category Leader for KYC Solutions 2025"),
              },
              {
                icon: "⭐",
                title: t("Three Coveted Awards"),
                description: t("Wins Three Coveted Awards in Chartis RiskTech100®"),
              },
              {
                icon: "📊",
                title: t("Top Ranked"),
                description: t("Ranks #9 in Chartis Financial Crime & Compliance50 2025"),
              },
              {
                icon: "💼",
                title: t("CLM Solutions Leader"),
                description: t(
                  "Category Leader in RiskTech Quadrant® for CLM Solutions in Corporate & Investment Banking 2025",
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-800/50 rounded-xl border border-accent/20 hover:border-accent/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 md:py-32 ">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-12">
              <span className="text-accent">
                {t("Partnering with best-in-class organizations to deliver innovation across the client lifecycle.")}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
              {t(
                "Over the past decade, we have built and nurtured a trusted network of industry-leading partners. Together, this global ecosystem of expert organizations enables end-to-end Client Lifecycle Management."
              )}
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              // { logo: "/sales.svg" },
              { logo: "/blackrock-logo-nav.svg" },
              { logo: "/Standard_Chartered_.svg" },
              { logo: "/first-sentier-logo-green-white-svg.svg" },
              { logo: "/MezFI.png" },
              // { name: "Jumio", logo: "/firstdegree.png" },
              // { name: "Moody's", logo: "/images/moodys.png" },
              // { name: "LexisNexis", logo: "/images/lexisnexis.png" },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-lg p-6 w-full text-center hover:border-accent/50 transition-all flex flex-col items-center gap-3"
              >
                {/* Logo */}
                <img
                  src={partner.logo}
                  // alt={partner.name}
                  className="h-12 object-contain transition-transform duration-200 hover:scale-105"
                />

                {/* Name (optional, can remove if you just want logos) */}
                {/* <span className="text-gray-600 font-semibold text-sm md:text-base">
            {partner.name}
          </span> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent/10 via-cyan-500/5 to-teal-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-medium">
              {t("Ready to get started on your")} <span className="text-accent">{t("CLM journey")}</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("Request a demonstration of our solutions or connect with our team to learn more")}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/book-demo" className="hidden md:block">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-6 sm:px-8 bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center gap-3"
                >
                  Get Started
                  <span className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center">
                    →
                  </span>
                </Button>
              </Link>
              {/* <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  Contact Us
                </Button>
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  )
}
