/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1a1a',
        'primary-light': '#f5f7fa',
        'accent-green': '#32d74b',
      },
      fontFamily: {
        'youth': ['Youth', 'sans-serif'],
        'mondwest': ['PP Mondwest', 'sans-serif'],
        'grotesk': ['FK Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '23.462px',
      },
    },
  },
  plugins: [],
}

