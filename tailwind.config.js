/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        'sideBarWidth1': '684px',
        'listIconWidth': '300px',
        'onboardInputWidth': '250px',
      },
      height: {
        'listIconHeight': '300px',
        'onboardInputHeight': '50px',
      },
      colors:{
        'customYellow': '#FFF2C7',
        'inputBorderRed': '#E8CACA',
        'placeholderGray': '#5F5E5E',
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}