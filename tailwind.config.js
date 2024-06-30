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
        sourcecodepro: ['"Source Code Pro", monospace']
      },
      colors: {
        primary: "#2ED3B7",
        color1: "rgb(255 255 255 / 50%)",
        color2: "#7D8595",
        color3: "#A5A5A6",
        color4: "#777879",
        color5: "#4A4B4D",
        color6: "#D2D2D2",
        color7: "#FFFFFFCC",
        color8: "#99F6E0",
        bg1: "#18181a",
        bg2: "#101212",
        bg3: "#1c1e20",
        bg4: "#17181A",
        bg5: "#111213",
        bg6: "#191919",
        bg7: "#FFFFFF0F",
        bg8: "#1D1E20",
        bg9: "#0d0d0d",
        line1: "#FFFFFF1A",
        line2: "#2C2D30",
      },
    },
  },
  plugins: [],
};
