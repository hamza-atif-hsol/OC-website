import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs | One Constellation",
  description: "Latest insights, articles, and news from One Constellation about digital efficiency, compliance, and client journeys.",
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
