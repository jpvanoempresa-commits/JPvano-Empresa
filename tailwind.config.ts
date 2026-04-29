import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#dbe8ff',
          200: '#b2d0ff',
          300: '#7aa8ff',
          400: '#4a82ff',
          500: '#2f5bff',
          600: '#2247db',
          700: '#1d3dab',
          800: '#162f7c',
          900: '#11255c'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
