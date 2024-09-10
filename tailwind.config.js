/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Hueso': ' #fcfcf4 ',
      },gridTemplateColumns: {
        // Simple 16 column grid
        'la': '20% auto  auto auto  ',
         'le': '22% 45% auto'
        // Complex site-specific column configuration
      
      },spacing: {
        '98%': '98%',
      }
    },
  },
  plugins: [],
}

