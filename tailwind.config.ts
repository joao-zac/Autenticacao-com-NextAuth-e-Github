import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        txtLghtBg: "#F6F6F6",
        txtDarkBtnBg: "#1E1E1E",
        txtMedium: "#5A5A5A",
        iconsColor: "#8B5CF6",
        lineColor: "#BFBFBF",
      }
    },
  },
  plugins: [],
};
export default config;
