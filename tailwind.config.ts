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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'bounce-medium': 'bounce 1.5s infinite',
        'bounce-fast': 'bounce 1s infinite',
        'alert': 'alert 1s',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
        alert: {
          '0%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
