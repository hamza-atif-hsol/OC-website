import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - One Constellation",
  description: "Get in touch with One Constellation's team. We're here to help with your digital solution needs.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
