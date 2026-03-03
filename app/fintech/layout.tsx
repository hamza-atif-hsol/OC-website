import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fintech KYC Solutions | One Constellation",
  description:
    "Enable fintechs to onboard customers faster with automated KYC/KYB, identity verification, risk screening, and policy-driven compliance workflows—delivering real-time decisions, lower fraud risk, and full auditability across jurisdictions.",
}

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}