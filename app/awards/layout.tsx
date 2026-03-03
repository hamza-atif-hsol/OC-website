import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awards & Accolades | One Constellation',
  description: 'Discover One Constellation\'s industry awards and recognition for innovative compliance and CLM solutions.',
  openGraph: {
    title: 'Awards & Accolades | One Constellation',
    description: 'Discover One Constellation\'s industry awards and recognition for innovative compliance and CLM solutions.',
    type: 'website',
  },
}

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
