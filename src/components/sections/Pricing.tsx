"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Pricing() {
  return (
    <SectionWrapper background="card" id="pricing">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-orange text-sm uppercase tracking-widest"
          >
            Investment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4"
          >
            BOOTCAMP PRICE
          </motion.h2>
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-brand-orange/5 blur-3xl" />

          {/* Card */}
          <div className="relative bg-surface-base border border-surface-border overflow-hidden">
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-brand-orange via-brand-amber to-brand-rust" />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* Left Side */}
                <div>
                  <Badge variant="orange" size="md" className="mb-4">
                    Limited to 8 Students
                  </Badge>
                  <h3 className="font-display text-2xl text-text-primary mb-2">
                    3-DAY LIVE SELLER BOOTCAMP
                  </h3>
                  <p className="text-text-secondary">
                    Full access to warehouse training, equipment, and launch kit
                  </p>
                </div>

                {/* Right Side - Price */}
                <div className="text-center md:text-right">
                  <div className="font-display text-5xl md:text-6xl text-brand-orange">
                    £1,750
                  </div>
                  <p className="font-mono text-text-muted text-xs uppercase tracking-wider mt-2">
                    Per Person
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-surface-border my-8" />

              {/* What's Included Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  "3 Days Training",
                  "£500 Launch Kit",
                  "Real Warehouse",
                  "8 Students Max",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/apply">
                  <Button variant="primary" size="lg">
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="ghost" size="lg">
                    View Full Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted text-sm mt-6"
        >
          Payment plans available. Deposit required to secure your spot.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
