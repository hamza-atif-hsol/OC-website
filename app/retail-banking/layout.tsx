import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retail Banking Solutions | One Constellation",
  description:
    "Empower retail banking firms with digital client onboarding, automated KYC/KYB, sanctions screening, and policy-driven compliance workflows—reducing risk, accelerating deal execution, and ensuring audit-ready controls across global markets.",
}

export default function RetailBankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}