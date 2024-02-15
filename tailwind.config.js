/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", 
            "./src/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'PCP': ["PCP-Bold"]
      },
      animation: {
        fadeIn: "fadeIn 0.5s forwards",
        fadeOut: "fadeOut 0.5s forwards",
        btmUp: "btmUp 1s forwards",
        fadeUp: "fadeIn,btmUp 0.5s forwards"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity:"0%" },
          '100%': { opacity:"80%" }
        },
        fadeOut: {
          '0%': { opacity:"80%" },
          '100%': { opacity:"0%" }
        },
        btmUp: {
          '0%': { top: "100px" },
          '100%': { top: "0px" }
        }

      }
    },
  },
  plugins: [],
}

