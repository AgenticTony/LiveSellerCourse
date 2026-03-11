import Link from "next/link";

const footerLinks = {
  pages: [
    { name: "Course", href: "/course" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Apply", href: "/apply" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-card border-t border-surface-border">
      <div className="container-industrial">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-orange flex items-center justify-center">
                <span className="font-display text-surface-base text-2xl">LS</span>
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-text-primary block">
                  LIVE SELLER
                </span>
                <span className="font-display text-2xl tracking-wider text-brand-orange block -mt-1">
                  BOOTCAMP
                </span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              Premium 3-day hands-on training inside a real working warehouse.
              Learn to sell successfully on live selling platforms like Whatnot.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-text-muted text-xs font-mono">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg text-text-primary tracking-wider mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-text-primary tracking-wider mb-4">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@livesellerbootcamp.co.uk"
                  className="text-text-secondary text-sm hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@livesellerbootcamp.co.uk
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 text-brand-orange text-sm font-display tracking-wider hover:text-brand-amber transition-colors"
                >
                  APPLY FOR BOOTCAMP
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {currentYear} NKDeals Live Seller Bootcamp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-muted text-xs hover:text-text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
