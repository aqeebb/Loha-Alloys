/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1c4a30',
          dark: '#0f2e1c',
          light: '#e8f0ea',
        },
        gold: {
          DEFAULT: '#f2b705',
          dark: '#d9a400',
        },
        olive: '#7a8b3f',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
