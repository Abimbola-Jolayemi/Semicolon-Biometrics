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
        'listIconWidth': '250px',
        'onboardInputWidth': '250px',
      },
      height: {
        'listIconHeight': '250px',
        'onboardInputHeight': '50px',
      },
      colors:{
        'customYellow': '#FFF2C7',
        'inputBorderRed': '#E8CACA',
        'placeholderGray': '#5F5E5E',
        'deepGray': '#38516D',
        'paleOffWhite': '#FFFAF9',
        'semicolonRed': '#FF0000',
        'lightGray': '#B6B0B0',
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}