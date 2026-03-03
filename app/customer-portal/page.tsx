"use client"
import { LayoutDashboard, FileUp, Bell, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomerPortalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">Delightful Onboarding Experiences</h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Transform the client journey with a fully customizable, white-label portal that simplifies onboarding and
              ongoing account management.
            </p>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              Request a Sandbox
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
      </section>

      {/* Feature Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Self-Service Onboarding</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Allow clients to upload documents, sign contracts, and complete KYC checks at their own pace. Reduce
                back-and-forth emails and accelerate time-to-revenue.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: FileUp, text: "Drag-and-drop document uploads" },
                  { icon: LayoutDashboard, text: "Real-time application tracking" },
                  { icon: Bell, text: "Automated status notifications" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 border p-8 rounded-3xl shadow-inner">
              {/* Mock Dashboard UI */}
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-6 w-32 bg-slate-200 rounded animate-pulse" />
                  <div className="h-8 w-8 bg-slate-200 rounded-full animate-pulse" />
                </div>
                <div className="h-32 w-full bg-white border rounded-xl p-4 shadow-sm">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CreditCard className="text-emerald-500 w-6 h-6" />
                    </div>
                    <div>
                      <div className="h-4 w-24 bg-slate-100 rounded mb-2" />
                      <div className="h-3 w-16 bg-slate-100 rounded" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white border rounded-xl p-4 shadow-sm" />
                  <div className="h-24 bg-white border rounded-xl p-4 shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
