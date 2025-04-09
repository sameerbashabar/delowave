import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        accent: '#FF2D55',
        background: '#F2F2F7',
        text: '#1C1C1E',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 