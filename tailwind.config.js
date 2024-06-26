/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope", sans-serif'],
        urbanist: ['"Urbanist", sans-serif'],
      },
      colors: {
        primary: "#111111",
        secondary: "#747474",
      },
    },
  },
  plugins: [],
};
