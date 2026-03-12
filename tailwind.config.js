/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A2B42", // Burgundy from logo
        secondary: "#FDFBF7", // Warmer off-white
        accent: "#87A04B", // Sage green from logo
        dark: "#2D1B20", // Deep burgundy-black
        "primary-light": "#A23D58",
        "accent-pale": "#E9F2D0", // Pale green from logo background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -4px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'pill': '100px',
      }
    },
  },
  plugins: [],
}
