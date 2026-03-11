"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const days = [
  {
    day: "01",
    title: "Foundations",
    subtitle: "Build Your Business Base",
    color: "from-brand-orange to-brand-amber",
    topics: [
      "Live selling business model deep-dive",
      "Inventory sourcing strategies",
      "Business setup: Sole Trader vs Ltd",
      "VAT basics and when to register",
      "Pricing strategies for profit",
    ],
  },
  {
    day: "02",
    title: "Live Mastery",
    subtitle: "Command the Camera",
    color: "from-brand-amber to-brand-rust",
    topics: [
      "Professional studio setup",
      "Running a compelling live show",
      "Auction psychology & engagement",
      "Watch a professional live show",
      "Q&A with experienced sellers",
    ],
  },
  {
    day: "03",
    title: "Launch & Scale",
    subtitle: "Systems for Growth",
    color: "from-brand-rust to-brand-orange",
    topics: [
      "Packaging systems & workflow",
      "Order fulfilment mastery",
      "Customer retention strategies",
      "Create your 30-day launch plan",
      "Run your own live show",
    ],
  },
];

export default function BootcampOverview() {
  return (
    <SectionWrapper background="base" id="overview">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-brand-orange text-sm uppercase tracking-widest"
        >
          3-Day Programme
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4"
        >
          THE BOOTCAMP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mt-4"
        >
          A structured journey from complete beginner to confident live seller
        </motion.p>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {days.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative h-full bg-surface-card border border-surface-border overflow-hidden hover:border-brand-rust/50 transition-all duration-500">
              {/* Gradient Top Border */}
              <div className={`h-1 bg-gradient-to-r ${day.color}`} />

              {/* Content */}
              <div className="p-8">
                {/* Day Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-6xl text-surface-raised group-hover:text-brand-orange/20 transition-colors duration-300">
                    {day.day}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-text-primary group-hover:text-brand-orange transition-colors">
                      {day.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      {day.subtitle}
                    </p>
                  </div>
                </div>

                {/* Topics */}
                <ul className="space-y-3">
                  {day.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-text-secondary">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/course">
          <Button variant="secondary" size="lg">
            View Full Curriculum
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
