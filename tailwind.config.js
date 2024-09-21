/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0A0A0A',
        'vibrant-purple': '#6C3CE8',
        'electric-blue': '#00C2FF',
        'neon-green': '#39FF14',
        'hot-pink': '#FF1493',
        'off-white': '#F5F5F5',
        'charcoal-gray': '#333333',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}