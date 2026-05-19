/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 12px rgba(56, 189, 248, 0.5)',
        danger: '0 0 16px rgba(239, 68, 68, 0.65)',
      },
      colors: {
        panel: '#0b1120',
      },
      keyframes: {
        flash: {
          '0%, 100%': { borderColor: 'rgba(239, 68, 68, 0.3)' },
          '50%': { borderColor: 'rgba(239, 68, 68, 1)' },
        },
      },
      animation: {
        flash: 'flash 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
