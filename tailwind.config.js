/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
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
          bg: '#fafafa',
          'bg-alt': '#ffffff',
          border: '#e5e7eb',
          'border-light': '#f3f4f6',
          focus: '#ffdd00',
          accent: '#0891b2',
        }
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
