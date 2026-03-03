"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type NavItem = { label: string; href: string }
type MobileSection = { title: string; items: NavItem[] }

export function Footer() {
  const { t } = useLanguage()

  const solutionLinks: NavItem[] = [
    // { label: "FinCrime Operating System", href: "/fincrime-operating-system" },
    { label: "Agentic AI – Meet the Agents", href: "/agentic-ai-agents" },
    { label: "Client Lifecycle Management", href: "/client-lifecycle-management" },
    { label: "Know Your Customer (KYC)", href: "/know-your-customer" },
    { label: "Client Onboarding", href: "/digital-client-onboarding" },
    { label: "Identity Verification (ID&V)", href: "/identity-verification" },
    { label: "Transaction Monitoring", href: "/transaction-monitoring" },
    { label: "Regulatory Compliance", href: "/compliance" },
    { label: "CLM for Salesforce", href: "/salesforce-clm-software" },
  ]

  const segmentLinks: NavItem[] = [
    { label: "Corporate & Institutional Banking", href: "/corporate-institutional-banking" },
    { label: "For commercial and business banks", href: "/commercial-business-banks" },
    { label: "Asset Management", href: "/asset-management" },
    { label: "CLM for Asset Services", href: "/clm-asset-services" },
    { label: "Private Banking & Wealth Management", href: "/private-banking-wealth" },
    { label: "Retail Banking", href: "/retail-banking" },
    { label: "Energy and Commodity Trading", href: "/energy-commodity-trading" },
    { label: "Fintech", href: "/fintech" },
  ]

  const resourceLinks: NavItem[] = [
    { label: "Solution Brochure", href: "/solution-brochures" },
    { label: "White Paper", href: "/whitepapers" },
    { label: "Webinar On Demand", href: "/webinars" },
    { label: "Case Study", href: "/case-studies" },
    { label: "Blog", href: "/blogs" },
    { label: "Analyst Report", href: "/analyst-reports" },
  ]

  const companyProfileLinks: NavItem[] = [
    { label: "Discover One Constellation", href: "/discover-one-constellation" },
   
    { label: "Leadership", href: "/leadership" },
    { label: "Awards", href: "/awards" },
    

  ]

  const quickLinks: NavItem[] = [
    { label: "Recruitment Information", href: "/careers" },
    { label: "Client", href: "/client" },
    { label: "Partner", href: "/partners" },
    { label: "Platform Overview", href: "/platform-overview" },
    { label: "Modern Slavery and Human Trafficking", href: "/modern-slavery-human-trafficking" },
    { label: "Trust and Security", href: "/trust-and-security" },
    { label: "Privacy Updates", href: "/privacy-updates" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    // { label: "Cookie Policy", href: "/cookie-policy" },
  ]

  const mobileSections: MobileSection[] = [
    { title: "Solution", items: solutionLinks },
    { title: "Segment", items: segmentLinks },
    { title: "Resource", items: resourceLinks },
    { title: "Company Profile", items: companyProfileLinks },
    { title: "Quick Links", items: quickLinks },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-slate-800 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-32">
        {/* Trust Section */}
        <div className="mb-16 pb-16 border-b border-slate-700">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t("builtOnFoundation")} <span className="text-accent">{t("trust")}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-400 text-lg mb-8">{t("trustDescription")}</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-accent">✓</span>
                  {t("soc2Certified")}
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-accent">✓</span>
                  {t("gdprCompliant")}
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-accent">✓</span>
                  {t("encryption")}
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-accent text-sm font-semibold mb-2">{t("identityVerification")}</p>
                <p className="text-3xl font-bold text-white">99.9%</p>
                <p className="text-slate-400 text-sm">{t("systemAvailability")}</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <p className="text-accent text-sm font-semibold mb-2">{t("expertSupport")}</p>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-slate-400 text-sm">{t("expertSupport")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="space-y-4 pb-6">
          <Link href="/" className="flex items-center gap-2 text-white group w-fit">
            <img
              src="/logo-light.png"
              alt="One Constellation"
              className="w-24 object-contain group-hover:scale-110 transition-transform"
            />
          </Link>
        </div>

        {/* LINKS AREA */}
        <div className="space-y-2 md:space-y-0">
          {/* DESKTOP VIEW */}
          <div className="hidden md:grid grid-cols-5 gap-12">
            {/* Column helper */}
            {[
              { title: "Solution", items: solutionLinks },
              { title: "Segment", items: segmentLinks },
              { title: "Resource", items: resourceLinks },
              { title: "Company Profile", items: companyProfileLinks },
              { title: "Quick Links", items: quickLinks },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-white font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MOBILE VIEW (Accordion) */}
          <div className="md:hidden divide-y divide-slate-800">
            {mobileSections.map((section) => (
              <details key={section.title} className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                  <span className="text-white font-semibold">{section.title}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>

                <div className="pb-4 space-y-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-slate-400 hover:text-teal-400 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 mx-auto px-4 sm:px-6 lg:px-32 mt-12">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} One Constellation. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-6">
          {/* <Link
            href="/privacy-policy"
            className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
          >
            Privacy Policy
          </Link> */}

          {/* Replace with real page when you have it */}
         <Link
            href="/terms-of-service"
            className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
          >
            Terms of Service
          </Link>


          {/* <Link
            href="/cookie-policy"
            className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
          >
            Cookie Policy
          </Link> */}
        </div>
      </div>
    </footer>
  )
}