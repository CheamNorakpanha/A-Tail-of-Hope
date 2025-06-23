/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/flowbite-react/**/*.js", // for Flowbite React components
    "./node_modules/flowbite/**/*.js",        // for base Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
