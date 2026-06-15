import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
        },
        accent: {
          DEFAULT: '#22C55E',
          orange: '#EF4B21',
        },
        dark: {
          bg: '#0F172A',
          surface: '#1E293B',
        },
      },
    },
  },
  plugins: [],
};
export default config;
