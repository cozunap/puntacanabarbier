/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#0d1f3c',
          light: '#1e3256',
          dark: '#071224',
        },
        'gold': {
          DEFAULT: '#b89a5a',
          light: '#cfb57a',
          dark: '#8f7440',
        },
        background: '#ffffff',
        'text-main': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
      },
    },
  },
  plugins: [],
}
