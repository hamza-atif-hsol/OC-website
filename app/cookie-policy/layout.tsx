import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - One Constellation",
  description:
    "Learn how One Constellation collects, uses, protects, and processes personal data in accordance with global privacy and data protection regulations.",
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}