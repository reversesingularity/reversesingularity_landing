/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#02020a',
        cyan:   { DEFAULT: '#00d4ff' },
        purple: { DEFAULT: '#7b2fff' },
        orange: '#ff6b35',
        green:  '#00ff88',
        amber:  '#ffa502',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
