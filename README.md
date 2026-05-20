# Aayush Rathod - Portfolio

A premium, recruiter-focused portfolio website for Aayush Rathod, Senior Java Backend Developer & Production Support Specialist.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Theme:** next-themes (Dark/Light mode)
- **Language:** TypeScript

## Features

- **Premium Modern Design:** Glassmorphism, gradient effects, and smooth animations.
- **Interactive Sections:** Hero with animated metrics, Skills categorized by domain, Banking Domain Expertise cards, and a Professional Timeline.
- **Fully Responsive:** Optimized for all devices from mobile to desktop.
- **Dark/Light Mode:** Seamless transition between themes.
- **SEO Optimized:** Meta tags and keywords configured for search engines.
- **Recruiter Focused:** Clear calls-to-action, downloadable resume, and direct contact links.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Instructions

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy your site.

### GitHub Pages

To deploy to GitHub Pages, you need to configure Next.js for static export:

1. Update `next.config.ts` to include `output: 'export'`:
   ```typescript
   import type { NextConfig } from "next";
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   export default nextConfig;
   ```
2. Run the build command:
   ```bash
   npm run build
   ```
3. The `out` directory will contain the static files. You can deploy this directory to GitHub Pages using the `gh-pages` branch or GitHub Actions.

## Author

**Aayush Rathod**  
Email: aayushrathod521@gmail.com  
Location: Toronto, Ontario, Canada  
LinkedIn: [View Profile](#)  
GitHub: [View GitHub](#)
