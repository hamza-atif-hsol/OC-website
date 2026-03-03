import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies - One Constellation",
  description:
    "Explore real-world success stories of how One Constellation solutions drive innovation and transformation across the financial services industry.",
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
