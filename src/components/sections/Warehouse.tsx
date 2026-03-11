"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const features = [
  {
    title: "Real Working Environment",
    description: "Train inside an actual live-selling warehouse, not a classroom",
  },
  {
    title: "Professional Equipment",
    description: "Use industry-standard lighting, cameras, and streaming setups",
  },
  {
    title: "Live Practice Sessions",
    description: "Run real shows with actual products during your training",
  },
  {
    title: "Expert Guidance",
    description: "Learn from sellers with thousands of successful live shows",
  },
];

export default function Warehouse() {
  return (
    <SectionWrapper background="card" id="warehouse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Image Placeholder */}
          <div className="relative aspect-[4/3] bg-surface-raised border border-surface-border overflow-hidden">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-surface-border mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-mono text-text-muted text-sm uppercase tracking-wider">
                  Warehouse Photo
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4">
              <Badge variant="orange">Live Environment</Badge>
            </div>
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 lg:right-6 bg-surface-base border border-surface-border p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="font-display text-2xl text-text-primary">Real</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Warehouse</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="font-mono text-brand-orange text-sm uppercase tracking-widest">
            The Difference
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-6">
            TRAIN IN A REAL
            <br />
            <span className="text-brand-orange">WAREHOUSE</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            This isn&apos;t theory in a conference room. You&apos;ll learn inside a{" "}
            <span className="text-text-primary font-medium">working live-selling operation</span>,
            surrounded by real inventory, professional equipment, and experienced sellers.
          </p>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-surface-raised/50 border border-surface-border hover:border-brand-rust/30 transition-colors"
              >
                <div className="w-8 h-8 bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-text-primary">{feature.title}</h4>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
