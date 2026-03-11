"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const stats = [
  { value: "3", label: "Days to Launch" },
  { value: "8", label: "Spots Only" },
  { value: "£500", label: "Inventory Included" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden noise-overlay">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Main Content - Centered */}
      <div className="container-industrial relative z-10 flex-1 flex flex-col justify-center pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Badge variant="orange" size="md">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              8 Spots. Real Warehouse. Zero Fluff.
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.9] mb-6"
          >
            STOP WATCHING.
            <br />
            <span className="text-brand-orange">START SELLING.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            3 days inside a{" "}
            <span className="text-text-primary font-medium">real warehouse</span>.
            You&apos;ll source inventory, run a live show, and walk out with{" "}
            <span className="text-text-primary font-medium">£500 worth of stock</span> —
            ready to sell. No theory. Real practice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/apply" className="whitespace-nowrap">
              <Button variant="primary" size="lg">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="whitespace-nowrap">Claim Your Spot</span>
              </Button>
            </Link>
            <Link href="/course">
              <Button variant="outline" size="lg">
                See the Curriculum
              </Button>
            </Link>
          </motion.div>

          {/* Stats - Compact row under buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-8 md:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-brand-orange">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-surface-border rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-orange rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
