import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Industrial display font - headlines & hero (warehouse signage feel)
const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Clean body font - readable at small sizes
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Mono font - labels, prices, stats
const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Live Seller Bootcamp | Premium 3-Day Live Selling Training",
  description:
    "Master live selling on Whatnot and similar platforms. 3-day hands-on training inside a real working warehouse. Learn sourcing, live shows, business setup, and fulfilment systems.",
  keywords: [
    "live selling",
    "whatnot seller",
    "live commerce training",
    "online selling course",
    "reseller bootcamp",
    "live stream selling",
  ],
  authors: [{ name: "NKDeals" }],
  openGraph: {
    title: "Live Seller Bootcamp | Premium 3-Day Live Selling Training",
    description:
      "Master live selling with hands-on training in a real warehouse environment. Limited to 8 students per course.",
    type: "website",
    locale: "en_GB",
    siteName: "Live Seller Bootcamp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Seller Bootcamp",
    description: "Premium 3-day live selling training in a real warehouse environment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased bg-surface-base text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
