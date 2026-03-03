"use client"

import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  category: string
  description: string
  url: string
}

export function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const { t } = useLanguage()

  const allResults: SearchResult[] = [
    {
      id: "1",
      title: t("kycSolution"),
      category: "Solutions",
      description: t(
        "Know Your Customer solution for comprehensive compliance and customer verification across all jurisdictions.",
      ),
      url: "#kyc",
    },
    {
      id: "2",
      title: t("clientOnboarding"),
      category: "Solutions",
      description: t(
        "Streamline and automate end-to-end client onboarding journeys with intelligent workflows and compliance built-in.",
      ),
      url: "#onboarding",
    },
    {
      id: "3",
      title: t("idVerification"),
      category: "Solutions",
      description: t(
        "Advanced identity verification and validation using AI-powered document processing and biometric verification.",
      ),
      url: "#id-verification",
    },
    {
      id: "4",
      title: t("transactionMonitoring"),
      category: "Solutions",
      description: t("Real-time transaction screening and anomaly detection powered by machine learning algorithms."),
      url: "#transaction-monitoring",
    },
    {
      id: "5",
      title: t("regulatoryCompliance"),
      category: "Solutions",
      description: t(
        "Ensure compliance with global regulations including GDPR, CCPA, MiFID II, and local requirements.",
      ),
      url: "#compliance",
    },
    {
      id: "6",
      title: t("antiMoneyLaundering"),
      category: "Solutions",
      description: t(
        "Comprehensive AML solutions to detect suspicious patterns and maintain compliance with FATF and OFAC requirements.",
      ),
      url: "#aml",
    },
    {
      id: "7",
      title: t("compliancePortal"),
      category: "Solutions",
      description: t(
        "Complete compliance management platform with audit trails and regulatory reporting capabilities.",
      ),
      url: "#compliance-portal",
    },
    {
      id: "8",
      title: t("crmSalesforce"),
      category: "Solutions",
      description: t("Integrated CRM solution for Salesforce with real-time client data and compliance insights."),
      url: "#crm",
    },
  ]

  const filteredResults = query.trim()
    ? allResults.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      )
    : allResults

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("searchResults")}</h1>
        <p className="text-slate-400 text-lg">
          {query ? (
            <>
              {filteredResults.length} {t("resultsFound")} "<span className="text-accent">{query}</span>"
            </>
          ) : (
            t("allSolutions")
          )}
        </p>
      </div>

      {/* Results Grid */}
      {filteredResults.length > 0 ? (
        <div className="grid gap-6 mb-12">
          {filteredResults.map((result) => (
            <Link
              key={result.id}
              href={result.url}
              className="group block bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                    {result.title}
                  </h2>
                  <span className="inline-block px-3 py-1 text-xs bg-accent/20 text-accent rounded-full mb-3">
                    {result.category}
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">{result.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg mb-6">{t("noResultsFound")}</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-accent text-slate-900 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            {t("backToHome")}
          </Link>
        </div>
      )}
    </div>
  )
}
