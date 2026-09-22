/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#008CD2',
          dark: '#006FA6',
          deep: '#003A5D',
          tint: '#F0F8FF',
        },
        accent: { DEFAULT: '#56B146', dark: '#3F8A33' },
        ink: { DEFAULT: '#1A1A1A', muted: '#6B7280' },
        surface: { DEFAULT: '#F7F9FB', card: '#FFFFFF' },
        danger: '#D64545',
        warn: '#C77C1E',
      },
    },
  },
  plugins: [],
};
