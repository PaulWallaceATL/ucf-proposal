import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ucf-black": "#000000",
        "ucf-gold": "#FFC904",
        "ucf-gold-alt": "#FFCC00",
        "ucf-white": "#FFFFFF",
      },
      fontFamily: {
        "bebas-neue": ['"Bebas Neue"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
