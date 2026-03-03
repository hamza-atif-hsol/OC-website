import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Slavery & Human Trafficking - One Constellation",
  description:
    "One Constellation's commitment to understanding and safeguarding our business and supply chain from modern slavery and human trafficking.",
}

export default function ModernSlaveryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
