# Holdspace Waitlist

A modern, responsive waitlist landing page for Holdspace - a browser-based presentation overlay.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- Hero section with email signup
- FAQ accordion component
- **Fully responsive design** for Desktop, Tablet, and Mobile
  - Desktop (≥1024px): Full layout with sidebar watch demo button
  - Tablet (768px-1023px): Centered layout with bottom watch demo button
  - Mobile (<768px): Stacked mobile-optimized layout
- Glassmorphism effects with backdrop blur
- Custom typography (Youth, PP Mondwest, FK Grotesk, Inter)
- Interactive hover states and transitions
- Social media links in footer

## Project Structure

```
wait-list/
├── public/          # Static assets (images, SVGs)
├── src/
│   ├── components/  # React components
│   │   ├── Footer.jsx
│   │   └── FAQItem.jsx
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles with Tailwind
├── index.html       # HTML template
└── package.json     # Project dependencies
```

## Design

Design imported from Figma using Figma MCP integration.

