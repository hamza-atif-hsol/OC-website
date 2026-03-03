import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Upcoming Events & Webinars | One Constellation",
  description: "Join us for upcoming events, webinars, and conferences. Learn more about compliance solutions and industry insights.",
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
