/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: {
          500: "#7D6064",
          400: "#FADEED",
        },
        dark: {
          400: "#453C3C",
          100: '#333333AD'
        },
        green: {
          700: "#7A9A40",
          800: "#85CA40",
          200: "#DBE0D233",

        },
        gray: {
          800: "#C8C8C8",
          100: "#F0F0F1",
          900: "#9A9699",
        },
        blue: {
          100: "#E1E8F6",
        },
        red: {
          500: "#EE2A23",
        },
        yellow: {
          500: "#FFC232",
        },
      },
      screens: {
        xs: '480px'
      },
    },
  },
  plugins: [],
};