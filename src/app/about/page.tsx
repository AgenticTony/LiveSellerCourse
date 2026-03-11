"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

// Credibility stats for the instructor
const stats = [
  {
    value: "8+",
    label: "Years of Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Live Shows",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: "50K+",
    label: "Items Sold",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    value: "100+",
    label: "Students Trained",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// Experience highlights
const experienceHighlights = [
  {
    title: "Live Selling Operation",
    description:
      "Built and scaled a live selling operation from the ground up, running multiple shows weekly across platforms like Whatnot and others.",
  },
  {
    title: "Warehouse & Fulfilment",
    description:
      "Established a fully operational warehouse with professional inventory management, packing stations, and streamlined fulfilment processes.",
  },
  {
    title: "Online Selling Background",
    description:
      "Started in traditional e-commerce before transitioning to live selling, bringing years of product sourcing and customer service expertise.",
  },
  {
    title: "Platform Expertise",
    description:
      "Deep knowledge of live selling platforms, algorithms, and best practices that drive engagement and sales during broadcasts.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden noise-overlay">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="container-industrial relative z-10 pt-32 pb-16">
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
                Your Instructor
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.9] mb-6"
            >
              MEET YOUR
              <br />
              <span className="text-brand-orange">INSTRUCTOR</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Learn from someone who has built a{" "}
              <span className="text-text-primary font-medium">real live-selling business</span> from
              the ground up. Not theory. Not guesswork. Proven systems that work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Instructor Photo & Bio Section */}
      <SectionWrapper background="card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Photo Placeholder */}
            <div className="relative aspect-[3/4] bg-surface-raised border border-surface-border overflow-hidden">
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-surface-border mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="font-mono text-text-muted text-sm uppercase tracking-wider">
                    Instructor Photo
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-l-2 border-t-2 border-brand-orange/30" />
            </div>

            {/* Floating Credibility Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-6 bg-surface-base border border-surface-border p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-lg text-text-primary">Verified Seller</div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                    Multiple Platforms
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-mono text-brand-orange text-sm uppercase tracking-widest">
              The Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-6">
              FROM ONLINE SELLER
              <br />
              <span className="text-brand-orange">TO LIVE COMMERCE</span>
            </h2>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I started in e-commerce like many others - listing products online, managing
                inventory from home, and figuring things out as I went. But when I discovered live
                selling, everything changed.
              </p>
              <p>
                Live selling wasn&apos;t just another sales channel - it was a completely different
                approach to connecting with customers. I{" "}
                <span className="text-text-primary font-medium">
                  built a live-selling operation from scratch
                </span>
                , set up a proper warehouse, and developed systems that could handle hundreds of
                orders per show.
              </p>
              <p>
                Now, I run regular live shows that consistently sell through inventory, and
                I&apos;ve trained others to do the same. This bootcamp is the culmination of
                everything I&apos;ve learned - distilled into three intensive days of hands-on
                training.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper background="base">
        <div className="text-center mb-12">
          <span className="font-mono text-brand-orange text-sm uppercase tracking-widest">
            By The Numbers
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4">
            CREDIBILITY THAT
            <span className="text-brand-orange"> COUNTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-card border border-surface-border p-6 md:p-8 text-center hover:border-brand-rust/30 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-orange">{stat.icon}</span>
              </div>
              <div className="font-display text-4xl md:text-5xl text-brand-orange mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Experience Details Section */}
      <SectionWrapper background="card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-brand-orange text-sm uppercase tracking-widest">
              Background
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4">
              EXPERIENCE THAT
              <span className="text-brand-orange"> MATTERS</span>
            </h2>
          </div>

          <div className="space-y-6">
            {experienceHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-raised/50 border border-surface-border p-6 hover:border-brand-rust/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-text-primary mb-2">{item.title}</h4>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why The Bootcamp Section */}
      <SectionWrapper background="base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-brand-orange text-sm uppercase tracking-widest">
              The Mission
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-6">
              WHY I CREATED
              <br />
              <span className="text-brand-orange">THIS BOOTCAMP</span>
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                When I started live selling, there was nowhere to learn. I made mistakes, wasted
                money, and figured things out the hard way. That&apos;s time and resources you
                shouldn&apos;t have to lose.
              </p>
              <p>
                I created this bootcamp because I believe{" "}
                <span className="text-text-primary font-medium">
                  hands-on training in a real environment
                </span>{" "}
                beats any online course or YouTube video. You need to feel what it&apos;s like to
                run a live show, handle real inventory, and use professional equipment.
              </p>
              <p>
                This isn&apos;t about getting rich quick. It&apos;s about building a sustainable
                live selling business with proper foundations. I&apos;ll show you exactly how I do
                it - the systems, the setups, the strategies that actually work.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Image Placeholder */}
            <div className="relative aspect-square bg-surface-raised border border-surface-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-surface-border mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <p className="font-mono text-text-muted text-sm uppercase tracking-wider">
                    Training Photo
                  </p>
                </div>
              </div>

              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface-base/90 to-transparent p-6">
                <p className="font-display text-lg text-text-primary italic">
                  &ldquo;Learn where the work happens.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient" padding="xl">
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
              READY TO LEARN
              <br />
              <span className="text-brand-orange">FROM EXPERIENCE?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl mb-10 max-w-xl mx-auto"
            >
              Apply now and get hands-on training in a real warehouse environment. Limited to 8
              students per course.
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/course">
                <Button variant="outline" size="lg">View Course Details</Button>
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
                <svg
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Proven Track Record</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>100+ Students Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>Real Warehouse Training</span>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
