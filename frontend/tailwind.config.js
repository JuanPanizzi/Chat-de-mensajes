/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens:{
    //   'tiny': '373px'
    // },
    extend: {
      fontFamily: {
        custom: ["Quicksand", 'sans-serif']
      },
      colors: {
        'dark-1': '#202C33',
        'dark-2': '#2A3942',
        'dark-3': '#6a7175',
        'green-1': '#005C4B'
      },
    },
  },
  plugins: [],
}

