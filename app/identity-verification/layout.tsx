import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ID&V Solutions - One Constellation",
  description: "Advanced Identity & Verification compliance and verification solutions for client lifecycle management.",
}

export default function IDVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
