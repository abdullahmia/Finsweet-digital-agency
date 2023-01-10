/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        desktop: "1200px",
      },
    },
    extend: {
      colors: {
        tintBlue: "#1C1E53",
        yellow: "#FCD980",
        darkBlue: "#282938",
        royalBlue: "#2405F2",
        accent: "#EEF4FA",
        grey: "#F4F6FC"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
}