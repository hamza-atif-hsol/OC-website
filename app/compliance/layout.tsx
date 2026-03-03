import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulatory Compliance | One Constellation",
  description: "Master regulatory compliance across all jurisdictions with One Constellation's intelligent compliance platform. Automate reporting and ensure audit readiness.",
  openGraph: {
    title: "Regulatory Compliance | One Constellation",
    description: "Master regulatory compliance across all jurisdictions with One Constellation's intelligent compliance platform.",
  },
}

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
