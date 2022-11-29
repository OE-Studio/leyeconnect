/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'campton': ["Campton"],
        'inter': ["Inter"],
      },

      colors:{
        "dark-500": "#1e1e1e",
        "dark-400": "#212121",
        "dark-300": "#292929",
        "dark-200": "#3a3a3a",
        "dark-150": "#848484",
        "dark-100": "#9e9e9e",
        "dark-50": "#c1c1c1",
        "light-500": "#1e1e1e",
        "light-400": "#212121",
        "light-300": "#292929",
        "light-200": "#3a3a3a",
        "light-150": "#848484",
        "light-100": "#9e9e9e",
        "light-50": "#c1c1c1",
        "green-500": "#35ad72",
        "green-400": "#5dbd8e",
        "green-300": "#86ceaa",
        "green-200": "#aedec7",
        "green-100": "#d7efe3",
        "blue-500": "#4d74ff",
        "blue-400": "#7190ff",
        "blue-300": "#94acff",
        "blue-200": "#b8c7ff",
        "blue-100": "#dbe3ff",
        "purple-500": "#9747FF",
        "purple-400": "#ac6cff",
        "purple-300": "#c191ff",
        "purple-200": "#d5b5ff",
        "purple-100": "#eadaff",
        "orange-500": "#e76e3b",
        "orange-400": "#ec8b62",
        "orange-300": "#f1a889",
        "orange-200": "#f5c5b1",
        "orange-100": "#fae2d8", 
      }
    },
  },
  plugins: [],
}
