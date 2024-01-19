import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#DCF1E9',
          200: '#BBE4D4',
          300: '#9AD6BF',
          400: '#58BB95',
          500: '#37AE80',
          600: '#2E9A70',
          700: '#268661',
          800: '#1F7151',
          900: '#175B41'
        }
      }
    }
  },
  plugins: []
}
export default config
