"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "base" | "card" | "raised" | "gradient" | "pattern";
  padding?: "sm" | "md" | "lg" | "xl";
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  background = "base",
  padding = "lg",
  noPadding = false,
}: SectionWrapperProps) {
  const backgrounds = {
    base: "bg-surface-base",
    card: "bg-surface-card",
    raised: "bg-surface-raised",
    gradient: "bg-gradient-to-b from-surface-base to-surface-card",
    pattern: "bg-surface-base grid-pattern",
  };

  const paddings = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
  };

  return (
    <section
      id={id}
      className={clsx(
        backgrounds[background],
        !noPadding && paddings[padding],
        "relative",
        className
      )}
    >
      <div className="container-industrial relative z-10">{children}</div>
    </section>
  );
}
