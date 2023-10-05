/** @type {import('tailwindcss').Config} */

const JIJUNA_PRIMARY = '#FFAA00'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      // // screens: {
      //   'lg': '1440px'
      // },
      padding: {
        DEFAULT: '24px',
        md: '36px',
        lg: '36px',
        xl: '36px',
        '2xl': '36px',
      },
    },
    extend: {
      // screens: {
      //   'sm': '640px',  // Personalizar el breakpoint para pantallas pequeñas
      //   'md': '768px',  // Personalizar el breakpoint para pantallas medianas
      //   'lg': '1024px', // Personalizar el breakpoint para pantallas grandes
      //   'xl': '1440px',
      //   '2xl': '1536px'
      // },
      colors: {
        'app-light': '#f8f9fa',
        'app-gray-light': '#f8f8f8',
        'jijuna-primary': JIJUNA_PRIMARY,
        'jijuna-black': '#161616'
      },
      backgroundColor: {
        'jijuna-primary-30': `rgba(255, 170, 0, 0.05)`
      }
    },
  },
  plugins: [],
}
