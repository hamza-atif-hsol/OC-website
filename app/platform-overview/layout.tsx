import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Constellation Platform | One Constellation',
  description: 'Discover One Constellation\'s advanced end-to-end Client Lifecycle Management suite. Transform your business with flexible, scalable solutions.',
  openGraph: {
    title: 'One Constellation Platform | One Constellation',
    description: 'Discover One Constellation\'s advanced end-to-end Client Lifecycle Management suite. Transform your business with flexible, scalable solutions.',
    type: 'website',
  },
}

export default function PlatformOverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
