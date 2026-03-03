import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Updates - One Constellation",
  description:
    "Latest privacy and security updates from One Constellation, including incident reports and data protection measures.",
}

export default function PrivacyUpdatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
