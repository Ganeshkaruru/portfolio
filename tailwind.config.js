/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0B',
          surface: '#121215',
          card: '#16161A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
          primary: '#E4E4E7',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          card: '#F4F4F5',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-hover': 'rgba(0, 0, 0, 0.16)',
          primary: '#18181B',
          secondary: '#52525B',
          muted: '#71717A',
        },
        emerald: {
          glow: 'rgba(16, 185, 129, 0.15)',
          DEFAULT: '#10B981',
        },
        sky: {
          glow: 'rgba(56, 189, 248, 0.15)',
          DEFAULT: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
