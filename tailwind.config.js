/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97C04',       // Main primary color (orange)
          light: '#FFA94D',         // Lighter version
          dark: '#C25F02',          // Darker version
        },
        secondary: {
          DEFAULT: '#08C3BE',       // Now secondary is the old primary (teal)
          light: '#43DBD6',
          dark: '#045D5B',
        },
        gray: {
          950: '#0F0F0F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #08C3BE 0%, #045D5B 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'scroll-x': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        'scroll-x': 'scroll-x 25s linear infinite',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.1)',
        outline: '0 0 0 2px rgba(249, 124, 4, 0.5)',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
