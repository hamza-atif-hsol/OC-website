import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CLM for Asset Services | One Constellation",
  description:
    "Empower asset services firms with digital client onboarding, automated KYC/KYB, sanctions screening, and policy-driven compliance workflows—reducing risk, accelerating deal execution, and ensuring audit-ready controls across global markets.",
}

export default function CLMAssetServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}