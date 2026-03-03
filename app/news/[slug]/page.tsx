"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import React from "react"

const newsArticles: Record<string, any> = {
  "aml-vs-kyc": {
    id: 1,
    title: "AML vs KYC: Understanding the Differences, Ensuring Compliance, and Adopting Best Practices",
    date: "May 2, 2025",
    category: "AML, KYC",
    author: "Compliance Team",
    readTime: "8 min read",
    image: "/aml.webp",
    content: `
      <h2>Understanding the Core Differences</h2>
      <p>AML (Anti-Money Laundering) and KYC (Know Your Customer) are two fundamental components of compliance frameworks that financial institutions must implement. While often mentioned together, they serve distinct but complementary purposes in preventing financial crime.</p>
      
      <h2>What is KYC?</h2>
      <p>Know Your Customer (KYC) refers to the process of verifying the identity and assessing the suitability of clients. This involves collecting personal information, verifying identities, and understanding the nature of customer relationships and activities.</p>
      <p>Key components of KYC include:</p>
      <ul>
        <li>Customer identification and verification</li>
        <li>Understanding customer's business and source of funds</li>
        <li>Assessment of customer risk profile</li>
        <li>Ongoing monitoring and review</li>
      </ul>
      
      <h2>What is AML?</h2>
      <p>Anti-Money Laundering (AML) refers to the set of procedures, laws, and regulations designed to stop the practice of generating income through illegal actions. AML programs are designed to detect and prevent money laundering activities.</p>
      <p>AML focuses on:</p>
      <ul>
        <li>Transaction monitoring and reporting</li>
        <li>Identification of suspicious activities</li>
        <li>Reporting to regulatory authorities</li>
        <li>Maintaining audit trails and documentation</li>
      </ul>
      
      <h2>Best Practices for Implementation</h2>
      <p>Modern financial institutions are adopting integrated approaches that combine KYC and AML processes:</p>
      <ul>
        <li>Use technology to streamline customer verification</li>
        <li>Implement continuous monitoring systems</li>
        <li>Maintain comprehensive documentation</li>
        <li>Provide regular training to staff</li>
        <li>Stay updated with regulatory changes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While AML and KYC serve different purposes, they work together to create a robust compliance framework. Financial institutions that understand and properly implement both measures are better positioned to manage compliance risks and prevent financial crime.</p>
    `,
  },
  "understanding-fcrm": {
    id: 2,
    title: "Understanding Financial Crime Risk Management (FCRM)",
    date: "May 2, 2025",
    category: "FCRM",
    author: "Risk Management Team",
    readTime: "10 min read",
    image: "/fcrm.webp",
    content: `
      <h2>Introduction to Financial Crime Risk Management</h2>
      <p>Financial Crime Risk Management (FCRM) is a comprehensive approach to identifying, assessing, and mitigating risks associated with financial crime activities within an organization.</p>
      
      <h2>Key Components of FCRM</h2>
      <p>An effective FCRM program includes multiple layers of controls and monitoring:</p>
      <ul>
        <li>Risk assessment and classification</li>
        <li>Customer due diligence</li>
        <li>Transaction monitoring</li>
        <li>Sanctions screening</li>
        <li>Incident reporting and escalation</li>
        <li>Training and awareness programs</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>Successful FCRM implementation requires a multi-departmental approach with clear governance and accountability structures.</p>
      
      <h2>Technology's Role</h2>
      <p>Modern financial institutions are leveraging AI and machine learning to enhance their FCRM capabilities, enabling real-time monitoring and predictive analytics.</p>
    `,
  },
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Article Not Found</h1>
          <Link href="/news" className="text-cyan-400 hover:text-cyan-500">
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Article Content */}
      <article className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Meta Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-semibold text-cyan-400 uppercase">
                  {article.category}
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="text-sm text-slate-500">{article.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-900">{article.author}</p>
                  <p className="text-xs text-slate-500">Published on {article.date}</p>
                </div>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="space-y-6"
              />
            </div>

            {/* CTA Section */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="bg-gradient-to-r from-cyan-400/10 to-teal-400/10 border border-cyan-200/30 rounded-lg p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Learn More</h3>
                <p className="text-slate-600">
                  Explore our comprehensive solutions for compliance and risk management.
                </p>
                <button className="px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors font-medium">
                  Discover Our Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Footer CTA */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {Object.entries(newsArticles)
              .slice(0, 3)
              .map(([slug, item]) => (
                <Link
                  key={slug}
                  href={`/news/${slug}`}
                  className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="bg-slate-100 h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-xs font-semibold text-cyan-400 uppercase">{item.category}</p>
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
