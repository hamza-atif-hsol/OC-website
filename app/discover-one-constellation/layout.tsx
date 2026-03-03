import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Discover One Constellation | Digital CLM & Compliance Platform",
  description:
    "Explore One Constellation’s intelligent platform for Client Lifecycle Management, KYC/KYB, regulatory compliance, and Agentic AI. Discover how we modernize onboarding, risk management, and operational efficiency across global financial institutions.",
}

export default function discoverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}