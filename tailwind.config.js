/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7848F4',
        backgroundGrey: '#F8F8FA',
        navyBlue: '#10107B',
        grey600: '#7E7E7E',
      },
      screens: {
        lg: '992px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}
