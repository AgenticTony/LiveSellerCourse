# LiveSellerBootcamp

A premium 3-day live selling training course website with a dark industrial aesthetic. Built for NKDeals Live Seller Bootcamp.

## Overview

LiveSellerBootcamp.co.uk is a high-converting website for an in-person live selling training course. The site features a dark industrial design with bold typography, designed to feel like warehouse signage.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom industrial theme
- **Animations:** Framer Motion
- **Forms:** react-hook-form + Zod validation
- **CMS:** Sanity.io (configured)
- **Email:** Resend (configured)
- **Fonts:** Bebas Neue (display), DM Sans (body), DM Mono (labels)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, What You Learn, Bootcamp Overview, Warehouse, Included, Pricing, Dates, CTA |
| Course | `/course` | Detailed 3-day curriculum breakdown |
| About | `/about` | Instructor bio, experience, credibility |
| Pricing | `/pricing` | Price (£1,750), what's included, FAQ, terms |
| Apply | `/apply` | Application form with validation |

## Course Details

- **Duration:** 3 days
- **Price:** £1,750
- **Class Size:** Maximum 8 students
- **Location:** UK Warehouse (in-person)
- **Included:** £500 Live Seller Launch Kit

### Day 1: Foundations
- Live selling business model
- Sourcing inventory
- Business setup (Sole Trader vs Ltd)
- VAT basics
- Pricing strategies

### Day 2: Live Selling Mastery
- Professional studio setup
- Running a live show
- Auction psychology
- Watch a professional show

### Day 3: Launch & Scale
- Packaging systems
- Order fulfilment workflow
- Customer retention
- 30-day launch plan
- Run your own live show

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| brand-orange | `#D97706` | Primary accent, CTAs |
| brand-amber | `#F59E0B` | Hover states |
| brand-rust | `#9A3412` | Secondary accent |
| surface-base | `#0A0A0A` | Background |
| surface-card | `#141414` | Cards |
| surface-raised | `#1A1A1A` | Elevated elements |
| text-primary | `#F5F5F5` | Headings |
| text-secondary | `#A3A3A3` | Body text |

### Typography

- **Display:** Bebas Neue - Headlines, large text
- **Body:** DM Sans - Paragraphs, descriptions
- **Mono:** DM Mono - Labels, timestamps, metadata

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AgenticTony/LiveSellerCourse.git

# Navigate to project
cd LiveSellerCourse/livesellerbootcamp

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Resend Email
RESEND_API_KEY=your_resend_key
```

## Project Structure

```
livesellerbootcamp/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── apply/            # Apply page + API
│   │   ├── course/           # Course curriculum
│   │   ├── about/            # Instructor bio
│   │   └── pricing/          # Pricing & FAQ
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Reusable components
│   └── lib/
│       └── sanity.ts         # Sanity client
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## CMS Setup (Sanity)

1. Create a project at [sanity.io](https://sanity.io)
2. Add your project ID to `.env.local`
3. Create schemas for:
   - Bootcamp dates
   - Testimonials
   - Instructor details
   - Pricing content

## Email Setup (Resend)

1. Create account at [resend.com](https://resend.com)
2. Generate API key
3. Add to `.env.local`
4. Applications will be sent to your configured email

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Bootcamp Dates

Edit `src/app/apply/page.tsx`:

```typescript
const bootcampDates = [
  { value: "2024-04-15", label: "April 15-17, 2024" },
  // Add more dates...
];
```

### Update Pricing

Edit `src/app/pricing/page.tsx` and `src/components/sections/Pricing.tsx`

### Add Instructor Photos

Replace placeholder images in:
- `src/app/about/page.tsx`

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details.

## Contact

- GitHub: [@AgenticTony](https://github.com/AgenticTony)

---

Built with Next.js, Tailwind CSS, and Framer Motion.
