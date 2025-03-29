/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f2ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc3ff',
          400: '#1ab2ff',
          500: '#0099e6',
          600: '#0077b3',
          700: '#005580',
          800: '#00334d',
          900: '#001a26',
        },
        secondary: {
          50: '#f0f4ff',
          100: '#d9e2ff',
          200: '#b3c6ff',
          300: '#8daaff',
          400: '#668dff',
          500: '#4d73e6',
          600: '#3a59b3',
          700: '#283f80',
          800: '#16264d',
          900: '#0b1326',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(77, 115, 230, 0.5)',
        'glow-lg': '0 0 25px rgba(77, 115, 230, 0.6)',
        'glow-teal': '0 0 15px rgba(45, 212, 191, 0.5)',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}