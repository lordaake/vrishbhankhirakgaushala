/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float-delayed 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // other plugins can be added here
  ],
};