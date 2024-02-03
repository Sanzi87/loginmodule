import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        animatedBorder: {
          '0%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(360.0deg)' },
        },
      },
      animation: {
        animatedBorder: 'animatedBorder 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
