/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#7c3aed',
        'primary-purple-dark': '#5b21b6',
        'primary-purple-light': '#a78bfa',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
        'bg-dark': '#0f0a1f',
        'bg-darker': '#0a0514',
        'bg-purple': '#1e1139',
        'text-primary': '#ffffff',
        'text-secondary': '#e9d5ff',
        'text-muted': '#c4b5fd',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
        }
      },
      animation: {
        twinkle: 'twinkle 8s ease-in-out infinite',
        'twinkle-reverse': 'twinkle 12s ease-in-out infinite reverse',
      }
    },
  },
  plugins: [],
}
