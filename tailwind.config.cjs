/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chatgptDark: '#1e1e1e', // 👈 your background color
        cardDark: '#252525', // 👈 card background color
        borderDark: '#333', // 👈 border color
      },
    },
  },
  plugins: [],
}
