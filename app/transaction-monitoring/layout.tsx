import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transaction Monitoring - One Constellation",
  description: "Advanced transaction monitoring and compliance solutions for client lifecycle management.",
}

export default function MonitoringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
