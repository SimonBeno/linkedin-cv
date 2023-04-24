/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Loading.js", "./src/index.js", "./src/App.js", "./src/Feed.js", "./src/Header.js", "./src/Post.js", "./src/Sidebar.js", "./src/inputOption.js", "./src/HeaderOption.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}