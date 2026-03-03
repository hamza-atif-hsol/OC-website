import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Know Your Customer (KYC) - One Constellation",
  description: "Advanced Know Your Customer compliance and verification solutions for client lifecycle management.",
}

export default function KYCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
