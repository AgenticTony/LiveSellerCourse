"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const included = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "3 Days of Training",
    description: "Intensive hands-on learning in a real warehouse environment",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Watch a Pro Live Show",
    description: "Observe an experienced seller run a full live broadcast",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Run Your Own Show",
    description: "Practice with real products and get feedback from experts",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Business Setup Guide",
    description: "VAT, Sole Trader vs Ltd, accounting basics, and more",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Fulfilment Training",
    description: "Packaging systems and order workflow best practices",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "30-Day Launch Plan",
    description: "Step-by-step roadmap to launch your live selling business",
  },
];

const launchKitItems = [
  "Premium packaging supplies",
  "Branded shipping labels",
  "Product photography backdrop",
  "Price tags & inventory labels",
  "Shipping scale",
  "Storage organisers",
];

export default function Included() {
  return (
    <SectionWrapper background="base" id="included">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-brand-orange text-sm uppercase tracking-widest"
        >
          Everything You Need
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4"
        >
          WHAT'S INCLUDED
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Included Items */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-surface-card border border-surface-border hover:border-brand-rust/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-surface-raised border border-surface-border flex items-center justify-center text-brand-orange flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Launch Kit Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="h-full bg-gradient-to-b from-brand-orange/10 to-brand-rust/5 border border-brand-orange/30 p-8">
            {/* Header */}
            <div className="mb-6">
              <Badge variant="orange" size="md">
                £500 Value
              </Badge>
              <h3 className="font-display text-2xl text-text-primary mt-4">
                LIVE SELLER
                <br />
                <span className="text-brand-orange">LAUNCH KIT</span>
              </h3>
              <p className="text-text-secondary text-sm mt-2">
                Everything you need to start selling on day one
              </p>
            </div>

            {/* Items List */}
            <ul className="space-y-3">
              {launchKitItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-5 h-5 bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative */}
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-brand-orange/5 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
