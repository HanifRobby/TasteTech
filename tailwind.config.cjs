/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary1' : '#EC9F05',
        'primary2' : '#BF3100',
        'body' : '#D76A03',
        'white': '#ffffff',
        'black': '#000000',
        'light-green': '#74B92E', // 
        'dark-green': '#499755', //
        'beige': '#F4D6B3', //
        'beige2': '#F9EAD9' //
      },
    },
    animation: {
      slowfade: 'slowfade 2s ease-in-out',
    },
    keyframes: {
      slowfade: {
        '0%': { opacity: 0},
        '50%': { opacity: 1},
        '100%': { opacity: 0},
      },
    },
  },
  plugins: [],
}
