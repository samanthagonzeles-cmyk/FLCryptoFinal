/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF',
        'primary-dark': '#1e3a8a',
        'secondary': '#0369A1',
        'accent': '#DC2626',
      },
    },
  },
  plugins: [],
}
