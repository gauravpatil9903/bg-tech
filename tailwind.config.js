/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        poppins :["Poppins","sans-Config"],
      },
      colors:{
        primary: "#615C3D"
      },
      container:{
        center: true,
        padding:{
          default : "1rem",
          sm : "3rem",
        },
      }
    },
  },
  plugins: [],
}

