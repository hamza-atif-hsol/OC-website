import { Metadata } from "next"

export const metadata: Metadata = {
  title: "client-lifecycle-management | One Constellation",
  description:
    "Streamline contract lifecycle management with Salesforce CLM by One Constellation. Automate contract creation, approvals, compliance checks, and renewals with full visibility and control across the enterprise.",
  openGraph: {
    title: "Client Lifecycle Management | One Constellation",
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
