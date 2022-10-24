/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#375a9e",
        "white-color": "#fff",
        "black-color": "#3f3f3f",
        "gray-1": "#ced4da",
        "gray-2": "#e6f2fd",
        "gray-5": "#efefef",
        "background-color": "#f6f6f6",
        "secondary-color": "#9dc34a",
        "tertiary-color": "#ff5a60",
        "form-background": "#efefef",
        "text-danger": "#f07777",
        "font-color": "#000",
        "separator-color": "#c7c7c7",
        "body-padding": "0 64px",
        "section-padding": "64px",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      width: {
        "2px": "2px",
        "9/10": "90%",
      },
      screens: {
        "semi-lg": "900px",
      },
    },
  },
  plugins: [],
};
