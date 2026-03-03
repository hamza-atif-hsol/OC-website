import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CLM for Corporate & Institutional Banking | One Constellation",
  description:
    "Digitally transform corporate and institutional banking with end-to-end client lifecycle management, automated KYC/KYB, policy-driven regulatory compliance, and streamlined onboarding across global jurisdictions.",
}

export default function CorporateInstitutionalBankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}