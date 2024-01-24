/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "Soft-red": "hsl(10, 79%, 65%)",
        "Cyan-color": "hsl(186, 34%, 60%)",
        "Dark-brown": "hsl(25, 47%, 15%)",
        "Medium-brown": "hsl(28, 10%, 53%)",
        "Cream-color": "hsl(27, 66%, 92%)",
        "Very-pale-orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
