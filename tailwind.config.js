/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'theme-light-1': '#eae6ff',
        'theme-gold-1': '#c29d45',
        'theme-indigo-1': '#272749',
        'theme-indigo-2': '#2a2e53',
        'theme-teal-1': '#19ca9c',
        'theme-teal-2': '#24887c',
        'theme-teal-3': '#255863',
        'theme-gray-1': '#2a2a2a',
        'theme-dark-1': '#0f0f0f'
      }
    }
  },
  plugins: []
};