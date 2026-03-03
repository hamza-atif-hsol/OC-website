import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News | One Constellation",
  description: "Latest industry news, regulatory updates, and market insights from One Constellation.",
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
