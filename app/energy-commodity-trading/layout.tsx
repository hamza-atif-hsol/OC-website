import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Energy and Commodity Trading Solutions | One Constellation",
  description:
    "Empower energy and commodity trading firms with digital counterparty onboarding, automated KYC/KYB, sanctions screening, and policy-driven compliance workflows—reducing risk, accelerating deal execution, and ensuring audit-ready controls across global markets.",
}

export default function EnergyCommodityTradingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}