/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/Chat.js", "./src/Sidebar_Intro.js", "./src/Sidebar_education.js", "./src/Sidebar_Languages.js", "./src/Sidebar_References.js", "./src/Sidebar_Skills.js", "./src/Sidebar_Volunteering.js", "./src/Sidebar_Work.js", "./src/ContactOpt.js", "./src/ContactOptRef.js",  "./src/Loading.js", "./src/index.js", "./src/App.js", "./src/Feed.js", "./src/Header.js", "./src/Post.js", "./src/Sidebar.js", "./src/inputOption.js", "./src/HeaderOption.js"],
  theme: {
    extend: {
      colors: {
      'linkedin': '#1166C2',
      'linkedin2': '#054182',
      'biela': '#ffffff',
      'seda_ciara': '#D5D5D5',
      'show_skills': '#707070',
      },
    },
  },
  plugins: [require("daisyui")],
}