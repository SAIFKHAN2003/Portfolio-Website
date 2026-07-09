# Saif Ur Rahman Khan — Portfolio

A production-grade Next.js portfolio website for Saif Ur Rahman Khan, an Electrical Engineer specializing in E-Mobility, Renewable Energy Systems, and Power Electronics.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Typography**: Instrument Serif + Inter (via next/font)
- **Deployment**: Vercel-ready (static export)

## Getting Started

### Prerequisites

- Node.js 18.18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

This project is configured for static export. Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with fonts, theme, nav
│   ├── page.tsx      # Main portfolio page
│   └── globals.css   # Design system & global styles
├── components/
│   ├── layout/       # Navbar, Footer, ThemeProvider, SmoothScroll
│   ├── sections/     # Hero, About, Skills, Projects, Experience, etc.
│   └── ui/           # Reusable components (Button, Tag, Counter, etc.)
├── data/             # Typed content data files
├── lib/              # Font configuration
└── public/           # Static assets (images, CV PDF)
```

## Design System

### Color Palette
- **Primary accent**: Electric teal (#2dd4a8)
- **Secondary**: Muted lime (#a3e635)
- **Awards**: Restrained amber (#f59e0b)
- **Dark mode base**: Deep forest green-black (#0a0f0d)
- **Light mode base**: Warm off-white (#f5f2ec)

### Typography
- **Display**: Instrument Serif — editorial serif for headings
- **Body**: Inter — clean sans-serif for content

## Content Sections

1. Hero (immersive intro with animated stats)
2. About (editorial layout with photo)
3. Marquee (keyword strip)
4. Skills (structured capability clusters)
5. Projects (flagship spotlight + grid)
6. Experience (animated timeline)
7. Education & Research (degrees + publications + awards + leadership)
8. Certifications (grid)
9. Contact (form + info)
10. Referees (academic references)

## License

© 2026 Saif Ur Rahman Khan. All rights reserved.
