import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Demo - One Constellation",
  description: "Schedule a personalized demo of One Constellation's digital solutions and see how we can transform your business.",
}

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
