# Uber Website Clone

A modern, responsive website clone of Uber built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist design inspired by Uber's brand
- **Interactive Components**: 
  - Dynamic navigation with mobile menu
  - Tabbed interface for Ride/Drive/Eat services
  - Hover effects and smooth transitions
  - Interactive service cards
- **Multiple Sections**:
  - Hero section with service selection
  - Services overview
  - Safety information
  - Cities availability
  - Comprehensive footer

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: React 19
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd uber-website
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

Create a production build:
```bash
npm run build
```

### Start Production Server

After building, start the production server:
```bash
npm start
```

## Project Structure

```
uber-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with service tabs
│   ├── Services.tsx         # Services overview section
│   ├── Safety.tsx           # Safety information section
│   ├── Cities.tsx           # Cities availability section
│   └── Footer.tsx           # Footer with links
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies

```

## Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS custom properties:

- `--color-uber-black`: Primary black color
- `--color-uber-white`: White color
- `--color-uber-gray-*`: Various gray shades (50-900)

### Content

You can easily customize the content by editing the respective component files:

- **Services**: Edit the `services` array in `components/Services.tsx`
- **Cities**: Edit the `cities` array in `components/Cities.tsx`
- **Footer Links**: Edit the `footerLinks` object in `components/Footer.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project created for educational purposes.

## Acknowledgments

- Design inspired by [Uber](https://www.uber.com)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
