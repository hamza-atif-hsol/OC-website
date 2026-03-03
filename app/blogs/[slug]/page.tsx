"use client"

import { motion } from "framer-motion"
import { Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import React from "react"

const blogArticles: Record<string, any> = {
  "ai-powered-compliance": {
    id: 1,
    title: "One Constellation Launches AI-Powered Compliance Engine",
    date: "January 10, 2025",
    category: "Product Launch",
    author: "Product Team",
    readTime: "8 min read",
    image: "/blog1.jpg",
    content: `
      <h2>Revolutionary AI Technology for Compliance</h2>
      <p>We are excited to announce the launch of our groundbreaking AI-Powered Compliance Engine, a solution designed to transform how financial institutions approach compliance workflows. This innovative platform combines cutting-edge machine learning with deep compliance expertise to deliver unprecedented accuracy and efficiency.</p>
      
      <h2>Key Features</h2>
      <p>Our new engine delivers several transformative capabilities:</p>
      <ul>
        <li>95% accuracy in detecting suspicious patterns and anomalies</li>
        <li>Real-time processing of millions of transactions</li>
        <li>Automated reporting and documentation</li>
        <li>Continuous learning and adaptation to new threats</li>
        <li>Seamless integration with existing systems</li>
      </ul>
      
      <h2>Impact on Operations</h2>
      <p>Early adopters of our AI-Powered Compliance Engine have reported significant improvements in their compliance operations:</p>
      <ul>
        <li>50% reduction in manual review time</li>
        <li>30% improvement in detection accuracy</li>
        <li>Enhanced regulatory compliance and reporting</li>
        <li>Lower operational costs through automation</li>
      </ul>
      
      <h2>The Future of Compliance</h2>
      <p>This launch marks a pivotal moment in the compliance industry. As regulatory requirements continue to evolve and become more complex, intelligent automation becomes not just an advantage but a necessity. Our AI engine represents the next generation of compliance technology.</p>
      
      <h2>Get Started Today</h2>
      <p>Financial institutions looking to modernize their compliance operations are invited to experience the power of AI-driven compliance. Our team is ready to demonstrate how this technology can transform your organization's approach to regulatory compliance and risk management.</p>
    `,
  },
  "gartner-magic-quadrant": {
    id: 2,
    title: "One Constellation Named Leader in Gartner Magic Quadrant",
    date: "January 5, 2025",
    category: "Awards",
    author: "Corporate Communications",
    readTime: "6 min read",
    image: "/blog2.jpg",
    content: `
      <h2>Recognition as Industry Leader</h2>
      <p>We are thrilled to announce that One Constellation has been recognized as a Leader in the Gartner Magic Quadrant for Know Your Customer and Anti-Money Laundering solutions. This marks our third consecutive year of recognition in this prestigious evaluation.</p>
      
      <h2>What This Means</h2>
      <p>Being positioned as a Leader in the Gartner Magic Quadrant reflects our commitment to innovation and excellence in compliance technology. The evaluation criteria include:</p>
      <ul>
        <li>Ability to execute on product roadmap</li>
        <li>Completeness of vision for compliance solutions</li>
        <li>Customer satisfaction and retention</li>
        <li>Market presence and influence</li>
        <li>Innovation and product development</li>
      </ul>
      
      <h2>Our Journey</h2>
      <p>This achievement is the result of years of dedication to developing best-in-class compliance solutions. Our team has worked tirelessly to understand the evolving needs of financial institutions and deliver solutions that address those challenges effectively.</p>
      
      <h2>Continued Innovation</h2>
      <p>As we move forward, we remain committed to pushing the boundaries of what's possible in compliance technology. Our investment in AI, machine learning, and automation will continue to drive innovation in the space.</p>
      
      <h2>Thank You</h2>
      <p>This recognition would not have been possible without the trust and partnership of our clients around the world. We are grateful for the opportunity to serve the compliance needs of the financial industry.</p>
    `,
  },
  "singapore-expansion": {
    id: 3,
    title: "Expansion: New Regional Hub in Singapore",
    date: "December 28, 2024",
    category: "Company News",
    author: "Global Operations",
    readTime: "5 min read",
    image: "/blog3.jpg",
    content: `
      <h2>Strengthening Our Asia-Pacific Presence</h2>
      <p>One Constellation is proud to announce the opening of our new regional hub in Singapore. This strategic expansion represents our commitment to serving the growing compliance needs of financial institutions across the Asia-Pacific region.</p>
      
      <h2>Singapore's Strategic Location</h2>
      <p>Singapore is a global financial center and one of the world's most important hubs for banking and finance. By establishing our presence here, we are better positioned to serve clients across the region and maintain close proximity to key markets including:</p>
      <ul>
        <li>Hong Kong and Greater China</li>
        <li>Southeast Asia</li>
        <li>India and South Asia</li>
        <li>Australia and New Zealand</li>
      </ul>
      
      <h2>Regional Services</h2>
      <p>Our Singapore hub will provide comprehensive services including:</p>
      <ul>
        <li>Local client support and consulting</li>
        <li>Regional compliance expertise</li>
        <li>Product customization for regional requirements</li>
        <li>Dedicated account management</li>
      </ul>
      
      <h2>Building Local Expertise</h2>
      <p>We are committed to building a world-class team in Singapore that understands the nuances of the regional market. We are actively recruiting top talent in compliance, technology, and customer success.</p>
      
      <h2>Looking Forward</h2>
      <p>This expansion is just the beginning of our growth strategy in Asia-Pacific. We are excited about the opportunities ahead and look forward to supporting our clients' compliance journey.</p>
    `,
  },
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = blogArticles[params.slug]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Article Not Found</h1>
          <Link href="/blogs" className="text-cyan-400 hover:text-cyan-500">
            Back to Blogs
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
          <h2 className="text-3xl font-bold text-slate-900">More Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {Object.entries(blogArticles)
              .slice(0, 3)
              .map(([slug, item]) => (
                <Link
                  key={slug}
                  href={`/blogs/${slug}`}
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
