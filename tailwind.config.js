/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#add8e6',
        'deep-blue': '#0000cd',
      },
    },
  },
  plugins: [],
}

