import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KYC & CLM for Commercial & Business Banks | One Constellation",
  description:
    "Digitally transform onboarding and lifecycle management for commercial and business banks with automated KYC/KYB, policy-driven regulatory compliance, streamlined workflows, and complete auditability across jurisdictions.",
}

export default function CommercialBusinessBankLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}