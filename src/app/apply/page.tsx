"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

// Form validation schema
const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").min(10, "Please enter a valid phone number"),
  experience: z.string().min(1, "Please select your experience level"),
  motivation: z.string().min(1, "Please tell us why you want to join").min(50, "Please provide at least 50 characters"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

// Placeholder dates - these would come from CMS/API in production
const bootcampDates = [
  { value: "2024-04-15", label: "April 15-17, 2024" },
  { value: "2024-05-20", label: "May 20-22, 2024" },
  { value: "2024-06-17", label: "June 17-19, 2024" },
  { value: "2024-07-22", label: "July 22-24, 2024" },
];

const experienceOptions = [
  { value: "none", label: "None - I'm just getting started" },
  { value: "some", label: "Some experience - I've sold online before" },
  { value: "experienced", label: "Experienced seller - Looking to level up" },
];

export default function ApplyPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      motivation: "",
      preferredDate: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred. Please try again.");
    }
  };

  // Success state
  if (submitStatus === "success") {
    return (
      <main className="min-h-screen bg-surface-base">
        <SectionWrapper background="pattern" padding="xl">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-surface-card border border-surface-border rounded-sm p-8 md:p-12 relative overflow-hidden"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-rust to-transparent" />

              {/* Success icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-4">
                APPLICATION SUBMITTED
              </h1>

              <p className="text-text-secondary text-lg mb-8">
                Thank you for applying to LiveSellerBootcamp! We&apos;ve received your application and will be in touch within 24-48 hours.
              </p>

              <Button variant="primary" onClick={() => setSubmitStatus("idle")}>
                Submit Another Application
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface-base">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container-industrial relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.9] mb-6"
            >
              APPLY NOW
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto"
            >
              Ready to transform your live selling skills? Fill out the application below and take the first step toward mastering the art of online sales.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <SectionWrapper background="base" padding="lg">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Form Card */}
            <div className="bg-surface-card border border-surface-border rounded-sm p-6 md:p-8 relative overflow-hidden">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-rust to-transparent" />

              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-text-primary font-medium mb-2">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName")}
                  className={`w-full bg-surface-raised border ${
                    errors.fullName ? "border-red-500" : "border-surface-border"
                  } rounded-sm px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors`}
                  placeholder="Enter your full name"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-2 text-red-500 text-sm" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email Address <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full bg-surface-raised border ${
                    errors.email ? "border-red-500" : "border-surface-border"
                  } rounded-sm px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors`}
                  placeholder="Enter your email address"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-red-500 text-sm" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-text-primary font-medium mb-2">
                  Phone Number <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className={`w-full bg-surface-raised border ${
                    errors.phone ? "border-red-500" : "border-surface-border"
                  } rounded-sm px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors`}
                  placeholder="Enter your phone number"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-red-500 text-sm" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Previous Experience */}
              <div className="mb-6">
                <label htmlFor="experience" className="block text-text-primary font-medium mb-2">
                  Previous Online Selling Experience <span className="text-brand-orange">*</span>
                </label>
                <select
                  id="experience"
                  {...register("experience")}
                  className={`w-full bg-surface-raised border ${
                    errors.experience ? "border-red-500" : "border-surface-border"
                  } rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors appearance-none cursor-pointer`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A3A3A3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.25rem",
                  }}
                  aria-invalid={errors.experience ? "true" : "false"}
                  aria-describedby={errors.experience ? "experience-error" : undefined}
                >
                  <option value="" className="bg-surface-raised text-text-muted">
                    Select your experience level
                  </option>
                  {experienceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-surface-raised text-text-primary">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.experience && (
                  <p id="experience-error" className="mt-2 text-red-500 text-sm" role="alert">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              {/* Preferred Bootcamp Date */}
              <div className="mb-6">
                <label htmlFor="preferredDate" className="block text-text-primary font-medium mb-2">
                  Preferred Bootcamp Date <span className="text-brand-orange">*</span>
                </label>
                <select
                  id="preferredDate"
                  {...register("preferredDate")}
                  className={`w-full bg-surface-raised border ${
                    errors.preferredDate ? "border-red-500" : "border-surface-border"
                  } rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors appearance-none cursor-pointer`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A3A3A3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.25rem",
                  }}
                  aria-invalid={errors.preferredDate ? "true" : "false"}
                  aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                >
                  <option value="" className="bg-surface-raised text-text-muted">
                    Select your preferred date
                  </option>
                  {bootcampDates.map((date) => (
                    <option key={date.value} value={date.value} className="bg-surface-raised text-text-primary">
                      {date.label}
                    </option>
                  ))}
                </select>
                {errors.preferredDate && (
                  <p id="preferredDate-error" className="mt-2 text-red-500 text-sm" role="alert">
                    {errors.preferredDate.message}
                  </p>
                )}
              </div>

              {/* Motivation */}
              <div className="mb-6">
                <label htmlFor="motivation" className="block text-text-primary font-medium mb-2">
                  Why do you want to join the bootcamp? <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  id="motivation"
                  {...register("motivation")}
                  rows={5}
                  className={`w-full bg-surface-raised border ${
                    errors.motivation ? "border-red-500" : "border-surface-border"
                  } rounded-sm px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none`}
                  placeholder="Tell us about your goals and what you hope to achieve..."
                  aria-invalid={errors.motivation ? "true" : "false"}
                  aria-describedby={errors.motivation ? "motivation-error" : undefined}
                />
                {errors.motivation && (
                  <p id="motivation-error" className="mt-2 text-red-500 text-sm" role="alert">
                    {errors.motivation.message}
                  </p>
                )}
              </div>

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm" role="alert">
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitStatus === "loading"}
                className="w-full"
              >
                {submitStatus === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-text-muted text-sm">
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
                <span>24-48hr Response</span>
              </div>
            </div>
          </motion.form>
        </div>
      </SectionWrapper>
    </main>
  );
}
