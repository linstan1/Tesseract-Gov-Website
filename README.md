# Tesseract Academy | Government Gateway

A modern, accessible website for Tesseract Academy's public sector delivery services. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Features

- 🎨 Modern, refined design with smooth animations
- 📱 Fully responsive across all devices
- ♿ WCAG 2.1 AA accessibility compliant
- ⚡ Lightning-fast with Vite
- 🎭 Professional typography (Instrument Serif + Public Sans)
- 💫 Polished interactions and micro-animations

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icon system

## Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/linstan1/Tesseract-Gov-Website.git
   cd Tesseract-Gov-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000` (or another port if 3000 is in use)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
Tesseract-Gov-Website/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (Button, Card)
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProcurementShortcuts.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Capabilities.tsx
│   ├── HowToBuy.tsx
│   ├── UseCases.tsx
│   ├── Research.tsx
│   ├── Partnerships.tsx
│   └── Compliance.tsx
├── App.tsx              # Main app component with routing
├── index.tsx            # Entry point
├── styles.css           # Global styles and Tailwind config
├── tailwind.config.js   # Tailwind configuration
└── vite.config.ts       # Vite configuration
```

## Design System

### Colors
- **Primary**: Teal (`#0f766e`)
- **Text**: Dark gray (`#1a1a1a`)
- **Secondary**: Medium gray (`#505a5f`)
- **Background**: Light gray (`#f8f9fa`)

### Typography
- **Headings**: Instrument Serif
- **Body**: Public Sans

### Animations
- Entrance animations on hero sections
- Smooth hover effects on cards and buttons
- Staggered animations for visual hierarchy

## Contributing

This is a private repository for Tesseract Academy. For internal contributions, please follow the standard Git workflow:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

© 2026 Tesseract Academy. All rights reserved.
