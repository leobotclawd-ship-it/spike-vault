import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0d0d0d",
          secondary: "#1a1a1a",
          tertiary: "#242424",
        },
        gold: {
          50: "#fdf9ef",
          100: "#f9f0d4",
          200: "#f2dfa8",
          300: "#eac972",
          400: "#e2b040",
          500: "#d4982e",
          600: "#b87a22",
          700: "#995c1e",
          800: "#7d4a20",
          900: "#673d1e",
        },
        border: {
          DEFAULT: "#2a2a2a",
          light: "#3a3a3a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
