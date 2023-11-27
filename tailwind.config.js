/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Frank: ['Frank Ruhl Libre', 'serif',],
        Pod: ['Podkova', 'serif',],
        Pop: ['Poppins', 'sans-serif',],
      },
      borderRadius: {
        'btnRadius': '10px',
       
      },
      colors: {
        'secondaryColor': '#FDBB57',
        'parimaryColor': '#FAE3B6',
        'BBC': '#FFF',
        'cellerColor': '#CFA485',

      },
      padding: {
        'btnP': '108px',
        '102px': '102px',
      },
      fontSize: {
        'headingSize': '64px',
        'BPS': '22px',
      },
    },
  },
  
  plugins: [],
};

