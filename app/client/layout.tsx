import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Future-Proofing Global Financial Institutions - One Constellation",
  description:
    "Explore how One Constellation helps global financial institutions drive growth, ensure regulatory safety, and maximize operational efficiencies with innovative solutions.",
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
