import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leadership Team | One Constellation",
  description:
    "Meet the leadership team behind One Constellation. Discover the vision, experience, and strategic direction driving innovation in Client Lifecycle Management, KYC/KYB, regulatory compliance, and digital transformation across global financial institutions.",
}

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}