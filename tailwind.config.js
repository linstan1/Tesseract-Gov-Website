/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        gov: {
          blue: '#0f766e',
          'blue-dark': '#115e59',
          'blue-light': '#14b8a6',
          dark: '#0b0c0c',
          text: '#1a1a1a',
          secondary: '#505a5f',
          'secondary-light': '#707579',
          bg: '#f8f9fa',
          'bg-alt': '#ffffff',
          border: '#d1d5db',
          'border-light': '#e5e7eb',
          focus: '#ffdd00',
          accent: '#0891b2',
        }
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 30px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(15, 118, 110, 0.15)',
      },
    },
  },
  plugins: [],
}
