/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            100: "#65E9E4",
            200: "#31C3BD",
            300: "#1F3641",
            400: "#1A2A33",
            500: "#151F26",
            600: "#10161A",
            700: "#0B0F0F",
          },
          yellow: {
            100: "#FFC860",
            200: "#F2B137",
          },
          white: {
            100: "#DBE8ED",
            200: "#A8BFC9",
            300: "#7586A5",
            400: "#425D81",
            500: "#0F345D",
          },
        },
      },
    },
  },
  plugins: [],
};
