/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#9A5911",
        yellow:"#FFEAAE",
        darkyellow:"#FCCA3F",
        orange:"",
      }
    },
  },
  plugins: [],
}