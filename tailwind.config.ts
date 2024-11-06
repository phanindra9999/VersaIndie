import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      hg: { min: "1921px" },
      xgg: { max: "1920px" },
      gg: { max: "1739px" },
      xxl: { max: "1535px" },
      xl: { max: "1279px" },		
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
      xxs: { max: "364px" },
    },
    extend: {
      colors: {
        "green-1": "#FFFFFF",
        "green-2": "#ACD1FB",
        "green-3": "#004E92",
        "green-4": "#C193C5",
        "green-5": "#43597D",
        "green-6": "#98B899",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sansita: ["Sansita", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config
