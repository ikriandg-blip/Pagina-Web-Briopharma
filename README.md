# Natural Shop Colombia

A modern, responsive ecommerce website for Natural Shop, a natural health and wellness store in Colombia. Built with TanStack Start and Tailwind CSS v4.

## Features

- Hero section with promotional banner
- Product catalog with 6 categories: Vitaminas, Suplementos, Control de Peso, Medicina Natural, Nutrición Deportiva, Cuidado Personal
- Product cards with WhatsApp inquiry button
- Featured products section
- Promotions section with monthly deals
- Customer testimonials
- Store locations (Cra 27 & Acrópolis)
- Contact section
- Floating WhatsApp button
- SEO optimized (meta tags, Open Graph, structured data)
- Green and white color palette

## Tech Stack

- **Framework**: TanStack Start (React + Vite)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000).

## Configuration

Update the WhatsApp number in `src/components/WhatsApp.tsx`:

```ts
const WHATSAPP_NUMBER = '573001234567' // Replace with real number
```

## Deployment

Deployments are handled automatically via Netlify. Push to main to trigger a build.
