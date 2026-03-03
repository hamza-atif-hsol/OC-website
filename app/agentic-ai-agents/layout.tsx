import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agentic AI Agents - One Constellation",
  description: "Leverage AI agents to automate and enhance your business processes with One Constellation.",
}

export default function AgenticAIAgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
