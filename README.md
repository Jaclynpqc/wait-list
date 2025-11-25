# Holdspace Waitlist

A modern, responsive waitlist landing page for Holdspace - a browser-based presentation tool.

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

- **Hero section** with "AI stage for presenters" headline
- **Email waitlist signup** with Google Sheets integration
- **Video placeholder** section with play button
- **"Present Smarter in 3 steps"** section with numbered cards
- **FAQ accordion** component with expand/collapse
- **Interactive dither background** using React Three Fiber
- **Fully responsive design** for Desktop, Tablet, and Mobile
  - Desktop (≥1024px): Full layout with wide sections
  - Tablet (768px-1023px): Adapted layout with proper scaling
  - Mobile (<768px): Stacked mobile-optimized layout
- Custom typography (Youth, PP Mondwest, FK Grotesk, Inter)
- Interactive hover states and transitions
- Social media links in footer

## Google Sheets Integration

This project includes email collection via Google Sheets. To set it up:

1. **Follow the setup guide**: See `GOOGLE_SHEETS_SETUP.md` for detailed instructions
2. **Quick setup**:
   - Create a Google Sheet
   - Deploy the `google-apps-script.js` as a Web App
   - Add the Web App URL to `.env` file
   - Restart your dev server

All email submissions will be automatically saved to your Google Sheet!

## Project Structure

```
wait-list/
├── public/                    # Static assets (images, SVGs)
│   ├── holdspace-logo.svg
│   └── ... (other assets)
├── src/
│   ├── components/            # React components
│   │   ├── Header.jsx        # Fixed header with logo & beta badge
│   │   ├── Footer.jsx        # Footer with social links
│   │   ├── FAQItem.jsx       # Expandable FAQ component
│   │   └── Dither.jsx        # Interactive dither background
│   ├── utils/
│   │   └── submitEmail.js    # Google Sheets integration
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── .env                       # Environment variables (Google Sheets URL)
├── google-apps-script.js      # Script for Google Sheets backend
├── GOOGLE_SHEETS_SETUP.md    # Setup instructions
├── index.html                # HTML template
└── package.json              # Project dependencies
```

## Design

Design imported from Figma using Figma MCP integration.

