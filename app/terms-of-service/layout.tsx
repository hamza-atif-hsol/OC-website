import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - One Constellation",
  description:
    "Learn how One Constellation collects, uses, protects, and processes personal data in accordance with global privacy and data protection regulations.",
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}