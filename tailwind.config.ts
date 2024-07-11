import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03D69D",
        secondary: "#133A6F",
      },
    },
  },
  plugins: [],
};
export default config;
