import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intelligent Document Processing | One Constellation",
  description:
    "Streamline contract lifecycle management with Salesforce CLM by One Constellation. Automate contract creation, approvals, compliance checks, and renewals with full visibility and control across the enterprise.",
  openGraph: {
    title: "Intelligent Document Processing | One Constellation",
    description:
      "Automate and manage the entire contract lifecycle with Salesforce CLM. Improve compliance, accelerate approvals, and gain real-time contract insights with One Constellation.",
  },
}

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
