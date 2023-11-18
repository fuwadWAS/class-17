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
        Podkova: ['Podkova', 'serif',],
        Poppins: ['Poppins', 'sans-serif',],
      },
    },
  },
  
  plugins: [],
};

