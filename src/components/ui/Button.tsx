"use client";

import { clsx } from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-display text-lg tracking-wider uppercase
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  const variants = {
    primary: `
      bg-brand-orange text-surface-base
      hover:bg-brand-amber hover:shadow-lg hover:shadow-brand-orange/25
      active:scale-[0.98]
      before:absolute before:inset-0 before:bg-white/20 before:translate-y-full before:transition-transform
      hover:before:translate-y-0
    `,
    secondary: `
      bg-surface-raised text-text-primary border border-surface-border
      hover:border-brand-rust hover:bg-surface-card
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-brand-orange border-2 border-brand-orange
      hover:bg-brand-orange hover:text-surface-base
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-text-secondary
      hover:text-text-primary hover:bg-surface-raised
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-12",
    lg: "px-10 py-5 text-xl h-16",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="w-5 h-5">{icon}</span>
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="w-5 h-5">{icon}</span>
      )}
    </button>
  );
}
