import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchContent } from "./search-content"

function SearchLoading() {
  return null
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900 pt-32">
        <Suspense fallback={<SearchLoading />}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
