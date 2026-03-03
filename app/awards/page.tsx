'use client'

import React, { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type Award = {
  id: number
  title: string
  category: string
  date: string
  image: string
  description: string
  link: string
  gradient: string
}

const awards: Award[] = [
  {
    id: 1,
    title: 'One Constellation Named Most Valuable Pioneer (MVP) in KYC & CLM Solutions by QKS Group 2026',
    category: 'Industry Recognition',
    date: 'April 2026',
    image: '/award-1.jpg',
    description: 'Recognized as the Most Valuable Pioneer in KYC and CLM Solutions by QKS Group. This award acknowledges One Constellation\'s innovative approach and leadership in delivering cutting-edge compliance and client lifecycle management solutions to the financial services industry.',
    link: '#',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'One Constellation Recognised in the 2026 Chartis RiskTech100 Rankings',
    category: 'Industry Recognition',
    date: 'March 2026',
    image: '/award-2.jpg',
    description: 'One Constellation has been recognized in the prestigious Chartis RiskTech100 Rankings for 2026. This recognition highlights our commitment to innovation in risk technology and our position as a leader in the fintech ecosystem.',
    link: '#',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Global Custodian names One Constellation Technology Provider of the Year at Industry Leaders Awards 2025',
    category: 'Technology Award',
    date: 'December 2025',
    image: '/award-3.jpg',
    description: 'Global Custodian Magazine has named One Constellation as Technology Provider of the Year at the Industry Leaders Awards 2025. This prestigious award recognizes our exceptional contribution to transforming the financial services industry through innovative technology solutions.',
    link: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'One Constellation Awarded Best Client On-Boarding Solution by RegTech Insight Awards USA 2025',
    category: 'Solution Award',
    date: 'November 2025',
    image: '/award-3.jpg',
    description: 'One Constellation has been awarded Best Client On-Boarding Solution by RegTech Insight Awards USA. This award recognizes our industry-leading digital client onboarding platform that streamlines and accelerates the customer acquisition process.',
    link: '#',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'One Constellation Named Best Software Provider for Compliance Management at Euromoney Transaction Banking Awards 2025',
    category: 'Technology Award',
    date: 'October 2025',
    image: '/award-1.jpg',
    description: 'Euromoney Transaction Banking Awards 2025 has named One Constellation as the Best Software Provider for Compliance Management. This recognition underscores our expertise and leadership in delivering comprehensive compliance solutions for transaction banking.',
    link: '#',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 6,
    title: 'One Constellation Wins Best Client Lifecycle Management Solution at Regulation Asia Awards for Excellence 2025',
    category: 'Solution Award',
    date: 'September 2025',
    image: '/award-2.jpg',
    description: 'One Constellation has won the Best Client Lifecycle Management Solution award at the Regulation Asia Awards for Excellence 2025. This award recognizes our excellence in delivering comprehensive CLM solutions that help financial institutions manage the complete customer lifecycle.',
    link: '#',
    gradient: 'from-indigo-500 to-blue-500',
  },
]

// Modal Component
function AwardModal({ award, onClose }: { award: Award | null; onClose: () => void }) {
  if (!award) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </button>

        {/* Modal Body */}
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative h-48 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Award Logo */}
              <div className="inline-block">
                <span className="text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-3 py-1 rounded-full">
                  {award.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {award.title}
              </h2>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {award.description}
              </p>

              {/* Divider */}
              <div className="border-t border-slate-200 dark:border-slate-800 pt-4" />

              {/* Date */}
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Date: {award.date}
              </p>

              {/* Action Button */}
              <Button
                onClick={onClose}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AwardsPage() {
  const [sortBy, setSortBy] = useState('date')
  const [selectedAward, setSelectedAward] = useState<Award | null>(null)

  const sortedAwards = [...awards].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return a.title.localeCompare(b.title)
  })

  return (
    <>
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <a href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Homepage
            </a>
            <span>›</span>
            <span className="text-slate-900 dark:text-slate-100">Awards & Accolades</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Awards & Accolades
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              One Constellation is flattered to be consistently recognized by the industry for our commitment to future proofing financial institutions with next-generation CLM and compliance solutions.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our community approach to developing solutions and track record in digitally transforming how financial institutions operate and serve their customers is what sets us apart from the competition and gains us market recognition.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 font-medium">
              Check out our awards below.
            </p>
          </div>

          {/* Images - 3 Masked Windows */}
          <div className="relative h-96 lg:h-full flex items-center justify-center gap-4">
            {/* Left Window */}
            <div className="relative w-24 h-80 flex-shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg transform -rotate-6">
                <img
                  src={`https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?semt=ais_user_personalization&w=740&q=80`}
                  alt="Team member"
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>

            {/* Center Window */}
            <div className="relative w-24 h-96 flex-shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
                <img
                  src={`https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?semt=ais_user_personalization&w=740&q=80`}
                  alt="Team member"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Window */}
            <div className="relative w-24 h-80 flex-shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg transform rotate-6">
                <img
                  src={`https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?semt=ais_user_personalization&w=740&q=80`}
                  alt="Team member"
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Our Recognition
            </h2>

            <div className="relative">
              <button
                onClick={() => setSortBy(sortBy === 'date' ? 'name' : 'date')}
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
              >
                <span className="text-sm font-medium">
                  {sortBy === 'date' ? 'Filter by date' : 'Filter by name'}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAwards.map((award) => (
            <div
              key={award.id}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-800"
            >
              {/* Award Image Container */}
              <div className="relative h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="inline-block">
                  <span className="text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-3 py-1 rounded-full">
                    {award.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight line-clamp-3">
                  {award.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {award.date}
                </p>

                {/* Divider */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800" />

                {/* View Button */}
                <button
                  onClick={() => setSelectedAward(award)}
                  className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View this award →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-lg text-blue-100">
              Join industry leaders who trust One Constellation for next-generation compliance and CLM solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-[#1f6cdf] text-white hover:bg-white/10 dark:border-slate-300 dark:text-slate-100"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>

    {/* Award Modal */}
    {selectedAward && (
      <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />
    )}
    </>
  )
}
