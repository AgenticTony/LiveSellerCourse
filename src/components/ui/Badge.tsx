"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
  variant?: "default" | "orange" | "success" | "warning";
  size?: "sm" | "md";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function Badge({
  variant = "default",
  size = "md",
  children,
  className,
  icon,
}: BadgeProps) {
  const baseStyles = `
    inline-flex items-center gap-1.5
    font-mono font-medium uppercase tracking-wider
    border
  `;

  const variants = {
    default: `
      bg-surface-raised text-text-secondary border-surface-border
    `,
    orange: `
      bg-brand-orange/10 text-brand-orange border-brand-orange/30
    `,
    success: `
      bg-emerald-500/10 text-emerald-400 border-emerald-500/30
    `,
    warning: `
      bg-amber-500/10 text-amber-400 border-amber-500/30
    `,
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span className={clsx(baseStyles, variants[variant], sizes[size], className)}>
      {icon && <span className="w-3 h-3">{icon}</span>}
      {children}
    </span>
  );
}
