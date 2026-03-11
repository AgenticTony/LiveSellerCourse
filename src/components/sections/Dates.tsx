"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

// Placeholder dates - these would come from Sanity CMS in production
const bootcamps = [
  {
    id: 1,
    startDate: "2026-04-15",
    endDate: "2026-04-17",
    spotsRemaining: 5,
    isOpen: true,
  },
  {
    id: 2,
    startDate: "2026-05-13",
    endDate: "2026-05-15",
    spotsRemaining: 8,
    isOpen: true,
  },
  {
    id: 3,
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    spotsRemaining: 8,
    isOpen: true,
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

function formatMonth(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export default function Dates() {
  return (
    <SectionWrapper background="base" id="dates">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-brand-orange text-sm uppercase tracking-widest"
        >
          Upcoming Sessions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4"
        >
          BOOTCAMP DATES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg mt-4"
        >
          Limited to 8 students per course. Secure your spot early.
        </motion.p>
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {bootcamps.map((bootcamp, index) => (
          <motion.div
            key={bootcamp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-surface-card border border-surface-border hover:border-brand-rust/50 transition-all duration-300"
          >
            {/* Month Header */}
            <div className="bg-surface-raised px-6 py-3 border-b border-surface-border">
              <span className="font-mono text-brand-orange text-xs uppercase tracking-widest">
                {formatMonth(bootcamp.startDate)}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Dates */}
              <div className="font-display text-3xl text-text-primary mb-4">
                {formatDate(bootcamp.startDate)} — {formatDate(bootcamp.endDate)}
              </div>

              {/* Spots */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-text-secondary text-sm">Spots Remaining</span>
                <Badge
                  variant={bootcamp.spotsRemaining <= 3 ? "warning" : "success"}
                  size="sm"
                >
                  {bootcamp.spotsRemaining} / 8
                </Badge>
              </div>

              {/* CTA */}
              <Link href="/apply">
                <Button
                  variant={bootcamp.spotsRemaining <= 3 ? "primary" : "secondary"}
                  size="sm"
                  className="w-full"
                >
                  {bootcamp.spotsRemaining <= 3 ? "Secure Spot" : "Apply Now"}
                </Button>
              </Link>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-text-muted text-sm"
      >
        Can&apos;t find a date that works?{" "}
        <Link href="/apply" className="text-brand-orange hover:text-brand-amber transition-colors">
          Contact us
        </Link>{" "}
        for future dates.
      </motion.p>
    </SectionWrapper>
  );
}
