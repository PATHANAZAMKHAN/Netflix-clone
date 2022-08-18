/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {

        btn: {
          "DEFAULT": "#e50914",
          "light": "#db0510"
        },

        line: {
          "DEFAULT": "#222",
          "light": "#404040"
        },

        questions: {
          "DEFAULT": "#303030"
        },

        box: {
          "DEFAULT": "#aaaaaa"
        },

        questions:{
          "DEFAULT": "#303030"
        },

        footer:{
          "DEFAULT": "#999999"
        }
      },

      fontFamily: {
        netflix: "Helvetica,Arial,sans-serif;"
      },

    },
  },
  plugins: [],
}
