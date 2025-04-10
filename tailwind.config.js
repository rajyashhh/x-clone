// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          xWhite: '#e7e9ea',
          xBlue: '#1c9bef',
          xLightGrey: '#333639',
          xDarkGrey: '#16181c'
            
        },
      },
    },
  }