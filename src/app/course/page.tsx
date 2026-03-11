"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const curriculum = [
  {
    day: "01",
    title: "Foundations",
    subtitle: "Build Your Business Base",
    description: "Establish the fundamental knowledge and systems needed to launch a successful live selling business. Day one focuses on building a solid foundation for your live selling business.",
    duration: "6 Hours",
    color: "from-brand-orange to-brand-amber",
    topics: [
      {
        title: "Live Selling Business Model",
        description: "Understanding the complete ecosystem of live selling platforms, revenue streams, business opportunities, and how to build a sustainable income through live selling.",
        time: "90 min",
      },
      {
        title: "Sourcing Inventory",
        description: "Learn proven methods for finding profitable inventory at the right prices. Including wholesale, liquidation, personal sourcing, building supplier relationships, and quality control.",
        time: "60 min",
      },
      {
        title: "Business Setup",
        description: "Compare business structures (Sole Trader vs Ltd), understand which is right for your situation, register your business, open business bank accounts, and insurance requirements.",
        time: "45 min",
      },
      {
        title: "VAT Basics",
        description: "Understand VAT thresholds, when to register, how to charge VAT, and simple record-keeping systems for your live selling business.",
        time: "45 min",
      },
      {
        title: "Pricing Strategies for Profit",
        description: "Master the art of pricing your items for maximum profit. Learn to calculate true costs, set reserve prices, understand auction psychology, and maximize margins.",
        time: "60 min",
      },
    ],
  },
  {
    day: "02",
    title: "Live Selling Mastery",
    subtitle: "Command the Camera",
    description: "Master the technical and psychological skills needed to run engaging, profitable live shows that convert viewers into buyers. Day two is all about mastering the art of live selling.",
    duration: "7 Hours",
    color: "from-brand-amber to-brand-rust",
    topics: [
      {
        title: "Professional Studio Setup",
        description: "Learn how to create an effective streaming environment with proper lighting, camera positioning, audio setup, backdrop design, and creating an engaging visual environment.",
        time: "90 min",
      },
      {
        title: "Running a Live Show",
        description: "Discover the secrets to hosting engaging live shows that keep viewers watching and buying. Learn show structure, pacing, product presentation, and managing comments and bids.",
        time: "90 min",
      },
      {
        title: "Auction Psychology",
        description: "Understand the psychological triggers that drive bidding behaviour. Learn techniques to create urgency, build excitement, handle reserve prices, and maximize engagement.",
        time: "60 min",
      },
      {
        title: "Watch a Professional Show",
        description: "Observe an experienced seller run a real live show. See the techniques you've learned put into practice and take notes on what makes a successful live stream.",
        time: "120 min",
      },
      {
        title: "Q&A with Experienced Sellers",
        description: "Get your questions answered by sellers who have built successful live selling businesses. Open discussion with real-world insights and practical advice.",
        time: "60 min",
      },
    ],
  },
  {
    day: "03",
    title: "Launch & Scale",
    subtitle: "Systems for Growth",
    description: "Implement the operational systems and strategies needed to fulfil orders efficiently and scale your business sustainably. By the end of day three, you will run your own live show.",
    duration: "6 Hours",
    color: "from-brand-rust to-brand-orange",
    topics: [
      {
        title: "Packaging Systems & Workflow",
        description: "Learn efficient packaging techniques and create systems that scale. Setting up an efficient packing station, choosing the right materials, branding your packages.",
        time: "60 min",
      },
      {
        title: "Order Fulfilment Mastery",
        description: "Master the complete fulfilment process. Processing orders quickly, choosing shipping partners, tracking systems, handling returns, and customer communication.",
        time: "60 min",
      },
      {
        title: "Customer Retention Strategies",
        description: "Build a loyal customer base with proven strategies for repeat business. Follow-up systems, handling complaints, and turning one-time buyers into repeat customers.",
        time: "45 min",
      },
      {
        title: "Create Your 30-Day Launch Plan",
        description: "Develop a concrete action plan for your first 30 days after the bootcamp. Clear milestones, targets, and accountability measures to guide your launch.",
        time: "90 min",
      },
      {
        title: "Run Your Own Live Show",
        description: "Put everything into practice by running your own live show with guidance and feedback from instructors. The ultimate hands-on learning experience.",
        time: "120 min",
      },
    ],
  },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden noise-overlay">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="container-industrial relative z-10 pt-32 pb-20">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-muted hover:text-brand-orange transition-colors group"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-mono text-sm uppercase tracking-wider">Back to Home</span>
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge variant="orange" size="md">
                Comprehensive Training
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.9] mb-6"
            >
              3-DAY
              <br />
              <span className="text-brand-orange">CURRICULUM</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              A detailed breakdown of everything you&apos;ll learn over three intensive days of hands-on training.
              From complete beginner to confident live seller.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 text-text-secondary"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>19+ Hours of Training</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>15 Core Topics</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Hands-On Practice</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Day Sections */}
      {curriculum.map((day, dayIndex) => (
        <SectionWrapper
          key={day.day}
          background={dayIndex % 2 === 0 ? "card" : "base"}
          id={`day-${day.day}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Day Header */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10">
                {/* Day Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <span className="font-display text-[120px] md:text-[160px] lg:text-[200px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-orange/20 to-transparent">
                      {day.day}
                    </span>
                    <span className="absolute top-2 left-0 font-mono text-xs text-brand-orange uppercase tracking-widest">
                      Day {parseInt(day.day)}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-grow pb-4 lg:pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-1 w-16 bg-gradient-to-r ${day.color}`} />
                    <Badge variant="orange" size="sm">
                      {day.duration}
                    </Badge>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-3">
                    {day.title}
                  </h2>
                  <p className="font-mono text-sm text-brand-orange uppercase tracking-wider mb-4">
                    {day.subtitle}
                  </p>
                  <p className="text-text-secondary text-lg max-w-2xl">
                    {day.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {day.topics.map((topic, topicIndex) => (
                <motion.div
                  key={topicIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: topicIndex * 0.1 }}
                  className="group relative bg-surface-base/50 border border-surface-border p-6 hover:border-brand-rust/50 transition-all duration-300"
                >
                  {/* Topic Number */}
                  <div className="absolute top-4 right-4 font-mono text-xs text-text-muted">
                    {String(topicIndex + 1).padStart(2, "0")}
                  </div>

                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-brand-orange/10 border border-brand-orange/30 mb-4">
                    <svg className="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-mono text-[10px] text-brand-orange uppercase tracking-wider">
                      {topic.time}
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h3 className="font-display text-xl text-text-primary mb-2 group-hover:text-brand-orange transition-colors">
                    {topic.title}
                  </h3>

                  {/* Topic Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Day Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-surface-raised/50 border border-surface-border"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{day.topics.length} Topics</span>
                </div>
                <div className="w-px h-4 bg-surface-border" />
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{day.duration}</span>
                </div>
              </div>
              {dayIndex < curriculum.length - 1 && (
                <Link
                  href={`#day-${curriculum[dayIndex + 1].day}`}
                  className="flex items-center gap-2 text-brand-orange hover:text-brand-amber transition-colors text-sm"
                >
                  <span>Next: {curriculum[dayIndex + 1].title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </SectionWrapper>
      ))}

      {/* What You'll Walk Away With */}
      <SectionWrapper background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-orange text-sm uppercase tracking-widest"
          >
            By The End Of Day 3
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4 mb-8"
          >
            YOU&apos;LL BE READY TO LAUNCH
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Business Set Up",
                description: "Your business registered, VAT understood, and ready to trade legally.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Live Show Skills",
                description: "Confidence to run engaging live shows that convert viewers to buyers.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "30-Day Plan",
                description: "A clear roadmap with milestones to guide your first month of selling.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 bg-surface-card border border-surface-border hover:border-brand-rust/50 transition-all duration-300"
              >
                <div className="text-brand-orange mb-4">{item.icon}</div>
                <h3 className="font-display text-xl text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper background="base" padding="xl">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[0.9] mb-6"
            >
              READY TO
              <br />
              <span className="text-brand-orange">GET STARTED?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl mb-10 max-w-xl mx-auto"
            >
              Apply now to secure your spot in our next bootcamp. Limited to 8 students per cohort for maximum hands-on learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/apply">
                <Button variant="primary" size="lg">
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-text-muted text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secure Application</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>8 Students Max</span>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
