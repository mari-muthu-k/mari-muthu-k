/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void:      '#00000a',
        deep:      '#000512',
        endurance: '#e8e6e1',
        amber:     '#d4a857',
        'amber-dim':'#a07830',
        nebula:    '#1a3a5c',
        ice:       '#7abcdc',
        'ice-bright':'#c0dcf5',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans:    ['Inter', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}