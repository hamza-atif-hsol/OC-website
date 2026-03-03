"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Heart, TrendingUp, MapPin, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobs = [
  {
    id: 1,
    title: "Senior Product Manager - Compliance",
    location: "London, UK",
    type: "Full-time",
    level: "Senior",
    salary: "£120k - £150k",
    description: "Lead the development of our compliance portal and KYC solutions for enterprise clients.",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    location: "Dublin, Ireland",
    type: "Full-time",
    level: "Mid-level",
    salary: "€90k - €120k",
    description: "Build scalable solutions for fintech compliance and AML detection systems.",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    salary: "$100k - $130k",
    description: "Design intuitive interfaces for our next generation of compliance tools.",
  },
  {
    id: 4,
    title: "Compliance Consultant",
    location: "New York, USA",
    type: "Full-time",
    level: "Senior",
    salary: "$130k - $160k",
    description: "Advise clients on regulatory requirements and implementation strategies.",
  },
]

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
  { icon: TrendingUp, title: "Career Growth", description: "Clear career progression and professional development" },
  { icon: Users, title: "Great Team", description: "Work with talented professionals from around the world" },
  { icon: Briefcase, title: "Flexible Work", description: "Remote and hybrid work options available" },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-slate-950/50 to-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-6 text-balance">
          Join Our <span className="text-accent">Team</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Help us build the future of financial compliance and client lifecycle management
        </p>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join One Constellation?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <benefit.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/20 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{job.title}</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
                <span className="ml-4 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full whitespace-nowrap">
                  {job.level}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-accent" />
                  {job.salary}
                </div>
              </div>
              <Button className="mt-4 bg-accent hover:bg-accent/90 text-white">Apply Now</Button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
