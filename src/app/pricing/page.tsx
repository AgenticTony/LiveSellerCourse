"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// What's included items
const includedItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "3 Days of Training",
    description: "Intensive hands-on learning covering every aspect of live selling",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Real Warehouse Environment",
    description: "Train inside an actual working warehouse - not a classroom",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "£500 Launch Kit",
    description: "Premium supplies and equipment to start selling immediately",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Watch a Professional Show",
    description: "Observe an experienced seller run a full live broadcast",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Run Your Own Show",
    description: "Practice with real products and get expert feedback",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Business Setup Guidance",
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

// FAQ items
const faqItems = [
  {
    question: "What is the format of the bootcamp?",
    answer: "The bootcamp is an in-person, 3-day intensive training held at our warehouse in the UK. Each day runs from approximately 9am to 5pm, with hands-on activities, live demonstrations, and practical exercises. Class size is limited to 8 students maximum to ensure personalised attention.",
  },
  {
    question: "Where is the bootcamp held?",
    answer: "All bootcamps take place at our working warehouse facility in the UK. The exact location and travel recommendations are provided upon successful application. Training in a real warehouse environment is central to our philosophy - you learn where the work actually happens.",
  },
  {
    question: "What payment options are available?",
    answer: "We require a deposit to secure your spot, with the remaining balance due before the bootcamp starts. Payment plans are available - we can split the cost into 2-3 instalments. Contact us after your application to discuss payment arrangements.",
  },
  {
    question: "What's included in the £500 Launch Kit?",
    answer: "The Launch Kit includes premium packaging supplies, branded shipping labels, a product photography backdrop, price tags and inventory labels, a shipping scale, and storage organisers. Everything you need to start fulfilling orders professionally from day one.",
  },
  {
    question: "Do I need any prior experience?",
    answer: "No prior live selling experience is required. The bootcamp is designed to take you from complete beginner to confident seller. However, having a basic understanding of e-commerce concepts and being comfortable on camera will help.",
  },
  {
    question: "What platforms does the training cover?",
    answer: "While our training primarily focuses on Whatnot (the leading live selling platform in the UK), the skills you learn are transferable to other live commerce platforms including TikTok Shop, Instagram Live Shopping, and more.",
  },
  {
    question: "Is accommodation included?",
    answer: "Accommodation is not included in the bootcamp price. However, we can recommend nearby hotels and travel options upon request. Many attendees choose to stay together, which provides additional networking opportunities.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "Deposits are non-refundable but can be transferred to a future bootcamp date if you notify us at least 14 days before the start date. Full details are provided in our terms and conditions upon application.",
  },
];

// Accordion component for FAQ
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-surface-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-surface-card hover:bg-surface-raised transition-colors duration-300"
      >
        <span className="font-display text-lg text-text-primary pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-brand-orange flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-text-secondary text-sm leading-relaxed border-t border-surface-border bg-surface-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-surface-base overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-20">
          <motion.div {...fadeInUp}>
            <Badge variant="orange" size="md" className="mb-6">
              Full Course Details
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.9] mb-6"
          >
            PRICING &
            <br />
            <span className="text-brand-orange">DETAILS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            Everything you need to know about the 3-day live seller bootcamp
          </motion.p>
        </div>
      </section>

      {/* Main Pricing Card Section */}
      <SectionWrapper background="card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-orange/5 blur-3xl" />

            {/* Main Card */}
            <div className="relative bg-surface-base border border-surface-border overflow-hidden">
              {/* Top Accent */}
              <div className="h-1.5 bg-gradient-to-r from-brand-rust via-brand-orange to-brand-amber" />

              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                  {/* Left Side */}
                  <div className="flex-1">
                    <Badge variant="orange" size="md" className="mb-4">
                      Limited to 8 Students
                    </Badge>
                    <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                      3-DAY LIVE SELLER
                      <br />
                      <span className="text-brand-orange">BOOTCAMP</span>
                    </h2>
                    <p className="text-text-secondary text-lg mb-8 max-w-xl">
                      Master live selling with hands-on training in a real warehouse environment.
                      Learn sourcing, live shows, business setup, and fulfilment systems.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Duration", value: "3 Days" },
                        { label: "Class Size", value: "8 Max" },
                        { label: "Location", value: "UK Warehouse" },
                        { label: "Format", value: "In-Person" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 bg-surface-card border border-surface-border">
                          <div className="font-display text-2xl text-brand-orange mb-1">{stat.value}</div>
                          <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Price */}
                  <div className="lg:text-center lg:min-w-[280px]">
                    <div className="bg-gradient-to-b from-brand-orange/10 to-transparent border border-brand-orange/30 p-8">
                      <span className="font-mono text-text-muted text-xs uppercase tracking-widest">Per Person</span>
                      <div className="font-display text-6xl md:text-7xl text-brand-orange my-2">
                        £1,750
                      </div>
                      <p className="text-text-secondary text-sm mb-6">
                        All-inclusive training + £500 launch kit
                      </p>
                      <Link href="/apply">
                        <Button variant="primary" size="lg" className="w-full">
                          Apply Now
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What's Included Section */}
      <SectionWrapper background="base" id="included">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-orange text-sm uppercase tracking-widest"
          >
            Complete Package
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

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {includedItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 bg-surface-card border border-surface-border hover:border-brand-rust/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-surface-raised border border-surface-border flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:border-brand-orange/50 transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-xl text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Location & Format Section */}
      <SectionWrapper background="card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-surface-base border border-surface-border p-8 h-full">
                <div className="w-16 h-16 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-text-primary mb-4">LOCATION</h3>
                <p className="text-text-secondary mb-6">
                  The bootcamp is held at our working warehouse facility in the United Kingdom.
                  Train in a real environment with actual equipment and products.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full warehouse access during training</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Travel recommendations provided</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hotel suggestions available on request</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Format */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-surface-base border border-surface-border p-8 h-full">
                <div className="w-16 h-16 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-text-primary mb-4">FORMAT</h3>
                <p className="text-text-secondary mb-6">
                  In-person training with a maximum of 8 students per session. Small class sizes
                  ensure you get personalised feedback and hands-on experience.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>9am - 5pm daily schedule</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hands-on practical exercises</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-on-1 feedback sessions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Payment Options Section */}
      <SectionWrapper background="base">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-orange text-sm uppercase tracking-widest"
          >
            Flexible Payment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-6"
          >
            PAYMENT OPTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg mb-10"
          >
            We offer flexible payment options to make the bootcamp accessible
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Deposit",
                description: "Secure your spot with a deposit",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Payment Plans",
                description: "Split into 2-3 instalments",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
              },
              {
                title: "Full Payment",
                description: "Pay in full before the bootcamp",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((option) => (
              <div
                key={option.title}
                className="bg-surface-card border border-surface-border p-6 hover:border-brand-rust/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-surface-raised border border-surface-border flex items-center justify-center text-brand-orange mx-auto mb-4">
                  {option.icon}
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">{option.title}</h3>
                <p className="text-text-secondary text-sm">{option.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-text-muted text-sm mt-8"
          >
            Contact us after your application to discuss payment arrangements
          </motion.p>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper background="card" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-brand-orange text-sm uppercase tracking-widest"
            >
              Got Questions?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl text-text-primary mt-4"
            >
              FAQ
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Terms & Conditions Summary Section */}
      <SectionWrapper background="base" id="terms">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-brand-orange text-sm uppercase tracking-widest"
            >
              Please Read
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl text-text-primary mt-4"
            >
              TERMS & CONDITIONS
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-card border border-surface-border p-8"
          >
            <ul className="space-y-4">
              {[
                "Non-refundable deposit required to secure your spot",
                "Full payment due 14 days before bootcamp start date",
                "Payment plans available on request (2-3 instalments)",
                "Transfer to a future date possible with 14+ days notice",
                "Minimum 4 students required for course to run",
                "Full terms provided upon application approval",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-surface-raised border border-surface-border flex items-center justify-center text-brand-orange flex-shrink-0 mt-0.5">
                    <span className="font-mono text-xs">{index + 1}</span>
                  </div>
                  <p className="text-text-secondary">{item}</p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-surface-border">
              <p className="text-text-muted text-sm">
                By submitting your application, you agree to abide by all course policies and guidelines.
                Full terms and conditions will be provided upon application.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[0.9] mb-6"
            >
              READY TO
              <br />
              <span className="text-brand-orange">GET STARTED?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl mb-10 max-w-xl mx-auto"
            >
              Secure your spot in the next bootcamp. Limited to 8 students per session.
            </motion.p>

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
              <Link href="/#dates">
                <Button variant="outline" size="lg">
                  View Dates
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
    </main>
  );
}
