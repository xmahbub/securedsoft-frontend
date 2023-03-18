/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    //"./collections/UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black60': '#181622',
        'gradient1':'#3E354F',
        'gradient2':'#1D1A27',
        'gradient3':'#15151D',
        'greeenshadow':'#0C472B',
        'greentext':"#282634",
        'whitetext':'#EBEBEB',
        'novoblue':'#3B324B',
      },
      rotate: {
        '17': '17deg',
      },
      
      
    },
  },
  plugins: [],
  
}
