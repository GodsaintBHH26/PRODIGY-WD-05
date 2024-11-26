/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "main.js"],
  theme: {
    extend: {
      height:{
        '128':"32rem",
      },
      width:{
        '128': "32rem",
      },
      inset:{
        '128':"32rem"
      },
      dropShadow:{
        'light-dark':"0px 0px 2px rgb(0, 0, 0, 30%)"
      },
      
    },
  },
  plugins: [],
}

