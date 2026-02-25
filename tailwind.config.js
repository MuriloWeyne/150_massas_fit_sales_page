/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#AD4D32',
        olive: '#6A6B3F',
      }
    },
  },
  plugins: [],
}
