import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkred: "#380010",
        darkred2: "#7a0025",
      },
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        almarai: ["var(--font-almarai)", "sans-serif"],
      },
    },
    screens: {
      xxs: "375px",
      xs: "414px",
      "2sm": "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;