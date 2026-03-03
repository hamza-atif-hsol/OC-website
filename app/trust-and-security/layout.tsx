import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trust & Security - One Constellation",
  description:
    "Learn about One Constellation's commitment to security, compliance, and transparency. Discover our SaaS guarantee, certifications, and security practices.",
}

export default function TrustAndSecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
