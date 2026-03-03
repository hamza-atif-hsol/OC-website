import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KYC Fintech Solution | One Constellation",
  description: "Fenergo provides a suite of SaaS solutions that automates risk monitoring across the entire customer and merchant lifecycle.",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
