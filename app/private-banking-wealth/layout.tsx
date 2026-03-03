import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CLM for Private Banking & Wealth Management | One Constellation",
  description:
    "Empower private banking and wealth management firms with digital client onboarding, automated KYC/KYB, sanctions screening, and policy-driven compliance workflows—reducing risk, accelerating deal execution, and ensuring audit-ready controls across global markets.",
}

export default function PrivateBankingWealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}