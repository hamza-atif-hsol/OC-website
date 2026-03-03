import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Account Opening - One Constellation",
  description:
    "Digitally transform account opening with intelligent automation, streamlined workflows, and built-in compliance. One Constellation enables faster, frictionless account opening while ensuring regulatory accuracy and operational efficiency across the client lifecycle.",
}

export default function MonitoringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
