import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asset Management Solutions | One Constellation",
  description:
    "Transform investor onboarding and lifecycle management for asset managers with automated KYC/KYB, policy-driven compliance, streamlined workflows, and full auditability across global jurisdictions.",
}

export default function AssetManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}