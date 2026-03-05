/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E2B770",   // KIIN gold
        softbg: "#F2F2F3",    // website background
        darktext: "#1F2937",
      },
    },
  },
  plugins: [],
};