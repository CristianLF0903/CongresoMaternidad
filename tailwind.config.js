/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "950px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md2: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    letterSpacing: {
      double: "1rem",
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {},
  },
  plugins: [],
};
