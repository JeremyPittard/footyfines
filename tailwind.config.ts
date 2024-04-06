/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        warriors: {
          default: "#677bca",
          50: "#f3f5fb",
          100: "#e3e8f6",
          200: "#ced7ef",
          300: "#acbce4",
          400: "#849ad6",
          500: "#677bca",
          600: "#5361bd",
          700: "#4951ac",
          800: "#3e4289",
          900: "#373b71",
          950: "#252746",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
