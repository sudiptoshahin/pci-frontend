import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkred": "#380010",
        "darkred2": "#7a0025",
      },
      fontFamily: {
        p_bold: ['pbold', 'sans-serif'],
      },
    },
    screens: {
      sm: "640px",  // Small devices (mobile)
      md: "768px",  // Medium devices (tablets)
      lg: "1024px", // Large devices (laptops)
      xl: "1280px", // Extra large devices (desktops)
      "2xl": "1536px", // Very large screens
    },
  },
  plugins: [],
};

export default config;
