"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Globe, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

/* ======================================================
   SOLUTIONS CONFIG (same wording like your screenshots)
====================================================== */
type LinkItem = { label: string; href: string }
type OrgTypeConfig = {
  label: string
  orgTypeKey: string
  overview: LinkItem
  links: LinkItem[]
}
type SegmentConfig = { key: string; label: string; orgTypes: OrgTypeConfig[] }

const COMMON_LINKS: LinkItem[] = [
  // { label: "FinCrime Operating System", href: "/finclimb-operating-system" },
  { label: "Agency AI–Meet the Agent", href: "/agentic-ai-agents" },
  { label: "Know Your Customer (KYC)", href: "/know-your-customer" },
  { label: "Client Onboarding", href: "/digital-client-onboarding" },
  { label: "Identity Verification (ID&V)", href: "/identity-verification" },
  { label: "Transaction Monitoring", href: "/transaction-monitoring" },
  { label: "Regulatory Compliance", href: "/compliance" },
  { label: "CLM for Salesforce", href: "/salesforce-clm-software" },
  // { label: "Integration Hub and Flow", href: "/integration-hub-and-flow" },
]

const COMMON_LINKS_NO_REG: LinkItem[] = COMMON_LINKS.filter((x) => x.label !== "Regulatory Compliance")

const segmentsConfig: SegmentConfig[] = [
  {
    key: "banking",
    label: "Banking",
    orgTypes: [
      {
        label: "Corporate & Institutional Banking",
        orgTypeKey: "corporateInstitutional",
        overview: {
          label: "How One Constellation helps corporate and institutional banks",
          href: "/corporate-institutional-banking",
        },
        links: [...COMMON_LINKS],
      },
      {
        label: "Commercial & Business Banking",
        orgTypeKey: "commercialBusiness",
        overview: {
          label: "How One Constellation helps commercial and business banks",
          href: "/commercial-business-banks",
        },
        links: [...COMMON_LINKS, { label: "Loan start", href: "/loan-start" }, { label: "Open an account", href: "/account opening" }],
      },
      {
        label: "Retail Banking",
        orgTypeKey: "retailBanking",
        overview: {
          label: "How One Constellation helps retail banks",
          href: "/retail-banking",
        },
        links: [...COMMON_LINKS],
      },
      {
        label: "Private Banking & Wealth Management",
        orgTypeKey: "privateBankingWealth",
        overview: {
          label: "How One Constellation helps private banking and wealth management firms",
          href: "/private-banking-wealth-management",
        },
        links: [...COMMON_LINKS],
      },
    ],
  },
  {
    key: "buySide",
    label: "Buy Side",
    orgTypes: [
      {
        label: "Asset Management",
        orgTypeKey: "assetManagement",
        overview: {
          label: "How One Constellation helps asset managers",
          href: "/asset-management",
        },
        links: [...COMMON_LINKS],
      },
      {
        label: "CLM for Asset Services",
        orgTypeKey: "clmAssetServices",
        overview: {
          label: "How One Constellation helps asset services",
          href: "/solutions/buy-side/asset-services",
        },
        links: [...COMMON_LINKS],
      },
    ],
  },
  {
    key: "paymentFintech",
    label: "Payments & Fintech",
    orgTypes: [
      {
        label: "Fintech",
        orgTypeKey: "fintech",
        overview: {
          label: "How One Constellation helps fintechs",
          href: "/solutions/payments-fintech/fintech",
        },
        links: [...COMMON_LINKS_NO_REG],
      },
    ],
  },
  {
    key: "corporate",
    label: "Corporate",
    orgTypes: [
      {
        label: "Energy and Commodity Trading",
        orgTypeKey: "energyCommodityTrading",
        overview: {
          label: "How One Constellation helps energy and commodity trading companies",
          href: "/solutions/corporate/energy-commodity-trading",
        },
        links: [...COMMON_LINKS_NO_REG],
      },
    ],
  },
]

/* ======================================================
   MOBILE SOLUTIONS PANEL (same structure / wording)
====================================================== */
const MobileSolutionsPanel = ({ setOpenSubmenu }: { setOpenSubmenu: (v: string | null) => void }) => {
  const [selectedSegmentKey, setSelectedSegmentKey] = React.useState<string>(segmentsConfig[0]?.key ?? "banking")
  const [selectedOrgTypeKey, setSelectedOrgTypeKey] = React.useState<string>(
    segmentsConfig[0]?.orgTypes?.[0]?.orgTypeKey ?? "corporateInstitutional",
  )

  const segment = React.useMemo(() => segmentsConfig.find((s) => s.key === selectedSegmentKey) ?? segmentsConfig[0], [selectedSegmentKey])
  const orgTypes = segment.orgTypes
  const orgType = orgTypes.find((o) => o.orgTypeKey === selectedOrgTypeKey) ?? orgTypes[0]

  React.useEffect(() => {
    if (!orgTypes.some((o) => o.orgTypeKey === selectedOrgTypeKey)) {
      setSelectedOrgTypeKey(orgTypes[0].orgTypeKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSegmentKey])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-8">
      <div>
        <h3 className="text-teal-400 font-semibold mb-3 text-xs uppercase tracking-wider">Filter by segment</h3>
        <div className="relative pl-6">
          <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-700" />
          <div className="space-y-2">
            {segmentsConfig.map((s) => (
              <button
                key={s.key}
                onClick={() => setSelectedSegmentKey(s.key)}
                className={cn(
                  "block w-full text-left px-5 py-2.5 rounded-full transition-all text-sm",
                  selectedSegmentKey === s.key
                    ? "bg-teal-400 text-slate-950 font-semibold"
                    : "text-white hover:bg-teal-400/20 hover:text-teal-200",
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-teal-400 font-semibold mb-3 text-xs uppercase tracking-wider">Organization Type</h3>
        <div className="relative pl-6">
          <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-700" />
          <div className="space-y-2">
            {orgTypes.map((o) => (
              <button
                key={o.orgTypeKey}
                onClick={() => setSelectedOrgTypeKey(o.orgTypeKey)}
                className={cn(
                  "block w-full text-left px-5 py-2.5 rounded-full transition-all text-sm",
                  selectedOrgTypeKey === o.orgTypeKey
                    ? "bg-teal-400 text-slate-950 font-semibold"
                    : "text-white hover:bg-teal-400/20 hover:text-teal-200",
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-teal-400 font-semibold mb-3 text-xs uppercase tracking-wider">Solution</h3>

        <Link
          href={orgType.overview.href}
          className="block text-gray-200 hover:text-white transition-colors text-sm leading-6"
          onClick={() => setOpenSubmenu(null)}
        >
          {orgType.overview.label}
        </Link>

        <div className="h-px bg-slate-700 my-4" />

        <div className="space-y-2">
          {orgType.links.map((l) => (
            <Link
              key={`${l.href}-${l.label}`}
              href={l.href}
              className="block text-gray-200 hover:text-white transition-colors text-sm py-1.5"
              onClick={() => setOpenSubmenu(null)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ======================================================
   MOBILE SUBMENU (solutions uses special panel)
====================================================== */
const MobileSubmenu = ({
  submenuName,
  items,
  setOpenSubmenu,
  t,
}: {
  submenuName: string
  items: any[]
  setOpenSubmenu: (v: string | null) => void
  t: any
}) => {
  const isSolutionsMenu = submenuName === "solutions"

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 z-[60] flex flex-col">
      <div className="mt-32" />

      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
        <button
          onClick={() => setOpenSubmenu(null)}
          className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold text-base py-2 px-3 rounded-md hover:bg-slate-800"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t(submenuName) || submenuName}</span>
        </button>
      </div>

      {isSolutionsMenu ? (
        <MobileSolutionsPanel setOpenSubmenu={setOpenSubmenu} />
      ) : (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {items.map((item: any, index: number) => (
            <div key={`${item.category || item.name}-${index}`}>
              <h3 className="text-teal-400 font-semibold mb-3 text-xs uppercase tracking-wider">{item.category}</h3>
              <div className="space-y-2 border-l-2 border-slate-700 pl-4">
                {item.items?.map((subitem: any, subindex: number) => (
                  <Link
                    key={`${subitem.href}-${subindex}`}
                    href={subitem.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm py-2"
                    onClick={() => setOpenSubmenu(null)}
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ======================================================
   DESKTOP SUBMENU (generic style like your screenshots)
====================================================== */
const DesktopColumnsMenu = ({
  columns,
}: {
  columns: Array<{ category: string; items: Array<{ name: string; href: string }> }>
}) => {
  return (
    <div className="p-10 flex gap-24">
      {columns.map((col) => (
        <div key={col.category} className="min-w-[280px]">
          <h3 className="text-teal-400 font-semibold mb-4 text-lg">{col.category}</h3>
          <div className="relative pl-6">
            <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-700" />
            <div className="space-y-4">
              {col.items.map((it) => (
                <Link key={it.href} href={it.href} className="block text-white/90 hover:text-white transition-colors text-base">
                  {it.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ======================================================
   NAVBAR
====================================================== */
export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null)

  const [searchQuery, setSearchQuery] = React.useState("")
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false)
  const [desktopSearchOpen, setDesktopSearchOpen] = React.useState(false)

  const [newsroomDropdownOpen, setNewsroomDropdownOpen] = React.useState(false)
  const newsroomDropdownRef = React.useRef<HTMLDivElement>(null)
  const [partnersDropdownOpen, setPartnersDropdownOpen] = React.useState(false)
  const [partnersData, setPartnersData] = React.useState<any[]>([])
  const [partnersLoading, setPartnersLoading] = React.useState(false)

  // Desktop Solutions (segment + org type)
  const [selectedSegmentKey, setSelectedSegmentKey] = React.useState<string>(segmentsConfig[0]?.key ?? "banking")
  const [selectedOrgTypeKey, setSelectedOrgTypeKey] = React.useState<string>(segmentsConfig[0]?.orgTypes?.[0]?.orgTypeKey ?? "corporateInstitutional")

  const languageDropdownRef = React.useRef<HTMLDivElement>(null)
  const partnersDropdownRef = React.useRef<HTMLDivElement>(null)

  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  // Close mobile menu and submenus when pathname changes
  React.useEffect(() => {
    setIsOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  const isSubmenuOpen = openSubmenu !== null
  // const headerBgColor = isSubmenuOpen ? "bg-[#002E49]" : "bg-background/95"
  const headerBgColor = isSubmenuOpen ? "bg-[#002E49]" : "bg-white"
  const headerTextColor = isSubmenuOpen ? "text-white" : "text-foreground"

  const desktopSegment = React.useMemo(() => segmentsConfig.find((s) => s.key === selectedSegmentKey) ?? segmentsConfig[0], [selectedSegmentKey])
  const desktopOrgTypes = desktopSegment.orgTypes
  const desktopOrgType = desktopOrgTypes.find((o) => o.orgTypeKey === selectedOrgTypeKey) ?? desktopOrgTypes[0]

  React.useEffect(() => {
    if (!desktopOrgTypes.some((o) => o.orgTypeKey === selectedOrgTypeKey)) {
      setSelectedOrgTypeKey(desktopOrgTypes[0].orgTypeKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSegmentKey])

  const navItems = [
    {
      key: "solutions",
      label: "Solutions",
      href: "#",
      submenu: [{ category: "Filter by segment", items: [] }],
    },

    {
      key: "clients",
      label: "Clients",
      href: "#",
      submenu: [
        {
          category: "Clients",
          items: [
            { name: "Our Clients", href: "/client" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Client News", href: "/client-news" },
          ],
        },
      ],
    },

    // ✅ Resources (same design + links like screenshot)
    {
      key: "resources",
      label: "Resources",
      href: "#",
      submenu: [
        {
          category: "Solution Resources",
          items: [
            { name: "Brochures", href: "/solution-brochures" },
            // { name: "Datasheets", href: "/datasheets" },
            { name: "Analyst Relations", href: "/analyst-reports" },
            { name: "Case Studies", href: "/case-studies" },
            // { name: "Videos", href: "/videos" },
            { name: "Webinars", href: "/webinars" },
          ],
        },
        {
          category: "More Resources",
          items: [
            { name: "Whitepapers", href: "/whitepapers" },
            { name: "Reports", href: "/analyst-reports" },
            // { name: "Podcasts", href: "/podcasts" },
            // { name: "Newsroom", href: "/newsroom" },
          ],
        },
        {
          category: "Insights",
          items: [
            { name: "Blog", href: "/blogs" },
            { name: "Events", href: "/events" },
            // { name: "Regulatory Horizon Scanning Report 2026", href: "/reports/regulatory-horizon-scanning-2026" },
            // { name: "Global Fincrime Operations Trends in 2025", href: "/reports/global-fincrime-operations-trends-2025" },
            // { name: "AI in Compliance Research Report", href: "/reports/ai-in-compliance-research" },
            // { name: "Global AML Fines Research Report 2025", href: "/reports/global-aml-fines-2025" },
            // { name: "The Expert’s Guide to Digitalizing Compliance", href: "/reports/expert-guide-digitalizing-compliance" },
          ],
        },
      ],
    },

    // ✅ Company (same design + links like screenshot)
    {
      key: "company",
      label: "Company",
      href: "#",
      submenu: [
        {
          category: "Company",
          items: [
            { name: "Discover One Constellation", href: "/about" },
            { name: "Leadership", href: "/leadership" },
            { name: "Awards", href: "/awards" },
            { name: "Platform", href: "/platform-overview" },
          ],
        },
        {
          category: "Corporate Responsibility",
          items: [
            { name: "Sustainability", href: "/sustainability" },
            { name: "Environmental, Social & Governance (ESG) Policy", href: "/esg-policy" },
            { name: "Modern Slavery Act", href: "/modern-slavery-human-trafficking" },
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Trust & Security", href: "/trust-and-security" },
          ],
        },
      ],
    },
  ]

  const topNavItems = [
    { name: "Careers", key: "careers", href: "/careers" },
    { name: "Partners", key: "partners", href: "/partners" },
    { name: "Newsroom", key: "newsroom", href: "/newsroom" },
    { name: "Contact", key: "contact", href: "/contact" },
  ]

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "DE", name: "Deutsch", flag: "🇩🇪" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  const fetchPartnersData = React.useCallback(async () => {
    if (partnersData.length > 0) return
    setPartnersLoading(true)
    try {
      const response = await fetch("/api/partners")
      const data = await response.json()
      setPartnersData(data)
    } catch (error) {
      console.error("Error fetching partners:", error)
    } finally {
      setPartnersLoading(false)
    }
  }, [partnersData.length])

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (partnersDropdownRef.current && !partnersDropdownRef.current.contains(event.target as Node)) setPartnersDropdownOpen(false)
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) setLanguageDropdownOpen(false)
    }

    if (partnersDropdownOpen || languageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [partnersDropdownOpen, languageDropdownOpen])

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 bg-slate-200 border-b border-slate-200 z-[1102] h-10 items-center">
        <div className="container mx-auto px-4 flex items-center w-full h-full text-xs text-gray-700">
          <div className="ml-auto flex items-center">
            {topNavItems.map((item) => (
              <div key={item.href} className="flex items-center relative">
                {item.key === "partners" ? (
                  <div ref={partnersDropdownRef} className="relative">
                    <button
                      onMouseEnter={() => {
                        setPartnersDropdownOpen(true)
                        fetchPartnersData()
                      }}
                      onClick={() => {
                        setPartnersDropdownOpen(!partnersDropdownOpen)
                        if (!partnersDropdownOpen) fetchPartnersData()
                      }}
                      className="px-3 hover:text-teal-600 transition-colors font-medium flex items-center gap-1"
                    >
                      {t(item.key)}
                      <ChevronDown className={cn("w-3 h-3 transition-transform", partnersDropdownOpen ? "rotate-180" : "")} />
                    </button>

                    <AnimatePresence>
                      {partnersDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-[1104]"
                        >
                          {partnersLoading ? (
                            <div className="p-4 text-center text-gray-500 text-sm">Loading partners...</div>
                          ) : partnersData.length > 0 ? (
                            <div className="max-h-64 overflow-y-auto">
                              {partnersData.map((partner: any) => (
                                <Link
                                  key={partner.id || partner.name}
                                  href={partner.href || "/partners"}
                                  className="block px-4 py-3 hover:bg-teal-50 transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                  <div className="font-medium text-gray-800 text-sm">{partner.name}</div>
                                  {partner.description && <div className="text-xs text-gray-600 mt-1">{partner.description}</div>}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="p-4 text-center text-gray-500 text-sm">No partners found</div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.key === "newsroom" ? (
                  <div 
                    ref={newsroomDropdownRef} 
                    className="relative"
                    onMouseEnter={() => setNewsroomDropdownOpen(true)}
                    onMouseLeave={() => setNewsroomDropdownOpen(false)}
                  >
                    <button
                      className="px-3 hover:text-teal-600 transition-colors font-medium flex items-center gap-1"
                    >
                      {t(item.key)}
                      <ChevronDown className={cn("w-3 h-3 transition-transform", newsroomDropdownOpen ? "rotate-180" : "")} />
                    </button>

                    <AnimatePresence>
                      {newsroomDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[1104]"
                        >
                          <Link
                            href="/blogs"
                            className="block px-4 py-3 hover:bg-teal-50 transition-colors border-b border-gray-100"
                          >
                            <div className="font-medium text-gray-800 text-sm">Blogs</div>
                          </Link>
                          <Link
                            href="/news"
                            className="block px-4 py-3 hover:bg-teal-50 transition-colors border-b border-gray-100"
                          >
                            <div className="font-medium text-gray-800 text-sm">News</div>
                          </Link>
                          <Link
                            href="/events"
                            className="block px-4 py-3 hover:bg-teal-50 transition-colors"
                          >
                            <div className="font-medium text-gray-800 text-sm">Events</div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.href} className="px-3 hover:text-teal-600 transition-colors font-medium">
                    {t(item.key)}
                  </Link>
                )}

                {/* <span className="text-gray-400">|</span> */}
              </div>
            ))}

            {/* Language */}
            {/* <div className="relative z-[1103]" ref={languageDropdownRef}>
              <button onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} className="flex items-center gap-1 px-3 py-1 hover:text-teal-600 transition-colors font-medium">
                <Globe className="w-3 h-3" />
                <span>{language}</span>
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-[1103]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setLanguageDropdownOpen(false)
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 text-xs flex items-center gap-2 transition-all",
                          language === lang.code ? "bg-teal-100 text-teal-700 font-semibold" : "text-gray-700 hover:text-teal-600 hover:bg-gray-50",
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}
          </div>
        </div>
      </div>

      {/* MAIN NAV (DESKTOP) */}
      <motion.nav
        className={cn(
          "hidden lg:flex fixed lg:top-10 left-0 right-0 backdrop-blur-md  z-[1100] h-16 items-center transition-colors duration-300",
          headerBgColor,
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between w-full h-full gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={isSubmenuOpen ? "/logo-light.png" : "/logo-dark.png"} alt="Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-10 ml-8 flex-1">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === item.key ? null : item.key)}
                  className={cn("transition-colors font-medium text-sm flex items-center gap-1 py-2", headerTextColor, "hover:04CAB5")}
                >
                  {item.label}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openSubmenu === item.key ? "rotate-180" : "")} />
                </button>

                <AnimatePresence>
                  {openSubmenu === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-[-120px] mt-0 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 border-t border-teal-400/30 rounded-b-lg shadow-2xl overflow-hidden"
                    >
                      {/* SOLUTIONS special (teal right panel) */}
                      {item.key === "solutions" ? (
                        <div className="relative min-w-[1080px]">
                          <div className="relative flex">
                            {/* LEFT DARK AREA */}
                            <div className="p-8 flex gap-14">
                              <div className="min-w-[220px]">
                                <h3 className="text-teal-400 font-semibold mb-4 text-lg">Filter by segment</h3>
                                <div className="relative pl-6">
                                  <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-700" />
                                  <div className="space-y-2">
                                    {segmentsConfig.map((seg) => (
                                      <button
                                        key={seg.key}
                                        onClick={() => setSelectedSegmentKey(seg.key)}
                                        className={cn(
                                          "w-full text-left px-5 py-2.5 rounded-full transition-all",
                                          selectedSegmentKey === seg.key
                                            ? "bg-teal-400 text-slate-950 font-semibold"
                                            : "text-white hover:bg-teal-400/20 hover:text-teal-200",
                                        )}
                                      >
                                        {seg.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="min-w-[360px]">
                                <h3 className="text-teal-400 font-semibold mb-4 text-lg">Organization Type</h3>
                                <div className="relative pl-6">
                                  <div className="absolute left-2 top-1 bottom-1 w-px bg-slate-700" />
                                  <div className="space-y-2">
                                    {desktopOrgTypes.map((org) => (
                                      <button
                                        key={org.orgTypeKey}
                                        onClick={() => setSelectedOrgTypeKey(org.orgTypeKey)}
                                        className={cn(
                                          "w-full text-left px-5 py-2.5 rounded-full transition-all",
                                          selectedOrgTypeKey === org.orgTypeKey
                                            ? "bg-teal-400 text-slate-950 font-semibold"
                                            : "text-white hover:bg-teal-400/20 hover:text-teal-200",
                                        )}
                                      >
                                        {org.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* NOTCH */}
                            {/* <div className="absolute right-[520px] top-24 z-10">
                              <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[14px] border-r-teal-400" />
                            </div> */}

                            {/* RIGHT TEAL PANEL */}
                            <div className="w-[520px] bg-[#04CAB5] text-slate-950 p-10">
                              <h3 className="text-slate-950 font-semibold mb-5 text-lg">Solution</h3>

                              <Link href={desktopOrgType.overview.href} className="block text-slate-950/90 hover:text-slate-950 text-sm leading-6">
                                {desktopOrgType.overview.label}
                              </Link>

                              <div className="h-px bg-slate-950/40 my-6" />

                              <div className="space-y-4 text-sm max-h-80 overflow-y-auto pr-2">
                                {desktopOrgType.links.map((l) => (
                                  <Link key={`${l.href}-${l.label}`} href={l.href} className="block text-slate-950/90 hover:text-slate-950">
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // ✅ ALL OTHER SUBMENUS use SAME STYLE (like screenshots)
                        <DesktopColumnsMenu columns={item.submenu} />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT ITEMS */}
          <div className={cn("flex items-center gap-3 transition-colors duration-300 ml-auto", isSubmenuOpen ? "text-white" : "")}>
            {/* Search */}
            <div className="hidden md:block relative">
              {desktopSearchOpen ? (
                <div className="flex items-center bg-slate-200 rounded-lg px-3 py-2 min-w-48">
                  <input
                    type="text"
                    placeholder={t("search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch(e as any)
                    }}
                    className="bg-transparent outline-none text-black text-xs placeholder-gray-500 flex-1"
                    autoFocus
                  />
                  <button
                    onClick={(e) => {
                      handleSearch(e)
                      setDesktopSearchOpen(false)
                    }}
                    className="text-gray-500 hover:text-teal-400 transition-colors ml-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button onClick={() => setDesktopSearchOpen(true)} className="p-2 rounded transition-colors hover:bg-accent/10 text-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>

            <Link href="/book-demo" className="hidden md:block">
              <Button className={cn("rounded-full font-medium transition-all text-xs px-4 py-2 h-auto", isSubmenuOpen ? "bg-teal-400 text-slate-950 hover:bg-teal-300" : "bg-teal-500 text-white hover:bg-teal-600")}>
                {t("requestDemo")}
              </Button>
            </Link>
            <Link href="https://auth.sso.one-constellation.com/login?_gl=1*1jagxc6*_ga*Mjk1Mzg3NTY2LjE3NjQ5MTEwNjA.*_ga_R4Q9HDJXRX*czE3NjgzMDU1MjYkbzYkZzEkdDE3NjgzMDU4MzMkajU1JGwwJGgw*_gcl_au*MTc0MTQ2ODQwMy4xNzY0OTExMDYwLjk0MTA3MzU5NC4xNzY3MTc5NTU1LjE3NjcxNzk1NTU."
              className="hidden md:block">
              <Button
                className={cn(
                  "rounded-full font-medium transition-all text-xs px-4 py-2 h-auto border border-teal-500 bg-transparent text-teal-400 hover:bg-teal-500/10",
                  isSubmenuOpen ? "border-teal-300 text-teal-300" : "border-teal-500 text-teal-400",
                )}
              >
                {t("clientLogin")}
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE NAV */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 backdrop-blur-md border-b border-border z-[1100] h-16 flex items-center lg:hidden transition-colors duration-300",
          headerBgColor,
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between w-full h-full gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={isSubmenuOpen ? "/logo-light.png" : "/logo-dark.png"} alt="Logo" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-3 ml-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={cn("p-2 rounded transition-colors hover:bg-accent/10", headerTextColor)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-b from-[#002E49] via-slate-900 to-slate-800 z-[40] flex flex-col pt-20"
    >
      <div className="flex-1 overflow-y-auto">
        {/* ✅ MOBILE SEARCH BAR (added back) */}
        <div className="flex-shrink-0   border-b border-slate-800 p-4">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-slate-800 rounded-lg px-4 py-3 border border-slate-700 hover:border-teal-400/30 transition-colors"
          >
            <input
              type="text"
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white text-sm placeholder-gray-500"
              autoFocus
            />
            <button type="submit" className="text-gray-500 hover:text-teal-400 transition-colors ml-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* ✅ MENU ITEMS */}
        <div className="p-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.key}>
              <button
                onClick={() => setOpenSubmenu(item.key)}
                className="w-full text-left px-4 py-3 text-white hover:bg-slate-900 transition-colors font-medium flex items-center justify-between rounded"
              >
                {item.label}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Optional buttons like your old code */}
        <div className="border-t border-slate-800 mt-4 pt-4 p-4">
          <Link
            href="/book-demo"
            className="block px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white transition-colors text-sm rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            {t("requestDemo")}
          </Link>
        </div>

        <div className="border-t border-slate-800 mt-2 pt-4 p-4">
          <Link
            href="https://auth.sso.one-constellation.com/login?_gl=1*1jagxc6*_ga*Mjk1Mzg3NTY2LjE3NjQ5MTEwNjA.*_ga_R4Q9HDJXRX*czE3NjgzMDU1MjYkbzYkZzEkdDE3NjgzMDU4MzMkajU1JGwwJGgw*_gcl_au*MTc0MTQ2ODQwMy4xNzY0OTExMDYwLjk0MTA3MzU5NC4xNzY3MTc5NTU1LjE3NjcxNzk1NTU."
            className="block px-4 py-3 border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition-colors text-sm rounded-lg font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            {t("clientLogin")}
          </Link>
        </div>
      </div>
      {/* ✅ LANGUAGE (mobile) */}
{/* <div className="border-t border-slate-800 mt-2 pt-4 p-4">
  <div className="relative">
    <button
      onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
    >
      <span className="hidden sm:inline">{language}</span>
      <ChevronDown className={cn("w-4 h-4 transition-transform", languageDropdownOpen ? "rotate-180" : "")} />
    </button>

    <AnimatePresence>
      {languageDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="absolute left-4 mt-2 w-44 bg-slate-900 border border-slate-800 rounded-lg shadow-lg py-1 z-[9999]"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setLanguageDropdownOpen(false)
              }}
              className={cn(
                "w-full text-left px-3 py-2 text-xs flex items-center gap-2 transition-all",
                language === lang.code
                  ? "bg-teal-500/20 text-teal-300 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-slate-800",
              )}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div> */}

    </motion.div>
  )}
</AnimatePresence>


      {/* MOBILE SUBMENU */}
      <AnimatePresence>
        {isOpen && openSubmenu && (
          <MobileSubmenu
            submenuName={openSubmenu}
            items={navItems.find((i) => i.key === openSubmenu)?.submenu || []}
            setOpenSubmenu={setOpenSubmenu}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  )
}
