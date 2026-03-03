"use client"

import { useState, useMemo } from "react"
import { useLanguage } from "@/lib/language-context"
import { Search, X } from "lucide-react"
import Link from "next/link"

interface SearchItem {
  id: string
  title: string
  category: string
  description: string
}

export function SearchSuggestions() {
  const { t } = useLanguage()
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const searchItems: SearchItem[] = useMemo(
    () => [
      {
        id: "1",
        title: t("kycSolution"),
        category: "Solutions",
        description: t("Know Your Customer solution for compliance"),
      },
      {
        id: "2",
        title: t("clientOnboarding"),
        category: "Solutions",
        description: t("Streamline client onboarding process"),
      },
      {
        id: "3",
        title: t("idVerification"),
        category: "Solutions",
        description: t("Identity verification and validation"),
      },
      {
        id: "4",
        title: t("transactionMonitoring"),
        category: "Solutions",
        description: t("Real-time transaction monitoring"),
      },
      {
        id: "5",
        title: t("regulatoryCompliance"),
        category: "Solutions",
        description: t("Regulatory compliance management"),
      },
      {
        id: "6",
        title: t("antiMoneyLaundering"),
        category: "Solutions",
        description: t("AML compliance tools"),
      },
    ],
    [t],
  )

  const filteredResults = useMemo(() => {
    if (!query.trim()) return []
    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    )
  }, [query, searchItems])

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder={t("search")}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setIsOpen(false)
            }}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="divide-y divide-slate-700">
              {filteredResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                    <span className="ml-2 px-2 py-1 text-xs bg-accent/20 text-accent rounded">{item.category}</span>
                  </div>
                </Link>
              ))}
              <Link
                href={`/search?q=${encodeURIComponent(query)}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-accent hover:bg-slate-700 transition-colors font-medium border-t border-slate-700"
              >
                {t("viewMore")} "{query}"
              </Link>
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-slate-400">{t("noResultsFound")}</div>
          )}
        </div>
      )}
    </div>
  )
}
