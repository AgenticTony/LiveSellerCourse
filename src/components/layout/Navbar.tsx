"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Course", href: "/course" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface-base/95 backdrop-blur-md border-b border-surface-border"
          : "bg-transparent"
      )}
    >
      <nav className="container-industrial">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
              <span className="font-display text-surface-base text-xl">LS</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl tracking-wider text-text-primary group-hover:text-brand-orange transition-colors">
                LIVE SELLER
              </span>
              <span className="font-display text-xl tracking-wider text-brand-orange block -mt-1">
                BOOTCAMP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors animated-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/apply">
              <Button variant="primary" size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-80 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-surface-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-text-secondary hover:text-text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" size="sm" className="w-full mt-2">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
