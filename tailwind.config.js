/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-light-100': '#eae6ff',
        'theme-gold-100': '#c29d45',
        'theme-indigo-100': '#272749',
        'theme-indigo-200': '#2a2e53',
        'theme-teal-100': '#19ca9c',
        'theme-teal-200': '#24887c',
        'theme-teal-300': '#255863',
        'theme-gray-100': '#2a2a2a',
        'theme-dark-100': '#0f0f0f'
      }
    }
  },
  plugins: []
};
