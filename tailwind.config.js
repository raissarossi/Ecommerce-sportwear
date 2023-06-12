/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'bglogin': "url('imgs/login/bglogin.png')",
      },
      screens: {
        'ssm': '440px',
        'sm': '640px',
        'sm1': '700px',
        'md': '768px',
        'md1': '830px',
        'lg': '1024px',
        'lg1': '1100px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        "blue1": "#2C60A0",
        "blue2": "#4C77AB",
        "grey1": "#fdfdfd",
        "grey2": '#656565'
      }
    },
  },
 
  plugins: [],
}
