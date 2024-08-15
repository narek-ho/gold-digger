/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const themePlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    'flip-card': {
      'background-color': 'transparent',
      perspective: '1000px'
    },

    '.flip-card__inner': {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'all .5s ease',
      'transform-style': 'preserve-3d'
    },

    '.flip-card__side': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      'backface-visibility': 'hidden'
    },
    '.flip-card__back': {
      transform: 'rotateY(180deg)'
    },

    '.revealed.flip-card .flip-card__inner': {
      transform: 'rotateY(180deg)'
    }
  });
});

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-light-100': '#eae6ff',
        'theme-gold-100': '#c29d45',
        'theme-indigo-100': '#272749',
        'theme-indigo-200': '#2a2e53',
        'theme-indigo-300': '#363a58',
        'theme-teal-100': '#19ca9c',
        'theme-teal-200': '#24887c',
        'theme-teal-300': '#255863',
        'theme-dark-100': '#2a2a2a',
        'theme-dark-200': '#0f0f0f'
      }
    }
  },
  plugins: [themePlugin]
};
