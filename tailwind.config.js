module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "blue-royal": "#4B69FD",
      "white-cream": "#FFF9EB",
      orange: "#FE652B",
      white: "#FFFFFF",
    },

    extend: {
      width: {
        726: "726px",
      },
    },
    borderRadius: {
      "64px": "64px",
      "37px": "37px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
