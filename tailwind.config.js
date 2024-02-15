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
        
        // 위로 fade하며 생성하기
        showFadeUp: "fadeIn 0.5s forwards, btmUp 0.5s forwards",
        
        // 위로 fade하며 사라지기
        hideFadeUp: "fadeOut 0.5s forwards, midUp 0.5s forwards",

        // 아래로 fade하며 생성하기
        showFadeDown: "fadeIn 0.5s forwards, midUp 0.5s forwards reverse",

        // 아래로 fade하며 사라지기
        hideFadeDown: "fadeOut 0.5s forwards, btmUp 0.5s forwards reverse"
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
        },
        midUp: {
          '0%': { top: "0px" },
          '100%': { top: "-100px" }
        }
      }
    },
  },
  plugins: [],
}

