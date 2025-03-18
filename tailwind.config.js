/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#f1f5f9',
        secondary: '#64748b',
        dark: '#0f172a',
        creamy: '#fef7e4',
        pinky: '#fee2e2',
        greeny: '#7da640',
        footer: '#1f2937'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

