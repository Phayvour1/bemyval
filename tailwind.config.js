/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['"Great Vibes"', 'cursive'],
        telma: ["Telma", "sans-serif"],
        boska: ["Boska", "sans-serif"],
        gambetta: ["Gambetta", "sans-serif"],
      },
     
      keyframes: {
        "pulse-border": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(255, 0, 0, 0.5)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 20px 10px rgba(255, 0, 0, 0.2)",
          },
        },
      },
     
      animation: {
        "pulse-border": "pulse-border 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
