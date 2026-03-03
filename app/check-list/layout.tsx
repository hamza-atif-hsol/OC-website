import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checklist - One Constellation",
  description:
    "Complete the One Constellation onboarding checklist for domain/fund setup, required modules, portal access, and supporting document uploads   ensuring accurate configuration and faster setup.",
}

export default function KYCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}