/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      
        'sm': {
          'min' : '320px',
          'max' : '767px'
        },
        'md': {
          'min': '768px',
          'max': '1023px'
        },
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      
      '3xl': '1600px',
      '2k': '2500px',
    },

  
    extend: {
      colors: {

        background: '#FAF5EF',
        foreground: '#F0E5D8',
        // Serbian Flag
        serbian: {
          red: '#BE1E2D',     // Strong Serbian red
          blue: '#002F6C',    // Deep Serbian blue
          white: '#FFFFFF',   // Standard white
        },
        // Neutral Backgrounds
        neutral: {
          bg: '#FAF5EF',      // Light cream background
          panel: '#F0E5D8',   // Warm wood panel background
          text: '#222222',    // Primary text
        },
        // Go Elements
        go: {
          blackStone: '#1B1B1B',
          whiteStone: '#F5F5F5',
          board: '#D7AD7B',   // Go board tone
          grid: '#3C3C3C',    // Go board line color
        },
      },
    },
  

  },
  plugins: [],
};
