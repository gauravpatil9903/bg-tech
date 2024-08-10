/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables dark mode based on a class
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],
        // robotoSlab: ['Roboto Slab', 'serif'],
       
        // titlefont: ["Playfair Display", "serif"],
      },
      colors: {
        primary:   "#4D91A8",  //"#615C3D",
        navbarLight : "black" //#AAD7D9
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}
